// ─────────────────────────────────────────────────────────
// KONTENI KREOL MORISIEN — modifie sa fisie la pou tekst KR.
// Strikir bizin parey kouma en.ts ek fr.ts.
//
// REGL:
//   - Gard bann term teknik/biznes an Anglais (API, backend,
//     database, dashboard, pipeline, hosting, workflow, etc.)
//   - Pa tradwir proper nouns: degree titles, University of
//     Mauritius, First Class Honours, law names, brand names.
//   - Ekrir Kreol fonetikman: pa double let, pa let myet.
//   - Servi code-switching natirel kouma Morisien koze vre.
// ─────────────────────────────────────────────────────────

export const htmlLang = 'mfe';
export const ogLocale = 'fr_MU';

// ── SEO ───────────────────────────────────────────────────

export const siteTitle =
  'Yash Djson Dookun — Business Systems & APIs pou SMEs';
export const siteDescription =
  'Internal systems, backend APIs, dashboards, data tools ek websites pou bann SME.';

// ── Hero ──────────────────────────────────────────────────

export const hero = {
  badge: 'Based in Mauritius · Built for SMEs',
  headline: 'Business systems, APIs ek AI tools lor mezir',
  headlineAccent: 'pou bann SME.',
  subtext:
    'Mo ed bann SME gagn mwens keksoz pou fer manyelman, gard zot operations pli organize ek servi AI dan enn fason pratik — san gro budget ou depann lor enn fourniser.',
  ctaPrimary: { label: 'Get servis', href: '#services' },
  ctaSecondary: { label: 'Kontakte mwa', href: '#contact' },
  credentials:
    'Senior IT Consultant · 5+ an lexperyans · BSc & MSc, University of Mauritius',
};

// ── Hero Terminal Scenarios ───────────────────────────────

