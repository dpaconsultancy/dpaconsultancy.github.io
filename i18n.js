/* ==========================================================================
   DPA Consultancy — translations (EN / NL / ES)
   English lives in index.html and is captured from the DOM at load, so
   only NL and ES are defined here. Keys match data-i18n attributes.
   ========================================================================== */
(() => {
  'use strict';

  const STRINGS = {
    nl: {
      'meta.title': 'DPA Consultancy — Development, Planning & Action',
      'meta.description': 'DPA Consultancy is een in Suriname opgericht adviesbureau voor startups, turnarounds en internationale expansie in CARICOM, Zuid-Amerika en de Verenigde Staten. Servizio Senza Fine.',

      'nav.about': 'Over ons',
      'nav.clients': 'Voor wie',
      'nav.services': 'Diensten',
      'nav.reach': 'Regionaal bereik',
      'cta.book': 'Plan een consult',

      'hero.eyebrow': 'Opgericht 2024 &middot; Paramaribo, Suriname',
      'hero.motto': '&mdash; Service zonder einde',
      'hero.lead': 'Een langetermijnpartner voor ambitieuze bedrijven in het Caribisch gebied, Zuid-Amerika en de Verenigde Staten. We ontwikkelen de strategie samen met u, en we blijven om die uit te voeren.',
      'hero.explore': 'Bekijk onze expertises',
      'stats.practices': 'Adviesgebieden',
      'stats.markets': 'Markten',
      'stats.stages': 'Klantfases',
      'stats.horizon': 'Partnerschap',

      'about.eyebrow': 'Ons verhaal',
      'about.title': 'Opgericht in Suriname.<br>Gebouwd voor de regio.',
      'about.quote': 'Een plan is pas het begin. We blijven bij onze klanten, van de eerste strategiesessie tot de uitvoering en daarna.',
      'about.p1': 'DPA Consultancy werd in 2024 in Paramaribo opgericht vanuit een duidelijke overtuiging: bedrijven in het Caribisch gebied en Zuid-Amerika verdienen advies dat voldoet aan internationale standaarden en tegelijk de lokale realiteit begrijpt. Binnen ons eerste jaar groeiden we vanuit Suriname door naar Guyana, Frans-Guyana, Brazilië, de CARICOM-lidstaten en de Verenigde Staten. Klanten daar zochten een partner die zowel hun thuismarkt kende als de handelscorridors die ze wilden bereiken.',
      'about.p2': 'Onze naam beschrijft onze werkwijze: <strong>Development, Planning &amp; Action</strong>. Ons motto is <em>Servizio Senza Fine</em>, &ldquo;service zonder einde.&rdquo; Veel adviesbureaus leveren een rapport op en vertrekken. Wij blijven. We werken naast het management tijdens de implementatie, meten wat verandert en sturen bij als markten bewegen. Een opdracht is voor ons niet klaar wanneer het plan is opgeleverd. Daar begint het partnerschap juist.',
      'pillar.dev': 'Het fundament leggen: structuur, systemen en mensen.',
      'pillar.plan': 'De route uitstippelen: strategie, financiën en markttoetreding.',
      'pillar.act': 'Uitvoeren en bijsturen: implementatie met doorlopende ondersteuning.',

      'clients.title': 'Drie bedrijfsfases.<br>Eén betrokken partner.',
      'clients.lead': 'Of u nu start, herstelt of uitbreidt: we stemmen onze aanpak af op waar uw bedrijf nu staat en waar het naartoe moet.',
      'c1.tag': 'Start',
      'c1.title': 'Ambitieuze startups',
      'c1.body': 'We helpen nieuwe ondernemingen een schaalbaar, marktklaar fundament te bouwen: een gevalideerd verdienmodel, planning op investeerdersniveau, efficiënte processen en een merk dat vanaf dag één vertrouwen wekt.',
      'c1.l1': 'Verdienmodel &amp; go-to-marketstrategie',
      'c1.l2': 'Financiële modellen &amp; kapitaalgereedheid',
      'c1.l3': 'Systemen en structuur die meegroeien',
      'c2.tag': 'Turnaround',
      'c2.title': 'Bedrijven onder druk',
      'c2.body': 'Als marges krimpen of de operatie stokt, sporen we de oorzaken op en leiden we een gestructureerde turnaround. Het doel: winstgevendheid, cashflow en vertrouwen in het team herstellen.',
      'c2.l1': 'Turnaroundstrategie &amp; herstructurering',
      'c2.l2': 'Operationele efficiëntie &amp; kostenbeheersing',
      'c2.l3': 'Herstel van winst en cashflow',
      'c3.tag': 'Expansie',
      'c3.title': 'Internationale groei',
      'c3.body': 'We begeleiden gevestigde bedrijven naar nieuwe markten, waaronder de Verenigde Staten, Brazilië, Frans-Guyana en de CARICOM-landen. Van regelgeving tot commerciële en operationele planning.',
      'c3.l1': 'Markttoetreding &amp; haalbaarheidsstudies',
      'c3.l2': 'Regelgeving en partners',
      'c3.l3': 'Lokale positionering &amp; operatie',

      'services.eyebrow': 'Onze expertises',
      'services.title': 'Acht expertises.<br>Eén geïntegreerde aanpak.',
      'services.lead': 'Onze specialisten werken over disciplines heen, zodat strategie, technologie, financiën en mensen samen vooruitgaan in plaats van in losse eilandjes.',
      's1.title': 'Bedrijfsstrategie',
      's1.body': 'Ondernemingsplanning, groeiroutekaarten en concurrentiepositie.',
      's2.title': 'IT-advies',
      's2.body': 'Technische infrastructuur, digitale transformatie en IT-architectuur.',
      's3.title': 'Organisatieontwikkeling',
      's3.body': 'Organisatiestructuur, schaalbare systemen en afstemming op groei.',
      's4.title': 'Marketing &amp; branding',
      's4.body': 'Positionering, marktanalyse, merkidentiteit en groeimarketing.',
      's5.title': 'Financieel advies',
      's5.body': 'Kapitaaloptimalisatie, financiële strategie en risicobeheer.',
      's6.title': 'Procesverbetering',
      's6.body': 'Lean werken, optimalisatie van werkprocessen en efficiëntie.',
      's7.title': 'Human resources',
      's7.body': 'Talentmanagement, organisatiecultuur en leiderschapsontwikkeling.',
      's8.title': 'Cloudadvies',
      's8.body': 'Cloudmigratie, cloudarchitectuur en veilige infrastructuur.',

      'reach.title': 'Geworteld in CARICOM.<br>Verbonden met Amerika.',
      'reach.lead': 'CARICOM-bedrijven staan bij ons centraal. Vanuit Paramaribo verbinden we regionale bedrijven met de handelscorridors die het meest tellen: de snelgroeiende economie van Guyana, de Braziliaanse markt, Frans-Guyana als toegangspoort tot de EU, en de Verenigde Staten.',
      'r1.title': 'CARICOM-integratie',
      'r1.body': 'Markttoegang en regionale partnerschappen in de CARICOM-lidstaten.',
      'r2.title': 'Zuid-Amerikaanse corridor',
      'r2.body': 'Suriname, Guyana, Frans-Guyana en Brazilië, met grensoverschrijdende handel en operaties.',
      'r3.title': 'Handelscorridor VS',
      'r3.body': 'Toetreding, compliance en commerciële expansie in de Verenigde Staten.',
      'map.us': 'Verenigde Staten',
      'map.caricom': 'CARICOM-landen',
      'map.fg': 'Frans-Guyana',
      'map.br': 'Brazilië',
      'map.hq': 'HOOFDKANTOOR',

      'contact.title': 'Begin met een gesprek.',
      'contact.lead': 'Vertel ons over uw bedrijf en wat u wilt bereiken. Ons team neemt contact met u op om uw eerste adviesgesprek in te plannen.',
      'step1.title': 'Dien uw aanvraag in',
      'step1.body': 'Deel uw doelen en gewenste planning.',
      'step2.title': 'Eerste adviesgesprek',
      'step2.body': 'Een gericht gesprek over uw situatie en doelen.',
      'step3.title': 'Voorstel op maat',
      'step3.body': 'Een helder plan van aanpak met scope en tijdlijn.',

      'f.name': 'Volledige naam',
      'f.company': 'Bedrijf',
      'f.email': 'Zakelijk e-mailadres',
      'f.phone': 'Telefoon / WhatsApp',
      'f.country': 'Land',
      'f.country.ph': 'Kies een land',
      'f.country.caricom': 'Ander CARICOM-land',
      'f.other': 'Anders',
      'f.stage': 'Fase van uw bedrijf',
      'f.stage.ph': 'Maak een keuze',
      'f.stage.1': 'Startup / nieuwe onderneming',
      'f.stage.2': 'Gevestigd, met uitdagingen',
      'f.stage.3': 'Uitbreiding naar nieuwe markten',
      'f.interests': 'Interessegebieden',
      'f.date': 'Voorkeursdatum',
      'f.time': 'Voorkeurstijd',
      'f.time.none': 'Geen voorkeur',
      'f.time.am': 'Ochtend (9:00 – 12:00)',
      'f.time.pm': 'Middag (12:00 – 17:00)',
      'f.message': 'Hoe kunnen we helpen?',
      'f.message.ph': 'Beschrijf kort uw bedrijf en de uitdaging of kans waar u voor staat.',
      'f.submit': 'Consult aanvragen',
      'f.sending': 'Verzenden…',
      'f.note': 'Uw gegevens worden vertrouwelijk behandeld en alleen gebruikt om op uw aanvraag te reageren.',
      'f.invalid': 'Vul de gemarkeerde velden in.',
      'f.success': 'Dank u wel. We hebben uw aanvraag ontvangen en nemen snel contact met u op om uw consult in te plannen.',
      'f.error': 'Er ging iets mis bij het verzenden. Probeer het opnieuw of mail ons via dpaconsultancy.tjon@gmail.com.',

      'footer.company': 'Bedrijf',
      'footer.practices': 'Expertises',
      'footer.p1': 'Strategie &amp; financiën',
      'footer.p2': 'Technologie &amp; cloud',
      'footer.p3': 'Mensen &amp; operatie',
      'footer.serving': 'Actief in CARICOM, Zuid-Amerika &amp; de VS',
      'footer.rights': 'Alle rechten voorbehouden.',
      'ui.menuOpen': 'Menu openen',
      'ui.menuClose': 'Menu sluiten'
    },

    es: {
      'meta.title': 'DPA Consultancy — Development, Planning & Action',
      'meta.description': 'DPA Consultancy es una consultora fundada en Surinam que acompaña a startups, procesos de reestructuración y expansión internacional en CARICOM, Sudamérica y Estados Unidos. Servizio Senza Fine.',

      'nav.about': 'Nosotros',
      'nav.clients': 'A quién servimos',
      'nav.services': 'Servicios',
      'nav.reach': 'Alcance regional',
      'cta.book': 'Agendar una consulta',

      'hero.eyebrow': 'Fundada en 2024 &middot; Paramaribo, Surinam',
      'hero.motto': '&mdash; Servicio sin fin',
      'hero.lead': 'Un socio de negocios a largo plazo para empresas ambiciosas del Caribe, Sudamérica y Estados Unidos. Construimos la estrategia con usted y nos quedamos para llevarla a cabo.',
      'hero.explore': 'Conozca nuestras áreas',
      'stats.practices': 'Áreas de consultoría',
      'stats.markets': 'Mercados atendidos',
      'stats.stages': 'Etapas de cliente',
      'stats.horizon': 'Horizonte de alianza',

      'about.eyebrow': 'Nuestra historia',
      'about.title': 'Fundada en Surinam.<br>Pensada para la región.',
      'about.quote': 'Un plan es solo el comienzo. Acompañamos a nuestros clientes desde la primera sesión de estrategia hasta la ejecución y más allá.',
      'about.p1': 'DPA Consultancy nació en Paramaribo en 2024 con una convicción clara: las empresas del Caribe y Sudamérica merecen una asesoría con estándares internacionales que a la vez entienda la realidad local. En nuestro primer año crecimos más allá de Surinam hacia Guyana, la Guayana Francesa, Brasil, los estados miembros de CARICOM y Estados Unidos. Los clientes de esos mercados buscaban un socio que conociera tanto su mercado local como los corredores comerciales a los que querían llegar.',
      'about.p2': 'Nuestro nombre resume nuestro método: <strong>Development, Planning &amp; Action</strong>. Nuestra filosofía es <em>Servizio Senza Fine</em>, &ldquo;servicio sin fin.&rdquo; Muchas consultoras entregan un informe y se van. Nosotros nos quedamos. Trabajamos junto a los equipos directivos durante la implementación, medimos lo que cambia y ajustamos a medida que se mueven los mercados. Para nosotros, un proyecto no termina cuando se entrega el plan. Ahí es donde empieza la alianza.',
      'pillar.dev': 'Construir las bases: estructura, sistemas y personas.',
      'pillar.plan': 'Trazar la ruta: estrategia, finanzas y entrada al mercado.',
      'pillar.act': 'Ejecutar y ajustar: implementación con acompañamiento continuo.',

      'clients.title': 'Tres etapas empresariales.<br>Un socio comprometido.',
      'clients.lead': 'Ya sea que esté comenzando, recuperándose o expandiéndose, adaptamos nuestro enfoque a dónde está su empresa hoy y hacia dónde necesita ir.',
      'c1.tag': 'Lanzamiento',
      'c1.title': 'Startups de alto impacto',
      'c1.body': 'Ayudamos a nuevos emprendimientos a construir bases escalables y listas para el mercado: modelos de negocio validados, planificación a nivel inversionista, operaciones eficientes y una marca que genera confianza desde el primer día.',
      'c1.l1': 'Modelo de negocio y estrategia de salida al mercado',
      'c1.l2': 'Modelos financieros y preparación para inversión',
      'c1.l3': 'Sistemas y estructura que escalan',
      'c2.tag': 'Reestructuración',
      'c2.title': 'Empresas en dificultades',
      'c2.body': 'Cuando los márgenes se reducen o la operación se estanca, identificamos las causas de fondo y lideramos una reestructuración ordenada. El objetivo: recuperar la rentabilidad, el flujo de caja y la confianza del equipo.',
      'c2.l1': 'Estrategia de recuperación y reestructuración',
      'c2.l2': 'Eficiencia operativa y control de costos',
      'c2.l3': 'Recuperación de utilidades y flujo de caja',
      'c3.tag': 'Expansión',
      'c3.title': 'Crecimiento internacional',
      'c3.body': 'Guiamos a empresas establecidas hacia nuevos mercados, como Estados Unidos, Brasil, la Guayana Francesa y los estados de CARICOM. Cubrimos la planificación regulatoria, comercial y operativa de la entrada.',
      'c3.l1': 'Entrada al mercado y estudios de viabilidad',
      'c3.l2': 'Gestión regulatoria y de socios',
      'c3.l3': 'Posicionamiento y operaciones locales',

      'services.eyebrow': 'Nuestras áreas',
      'services.title': 'Ocho áreas.<br>Un enfoque integrado.',
      'services.lead': 'Nuestros especialistas trabajan entre disciplinas, para que estrategia, tecnología, finanzas y personas avancen juntas y no por separado.',
      's1.title': 'Estrategia empresarial',
      's1.body': 'Planificación corporativa, hojas de ruta de crecimiento y posicionamiento competitivo.',
      's2.title': 'Consultoría TI',
      's2.body': 'Infraestructura tecnológica, transformación digital y arquitectura de TI.',
      's3.title': 'Desarrollo organizacional',
      's3.body': 'Estructura organizacional, sistemas escalables y alineación con el crecimiento.',
      's4.title': 'Marketing y marca',
      's4.body': 'Posicionamiento, análisis de mercado, identidad de marca y marketing de crecimiento.',
      's5.title': 'Consultoría financiera',
      's5.body': 'Optimización de capital, estrategia financiera y gestión de riesgos.',
      's6.title': 'Mejora de procesos',
      's6.body': 'Operaciones lean, optimización de flujos de trabajo y eficiencia.',
      's7.title': 'Recursos humanos',
      's7.body': 'Gestión del talento, cultura organizacional y desarrollo de liderazgo.',
      's8.title': 'Consultoría cloud',
      's8.body': 'Migración a la nube, arquitectura cloud e infraestructura segura.',

      'reach.title': 'Con raíces en CARICOM.<br>Conectados con las Américas.',
      'reach.lead': 'Las empresas de CARICOM son nuestro enfoque principal. Desde Paramaribo conectamos a empresas regionales con los corredores comerciales más importantes: la economía en rápido crecimiento de Guyana, el mercado brasileño, la Guayana Francesa como puerta de entrada a la UE, y Estados Unidos.',
      'r1.title': 'Integración CARICOM',
      'r1.body': 'Acceso a mercados y alianzas regionales en los estados miembros.',
      'r2.title': 'Corredor sudamericano',
      'r2.body': 'Surinam, Guyana, la Guayana Francesa y Brasil, con comercio y operaciones transfronterizas.',
      'r3.title': 'Corredor comercial EE. UU.',
      'r3.body': 'Entrada, cumplimiento normativo y expansión comercial en Estados Unidos.',
      'map.us': 'Estados Unidos',
      'map.caricom': 'Estados CARICOM',
      'map.fg': 'Guayana Francesa',
      'map.br': 'Brasil',
      'map.hq': 'SEDE CENTRAL',

      'contact.title': 'Empecemos con una conversación.',
      'contact.lead': 'Cuéntenos sobre su empresa y lo que quiere lograr. Nuestro equipo se pondrá en contacto para agendar su primera llamada de asesoría.',
      'step1.title': 'Envíe su solicitud',
      'step1.body': 'Comparta sus objetivos y su disponibilidad.',
      'step2.title': 'Llamada de asesoría inicial',
      'step2.body': 'Una conversación enfocada en su situación y sus objetivos.',
      'step3.title': 'Propuesta a medida',
      'step3.body': 'Un plan de acción claro con alcance y cronograma.',

      'f.name': 'Nombre completo',
      'f.company': 'Empresa',
      'f.email': 'Correo corporativo',
      'f.phone': 'Teléfono / WhatsApp',
      'f.country': 'País',
      'f.country.ph': 'Seleccione un país',
      'f.country.caricom': 'Otro estado miembro de CARICOM',
      'f.other': 'Otro',
      'f.stage': 'Etapa de su empresa',
      'f.stage.ph': 'Seleccione una opción',
      'f.stage.1': 'Startup / nuevo emprendimiento',
      'f.stage.2': 'Establecida, con desafíos',
      'f.stage.3': 'Expansión a nuevos mercados',
      'f.interests': 'Áreas de interés',
      'f.date': 'Fecha preferida',
      'f.time': 'Horario preferido',
      'f.time.none': 'Sin preferencia',
      'f.time.am': 'Mañana (9:00 – 12:00)',
      'f.time.pm': 'Tarde (12:00 – 17:00)',
      'f.message': '¿Cómo podemos ayudarle?',
      'f.message.ph': 'Describa brevemente su empresa y el desafío u oportunidad que enfrenta.',
      'f.submit': 'Solicitar consulta',
      'f.sending': 'Enviando…',
      'f.note': 'Su información es confidencial y solo se usará para responder a su solicitud.',
      'f.invalid': 'Complete los campos marcados.',
      'f.success': 'Gracias. Hemos recibido su solicitud y nuestro equipo se comunicará pronto para agendar su consulta.',
      'f.error': 'Hubo un problema al enviar su solicitud. Inténtelo de nuevo o escríbanos a dpaconsultancy.tjon@gmail.com.',

      'footer.company': 'Empresa',
      'footer.practices': 'Áreas',
      'footer.p1': 'Estrategia y finanzas',
      'footer.p2': 'Tecnología y nube',
      'footer.p3': 'Personas y operaciones',
      'footer.serving': 'Presentes en CARICOM, Sudamérica y EE. UU.',
      'footer.rights': 'Todos los derechos reservados.',
      'ui.menuOpen': 'Abrir menú',
      'ui.menuClose': 'Cerrar menú'
    }
  };

  // English strings used only by JS (the rest are read from the DOM).
  const EN_EXTRA = {
    'f.sending': 'Sending…',
    'f.invalid': 'Please complete the highlighted fields.',
    'f.success': 'Thank you. Your request has been received and our team will be in touch shortly to schedule your consultation.',
    'f.error': 'Something went wrong sending your request. Please try again, or email us at dpaconsultancy.tjon@gmail.com.',
    'ui.menuOpen': 'Open menu',
    'ui.menuClose': 'Close menu'
  };

  const SUPPORTED = ['en', 'nl', 'es'];
  const STORAGE_KEY = 'dpa-lang';
  let en = null;           // captured English strings
  let current = 'en';
  const listeners = [];

  const store = {
    get() { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch { /* private mode */ } }
  };

  function detect() {
    const param = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(param)) return param;
    const saved = store.get();
    if (SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.languages || [navigator.language || 'en']).map((l) => l.slice(0, 2).toLowerCase());
    return nav.find((l) => SUPPORTED.includes(l)) || 'en';
  }

  function captureEnglish() {
    en = { ...EN_EXTRA };
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (!(key in en)) en[key] = el.innerHTML.trim().replace(/\s+/g, ' ');
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      en[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder');
    });
    en['meta.title'] = document.title;
    en['meta.description'] = document.querySelector('meta[name="description"]').content;
  }

  function t(key) {
    return (STRINGS[current] && STRINGS[current][key]) ?? en[key] ?? key;
  }

  function apply(lang) {
    current = SUPPORTED.includes(lang) ? lang : 'en';
    document.documentElement.lang = current;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (el instanceof SVGElement || el.tagName === 'OPTION') el.textContent = decode(val);
      else el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });
    document.title = decode(t('meta.title'));
    document.querySelector('meta[name="description"]').content = t('meta.description');

    document.querySelectorAll('.lang [data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === current));
    });
    listeners.forEach((fn) => fn(current));
  }

  const decoder = document.createElement('textarea');
  function decode(html) { decoder.innerHTML = html; return decoder.value; }

  function set(lang) {
    store.set(lang);
    apply(lang);
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }
  }

  function init() {
    captureEnglish();
    document.querySelectorAll('.lang [data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => set(btn.dataset.lang));
    });
    apply(detect());
  }

  window.DPA_I18N = {
    t,
    get lang() { return current; },
    onChange(fn) { listeners.push(fn); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
