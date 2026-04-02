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
      'Representative builds across AI knowledge workflows, workflow automation, productized Web3 systems, and autonomous on-chain execution.',
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
        name: 'BizCover Automation Engine',
        summary: 'A commercialization-oriented automation engine for insurance quote workflows, data mapping, and recoverable execution.',
        description:
          'Built around the BizCover Australia quote flow, this system turns client intake, field normalization, and multi-step browser execution into reusable automation infrastructure rather than a one-off script.',
        details: [
          'Normalized Excel client records into a stable field contract, using mapping layers to absorb business variance and reduce maintenance overhead.',
          'Split occupation selection, customer details, and business information into explicit workflow steps with clearer state boundaries for observability, retries, and recovery.',
          'Scoped the next layer around quote extraction, execution tracing, and decision analysis so the workflow can evolve toward agent-driven execution and closed-loop optimization.'
        ],
        tags: ['Node.js', 'Playwright', 'Workflow Automation', 'Data Mapping', 'Operations'],
        status: 'Open Source',
        highlight: 'Automation infrastructure for turning repetitive quote operations into measurable, recoverable execution',
        github: 'https://github.com/kkkwd/bizcover-automation',
        demo: 'https://www.bizcover.com.au'
      },
      // {
      //   name: 'Quant Trading Bot',
      //   summary: 'A research-to-execution trading framework for systematic strategies and exchange automation.',
      //   description:
      //     'Implemented a trading workflow that connects backtesting, signal evaluation, and live execution with risk-aware controls.',
      //   details: [
      //     'Separated data ingestion, strategy logic, execution, and monitoring to keep research loops fast and deployable.',
      //     'Built exchange adapters and order handling with clear state transitions, logs, and failure recovery paths.',
      //     'Focused on reproducible metrics, configurable risk rules, and a clean path from research notebooks to production jobs.'
      //   ],
      //   tags: ['Python', 'Pandas', 'Backtesting', 'OKX', 'Docker'],
      //   status: 'Ongoing',
      //   highlight: 'Backtest and live trading flow under one architecture',
      //   github: 'https://github.com/',
      //   demo: '#experience'
      // },
      {
        name: 'ChronoStamp',
        summary: 'An on-chain credential protocol and productized Web3 build for real-world event scenarios.',
        description:
          'Built around real events and identity accumulation, combining off-chain eligibility checks, on-chain credential issuance, and user interaction into one coordinated Web3 product.',
        details: [
          'Used off-chain signature authorization with on-chain contract verification to create a clear claim flow with stronger execution reliability and verifiability.',
          'Abstracted credential issuance through a factory pattern, enabling standardized deployment and extension across multiple event scenarios.',
          'Integrated IPFS metadata storage, front-end interactions, and on-chain execution feedback into a complete product loop.',
          'Designed for composability, portability, and future evolution, leaving room for later Agent + Wallet automation workflows.'
        ],
        tags: ['Hardhat', 'Next.js', 'Arbitrum', 'IPFS', 'Ethers.js'],
        status: 'Live',
        highlight: 'A Web3 credential system designed for real product delivery and on-chain execution scenarios',
        github: 'https://github.com/ZaneMa528/chronostamp',
        demo: 'https://chronostamp-poap.vercel.app/'
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
        company: 'China Merchants Bank / Information Technology Department',
        role: 'Backend Engineer / FinTech Systems Developer',
        period: '2021 - 2023',
        location: 'Chengdu',
        description:
          'Worked in a real banking production environment on fintech systems, delivering business automation, data analysis, and intelligent risk-control workflows from requirement alignment through release and post-launch operation.',
        bullets: [
          'Contributed deeply to the Hailuo RPA+AI platform, developing and shipping backend services on the bank’s cloud-native platform to support hundreds of live automation scenarios in real operational workflows.',
          'Integrated OCR, OpenAPI-based capabilities, low-code patterns, and later-stage model interfaces so business requirements could be turned into usable, manageable internal systems with faster delivery cycles.',
          'Built data pipelines and service layers around Kafka ingestion, Elasticsearch analytics, and reporting APIs, powering operational dashboards plus automated daily, weekly, and yearly reporting for product, business, and management teams.',
          'Independently delivered an intelligent post-loan transaction-screening workflow, handling business alignment, project setup, development, release, and iteration while using XXL-JOB for large-scale concurrent processing under compliance constraints.',
          'Built practical engineering discipline across project management and DevOps-style delivery, including requirement breakdown, multi-environment coordination, testing, release, and production issue handling, which shaped my long-term interest in transaction systems, capital flows, and automated execution.'
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Kafka', 'Elasticsearch', 'Redis', 'XXL-JOB', 'DevOps']
      },
      {
        company: 'UNSW Sydney / Independent Builder',
        role: 'Data Science Student / AI & Web3 Builder',
        period: '2024 - 2025',
        location: 'Sydney, Australia',
        description:
          'Combined Data Science study at UNSW with independent project delivery, using the 2024-2025 cycle to transition from traditional fintech into AI and Web3.',
        bullets: [
          'Tracked frontier AI products, model releases, and technical shifts on a daily basis throughout the GPT-3.5 breakout period, building fast-moving product and engineering judgment around new AI capabilities.',
          'Completed hands-on work in Spark-based large-scale data analysis, PostgreSQL source-level study, and Rust exploration, strengthening both data and systems fundamentals.',
          'Built ChronoStamp with classmates as a Web3 project, covering on-chain product design, wallet-connected flows, and decentralized application constraints.',
          'Delivered BizCover Automation as an independent commercial project in Australia, turning insurance quote and policy-pricing workflows into reusable browser automation infrastructure.',
          'Used this period to make the direction explicit: transition from traditional finance technology toward AI, Web3, automation, and independent product building.'
        ],
        tags: ['Data Science', 'AI', 'Spark', 'PostgreSQL', 'Rust', 'Web3', 'Automation']
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
      'My background in bank fintech delivery and financial systems makes me care about how technology becomes something runnable, scalable, and maintainable. The 2024-2025 period at UNSW in Australia then became the point where that engineering background shifted toward AI-native products, Web3 systems, and independent building.',
    focus: [
      'Building deployable LLM applications around retrieval, evaluation, workflow orchestration, and automation.',
      'Following frontier AI products, emerging concepts, and category-defining companies closely enough to turn daily learning into product and engineering judgment.',
      'Exploring Web3, DeFi, prediction markets, wallet-connected products, and automated execution systems.',
      'Using independent building as a long-term path from traditional finance into AI- and crypto-native software.'
    ],
    current:
      'Currently focused on agent reliability, execution-state design, and data-driven automatic feedback loops. I want to bring experience from traditional financial systems, risk control, and capital-flow processing into AI software, distributed finance, and automated trading, and I remain especially interested in how Stripe-like product discipline and the Circle stablecoin narrative may shape the future of financial software.',
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
