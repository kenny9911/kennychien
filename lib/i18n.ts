/* kennychien.com — trilingual home-page copy, ported verbatim from assets/i18n.js.
   The legacy `pages{launch,ontology,fde}` detail copy (and its PAGEKEYS/PAGEIDX/`back`
   helpers) was NOT ported: those hash-routed detail views are replaced by the real
   /consulting/* routes, so nothing references that copy anymore. */

export type Lang = "en" | "zh-CN" | "zh-TW";

export const LANG_STORAGE_KEY = "kc_lang";

export function isLang(v: unknown): v is Lang {
  return v === "en" || v === "zh-CN" || v === "zh-TW";
}

export interface ExpertiseItem {
  tag: string;
  d: string;
}

export interface ServiceItem {
  n: string;
  t: string;
  d: string;
  m: string;
  url: string;
}

export interface ProductItem {
  tag: string;
  t: string;
  d: string;
  cta: string;
  url: string;
}

export interface CoachingItem {
  m: string;
  t: string;
  d: string;
  cta: string;
  url: string;
}

export interface IdeaItem {
  t: string;
  d: string;
  url: string;
}

export interface EpisodeItem {
  n: string;
  t: string;
  m: string;
}

export interface PostItem {
  d: string;
  t: string;
  url: string;
}

export interface Shape {
  sBg: string;
  sRad: string;
  sBrd: string;
}

export interface Locale {
  nav: string[];
  navContact: string;
  heroKicker: string;
  heroL1: string;
  heroL2a: string;
  heroL2b: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  marquee: string[];
  aboutTitle: string;
  aboutKicker: string;
  bio1: string;
  bio2: string;
  expertise: ExpertiseItem[];
  consultTitle: string;
  consultKicker: string;
  services: ServiceItem[];
  prodTitle: string;
  prodKicker: string;
  products: ProductItem[];
  coachTitle: string;
  coachKicker: string;
  coaching: CoachingItem[];
  ideasTitle: string;
  ideasKicker: string;
  ideas: IdeaItem[];
  podTitle: string;
  podKicker: string;
  podSub: string;
  episodes: EpisodeItem[];
  podCta: string;
  blogTitle: string;
  blogKicker: string;
  posts: PostItem[];
  contactTitle: string;
  contactSub: string;
  footerTag: string;
  footerRights: string;
  chatSub: string;
  chatGreet: string;
  chatPh: string;
  chatSend: string;
  chatBusy: string;
  chatErr: string;
  chatNote: string;
}

/** Home-page section anchors, index-aligned with each locale's `nav` labels. */
export const HREFS = [
  "#about",
  "#consulting",
  "#products",
  "#coaching",
  "#ideas",
  "#podcast",
  "#blog",
] as const;

export const TITLES: Record<Lang, string> = {
  en: "Kenny Chien — Enterprise AI Consultant · Vibe Coding · Agentic Ontology",
  "zh-CN": "Kenny Chien — 企业 AI 顾问 · Vibe Coding · 智能体本体论",
  "zh-TW": "Kenny Chien — 企業 AI 顧問 · Vibe Coding · 代理本體論",
};

export const LANGNAME: Record<Lang, string> = {
  en: "English",
  "zh-CN": "Simplified Chinese (简体中文)",
  "zh-TW": "Traditional Chinese (繁體中文)",
};

/** Decorative shape presets for the product cards. */
export const SHAPES: Shape[] = [
  { sBg: "#DF4A1E", sRad: "50%", sBrd: "none" },
  { sBg: "#161512", sRad: "0", sBrd: "none" },
  {
    sBg: "repeating-linear-gradient(45deg,#161512 0 2px,transparent 2px 8px)",
    sRad: "50%",
    sBrd: "1px solid #161512",
  },
  { sBg: "#2742D8", sRad: "50%", sBrd: "none" },
  { sBg: "#DF4A1E", sRad: "50% 0 50% 0", sBrd: "none" },
];

