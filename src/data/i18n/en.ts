// ─────────────────────────────────────────────────────────
// ENGLISH CONTENT — edit this file to update English text.
// Structure must match fr.ts and mrc.ts.
// ─────────────────────────────────────────────────────────

export const htmlLang = 'en';
export const ogLocale = 'en_US';

// ── SEO ───────────────────────────────────────────────────

export const siteTitle =
  'Yash Djson Dookun — Lightweight Business Systems & APIs for SMEs';
export const siteDescription =
  'Practical internal systems, backend APIs, dashboards, data tools, and lightweight websites for SMEs.';

// ── Hero ──────────────────────────────────────────────────

export const hero = {
  badge: 'Based in Mauritius · Building for SMEs',
  headline: 'Custom business systems, APIs, and AI-powered tools',
  headlineAccent: 'for SMEs.',
  subtext:
    'I help small and medium businesses reduce manual work, centralize operations, and unlock practical AI — without enterprise budgets or vendor lock-in.',
  ctaPrimary: { label: 'View Services', href: '#services' },
  ctaSecondary: { label: 'Contact Me', href: '#contact' },
  credentials:
    'Senior IT Consultant · 5+ years experience · BSc & MSc from University of Mauritius',
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
      { text: "  ✓ Ready to build. Let's talk.", color: 'text-emerald-300' },
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
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const navCta = { label: 'Reach Out', href: '#contact' };

// ── Services Section ──────────────────────────────────────

export const servicesSection = {
  heading: 'Services',
  subtitle: 'Scoped, practical, no bloat.',
};

export const services = [
  {
    number: 1,
    title: 'End-to-End Business Systems',
    description:
      'Full custom systems scoped to your operations — from database to interface. Built for SMEs that need something purpose-built, not another subscription tool that almost fits.',
    examples: [
      'Inventory management systems',
      'Quotation & invoicing tools',
      'Booking & scheduling platforms',
      'Customer management systems',
      'Document tracking workflows',
      'Operational dashboards',
    ],
    boundary:
      "Scoped to what your business actually needs. No bloated features you won't use — just the system that solves the problem.",
  },
  {
    number: 2,
    title: 'Technical Consulting & Architecture',
    description:
      'Strategic guidance on technology decisions, system design, and infrastructure planning. Ideal for businesses that need expert advice before committing to a build.',
    examples: [
      'System architecture reviews',
      'Technology stack selection',
      'Migration planning',
      'Infrastructure recommendations',
      'Technical due diligence',
      'Performance audits',
    ],
    boundary:
      'Advisory and planning work. Implementation is scoped and quoted separately if you decide to move forward.',
  },
  {
    number: 3,
    title: 'Backend APIs & Integration Layers',
    description:
      "Backend services and APIs that connect your tools, automate handoffs, and expose data where it's needed.",
    examples: [
      'REST APIs',
      'Database-backed services',
      'CSV/Excel import & export',
      'API documentation',
      'Webhook-ready endpoints',
      'Integration with client-managed tools',
    ],
    boundary:
      'I build the backend contract. Clients remain responsible for their own PowerApps, Power Automate, Excel, or low-code environment.',
  },
  {
    number: 4,
    title: 'Data Cleanup & Reporting Tools',
    description:
      "Turn messy CSV/Excel data into clean, structured, usable datasets and dashboards. Give your business visibility into what's actually happening.",
    examples: [
      'Deduplication',
      'Standardization',
      'Reporting exports',
      'Operational dashboards',
      'Internal analytics',
      'Lead scoring pipelines',
    ],
    boundary:
      'I structure and clean the data. Ongoing data entry and maintenance stays with your team.',
  },
  {
    number: 5,
    title: 'AI-Powered Tools & Automation',
    description:
      'Practical AI that saves your team hours — not hype, but real tools that use LLMs and generative AI to automate document processing, search internal knowledge, or assist with repetitive tasks.',
    examples: [
      'Document classification & extraction',
      'Internal knowledge search (RAG)',
      'AI-assisted data entry',
      'Automated report generation',
      'Intelligent workflow routing',
      'Custom AI agents for business tasks',
    ],
    boundary:
      "Built around your real workflows. I scope what AI can and can't solve for your case before building anything.",
  },
  {
    number: 6,
    title: 'Lightweight Business Websites',
    description:
      'Simple, professional websites that give your business a credible online presence and make it easy for clients to reach you.',
    examples: [
      'Static website',
      'Contact links',
      'WhatsApp button',
      'Business/service information',
      'Hosting setup',
    ],
    boundary:
      'Focused on design, structure, and hosting — marketing and ad campaigns are managed separately by the client.',
  },
];

// ── What I Build ──────────────────────────────────────────

export const buildAreas = {
  heading: 'What I Build',
  items: [
    {
      tag: 'internal-tools',
      title: 'Internal Business Tools',
      description:
        'Custom tools for quotations, inventory, booking, reporting, document tracking, and daily operations.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      tag: 'backend-apis',
      title: 'Backend APIs',
      description:
        'REST APIs and backend services that can be consumed by PowerApps, Power Automate, Excel, dashboards, or other internal tools.',
      icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    },
    {
      tag: 'data-reporting',
      title: 'Data & Reporting Systems',
      description:
        'Clean messy data, structure CSV/Excel files, build reports, and create dashboards for operational visibility.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      tag: 'websites',
      title: 'Lightweight Business Websites',
      description:
        'Simple professional websites for credibility and contactability. Clean, fast, and ready to go live.',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    },
    {
      tag: 'knowledge-search',
      title: 'Knowledge & Search Systems',
      description:
        'Document search, RAG-style retrieval, internal knowledge bases, and searchable repositories.',
      icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
    {
      tag: 'monitoring',
      title: 'Monitoring Tools',
      description:
        'Small systems that track public/internal data sources and expose structured information.',
      icon: 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
    },
  ],
};

// ── How I Work ────────────────────────────────────────────

export const process = {
  heading: 'How I Work',
  subtitle: 'From first conversation to delivered system.',
  steps: [
    {
      number: '01',
      title: 'Describe the workflow',
      description:
        "You tell me what process is painful — manual data entry, scattered spreadsheets, a missing dashboard, or a system that doesn't exist yet.",
      icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    },
    {
      number: '02',
      title: 'I scope the system',
      description:
        'I define what gets built, the deliverables, the stack, and the timeline. You get a clear, written proposal before anything starts.',
      icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z',
    },
    {
      number: '03',
      title: 'Build & iterate',
      description:
        'I build in short cycles with regular check-ins. You see progress, give feedback, and the system takes shape around your real needs.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      number: '04',
      title: 'Deliver with docs',
      description:
        'You get the finished system, documentation, and everything needed to run and maintain it independently.',
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
  heading: 'Scope & Focus',
  subtitle:
    "To deliver well, I keep a clear focus. Here's what falls inside and outside my work.",
  footer:
    'I build the systems, tools, and automation that help your business run better — but the goal is reliable software, not marketing management or low-code platform maintenance.',
  labels: {
    whatIDo: 'What I do',
    outsideScope: 'Outside my scope',
    notPrefix: 'Not:',
  },
  items: [
    { area: 'Custom tools to replace manual processes', not: 'Social media management' },
    { area: 'Dashboards & reporting for your operations', not: 'Facebook or Google ads' },
    { area: 'AI tools that save your team time', not: 'Branding or graphic design' },
    { area: 'Data cleanup, structuring & pipelines', not: 'SEO campaigns or ad management' },
    { area: 'APIs & system integrations', not: 'RPA bot development' },
    { area: 'Technical architecture & consulting', not: 'PowerApps / Power Platform maintenance' },
  ],
};

// ── Projects Section Labels ───────────────────────────────

export const projectsSection = {
  heading: 'Selected Systems & Technical Work',
  subtitle: 'Real systems built for real problems — data pipelines, monitoring tools, legal tech, and AI automation.',
  problemsHeading: 'Problems I solve',
  problems: [
    'Replace spreadsheet-heavy workflows',
    'Centralize fragmented processes',
    'Build internal business tools',
    'Expose clean APIs',
    'Turn messy data into usable information',
  ],
  highlightsLabel: 'What this delivers',
  viewGithub: 'View on GitHub',
  feedsInto: 'feeds into',
};

// ── Tech Stack Label ──────────────────────────────────────

export const techStackLabel = 'Technologies I work with';

// ── About ─────────────────────────────────────────────────

export const about = {
  label: 'About',
  name: 'Yash Djson Dookun',
  tagline: 'Senior IT Consultant · Mauritius',
  paragraphs: [
    "I'm a Senior IT Consultant with 5+ years of experience across enterprise consulting and software development. I hold a BSc in Web & Multimedia Development (First Class Honours) and an MSc in Network Security & Management from the University of Mauritius.",
    'My day-to-day involves designing, building, and integrating custom software solutions across multiple system components. Outside of that, I build practical systems for SMEs in Mauritius — the kind of internal tools, APIs, data pipelines, and AI-powered automation that help small businesses operate more efficiently without enterprise budgets.',
    'I work independently on these projects, which means direct communication, no handoffs, and full ownership from scoping to delivery.',
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
  heading: 'Working Principles',
  footer:
    'I prefer small, well-scoped systems that solve specific operational problems. The goal is not to build bloated enterprise software, but to create tools that businesses can actually use and maintain.',
  items: [
    { title: 'Clear scope before building', detail: 'Define deliverables and boundaries upfront.' },
    { title: 'Simple architecture over complexity', detail: 'No over-engineering. Solve the actual problem.' },
    { title: 'Maintainable systems', detail: 'Code someone else can understand and extend.' },
    { title: 'Documentation included', detail: 'Every system ships with docs, not just code.' },
    { title: 'Built for low-maintenance operation', detail: 'Systems that run without constant attention.' },
  ],
};

// ── FAQ ───────────────────────────────────────────────────

export const faq = {
  heading: 'Common Questions',
  subtitle: 'Honest answers. No sales pitch.',
  items: [
    {
      q: 'How much does a project typically cost?',
      a: 'It depends on scope, but most projects for SMEs fall between Rs 15,000–80,000. A simple website or data cleanup tool is on the lower end. A full inventory system or AI-powered tool is on the higher end. I always scope and quote before any work starts — no surprises.',
    },
    {
      q: 'How long does it take?',
      a: 'Most projects take 2–6 weeks. A basic website might be done in under a week. A full business system with multiple features usually takes 3–5 weeks. I work in short cycles so you see progress throughout, not just at the end.',
    },
    {
      q: "I'm not technical — is that a problem?",
      a: "Not at all. Most of my clients aren't. You describe the problem in your own words — \"we track everything in a spreadsheet and it's a mess\" — and I translate that into a system. You don't need to know anything about APIs or databases.",
    },
    {
      q: 'Do I need to prepare anything before we start?',
      a: 'Just a clear picture of the problem you want solved. If you have sample spreadsheets, documents, or screenshots of your current process, that helps. But I can also help you figure out the scope during our first conversation.',
    },
    {
      q: 'Can you work with tools we already use?',
      a: "Yes. If you use Excel, Google Sheets, WhatsApp, or any tool with an API, I can usually build something that connects to it. I won't ask you to throw away what's working — I build around it.",
    },
    {
      q: 'What happens after delivery?',
      a: "Every project ships with documentation and a handover. If something breaks in the first month, I fix it at no extra cost. Beyond that, I offer ongoing support on a case-by-case basis — but the goal is to build systems that run without needing me.",
    },
    {
      q: 'Why not just use an off-the-shelf tool?',
      a: "If one fits, you should. But if you've tried Notion, Trello, Zoho, or Airtable and still end up back in spreadsheets, it's probably because your workflow doesn't fit a generic tool. That's exactly what I build for.",
    },
    {
      q: 'What if the scope changes midway?',
      a: "It happens. Small adjustments are normal and expected. If the scope grows significantly, I'll flag it, re-scope, and quote the additional work before proceeding. No one gets blindsided.",
    },
  ],
};

// ── Contact ───────────────────────────────────────────────

export const contactSection = {
  heading: 'Get in Touch',
  subtitle:
    'Have a manual workflow, spreadsheet, or internal process that is becoming difficult to manage?',
  ctaPrimary: { label: 'Describe the workflow', emailSubject: 'Project Inquiry' },
  ctaSecondary: { label: 'View GitHub' },
};

// ── Footer ────────────────────────────────────────────────

export const footer = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

// ── UI Strings ────────────────────────────────────────────

export const skipToContent = 'Skip to main content';

export const notFoundPage = {
  title: 'Page Not Found',
  heading: '404',
  message: "The page you're looking for doesn't exist or has been moved.",
  homeLink: 'Go home',
  contactLink: 'Contact me',
};