export const terminalScenarios = [
  {
    title: 'whoami',
    command: 'whoami --verbose',
    lines: [
      { text: '', color: '' },
      { text: '  Yash Djson Dookun', color: 'text-slate-200' },
      { text: '  Senior IT Consultant · Mauritius', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  Experience:  5+ years', color: 'text-slate-400' },
      { text: '  Education:   MSc Network Security, BSc Web Dev', color: 'text-slate-400' },
      { text: '  GitHub:      358 contributions · 5 active repos', color: 'text-slate-400' },
      { text: '  Focus:       Systems, APIs, AI tools for SMEs', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Available for projects', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'workflow-analysis',
    command: 'describe --workflow "inventory-tracking"',
    lines: [
      { text: '', color: '' },
      { text: '  Analyzing workflow...', color: 'text-slate-400' },
      { text: '  Type: Internal business tool', color: 'text-sky-300' },
      { text: '  Recommended: REST API + dashboard', color: 'text-sky-300' },
      { text: '  Stack: Python, FastAPI, SQLite', color: 'text-sky-300' },
      { text: '  Timeline: 2-3 weeks', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Pare pou build. Anou koze.', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'data-pipeline',
    command: 'pipeline run --source sme-directory --score',
    lines: [
      { text: '', color: '' },
      { text: '  Source: SME e-Directory (Mauritius)', color: 'text-slate-400' },
      { text: '  Scraped:      11,247 raw records', color: 'text-slate-400' },
      { text: '  Normalized:   11,103 cleaned', color: 'text-slate-400' },
      { text: '  Deduplicated:  9,831 unique', color: 'text-sky-300' },
      { text: '  Scored:        2,143 high-priority', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Exported: clients_scored.csv', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'legal-search',
    command: 'query "data protection employer obligations"',
    lines: [
      { text: '', color: '' },
      { text: '  Searching 855 indexed documents...', color: 'text-slate-400' },
      { text: '  Model: all-MiniLM-L6-v2', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  [0.94] Data Protection Act 2017 — §28', color: 'text-sky-300' },
      { text: '  [0.87] DPA 2017 — §36(1)', color: 'text-sky-300' },
      { text: '  [0.81] Employment Rights Act — §13A', color: 'text-sky-300' },
      { text: '  ✓ 3 results in 0.42s', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'outage-monitor',
    command: 'fetch ceb --district plaines-wilhems',
    lines: [
      { text: '', color: '' },
      { text: '  Fetching CEB outage data...', color: 'text-slate-400' },
      { text: '  District: Plaines Wilhems', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  ▸ Rose Hill — 08:30-15:00 — active', color: 'text-sky-300' },
      { text: '  ▸ Quatre Bornes — 09:00-12:00 — upcoming', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ 3 active | 2 upcoming | 5 cleared', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'api-health',
    command: 'status --check all --format compact',
    lines: [
      { text: '', color: '' },
      { text: '  Checking endpoints...', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  /api/clients     200  12ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/invoices    200  18ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/reports     200   9ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/search      200  34ms  ✓', color: 'text-emerald-300' },
      { text: '  ✓ All 4 endpoints healthy', color: 'text-emerald-300' },
    ],
  },
];

// ── Navigation ────────────────────────────────────────────

export const navLinks = [
  { label: 'Servis', href: '#services' },
  { label: 'Travay', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export const navCta = { label: 'Kontakte mwa', href: '#contact' };

// ── Services Section ──────────────────────────────────────

export const servicesSection = {
  heading: 'Servis',
  subtitle: 'Kadre, pratik, pa konplike.',
};

export const services = [
  {
    number: 1,
    title: 'Custom business systems',
    description:
      'Systems lor mezir adapte avek workflow ki ou business deza ena — depi database ziska frontend. Build pou bann SME ki anvi keksoz pratik ki vremem adapte avek zot operations.',
    examples: [
      'Inventory management',
      'Devi & invoicing',
      'Booking & scheduling',
      'Customer management',
      'Document tracking',
      'Operational dashboards',
    ],
    boundary:
      'Kadre pou seki ou business vremem bizin. Pa pou met features an tro — zis sistem ki rezoud problem la.',
  },
  {
    number: 2,
    title: 'Technical consulting & architecture',
    description:
      'Guidance lor architecture, tech stack, infrastructure ek technical decisions avan ou invest dan enn system.',
    examples: [
      'System architecture reviews',
      'Technology stack selection',
      'Migration planning',
      'Infrastructure recommendations',
      'Technical due diligence',
      'Performance audits',
    ],
    boundary:
      'Travay consulting ek planning. Development kadre ek sifre separeman si ou desid pou kontinie.',
  },
  {
    number: 3,
    title: 'Backend APIs & integrations',
    description:
      'Backend services ek APIs ki konek ou bann tools ansam, automate transfer data ek expose information kot bizin.',
    examples: [
      'REST APIs',
      'Database-backed services',
      'CSV/Excel import & export',
      'API documentation',
      'Webhook endpoints',
      'Integration avek ou bann tools',
    ],
    boundary:
      'Mo build backend/API layer la. Client res responsab zot PowerApps, Power Automate, Excel ou lezot low-code tools.',
  },
  {
    number: 4,
    title: 'Data cleanup & reporting',
    description:
      'Transform bann CSV/Excel messy an datasets prop ek organize pou reporting, dashboards ek internal systems.',
    examples: [
      'Deduplication',
      'Standardization',
      'Reporting exports',
      'Operational dashboards',
      'Internal analytics',
      'Lead scoring pipelines',
    ],
    boundary:
      'Mo organize ek netway data la. Data entry ek maintenance kontini res avek ou team.',
  },
  {
    number: 5,
    title: 'AI tools & automation',
    description:
      'Practical AI tools ki fer ou team gagn letan — pa zis buzzwords, me keksoz ki vremem itil dan operations toulezour.',
    examples: [
      'Document classification & extraction',
      'Internal knowledge search (RAG)',
      'AI-assisted data entry',
      'Automated report generation',
      'Intelligent workflow routing',
      'Custom AI agents pou business tasks',
    ],
    boundary:
      'Build otour ou vre workflows. Mo scope seki AI kapav ek pa kapav rezoud dan ou case avan mo build nanye.',
  },
  {
    number: 6,
    title: 'Lightweight business websites',
    description:
      'Simple professional websites pou donn ou business enn proper online presence ek fer dimounn fasil kontakte ou.',
    examples: [
      'Static website',
      'Contact links',
      'Bouton WhatsApp',
      'Business/service info',
      'Hosting setup',
    ],
    boundary:
      'Focus lor design, structure ek hosting — marketing ek ad campaigns zere separeman par client.',
  },
];

// ── What I Build ──────────────────────────────────────────

export const buildAreas = {
  heading: 'Ki mo build',
  items: [
    {
      tag: 'internal-tools',
      title: 'Internal business tools',
      description:
        'Custom tools pou devi, inventory, booking, reporting, document tracking ek daily operations.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      tag: 'backend-apis',
      title: 'Backend APIs',
      description:
        'REST APIs ek backend services ki kapav konek avek PowerApps, Power Automate, Excel, dashboards ou lezot internal tools.',
      icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    },
    {
      tag: 'data-reporting',
      title: 'Data & reporting',
      description:
        'Netway bann CSV/Excel messy, organize data ek build dashboards/reporting pou gagn enn pli bon vizion lor operations.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      tag: 'websites',
      title: 'Business websites',
      description:
        'Websites sinp ek profesyonel pou donn ou business enn bon online presence ek fer dimounn fasil kontakte ou.',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    },
    {
      tag: 'knowledge-search',
      title: 'Knowledge & search systems',
      description:
        'Document search, RAG-style retrieval, internal knowledge bases ek searchable repos.',
      icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
    {
      tag: 'monitoring',
      title: 'Monitoring tools',
      description:
        'Ti systems ki track public/internal data sources ek expose structured information.',
      icon: 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
    },
  ],
};

// ── How I Work ────────────────────────────────────────────

export const process = {
  heading: 'Kouma mo travay',
  subtitle: 'Depi premie konversasyon ziska system livre.',
  steps: [
    {
      number: '01',
      title: 'Dekrir problem la',
      description:
        'Ou dir mwa ki process pe fer dimal — manual data entry, spreadsheets partou, dashboard ki manke, ou enn system ki pankor existe.',
      icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    },
    {
      number: '02',
      title: 'Mo scope system la',
      description:
        'Mo defini ki pou build, bann deliverables, stack ek timeline. Ou gagn enn propozisyon ekri kler avan nanye koumanse.',
      icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z',
    },
    {
      number: '03',
      title: 'Build & iterate',
      description:
        'Mo build par ti cycles avek check-ins regilye. Ou trouv progress, donn feedback, ek system la pran form otour ou vre needs.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      number: '04',
      title: 'Delivery avek documentation',
      description:
        'Ou gagn system fini, documentation ek tou seki bizin pou run ek maintain li ou-mem.',
      icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    },
  ],
};

// ── Stats ─────────────────────────────────────────────────

export const stats = [
  { value: '5', label: 'Systems built' },
  { value: '11K+', label: 'Records processed' },
  { value: '3', label: 'Data pipelines' },
  { value: '855', label: 'Documents indexed' },
];

// ── Scope & Focus ─────────────────────────────────────────

export const scope = {
  heading: 'Ki mo fer / ki mo pa fer',
  subtitle:
    'Pou gard keksoz kler depi koumansman.',
  footer:
    'Mo focus lor systems, tools ek backend software — pa marketing ou low-code maintenance.',
  labels: {
    whatIDo: 'Ki mo fer',
    outsideScope: 'Pa dan mo scope',
    notPrefix: 'Pa:',
  },
  items: [
    { area: 'Custom tools pou ranplas manual processes', not: 'Social media management' },
    { area: 'Dashboards & reporting pou ou operations', not: 'Facebook ou Google ads' },
    { area: 'AI tools ki fer ou team gagn letan', not: 'Branding ou graphic design' },
    { area: 'Data cleanup, structuring & pipelines', not: 'SEO campaigns ou ad management' },
    { area: 'APIs & system integrations', not: 'RPA bot development' },
    { area: 'Technical architecture & consulting', not: 'PowerApps / Power Platform maintenance' },
  ],
};

// ── Projects Section Labels ───────────────────────────────

export const projectsSection = {
  heading: 'Systems & travay teknik seleksyone',
  subtitle: 'Vre systems pou vre problems — data pipelines, monitoring tools, legal tech ek AI automation.',
  problemsHeading: 'Problems ki mo rezoud',
  problems: [
    'Ranplas workflow ki depann tro lor spreadsheets',
    'Sentralize bann process ki fragmente',
    'Build internal business tools',
    'Expose clean APIs',
    'Transform messy data an information itilizab',
  ],
  highlightsLabel: 'Ki sa delivre',
  viewGithub: 'Get lor GitHub',
  feedsInto: 'feeds into',
};

// ── Tech Stack Label ──────────────────────────────────────

export const techStackLabel = 'Teknolozi ki mo servi';

// ── About ─────────────────────────────────────────────────

export const about = {
  label: 'Lor mwa',
  name: 'Yash Djson Dookun',
  tagline: 'Senior IT Consultant · Mauritius',
  paragraphs: [
    "Mo enn Senior IT Consultant avek plis ki 5 an lexperyans dan enterprise consulting ek software development. Mo ena enn BSc in Web & Multimedia Development (First Class Honours) ek enn MSc in Network Security & Management depi University of Mauritius.",
    'Dan mo travay toulezour, mo design, build ek integre custom software solutions. Anplis sa, mo build bann practical systems pou SMEs dan Moris — internal tools, APIs, data pipelines ek AI automation ki ed ti business operate pli efisaman san gro budget.',
    'Mo travay indepandaman lor sa bann proze la — direct communication, zero intermedier, ek mo pran sarz konpletman depi scoping ziska delivery.',
  ],
  links: [
    { label: 'dookun88@gmail.com', href: 'mailto:dookun88@gmail.com', icon: 'email' },
    { label: '+230 5752 2027', href: 'https://wa.me/23057522027', icon: 'phone' },
    { label: 'GitHub', href: 'https://github.com/YashDjsonDookun?tab=repositories', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashdjsondookun', icon: 'linkedin' },
  ],
};

// ── Principles ────────────────────────────────────────────

export const principles = {
  heading: 'Kouma mo travay',
  footer:
    'Mo prefer build bann systems sinp ek bien scope ki rezoud bann real operational problems — pa bann overcomplicated enterprise software.',
  items: [
    { title: 'Scope kler avan build', detail: 'Defini deliverables ek limits depi koumansman.' },
    { title: 'Simple architecture over complexity', detail: 'Pa over-engineer. Rezoud vre problem la.' },
    { title: 'Maintainable systems', detail: 'Kod ki enn lot dimounn kapav konpran ek extend.' },
    { title: 'Documentation included', detail: 'Sak system ship avek documentation, pa zis kod.' },
    { title: 'Build pou low maintenance', detail: 'Systems ki roule san atansyon konstan.' },
  ],
};

// ── FAQ ───────────────────────────────────────────────────

export const faq = {
  heading: 'Bann kestion kouran',
  subtitle: 'Repons onet. Pa sales pitch.',
  items: [
    {
      q: 'Konbien enn proze koute normalman ?',
      a: 'Sa depend lor scope, me laplipar proze SME tom ant Rs 15,000–80,000. Enn sit sinp ou data cleanup tool li dan ba range la. Enn full inventory system ou AI tool li dan lao. Mo toultan scope ek quote avan start travay — zero sipriz.',
    },
    {
      q: 'Konbien letan sa pran ?',
      a: 'Laplipar proze pran 2–6 semenn. Enn basic website kapav fini dan mwens ki enn semenn. Enn full business system avek plizir features pran normalman 3–5 semenn. Mo travay par ti cycles pou ou kapav trouv progress partou, pa zis alafen.',
    },
    {
      q: 'Mo pa technical — eski sa enn problem ?',
      a: 'Non. Laplipar dimounn mo travay avek pa technical. Ou explik problem la dan ou fason — "nou track tou dan enn spreadsheet ek sa enn dezord" — ek mo translate sa an enn system ki kapav mars.',
    },
    {
      q: 'Eski mo bizin prepar keksoz avan nou koumanse ?',
      a: 'Zis enn lide kler lor problem ki ou anvi rezoud. Si ou ena sample spreadsheets, documents ou screenshots ou current process, sa ed. Me mo kapav osi ed ou defini scope la dan nou premie konversasyon.',
    },
    {
      q: 'Eski ou kapav travay avek bann tools ki nou deza servi ?',
      a: 'Wi. Si ou deza servi Excel, Google Sheets, WhatsApp ou lezot software avek enn API, mo kapav normalman build keksoz ki konek ar li. Mo pa pou demann ou zet seki pe mars — mo build otour.',
    },
    {
      q: 'Ki arive apre delivery ?',
      a: 'Sak proze ship avek documentation ek handover. Si keksoz kas dan premie mwa, mo fix li san extra cost. Apre sa, mo ofer ongoing support case by case — me lobzektif se build systems ki mars san bizin mwa.',
    },
    {
      q: 'Kifer pa zis servi enn off-the-shelf tool ?',
      a: 'Si enn standard tool kapav fer travay la bien, servi li. Me boukou SMEs realize ki zot workflow pa rant prop dan bann generic tools, ek zot fini retourn lor spreadsheets. Se la kot custom systems gagn sans.',
    },
    {
      q: 'Ki arive si scope la sanze an milye semin ?',
      a: 'Sa arive. Ti adjustments zot normal ek expected. Si scope la grandi bokou, mo flag li, re-scope ek quote travay siplemanter avan kontinie. Personn pa gagn sipriz.',
    },
  ],
};

// ── Contact ───────────────────────────────────────────────

export const contactSection = {
  heading: 'Kontakte mwa',
  subtitle:
    'Si ena enn workflow, spreadsheet ou process ki pe vinn messy, anou koze.',
  ctaPrimary: { label: 'Explik mwa problem la', emailSubject: 'Project Inquiry' },
  ctaSecondary: { label: 'Get GitHub' },
};

// ── Footer ────────────────────────────────────────────────

export const footer = {
  links: [
    { label: 'Servis', href: '#services' },
    { label: 'Travay', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
  ],
};

// ── UI Strings ────────────────────────────────────────────

export const skipToContent = 'Al direk lor konteni prinsipal';

export const notFoundPage = {
  title: 'Paz pa trouve',
  heading: '404',
  message: 'Paz ki ou pe rode la pa existe ou finn deplase.',
  homeLink: 'Retourn lakaz',
  contactLink: 'Kontakte mwa',
};
