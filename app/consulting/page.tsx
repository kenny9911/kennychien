import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise AI Consulting for the Agentic Era",
  description:
    "Enterprise AI consulting by Kenny Chien: AI application launch, agentic architecture and ontology, and forward deployed engineering — pilot to production.",
  alternates: { canonical: URLS.consulting },
  openGraph: {
    title: "Enterprise AI Consulting for the Agentic Era — Kenny Chien",
    description:
      "Enterprise AI consulting by Kenny Chien: AI application launch, agentic architecture and ontology, and forward deployed engineering — pilot to production.",
    url: URLS.consulting,
    type: "website",
  },
};

const service = {
  "@type": "Service",
  "@id": SITE_URL + URLS.consulting,
  name: "Enterprise AI Consulting",
  serviceType: "Enterprise AI Consulting",
  url: SITE_URL + URLS.consulting,
  description:
    "AI application launch, agentic architecture and ontology design, and forward deployed engineering for enterprises moving from pilots to production.",
  provider: PERSON,
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from working with a big consultancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deliverable is different. Large consultancies sell strategy and staff; I ship working software inside your team and measure the engagement by what runs in production after I leave. You get one senior practitioner, not a pyramid of juniors — and your engineers write the code with me, so the capability stays.",
      },
    },
    {
      "@type": "Question",
      name: "What does an engagement cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every engagement is scoped individually against the value of the use case, so there is no rate card to publish. Email kenny.chien@gmail.com with a paragraph on what you are trying to ship and I will give you an honest read on scope and cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work remote or on-site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Most engagements run remotely inside your existing cadence — your repos, standups, and channels. On-site time is scoped per engagement where the work genuinely benefits from it, typically kickoff workshops and go-lives.",
      },
    },
    {
      "@type": "Question",
      name: "Which service should we start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have one high-value use case, start with AI Application Launch. If the open question is architecture — how agents should represent and act on your business — start with Agentic Architecture and Ontology. If the goal is team capability, start with Forward Deployed Engineering.",
      },
    },
    {
      "@type": "Question",
      name: "Are you tied to a specific vendor or platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. I do not resell a platform, and engagements are deliberately model-agnostic. We build the ontology and evaluation layer so you can swap frontier models — Claude, GPT, or open-weight — without rebuilding the system.",
      },
    },
  ],
};

