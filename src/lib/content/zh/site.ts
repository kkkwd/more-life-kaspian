import type { SiteContent } from '../shared';

export const siteZh: SiteContent = {
  localeLabel: '中文',
  languageSwitchLabel: '切换到英文',
  themeSwitchLabel: '切换浅色或深色主题',
  menuLabel: '打开导航菜单',
  closeLabel: '关闭导航菜单',
  nav: [
    { label: '首页', href: '#home' },
    { label: '项目', href: '#projects' },
    { label: '经历', href: '#experience' },
    { label: '博客', href: '#blog' },
    { label: '关于', href: '#about' },
    { label: '联系', href: '#contact' }
  ],
  hero: {
    eyebrow: 'AI Engineer · Quant Developer · Builder',
    title: '构建面向真实场景的 AI、量化与自动化系统。',
    subtitle:
      '我专注于知识系统、量化工具链与 Agent 工作流的工程化实现，强调结构清晰、可落地和长期可维护。',
    primaryCta: '查看项目',
    secondaryCta: '下载简历',
    availability: '可沟通工程岗位、研究合作与产品共建。',
    metrics: [
      { label: '方向', value: 'RAG / LLM 系统' },
      { label: '基础设施', value: '量化与自动化' },
      { label: '工作方式', value: '兼具实现力与研究深度' }
    ]
  },
  projects: {
    kicker: '重点项目',
    title: '围绕问题、实现与结果展开的代表性系统。',
    description:
      '覆盖 AI 知识工作流、量化交易基础设施与链上自动执行三个方向，突出工程深度与实际价值。',
    items: [
      {
        name: 'AI Knowledge Base',
        summary: '面向私有文档、研究资料与多源检索推理的知识系统。',
        description:
          '构建了一套支持多知识库路由、引用溯源和可观测性的 RAG 系统，重点解决真实使用中的精度与可审计性问题。',
        details: [
          '设计分块、混合检索与重排流程，提升垂直语料下的召回质量与回答准确度。',
          '加入引用来源、溯源链路与提示词控制，降低黑盒感，提升专业场景下的可信度。',
          '系统按 API、数据接入与前端对话流程拆分，方便后续扩展到多租户和更多业务场景。'
        ],
        tags: ['SvelteKit', 'Python', 'FastAPI', 'Postgres', 'pgvector'],
        status: '可生产化',
        highlight: '混合检索 + 引用溯源 + 多知识库路由',
        github: 'https://github.com/',
        demo: '#contact'
      },
      {
        name: 'Quant Trading Bot',
        summary: '连接研究、回测与实盘执行的系统化交易框架。',
        description:
          '实现了一套面向策略研究和自动执行的交易系统，把回测评估、信号验证与实盘执行放入同一架构中管理。',
        details: [
          '将数据接入、策略逻辑、执行模块与监控链路拆分，兼顾研究效率与部署稳定性。',
          '封装交易所适配层与订单处理流程，明确状态流转、日志记录与异常恢复路径。',
          '强调可复现指标、风险规则配置与从研究原型迁移到生产任务的连续性。'
        ],
        tags: ['Python', 'Pandas', 'Backtesting', 'OKX', 'Docker'],
        status: '持续迭代',
        highlight: '统一回测与实盘执行的系统架构',
        github: 'https://github.com/',
        demo: '#experience'
      },
      {
        name: 'Web3 Agent',
        summary: '面向链上任务、钱包动作与事件驱动自动化的执行 Agent。',
        description:
          '围绕链上上下文理解、工具调用与任务执行构建 Agent Runtime，重点处理执行安全、状态管理与多步骤自动化。',
        details: [
          '通过工具接口与状态模型约束 Agent 行为，使钱包动作具备更清晰的安全边界。',
          '接入事件触发与执行日志，提升多步骤链上流程的可观测性与调试效率。',
          '在签名、重试、环境隔离等关键细节上做工程取舍，兼顾实验速度和落地可行性。'
        ],
        tags: ['TypeScript', 'EVM', 'Agent Runtime', 'RPC', 'Automation'],
        status: '研究中',
        highlight: '具备执行边界控制的工具调用式 Agent Runtime',
        github: 'https://github.com/',
        demo: '#blog'
      }
    ]
  },
  experience: {
    kicker: '经历',
    title: '围绕系统设计与实现质量展开的工程实践。',
    description:
      '涵盖产品构建、研究开发与自动化系统落地，重点体现长期的工程思维和执行能力。',
    items: [
      {
        company: 'Independent Builder',
        role: 'AI Engineer / Product Builder',
        period: '2024 - 至今',
        location: 'Remote',
        description: '持续独立构建 AI 产品、实验工具与面向开发者的系统。',
        bullets: [
          '设计并迭代检索工作流、Agent 工具与前端交互体验，用于 AI 产品原型和实际应用。',
          '从数据接入、模型编排到用户界面完成端到端原型搭建，缩短想法验证到可用产品的路径。',
          '保持以交付为核心的节奏，让探索性研究尽量沉淀为可复用的系统资产。'
        ],
        tags: ['LLM Engineering', 'SvelteKit', 'Python', 'Product Prototyping']
      },
      {
        company: 'Quant Research Lab',
        role: 'Quant Developer / Research Engineer',
        period: '2022 - 2024',
        location: '上海',
        description: '参与信号研究、交易自动化与系统化流程基础设施建设。',
        bullets: [
          '实现策略研究工具链，提升回测接口与实盘执行接口的一致性，降低策略迁移成本。',
          '搭建数据与执行流水线，使实验信号更容易进入稳定运行的任务环境。',
          '补强订单、策略状态和异常链路的监控能力，提高执行系统的可维护性与可靠性。'
        ],
        tags: ['Quant Research', 'Backtesting', 'Execution Systems', 'Monitoring'],
        link: 'https://github.com/'
      },
      {
        company: 'Systems & AI Research',
        role: 'Research / Engineering Intern',
        period: '2021 - 2022',
        location: '杭州',
        description: '在应用研究环境中探索 ML 系统、开发工具与工程化权衡。',
        bullets: [
          '搭建实验用数据流水线与模型服务流程，为内部研究环境提供更稳定的基础支持。',
          '参与评估工具开发，使模型行为更容易被观察、比较和复盘。',
          '将实验结果整理为技术文档和可复用模块，减少重复试错。'
        ],
        tags: ['Applied ML', 'Evaluation', 'Data Pipelines', 'Research Engineering']
      }
    ]
  },
  blog: {
    kicker: '技术博客',
    title: '记录系统设计、工程取舍与实现细节。',
    description:
      '聚焦 RAG、量化流程、Agent Runtime 和工程实践，用更可执行的方式表达技术理解。',
    items: [
      {
        title: '如何把 RAG 系统从 Demo 做到可长期使用',
        summary: '当检索质量、引用溯源与可观测性同时重要时，系统结构该如何调整。',
        date: '2026-02-12',
        readingTime: '阅读 8 分钟',
        tags: ['RAG', 'LLM 工程', '架构设计'],
        href: '#'
      },
      {
        title: '如何在不重写策略代码的前提下打通回测与实盘',
        summary: '一套更适合量化研究落地的结构设计，减少研究环境与执行环境的割裂。',
        date: '2025-11-03',
        readingTime: '阅读 6 分钟',
        tags: ['量化', '交易系统', '基础设施'],
        href: '#'
      },
      {
        title: '构建 Web3 Agent Runtime 时，执行状态为什么是核心问题',
        summary: '工具编排、重试机制与交易边界如何共同决定 Agent 的真实可用性。',
        date: '2025-08-18',
        readingTime: '阅读 7 分钟',
        tags: ['Web3', 'Agents', 'Runtime 设计'],
        href: '#'
      }
    ]
  },
  about: {
    kicker: '关于我',
    title: '偏好克制界面、清晰系统和真正有用的技术深度。',
    description:
      '我主要工作在 AI 系统、量化工具链和开发者产品的交叉地带，更关注软件如何在真实约束下保持可理解、可扩展与可维护。',
    intro:
      '我在意的是把技术想法变成能长期运行的系统。这通常意味着更清晰的接口、更简单的抽象，以及对复杂度的主动管理，而不是堆叠概念。',
    focus: [
      '围绕检索、评估与工作流编排构建 LLM 应用工程体系。',
      '面向研究、监控和自动执行的量化数据与执行系统。',
      '强调清晰度、速度和长期可维护性的开发者产品。'
    ],
    current:
      '当前重点关注检索质量、Agent 可靠性、执行状态设计，以及如何让原型系统在进入真实场景后依然保持可用。',
    terminal: [
      { key: 'role', value: 'AI Engineer / Quant Developer / Builder' },
      { key: 'stack', value: 'SvelteKit, Python, TypeScript, FastAPI, Postgres' },
      { key: 'focus', value: 'RAG 系统、交易基础设施、Agent 工具链' },
      { key: 'interest', value: '执行质量、评估闭环、系统设计' },
      { key: 'building', value: '兼顾研究灵活性与生产约束的实用工具' }
    ]
  },
  contact: {
    title: '一起做些真正有意义的系统。',
    subtitle: '欢迎交流工程岗位、合作项目和有长期价值的技术方向。',
    email: 'kaspian@example.com',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
    resumeHref: '/Kaspian-Resume.pdf'
  },
  footerNote: '使用 SvelteKit 与 Tailwind CSS 构建，细节克制，信息优先。',
  projectActions: {
    code: 'GitHub',
    live: '详情'
  }
};
