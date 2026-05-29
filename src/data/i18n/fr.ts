// ─────────────────────────────────────────────────────────
// CONTENU FRANÇAIS — modifiez ce fichier pour le texte FR.
// La structure doit correspondre à en.ts et mrc.ts.
// ─────────────────────────────────────────────────────────

export const htmlLang = 'fr';
export const ogLocale = 'fr_FR';

// ── SEO ───────────────────────────────────────────────────

export const siteTitle =
  'Yash Djson Dookun — Systèmes métier & APIs pour PME';
export const siteDescription =
  'Systèmes internes, APIs backend, tableaux de bord, outils de données et sites web pour PME.';

// ── Hero ──────────────────────────────────────────────────

export const hero = {
  badge: 'Basé à Maurice · Solutions pour PME',
  headline: 'Systèmes métier, APIs et outils IA sur mesure',
  headlineAccent: 'pour les PME.',
  subtext:
    "J'aide les petites et moyennes entreprises à réduire le travail manuel, centraliser leurs opérations et exploiter l'IA pratique — sans budgets d'entreprise ni dépendance fournisseur.",
  ctaPrimary: { label: 'Voir les services', href: '#services' },
  ctaSecondary: { label: 'Me contacter', href: '#contact' },
  credentials:
    "Consultant IT Senior · 5+ ans d'expérience · BSc & MSc de l'Université de Maurice",
};

// ── Hero Terminal Scenarios ───────────────────────────────

