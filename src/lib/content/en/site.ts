import type { SiteContent } from '../shared';

export const siteEn: SiteContent = {
  localeLabel: 'EN',
  languageSwitchLabel: 'Switch language to Chinese',
  themeSwitchLabel: 'Toggle light and dark theme',
  menuLabel: 'Open navigation menu',
  closeLabel: 'Close navigation menu',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    eyebrow: 'AI Engineer · Quant Developer · Builder',
    title: 'Building practical systems across AI, trading, and automation.',
    subtitle:
      'I design production-minded knowledge systems, quant tooling, and agent workflows with a bias toward clarity, execution, and durable engineering.',
    primaryCta: 'View Projects',
    secondaryCta: 'Download Resume',
    availability: 'Open to engineering roles, research collaboration, and product builds.',
    metrics: [
      { label: 'Focus', value: 'RAG / LLM Systems' },
      { label: 'Infra', value: 'Quant & Automation' },
      { label: 'Mode', value: 'Builder with research depth' }
    ]
  },
  projects: {
    kicker: 'Featured Projects',
    title: 'Selected systems with clear problem, implementation, and outcome.',
    description:
      'Three representative projects across AI knowledge workflows, quant infrastructure, and autonomous on-chain execution.',
    items: [
      {
        name: 'AI Knowledge Base',
        summary: 'A retrieval system for private documentation, research notes, and multi-source reasoning.',
        description:
          'Built a RAG stack that supports multi-knowledge-base routing, citation-grounded answers, and operational observability for production usage.',
        details: [
          'Designed chunking, hybrid retrieval, and reranking for higher answer precision on domain-specific corpora.',
          'Added answer citations, source tracing, and prompt controls to make outputs more auditable for serious use.',
          'Shaped the system for extensibility across API, ingestion pipelines, and front-end chat workflows.'
        ],
        tags: ['SvelteKit', 'Python', 'FastAPI', 'Postgres', 'pgvector'],
        status: 'Production-minded',
        highlight: 'Hybrid retrieval + citations + multi-tenant knowledge routing',
        github: 'https://github.com/',
        demo: '#contact'
      },
      {
        name: 'Quant Trading Bot',
        summary: 'A research-to-execution trading framework for systematic strategies and exchange automation.',
        description:
          'Implemented a trading workflow that connects backtesting, signal evaluation, and live execution with risk-aware controls.',
        details: [
          'Separated data ingestion, strategy logic, execution, and monitoring to keep research loops fast and deployable.',
          'Built exchange adapters and order handling with clear state transitions, logs, and failure recovery paths.',
          'Focused on reproducible metrics, configurable risk rules, and a clean path from research notebooks to production jobs.'
        ],
        tags: ['Python', 'Pandas', 'Backtesting', 'OKX', 'Docker'],
        status: 'Ongoing',
        highlight: 'Backtest and live trading flow under one architecture',
        github: 'https://github.com/',
        demo: '#experience'
      },
      {
        name: 'Web3 Agent',
        summary: 'An execution agent for on-chain tasks, wallet actions, and event-driven automation.',
        description:
          'Created an agent-oriented runtime that can reason over chain context, trigger tool calls, and execute predefined operational flows.',
        details: [
          'Structured tools and state so the agent can safely compose wallet actions with deterministic guardrails.',
          'Integrated event triggers and execution logs for better visibility into multi-step on-chain workflows.',
          'Balanced experimentation speed with practical constraints around signing, retries, and environment separation.'
        ],
        tags: ['TypeScript', 'EVM', 'Agent Runtime', 'RPC', 'Automation'],
        status: 'Research',
        highlight: 'Tool-using agent loop with transaction-safe execution boundaries',
        github: 'https://github.com/',
        demo: '#blog'
      }
    ]
  },
  experience: {
    kicker: 'Experience',
    title: 'Engineering work shaped by systems thinking and implementation rigor.',
    description:
      'A mix of product, research, and hands-on build experience focused on intelligent systems and automation.',
    items: [
      {
        company: 'Independent Builder',
        role: 'AI Engineer / Product Builder',
        period: '2024 - Present',
        location: 'Remote',
        description: 'Shipping applied AI products, experimentation tools, and developer-oriented systems.',
        bullets: [
          'Designed and iterated on retrieval workflows, agent tools, and front-end experiences for AI-first products.',
          'Built end-to-end prototypes that connect data ingestion, model orchestration, and user-facing applications.',
          'Maintained an execution-focused loop from product hypothesis to working software, reducing throwaway exploration.'
        ],
        tags: ['LLM Engineering', 'SvelteKit', 'Python', 'Product Prototyping']
      },
      {
        company: 'Quant Research Lab',
        role: 'Quant Developer / Research Engineer',
        period: '2022 - 2024',
        location: 'Shanghai',
        description: 'Worked on signal research, trading automation, and infrastructure for systematic workflows.',
        bullets: [
          'Implemented strategy research tooling and improved the consistency of backtest and live-trading interfaces.',
          'Built data and execution pipelines that made it easier to move from experimental signals to operational jobs.',
          'Improved observability around orders, strategy states, and failure handling for more reliable execution.'
        ],
        tags: ['Quant Research', 'Backtesting', 'Execution Systems', 'Monitoring'],
        link: 'https://github.com/'
      },
      {
        company: 'Systems & AI Research',
        role: 'Research / Engineering Intern',
        period: '2021 - 2022',
        location: 'Hangzhou',
        description: 'Explored practical ML systems, developer tools, and production tradeoffs in applied research.',
        bullets: [
          'Prototyped data pipelines and model-serving workflows for internal experimentation environments.',
          'Collaborated on evaluation tooling that made model behavior easier to inspect and compare.',
          'Documented technical findings and converted experiments into reusable engineering assets.'
        ],
        tags: ['Applied ML', 'Evaluation', 'Data Pipelines', 'Research Engineering']
      }
    ]
  },
  blog: {
    kicker: 'Tech Blog',
    title: 'Writing about systems, tradeoffs, and implementation details.',
    description:
      'A small set of practical notes around RAG, quant pipelines, agent execution, and engineering decisions.',
    items: [
      {
        title: 'Designing a RAG stack that stays usable beyond the demo',
        summary: 'What changes when retrieval quality, observability, and source attribution all matter at once.',
        date: '2026-02-12',
        readingTime: '8 min read',
        tags: ['RAG', 'LLM Engineering', 'Architecture'],
        href: '#'
      },
      {
        title: 'Bridging backtesting and live execution without rewriting strategy code',
        summary: 'A practical structure for moving quant ideas into exchange-connected workflows.',
        date: '2025-11-03',
        readingTime: '6 min read',
        tags: ['Quant', 'Trading Systems', 'Infrastructure'],
        href: '#'
      },
      {
        title: 'Execution state matters: lessons from building a Web3 agent runtime',
        summary: 'Why tool orchestration, retries, and transaction boundaries define the real system design.',
        date: '2025-08-18',
        readingTime: '7 min read',
        tags: ['Web3', 'Agents', 'Runtime Design'],
        href: '#'
      }
    ]
  },
  about: {
    kicker: 'About',
    title: 'Engineering preference: calm interfaces, sharp systems, and useful depth.',
    description:
      'I work at the intersection of AI systems, quant tooling, and developer products. My bias is toward software that is understandable, extensible, and grounded in real operational constraints.',
    intro:
      'I care about turning technical ideas into systems that can survive real use. That usually means cleaner interfaces, simpler abstractions, and deliberate tradeoffs instead of unnecessary complexity.',
    focus: [
      'LLM application engineering with retrieval, evaluation, and workflow orchestration.',
      'Quant-oriented data and execution systems for research, monitoring, and automation.',
      'Developer-facing products that value clarity, speed, and maintainable architecture.'
    ],
    current:
      'Currently focused on retrieval quality, agent reliability, execution-state design, and building tools that stay practical after the prototype phase.',
    terminal: [
      { key: 'role', value: 'AI Engineer / Quant Developer / Builder' },
      { key: 'stack', value: 'SvelteKit, Python, TypeScript, FastAPI, Postgres' },
      { key: 'focus', value: 'RAG systems, trading infra, agent tooling' },
      { key: 'interest', value: 'Execution quality, eval loops, system design' },
      { key: 'building', value: 'Production-minded tools with research flexibility' }
    ]
  },
  contact: {
    title: 'Let’s build something meaningful.',
    subtitle: 'Open to collaboration, engineering roles, and interesting systems work.',
    email: 'kaspian@example.com',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
    resumeHref: '/Kaspian-Resume.pdf'
  },
  footerNote: 'Built with SvelteKit, Tailwind CSS, and a preference for restrained details.',
  projectActions: {
    code: 'GitHub',
    live: 'Details'
  }
};
