export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { message } = await request.json();
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `Eres "Nex", el asistente virtual oficial de Nexa, empresa líder en automatización de procesos con inteligencia artificial. Responde preguntas sobre servicios, planes y valores de Nexa.

INFORMACIÓN DE NEXA:
- Servicios: Agentes de atención al cliente 24/7, automatización de procesos, análisis predictivo, generación de contenido, extracción de datos, seguridad y cumplimiento.
- Planes: Starter (99€/mes), Professional (249€/mes, más popular), Enterprise (499€/mes).
- Tecnología: GPT-4, Claude, Gemini, integración sin código con 200+ herramientas, 50+ idiomas.
- Contacto: WhatsApp +34 671 17 20 00 | Madrid, ES.

REGLAS:
1. Responde en el MISMO IDIOMA del usuario (español, inglés o portugués).
2. Sé profesional, amable y entusiasta.
3. Recomienda el plan Professional como el más popular.
4. Sé conciso (máximo 2-3 párrafos).`;

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: systemPrompt + '\n\n' + message }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
        }),
      });

      const data = await res.json();
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return new Response(JSON.stringify({ reply: data.candidates[0].content.parts[0].text }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      let fallback = 'Actualmente estoy en pausa técnica. Escríbenos por WhatsApp al +34 671 17 20 00 o usa el formulario de contacto y te atenderemos en minutos.';
      if (data?.error?.code === 429) {
        fallback = '¡Hola! La inteligencia artificial de Nexa estará disponible en breve. Mientras tanto, puedes contactarnos por WhatsApp al +34 671 17 20 00 o mediante el formulario de contacto. ¿Te ayudamos en algo concreto?';
      }
      return new Response(JSON.stringify({ reply: fallback }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ reply: 'Actualmente estoy en pausa técnica. Escríbenos por WhatsApp al +34 671 17 20 00 o usa el formulario de contacto.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