export const terminalScenarios = [
  {
    title: 'whoami',
    command: 'whoami --verbose',
    lines: [
      { text: '', color: '' },
      { text: '  Yash Djson Dookun', color: 'text-slate-200' },
      { text: '  Consultant IT Senior · Maurice', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  Expérience:  5+ ans', color: 'text-slate-400' },
      { text: '  Formation:   MSc Sécurité Réseaux, BSc Développement Web', color: 'text-slate-400' },
      { text: '  GitHub:      358 contributions · 5 dépôts actifs', color: 'text-slate-400' },
      { text: '  Focus:       Systèmes, APIs, outils IA pour PME', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Disponible pour projets', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'workflow-analysis',
    command: 'describe --workflow "suivi-inventaire"',
    lines: [
      { text: '', color: '' },
      { text: '  Analyse du workflow...', color: 'text-slate-400' },
      { text: '  Type: Outil métier interne', color: 'text-sky-300' },
      { text: '  Recommandé: API REST + tableau de bord', color: 'text-sky-300' },
      { text: '  Stack: Python, FastAPI, SQLite', color: 'text-sky-300' },
      { text: '  Délai: 2-3 semaines', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Prêt à construire. Discutons.', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'data-pipeline',
    command: 'pipeline run --source repertoire-pme --score',
    lines: [
      { text: '', color: '' },
      { text: '  Source: e-Directory PME (Maurice)', color: 'text-slate-400' },
      { text: '  Collectés:    11 247 enregistrements bruts', color: 'text-slate-400' },
      { text: '  Normalisés:   11 103 nettoyés', color: 'text-slate-400' },
      { text: '  Dédupliqués:   9 831 uniques', color: 'text-sky-300' },
      { text: '  Scorés:        2 143 haute priorité', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ Exporté: clients_scores.csv', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'legal-search',
    command: 'query "protection données obligations employeur"',
    lines: [
      { text: '', color: '' },
      { text: '  Recherche dans 855 documents indexés...', color: 'text-slate-400' },
      { text: '  Modèle: all-MiniLM-L6-v2', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  [0.94] Data Protection Act 2017 — §28', color: 'text-sky-300' },
      { text: '  [0.87] DPA 2017 — §36(1)', color: 'text-sky-300' },
      { text: '  [0.81] Employment Rights Act — §13A', color: 'text-sky-300' },
      { text: '  ✓ 3 résultats en 0.42s', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'outage-monitor',
    command: 'fetch ceb --district plaines-wilhems',
    lines: [
      { text: '', color: '' },
      { text: '  Récupération des coupures CEB...', color: 'text-slate-400' },
      { text: '  District: Plaines Wilhems', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  ▸ Rose Hill — 08:30-15:00 — en cours', color: 'text-sky-300' },
      { text: '  ▸ Quatre Bornes — 09:00-12:00 — à venir', color: 'text-sky-300' },
      { text: '', color: '' },
      { text: '  ✓ 3 en cours | 2 à venir | 5 terminées', color: 'text-emerald-300' },
    ],
  },
  {
    title: 'api-health',
    command: 'status --check all --format compact',
    lines: [
      { text: '', color: '' },
      { text: '  Vérification des endpoints...', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: '  /api/clients     200  12ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/invoices    200  18ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/reports     200   9ms  ✓', color: 'text-emerald-300' },
      { text: '  /api/search      200  34ms  ✓', color: 'text-emerald-300' },
      { text: '  ✓ 4 endpoints opérationnels', color: 'text-emerald-300' },
    ],
  },
];

// ── Navigation ────────────────────────────────────────────

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const navCta = { label: 'Me contacter', href: '#contact' };

// ── Services Section ──────────────────────────────────────

export const servicesSection = {
  heading: 'Services',
  subtitle: 'Ciblés, pratiques, sans superflu.',
};

export const services = [
  {
    number: 1,
    title: 'Systèmes métier de bout en bout',
    description:
      "Des systèmes sur mesure adaptés à vos opérations — de la base de données à l'interface. Conçus pour les PME qui ont besoin d'un outil adapté, pas d'un énième abonnement qui ne convient qu'à moitié.",
    examples: [
      'Gestion des stocks',
      'Devis & facturation',
      'Réservation & planification',
      'Gestion clients',
      'Suivi de documents',
      'Tableaux de bord opérationnels',
    ],
    boundary:
      "Limité à ce dont votre entreprise a réellement besoin. Pas de fonctionnalités superflues — juste le système qui résout le problème.",
  },
  {
    number: 2,
    title: 'Conseil technique & architecture',
    description:
      'Accompagnement stratégique sur les décisions technologiques, la conception de systèmes et la planification d\'infrastructure. Idéal pour les entreprises qui ont besoin de conseils d\'experts avant de s\'engager.',
    examples: [
      "Revues d'architecture système",
      'Choix de technologies',
      'Planification de migration',
      "Recommandations d'infrastructure",
      'Due diligence technique',
      'Audits de performance',
    ],
    boundary:
      'Travail de conseil et de planification. La mise en œuvre est cadrée et chiffrée séparément si vous décidez de poursuivre.',
  },
  {
    number: 3,
    title: "APIs & couches d'intégration",
    description:
      'Services backend et APIs qui connectent vos outils, automatisent les transferts et exposent les données là où elles sont nécessaires.',
    examples: [
      'APIs REST',
      'Services avec base de données',
      'Import/export CSV/Excel',
      'Documentation API',
      'Endpoints webhook',
      'Intégration avec vos outils existants',
    ],
    boundary:
      'Je construis le contrat backend. Le client reste responsable de son environnement PowerApps, Power Automate, Excel ou low-code.',
  },
  {
    number: 4,
    title: 'Nettoyage de données & reporting',
    description:
      'Transformez des données CSV/Excel désordonnées en jeux de données propres, structurés et exploitables. Donnez à votre entreprise une visibilité sur ce qui se passe réellement.',
    examples: [
      'Dédoublonnage',
      'Standardisation',
      'Exports de rapports',
      'Tableaux de bord',
      'Analytique interne',
      'Pipelines de scoring',
    ],
    boundary:
      "Je structure et nettoie les données. La saisie et la maintenance continues restent à la charge de votre équipe.",
  },
  {
    number: 5,
    title: 'Outils IA & automatisation',
    description:
      "De l'IA pratique qui fait gagner des heures à votre équipe — pas du battage médiatique, mais de vrais outils utilisant les LLMs et l'IA générative pour automatiser le traitement de documents, la recherche interne ou les tâches répétitives.",
    examples: [
      'Classification & extraction de documents',
      'Recherche de connaissances internes (RAG)',
      'Saisie assistée par IA',
      'Génération automatique de rapports',
      'Routage intelligent de workflows',
      'Agents IA pour tâches métier',
    ],
    boundary:
      "Construit autour de vos vrais workflows. Je cadre ce que l'IA peut et ne peut pas résoudre dans votre cas avant de construire quoi que ce soit.",
  },
  {
    number: 6,
    title: 'Sites web professionnels légers',
    description:
      'Des sites simples et professionnels qui donnent à votre entreprise une présence en ligne crédible et facilitent le contact avec vos clients.',
    examples: [
      'Site statique',
      'Liens de contact',
      'Bouton WhatsApp',
      'Informations entreprise/services',
      'Mise en place hébergement',
    ],
    boundary:
      "Focalisé sur le design, la structure et l'hébergement — le marketing et les campagnes publicitaires sont gérés séparément par le client.",
  },
];

// ── What I Build ──────────────────────────────────────────

export const buildAreas = {
  heading: 'Ce que je construis',
  items: [
    {
      tag: 'internal-tools',
      title: 'Outils métier internes',
      description:
        'Outils sur mesure pour devis, inventaire, réservation, reporting, suivi de documents et opérations quotidiennes.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      tag: 'backend-apis',
      title: 'APIs Backend',
      description:
        'APIs REST et services backend consommables par PowerApps, Power Automate, Excel, tableaux de bord ou autres outils internes.',
      icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    },
    {
      tag: 'data-reporting',
      title: 'Données & systèmes de reporting',
      description:
        'Nettoyage de données, structuration de fichiers CSV/Excel, rapports et tableaux de bord pour la visibilité opérationnelle.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      tag: 'websites',
      title: 'Sites web professionnels',
      description:
        'Sites web simples et professionnels pour la crédibilité et la contactabilité. Propres, rapides et prêts à être mis en ligne.',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    },
    {
      tag: 'knowledge-search',
      title: 'Systèmes de recherche & connaissances',
      description:
        'Recherche documentaire, récupération style RAG, bases de connaissances internes et dépôts interrogeables.',
      icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
    {
      tag: 'monitoring',
      title: 'Outils de monitoring',
      description:
        'Petits systèmes qui suivent les sources de données publiques/internes et exposent des informations structurées.',
      icon: 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
    },
  ],
};

// ── How I Work ────────────────────────────────────────────

export const process = {
  heading: 'Comment je travaille',
  subtitle: 'De la première conversation au système livré.',
  steps: [
    {
      number: '01',
      title: 'Décrivez le problème',
      description:
        "Vous m'expliquez quel processus est pénible — saisie manuelle, tableurs éparpillés, tableau de bord manquant, ou un système qui n'existe pas encore.",
      icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    },
    {
      number: '02',
      title: 'Je cadre le système',
      description:
        "Je définis ce qui sera construit, les livrables, la stack et le planning. Vous recevez une proposition écrite claire avant le début des travaux.",
      icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z',
    },
    {
      number: '03',
      title: 'Construction & itération',
      description:
        'Je construis par cycles courts avec des points réguliers. Vous voyez la progression, donnez votre retour, et le système prend forme autour de vos vrais besoins.',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
    },
    {
      number: '04',
      title: 'Livraison avec documentation',
      description:
        'Vous recevez le système terminé, la documentation et tout le nécessaire pour le faire fonctionner et le maintenir de manière autonome.',
      icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    },
  ],
};

// ── Stats ─────────────────────────────────────────────────

export const stats = [
  { value: '5', label: 'Systèmes construits' },
  { value: '11K+', label: 'Enregistrements traités' },
  { value: '3', label: 'Pipelines de données' },
  { value: '855', label: 'Documents indexés' },
];

// ── Scope & Focus ─────────────────────────────────────────

export const scope = {
  heading: 'Périmètre & focus',
  subtitle:
    "Pour bien livrer, je garde un focus clair. Voici ce qui entre et ce qui sort de mon périmètre.",
  footer:
    "Je construis les systèmes, outils et automatisations qui aident votre entreprise à mieux fonctionner — mais l'objectif est un logiciel fiable, pas la gestion marketing ou la maintenance de plateformes low-code.",
  labels: {
    whatIDo: 'Ce que je fais',
    outsideScope: 'Hors périmètre',
    notPrefix: 'Pas :',
  },
  items: [
    { area: 'Outils sur mesure pour remplacer les processus manuels', not: 'Gestion des réseaux sociaux' },
    { area: 'Tableaux de bord & reporting pour vos opérations', not: 'Publicités Facebook ou Google' },
    { area: "Outils IA pour faire gagner du temps à votre équipe", not: 'Branding ou design graphique' },
    { area: 'Nettoyage, structuration & pipelines de données', not: 'Campagnes SEO ou gestion publicitaire' },
    { area: 'APIs & intégrations système', not: 'Développement de bots RPA' },
    { area: 'Architecture technique & conseil', not: 'Maintenance PowerApps / Power Platform' },
  ],
};

// ── Projects Section Labels ───────────────────────────────

export const projectsSection = {
  heading: 'Systèmes & travaux techniques sélectionnés',
  subtitle: 'Vrais projets. Pas des templates ou des tutoriels.',
  viewGithub: 'Voir sur GitHub',
  feedsInto: 'alimente',
};

// ── Tech Stack Label ──────────────────────────────────────

export const techStackLabel = 'Technologies avec lesquelles je travaille';

// ── About ─────────────────────────────────────────────────

export const about = {
  label: 'À propos',
  name: 'Yash Djson Dookun',
  tagline: 'Consultant IT Senior · Maurice',
  paragraphs: [
    "Je suis Consultant IT Senior avec plus de 5 ans d'expérience en conseil entreprise et développement logiciel. Je suis titulaire d'un BSc en Développement Web & Multimédia (Mention Très Bien) et d'un MSc en Sécurité & Gestion des Réseaux de l'Université de Maurice.",
    "Mon quotidien consiste à concevoir, construire et intégrer des solutions logicielles sur mesure. En parallèle, je développe des systèmes pratiques pour les PME mauriciennes — outils internes, APIs, pipelines de données et automatisations IA qui aident les petites entreprises à fonctionner plus efficacement sans budgets d'entreprise.",
    "Je travaille de manière indépendante sur ces projets, ce qui signifie communication directe, pas d'intermédiaires et propriété complète du cadrage à la livraison.",
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
  heading: 'Principes de travail',
  footer:
    "Je préfère les systèmes petits et bien cadrés qui résolvent des problèmes opérationnels spécifiques. L'objectif n'est pas de construire un logiciel d'entreprise surdimensionné, mais de créer des outils que les entreprises peuvent réellement utiliser et maintenir.",
  items: [
    { title: 'Périmètre clair avant de construire', detail: 'Définir les livrables et les limites dès le départ.' },
    { title: 'Architecture simple plutôt que complexe', detail: "Pas de sur-ingénierie. Résoudre le vrai problème." },
    { title: 'Systèmes maintenables', detail: "Du code qu'une autre personne peut comprendre et faire évoluer." },
    { title: 'Documentation incluse', detail: 'Chaque système est livré avec sa documentation, pas juste du code.' },
    { title: 'Conçu pour fonctionner avec peu de maintenance', detail: 'Des systèmes qui tournent sans attention constante.' },
  ],
};

// ── FAQ ───────────────────────────────────────────────────

export const faq = {
  heading: 'Questions fréquentes',
  subtitle: 'Réponses honnêtes. Pas de discours commercial.',
  items: [
    {
      q: 'Combien coûte un projet en général ?',
      a: "Cela dépend du périmètre, mais la plupart des projets PME se situent entre Rs 15 000 et 80 000. Un site simple ou un outil de nettoyage de données est en bas de la fourchette. Un système d'inventaire complet ou un outil IA est en haut. Je cadre et chiffre toujours avant de commencer — pas de surprises.",
    },
    {
      q: 'Combien de temps cela prend-il ?',
      a: "La plupart des projets prennent 2 à 6 semaines. Un site basique peut être fait en moins d'une semaine. Un système métier complet prend généralement 3 à 5 semaines. Je travaille par cycles courts pour que vous voyiez la progression tout au long, pas seulement à la fin.",
    },
    {
      q: 'Je ne suis pas technique — est-ce un problème ?',
      a: 'Pas du tout. La plupart de mes clients ne le sont pas. Vous décrivez le problème avec vos mots — « on suit tout dans un tableur et c\'est le bazar » — et je traduis ça en système. Vous n\'avez pas besoin de connaître les APIs ou les bases de données.',
    },
    {
      q: 'Dois-je préparer quelque chose avant de commencer ?',
      a: "Juste une image claire du problème à résoudre. Si vous avez des exemples de tableurs, documents ou captures d'écran de votre processus actuel, c'est utile. Mais je peux aussi vous aider à définir le périmètre lors de notre première conversation.",
    },
    {
      q: 'Pouvez-vous travailler avec les outils que nous utilisons déjà ?',
      a: "Oui. Si vous utilisez Excel, Google Sheets, WhatsApp ou tout outil avec une API, je peux généralement construire quelque chose qui s'y connecte. Je ne vous demanderai pas d'abandonner ce qui fonctionne — je construis autour.",
    },
    {
      q: 'Que se passe-t-il après la livraison ?',
      a: "Chaque projet est livré avec documentation et transfert de compétences. Si quelque chose casse dans le premier mois, je le répare sans frais supplémentaires. Au-delà, je propose un support continu au cas par cas — mais l'objectif est de construire des systèmes qui fonctionnent sans avoir besoin de moi.",
    },
    {
      q: 'Pourquoi ne pas utiliser un outil standard ?',
      a: "Si un outil standard convient, utilisez-le. Mais si vous avez essayé Notion, Trello, Zoho ou Airtable et que vous finissez toujours dans des tableurs, c'est probablement parce que votre workflow ne rentre pas dans un outil générique. C'est exactement pour ça que je construis.",
    },
    {
      q: 'Que se passe-t-il si le périmètre change en cours de route ?',
      a: "Ça arrive. Les petits ajustements sont normaux et attendus. Si le périmètre augmente significativement, je le signale, recadre et chiffre le travail supplémentaire avant de poursuivre. Personne n'est pris au dépourvu.",
    },
  ],
};

// ── Contact ───────────────────────────────────────────────

export const contactSection = {
  heading: 'Prendre contact',
  subtitle:
    'Vous avez un processus manuel, un tableur ou une procédure interne qui devient difficile à gérer ?',
  ctaPrimary: { label: 'Décrivez le problème', emailSubject: 'Demande de projet' },
  ctaSecondary: { label: 'Voir GitHub' },
};

// ── Footer ────────────────────────────────────────────────

export const footer = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

// ── UI Strings ────────────────────────────────────────────

export const skipToContent = 'Aller au contenu principal';

export const notFoundPage = {
  title: 'Page introuvable',
  heading: '404',
  message: "La page que vous cherchez n'existe pas ou a été déplacée.",
  homeLink: "Retour à l'accueil",
  contactLink: 'Me contacter',
};
