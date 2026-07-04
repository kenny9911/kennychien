import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "Deep Agents is a platform for long-horizon AI agents that decompose goals, spawn sub-agents, and persist state across days of enterprise work. In development.";

export const metadata: Metadata = {
  title: "Deep Agents: Long-Horizon Enterprise Agents",
  description: DESCRIPTION,
  alternates: { canonical: "/products/deep-agents" },
  openGraph: {
    title: "Deep Agents: Long-Horizon Enterprise Agents — Kenny Chien",
    description: DESCRIPTION,
    url: "/products/deep-agents",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "SoftwareApplication",
    name: "Deep Agents",
    url: SITE_URL + URLS.deepAgents,
    description:
      "A platform for long-horizon AI agents that decompose goals, spawn sub-agents, and persist state across days of work — built for enterprise workflows.",
    applicationCategory: "BusinessApplication",
    creator: PERSON,
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
    ["Deep Agents", "/products/deep-agents"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is a deep agent different from a chatbot or a copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A chatbot answers within a conversation and a copilot assists within a session. A deep agent owns a goal across sessions: it decomposes the goal into a plan, spawns scoped sub-agents for the parts, persists its state, and reports progress until the work is done or a human stops it.",
        },
      },
      {
        "@type": "Question",
        name: "What does my organization need before deploying Deep Agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An honest answer: an ontology helps enormously. Deep agents act through a defined interface of entities, actions, and permissions, and organizations that have mapped that layer get value fastest. The Ontology Canvas and Ontology Generator exist precisely to build it.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see Deep Agents running today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The platform is in development and demos are arranged individually. Email kenny.chien@gmail.com with a description of the workflow you want to hand to an agent, and I will show you the current state against a scenario close to yours — and tell you plainly what is not built yet.",
        },
      },
    ],
  },
];