export const I18N: Record<Lang, Locale> = {
  en: {
    nav: ["About", "Consulting", "Products", "Coaching", "Ideas", "Podcast", "Blog"],
    navContact: "Get in touch",
    heroKicker: "KENNY CHIEN · ENTERPRISE AI CONSULTANT & EDUCATOR",
    heroL1: "The next era",
    heroL2a: "of software is",
    heroL2b: "agentic.",
    heroSub:
      "I help enterprises ship AI that actually works — from vibe coding to agentic ontology, from first prototype to forward-deployed production.",
    heroCta1: "Work with me",
    heroCta2: "Ask my AI",
    marquee: [
      "VIBE CODING",
      "AI CODING",
      "AGENTIC APPS",
      "FORWARD DEPLOYED ENGINEERING",
      "AGENTIC ONTOLOGY",
      "ENTERPRISE AI",
    ],
    aboutTitle: "Fluent in the new stack.",
    aboutKicker: "consultant · builder · teacher",
    bio1: "Kenny Chien works at the frontier where enterprises meet the agentic era. As a consultant he has guided leadership teams from AI curiosity to production systems; as a forward deployed engineer he builds beside the teams he advises.",
    bio2: "His thesis is simple: the companies that win the next decade are the ones whose people — not just whose tools — learn to think in agents.",
    expertise: [
      { tag: "VIBE CODING", d: "Shipping software at the speed of intent — prompting as a craft, not a trick." },
      { tag: "AI CODING", d: "Engineering with AI in the loop: workflows, guardrails, and taste." },
      { tag: "AGENTIC APPS", d: "Applications where agents plan, act, recover, and report." },
      { tag: "FDE", d: "Forward deployed engineering — embedded delivery inside enterprise teams." },
      { tag: "AGENTIC ONTOLOGY", d: "Modeling your business so agents can reason about it." },
    ],
    consultTitle: "From pilot purgatory to production.",
    consultKicker: "for enterprise leaders",
    services: [
      {
        n: "01",
        t: "AI Application Launch",
        d: "One high-value use case, taken from whiteboard to deployed application — with your team trained along the way.",
        m: "6–12 WEEKS · OUTCOME-BASED",
        url: "/consulting/ai-application-launch",
      },
      {
        n: "02",
        t: "Agentic Architecture & Ontology",
        d: "Design the ontology your enterprise will run on: entities, actions, permissions — and the agents that traverse them.",
        m: "ADVISORY · ARCHITECTURE",
        url: "/consulting/agentic-ontology",
      },
      {
        n: "03",
        t: "Forward Deployed Engineering",
        d: "I embed with your engineers as an FDE — pairing, reviewing, and shipping until agentic patterns become muscle memory.",
        m: "EMBEDDED · HANDS-ON",
        url: "/consulting/forward-deployed-engineering",
      },
    ],
    prodTitle: "Tools for agentic builders.",
    prodKicker: "field-tested, no fluff",
    products: [
      {
        tag: "DIGITAL BOOK",
        t: "The Vibe Coding Playbook",
        d: "A field manual of prompts, patterns, and anti-patterns for shipping real software with AI.",
        cta: "Get the book",
        url: "/products/vibe-coding-playbook",
      },
      {
        tag: "TOOLKIT",
        t: "Ontology Canvas",
        d: "A structured worksheet system for mapping your enterprise into an agent-readable ontology.",
        cta: "Explore the canvas",
        url: "/products/ontology-canvas",
      },
      {
        tag: "FREE",
        t: "Agent Launch Checklist",
        d: "The pre-flight list I run before any agentic app touches production.",
        cta: "Download free",
        url: "/products/agent-launch-checklist",
      },
      {
        tag: "PLATFORM",
        t: "Deep Agents",
        d: "Long-horizon agents that decompose goals, spawn sub-agents, and persist state across days of work — built for enterprise workflows.",
        cta: "Request a demo",
        url: "/products/deep-agents",
      },
      {
        tag: "TOOL",
        t: "Ontology Generator",
        d: "Point it at your systems and docs — it drafts an agent-readable ontology of entities, actions, and permissions for your engineers to refine.",
        cta: "Request access",
        url: "/products/ontology-generator",
      },
    ],
    coachTitle: "Learn to think in agents.",
    coachKicker: "for leaders and builders",
    coaching: [
      {
        m: "FOR TEAMS · NEW",
        t: "Vibe Teaming",
        d: "An AI-native way of working: domain experts, product thinkers, and engineers in one coached loop, turning real customer problems into validated, deployable AI solutions.",
        cta: "Explore Vibe Teaming",
        url: "/coaching/vibe-teaming",
      },
      {
        m: "FOR LEADERS · 1:1",
        t: "Executive Coaching",
        d: "Private sessions for leaders making AI bets: strategy, vendor truth-telling, and what to build versus buy.",
        cta: "Request a slot",
        url: "/coaching/executive-coaching",
      },
      {
        m: "FOR DEVELOPERS · COHORT",
        t: "Vibe Coding Bootcamp",
        d: "Four weeks from AI-curious to shipping agentic apps — live sessions, real codebases, brutal code review.",
        cta: "Join the waitlist",
        url: "/coaching/vibe-coding-bootcamp",
      },
      {
        m: "FOR TEAMS · ON-SITE",
        t: "Team Workshops",
        d: "One- and two-day intensives that rewire how a team builds with AI — on your codebase, not toy demos.",
        cta: "Book a workshop",
        url: "/coaching/team-workshops",
      },
    ],
    ideasTitle: "Ideas worth arguing with.",
    ideasKicker: "essays in progress",
    ideas: [
      {
        t: "Ontology is the new schema",
        d: "Databases described your data. Ontologies describe your business. Agents need the latter.",
        url: "/ideas/ontology-is-the-new-schema",
      },
      {
        t: "Prompting is not programming. Orchestration is.",
        d: "The unit of engineering is shifting from the function to the agent loop.",
        url: "/ideas/orchestration-over-prompting",
      },
      {
        t: "The FDE mindset",
        d: "Why the best consultants now ship code from inside the building.",
        url: "/ideas/the-fde-mindset",
      },
      {
        t: "Slop is a choice",
        d: "AI does not produce mediocrity. Unexamined taste does.",
        url: "/ideas/slop-is-a-choice",
      },
    ],
    podTitle: "The Agentic Hour.",
    podKicker: "conversations from the frontier",
    podSub:
      "Conversations with the people building the agentic era — operators, researchers, and the occasional skeptic.",
    episodes: [
      { n: "EP 014", t: "What enterprises get wrong about agents", m: "42 MIN" },
      { n: "EP 013", t: "Vibe coding in regulated industries", m: "48 MIN" },
      { n: "EP 012", t: "Ontology before automation", m: "39 MIN" },
    ],
    podCta: "All episodes",
    blogTitle: "Field notes.",
    blogKicker: "from real deployments",
    posts: [
      { d: "MAY 2026 · PLAYBOOK", t: "Launching your first agentic app: a 90-day plan", url: "/blog" },
      { d: "APR 2026 · ONTOLOGY", t: "Five ontology mistakes that quietly break agents", url: "/blog" },
      { d: "MAR 2026 · FIELD NOTES", t: "What I learned embedding as an FDE at a Fortune 100", url: "/blog" },
    ],
    contactTitle: "Let's build what's next.",
    contactSub: "Consulting, coaching, speaking, or a podcast guest spot — tell me what you're building.",
    footerTag: "Crafted for the agentic era.",
    footerRights: "© 2026 Kenny Chien. All rights reserved.",
    chatSub: "AI ASSISTANT — ONLINE",
    chatGreet:
      "Hi — I'm Kenny's AI. Ask me anything about his consulting, coaching, products, or his take on the agentic era.",
    chatPh: "Ask about consulting, vibe coding…",
    chatSend: "Send",
    chatBusy: "Thinking…",
    chatErr: "Hmm, I couldn't reach the model. Please try again.",
    chatNote: "AI-GENERATED · MAY BE IMPERFECT",
  },
  "zh-CN": {
    nav: ["关于", "咨询", "产品", "教练", "观点", "播客", "博客"],
    navContact: "联系我",
    heroKicker: "KENNY CHIEN · 企业 AI 顾问 & 教育者",
    heroL1: "软件的​下一个​时代",
    heroL2a: "属于",
    heroL2b: "智能体。",
    heroSub:
      "我帮助企业把 AI 真正做成——从 Vibe Coding 到智能体本体论，从第一个原型到前线部署的生产系统。",
    heroCta1: "与我合作",
    heroCta2: "问问我的 AI",
    marquee: ["VIBE CODING", "AI 编程", "智能体应用", "前线部署工程", "智能体本体论", "企业 AI"],
    aboutTitle: "精通新时代的技术栈。",
    aboutKicker: "顾问 · 建造者 · 教师",
    bio1: "Kenny Chien 工作在企业与智能体时代交汇的最前沿。作为顾问，他带领管理层从「对 AI 好奇」走到生产级系统；作为前线部署工程师，他与自己辅导的团队并肩构建。",
    bio2: "他的论点很简单：赢得下一个十年的公司，是那些让「人」——而不只是工具——学会用智能体思考的公司。",
    expertise: [
      { tag: "VIBE CODING", d: "以意图的速度交付软件——把提示词当作手艺，而非技巧。" },
      { tag: "AI 编程", d: "让 AI 进入工程闭环：工作流、护栏与品味。" },
      { tag: "智能体应用", d: "让智能体能够规划、行动、恢复并汇报的应用。" },
      { tag: "FDE 前线部署", d: "前线部署工程——深入企业团队内部的交付方式。" },
      { tag: "智能体本体论", d: "为你的业务建模，让智能体能够推理它。" },
    ],
    consultTitle: "从「试点炼狱」到生产环境。",
    consultKicker: "写给企业决策者",
    services: [
      {
        n: "01",
        t: "AI 应用落地",
        d: "选定一个高价值场景，从白板推进到上线应用——你的团队全程参与、同步成长。",
        m: "6–12 周 · 以结果为导向",
        url: "/consulting/ai-application-launch",
      },
      {
        n: "02",
        t: "智能体架构与本体论",
        d: "设计企业未来运行的本体：实体、动作、权限，以及在其上运行的智能体。",
        m: "咨询 · 架构",
        url: "/consulting/agentic-ontology",
      },
      {
        n: "03",
        t: "前线部署工程",
        d: "我以 FDE 身份嵌入你的工程团队——结对、评审、交付，直到智能体范式成为肌肉记忆。",
        m: "驻场 · 实战",
        url: "/consulting/forward-deployed-engineering",
      },
    ],
    prodTitle: "给智能体建造者的工具。",
    prodKicker: "实战检验，拒绝空谈",
    products: [
      {
        tag: "数字书",
        t: "Vibe Coding 实战手册",
        d: "一本关于提示词、模式与反模式的实战手册，教你用 AI 交付真正的软件。",
        cta: "获取本书",
        url: "/products/vibe-coding-playbook",
      },
      {
        tag: "工具包",
        t: "本体论画布",
        d: "一套结构化工作表，把你的企业映射为智能体可读的本体。",
        cta: "了解画布",
        url: "/products/ontology-canvas",
      },
      {
        tag: "免费",
        t: "智能体上线清单",
        d: "每个智能体应用进入生产环境前，我都会过一遍的检查清单。",
        cta: "免费下载",
        url: "/products/agent-launch-checklist",
      },
      {
        tag: "平台",
        t: "Deep Agents",
        d: "能拆解目标、派生子智能体、并跨数天持续推进工作的长程智能体——为企业工作流而生。",
        cta: "预约演示",
        url: "/products/deep-agents",
      },
      {
        tag: "工具",
        t: "本体生成器",
        d: "把它指向你的系统与文档——它会起草一份智能体可读的本体（实体、动作、权限），交给工程师精修。",
        cta: "申请使用",
        url: "/products/ontology-generator",
      },
    ],
    coachTitle: "学会用智能体思考。",
    coachKicker: "写给领导者与建造者",
    coaching: [
      {
        m: "团队 · 新推出",
        t: "Vibe Teaming",
        d: "一种 AI 原生的工作方式：领域专家、产品思考者与工程师在同一个有教练带领的循环里，把真实的客户问题变成经过验证、可部署的 AI 解决方案。",
        cta: "了解 Vibe Teaming",
        url: "/coaching/vibe-teaming",
      },
      {
        m: "领导者 · 1:1",
        t: "高管教练",
        d: "为正在下注 AI 的决策者提供私人辅导：战略、供应商的真话，以及自研还是采购。",
        cta: "预约时段",
        url: "/coaching/executive-coaching",
      },
      {
        m: "开发者 · 训练营",
        t: "Vibe Coding 训练营",
        d: "四周时间，从「对 AI 好奇」到交付智能体应用——直播授课、真实代码库、毫不留情的代码评审。",
        cta: "加入候补",
        url: "/coaching/vibe-coding-bootcamp",
      },
      {
        m: "团队 · 驻场",
        t: "团队工作坊",
        d: "一到两天的深度集训，重塑团队用 AI 构建的方式——在你们的代码库上，而不是玩具示例。",
        cta: "预订工作坊",
        url: "/coaching/team-workshops",
      },
    ],
    ideasTitle: "值得争论的观点。",
    ideasKicker: "持续写作中",
    ideas: [
      {
        t: "本体论是新的 Schema",
        d: "数据库描述你的数据，本体论描述你的业务。智能体需要后者。",
        url: "/ideas/ontology-is-the-new-schema",
      },
      {
        t: "提示词不是编程，编排才是。",
        d: "工程的基本单元，正在从函数转向智能体循环。",
        url: "/ideas/orchestration-over-prompting",
      },
      {
        t: "FDE 心法",
        d: "为什么最好的顾问，如今都在客户内部写代码。",
        url: "/ideas/the-fde-mindset",
      },
      {
        t: "平庸是一种选择",
        d: "AI 不生产平庸，未经审视的品味才会。",
        url: "/ideas/slop-is-a-choice",
      },
    ],
    podTitle: "The Agentic Hour 播客",
    podKicker: "来自前沿的对话",
    podSub: "与正在建造智能体时代的人对话——操盘手、研究者，偶尔还有怀疑论者。",
    episodes: [
      { n: "EP 014", t: "企业对智能体的误解", m: "42 分钟" },
      { n: "EP 013", t: "强监管行业里的 Vibe Coding", m: "48 分钟" },
      { n: "EP 012", t: "先有本体，再谈自动化", m: "39 分钟" },
    ],
    podCta: "全部节目",
    blogTitle: "一线笔记。",
    blogKicker: "来自真实部署",
    posts: [
      { d: "2026年5月 · 实战手册", t: "上线你的第一个智能体应用：90 天计划", url: "/blog" },
      { d: "2026年4月 · 本体论", t: "悄悄搞坏智能体的五个本体论错误", url: "/blog" },
      { d: "2026年3月 · 一线笔记", t: "在世界五百强做 FDE，我学到了什么", url: "/blog" },
    ],
    contactTitle: "一起建造下一个时代。",
    contactSub: "咨询、教练、演讲或播客嘉宾——告诉我你正在建造什么。",
    footerTag: "为智能体时代而作。",
    footerRights: "© 2026 Kenny Chien 版权所有。",
    chatSub: "AI 助手 — 在线",
    chatGreet: "你好——我是 Kenny 的 AI。关于他的咨询、教练、产品，或他对智能体时代的看法，尽管问我。",
    chatPh: "问问咨询、Vibe Coding……",
    chatSend: "发送",
    chatBusy: "思考中……",
    chatErr: "嗯，暂时连不上模型，请稍后再试。",
    chatNote: "AI 生成 · 可能不完美",
  },
  "zh-TW": {
    nav: ["關於", "顧問", "產品", "教練", "觀點", "Podcast", "部落格"],
    navContact: "聯絡我",
    heroKicker: "KENNY CHIEN · 企業 AI 顧問 & 教育者",
    heroL1: "軟體的​下一個​時代",
    heroL2a: "屬於",
    heroL2b: "AI 代理。",
    heroSub:
      "我協助企業把 AI 真正落地——從 Vibe Coding 到代理本體論，從第一個原型到前線部署的正式系統。",
    heroCta1: "與我合作",
    heroCta2: "問問我的 AI",
    marquee: ["VIBE CODING", "AI 程式開發", "代理式應用", "前線部署工程", "代理本體論", "企業 AI"],
    aboutTitle: "精通新時代的技術棧。",
    aboutKicker: "顧問 · 建造者 · 教師",
    bio1: "Kenny Chien 站在企業與 AI 代理時代交會的最前線。身為顧問，他帶領管理層從「對 AI 好奇」走到正式上線的系統；身為前線部署工程師，他與自己輔導的團隊並肩開發。",
    bio2: "他的論點很簡單：贏得下一個十年的公司，是那些讓「人」——而不只是工具——學會用代理思考的公司。",
    expertise: [
      { tag: "VIBE CODING", d: "以意圖的速度交付軟體——把提示詞當作工藝，而非小聰明。" },
      { tag: "AI 程式開發", d: "讓 AI 進入工程迴圈：工作流、護欄與品味。" },
      { tag: "代理式應用", d: "讓 AI 代理能夠規劃、行動、復原並回報的應用。" },
      { tag: "FDE 前線部署", d: "前線部署工程——深入企業團隊內部的交付方式。" },
      { tag: "代理本體論", d: "為你的業務建模，讓 AI 代理能夠推理它。" },
    ],
    consultTitle: "從「試點煉獄」走到正式環境。",
    consultKicker: "寫給企業決策者",
    services: [
      {
        n: "01",
        t: "AI 應用落地",
        d: "選定一個高價值場景，從白板推進到上線應用——你的團隊全程參與、同步成長。",
        m: "6–12 週 · 以成果為導向",
        url: "/consulting/ai-application-launch",
      },
      {
        n: "02",
        t: "代理架構與本體論",
        d: "設計企業未來運行的本體：實體、動作、權限，以及在其上運作的 AI 代理。",
        m: "顧問 · 架構",
        url: "/consulting/agentic-ontology",
      },
      {
        n: "03",
        t: "前線部署工程",
        d: "我以 FDE 身分嵌入你的工程團隊——結對、審查、交付，直到代理式開發成為肌肉記憶。",
        m: "駐點 · 實戰",
        url: "/consulting/forward-deployed-engineering",
      },
    ],
    prodTitle: "給代理建造者的工具。",
    prodKicker: "實戰驗證，拒絕空談",
    products: [
      {
        tag: "數位書",
        t: "Vibe Coding 實戰手冊",
        d: "一本關於提示詞、模式與反模式的實戰手冊，教你用 AI 交付真正的軟體。",
        cta: "取得本書",
        url: "/products/vibe-coding-playbook",
      },
      {
        tag: "工具組",
        t: "本體論畫布",
        d: "一套結構化工作表，把你的企業映射為 AI 代理可讀的本體。",
        cta: "了解畫布",
        url: "/products/ontology-canvas",
      },
      {
        tag: "免費",
        t: "代理上線檢查表",
        d: "每個代理式應用進入正式環境前，我都會跑一遍的檢查清單。",
        cta: "免費下載",
        url: "/products/agent-launch-checklist",
      },
      {
        tag: "平台",
        t: "Deep Agents",
        d: "能拆解目標、衍生子代理、並跨數天持續推進工作的長程 AI 代理——為企業工作流而生。",
        cta: "預約展示",
        url: "/products/deep-agents",
      },
      {
        tag: "工具",
        t: "本體生成器",
        d: "把它指向你的系統與文件——它會草擬一份 AI 代理可讀的本體（實體、動作、權限），交給工程師精修。",
        cta: "申請使用",
        url: "/products/ontology-generator",
      },
    ],
    coachTitle: "學會用代理思考。",
    coachKicker: "寫給領導者與建造者",
    coaching: [
      {
        m: "團隊 · 全新推出",
        t: "Vibe Teaming",
        d: "一種 AI 原生的工作方式：領域專家、產品思考者與工程師在同一個由教練帶領的循環裡，把真實的客戶問題變成經過驗證、可部署的 AI 解決方案。",
        cta: "探索 Vibe Teaming",
        url: "/coaching/vibe-teaming",
      },
      {
        m: "領導者 · 1:1",
        t: "高階主管教練",
        d: "為正在押注 AI 的決策者提供一對一輔導：策略、供應商的真話，以及自建還是採購。",
        cta: "預約時段",
        url: "/coaching/executive-coaching",
      },
      {
        m: "開發者 · 共學營",
        t: "Vibe Coding 訓練營",
        d: "四週時間，從「對 AI 好奇」到交付代理式應用——直播課程、真實程式庫、毫不留情的程式碼審查。",
        cta: "加入候補",
        url: "/coaching/vibe-coding-bootcamp",
      },
      {
        m: "團隊 · 駐點",
        t: "團隊工作坊",
        d: "一到兩天的深度集訓，重塑團隊用 AI 開發的方式——在你們的程式庫上，而不是玩具範例。",
        cta: "預約工作坊",
        url: "/coaching/team-workshops",
      },
    ],
    ideasTitle: "值得爭論的觀點。",
    ideasKicker: "持續寫作中",
    ideas: [
      {
        t: "本體論是新的 Schema",
        d: "資料庫描述你的資料，本體論描述你的業務。AI 代理需要後者。",
        url: "/ideas/ontology-is-the-new-schema",
      },
      {
        t: "提示詞不是程式設計，編排才是。",
        d: "工程的基本單位，正從函式轉向代理迴圈。",
        url: "/ideas/orchestration-over-prompting",
      },
      {
        t: "FDE 心法",
        d: "為什麼最好的顧問，如今都在客戶內部寫程式。",
        url: "/ideas/the-fde-mindset",
      },
      {
        t: "平庸是一種選擇",
        d: "AI 不會生產平庸，未經審視的品味才會。",
        url: "/ideas/slop-is-a-choice",
      },
    ],
    podTitle: "The Agentic Hour",
    podKicker: "來自前線的對話",
    podSub: "與正在打造 AI 代理時代的人對話——實戰者、研究者，偶爾還有懷疑論者。",
    episodes: [
      { n: "EP 014", t: "企業對 AI 代理的誤解", m: "42 分鐘" },
      { n: "EP 013", t: "高度監管產業裡的 Vibe Coding", m: "48 分鐘" },
      { n: "EP 012", t: "先有本體，再談自動化", m: "39 分鐘" },
    ],
    podCta: "全部集數",
    blogTitle: "第一線筆記。",
    blogKicker: "來自真實部署",
    posts: [
      { d: "2026年5月 · 實戰手冊", t: "上線你的第一個代理式應用：90 天計畫", url: "/blog" },
      { d: "2026年4月 · 本體論", t: "悄悄弄壞 AI 代理的五個本體論錯誤", url: "/blog" },
      { d: "2026年3月 · 第一線筆記", t: "在《財星》百大企業擔任 FDE，我學到了什麼", url: "/blog" },
    ],
    contactTitle: "一起打造下一個時代。",
    contactSub: "顧問、教練、演講或 Podcast 來賓——告訴我你正在打造什麼。",
    footerTag: "為 AI 代理時代而作。",
    footerRights: "© 2026 Kenny Chien 版權所有。",
    chatSub: "AI 助理 — 線上",
    chatGreet: "你好——我是 Kenny 的 AI。關於他的顧問服務、教練課程、產品，或他對 AI 代理時代的看法，儘管問我。",
    chatPh: "問問顧問服務、Vibe Coding……",
    chatSend: "送出",
    chatBusy: "思考中……",
    chatErr: "嗯，暫時連不上模型，請稍後再試。",
    chatNote: "AI 生成 · 可能不完美",
  },
};
