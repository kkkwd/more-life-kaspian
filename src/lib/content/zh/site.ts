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
    { label: '关于', href: '#about' },
    { label: '联系', href: '#contact' }
  ],
  hero: {
    eyebrow: 'AI Engineer · Web3 Developer · Builder',
    title: '构建面向真实场景的 AI、Web3 与自动化系统。',
    subtitle:
      '专注于系统构建、Web3 开发与 Agent 工作流的工程化实现，强调结构化、可落地和长期可维护。',
    primaryCta: '查看项目',
    secondaryCta: '下载简历',
    availability: '可沟通工程岗位、研究合作与产品共建。',
    metrics: [
      { label: '方向', value: 'LLM模型 / Agent工程' },
      { label: '基础设施', value: '量化与自动化' },
      { label: '工作方式', value: '兼具快速交付和可用性' }
    ]
  },
  projects: {
    kicker: '重点项目',
    title: '围绕问题、实现与结果展开的代表性系统。',
    description:
      '覆盖 AI 知识工作流、业务流程自动化、Web3 产品化与链上自动执行四类系统，突出工程深度与实际价值。',
    items: [
      {
        name: 'AI Knowledge Base',
        summary: '面向私有文档、研究资料与多源检索推理的知识系统。',
        description:
          '构建了一套支持多知识库路由、引用溯源和可观测性的 RAG 系统，重点解决金融系统真实使用中的精度与可审计性问题。',
        details: [
          '设计分块、混合检索与重排流程，提升垂直语料下的召回质量与回答准确度。',
          '加入引用来源、溯源链路与提示词控制，降低黑盒感，提升专业场景下的可信度。',
          '系统按 API、数据接入与前端对话流程拆分，方便后续扩展到多租户和更多业务场景。'
        ],
        tags: ['LLM (Minimax API)', 'Python', 'FastAPI', 'Postgres', 'pgvector'],
        status: '已生产化',
        highlight: '混合检索 + 引用溯源 + 多知识库路由',
        github: 'https://github.com/kkkwd/bank-knowledge-assistant',
        demo: 'https://www.kaspian.top/'
      },
      {
        name: 'BizCover Automation Engine',
        summary: '面向保险报价流程、数据映射与可恢复执行的商业化自动化引擎。',
        description:
          '围绕澳洲保险报价流程，构建从客户数据读取、字段标准化到多步骤页面执行的自动化系统。',
        details: [
          '将 Excel 客户资料归一化为稳定字段契约，用映射层吸收业务差异，降低流程扩展与维护成本。',
          '按职业选择、客户信息、业务信息等节点拆分执行步骤，保留清晰状态边界，便于观测、恢复与重试。',
          '以报价提取、执行追踪与决策分析为后续扩展方向，为 Agent 驱动执行和闭环优化预留系统接口。'
        ],
        tags: ['Node.js', 'Playwright', 'Workflow Automation', 'Data Mapping', 'Operations'],
        status: '已开源',
        highlight: '将重复报价操作沉淀为可商业化、可观测、可恢复的自动化执行基础设施',
        github: 'https://github.com/kkkwd/bizcover-automation',
        demo: 'https://www.bizcover.com.au'
      },
      // {
      //   name: 'Quant Trading Bot',
      //   summary: '连接研究、回测与实盘执行的系统化交易框架。',
      //   description:
      //     '实现了一套面向策略研究和自动执行的交易系统，把回测评估、信号验证与实盘执行放入同一架构中管理。',
      //   details: [
      //     '将数据接入、策略逻辑、执行模块与监控链路拆分，兼顾研究效率与部署稳定性。',
      //     '封装交易所适配层与订单处理流程，明确状态流转、日志记录与异常恢复路径。',
      //     '强调可复现指标、风险规则配置与从研究原型迁移到生产任务的连续性。'
      //   ],
      //   tags: ['Python', 'Pandas', 'Backtesting', 'OKX', 'Docker'],
      //   status: '持续迭代',
      //   highlight: '统一回测与实盘执行的系统架构',
      //   github: 'https://github.com/',
      //   demo: '#experience'
      // },
      {
        "name": "ChronoStamp",
        "summary": "面向真实活动场景的链上数字凭证协议与 Web3 产品化实践。",
        "description": "围绕真实活动与身份沉淀场景，构建链下资格判断、链上凭证发放与用户交互统一协同的 Web3。",
        "details": [
          "以链下签名授权与链上合约验证构建清晰的领取流程，强化状态边界、执行可靠性与可验证性。",
          "通过 Factory 模式抽象活动凭证发行逻辑，支持多活动场景下的标准化部署与扩展。",
          "结合 IPFS 元数据存储、前端交互与链上执行反馈，形成完整的产品闭环。",
          "项目设计强调可组合、可迁移与可演进，为后续 Agent + Wallet 自动执行体系预留接口。"
        ],
        "tags": ["Hardhat", "Next.js", "Arbitrum", "IPFS", "Ethers.js"],
        "status": "已部署上线",
        "highlight": "面向可落地产品化与链上执行场景设计的 Web3 凭证系统",
        "github": "https://github.com/ZaneMa528/chronostamp",
        "demo": "https://chronostamp-poap.vercel.app/"
      },
      {
        name: 'Web3 Agent',
        summary: '面向链上任务、钱包动作与事件驱动自动化的执行 Agent。',
        description:
          '围绕链上事件监听、工具调用与任务执行构建 Agent，重点处理执行安全、状态管理与全流程自动化。',
        details: [
          '通过工具接口与状态模型约束 Agent 行为，使钱包动作具备更清晰的安全边界。',
          '接入事件触发与执行日志，提升多步骤链上流程的可观测性与调试效率。',
          '在签名、重试、环境隔离等关键细节上做工程取舍，兼顾速度性能和落地可行性。'
        ],
        tags: ['TypeScript', 'Polygon', 'Agent', 'RPC', 'Automation'],
        status: '已开源',
        highlight: '具备执行边界控制的工具调用式 Agent 链上跟单系统',
        github: 'https://github.com/kkkwd/polymarket-copytrader',
        demo: '#projects'
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
        company: '招商银行 / 信息技术部 / 招银网络科技（成都）',
        role: '系统研发工程师 / 后端开发',
        period: '2021 - 2023',
        location: '成都',
        description:
          '在银行真实生产环境中参与金融科技系统建设，围绕业务流程自动化、数据分析与智能风控完成从需求对接、研发测试到上线运维的全流程交付。',
        bullets: [
          '深度参与海螺 RPA+AI 业务中台建设，在云原生平台上完成后端服务开发、发布与迭代，支撑全行数百个自动化场景在真实业务流程中稳定运行。',
          '围绕 OCR、OpenAPI、低代码能力和大模型接入推进平台能力产品化，让业务需求能够更快落地到银行内部可用、可管理、可持续运营的系统中。',
          '构建 Kafka 实时接入、Elasticsearch 存储分析与数据服务接口，支持运营分析大屏及日报、周报、年报自动生成，为产品经理、业务团队和管理层提供决策依据。',
          '独立负责智能贷后流水排查项目的业务对接、立项、开发、上线与后续迭代，基于 XXL-JOB 完成大规模流水任务调度与并发处理，在合规约束下显著提升风控排查效率。',
          '在银行级项目管理和 DevOps 协作流程中积累了从需求拆解、环境联调、测试发布到生产问题跟踪的完整经验，也由此形成了对金融交易与资金流系统稳定性、可追踪性和自动化执行的长期关注。'
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Kafka', 'Elasticsearch', 'Redis', 'XXL-JOB', 'DevOps']
      },
      {
        company: 'UNSW Sydney / Independent Builder',
        role: 'Data Science 学生 / AI 与 Web3 Builder',
        period: '2024 - 2025',
        location: '悉尼，澳洲',
        description:
          '在 UNSW 学习 Data Science 的同时持续做独立项目交付，并在 2024-2025 这段时间完成从传统金融科技到 AI 与 Web3 的方向切换。',
        bullets: [
          '在 GPT-3.5 带动 AI 产品集中爆发的阶段，持续高频跟踪新模型、新产品、新概念和行业新闻，形成对前沿 AI 技术和产品趋势的长期关注。',
          '完成 Spark 大数据分析、PostgreSQL 底层源码分析和 Rust 语言探索，补强数据处理与系统工程基础。',
          '与同学合作完成 Web3 项目 ChronoStamp，覆盖链上产品设计、钱包交互流程与去中心化应用执行约束。',
          '以独立开发者身份交付 BizCover Automation 项目，将保险报价与保单定价流程沉淀为可复用的浏览器自动化能力。',
          '将这一阶段的技术积累和项目实践收束为明确判断：从传统金融转向 Web3 与 AI。'
        ],
        tags: ['Data Science', 'AI', 'Spark', 'PostgreSQL', 'Rust', 'Web3', 'Automation']
      },
      // {
      //   company: 'Quant Research Lab',
      //   role: 'Quant Developer / Research Engineer',
      //   period: '2022 - 2024',
      //   location: '上海',
      //   description: '参与信号研究、交易自动化与系统化流程基础设施建设。',
      //   bullets: [
      //     '实现策略研究工具链，提升回测接口与实盘执行接口的一致性，降低策略迁移成本。',
      //     '搭建数据与执行流水线，使实验信号更容易进入稳定运行的任务环境。',
      //     '补强订单、策略状态和异常链路的监控能力，提高执行系统的可维护性与可靠性。'
      //   ],
      //   tags: ['Quant Research', 'Backtesting', 'Execution Systems', 'Monitoring'],
      //   link: 'https://github.com/'
      // }
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
    title: '偏好克制极简界面、清晰可落地工程系统的完美主义者。',
    description:
      '我主要工作在 AI 系统、量化工具链与开发者产品的交叉地带，长期关注金融、交易系统与自动化执行在真实约束下的工程落地。',
    intro:
      '在银行金融科技与数据系统中的真实交付经历，让我更关注技术如何真正形成可运行、可扩展、可维护的系统。2024 到 2025 年在澳洲 UNSW 读书期间，我把这套工程背景进一步转向 AI 原生产品、Web3 系统和独立开发。',
    focus: [
      '围绕检索、评估、工作流编排与自动化能力构建可落地的 LLM 应用。',
      '长期高频关注前沿 AI 产品、新概念、热点公司与技术变化，并把这些输入转化为产品判断。',
      '关注 Web3、DeFi、预测市场、钱包交互产品与自动化执行体系。',
      '把独立开发作为从传统金融转向 AI 与 Crypto 原生软件的长期路径。'
    ],
    current:
      '当前重点关注 Agent 可靠性、执行状态设计，以及数据驱动的自动反馈闭环。我希望带着传统金融系统、风控与资金流处理经验转向 AI 软件、分布式金融与自动化交易方向，也持续关注 Stripe 式产品能力与 Circle 所代表的稳定币叙事如何重塑未来金融。',
    terminal: [
      { key: 'role', value: 'AI Engineer / Web3 Developer / Builder' },
      { key: 'stack', value: 'Golang, Python, Rust, TypeScript, Postgres' },
      { key: 'focus', value: 'Agent 系统、交易基础设施、自动化工作流程' },
      { key: 'interest', value: '创意优先、系统设计、商业模式' },
      { key: 'building', value: '坚持结果导向 以盈利为目标的实用工具' }
    ]
  },
  contact: {
    title: '一起去码头整点薯条。Do Everything. Do not Die.',
    subtitle: '欢迎交流工作岗位、合作项目和独立个体前沿技术方向。',
    email: 'k945runfree@gmail.com',
    github: 'https://github.com/kkkwd/',
    linkedin: 'https://www.linkedin.com/in/weidong-kong/',
    x: 'https://x.com/Morelifekkk/',
    resumeHref: '/Kaspian-Resume.pdf'
  },
  footerNote: '使用 SvelteKit 与 Tailwind CSS 构建，特效克制，信息优先。',
  projectActions: {
    code: 'GitHub',
    live: '详情'
  }
};