export default function DeepAgentsPage() {
  return (
    <>
      <style>{`
    .kc-hero-shape { width: 62px; height: 62px; flex: none; margin-left: auto; align-self: center; }
    .kc-status { margin-top: 26px; border: 1px solid var(--ink); background: var(--card); padding: 28px 30px; display: flex; gap: 20px; align-items: baseline; flex-wrap: wrap; }
    .kc-status-tag { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; background: var(--verm); color: var(--paper); padding: 5px 10px; white-space: nowrap; }
    .kc-status p { margin: 0; font-size: 15.5px; line-height: 1.65; flex: 1; min-width: 240px; text-wrap: pretty; }
    .kc-status a { color: var(--verm); }
    .kc-faq { margin-top: 12px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-item h3 { font-family: var(--fd); font-weight: 900; font-size: 19px; margin: 0; line-height: 1.3; }
    .kc-faq-item p { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: 0.85; max-width: 840px; text-wrap: pretty; }
    .kc-faq-item a { color: var(--verm); }
    .kc-rel { margin-top: 22px; display: flex; flex-wrap: wrap; gap: 12px; }
    .kc-rel a { font-family: var(--fm); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--ink); padding: 11px 15px; text-decoration: none; }
    .kc-rel a:hover { background: var(--ink); color: var(--paper); }
      `}</style>
      <JsonLd graph={GRAPH} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS", "/products"], ["DEEP AGENTS"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.4</span>
            <span className="kc-detail-meta">PLATFORM · IN DEVELOPMENT · DEMOS BY REQUEST</span>
            <div className="kc-hero-shape" style={{ background: "#2742D8", borderRadius: "50%", border: "none" }}></div>
          </div>
          <h1 className="kc-detail-title">Deep Agents</h1>
          <p className="kc-detail-sub">Long-horizon agents that decompose goals, spawn sub-agents, and persist state across days of work — built for enterprise workflows.</p>

          <div className="kc-detail-h" style={{ marginTop: "64px" }}><i></i><h2>What is Deep Agents?</h2></div>
          <section className="kc-detail-intro" style={{ marginTop: "28px", borderTop: "none", paddingTop: 0 }}>
            <p>Deep Agents is a platform for long-horizon AI agents — agents that take a business goal, decompose it into a plan, spawn scoped sub-agents for the parts, and persist their state across sessions and days of work. It is built for enterprise workflows that do not fit inside a chat window: multi-step operations, research that spans a week, processes with human checkpoints in the middle.</p>
            <p>The design premise is that autonomy without structure is a liability. Deep agents operate through a defined action interface — the entities, operations, and permissions of your business — so every step they take is one your organization explicitly allowed, and every decision leaves a trail. The unit of engineering here is not the prompt; it is the agent loop, governed.</p>
          </section>

          <div className="kc-pull">
            <p>A chat answers a question. A deep agent owns a goal — and keeps owning it after everyone has closed the tab.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>How it works</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">Goal decomposition</h3>
                <p className="kc-prin-d">A deep agent starts from a business goal, not a prompt. It breaks the goal into a plan of verifiable sub-tasks, each with its own definition of done, and revises the plan as reality pushes back.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Scoped sub-agents</h3>
                <p className="kc-prin-d">For each sub-task, the agent spawns a sub-agent with exactly the permissions and context that task needs — nothing more. Failures stay contained; capability is granted, never improvised.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Persistent state</h3>
                <p className="kc-prin-d">Work survives the session. Plans, progress, and intermediate artifacts persist across days, so an agent can pause for a human approval on Tuesday and resume exactly where it stopped on Wednesday.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Enterprise guardrails</h3>
                <p className="kc-prin-d">Agents act through your ontology&apos;s action interface: typed operations with preconditions, permission checks, and a full decision trail. Human checkpoints sit wherever your risk profile demands them.</p>
              </div>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Who it&apos;s for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Enterprises with long-running workflows — operations, compliance, research, reporting — that outlast any single session</p></div>
            <div className="kc-out"><i>→</i><p>Platform teams that have outgrown single-prompt agents and are hand-rolling orchestration</p></div>
            <div className="kc-out"><i>→</i><p>Organizations that already model their business as an ontology and want agents that respect it</p></div>
            <div className="kc-out"><i>→</i><p>Leaders who want agent autonomy with auditability, not autonomy instead of it</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Status and availability</h2></div>
          <div className="kc-status">
            <span className="kc-status-tag">IN DEVELOPMENT</span>
            <p>Deep Agents is in development and available on request. Demos are arranged individually against scenarios close to yours, and early design partners shape what gets built next. Email me a description of the workflow you want to hand to an agent, and I will tell you plainly what works today and what does not exist yet.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3>How is a deep agent different from a chatbot or a copilot?</h3>
              <p>A chatbot answers within a conversation and a copilot assists within a session. A deep agent owns a goal across sessions: it decomposes the goal into a plan, spawns scoped sub-agents for the parts, persists its state, and reports progress until the work is done or a human stops it.</p>
            </div>
            <div className="kc-faq-item">
              <h3>What does my organization need before deploying deep agents?</h3>
              <p>An honest answer: an ontology helps enormously. Deep agents act through a defined interface of entities, actions, and permissions, and organizations that have mapped that layer get value fastest. The <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link> and <Link href={URLS.ontologyGenerator}>Ontology Generator</Link> exist precisely to build it, and my <Link href={URLS.consultingOntology}>agentic ontology consulting</Link> covers the same ground with me in the room.</p>
            </div>
            <div className="kc-faq-item">
              <h3>Can I see it running today?</h3>
              <p>The platform is in development and demos are arranged individually. Email me with the workflow you have in mind, and I will show you the current state against a scenario close to yours — and tell you plainly what is not built yet.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Go deeper</h2></div>
          <nav className="kc-rel" aria-label="Related pages">
            <Link href={URLS.consultingOntology}>Consulting: Agentic Architecture &amp; Ontology →</Link>
            <Link href={URLS.launchChecklist}>Agent Launch Checklist →</Link>
            <Link href={URLS.ideaOrchestration}>Essay: Orchestration over prompting →</Link>
            <Link href={URLS.products}>All products →</Link>
          </nav>

          <DetailCta
            title="Have a workflow in mind?"
            body="Describe the work you want an agent to own — the goal, the systems it touches, and where a human must stay in the loop. I will reply with an honest read and a demo when the fit is real."
            subject="Deep Agents demo request"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
