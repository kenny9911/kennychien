/* kennychien.com — site data (nav, routing keys, and all trilingual copy)
   Extracted verbatim from the approved design prototype. */

const HREFS = ['#about', '#consulting', '#products', '#coaching', '#ideas', '#podcast', '#blog'];

const PAGEKEYS = ['launch', 'ontology', 'fde'];

const PAGEIDX = { launch: '/02.1', ontology: '/02.2', fde: '/02.3' };

const TITLES = {
  'en': 'Kenny Chien — Enterprise AI Consultant · Vibe Coding · Agentic Ontology',
  'zh-CN': 'Kenny Chien — 企业 AI 顾问 · Vibe Coding · 智能体本体论',
  'zh-TW': 'Kenny Chien — 企業 AI 顧問 · Vibe Coding · 代理本體論'
};

const LANGNAME = { 'en': 'English', 'zh-CN': 'Simplified Chinese (简体中文)', 'zh-TW': 'Traditional Chinese (繁體中文)' };

const SHAPES = [
  { sBg: '#DF4A1E', sRad: '50%', sBrd: 'none' },
  { sBg: '#161512', sRad: '0', sBrd: 'none' },
  { sBg: 'repeating-linear-gradient(45deg,#161512 0 2px,transparent 2px 8px)', sRad: '50%', sBrd: '1px solid #161512' },
  { sBg: '#2742D8', sRad: '50%', sBrd: 'none' },
  { sBg: '#DF4A1E', sRad: '50% 0 50% 0', sBrd: 'none' }
];