export default function ConsultingPage() {
  return (
    <>
      <style>{`
    .kc-lead { margin: 24px 0 0; font-size: 17px; line-height: 1.75; max-width: 840px; text-wrap: pretty; }
    .kc-svcs { margin-top: 18px; border-top: 1px solid var(--ink); }
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 900; font-size: 21px; margin: 0; line-height: 1.25; }
    .kc-faq-a { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: .85; max-width: 840px; text-wrap: pretty; }
    .kc-faq-a a { color: var(--verm); text-decoration: underline; text-underline-offset: 3px; }
    .kc-notes-p { font-family: var(--fs); font-style: italic; font-size: clamp(20px, 2.2vw, 26px); line-height: 1.5; margin: 28px 0 0; max-width: 900px; text-wrap: pretty; }
    .kc-notes-links { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-top: 34px; border-top: 1px solid var(--hair); padding-top: 22px; }
    .kc-notes-links a { font-family: var(--fm); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
    .kc-notes-links a:hover { color: var(--verm); }
    @media (max-width: 680px) {
      .kc-faq-item { padding: 20px 2px; }
      .kc-faq-q { font-size: 19px; }
    }
      `}</style>
      <JsonLd graph={[service, breadcrumbLd([["Home", "/"], ["Consulting", URLS.consulting]]), faq]} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["CONSULTING"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/02</span>
            <span className="kc-detail-meta">CONSULTING · FOR ENTERPRISE LEADERS</span>
          </div>
          <h1 className="kc-detail-title">Enterprise AI Consulting</h1>
          <p className="kc-detail-sub">From pilot purgatory to production — three ways to get AI shipped, measured, and owned by your own team.</p>

          <div className="kc-detail-intro">
            <p>What is enterprise AI consulting for the agentic era? It is the work of taking AI from a promising demo to software that runs part of your business — with the evaluation, security, permissions, and trained people that production demands. That is the work I do: not strategy decks about AI, but AI applications in production and teams that can build the next one without me.</p>
            <p>I offer three ways to engage: launching one AI application end to end, designing the agentic architecture and ontology your enterprise will run on, and embedding with your engineers as a forward deployed engineer (FDE). Different entry points, one thesis: the companies that win the next decade are the ones whose people — not just whose tools — learn to think in agents.</p>
          </div>

          <div className="kc-pull"><p>“The deliverable is not a deck. It is a system in production and a team that can run it without me.”</p></div>

          <div className="kc-detail-h"><i></i><h2>Three ways to work with me</h2></div>
          <div className="kc-svcs">
            <Link className="kc-svc-row" href={URLS.consultingLaunch}>
              <span className="kc-svc-n">01</span>
              <h3 className="kc-svc-t">AI Application Launch</h3>
              <p className="kc-svc-d">One high-value use case, taken from whiteboard to deployed application — with your team trained along the way.</p>
              <span className="kc-svc-m">6–12 WEEKS · OUTCOME-BASED</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
            <Link className="kc-svc-row" href={URLS.consultingOntology}>
              <span className="kc-svc-n">02</span>
              <h3 className="kc-svc-t">Agentic Architecture &amp; Ontology</h3>
              <p className="kc-svc-d">Design the ontology your enterprise will run on: entities, actions, permissions — and the agents that traverse them.</p>
              <span className="kc-svc-m">ADVISORY · ARCHITECTURE</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
            <Link className="kc-svc-row" href={URLS.consultingFde}>
              <span className="kc-svc-n">03</span>
              <h3 className="kc-svc-t">Forward Deployed Engineering</h3>
              <p className="kc-svc-d">I embed with your engineers as an FDE — pairing, reviewing, and shipping until agentic patterns become muscle memory.</p>
              <span className="kc-svc-m">EMBEDDED · HANDS-ON</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
          </div>

          <div className="kc-detail-h"><i></i><h2>How I run engagements</h2></div>
          <p className="kc-lead">Every engagement, whatever its shape, runs on the same six principles. They are not aspirations; they are the operating rules that decide what gets built, in what order, and by whom.</p>
          <div className="kc-prin-grid">
            <div className="kc-prin"><span className="kc-prin-n">01</span><div><h3 className="kc-prin-t">Economics before architecture</h3><p className="kc-prin-d">We model the value of the use case first — minutes saved, revenue unlocked, risk retired — and let that number discipline every technical decision.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">02</span><div><h3 className="kc-prin-t">Evaluation is the product</h3><p className="kc-prin-d">Before the first prompt, we build the eval set: golden tasks, failure taxonomies, acceptance thresholds. A system you cannot score is a system you cannot ship.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">03</span><div><h3 className="kc-prin-t">Smallest deployable loop</h3><p className="kc-prin-d">We ship a thin, end-to-end slice to real users in weeks, then widen it — never a six-month build toward a big-bang reveal.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">04</span><div><h3 className="kc-prin-t">Your team writes the code</h3><p className="kc-prin-d">My job is leverage, not dependence. Your engineers pair on every component and own the system from day one of production.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">05</span><div><h3 className="kc-prin-t">Ontology-first integration</h3><p className="kc-prin-d">Integrate meaning, not just data. Model the business objects and actions once, and every later application inherits them.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">06</span><div><h3 className="kc-prin-t">Go-lives over slideware</h3><p className="kc-prin-d">Progress is measured in working deployments and trained operators — never in decks delivered.</p></div></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Technologies and stack</h2></div>
          <p className="kc-lead">I do not resell a platform, and no engagement is tied to a vendor. The work runs across whatever your stack requires — these are the layers every serious agentic system ends up needing, and where the engagements operate.</p>
          <div style={{ marginTop: 18 }}>
            <div className="kc-exp-row"><span className="kc-exp-tag">FRONTIER MODELS</span><p className="kc-exp-d">Claude, GPT, and open-weight models. Engagements are model-agnostic by design: the ontology and evaluation layer let you swap models without rebuilding the system.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">RETRIEVAL</span><p className="kc-exp-d">Grounding agents in your documents, systems, and institutional knowledge — so answers cite sources instead of inventing them.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">ORCHESTRATION</span><p className="kc-exp-d">Agent loops that plan, act, recover, and report — including sub-agents, human-in-the-loop checkpoints, and long-horizon workflows.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">TOOLS &amp; ACTIONS</span><p className="kc-exp-d">Typed interfaces to the operations agents may invoke — each with preconditions, effects, and reversibility, so capability is granted, never improvised.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">EVALUATION</span><p className="kc-exp-d">Eval harnesses with golden tasks, failure taxonomies, and acceptance thresholds — rerun on every model upgrade and every prompt change.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">OBSERVABILITY</span><p className="kc-exp-d">Tracing, cost envelopes, and rollback paths. The unglamorous instrumentation that separates demos from systems.</p></div>
            <div className="kc-exp-row"><span className="kc-exp-tag">PERMISSIONING</span><p className="kc-exp-d">Who may an agent act as, on what, within which limits — with a decision trail for when audit, legal, or an angry customer asks why.</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Where agentic AI pays off</h2></div>
          <p className="kc-lead">The use cases that survive contact with production share a shape: measurable economics, real data, and operations an agent can be safely permitted to perform. These are the families of work where engagements typically land.</p>
          <div className="kc-prin-grid">
            <div className="kc-prin"><span className="kc-prin-n">01</span><div><h3 className="kc-prin-t">Document &amp; knowledge workflows</h3><p className="kc-prin-d">Contract review, policy questions, research synthesis — agents that read at scale, ground every answer in sources, and route exceptions to people.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">02</span><div><h3 className="kc-prin-t">Customer operations</h3><p className="kc-prin-d">Triage, case summarization, drafting, and resolution — with permissioned actions and human checkpoints where the stakes demand them.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">03</span><div><h3 className="kc-prin-t">Engineering acceleration</h3><p className="kc-prin-d">AI coding workflows, migration and refactoring agents, and test generation — the same discipline I teach in the <Link href={URLS.bootcamp} style={{ color: "var(--verm)" }}>Vibe Coding Bootcamp</Link>, applied to your codebase.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">04</span><div><h3 className="kc-prin-t">Back-office automation</h3><p className="kc-prin-d">Reconciliation, reporting, compliance checks — operations with clear preconditions and audit trails, which is exactly what agents need to act safely.</p></div></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Trends and field notes</h2></div>
          <p className="kc-notes-p">The pattern across current engagements: models are becoming a commodity, while ontology and orchestration are becoming the durable assets. The teams pulling ahead treat evaluation as engineering, not an afterthought — and they learn fastest by shipping.</p>
          <div className="kc-notes-links">
            <Link href={URLS.ideaSchema}>Ontology is the new schema</Link>
            <Link href={URLS.ideaOrchestration}>Orchestration over prompting</Link>
            <Link href={URLS.ideaFde}>The FDE mindset</Link>
            <Link href={URLS.ideaSlop}>Slop is a choice</Link>
            <Link href={URLS.ideas}>All essays →</Link>
            <Link href={URLS.blog}>Field notes from deployments →</Link>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How is this different from working with a big consultancy?</h3>
              <p className="kc-faq-a">The deliverable is different. Large consultancies sell strategy and staff; I ship working software inside your team and measure the engagement by what runs in production after I leave. You get one senior practitioner, not a pyramid of juniors — and your engineers write the code with me, so the capability stays.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">What does an engagement cost?</h3>
              <p className="kc-faq-a">Every engagement is scoped individually against the value of the use case, so there is no rate card to publish. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with a paragraph on what you are trying to ship and I will give you an honest read on scope and cost.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Do you work remote or on-site?</h3>
              <p className="kc-faq-a">Both. Most engagements run remotely inside your existing cadence — your repos, standups, and channels. On-site time is scoped per engagement where the work genuinely benefits from it, typically kickoff workshops and go-lives.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Which service should we start with?</h3>
              <p className="kc-faq-a">If you have one high-value use case, start with an <Link href={URLS.consultingLaunch}>AI Application Launch</Link>. If the open question is architecture — how agents should represent and act on your business — start with <Link href={URLS.consultingOntology}>Agentic Architecture &amp; Ontology</Link>. If the goal is team capability, start with <Link href={URLS.consultingFde}>Forward Deployed Engineering</Link>.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Are you tied to a specific vendor or platform?</h3>
              <p className="kc-faq-a">No. I do not resell a platform, and engagements are deliberately model-agnostic. We build the ontology and evaluation layer so you can swap frontier models — Claude, GPT, or open-weight — without rebuilding the system.</p>
            </div>
          </div>

          <DetailCta
            title="Not sure where to start?"
            body="Send one paragraph on what you are trying to ship and what it costs you today. I will reply with an honest read on which engagement fits — or whether you need one at all."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
