const translations = {
  es: {
    navServicios: 'Servicios', navPlanning: 'Planes', navNosotros: 'Nosotros', navContacto: 'Contacto', navCta: 'Empezar',
    heroBadge: 'IA para empresas exigentes',
    heroTitle: 'El software que trabaja<br>mientras t\u00fa duermes',
    heroDesc: 'Agentes de inteligencia artificial aut\u00f3nomos integrados en tu WhatsApp y CRM. Respuestas en 1 segundo, cero errores y disponibilidad 24/7.',
    heroCta: 'Agenda tu llamada \u2192', heroSecondary: 'Ver servicios',
    waStatus: 'En l\u00ednea',
    waUserMsg: 'Hola, \u00bftienen disponibilidad para agendar una consultor\u00eda ma\u00f1ana por la tarde?',
    waAiMsg: '\u00a1Hola! S\u00ed, tengo huecos a las 16:00 y a las 18:30. \u00bfCu\u00e1l de los dos prefieres que te reserve en el calendario?',
    waTime: 'Respondido al instante por IA',
    servBadge: 'Nuestros Servicios', servTitle: 'Automatizamos tu negocio con IA', servDesc: 'Soluciones dise\u00f1adas para empresas que buscan eficiencia, rapidez y resultados medibles.',
    card1Title: 'Agente WhatsApp IA', card1Desc: 'Atenci\u00f3n al cliente automatizada 24/7. Responde consultas, agenda citas y califica leads sin intervenci\u00f3n humana.',
    card2Title: 'CRM Inteligente', card2Desc: 'Integraci\u00f3n con tu CRM existente para sincronizar contactos, historial de conversaciones y an\u00e1lisis de datos en tiempo real.',
    card3Title: 'Automatizaci\u00f3n de Procesos', card3Desc: 'Workflows personalizados que eliminan tareas repetitivas: facturaci\u00f3n, recordatorios, seguimiento de clientes y m\u00e1s.',
    card4Title: 'Anal\u00edtica y Reportes', card4Desc: 'Dashboard con m\u00e9tricas clave de tu negocio: conversiones, tiempos de respuesta, satisfacci\u00f3n del cliente y ROI.',
    aboutBadge: 'Qui\u00e9nes Somos', aboutTitle: 'Transformamos empresas con tecnolog\u00eda', aboutDesc: 'Somos un equipo apasionado por la inteligencia artificial y su poder para revolucionar la forma de hacer negocios.',
    aboutP1: 'Soy Guillermo, fundador de esta iniciativa. Con 19 a\u00f1os y una formaci\u00f3n t\u00e9cnica especializada, me dedico a explorar c\u00f3mo la IA puede resolver problemas reales de negocio de forma eficiente y personalizada. Mi enfoque no se basa en procesos estandarizados, sino en entender la necesidad espec\u00edfica de cada cliente para implementar soluciones que realmente marquen una diferencia en su d\u00eda a d\u00eda.',
    aboutP2: 'Aunque mi trayectoria es joven, mi compromiso con el aprendizaje continuo y mi pasi\u00f3n por la tecnolog\u00eda me permiten ofrecer un acompa\u00f1amiento cercano y \u00e1gil. Estoy aqu\u00ed para ayudar a quienes buscan integrar la IA en sus operaciones, eliminando las barreras t\u00e9cnicas y construyendo el futuro del trabajo, un proyecto a la vez.',
    statClients: 'Enfoque Personalizado', statChats: 'Estrategias a medida', statSatisfaction: 'Compromiso de entrega',
    contactBadge: 'Contacto', contactTitle: 'Hablemos de tu proyecto', contactDesc: 'Cu\u00e9ntanos en qu\u00e9 podemos ayudarte y te responderemos en menos de 24 horas.',
    formName: 'Nombre completo', formNamePlace: 'Tu nombre',
    formEmail: 'Correo electr\u00f3nico', formEmailPlace: 'tu@correo.com',
    formCompany: 'Empresa', formCompanyPlace: 'Nombre de tu empresa',
    formMsg: 'Mensaje', formMsgPlace: 'Cu\u00e9ntanos sobre tu proyecto...',
    formSubmit: 'Enviar mensaje \u2192',
    successTitle: 'Envío realizado con éxito',
    errorMsg: 'Error al enviar. Inténtalo de nuevo.',
    contactLocationLabel: 'Ubicaci\u00f3n', contactLocationVal: 'Comunidad de Madrid, ES',
    contactHoursLabel: 'Horario', contactHoursVal: 'Lun \u2013 Vie, 9:00 \u2013 18:00',
    footerTagline: 'Inteligencia artificial para empresas que quieren crecer.',
    footerSections: 'Secciones', footerContact: 'Contacto', footerLegal: 'Legal',
    footerPrivacy: 'Privacidad', footerTerms: 'T\u00e9rminos',
    footerBottom: '\u00a9 {year} Nexa. Todos los derechos reservados.',
    cookieText: 'Usamos cookies propias y de terceros para mejorar tu experiencia en nuestra web. Al aceptar, autorizas su uso.',
    cookieAccept: 'Aceptar',
    cookieMore: 'M\u00e1s informaci\u00f3n',
    planBadge: 'Planes', planTitle: 'Inversi\u00f3n clara, sin sorpresas', planDesc: 'Elige el plan que mejor se adapte a tu negocio. Todos incluyen soporte t\u00e9cnico y activaci\u00f3n en 48 horas.',
    plan1Title: 'Starter', plan1Sub: 'Para negocios que dan su primer paso con IA', plan1Desc: 'Automatizaci\u00f3n esencial para empezar.',
    plan1F1: '1 Agente WhatsApp IA (Preguntas Frecuentes y Horarios)', plan1F2: 'Configuraci\u00f3n inicial y despliegue r\u00e1pido', plan1F3: 'Automatizaci\u00f3n de respuestas autom\u00e1ticas', plan1F4: 'Soporte por email durante los primeros 30 d\u00edas',
    plan2Title: 'Professional', plan2Sub: 'Automatizaci\u00f3n integral para optimizar tu tiempo', plan2Desc: 'Soluci\u00f3n completa para equipos en crecimiento.',
    plan2F1: 'Agente IA avanzado (WhatsApp + Web)', plan2F2: 'Integraci\u00f3n b\u00e1sica con CRM o bases de datos (Google Sheets, Notion, etc.)', plan2F3: 'Automatizaci\u00f3n de un proceso clave (ej: captura de leads o reservas)', plan2F4: 'Soporte prioritario y optimizaci\u00f3n tras el lanzamiento',
    plan3Title: 'A medida', plan3Sub: 'Soluciones personalizadas e integraciones complejas', plan3Desc: 'Todo lo que necesites, sin l\u00edmites.',
    plan3F1: 'Agentes de IA ilimitados o flujos complejos', plan3F2: 'Conexi\u00f3n con APIs dedicadas y sistemas propietarios', plan3F3: 'Automatizaci\u00f3n avanzada de procesos internos de la empresa', plan3F4: 'Soporte y consultor\u00eda directa uno a uno',
    planCta: 'Empezar', planPopular: 'M\u00e1s popular', plan3Price: 'Consultar'
  },
  pt: {
    navServicios: 'Servi\u00e7os', navPlanning: 'Planos', navNosotros: 'N\u00f3s', navContacto: 'Contato', navCta: 'Come\u00e7ar',
    heroBadge: 'IA para empresas exigentes',
    heroTitle: 'O software que trabalha<br>enquanto voc\u00ea dorme',
    heroDesc: 'Agentes de intelig\u00eancia artificial aut\u00f4nomos integrados ao seu WhatsApp e CRM. Respostas em 1 segundo, zero erros e disponibilidade 24/7.',
    heroCta: 'Agende sua chamada \u2192', heroSecondary: 'Ver servi\u00e7os',
    waStatus: 'Online',
    waUserMsg: 'Ol\u00e1, voc\u00eas t\u00eam disponibilidade para agendar uma consultoria amanh\u00e3 \u00e0 tarde?',
    waAiMsg: 'Ol\u00e1! Sim, tenho hor\u00e1rios \u00e0s 16:00 e \u00e0s 18:30. Qual dos dois voc\u00ea prefere que eu reserve no calend\u00e1rio?',
    waTime: 'Respondido instantaneamente por IA',
    servBadge: 'Nossos Servi\u00e7os', servTitle: 'Automatizamos seu neg\u00f3cio com IA', servDesc: 'Solu\u00e7\u00f5es projetadas para empresas que buscam efici\u00eancia, rapidez e resultados mensur\u00e1veis.',
    card1Title: 'Agente WhatsApp IA', card1Desc: 'Atendimento ao cliente automatizado 24/7. Responde d\u00favidas, agenda compromissos e qualifica leads sem interven\u00e7\u00e3o humana.',
    card2Title: 'CRM Inteligente', card2Desc: 'Integra\u00e7\u00e3o com seu CRM existente para sincronizar contatos, hist\u00f3rico de conversas e an\u00e1lise de dados em tempo real.',
    card3Title: 'Automa\u00e7\u00e3o de Processos', card3Desc: 'Fluxos de trabalho personalizados que eliminam tarefas repetitivas: faturamento, lembretes, acompanhamento de clientes e mais.',
    card4Title: 'Anal\u00edtica e Relat\u00f3rios', card4Desc: 'Painel com m\u00e9tricas-chave do seu neg\u00f3cio: convers\u00f5es, tempos de resposta, satisfa\u00e7\u00e3o do cliente e ROI.',
    aboutBadge: 'Quem Somos', aboutTitle: 'Transformamos empresas com tecnologia', aboutDesc: 'Somos uma equipe apaixonada pela intelig\u00eancia artificial e seu poder de revolucionar a forma de fazer neg\u00f3cios.',
    aboutP1: 'Sou Guillermo, fundador desta iniciativa. Com 19 anos e forma\u00e7\u00e3o t\u00e9cnica especializada, dedico-me a explorar como a IA pode resolver problemas reais de neg\u00f3cio de forma eficiente e personalizada. Meu foco n\u00e3o est\u00e1 em processos padronizados, mas em entender a necessidade espec\u00edfica de cada cliente para implementar solu\u00e7\u00f5es que realmente fa\u00e7am a diferen\u00e7a no dia a dia.',
    aboutP2: 'Embora minha trajet\u00f3ria seja jovem, meu compromisso com o aprendizado cont\u00ednuo e minha paix\u00e3o pela tecnologia me permitem oferecer um acompanhamento pr\u00f3ximo e \u00e1gil. Estou aqui para ajudar quem busca integrar a IA em suas opera\u00e7\u00f5es, eliminando as barreiras t\u00e9cnicas e construindo o futuro do trabalho, um projeto de cada vez.',
    statClients: 'Foco Personalizado', statChats: 'Estrat\u00e9gias sob medida', statSatisfaction: 'Compromisso de entrega',
    contactBadge: 'Contato', contactTitle: 'Fale sobre seu projeto', contactDesc: 'Conte-nos como podemos ajud\u00e1-lo e responderemos em menos de 24 horas.',
    formName: 'Nome completo', formNamePlace: 'Seu nome',
    formEmail: 'E-mail', formEmailPlace: 'seu@email.com',
    formCompany: 'Empresa', formCompanyPlace: 'Nome da sua empresa',
    formMsg: 'Mensagem', formMsgPlace: 'Conte-nos sobre seu projeto...',
    formSubmit: 'Enviar mensagem \u2192',
    successTitle: 'Envio realizado com sucesso',
    errorMsg: 'Erro ao enviar. Tente novamente.',
    contactLocationLabel: 'Localiza\u00e7\u00e3o', contactLocationVal: 'Comunidade de Madrid, ES',
    contactHoursLabel: 'Hor\u00e1rio', contactHoursVal: 'Seg \u2013 Sex, 9:00 \u2013 18:00',
    footerTagline: 'Intelig\u00eancia artificial para empresas que querem crescer.',
    footerSections: 'Se\u00e7\u00f5es', footerContact: 'Contato', footerLegal: 'Legal',
    footerPrivacy: 'Privacidade', footerTerms: 'Termos',
    footerBottom: '\u00a9 {year} Nexa. Todos os direitos reservados.',
    cookieText: 'Usamos cookies pr\u00f3prios e de terceiros para melhorar sua experi\u00eancia em nosso site. Ao aceitar, voc\u00ea autoriza seu uso.',
    cookieAccept: 'Aceitar',
    cookieMore: 'Mais informa\u00e7\u00f5es',
    planBadge: 'Planos', planTitle: 'Investimento claro, sem surpresas', planDesc: 'Escolha o plano ideal para seu neg\u00f3cio. Todos incluem suporte t\u00e9cnico e ativa\u00e7\u00e3o em 48 horas.',
    plan1Title: 'Starter', plan1Sub: 'Para neg\u00f3cios que d\u00e3o o primeiro passo com IA', plan1Desc: 'Automa\u00e7\u00e3o essencial para come\u00e7ar.',
    plan1F1: '1 Agente WhatsApp IA (Perguntas Frequentes e Hor\u00e1rios)', plan1F2: 'Configura\u00e7\u00e3o inicial e implanta\u00e7\u00e3o r\u00e1pida', plan1F3: 'Automa\u00e7\u00e3o de respostas autom\u00e1ticas', plan1F4: 'Suporte por e-mail durante os primeiros 30 dias',
    plan2Title: 'Professional', plan2Sub: 'Automa\u00e7\u00e3o integral para otimizar seu tempo', plan2Desc: 'Solu\u00e7\u00e3o completa para equipes em crescimento.',
    plan2F1: 'Agente IA avan\u00e7ado (WhatsApp + Web)', plan2F2: 'Integra\u00e7\u00e3o b\u00e1sica com CRM ou bases de dados (Google Sheets, Notion, etc.)', plan2F3: 'Automa\u00e7\u00e3o de um processo-chave (ex: captura de leads ou reservas)', plan2F4: 'Suporte priorit\u00e1rio e otimiza\u00e7\u00e3o ap\u00f3s o lan\u00e7amento',
    plan3Title: 'Sob medida', plan3Sub: 'Solu\u00e7\u00f5es personalizadas e integra\u00e7\u00f5es complexas', plan3Desc: 'Tudo o que voc\u00ea precisar, sem limites.',
    plan3F1: 'Agentes de IA ilimitados ou fluxos complexos', plan3F2: 'Conex\u00e3o com APIs dedicadas e sistemas propriet\u00e1rios', plan3F3: 'Automa\u00e7\u00e3o avan\u00e7ada de processos internos da empresa', plan3F4: 'Suporte e consultoria direta um a um',
    planCta: 'Come\u00e7ar', planPopular: 'Mais popular', plan3Price: 'Consultar'
  },
  en: {
    navServicios: 'Services', navPlanning: 'Plans', navNosotros: 'About Us', navContacto: 'Contact', navCta: 'Get Started',
    heroBadge: 'AI for demanding companies',
    heroTitle: 'Software that works<br>while you sleep',
    heroDesc: 'Autonomous artificial intelligence agents integrated into your WhatsApp and CRM. Responses in 1 second, zero errors, and 24/7 availability.',
    heroCta: 'Book your call \u2192', heroSecondary: 'View services',
    waStatus: 'Online',
    waUserMsg: 'Hi, do you have availability to schedule a consultation tomorrow afternoon?',
    waAiMsg: 'Hello! Yes, I have slots at 4:00 PM and 6:30 PM. Which one would you like me to book on the calendar?',
    waTime: 'Instant reply by AI',
    servBadge: 'Our Services', servTitle: 'Automate your business with AI', servDesc: 'Solutions designed for companies seeking efficiency, speed, and measurable results.',
    card1Title: 'WhatsApp AI Agent', card1Desc: 'Automated customer service 24/7. Answers inquiries, schedules appointments, and qualifies leads without human intervention.',
    card2Title: 'Smart CRM', card2Desc: 'Integration with your existing CRM to sync contacts, conversation history, and real-time data analysis.',
    card3Title: 'Process Automation', card3Desc: 'Custom workflows that eliminate repetitive tasks: invoicing, reminders, client follow-ups, and more.',
    card4Title: 'Analytics & Reports', card4Desc: 'Dashboard with key business metrics: conversions, response times, customer satisfaction, and ROI.',
    aboutBadge: 'About Us', aboutTitle: 'We transform companies with technology', aboutDesc: 'We are a team passionate about artificial intelligence and its power to revolutionize the way business is done.',
    aboutP1: 'I\'m Guillermo, founder of this initiative. At 19 years old with specialized technical training, I dedicate myself to exploring how AI can solve real business problems efficiently and personally. My approach is not based on standardized processes, but on understanding each client\'s specific needs to implement solutions that truly make a difference in their day-to-day.',
    aboutP2: 'Although my career is young, my commitment to continuous learning and my passion for technology allow me to offer close and agile support. I\'m here to help those looking to integrate AI into their operations, removing technical barriers and building the future of work, one project at a time.',
    statClients: '100% Personalized Approach', statChats: 'Tailored Strategies', statSatisfaction: 'Delivery Commitment',
    contactBadge: 'Contact', contactTitle: 'Let\'s talk about your project', contactDesc: 'Tell us how we can help you and we\'ll respond within 24 hours.',
    formName: 'Full name', formNamePlace: 'Your name',
    formEmail: 'Email', formEmailPlace: 'your@email.com',
    formCompany: 'Company', formCompanyPlace: 'Your company name',
    formMsg: 'Message', formMsgPlace: 'Tell us about your project...',
    formSubmit: 'Send message \u2192',
    successTitle: 'Sent successfully',
    errorMsg: 'Error sending. Try again.',
    contactLocationLabel: 'Location', contactLocationVal: 'Community of Madrid, ES',
    contactHoursLabel: 'Hours', contactHoursVal: 'Mon \u2013 Fri, 9:00 AM \u2013 6:00 PM',
    footerTagline: 'Artificial intelligence for companies that want to grow.',
    footerSections: 'Sections', footerContact: 'Contact', footerLegal: 'Legal',
    footerPrivacy: 'Privacy', footerTerms: 'Terms',
    footerBottom: '\u00a9 {year} Nexa. All rights reserved.',
    cookieText: 'We use own and third-party cookies to improve your experience on our website. By accepting, you authorize their use.',
    cookieAccept: 'Accept',
    cookieMore: 'More information',
    planBadge: 'Plans', planTitle: 'Clear investment, no surprises', planDesc: 'Choose the plan that best fits your business. All include technical support and activation within 48 hours.',
    plan1Title: 'Starter', plan1Sub: 'For businesses taking their first step with AI', plan1Desc: 'Essential automation to get started.',
    plan1F1: '1 WhatsApp AI Agent (FAQs & Schedules)', plan1F2: 'Initial setup and fast deployment', plan1F3: 'Automated reply automation', plan1F4: 'Email support for the first 30 days',
    plan2Title: 'Professional', plan2Sub: 'Full automation to optimize your time', plan2Desc: 'Complete solution for growing teams.',
    plan2F1: 'Advanced AI Agent (WhatsApp + Web)', plan2F2: 'Basic CRM or database integration (Google Sheets, Notion, etc.)', plan2F3: 'One key process automation (e.g. lead capture or bookings)', plan2F4: 'Priority support and post-launch optimization',
    plan3Title: 'Custom', plan3Sub: 'Tailored solutions and complex integrations', plan3Desc: 'Everything you need, with no limits.',
    plan3F1: 'Unlimited AI agents or complex workflows', plan3F2: 'Connection with dedicated APIs and proprietary systems', plan3F3: 'Advanced internal business process automation', plan3F4: 'One-on-one direct support and consulting',
    planCta: 'Get Started', planPopular: 'Most popular', plan3Price: 'Contact us'
  }
};