const I18N = {
  'en': {
    nav: ['About', 'Consulting', 'Products', 'Coaching', 'Ideas', 'Podcast', 'Blog'],
    navContact: 'Get in touch',
    heroKicker: 'KENNY CHIEN · ENTERPRISE AI CONSULTANT & EDUCATOR',
    heroL1: 'The next era',
    heroL2a: 'of software is',
    heroL2b: 'agentic.',
    heroSub: 'I help enterprises ship AI that actually works — from vibe coding to agentic ontology, from first prototype to forward-deployed production.',
    heroCta1: 'Work with me',
    heroCta2: 'Ask my AI',
    marquee: ['VIBE CODING', 'AI CODING', 'AGENTIC APPS', 'FORWARD DEPLOYED ENGINEERING', 'AGENTIC ONTOLOGY', 'ENTERPRISE AI'],
    aboutTitle: 'Fluent in the new stack.',
    aboutKicker: 'consultant · builder · teacher',
    bio1: 'Kenny Chien works at the frontier where enterprises meet the agentic era. As a consultant he has guided leadership teams from AI curiosity to production systems; as a forward deployed engineer he builds beside the teams he advises.',
    bio2: 'His thesis is simple: the companies that win the next decade are the ones whose people — not just whose tools — learn to think in agents.',
    expertise: [
      { tag: 'VIBE CODING', d: 'Shipping software at the speed of intent — prompting as a craft, not a trick.' },
      { tag: 'AI CODING', d: 'Engineering with AI in the loop: workflows, guardrails, and taste.' },
      { tag: 'AGENTIC APPS', d: 'Applications where agents plan, act, recover, and report.' },
      { tag: 'FDE', d: 'Forward deployed engineering — embedded delivery inside enterprise teams.' },
      { tag: 'AGENTIC ONTOLOGY', d: 'Modeling your business so agents can reason about it.' }
    ],
    consultTitle: 'From pilot purgatory to production.',
    consultKicker: 'for enterprise leaders',
    services: [
      { n: '01', t: 'AI Application Launch', d: 'One high-value use case, taken from whiteboard to deployed application — with your team trained along the way.', m: '6–12 WEEKS · OUTCOME-BASED', url: '/consulting/ai-application-launch' },
      { n: '02', t: 'Agentic Architecture & Ontology', d: 'Design the ontology your enterprise will run on: entities, actions, permissions — and the agents that traverse them.', m: 'ADVISORY · ARCHITECTURE', url: '/consulting/agentic-ontology' },
      { n: '03', t: 'Forward Deployed Engineering', d: 'I embed with your engineers as an FDE — pairing, reviewing, and shipping until agentic patterns become muscle memory.', m: 'EMBEDDED · HANDS-ON', url: '/consulting/forward-deployed-engineering' }
    ],
    prodTitle: 'Tools for agentic builders.',
    prodKicker: 'field-tested, no fluff',
    products: [
      { tag: 'DIGITAL BOOK', t: 'The Vibe Coding Playbook', d: 'A field manual of prompts, patterns, and anti-patterns for shipping real software with AI.', cta: 'Get the book', url: '/products/vibe-coding-playbook' },
      { tag: 'TOOLKIT', t: 'Ontology Canvas', d: 'A structured worksheet system for mapping your enterprise into an agent-readable ontology.', cta: 'Explore the canvas', url: '/products/ontology-canvas' },
      { tag: 'FREE', t: 'Agent Launch Checklist', d: 'The pre-flight list I run before any agentic app touches production.', cta: 'Download free', url: '/products/agent-launch-checklist' },
      { tag: 'PLATFORM', t: 'Deep Agents', d: 'Long-horizon agents that decompose goals, spawn sub-agents, and persist state across days of work — built for enterprise workflows.', cta: 'Request a demo', url: '/products/deep-agents' },
      { tag: 'TOOL', t: 'Ontology Generator', d: 'Point it at your systems and docs — it drafts an agent-readable ontology of entities, actions, and permissions for your engineers to refine.', cta: 'Request access', url: '/products/ontology-generator' }
    ],
    coachTitle: 'Learn to think in agents.',
    coachKicker: 'for leaders and builders',
    coaching: [
      { m: 'FOR TEAMS · NEW', t: 'Vibe Teaming', d: 'An AI-native way of working: domain experts, product thinkers, and engineers in one coached loop, turning real customer problems into validated, deployable AI solutions.', cta: 'Explore Vibe Teaming', url: '/coaching/vibe-teaming' },
      { m: 'FOR LEADERS · 1:1', t: 'Executive Coaching', d: 'Private sessions for leaders making AI bets: strategy, vendor truth-telling, and what to build versus buy.', cta: 'Request a slot', url: '/coaching/executive-coaching' },
      { m: 'FOR DEVELOPERS · COHORT', t: 'Vibe Coding Bootcamp', d: 'Four weeks from AI-curious to shipping agentic apps — live sessions, real codebases, brutal code review.', cta: 'Join the waitlist', url: '/coaching/vibe-coding-bootcamp' },
      { m: 'FOR TEAMS · ON-SITE', t: 'Team Workshops', d: 'One- and two-day intensives that rewire how a team builds with AI — on your codebase, not toy demos.', cta: 'Book a workshop', url: '/coaching/team-workshops' }
    ],
    ideasTitle: 'Ideas worth arguing with.',
    ideasKicker: 'essays in progress',
    ideas: [
      { t: 'Ontology is the new schema', d: 'Databases described your data. Ontologies describe your business. Agents need the latter.', url: '/ideas/ontology-is-the-new-schema' },
      { t: 'Prompting is not programming. Orchestration is.', d: 'The unit of engineering is shifting from the function to the agent loop.', url: '/ideas/orchestration-over-prompting' },
      { t: 'The FDE mindset', d: 'Why the best consultants now ship code from inside the building.', url: '/ideas/the-fde-mindset' },
      { t: 'Slop is a choice', d: 'AI does not produce mediocrity. Unexamined taste does.', url: '/ideas/slop-is-a-choice' }
    ],
    podTitle: 'The Agentic Hour.',
    podKicker: 'conversations from the frontier',
    podSub: 'Conversations with the people building the agentic era — operators, researchers, and the occasional skeptic.',
    episodes: [
      { n: 'EP 014', t: 'What enterprises get wrong about agents', m: '42 MIN' },
      { n: 'EP 013', t: 'Vibe coding in regulated industries', m: '48 MIN' },
      { n: 'EP 012', t: 'Ontology before automation', m: '39 MIN' }
    ],
    podCta: 'All episodes',
    blogTitle: 'Field notes.',
    blogKicker: 'from real deployments',
    posts: [
      { d: 'MAY 2026 · PLAYBOOK', t: 'Launching your first agentic app: a 90-day plan', url: '/blog' },
      { d: 'APR 2026 · ONTOLOGY', t: 'Five ontology mistakes that quietly break agents', url: '/blog' },
      { d: 'MAR 2026 · FIELD NOTES', t: 'What I learned embedding as an FDE at a Fortune 100', url: '/blog' }
    ],
    contactTitle: "Let's build what's next.",
    contactSub: "Consulting, coaching, speaking, or a podcast guest spot — tell me what you're building.",
    footerTag: 'Crafted for the agentic era.',
    footerRights: '© 2026 Kenny Chien. All rights reserved.',
    back: 'Back to overview',
    pages: {
      launch: {
        meta: '6–12 WEEKS · OUTCOME-BASED · LEADERSHIP + DELIVERY TEAM',
        title: 'AI Application Launch',
        sub: 'One use case, taken seriously — from board-level thesis to software running in production.',
        intro1: 'Most enterprise AI initiatives die in pilot purgatory: a promising demo, an enthusiastic steering committee, and no path to production. The cause is rarely the model. It is unowned risk — unanswered questions about data boundaries, evaluation, security review, and who carries the pager when the agent is wrong.',
        intro2: 'A Launch engagement is designed as the opposite of a pilot. We pick one use case with measurable economics, define what "working" means before writing a line of code, and drive it through the full gauntlet — legal, security, evaluation, rollout — so your organization learns the entire path, not just the demo.',
        pull: 'The goal is not a demo. The goal is the organizational muscle to ship the next ten applications without me.',
        h1: 'Operating principles',
        principles: [
          { t: 'Economics before architecture', d: 'We model the value of the use case first — minutes saved, revenue unlocked, risk retired — and let that number discipline every technical decision.' },
          { t: 'Evaluation is the product', d: 'Before the first prompt, we build the eval set: golden tasks, failure taxonomies, acceptance thresholds. A system you cannot score is a system you cannot ship.' },
          { t: 'Smallest deployable loop', d: 'We ship a thin, end-to-end slice to real users in weeks, then widen it — never a six-month build toward a big-bang reveal.' },
          { t: 'Your team writes the code', d: 'My job is leverage, not dependence. Your engineers pair on every component and own the system from day one of production.' }
        ],
        h2: 'Engagement structure',
        phases: [
          { w: 'WEEKS 1–2', t: 'Frame', d: 'Use-case selection, value model, data and risk audit, definition of done. Output: a launch memo your CFO and CISO both sign.' },
          { w: 'WEEKS 3–6', t: 'Build', d: 'Evals first, then the application: retrieval, tools, agent loops, human-in-the-loop checkpoints. Weekly demos against the eval set.' },
          { w: 'WEEKS 7–10', t: 'Harden', d: 'Red-teaming, security review, observability, cost envelopes, rollback paths. The unglamorous work that separates demos from systems.' },
          { w: 'WEEKS 11–12', t: 'Launch & transfer', d: 'Production rollout to a real cohort, runbooks, and a trained team. I leave; the system stays.' }
        ],
        h3: 'What you walk away with',
        outcomes: [
          'A production application with measured impact against the value model',
          'An evaluation harness your team reruns on every model upgrade',
          'A security and governance template reusable for the next launch',
          'Engineers who have shipped agentic software, not watched it'
        ],
        ctaT: 'Have a use case in mind?',
        ctaD: 'Send one paragraph on the workflow and what it costs you today. I will reply with an honest read on whether it is launchable.'
      },
      ontology: {
        meta: 'ADVISORY · ARCHITECTURE · CAIO / CTO LEVEL',
        title: 'Agentic Architecture & Ontology',
        sub: 'The decisions that outlive any model: how your enterprise is represented, and what agents are allowed to do to it.',
        intro1: 'Models are becoming a commodity; the durable asset is the layer between them and your business. That layer is an ontology — a machine-readable model of your entities, relationships, actions, and permissions. It is what lets an agent know that "cancel the order" is a real operation with preconditions, side effects, and an owner — not a string to autocomplete.',
        intro2: 'I work with your architects to design this layer deliberately: the semantic model, the action interface agents are given, the permission system that makes autonomy safe, and the evaluation regime that keeps it honest as models and business rules change underneath it.',
        pull: 'Agents do not fail for lack of intelligence. They fail because nobody told them what the business is.',
        h1: 'What we design',
        principles: [
          { t: 'Semantic core', d: 'Entities, relationships, and state machines that describe your business as it actually runs — derived from systems and operators, not org charts.' },
          { t: 'Action interface', d: 'A typed catalogue of operations agents may invoke — each with preconditions, effects, cost, and reversibility — so capability is granted, never improvised.' },
          { t: 'Permission & provenance', d: 'Who may an agent act as, on what, within which limits — and a full decision trail for when audit, legal, or an angry customer asks why.' },
          { t: 'Model-agnostic seams', d: 'The ontology binds to your systems, not to a vendor. Swap models the way you swap drivers; keep the asset.' }
        ],
        h2: 'How the work runs',
        phases: [
          { w: 'WEEKS 1–2', t: 'Excavate', d: 'Workshops with operators and system owners. We mine the real ontology from how work actually flows — including the exceptions nobody documents.' },
          { w: 'WEEKS 3–5', t: 'Formalize', d: 'The semantic model and action catalogue, written down, reviewed, versioned — plus a reference implementation against one live system.' },
          { w: 'WEEKS 6–8', t: 'Prove', d: 'One agent, traversing the ontology in production conditions, with evals that test permission boundaries as hard as task success.' }
        ],
        h3: 'What you walk away with',
        outcomes: [
          'An ontology document your engineers and your auditors can both read',
          'A reference agent implementation against your live systems',
          'A permission model that makes "give the agent access" a precise statement',
          'An architecture review your board can act on'
        ],
        ctaT: 'Architecting this now?',
        ctaD: 'Share where agents sit in your current architecture diagram. I will tell you what will break first.'
      },
      fde: {
        meta: 'EMBEDDED · HANDS-ON · PALANTIR-HONED PRACTICE',
        title: 'Forward Deployed Engineering',
        sub: 'The consulting model is broken. The fix is engineers who deploy forward — into your team, your data, your production.',
        intro1: 'Forward Deployed Engineering is the practice Palantir built its delivery model on: instead of writing recommendations from the outside, engineers embed inside the customer, live with the real data and the real users, and ship working software as the means of consulting. The deliverable is not a deck — it is a system in production and a team that can run it.',
        intro2: 'I run FDE engagements on that playbook, adapted for the agentic era: embedded in your sprint cadence, pairing with your engineers, turning every deployment into training. The measure of success is what your team ships after I leave.',
        pull: 'Slideware is a promise. A go-live is a fact.',
        h1: 'The FDE playbook',
        principles: [
          { t: 'Deploy into the problem', d: 'Work happens where the data and users are — your repos, your meetings, your on-call. Understanding earned on the inside beats interviews from the outside.' },
          { t: 'Two hats: delivery and feedback', d: 'Palantir splits the role: engineers who bend the platform to today\'s customer problem, and engineers who feed what they learn back into the product. We run the same loop — every workaround becomes a roadmap item.' },
          { t: 'Ship against real data', d: 'No synthetic demos. The first week ends with software touching your actual systems behind your actual permissions — that is where every hard problem lives.' },
          { t: 'Ontology-first integration', d: 'Following Palantir\'s core lesson: integrate meaning, not just data. Model the business objects and actions once, and every later application inherits them.' },
          { t: 'Go-lives over slideware', d: 'Progress is measured in working deployments and trained operators — never in decks delivered.' }
        ],
        h2: 'How an embed runs',
        phases: [
          { w: 'WEEK 1', t: 'Immerse', d: 'Inside your repos, standups, and incident channel. First working change in production by Friday — small, but real.' },
          { w: 'WEEKS 2–6', t: 'Ship & pair', d: 'Agentic features delivered in your cadence, always pairing. Every PR is a teaching artifact; every review, a transfer of taste.' },
          { w: 'WEEKS 7–8', t: 'Hand over', d: 'I rotate out of the critical path. Your engineers lead; I review. Exit criteria: velocity holds after I am gone.' }
        ],
        h3: 'What you walk away with',
        outcomes: [
          'Production features shipped inside your own codebase and stack',
          'Engineers fluent in agentic patterns — by building, not by workshop',
          'An integration layer and conventions the next team inherits',
          'A delivery culture that measures go-lives, not decks'
        ],
        ctaT: 'Need an FDE in the building?',
        ctaD: 'Tell me about the team and the system. I will tell you in one call whether an embed will pay for itself.'
      }
    },
    chatSub: 'AI ASSISTANT — ONLINE',
    chatGreet: "Hi — I'm Kenny's AI. Ask me anything about his consulting, coaching, products, or his take on the agentic era.",
    chatPh: 'Ask about consulting, vibe coding…',
    chatSend: 'Send',
    chatBusy: 'Thinking…',
    chatErr: "Hmm, I couldn't reach the model. Please try again.",
    chatNote: 'AI-GENERATED · MAY BE IMPERFECT'
  },
  'zh-CN': {
    nav: ['关于', '咨询', '产品', '教练', '观点', '播客', '博客'],
    navContact: '联系我',
    heroKicker: 'KENNY CHIEN · 企业 AI 顾问 & 教育者',
    heroL1: '软件的\u200B下一个\u200B时代',
    heroL2a: '属于',
    heroL2b: '智能体。',
    heroSub: '我帮助企业把 AI 真正做成——从 Vibe Coding 到智能体本体论，从第一个原型到前线部署的生产系统。',
    heroCta1: '与我合作',
    heroCta2: '问问我的 AI',
    marquee: ['VIBE CODING', 'AI 编程', '智能体应用', '前线部署工程', '智能体本体论', '企业 AI'],
    aboutTitle: '精通新时代的技术栈。',
    aboutKicker: '顾问 · 建造者 · 教师',
    bio1: 'Kenny Chien 工作在企业与智能体时代交汇的最前沿。作为顾问，他带领管理层从「对 AI 好奇」走到生产级系统；作为前线部署工程师，他与自己辅导的团队并肩构建。',
    bio2: '他的论点很简单：赢得下一个十年的公司，是那些让「人」——而不只是工具——学会用智能体思考的公司。',
    expertise: [
      { tag: 'VIBE CODING', d: '以意图的速度交付软件——把提示词当作手艺，而非技巧。' },
      { tag: 'AI 编程', d: '让 AI 进入工程闭环：工作流、护栏与品味。' },
      { tag: '智能体应用', d: '让智能体能够规划、行动、恢复并汇报的应用。' },
      { tag: 'FDE 前线部署', d: '前线部署工程——深入企业团队内部的交付方式。' },
      { tag: '智能体本体论', d: '为你的业务建模，让智能体能够推理它。' }
    ],
    consultTitle: '从「试点炼狱」到生产环境。',
    consultKicker: '写给企业决策者',
    services: [
      { n: '01', t: 'AI 应用落地', d: '选定一个高价值场景，从白板推进到上线应用——你的团队全程参与、同步成长。', m: '6–12 周 · 以结果为导向', url: '/consulting/ai-application-launch' },
      { n: '02', t: '智能体架构与本体论', d: '设计企业未来运行的本体：实体、动作、权限，以及在其上运行的智能体。', m: '咨询 · 架构', url: '/consulting/agentic-ontology' },
      { n: '03', t: '前线部署工程', d: '我以 FDE 身份嵌入你的工程团队——结对、评审、交付，直到智能体范式成为肌肉记忆。', m: '驻场 · 实战', url: '/consulting/forward-deployed-engineering' }
    ],
    prodTitle: '给智能体建造者的工具。',
    prodKicker: '实战检验，拒绝空谈',
    products: [
      { tag: '数字书', t: 'Vibe Coding 实战手册', d: '一本关于提示词、模式与反模式的实战手册，教你用 AI 交付真正的软件。', cta: '获取本书', url: '/products/vibe-coding-playbook' },
      { tag: '工具包', t: '本体论画布', d: '一套结构化工作表，把你的企业映射为智能体可读的本体。', cta: '了解画布', url: '/products/ontology-canvas' },
      { tag: '免费', t: '智能体上线清单', d: '每个智能体应用进入生产环境前，我都会过一遍的检查清单。', cta: '免费下载', url: '/products/agent-launch-checklist' },
      { tag: '平台', t: 'Deep Agents', d: '能拆解目标、派生子智能体、并跨数天持续推进工作的长程智能体——为企业工作流而生。', cta: '预约演示', url: '/products/deep-agents' },
      { tag: '工具', t: '本体生成器', d: '把它指向你的系统与文档——它会起草一份智能体可读的本体（实体、动作、权限），交给工程师精修。', cta: '申请使用', url: '/products/ontology-generator' }
    ],
    coachTitle: '学会用智能体思考。',
    coachKicker: '写给领导者与建造者',
    coaching: [
      { m: '团队 · 新推出', t: 'Vibe Teaming', d: '一种 AI 原生的工作方式：领域专家、产品思考者与工程师在同一个有教练带领的循环里，把真实的客户问题变成经过验证、可部署的 AI 解决方案。', cta: '了解 Vibe Teaming', url: '/coaching/vibe-teaming' },
      { m: '领导者 · 1:1', t: '高管教练', d: '为正在下注 AI 的决策者提供私人辅导：战略、供应商的真话，以及自研还是采购。', cta: '预约时段', url: '/coaching/executive-coaching' },
      { m: '开发者 · 训练营', t: 'Vibe Coding 训练营', d: '四周时间，从「对 AI 好奇」到交付智能体应用——直播授课、真实代码库、毫不留情的代码评审。', cta: '加入候补', url: '/coaching/vibe-coding-bootcamp' },
      { m: '团队 · 驻场', t: '团队工作坊', d: '一到两天的深度集训，重塑团队用 AI 构建的方式——在你们的代码库上，而不是玩具示例。', cta: '预订工作坊', url: '/coaching/team-workshops' }
    ],
    ideasTitle: '值得争论的观点。',
    ideasKicker: '持续写作中',
    ideas: [
      { t: '本体论是新的 Schema', d: '数据库描述你的数据，本体论描述你的业务。智能体需要后者。', url: '/ideas/ontology-is-the-new-schema' },
      { t: '提示词不是编程，编排才是。', d: '工程的基本单元，正在从函数转向智能体循环。', url: '/ideas/orchestration-over-prompting' },
      { t: 'FDE 心法', d: '为什么最好的顾问，如今都在客户内部写代码。', url: '/ideas/the-fde-mindset' },
      { t: '平庸是一种选择', d: 'AI 不生产平庸，未经审视的品味才会。', url: '/ideas/slop-is-a-choice' }
    ],
    podTitle: 'The Agentic Hour 播客',
    podKicker: '来自前沿的对话',
    podSub: '与正在建造智能体时代的人对话——操盘手、研究者，偶尔还有怀疑论者。',
    episodes: [
      { n: 'EP 014', t: '企业对智能体的误解', m: '42 分钟' },
      { n: 'EP 013', t: '强监管行业里的 Vibe Coding', m: '48 分钟' },
      { n: 'EP 012', t: '先有本体，再谈自动化', m: '39 分钟' }
    ],
    podCta: '全部节目',
    blogTitle: '一线笔记。',
    blogKicker: '来自真实部署',
    posts: [
      { d: '2026年5月 · 实战手册', t: '上线你的第一个智能体应用：90 天计划', url: '/blog' },
      { d: '2026年4月 · 本体论', t: '悄悄搞坏智能体的五个本体论错误', url: '/blog' },
      { d: '2026年3月 · 一线笔记', t: '在世界五百强做 FDE，我学到了什么', url: '/blog' }
    ],
    contactTitle: '一起建造下一个时代。',
    contactSub: '咨询、教练、演讲或播客嘉宾——告诉我你正在建造什么。',
    footerTag: '为智能体时代而作。',
    footerRights: '© 2026 Kenny Chien 版权所有。',
    back: '返回总览',
    pages: {
      launch: {
        meta: '6–12 周 · 以结果为导向 · 管理层 + 交付团队',
        title: 'AI 应用落地',
        sub: '认真对待一个场景——从董事会层面的论点，到跑在生产环境里的软件。',
        intro1: '多数企业 AI 项目死在「试点炼狱」里：一个漂亮的演示、一个热情的指导委员会，却没有通往生产的路径。原因很少出在模型本身，而是无人认领的风险——数据边界、评测、安全审查，以及智能体出错时谁来负责，这些问题没人回答。',
        intro2: '落地项目的设计正好与试点相反。我们选定一个经济价值可度量的场景，在写第一行代码之前先定义什么叫「能用」，然后推着它闯过完整的关卡——法务、安全、评测、灰度上线——让组织学会整条路径，而不只是那个演示。',
        pull: '目标不是一个演示，而是让组织长出不靠我也能交付下十个应用的肌肉。',
        h1: '工作原则',
        principles: [
          { t: '先算账，再谈架构', d: '我们先为场景建立价值模型——省下的分钟、解锁的收入、消除的风险——再让这个数字约束每一个技术决策。' },
          { t: '评测就是产品', d: '在写第一个提示词之前，先建评测集：黄金任务、失败分类、验收阈值。无法打分的系统，就是无法上线的系统。' },
          { t: '最小可部署闭环', d: '几周内先向真实用户交付一条端到端的薄切片，再逐步加宽——绝不搞憋六个月的大爆炸式发布。' },
          { t: '代码由你的团队来写', d: '我的职责是杠杆，不是依赖。你的工程师参与每个组件的结对开发，上线第一天就拥有这套系统。' }
        ],
        h2: '项目结构',
        phases: [
          { w: '第 1–2 周', t: '定框', d: '场景选择、价值模型、数据与风险盘点、完成标准。产出：一份 CFO 和 CISO 都愿意签字的立项备忘录。' },
          { w: '第 3–6 周', t: '构建', d: '先建评测，再建应用：检索、工具调用、智能体循环、人工卡点。每周对照评测集做演示。' },
          { w: '第 7–10 周', t: '加固', d: '红队测试、安全审查、可观测性、成本上限、回滚路径。正是这些不光鲜的工作，把演示和系统区分开来。' },
          { w: '第 11–12 周', t: '上线与交接', d: '面向真实用户群灰度上线，交付运维手册和受训团队。我离开，系统留下。' }
        ],
        h3: '你将带走什么',
        outcomes: [
          '一个对照价值模型度量过影响的生产级应用',
          '一套团队在每次模型升级时都会重跑的评测装置',
          '一份可复用于下一次落地的安全与治理模板',
          '亲手交付过智能体软件的工程师，而不是旁观者'
        ],
        ctaT: '已经有想做的场景？',
        ctaD: '用一段话描述这个工作流以及它今天的成本，我会诚实地告诉你它是否值得落地。'
      },
      ontology: {
        meta: '咨询 · 架构 · CAIO / CTO 层级',
        title: '智能体架构与本体论',
        sub: '比任何模型都活得久的决策：你的企业如何被表示，以及智能体被允许对它做什么。',
        intro1: '模型正在变成大宗商品；真正持久的资产，是模型与业务之间的那一层。这一层就是本体——一个机器可读的模型，描述你的实体、关系、动作与权限。正是它让智能体知道「取消订单」是一个有前置条件、副作用和负责人的真实操作，而不是一串可以自动补全的文本。',
        intro2: '我与你的架构师一起，有意识地设计这一层：语义模型、提供给智能体的动作接口、让自主性变得安全的权限体系，以及在模型与业务规则不断变化时仍能保持诚实的评测机制。',
        pull: '智能体失败，不是因为不够聪明，而是因为没人告诉它业务是什么。',
        h1: '我们设计什么',
        principles: [
          { t: '语义核心', d: '用实体、关系和状态机描述业务的真实运转——来自系统和一线操作者，而不是组织架构图。' },
          { t: '动作接口', d: '一份类型化的操作清单，规定智能体可以调用什么——每项都有前置条件、影响、成本与可逆性——能力是被授予的，不是临场发挥的。' },
          { t: '权限与溯源', d: '智能体能以谁的身份、对什么、在什么限度内行动——并在审计、法务或愤怒的客户问「为什么」时，给出完整的决策链路。' },
          { t: '与模型解耦的接缝', d: '本体绑定的是你的系统，不是某家供应商。像换驱动一样换模型，资产留在你手里。' }
        ],
        h2: '工作方式',
        phases: [
          { w: '第 1–2 周', t: '挖掘', d: '与一线操作者和系统负责人开工作坊，从工作的真实流转中挖出真正的本体——包括没人写进文档的例外。' },
          { w: '第 3–5 周', t: '形式化', d: '写下语义模型与动作清单，评审、版本化，并针对一个在线系统做出参考实现。' },
          { w: '第 6–8 周', t: '验证', d: '让一个智能体在生产条件下穿行本体，评测既考核任务成功率，也同样严苛地考核权限边界。' }
        ],
        h3: '你将带走什么',
        outcomes: [
          '一份工程师和审计师都能读懂的本体文档',
          '一个针对你在线系统的参考智能体实现',
          '一套让「给智能体权限」成为精确表述的权限模型',
          '一份董事会可以据此行动的架构评审'
        ],
        ctaT: '正在做这层架构？',
        ctaD: '把智能体在你当前架构图中的位置发给我，我告诉你哪里会最先出问题。'
      },
      fde: {
        meta: '驻场 · 实战 · 源自 Palantir 的实践',
        title: '前线部署工程',
        sub: '传统咨询模式失灵了。解法是把工程师部署到前线——进入你的团队、你的数据、你的生产环境。',
        intro1: '前线部署工程（FDE）是 Palantir 赖以建立交付模式的实践：工程师不在外部写建议书，而是嵌入客户内部，与真实数据和真实用户一起生活，用「交付能用的软件」作为咨询本身。交付物不是一份 PPT，而是一个跑在生产里的系统，和一支能运营它的团队。',
        intro2: '我按这套打法运作 FDE 项目，并为智能体时代做了适配：嵌入你的迭代节奏，与你的工程师结对，把每一次部署都变成一次训练。成功的标准，是我离开之后你的团队还能交付什么。',
        pull: 'PPT 是一个承诺，上线是一个事实。',
        h1: 'FDE 打法',
        principles: [
          { t: '部署到问题内部', d: '工作发生在数据和用户所在的地方——你的代码库、你的会议、你的值班表。在内部挣来的理解，胜过在外部做的访谈。' },
          { t: '双重角色：交付与回流', d: 'Palantir 把这个角色一分为二：一类工程师把平台掰弯去解决眼前的客户问题，另一类把学到的东西回流进产品。我们跑同一个循环——每一个临时绕路都会变成路线图上的一项。' },
          { t: '对着真实数据交付', d: '不做合成数据演示。第一周结束时，软件就要在你真实的权限体系下接触你真实的系统——所有难题都住在那里。' },
          { t: '本体先行的集成', d: '遵循 Palantir 的核心经验：集成的是含义，不只是数据。业务对象与动作只建模一次，之后的每个应用都继承它。' },
          { t: '上线高于幻灯片', d: '进度用能用的部署和受训的操作者来衡量——绝不用交付了多少页 PPT。' }
        ],
        h2: '驻场如何运转',
        phases: [
          { w: '第 1 周', t: '沉浸', d: '进入你的代码库、站会和事故频道。周五之前在生产环境落下第一个改动——很小，但是真的。' },
          { w: '第 2–6 周', t: '交付与结对', d: '在你的节奏里交付智能体功能，始终结对。每个 PR 都是教学素材，每次评审都是品味的传递。' },
          { w: '第 7–8 周', t: '交接', d: '我退出关键路径。你的工程师主导，我做评审。退出标准：我走之后，速度不掉。' }
        ],
        h3: '你将带走什么',
        outcomes: [
          '在你自己的代码库与技术栈里交付的生产功能',
          '靠动手而非听课变得精通智能体范式的工程师',
          '下一个团队可以直接继承的集成层与工程约定',
          '一种用上线而非 PPT 来度量进展的交付文化'
        ],
        ctaT: '需要一位 FDE 进驻？',
        ctaD: '告诉我团队和系统的情况，一通电话我就能告诉你这次驻场值不值。'
      }
    },
    chatSub: 'AI 助手 — 在线',
    chatGreet: '你好——我是 Kenny 的 AI。关于他的咨询、教练、产品，或他对智能体时代的看法，尽管问我。',
    chatPh: '问问咨询、Vibe Coding……',
    chatSend: '发送',
    chatBusy: '思考中……',
    chatErr: '嗯，暂时连不上模型，请稍后再试。',
    chatNote: 'AI 生成 · 可能不完美'
  },
  'zh-TW': {
    nav: ['關於', '顧問', '產品', '教練', '觀點', 'Podcast', '部落格'],
    navContact: '聯絡我',
    heroKicker: 'KENNY CHIEN · 企業 AI 顧問 & 教育者',
    heroL1: '軟體的\u200B下一個\u200B時代',
    heroL2a: '屬於',
    heroL2b: 'AI 代理。',
    heroSub: '我協助企業把 AI 真正落地——從 Vibe Coding 到代理本體論，從第一個原型到前線部署的正式系統。',
    heroCta1: '與我合作',
    heroCta2: '問問我的 AI',
    marquee: ['VIBE CODING', 'AI 程式開發', '代理式應用', '前線部署工程', '代理本體論', '企業 AI'],
    aboutTitle: '精通新時代的技術棧。',
    aboutKicker: '顧問 · 建造者 · 教師',
    bio1: 'Kenny Chien 站在企業與 AI 代理時代交會的最前線。身為顧問，他帶領管理層從「對 AI 好奇」走到正式上線的系統；身為前線部署工程師，他與自己輔導的團隊並肩開發。',
    bio2: '他的論點很簡單：贏得下一個十年的公司，是那些讓「人」——而不只是工具——學會用代理思考的公司。',
    expertise: [
      { tag: 'VIBE CODING', d: '以意圖的速度交付軟體——把提示詞當作工藝，而非小聰明。' },
      { tag: 'AI 程式開發', d: '讓 AI 進入工程迴圈：工作流、護欄與品味。' },
      { tag: '代理式應用', d: '讓 AI 代理能夠規劃、行動、復原並回報的應用。' },
      { tag: 'FDE 前線部署', d: '前線部署工程——深入企業團隊內部的交付方式。' },
      { tag: '代理本體論', d: '為你的業務建模，讓 AI 代理能夠推理它。' }
    ],
    consultTitle: '從「試點煉獄」走到正式環境。',
    consultKicker: '寫給企業決策者',
    services: [
      { n: '01', t: 'AI 應用落地', d: '選定一個高價值場景，從白板推進到上線應用——你的團隊全程參與、同步成長。', m: '6–12 週 · 以成果為導向', url: '/consulting/ai-application-launch' },
      { n: '02', t: '代理架構與本體論', d: '設計企業未來運行的本體：實體、動作、權限，以及在其上運作的 AI 代理。', m: '顧問 · 架構', url: '/consulting/agentic-ontology' },
      { n: '03', t: '前線部署工程', d: '我以 FDE 身分嵌入你的工程團隊——結對、審查、交付，直到代理式開發成為肌肉記憶。', m: '駐點 · 實戰', url: '/consulting/forward-deployed-engineering' }
    ],
    prodTitle: '給代理建造者的工具。',
    prodKicker: '實戰驗證，拒絕空談',
    products: [
      { tag: '數位書', t: 'Vibe Coding 實戰手冊', d: '一本關於提示詞、模式與反模式的實戰手冊，教你用 AI 交付真正的軟體。', cta: '取得本書', url: '/products/vibe-coding-playbook' },
      { tag: '工具組', t: '本體論畫布', d: '一套結構化工作表，把你的企業映射為 AI 代理可讀的本體。', cta: '了解畫布', url: '/products/ontology-canvas' },
      { tag: '免費', t: '代理上線檢查表', d: '每個代理式應用進入正式環境前，我都會跑一遍的檢查清單。', cta: '免費下載', url: '/products/agent-launch-checklist' },
      { tag: '平台', t: 'Deep Agents', d: '能拆解目標、衍生子代理、並跨數天持續推進工作的長程 AI 代理——為企業工作流而生。', cta: '預約展示', url: '/products/deep-agents' },
      { tag: '工具', t: '本體生成器', d: '把它指向你的系統與文件——它會草擬一份 AI 代理可讀的本體（實體、動作、權限），交給工程師精修。', cta: '申請使用', url: '/products/ontology-generator' }
    ],
    coachTitle: '學會用代理思考。',
    coachKicker: '寫給領導者與建造者',
    coaching: [
      { m: '團隊 · 全新推出', t: 'Vibe Teaming', d: '一種 AI 原生的工作方式：領域專家、產品思考者與工程師在同一個由教練帶領的循環裡，把真實的客戶問題變成經過驗證、可部署的 AI 解決方案。', cta: '探索 Vibe Teaming', url: '/coaching/vibe-teaming' },
      { m: '領導者 · 1:1', t: '高階主管教練', d: '為正在押注 AI 的決策者提供一對一輔導：策略、供應商的真話，以及自建還是採購。', cta: '預約時段', url: '/coaching/executive-coaching' },
      { m: '開發者 · 共學營', t: 'Vibe Coding 訓練營', d: '四週時間，從「對 AI 好奇」到交付代理式應用——直播課程、真實程式庫、毫不留情的程式碼審查。', cta: '加入候補', url: '/coaching/vibe-coding-bootcamp' },
      { m: '團隊 · 駐點', t: '團隊工作坊', d: '一到兩天的深度集訓，重塑團隊用 AI 開發的方式——在你們的程式庫上，而不是玩具範例。', cta: '預約工作坊', url: '/coaching/team-workshops' }
    ],
    ideasTitle: '值得爭論的觀點。',
    ideasKicker: '持續寫作中',
    ideas: [
      { t: '本體論是新的 Schema', d: '資料庫描述你的資料，本體論描述你的業務。AI 代理需要後者。', url: '/ideas/ontology-is-the-new-schema' },
      { t: '提示詞不是程式設計，編排才是。', d: '工程的基本單位，正從函式轉向代理迴圈。', url: '/ideas/orchestration-over-prompting' },
      { t: 'FDE 心法', d: '為什麼最好的顧問，如今都在客戶內部寫程式。', url: '/ideas/the-fde-mindset' },
      { t: '平庸是一種選擇', d: 'AI 不會生產平庸，未經審視的品味才會。', url: '/ideas/slop-is-a-choice' }
    ],
    podTitle: 'The Agentic Hour',
    podKicker: '來自前線的對話',
    podSub: '與正在打造 AI 代理時代的人對話——實戰者、研究者，偶爾還有懷疑論者。',
    episodes: [
      { n: 'EP 014', t: '企業對 AI 代理的誤解', m: '42 分鐘' },
      { n: 'EP 013', t: '高度監管產業裡的 Vibe Coding', m: '48 分鐘' },
      { n: 'EP 012', t: '先有本體，再談自動化', m: '39 分鐘' }
    ],
    podCta: '全部集數',
    blogTitle: '第一線筆記。',
    blogKicker: '來自真實部署',
    posts: [
      { d: '2026年5月 · 實戰手冊', t: '上線你的第一個代理式應用：90 天計畫', url: '/blog' },
      { d: '2026年4月 · 本體論', t: '悄悄弄壞 AI 代理的五個本體論錯誤', url: '/blog' },
      { d: '2026年3月 · 第一線筆記', t: '在《財星》百大企業擔任 FDE，我學到了什麼', url: '/blog' }
    ],
    contactTitle: '一起打造下一個時代。',
    contactSub: '顧問、教練、演講或 Podcast 來賓——告訴我你正在打造什麼。',
    footerTag: '為 AI 代理時代而作。',
    footerRights: '© 2026 Kenny Chien 版權所有。',
    back: '返回總覽',
    pages: {
      launch: {
        meta: '6–12 週 · 以成果為導向 · 管理層 + 交付團隊',
        title: 'AI 應用落地',
        sub: '認真對待一個場景——從董事會層級的論點，到跑在正式環境裡的軟體。',
        intro1: '多數企業 AI 專案死在「試點煉獄」裡：一個漂亮的展示、一個熱情的指導委員會，卻沒有通往正式環境的路徑。原因很少出在模型本身，而是無人認領的風險——資料邊界、評測、資安審查，以及 AI 代理出錯時誰來負責，這些問題沒人回答。',
        intro2: '落地專案的設計正好與試點相反。我們選定一個經濟價值可衡量的場景，在寫下第一行程式之前先定義什麼叫「能用」，然後推著它闖過完整的關卡——法務、資安、評測、分階段上線——讓組織學會整條路徑，而不只是那個展示。',
        pull: '目標不是一個展示，而是讓組織長出不靠我也能交付下十個應用的肌肉。',
        h1: '工作原則',
        principles: [
          { t: '先算帳，再談架構', d: '我們先為場景建立價值模型——省下的分鐘、解鎖的營收、消除的風險——再讓這個數字約束每一個技術決策。' },
          { t: '評測就是產品', d: '在寫第一個提示詞之前，先建評測集：黃金任務、失敗分類、驗收門檻。無法評分的系統，就是無法上線的系統。' },
          { t: '最小可部署閉環', d: '幾週內先向真實使用者交付一條端到端的薄切片，再逐步加寬——絕不搞憋六個月的大爆炸式發布。' },
          { t: '程式由你的團隊來寫', d: '我的職責是槓桿，不是依賴。你的工程師參與每個元件的結對開發，上線第一天就擁有這套系統。' }
        ],
        h2: '專案結構',
        phases: [
          { w: '第 1–2 週', t: '定框', d: '場景選擇、價值模型、資料與風險盤點、完成標準。產出：一份 CFO 和 CISO 都願意簽字的立案備忘錄。' },
          { w: '第 3–6 週', t: '構建', d: '先建評測，再建應用：檢索、工具呼叫、代理迴圈、人工查核點。每週對照評測集做展示。' },
          { w: '第 7–10 週', t: '加固', d: '紅隊測試、資安審查、可觀測性、成本上限、回滾路徑。正是這些不光鮮的工作，把展示和系統區分開來。' },
          { w: '第 11–12 週', t: '上線與交接', d: '面向真實使用者群分階段上線，交付維運手冊和受訓團隊。我離開，系統留下。' }
        ],
        h3: '你將帶走什麼',
        outcomes: [
          '一個對照價值模型衡量過影響的正式環境應用',
          '一套團隊在每次模型升級時都會重跑的評測機制',
          '一份可複用於下一次落地的資安與治理範本',
          '親手交付過代理式軟體的工程師，而不是旁觀者'
        ],
        ctaT: '已經有想做的場景？',
        ctaD: '用一段話描述這個工作流以及它今天的成本，我會誠實地告訴你它是否值得落地。'
      },
      ontology: {
        meta: '顧問 · 架構 · CAIO / CTO 層級',
        title: '代理架構與本體論',
        sub: '比任何模型都活得久的決策：你的企業如何被表示，以及 AI 代理被允許對它做什麼。',
        intro1: '模型正在變成大宗商品；真正持久的資產，是模型與業務之間的那一層。這一層就是本體——一個機器可讀的模型，描述你的實體、關係、動作與權限。正是它讓 AI 代理知道「取消訂單」是一個有前置條件、副作用和負責人的真實操作，而不是一串可以自動補全的文字。',
        intro2: '我與你的架構師一起，有意識地設計這一層：語義模型、提供給 AI 代理的動作介面、讓自主性變得安全的權限體系，以及在模型與業務規則不斷變化時仍能保持誠實的評測機制。',
        pull: 'AI 代理失敗，不是因為不夠聰明，而是因為沒人告訴它業務是什麼。',
        h1: '我們設計什麼',
        principles: [
          { t: '語義核心', d: '用實體、關係和狀態機描述業務的真實運轉——來自系統和第一線操作者，而不是組織圖。' },
          { t: '動作介面', d: '一份型別化的操作清單，規定 AI 代理可以呼叫什麼——每項都有前置條件、影響、成本與可逆性——能力是被授予的，不是臨場發揮的。' },
          { t: '權限與溯源', d: 'AI 代理能以誰的身分、對什麼、在什麼限度內行動——並在稽核、法務或憤怒的客戶問「為什麼」時，給出完整的決策軌跡。' },
          { t: '與模型解耦的接縫', d: '本體綁定的是你的系統，不是某家供應商。像換驅動程式一樣換模型，資產留在你手裡。' }
        ],
        h2: '工作方式',
        phases: [
          { w: '第 1–2 週', t: '挖掘', d: '與第一線操作者和系統負責人開工作坊，從工作的真實流轉中挖出真正的本體——包括沒人寫進文件的例外。' },
          { w: '第 3–5 週', t: '形式化', d: '寫下語義模型與動作清單，審查、版本化，並針對一個線上系統做出參考實作。' },
          { w: '第 6–8 週', t: '驗證', d: '讓一個 AI 代理在正式環境條件下穿行本體，評測既考核任務成功率，也同樣嚴格地考核權限邊界。' }
        ],
        h3: '你將帶走什麼',
        outcomes: [
          '一份工程師和稽核人員都能讀懂的本體文件',
          '一個針對你線上系統的參考代理實作',
          '一套讓「給 AI 代理權限」成為精確表述的權限模型',
          '一份董事會可以據此行動的架構評估'
        ],
        ctaT: '正在做這層架構？',
        ctaD: '把 AI 代理在你目前架構圖中的位置傳給我，我告訴你哪裡會最先出問題。'
      },
      fde: {
        meta: '駐點 · 實戰 · 源自 Palantir 的實踐',
        title: '前線部署工程',
        sub: '傳統顧問模式失靈了。解法是把工程師部署到前線——進入你的團隊、你的資料、你的正式環境。',
        intro1: '前線部署工程（FDE）是 Palantir 賴以建立交付模式的實踐：工程師不在外部寫建議書，而是嵌入客戶內部，與真實資料和真實使用者一起生活，用「交付能用的軟體」作為顧問服務本身。交付物不是一份簡報，而是一個跑在正式環境裡的系統，和一支能營運它的團隊。',
        intro2: '我按這套打法運作 FDE 專案，並為 AI 代理時代做了調整：嵌入你的迭代節奏，與你的工程師結對，把每一次部署都變成一次訓練。成功的標準，是我離開之後你的團隊還能交付什麼。',
        pull: '簡報是一個承諾，上線是一個事實。',
        h1: 'FDE 打法',
        principles: [
          { t: '部署到問題內部', d: '工作發生在資料和使用者所在的地方——你的程式庫、你的會議、你的輪值表。在內部掙來的理解，勝過在外部做的訪談。' },
          { t: '雙重角色：交付與回流', d: 'Palantir 把這個角色一分為二：一類工程師把平台折彎去解決眼前的客戶問題，另一類把學到的東西回流進產品。我們跑同一個循環——每一個臨時繞路都會變成藍圖上的一項。' },
          { t: '對著真實資料交付', d: '不做合成資料展示。第一週結束時，軟體就要在你真實的權限體系下接觸你真實的系統——所有難題都住在那裡。' },
          { t: '本體先行的整合', d: '遵循 Palantir 的核心經驗：整合的是含義，不只是資料。業務物件與動作只建模一次，之後的每個應用都繼承它。' },
          { t: '上線高於簡報', d: '進度用能用的部署和受訓的操作者來衡量——絕不用交付了多少頁簡報。' }
        ],
        h2: '駐點如何運作',
        phases: [
          { w: '第 1 週', t: '沉浸', d: '進入你的程式庫、站立會議和事故頻道。週五之前在正式環境落下第一個改動——很小，但是真的。' },
          { w: '第 2–6 週', t: '交付與結對', d: '在你的節奏裡交付代理式功能，始終結對。每個 PR 都是教學素材，每次審查都是品味的傳遞。' },
          { w: '第 7–8 週', t: '交接', d: '我退出關鍵路徑。你的工程師主導，我做審查。退場標準：我走之後，速度不掉。' }
        ],
        h3: '你將帶走什麼',
        outcomes: [
          '在你自己的程式庫與技術棧裡交付的正式功能',
          '靠動手而非聽課變得精通代理式開發的工程師',
          '下一個團隊可以直接繼承的整合層與工程慣例',
          '一種用上線而非簡報來衡量進展的交付文化'
        ],
        ctaT: '需要一位 FDE 進駐？',
        ctaD: '告訴我團隊和系統的情況，一通電話我就能告訴你這次駐點值不值。'
      }
    },
    chatSub: 'AI 助理 — 線上',
    chatGreet: '你好——我是 Kenny 的 AI。關於他的顧問服務、教練課程、產品，或他對 AI 代理時代的看法，儘管問我。',
    chatPh: '問問顧問服務、Vibe Coding……',
    chatSend: '送出',
    chatBusy: '思考中……',
    chatErr: '嗯，暫時連不上模型，請稍後再試。',
    chatNote: 'AI 生成 · 可能不完美'
  }
};

window.KC = { HREFS, PAGEKEYS, PAGEIDX, TITLES, LANGNAME, SHAPES, I18N };
