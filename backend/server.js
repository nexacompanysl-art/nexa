const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const Database = require("better-sqlite3");
const fs = require("fs");
const { Resend } = require("resend");
require("dotenv").config();

// ── Email ────────────────────────────────────────────────────────
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function sendNotification(lead) {
  const notify = process.env.NOTIFY_EMAIL || "nexacompanysl@gmail.com";
  const html = `
    <h2 style="font-family:sans-serif;color:#1a1a2e">Nuevo lead recibido</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif">
      <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc">Nombre</td><td style="padding:10px;border:1px solid #e2e8f0">${lead.name}</td></tr>
      <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc">Email</td><td style="padding:10px;border:1px solid #e2e8f0">${lead.email}</td></tr>
      <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc">Empresa</td><td style="padding:10px;border:1px solid #e2e8f0">${lead.company || "-"}</td></tr>
      <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc">Mensaje</td><td style="padding:10px;border:1px solid #e2e8f0">${lead.message || "-"}</td></tr>
      <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc">Fecha</td><td style="padding:10px;border:1px solid #e2e8f0">${new Date().toLocaleString("es-ES")}</td></tr>
    </table>`;

  if (resend) {
    resend.emails.send({
      from: "Nexa <onboarding@resend.dev>",
      to: notify,
      subject: `Nuevo lead: ${lead.name} - ${lead.email}`,
      html,
    }).then(() => console.log(`[EMAIL] Notificación enviada`))
      .catch((err) => console.error("[EMAIL_ERROR]", err.message));
  } else {
    console.log("[EMAIL] Resend no configurado. Lead guardado en DB.");
  }
}

// ── Database setup ──────────────────────────────────────────────
const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(process.env.DATABASE_URL || path.join(DATA_DIR, "nexa.db"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT DEFAULT '',
    message TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS cookie_consents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    consent INTEGER NOT NULL,
    ip TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS ip_attempts (
    ip TEXT PRIMARY KEY,
    count INTEGER DEFAULT 1,
    last_attempt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Migrate: add ip column to leads if missing
try { db.prepare("ALTER TABLE leads ADD COLUMN ip TEXT DEFAULT ''").run(); } catch (_) {}

// ── Express app ─────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 3001;

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
    },
  },
}));

app.set("trust proxy", 1);
app.use(cors({ origin: process.env.CORS_ORIGIN || "*", methods: ["GET", "POST", "OPTIONS"] }));
app.use(express.json({ limit: "10kb" }));

// Serve static files from parent (frontend)
app.use(express.static(path.join(__dirname, "..")));

// ── Request timeout ─────────────────────────────────────────────
app.use((req, res, next) => {
  req.setTimeout(10000, () => {
    res.status(408).json({ error: "Tiempo de espera agotado." });
  });
  next();
});

// ── Origin / Referer validation ─────────────────────────────────
const ALLOWED_ORIGINS = ["http://localhost:3001", "http://localhost", process.env.CORS_ORIGIN].filter(Boolean);

app.use("/api/", (req, res, next) => {
  const origin = req.get("origin");
  const referer = req.get("referer");
  if (req.method === "POST") {
    const source = origin || referer || "";
    const allowed = ALLOWED_ORIGINS.some((o) => source.startsWith(o));
    if (!allowed && process.env.NODE_ENV === "production") {
      return res.status(403).json({ error: "Origen no permitido." });
    }
  }
  next();
});

// ── Rate limiters ──────────────────────────────────────────────
const leadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 4,
  message: { error: "Demasiadas solicitudes. Intenta en 1 minuto." },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Demasiadas solicitudes." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/", authLimiter);

// ── Brute force protection per IP ───────────────────────────────
const MAX_ATTEMPTS = 10;
const BAN_WINDOW_MS = 15 * 60 * 1000;

function checkIP(req, res, next) {
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  const row = db.prepare("SELECT count, last_attempt FROM ip_attempts WHERE ip = ?").get(ip);
  if (row) {
    const elapsed = Date.now() - new Date(row.last_attempt).getTime();
    if (elapsed < BAN_WINDOW_MS && row.count >= MAX_ATTEMPTS) {
      return res.status(429).json({ error: "Demasiados intentos. Intenta más tarde." });
    }
    if (elapsed >= BAN_WINDOW_MS) {
      db.prepare("DELETE FROM ip_attempts WHERE ip = ?").run(ip);
    }
  }
  next();
}

function recordAttempt(req) {
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  db.prepare(
    "INSERT INTO ip_attempts (ip, count, last_attempt) VALUES (?, 1, CURRENT_TIMESTAMP) ON CONFLICT(ip) DO UPDATE SET count = count + 1, last_attempt = CURRENT_TIMESTAMP"
  ).run(ip);
}

function clearAttempts(req) {
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  db.prepare("DELETE FROM ip_attempts WHERE ip = ?").run(ip);
}