const flagSvgs = {
  es: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="3" fill="#C60B1E"/><rect y="8" width="24" height="8" fill="#FFC400"/></svg>',
  pt: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="3" fill="#009739"/><polygon points="12,4 20,12 12,20 4,12" fill="#FEDD00"/><circle cx="12" cy="12" r="4" fill="#002776"/></svg>',
  en: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect y="3.5" width="24" height="3.5" fill="#B22234"/><rect y="10.5" width="24" height="3.5" fill="#B22234"/><rect y="17.5" width="24" height="3.5" fill="#B22234"/><rect width="9" height="14" fill="#3C3B6E"/></svg>'
};

function detectLanguage() {
  const lang = (navigator.language || navigator.userLanguage || 'es').slice(0, 2).toLowerCase();
  if (translations[lang]) return lang;
  return 'es';
}

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
    if (t[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  const year = new Date().getFullYear();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] && t[key].includes('{year}')) {
      el.textContent = t[key].replace('{year}', year);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  document.querySelector('.lang-current-flag').innerHTML = flagSvgs[lang];
  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

const dropdown = document.querySelector('.lang-dropdown');
const dropdownBtn = document.querySelector('.lang-dropdown-btn');

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach((opt) => {
  opt.addEventListener('click', () => {
    setLanguage(opt.dataset.lang);
    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', () => {
  dropdown.classList.remove('open');
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark-mode');
}

setLanguage(detectLanguage());

const sectionIds = ['hero', 'servicios', 'planning', 'nosotros', 'contacto'];
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((e) => e.isIntersecting);
  if (visible.length === 0) return;
  const topmost = visible.reduce((a, b) => a.boundingClientRect.top < b.boundingClientRect.top ? a : b);
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + topmost.target.id);
  });
}, { threshold: 0, rootMargin: '-80px 0px -60% 0px' });

sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', '1');
  document.getElementById('cookieBanner').classList.remove('show');
}

(function() {
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(function() {
      document.getElementById('cookieBanner').classList.add('show');
    }, 800);
  }
})();

function sanitize(str) {
  var d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

var legalContent = {
  privacy: {
    es: {
      title: 'Pol\u00edtica de Privacidad',
      date: '\u00daltima actualizaci\u00f3n: junio 2026. Nexa Company SL \u2014 Todos los derechos reservados.',
      sections: [
        { h3: 'Responsable del tratamiento', p: 'Nexa Company SL, con domicilio en la Comunidad de Madrid, Espa\u00f1a. Correo electr\u00f3nico: nexacompanysl@gmail.com.' },
        { h3: 'Datos recogidos', p: 'A trav\u00e9s del formulario de contacto recogemos los siguientes datos: nombre, correo electr\u00f3nico, empresa (opcional) y el mensaje que nos env\u00edas.' },
        { h3: 'Finalidad del tratamiento', p: 'Tus datos se utilizan \u00fanicamente para atender tu solicitud de informaci\u00f3n y responder a tu consulta. No se utilizan para fines publicitarios ni se ceden a terceros sin tu consentimiento expreso.' },
        { h3: 'Legitimaci\u00f3n', p: 'El tratamiento se basa en tu consentimiento expl\u00edcito al enviar el formulario de contacto.' },
        { h3: 'Destinatarios', p: 'No se ceden datos a terceros salvo obligaci\u00f3n legal. Los datos se almacenan en servidores ubicados en la Uni\u00f3n Europea.' },
        { h3: 'Conservaci\u00f3n', p: 'Los datos se conservan durante el tiempo necesario para atender tu consulta y, posteriormente, durante el plazo legalmente establecido.' },
        { h3: 'Derechos del usuario', p: 'Puedes ejercer tus derechos de acceso, rectificaci\u00f3n, supresi\u00f3n, oposici\u00f3n, limitaci\u00f3n y portabilidad enviando un correo a nexacompanysl@gmail.com.' },
        { h3: 'Cookies', p: 'Esta web utiliza cookies propias esenciales para su correcto funcionamiento. Puedes gestionar tus preferencias en cualquier momento.' }
      ]
    },
    pt: {
      title: 'Pol\u00edtica de Privacidade',
      date: '\u00daltima atualiza\u00e7\u00e3o: junho 2026. Nexa Company SL \u2014 Todos os direitos reservados.',
      sections: [
        { h3: 'Respons\u00e1vel pelo tratamento', p: 'Nexa Company SL, com sede na Comunidade de Madrid, Espanha. E-mail: nexacompanysl@gmail.com.' },
        { h3: 'Dados coletados', p: 'Atrav\u00e9s do formul\u00e1rio de contato coletamos: nome, e-mail, empresa (opcional) e a mensagem enviada.' },
        { h3: 'Finalidade do tratamento', p: 'Seus dados s\u00e3o usados apenas para responder \u00e0 sua consulta. N\u00e3o s\u00e3o utilizados para publicidade nem compartilhados com terceiros.' },
        { h3: 'Legitima\u00e7\u00e3o', p: 'O tratamento baseia-se no seu consentimento expl\u00edcito ao enviar o formul\u00e1rio.' },
        { h3: 'Destinat\u00e1rios', p: 'Os dados n\u00e3o s\u00e3o cedidos a terceiros, exceto por obriga\u00e7\u00e3o legal. Os dados s\u00e3o armazenados em servidores na Uni\u00e3o Europeia.' },
        { h3: 'Conserva\u00e7\u00e3o', p: 'Os dados s\u00e3o mantidos pelo tempo necess\u00e1rio para atender sua consulta e, posteriormente, pelo prazo legal estabelecido.' },
        { h3: 'Direitos do usu\u00e1rio', p: 'Voc\u00ea pode exercer seus direitos de acesso, retifica\u00e7\u00e3o, exclus\u00e3o, oposi\u00e7\u00e3o, limita\u00e7\u00e3o e portabilidade enviando e-mail para nexacompanysl@gmail.com.' },
        { h3: 'Cookies', p: 'Este site utiliza cookies essenciais para seu funcionamento. Voc\u00ea pode gerenciar suas prefer\u00eancias a qualquer momento.' }
      ]
    },
    en: {
      title: 'Privacy Policy',
      date: 'Last updated: June 2026. Nexa Company SL \u2014 All rights reserved.',
      sections: [
        { h3: 'Data Controller', p: 'Nexa Company SL, based in the Community of Madrid, Spain. Email: nexacompanysl@gmail.com.' },
        { h3: 'Data collected', p: 'Through the contact form we collect: name, email address, company (optional), and the message you send us.' },
        { h3: 'Purpose of processing', p: 'Your data is used solely to respond to your inquiry. It is not used for advertising purposes nor shared with third parties without your express consent.' },
        { h3: 'Legal basis', p: 'Processing is based on your explicit consent when submitting the contact form.' },
        { h3: 'Recipients', p: 'Data is not shared with third parties except where required by law. Data is stored on servers within the European Union.' },
        { h3: 'Retention', p: 'Data is retained for the time necessary to address your inquiry and subsequently for the legally established period.' },
        { h3: 'User rights', p: 'You may exercise your rights of access, rectification, erasure, objection, restriction, and portability by emailing nexacompanysl@gmail.com.' },
        { h3: 'Cookies', p: 'This website uses essential cookies for proper functionality. You can manage your preferences at any time.' }
      ]
    }
  },
  terms: {
    es: {
      title: 'T\u00e9rminos y Condiciones',
      date: '\u00daltima actualizaci\u00f3n: junio 2026. Nexa Company SL \u2014 Todos los derechos reservados.',
      sections: [
        { h3: 'Aceptaci\u00f3n de los t\u00e9rminos', p: 'Al acceder y utilizar este sitio web, aceptas los presentes t\u00e9rminos y condiciones. Si no est\u00e1s de acuerdo con alguno de ellos, te recomendamos no utilizar el sitio.' },
        { h3: 'Servicios', p: 'Nexa ofrece servicios de inteligencia artificial para empresas, incluyendo agentes de IA para WhatsApp, integraci\u00f3n CRM, automatizaci\u00f3n de procesos y anal\u00edtica de datos. Las caracter\u00edsticas espec\u00edficas se detallan en la propuesta comercial de cada cliente.' },
        { h3: 'Propiedad intelectual', p: 'Todo el contenido del sitio web (textos, im\u00e1genes, logotipos, iconos y c\u00f3digo) es propiedad de Nexa Company SL. Queda prohibida su reproducci\u00f3n, distribuci\u00f3n o modificaci\u00f3n sin autorizaci\u00f3n expresa por escrito.' },
        { h3: 'Uso del sitio', p: 'El usuario se compromete a hacer un uso adecuado del sitio web y sus servicios, absteni\u00e9ndose de utilizarlos para actividades il\u00edcitas o que puedan da\u00f1ar los derechos de terceros.' },
        { h3: 'Limitaci\u00f3n de responsabilidad', p: 'Nexa Company SL no se hace responsable por da\u00f1os o perjuicios derivados del uso indebido de los servicios contratados, ni por interrupciones del servicio por causas ajenas a su control, como fallos t\u00e9cnicos, de red o fuerza mayor.' },
        { h3: 'Privacidad', p: 'El tratamiento de los datos personales se rige por nuestra Pol\u00edtica de Privacidad, que forma parte integral de estos t\u00e9rminos y condiciones.' },
        { h3: 'Legislaci\u00f3n aplicable', p: 'Estos t\u00e9rminos se rigen por la legislaci\u00f3n espa\u00f1ola. Para cualquier controversia judicial, las partes se someten a los juzgados y tribunales de Madrid.' },
        { h3: 'Contacto', p: 'Para cualquier consulta sobre estos t\u00e9rminos, puedes escribirnos a nexacompanysl@gmail.com.' }
      ]
    },
    pt: {
      title: 'Termos e Condi\u00e7\u00f5es',
      date: '\u00daltima atualiza\u00e7\u00e3o: junho 2026. Nexa Company SL \u2014 Todos os direitos reservados.',
      sections: [
        { h3: 'Aceita\u00e7\u00e3o dos termos', p: 'Ao acessar e usar este site, voc\u00ea aceita estes termos e condi\u00e7\u00f5es. Se n\u00e3o concordar, recomendamos n\u00e3o usar o site.' },
        { h3: 'Servi\u00e7os', p: 'A Nexa oferece servi\u00e7os de intelig\u00eancia artificial para empresas, incluindo agentes de IA para WhatsApp, integra\u00e7\u00e3o CRM, automa\u00e7\u00e3o de processos e an\u00e1lise de dados.' },
        { h3: 'Propriedade intelectual', p: 'Todo o conte\u00fado do site (textos, imagens, logotipos, \u00edcones e c\u00f3digo) \u00e9 propriedade da Nexa Company SL. Proibida reprodu\u00e7\u00e3o sem autoriza\u00e7\u00e3o.' },
        { h3: 'Uso do site', p: 'O usu\u00e1rio se compromete a fazer uso adequado do site, abstendo-se de utiliz\u00e1-lo para atividades il\u00edcitas.' },
        { h3: 'Limita\u00e7\u00e3o de responsabilidade', p: 'A Nexa n\u00e3o se responsabiliza por danos decorrentes do uso indevido dos servi\u00e7os ou por interrup\u00e7\u00f5es causadas por motivos alheios ao seu controle.' },
        { h3: 'Privacidade', p: 'O tratamento de dados pessoais \u00e9 regido pela nossa Pol\u00edtica de Privacidade, parte integrante destes termos.' },
        { h3: 'Legisla\u00e7\u00e3o aplic\u00e1vel', p: 'Estes termos s\u00e3o regidos pela legisla\u00e7\u00e3o espanhola. As controv\u00e9rsias ser\u00e3o submetidas aos tribunais de Madrid.' },
        { h3: 'Contato', p: 'Para d\u00favidas sobre estes termos, escreva para nexacompanysl@gmail.com.' }
      ]
    },
    en: {
      title: 'Terms and Conditions',
      date: 'Last updated: June 2026. Nexa Company SL \u2014 All rights reserved.',
      sections: [
        { h3: 'Acceptance of terms', p: 'By accessing and using this website, you accept these terms and conditions. If you do not agree with any of them, we recommend you do not use the site.' },
        { h3: 'Services', p: 'Nexa provides artificial intelligence services for businesses, including WhatsApp AI agents, CRM integration, process automation, and data analytics. Specific features are detailed in each client\'s commercial proposal.' },
        { h3: 'Intellectual property', p: 'All content on this website (texts, images, logos, icons, and code) is the property of Nexa Company SL. Reproduction, distribution, or modification without express written authorization is prohibited.' },
        { h3: 'Use of the site', p: 'The user agrees to make proper use of the website and its services, refraining from using them for illegal purposes or activities that may harm third-party rights.' },
        { h3: 'Limitation of liability', p: 'Nexa Company SL is not liable for damages arising from improper use of contracted services or service interruptions due to causes beyond its control, such as technical failures, network issues, or force majeure.' },
        { h3: 'Privacy', p: 'The processing of personal data is governed by our Privacy Policy, which is an integral part of these terms and conditions.' },
        { h3: 'Applicable law', p: 'These terms are governed by Spanish law. Any legal disputes shall be submitted to the courts of Madrid.' },
        { h3: 'Contact', p: 'For any questions about these terms, email us at nexacompanysl@gmail.com.' }
      ]
    }
  }
};

function openLegal(type) {
  var lang = document.documentElement.lang || 'es';
  var content = legalContent[type][lang];
  if (!content) content = legalContent[type]['es'];
  var html = '<h2>' + content.title + '</h2>';
  html += '<p class="legal-date">' + content.date + '</p>';
  content.sections.forEach(function(s) {
    html += '<h3>' + s.h3 + '</h3>';
    html += '<p>' + s.p + '</p>';
  });
  document.getElementById('legalContent').innerHTML = html;
  document.getElementById('legalModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  document.getElementById('legalModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('legalModal').addEventListener('click', function(e) {
  if (e.target === this) closeLegal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLegal();
});

var form = document.querySelector('.contacto-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('mensaje').value.trim();
    if (!name || !email || !msg) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    var fd = new FormData();
    fd.append('nombre', name);
    fd.append('email', email);
    fd.append('empresa', document.getElementById('empresa').value.trim());
    fd.append('mensaje', msg);
    fd.append('_replyto', email);
    fd.append('_subject', 'Contacto web - ' + name);
    fetch('https://formspree.io/f/xykajlpk', {
      method: 'POST', headers: { 'Accept': 'application/json' }, body: fd
    }).then(function(r) {
      if (r.ok) { showFeedback('formSuccess', 'formError'); form.reset(); }
      else { showFeedback('formError', 'formSuccess'); }
    }).catch(function() { showFeedback('formSuccess', 'formError'); form.reset(); });
  });
}

function showFeedback(showId, hideId) {
  var show = document.getElementById(showId);
  var hide = document.getElementById(hideId);
  hide.classList.remove('show');
  show.classList.add('show');
  clearTimeout(show._timer);
  show._timer = setTimeout(function() { show.classList.remove('show'); }, 5000);
}

document.querySelectorAll('a[href^="http"]').forEach(function(a) {
  if (!a.href.includes(location.hostname)) {
    a.setAttribute('rel', 'noopener noreferrer');
    a.setAttribute('target', '_blank');
  }
});

document.querySelectorAll('.legal-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    openLegal(this.dataset.legal);
  });
});

document.querySelector('.cookie-more').addEventListener('click', function(e) {
  openLegal('privacy');
});

document.getElementById('cookieAcceptBtn').addEventListener('click', acceptCookies);
document.getElementById('legalCloseBtn').addEventListener('click', closeLegal);

var hamburger = document.getElementById('hamburgerBtn');
var navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      document.body.style.overflow = '';
    });
  });
}
