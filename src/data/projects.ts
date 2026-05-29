export interface TerminalLine {
  type: 'command' | 'info' | 'success' | 'result' | 'table' | 'blank';
  text: string;
}

export interface Project {
  name: string;
  repoName: string;
  systemTitle: string;
  description: string;
  capabilities: string[];
  tags: string[];
  githubUrl: string;
  pipeline: string[];
  terminalLines: TerminalLine[];
}

export const projects: Project[] = [
  {
    name: 'KotMoKouran',
    repoName: 'KotMoKouran',
    systemTitle: 'Real-Time Power Outage Monitoring for Mauritius',
    description:
      'Structures and exposes electricity outage information for Mauritius in an accessible, queryable format.',
    capabilities: [
      'Outage monitoring',
      'Structured public data tracking',
      'Real-time status concept',
      'Local utility-focused system',
    ],
    tags: ['Monitoring', 'Public Data', 'Mauritius', 'Python'],
    githubUrl: 'https://github.com/YashDjsonDookun/KotMoKouran',
    pipeline: ['CEB Site', 'Scraper', 'Parser', 'Normalizer', 'Structured Data'],
    terminalLines: [
      { type: 'command', text: 'python -m app fetch ceb --district plaines-wilhems' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Fetching CEB outage data...' },
      { type: 'info', text: 'District: Plaines Wilhems' },
      { type: 'blank', text: '' },
      { type: 'table', text: '┌─────────────────────────────────────────┐' },
      { type: 'table', text: '│ ACTIVE OUTAGE                           │' },
      { type: 'table', text: '│ Locality: Rose Hill                     │' },
      { type: 'table', text: '│ Streets:  Rue St-Jean, Ave Berthaud     │' },
      { type: 'table', text: '│ Period:   08:30 — 15:00                 │' },
      { type: 'table', text: '│ Status:   active                        │' },
      { type: 'table', text: '└─────────────────────────────────────────┘' },
      { type: 'blank', text: '' },
      { type: 'success', text: '3 active | 2 upcoming | 5 cleared today' },
    ],
  },
  {
    name: 'ClientList',
    repoName: 'ClientList',
    systemTitle: 'Mauritius SME Intelligence & Lead Scoring Pipeline',
    description:
      'Terminal-first pipeline that scrapes, cleans, deduplicates, and scores ~11,000 business records from the Mauritius SME e-Directory.',
    capabilities: [
      'Scraping pipeline',
      'Deduplication',
      'Lead scoring',
      'Website validation',
      'CSV/JSON exports',
    ],
    tags: ['Python', 'Data Engineering', 'CLI', 'Lead Scoring'],
    githubUrl: 'https://github.com/YashDjsonDookun/ClientList',
    pipeline: ['SME Directory', 'Scraper', 'Normalizer', 'Dedup', 'Scorer', 'CSV/JSON'],
    terminalLines: [
      { type: 'command', text: 'python -m clientlist pipeline --score --export' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Source: SME e-Directory (Mauritius)' },
      { type: 'info', text: 'Scraped:      11,247 raw records' },
      { type: 'info', text: 'Normalized:   11,103 cleaned' },
      { type: 'info', text: 'Deduplicated:  9,831 unique businesses' },
      { type: 'result', text: 'Scored:        2,143 high-priority leads' },
      { type: 'result', text: 'Validated:     1,876 with working websites' },
      { type: 'blank', text: '' },
      { type: 'success', text: 'Exported: clients_scored.csv (9,831 rows)' },
      { type: 'success', text: 'Exported: high_priority.json (2,143 leads)' },
    ],
  },
  {
    name: 'MorisLex Engine',
    repoName: 'MorisLex-Engine',
    systemTitle: 'Configurable Mauritius Legal Corpus Scraping Engine',
    description:
      'Template-driven scraping platform for Mauritian legal content with structured outputs, CSV/YAML configuration, and RAG-ready exports.',
    capabilities: [
      'Configurable scraping',
      'Corpus generation',
      'Legal data extraction',
      'RAG-ready outputs',
      'Streamlit control interface',
    ],
    tags: ['Python', 'Scraping', 'Legal Data', 'Streamlit'],
    githubUrl: 'https://github.com/YashDjsonDookun/MorisLex-Engine',
    pipeline: ['Legal Sources', 'Adapters', 'Extractor', 'Classifier', 'Dedup', 'Corpus'],
    terminalLines: [
      { type: 'command', text: 'python -m app.services.engine_main --run full' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Sources:' },
      { type: 'success', text: '  Laws of Mauritius   ✓  412 documents' },
      { type: 'success', text: '  SAFLII Mauritius    ✓  287 judgments' },
      { type: 'success', text: '  National Assembly   ✓  156 bills' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Pipeline: fetch → extract → classify → dedup' },
      { type: 'result', text: 'New: 23 | Updated: 7 | Unchanged: 825' },
      { type: 'success', text: 'Total corpus: 855 documents' },
    ],
  },
  {
    name: 'MorisLex RAG',
    repoName: 'MorisLex-Rag',
    systemTitle: 'Mauritius Legal Retrieval-Augmented Generation System',
    description:
      'RAG system that ingests, chunks, embeds, and queries Mauritian legal content generated by MorisLex Engine.',
    capabilities: [
      'Document ingestion',
      'Chunking & embeddings',
      'Retrieval search',
      'Legal knowledge queries',
    ],
    tags: ['RAG', 'LLM', 'Search', 'Embeddings', 'Legal Tech'],
    githubUrl: 'https://github.com/YashDjsonDookun/MorisLex-Rag',
    pipeline: ['Engine Corpus', 'Chunker', 'Embedder', 'Vector Store', 'Retriever', 'LLM'],
    terminalLines: [
      { type: 'command', text: 'python -m app query "data protection employer obligations"' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Retrieving from 855 indexed documents...' },
      { type: 'info', text: 'Model: all-MiniLM-L6-v2 | Top 3 results' },
      { type: 'blank', text: '' },
      { type: 'result', text: '[0.94] Data Protection Act 2017 — Section 28' },
      { type: 'info', text: '       "An employer processing personal data shall..."' },
      { type: 'result', text: '[0.87] DPA 2017 — Section 36(1)' },
      { type: 'info', text: '       "Data controllers must implement appropriate..."' },
      { type: 'result', text: '[0.81] Employment Rights Act — Section 13A' },
      { type: 'info', text: '       "No employer shall require an employee to..."' },
    ],
  },
  {
    name: 'Agentic-Poc',
    repoName: 'Agentic-Poc',
    systemTitle: 'Agentic AI Workshop / Center-Level PoC',
    description:
      'End-to-end Agentic AI concept pitched and sold internally, now implemented at center level. Demonstrates initiative ownership and AI enablement.',
    capabilities: [
      'AI enablement concept',
      'Workflow design',
      'PoC planning',
      'Center-level implementation',
    ],
    tags: ['Agentic AI', 'PoC', 'AI Enablement', 'Solution Design'],
    githubUrl: 'https://github.com/YashDjsonDookun/Agentic-Poc',
    pipeline: ['Workflow', 'Agent Config', 'Orchestrator', 'Validation', 'Output'],
    terminalLines: [
      { type: 'command', text: 'python -m agentic run --workflow document-review' },
      { type: 'blank', text: '' },
      { type: 'info', text: 'Workflow: Document Review Automation' },
      { type: 'info', text: 'Agents:  3 (classifier, extractor, validator)' },
      { type: 'blank', text: '' },
      { type: 'success', text: 'Step 1/4  Classify incoming documents    ✓' },
      { type: 'success', text: 'Step 2/4  Extract structured fields      ✓' },
      { type: 'success', text: 'Step 3/4  Validate against schema        ✓' },
      { type: 'success', text: 'Step 4/4  Route to review queue          ✓' },
      { type: 'blank', text: '' },
      { type: 'result', text: 'Processed: 48 documents in 12.3s' },
      { type: 'success', text: 'Accuracy:  94.2% (validated against manual)' },
    ],
  },
];
