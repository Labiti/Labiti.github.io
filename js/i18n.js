/* ==========================================================================
   i18n — Multi-language support (English / Afrikaans / isiXhosa)
   ========================================================================== */

(function () {
  'use strict';

  const translations = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.testimonials': 'Testimonials',
      'nav.education': 'Education',
      'nav.contact': 'Get in Touch',

      'hero.badge': 'Available for opportunities',
      'hero.greeting': "Hi, I'm",
      'hero.description': 'Results-driven Full Stack Developer with <strong>4+ years</strong> of professional experience architecting production-grade web, mobile, and AI-powered systems. Specialised in C# (.NET Core), Python (FastAPI, Django), Angular, React, Java Spring Boot, and Azure cloud-native solutions.',
      'hero.viewWork': 'View My Work',
      'hero.downloadCV': 'Download CV',
      'hero.contact': 'Contact',
      'hero.yearsExp': 'Years Experience',
      'hero.majorProjects': 'Major Projects',
      'hero.certifications': 'Certifications',

      'about.tag': '01 — About',
      'about.title1': 'About',
      'about.title2': 'Me',
      'about.p1': "I'm a Software Engineer currently working at <strong>ARMSCOR</strong> (South African defence manufacturer), where I build enterprise-grade systems for IP management, security clearance tracking, and event-driven integrations.",
      'about.p2': 'I architected and delivered an <strong>IP Management System</strong> integrated with Azure Cognitive Services (70% reduction in manual data entry), a <strong>security clearance platform</strong> achieving 95% fewer verification errors, and an <strong>event-driven inventory sync platform</strong> handling 1M+ daily webhooks with 99.5% delivery success.',
      'about.p3': "Beyond work, I've built a <strong>production-ready 9-agent AI system</strong> with FastAPI and React, plus a biometric time-tracking system using Facenet-PyTorch face recognition. Skilled in <strong>Java Spring Boot</strong>, <strong>Databricks</strong>, and cloud-native development.",
      'about.certsTitle': 'Certifications',
      'about.techStack': 'Tech Stack',
      'about.radarTitle': 'Proficiency Snapshot',

      'common.certified': 'Certified',

      'skill.languages': 'Languages',
      'skill.frontend': 'Frontend',
      'skill.backend': 'Backend Frameworks',
      'skill.cloud': 'Cloud & DevOps',
      'skill.databases': 'Databases & Data Platforms',
      'skill.messaging': 'Messaging & Integration',
      'skill.ai': 'AI & Machine Learning',
      'skill.testing': 'Testing',
      'skill.architecture': 'Architecture & Practices',

      'exp.tag': '02 — Experience',
      'exp.title1': 'Work',
      'exp.title2': 'Experience',
      'exp.role1': 'Software Engineer',
      'exp.role2': 'Software Development Intern',
      'exp.r1b1': 'Engineered full-stack <strong>IP Management System</strong> (C# .NET, Angular, SQL Server) with Azure Cognitive Services — <strong>70% less manual data entry</strong>; deployed on AKS with CI/CD via Azure DevOps.',
      'exp.r1b2': 'Architected <strong>Security Clearance Tracking Solution</strong> — <strong>80% less manual verification, 95% fewer errors</strong>. Playwright E2E: <strong>90% coverage, regression 4h → 15min</strong>.',
      'exp.r1b3': 'Engineered <strong>event-driven Inventory Sync Platform</strong> (RabbitMQ, Redis, SignalR) — <strong>1M+ daily webhooks, 99.5% success</strong> for 50+ B2B resellers.',
      'exp.r1b4': 'Designed and deployed <strong>production-ready 9-agent AI system</strong> (FastAPI + React) with autonomous agents.',
      'exp.r1b5': 'Provided second-line support, client requirement-gathering, and <strong>mentored junior developers</strong>.',
      'exp.r2b1': 'Intensive full-stack web development internship — C#, .NET Framework, SQL Server, JavaScript, HTML/CSS, Git.',
      'exp.r2b2': 'Built internal support-ticket tracking tool (ASP.NET MVC + Bootstrap) <strong>adopted by the team</strong>.',
      'exp.r2b3': 'Participated in Agile/Scrum ceremonies: stand-ups, code reviews, sprint planning.',

      'proj.tag': '03 — Portfolio',
      'proj.title1': 'Featured',
      'proj.title2': 'Projects',
      'proj.description': 'Production-grade systems across defence, AI, logistics, and biometrics.',
      'proj.filter.all': 'All',
      'proj.filter.dotnet': '.NET',
      'proj.filter.ai': 'AI',
      'proj.filter.fullstack': 'Full Stack',
      'proj.filter.cloud': 'Cloud',
      'proj.noResults': 'No projects match this filter.',

      'test.tag': '04 — Testimonials',
      'test.title1': 'What People',
      'test.title2': 'Say',
      'test.description': 'Feedback from colleagues, mentors, and collaborators.',

      'edu.tag': '05 — Education',
      'edu.title1': 'Education &',
      'edu.title2': 'Credentials',

      'quote.text': '"Future belongs to those who believe in the beauty of their dreams."',
      'quote.motto': 'Live · Laugh · Love · Code',

      'contact.tag': '06 — Contact',
      'contact.title1': "Let's Work",
      'contact.title2': 'Together',
      'contact.description': "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',

      'form.name': 'Name',
      'form.namePh': 'Your full name',
      'form.email': 'Email',
      'form.emailPh': 'you@example.com',
      'form.subject': 'Subject',
      'form.subjectPh': "What's this about?",
      'form.message': 'Message',
      'form.messagePh': 'Tell me about your project or opportunity...',
      'form.send': 'Send Message',

      'footer.tagline': 'Software Engineer · Azure Developer · AI Engineer',
      'footer.copyright': '© 2026 Siphumze Labiti. Built with care in Pretoria, South Africa.'
    },

    af: {
      'nav.about': 'Oor My',
      'nav.experience': 'Ervaring',
      'nav.projects': 'Projekte',
      'nav.testimonials': 'Getuienisse',
      'nav.education': 'Opvoeding',
      'nav.contact': 'Kontak My',

      'hero.badge': 'Beskikbaar vir geleenthede',
      'hero.greeting': 'Hallo, ek is',
      'hero.description': "Resultaatgedrewe Vol-stapel Ontwikkelaar met <strong>4+ jaar</strong> professionele ervaring in die argitektuur van produksie-gehalte web-, mobiele en KI-aangedrewe stelsels. Spesialiseer in C# (.NET Core), Python (FastAPI, Django), Angular, React, Java Spring Boot, en Azure wolk-inheemse oplossings.",
      'hero.viewWork': 'Sien My Werk',
      'hero.downloadCV': 'Laai CV Af',
      'hero.contact': 'Kontak',
      'hero.yearsExp': 'Jaar Ervaring',
      'hero.majorProjects': 'Groot Projekte',
      'hero.certifications': 'Sertifiserings',

      'about.tag': '01 — Oor',
      'about.title1': 'Oor',
      'about.title2': 'My',
      'about.p1': "Ek is 'n Sagteware-Ingenieur tans by <strong>ARMSCOR</strong> (Suid-Afrikaanse verdedigingsvervaardiger), waar ek ondernemingsvlak-stelsels bou vir IP-bestuur, sekuriteitsklaringsnasporing, en gebeurtenisgedrewe integrasies.",
      'about.p2': "Ek het 'n <strong>IP-Bestuurstelsel</strong> geargitekteer en gelewer, geïntegreer met Azure Cognitive Services (70% vermindering in handmatige data-invoer), 'n <strong>sekuriteitsklaringsplatform</strong> wat 95% minder verifikasiefoute bereik, en 'n <strong>gebeurtenisgedrewe voorraad-sinkronisasieplatform</strong> wat 1M+ daaglikse webhooks hanteer met 99.5% afleweringsukses.",
      'about.p3': "Buite werk het ek 'n <strong>produksie-gereed 9-agent KI-stelsel</strong> gebou met FastAPI en React, plus 'n biometriese tydnasporingstelsel met Facenet-PyTorch gesigsherkenning. Vaardig in <strong>Java Spring Boot</strong>, <strong>Databricks</strong>, en wolk-inheemse ontwikkeling.",
      'about.certsTitle': 'Sertifiserings',
      'about.techStack': 'Tegnologie-Stapel',
      'about.radarTitle': 'Vaardigheids-Oorsig',

      'common.certified': 'Gesertifiseer',

      'skill.languages': 'Tale',
      'skill.frontend': 'Voorkant',
      'skill.backend': 'Agterkant-Raamwerke',
      'skill.cloud': 'Wolk & DevOps',
      'skill.databases': 'Databasisse & Data Platforms',
      'skill.messaging': 'Boodskappe & Integrasie',
      'skill.ai': 'KI & Masjienleer',
      'skill.testing': 'Toetsing',
      'skill.architecture': 'Argitektuur & Praktyke',

      'exp.tag': '02 — Ervaring',
      'exp.title1': 'Werk',
      'exp.title2': 'Ervaring',
      'exp.role1': 'Sagteware-Ingenieur',
      'exp.role2': 'Sagteware-ontwikkeling Intern',
      'exp.r1b1': "Vol-stapel <strong>IP-Bestuurstelsel</strong> (C# .NET, Angular, SQL Server) met Azure Cognitive Services — <strong>70% minder handmatige data-invoer</strong>; ontplooi op AKS met CI/CD via Azure DevOps.",
      'exp.r1b2': "<strong>Sekuriteitsklaringsnasporingsoplossing</strong> geargitekteer — <strong>80% minder handmatige verifikasie, 95% minder foute</strong>. Playwright E2E: <strong>90% dekking, regressie 4h → 15min</strong>.",
      'exp.r1b3': "<strong>Gebeurtenisgedrewe Voorraad-Sinkronisasieplatform</strong> (RabbitMQ, Redis, SignalR) — <strong>1M+ daaglikse webhooks, 99.5% sukses</strong> vir 50+ B2B-herverkopers.",
      'exp.r1b4': "<strong>Produksie-gereed 9-agent KI-stelsel</strong> (FastAPI + React) ontwerp en ontplooi met outonome agente.",
      'exp.r1b5': 'Tweede-lyn ondersteuning verskaf, kliëntvereistes ingesamel, en <strong>junior ontwikkelaars gemotiveer</strong>.',
      'exp.r2b1': "Intensiewe vol-stapel webontwikkeling-internskap — C#, .NET Framework, SQL Server, JavaScript, HTML/CSS, Git.",
      'exp.r2b2': "Interne ondersteuningskaartjie-nasporingsinstrument gebou (ASP.NET MVC + Bootstrap) <strong>deur die span aangeneem</strong>.",
      'exp.r2b3': "Deelgeneem aan Agile/Scrum seremonies: stand-ups, kode-oorsigte, sprintbeplanning.",

      'proj.tag': '03 — Portefeulje',
      'proj.title1': 'Uitgeligte',
      'proj.title2': 'Projekte',
      'proj.description': 'Produksie-gehalte stelsels oor verdediging, KI, logistiek, en biometrie.',
      'proj.filter.all': 'Alles',
      'proj.filter.dotnet': '.NET',
      'proj.filter.ai': 'KI',
      'proj.filter.fullstack': 'Vol-Stapel',
      'proj.filter.cloud': 'Wolk',
      'proj.noResults': 'Geen projekte stem ooreen met hierdie filter nie.',

      'test.tag': '04 — Getuienisse',
      'test.title1': 'Wat Mense',
      'test.title2': 'Sê',
      'test.description': 'Terugvoer van kollegas, mentors, en medewerkers.',

      'edu.tag': '05 — Opvoeding',
      'edu.title1': 'Opvoeding &',
      'edu.title2': 'Gelowigbriewe',

      'quote.text': '"Die toekoms behoort aan diegene wat glo in die skoonheid van hul drome."',
      'quote.motto': 'Leef · Lag · Liefde · Kodeer',

      'contact.tag': '06 — Kontak',
      'contact.title1': "Kom Ons Werk",
      'contact.title2': 'Saam',
      'contact.description': "Het jy 'n projek in gedagte of wil jy geleenthede bespreek? Ek wil graag van jou hoor.",
      'contact.email': 'E-pos',
      'contact.phone': 'Foon',
      'contact.location': 'Ligging',

      'form.name': 'Naam',
      'form.namePh': 'Jou volle naam',
      'form.email': 'E-pos',
      'form.emailPh': 'jy@voorbeeld.com',
      'form.subject': 'Onderwerp',
      'form.subjectPh': 'Waaroor gaan dit?',
      'form.message': 'Boodskap',
      'form.messagePh': 'Vertel my van jou projek of geleentheid...',
      'form.send': 'Stuur Boodskap',

      'footer.tagline': 'Sagteware-Ingenieur · Azure Ontwikkelaar · KI Ingenieur',
      'footer.copyright': '© 2026 Siphumze Labiti. Met sorg gebou in Pretoria, Suid-Afrika.'
    },

    xh: {
      'nav.about': 'Ngami',
      'nav.experience': 'Amava',
      'nav.projects': 'Iiprojekthi',
      'nav.testimonials': 'Ubungqina',
      'nav.education': 'Imfundo',
      'nav.contact': 'Nxibelelana Nam',

      'hero.badge': 'Ndiyafumaneka kumathuba',
      'hero.greeting': 'Molo, ndingu',
      'hero.description': "Umphuhlisi weFull Stack osebenza ngeziphumo oneminyaka engaphezu kwemi-<strong>4</strong> yamava obuchwephesha ekuyileni iinkqubo zewebhu, zeselfowuni, kunye neze-AI ezikumgangatho wemveliso. Ndikhethekile kwi-C# (.NET Core), Python (FastAPI, Django), Angular, React, Java Spring Boot, kunye nezisombululo ze-Azure cloud.",
      'hero.viewWork': 'Bona Umsebenzi Wam',
      'hero.downloadCV': 'Khuphela i-CV',
      'hero.contact': 'Qhagamshelana',
      'hero.yearsExp': 'Iminyaka Yamava',
      'hero.majorProjects': 'Iiprojekthi Ezinkulu',
      'hero.certifications': 'Iziqinisekiso',

      'about.tag': '01 — Ngami',
      'about.title1': 'Ngami',
      'about.title2': '',
      'about.p1': "NdinguMphuhlisi weSoftware okwangoku osebenza e-<strong>ARMSCOR</strong> (umvelisi wezokhuselo waseMzantsi Afrika), apho ndakha khona iinkqubo zoshishino zolawulo lwe-IP, ukulandelela imvume yokhuseleko, kunye nokudityaniswa okwenziwa ziziganeko.",
      'about.p2': "Ndayila kwaye ndanikezela nge-<strong>IP Management System</strong> edityaniswe ne-Azure Cognitive Services (ukuncipha okungu-70% ekufakweni kwedatha ngesandla), i-<strong>platform yemvume yokhuseleko</strong> efikelela kwiimpazamo zokuqinisekisa ezincinci nge-95%, kunye ne-<strong>platform yokuvumelanisa uluhlu lweempahla</strong> eqhuba iiwebhook ezingaphezu kwesigidi mihla le nge-99.5% yempumelelo yokuhanjiswa.",
      'about.p3': "Ngaphandle komsebenzi, ndakha <strong>inkqubo ye-AI elungele imveliso enee-agent ezili-9</strong> nge-FastAPI ne-React, kunye nenkqubo yokulandelela ixesha nge-biometric esebenzisa ukuqondwa kobuso kwe-Facenet-PyTorch. Ndinobuchule kwi-<strong>Java Spring Boot</strong>, <strong>Databricks</strong>, kunye nophuhliso lwe-cloud.",
      'about.certsTitle': 'Iziqinisekiso',
      'about.techStack': 'Tech Stack',
      'about.radarTitle': 'Isishwankathelo Sobuchule',

      'common.certified': 'Iqinisekisiwe',

      'skill.languages': 'Iilwimi',
      'skill.frontend': 'I-Frontend',
      'skill.backend': 'IiFramework ze-Backend',
      'skill.cloud': 'I-Cloud & DevOps',
      'skill.databases': 'Iidathabheyisi & Iiplatform zeDatha',
      'skill.messaging': 'Imiyalezo & Ukudityaniswa',
      'skill.ai': 'I-AI & Ukufunda koMatshini',
      'skill.testing': 'Ukuvavanya',
      'skill.architecture': 'I-Architecture & Iindlela',

      'exp.tag': '02 — Amava',
      'exp.title1': 'Umsebenzi',
      'exp.title2': 'Amava',
      'exp.role1': 'Injineli yeSoftware',
      'exp.role2': 'Umfundi weSoftware Development',
      'exp.r1b1': "Ndenza i-<strong>IP Management System</strong> epheleleyo (C# .NET, Angular, SQL Server) nge-Azure Cognitive Services — <strong>ukuncipha okungu-70% ekufakweni kwedatha ngesandla</strong>; yathunyelwa kwi-AKS nge-CI/CD nge-Azure DevOps.",
      'exp.r1b2': "Ndayila i-<strong>Security Clearance Tracking Solution</strong> — <strong>ukuncipha okungu-80% ekuqinisekiseni ngesandla, iimpazamo ezincinci nge-95%</strong>. Playwright E2E: <strong>ukugubungela okungu-90%, ukubuyela umva 4h → 15min</strong>.",
      'exp.r1b3': "Ndenza i-<strong>platform yokuvumelanisa uluhlu lweempahla</strong> (RabbitMQ, Redis, SignalR) — <strong>iiwebhook ezingaphezu kwesigidi mihla le, impumelelo engu-99.5%</strong> kubathengisi abangaphezu kwama-50.",
      'exp.r1b4': "Ndayila kwaye ndathumela <strong>inkqubo ye-AI elungele imveliso enee-agent ezili-9</strong> (FastAPI + React) nee-agent ezizimeleyo.",
      'exp.r1b5': "Ndanikezela ngenkxaso yesibini, ukuqokelelwa kweemfuno zabathengi, kwaye <strong>ndaqeqesha abaphuhlisi abancinci</strong>.",
      'exp.r2b1': "I-internship enzulu yophuhliso lwewebhu epheleleyo — C#, .NET Framework, SQL Server, JavaScript, HTML/CSS, Git.",
      'exp.r2b2': "Ndenza isixhobo sangaphakathi sokulandelela amatikiti enkxaso (ASP.NET MVC + Bootstrap) <strong>esamkelwa liqela</strong>.",
      'exp.r2b3': "Ndathatha inxaxheba kwimisitho ye-Agile/Scrum: ii-stand-up, uphononongo lwekhowudi, ukucwangciswa kwe-sprint.",

      'proj.tag': '03 — Iphothifoliyo',
      'proj.title1': 'Iiprojekthi',
      'proj.title2': 'Eziphambili',
      'proj.description': 'Iinkqubo ezikumgangatho wemveliso kwezokhuselo, i-AI, i-logistics, ne-biometrics.',
      'proj.filter.all': 'Konke',
      'proj.filter.dotnet': '.NET',
      'proj.filter.ai': 'I-AI',
      'proj.filter.fullstack': 'I-Full Stack',
      'proj.filter.cloud': 'I-Cloud',
      'proj.noResults': 'Akukho projekthi ihambelana nesi sihluzi.',

      'test.tag': '04 — Ubungqina',
      'test.title1': 'Okuthethwa',
      'test.title2': 'Ngabantu',
      'test.description': 'Ingxelo evela koogxa, abacebisi, nabasebenzisani.',

      'edu.tag': '05 — Imfundo',
      'edu.title1': 'Imfundo &',
      'edu.title2': 'Iziqinisekiso',

      'quote.text': '"Ikamva lelabo abakholelwa kubuhle bamaphupha abo."',
      'quote.motto': 'Phila · Hleka · Thanda · Bhala ikhowudi',

      'contact.tag': '06 — Nxibelelana',
      'contact.title1': 'Masisebenze',
      'contact.title2': 'Kunye',
      'contact.description': "Uneprojekthi engqondweni okanye ufuna ukuxoxa ngamathuba? Ndingathanda ukuva kuwe.",
      'contact.email': 'I-imeyile',
      'contact.phone': 'Ifowuni',
      'contact.location': 'Indawo',

      'form.name': 'Igama',
      'form.namePh': 'Igama lakho elipheleleyo',
      'form.email': 'I-imeyile',
      'form.emailPh': 'wena@umzekelo.com',
      'form.subject': 'Isihloko',
      'form.subjectPh': 'Imalunga nantoni le nto?',
      'form.message': 'Umyalezo',
      'form.messagePh': 'Ndixelele ngeprojekthi yakho okanye ithuba...',
      'form.send': 'Thumela Umyalezo',

      'footer.tagline': 'Injineli yeSoftware · Umphuhlisi weAzure · Injineli ye-AI',
      'footer.copyright': '© 2026 Siphumze Labiti. Yakhiwe ngenkathalo ePitoli, eMzantsi Afrika.'
    }
  };

  const SUPPORTED = ['en', 'af', 'xh'];
  const DEFAULT_LANG = 'en';

  function getInitialLang() {
    const saved = localStorage.getItem('lang');
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
  }

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang-btn'));
    });
  });

  applyTranslations(getInitialLang());

  window.i18n = { setLanguage, getLanguage: () => localStorage.getItem('lang') || DEFAULT_LANG };
})();