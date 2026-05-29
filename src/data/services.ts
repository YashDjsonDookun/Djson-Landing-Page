export interface Service {
  number: number;
  title: string;
  description: string;
  examples: string[];
  boundary?: string;
}

export const services: Service[] = [
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
      'Scoped to what your business actually needs. No bloated features you won\'t use — just the system that solves the problem.',
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
      'Backend services and APIs that connect your tools, automate handoffs, and expose data where it\'s needed.',
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
      'Turn messy CSV/Excel data into clean, structured, usable datasets and dashboards. Give your business visibility into what\'s actually happening.',
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
      'Built around your real workflows. I scope what AI can and can\'t solve for your case before building anything.',
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