// ── Helpers ────────────────────────────────────────────────────
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function isValidEmail(email) {
  return /^[^\s@<>()\[\]\\,;:]+@[^\s@<>()\[\]\\,;:]+\.[a-zA-Z]{2,}$/.test(email);
}

function isLikelySpam(text) {
  if (!text) return false;
  const patterns = [
    /<a\s+href/i, /\[url=/i, /https?:\/\/[^\s]+/i,
    /send\s+bitcoin/i, /buy\s+now/i, /click\s+here/i,
    /sex/i, /casino/i, /viagra/i,
  ];
  return patterns.some((p) => p.test(text));
}

// ── API routes ─────────────────────────────────────────────────

// Health
app.get("/api/health", (req, res) => {
  const leadCount = db.prepare("SELECT COUNT(*) as count FROM leads").get();
  const cookieCount = db.prepare("SELECT COUNT(*) as count FROM cookie_consents").get();
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    db: { leads: leadCount.count, cookieConsents: cookieCount.count },
  });
});

// Leads
app.post("/api/leads", leadLimiter, checkIP, (req, res) => {
  try {
    const { name, email, company, message, _hp } = req.body;

    // Honeypot: bots fill hidden fields
    if (_hp) {
      recordAttempt(req);
      return res.status(400).json({ error: "Solicitud inválida." });
    }

    if (!name || !email) {
      recordAttempt(req);
      return res.status(400).json({ error: "Nombre y email son obligatorios." });
    }

    const cleaned = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: (company || "").trim(),
      message: (message || "").trim(),
    };

    // Length limits
    if (cleaned.name.length < 2 || cleaned.name.length > 100) {
      recordAttempt(req);
      return res.status(400).json({ error: "Nombre inválido (2-100 caracteres)." });
    }
    if (!isValidEmail(cleaned.email)) {
      recordAttempt(req);
      return res.status(400).json({ error: "Email inválido." });
    }
    if (cleaned.message.length > 2000) {
      recordAttempt(req);
      return res.status(400).json({ error: "Mensaje demasiado largo." });
    }
    if (cleaned.company.length > 200) {
      recordAttempt(req);
      return res.status(400).json({ error: "Empresa demasiado larga." });
    }

    // Spam check
    if (isLikelySpam(cleaned.message) || isLikelySpam(cleaned.company)) {
      recordAttempt(req);
      return res.status(400).json({ error: "Contenido no permitido." });
    }

    const ip = req.ip || req.headers["x-forwarded-for"] || "";

    const stmt = db.prepare("INSERT INTO leads (name, email, company, message, ip) VALUES (?, ?, ?, ?, ?)");
    const result = stmt.run(
      sanitize(cleaned.name), sanitize(cleaned.email),
      sanitize(cleaned.company), sanitize(cleaned.message), ip
    );

    console.log(`[LEAD] id=${result.lastInsertRowid} email=${cleaned.email}`);

    clearAttempts(req);

    sendNotification({
      name: sanitize(cleaned.name), email: sanitize(cleaned.email),
      company: sanitize(cleaned.company), message: sanitize(cleaned.message),
    });

    res.json({ message: "Recibido. Te contactaremos en menos de 24h." });
  } catch (err) {
    console.error("[LEAD_ERROR]", err);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Cookie consent
app.post("/api/cookies", (req, res) => {
  try {
    const { consent } = req.body;
    if (typeof consent !== "boolean") {
      return res.status(400).json({ error: "consent debe ser true o false." });
    }

    const ip = req.ip || req.headers["x-forwarded-for"] || null;
    const ua = req.headers["user-agent"] || null;

    const stmt = db.prepare("INSERT INTO cookie_consents (consent, ip, user_agent) VALUES (?, ?, ?)");
    const result = stmt.run(consent ? 1 : 0, ip, ua);

    console.log(`[COOKIE] id=${result.lastInsertRowid} consent=${consent}`);

    res
      .cookie("cookie_consent", consent ? "1" : "0", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 365 * 24 * 60 * 60 * 1000,
        path: "/",
      })
      .json({ message: "Preferencia guardada." });
  } catch (err) {
    console.error("[COOKIE_ERROR]", err);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// ── Strip /nexa/ prefix for dev parity ──────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith("/nexa")) {
    req.url = req.url.replace("/nexa", "");
  }
  next();
});

// ── SPA fallback ───────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

const pages = {
  "/about": "about.html",
  "/blog": "blog.html",
  "/blog1.html": "blog1.html",
  "/blog2.html": "blog2.html",
  "/contact": "contact.html"
};
app.get(Object.keys(pages), (req, res, next) => {
  const page = pages[req.path];
  if (page) res.sendFile(path.join(__dirname, "..", page));
  else next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// ── Start ──────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✓ Nexa backend running at http://localhost:${PORT}`);
  console.log(`  API: http://localhost:${PORT}/api/health`);
});
