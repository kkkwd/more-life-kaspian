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
    eyebrow: 'AI Engineer · Web3 Developer · Builder',
    title: 'Building AI, Web3, and automation systems for real-world use.',
    subtitle:
      'Focused on engineering implementation across system building, Web3 development, and agent workflows, with an emphasis on structure, real deployment, and long-term maintainability.',
    primaryCta: 'View Projects',
    secondaryCta: 'Download Resume',
    availability: 'Open to engineering roles, research collaboration, and product builds.',
    metrics: [
      { label: 'Focus', value: 'LLM Models / Agent Engineering' },
      { label: 'Infra', value: 'Quant & Automation' },
      { label: 'Mode', value: 'Fast delivery with practical usability' }
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
          'Built a RAG system with multi-knowledge-base routing, citation tracing, and observability, focused on solving accuracy and auditability issues in real financial-system usage.',
        details: [
          'Designed chunking, hybrid retrieval, and reranking for higher answer precision on domain-specific corpora.',
          'Added answer citations, source tracing, and prompt controls to make outputs more auditable for serious use.',
          'Shaped the system for extensibility across API, ingestion pipelines, and front-end chat workflows.'
        ],
        tags: ['LLM (Minimax API)', 'Python', 'FastAPI', 'Postgres', 'pgvector'],
        status: 'Productionized',
        highlight: 'Hybrid retrieval + citations + multi-tenant knowledge routing',
        github: 'https://github.com/kkkwd/bank-knowledge-assistant',
        demo: 'https://www.kaspian.top/'
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
          'Built an agent around on-chain event monitoring, tool calling, and task execution, with emphasis on execution safety, state management, and full-process automation.',
        details: [
          'Structured tools and state so the agent can safely compose wallet actions with deterministic guardrails.',
          'Integrated event triggers and execution logs for better visibility into multi-step on-chain workflows.',
          'Made engineering tradeoffs around signing, retries, and environment isolation to balance speed, performance, and real-world feasibility.'
        ],
        tags: ['TypeScript', 'Polygon', 'Agent', 'RPC', 'Automation'],
        status: 'Open Source',
        highlight: 'A tool-calling on-chain copy trading agent system with execution boundary controls',
        github: 'https://github.com/kkkwd/polymarket-copytrader',
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
    title: 'A perfectionist drawn to restrained minimal interfaces and clear, practical engineering systems.',
    description:
      'I mainly work at the intersection of AI systems, quant tooling, and developer products, with a long-term focus on how finance, trading systems, and automated execution can be engineered under real constraints.',
    intro:
      'My background in traditional finance and trading systems makes me care more about how technology becomes something runnable, scalable, and maintainable. I have ongoing interest in Web3, DeFi, prediction markets, agents combined with wallet-based execution, and the design and evolution of future financial infrastructure.',
    focus: [
      'Building deployable LLM applications around retrieval, evaluation, and workflow orchestration.',
      'Designing quantitative trading systems for research, backtesting, monitoring, and execution.',
      'Following Web3, prediction markets, arbitrage opportunities, and automated execution systems.',
      'Exploring indie building, productization paths, and long-term personal capital accumulation.'
    ],
    current:
      'Currently focused on agent reliability, execution-state design, and data-driven automatic feedback loops. I keep using AI to learn and iterate quickly, with attention on usability, profitability, and long-term compounding in real scenarios.',
    terminal: [
      { key: 'role', value: 'AI Engineer / Web3 Developer / Builder' },
      { key: 'stack', value: 'Golang, Python, Rust, TypeScript, Postgres' },
      { key: 'focus', value: 'Agent systems, trading infrastructure, automated workflows' },
      { key: 'interest', value: 'Creativity first, system design, business models' },
      { key: 'building', value: 'Practical tools driven by results and aimed at profitability' }
    ]
  },
  contact: {
    title: 'Let’s go get some fries at the dock. Do Everything. Do not Die.',
    subtitle: 'Open to job opportunities, collaborative projects, and frontier technical directions for independent builders.',
    email: 'k945runfree@gmail.com',
    github: 'https://github.com/kkkwd/',
    linkedin: 'https://www.linkedin.com/in/weidong-kong/',
    x: 'https://x.com/Morelifekkk/',
    resumeHref: '/Kaspian-Resume.pdf'
  },
  footerNote: 'Built with SvelteKit and Tailwind CSS, with restrained effects and information first.',
  projectActions: {
    code: 'GitHub',
    live: 'Details'
  }
};
