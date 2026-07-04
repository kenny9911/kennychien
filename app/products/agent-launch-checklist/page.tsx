import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "The Agent Launch Checklist is the free pre-flight list run before any agentic app touches production — evaluation, security, observability, and rollback gates.";

export const metadata: Metadata = {
  title: "Agent Launch Checklist: Pre-Production Gates",
  description: DESCRIPTION,
  alternates: { canonical: "/products/agent-launch-checklist" },
  openGraph: {
    title: "Agent Launch Checklist: Pre-Production Gates — Kenny Chien",
    description: DESCRIPTION,
    url: "/products/agent-launch-checklist",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "Product",
    name: "Agent Launch Checklist",
    url: SITE_URL + URLS.launchChecklist,
    description:
      "A pre-flight checklist for agentic applications: the evaluation, security, observability, and rollback gates to clear before any agent touches production.",
    brand: PERSON,
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
    ["Agent Launch Checklist", "/products/agent-launch-checklist"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the Agent Launch Checklist really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It is free on request and will stay free. There is no download link yet because the packaged edition is still in development — email kenny.chien@gmail.com and I will send you the current version directly.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of application does the checklist apply to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any agentic application — software where an AI agent plans, calls tools, and acts on real systems. The gates are framework-agnostic and model-agnostic: they test whether you can score, secure, observe, and roll back the system, regardless of which stack produced it.",
        },
      },
      {
        "@type": "Question",
        name: "How does the checklist relate to the AI Application Launch engagement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The checklist condenses the hardening phase of an AI Application Launch engagement into one document. The engagement is the full path from use case to production with me involved; the checklist is the free distillation of what production-ready means, for teams running that path themselves.",
        },
      },
    ],
  },
];

export default function AgentLaunchChecklistPage() {
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
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS", "/products"], ["AGENT LAUNCH CHECKLIST"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.3</span>
            <span className="kc-detail-meta">FREE · IN DEVELOPMENT · FREE ON REQUEST</span>
            <div className="kc-hero-shape" style={{ background: "repeating-linear-gradient(45deg,#161512 0 2px,transparent 2px 8px)", borderRadius: "50%", border: "1px solid #161512" }}></div>
          </div>
          <h1 className="kc-detail-title">Agent Launch Checklist</h1>
          <p className="kc-detail-sub">The pre-flight list I run before any agentic app touches production.</p>

          <div className="kc-detail-h" style={{ marginTop: "64px" }}><i></i><h2>What is the Agent Launch Checklist?</h2></div>
          <section className="kc-detail-intro" style={{ marginTop: "28px", borderTop: "none", paddingTop: 0 }}>
            <p>The Agent Launch Checklist is a pre-flight checklist for agentic applications — the ordered list of evaluation, security, observability, and rollback gates I run before any agent is allowed to touch production. It turns &quot;are we ready to ship this?&quot; from a feeling into a series of yes-or-no questions with owners.</p>
            <p>It exists because most agent failures in production were predictable before launch: no evaluation set, no permission boundary testing, no cost envelope, no rollback path. The checklist is the condensed hardening phase of my <Link href={URLS.consultingLaunch} style={{ color: "var(--verm)" }}>AI Application Launch</Link> engagements — the unglamorous work that separates demos from systems, in a form any team can run in an afternoon.</p>
          </section>

          <div className="kc-pull">
            <p>A system you cannot score is a system you cannot ship. The checklist starts there and does not let go until someone owns the pager.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>What the gates cover</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">Evaluation gates</h3>
                <p className="kc-prin-d">Golden tasks, failure taxonomies, and acceptance thresholds — written down before launch, rerun on every model upgrade. If the eval set does not exist, the launch conversation ends here.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Security gates</h3>
                <p className="kc-prin-d">Permission boundaries tested as hard as task success: what the agent may act on, as whom, within which limits — plus red-team prompts and a data-boundary review that legal can read.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Observability gates</h3>
                <p className="kc-prin-d">Tracing on every agent decision, cost envelopes with alerts, and a provenance trail that answers &quot;why did it do that?&quot; — for audit, for debugging, and for the angry-customer call.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Rollback gates</h3>
                <p className="kc-prin-d">Kill switches, graceful degradation paths, and a named human who carries the pager when the agent is wrong. No agent ships until the path back out of production is as clear as the path in.</p>
              </div>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Who it&apos;s for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Teams about to ship their first agentic application and unsure what &quot;ready&quot; means</p></div>
            <div className="kc-out"><i>→</i><p>Security and platform reviewers who need a structured basis for a go/no-go call</p></div>
            <div className="kc-out"><i>→</i><p>Engineering leaders who want launch criteria that survive their absence from the room</p></div>
            <div className="kc-out"><i>→</i><p>Teams with an agent already in production who suspect they skipped some gates</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Status and availability</h2></div>
          <div className="kc-status">
            <span className="kc-status-tag">FREE ON REQUEST</span>
            <p>The packaged edition is in development, but the checklist itself is in active use today. It is free and will stay free — email me and I will send you the current version directly, no list-building rituals attached. If you tell me what you are launching, I will flag the gates that matter most for your case.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3>Is the checklist really free?</h3>
              <p>Yes. It is free on request and will stay free. There is no download link yet because the packaged edition is still in development — email me and I will send you the current version directly.</p>
            </div>
            <div className="kc-faq-item">
              <h3>What kind of application does it apply to?</h3>
              <p>Any agentic application — software where an AI agent plans, calls tools, and acts on real systems. The gates are framework-agnostic and model-agnostic: they test whether you can score, secure, observe, and roll back the system, regardless of which stack produced it.</p>
            </div>
            <div className="kc-faq-item">
              <h3>How does it relate to the AI Application Launch engagement?</h3>
              <p>The checklist condenses the hardening phase of an <Link href={URLS.consultingLaunch}>AI Application Launch</Link> engagement into one document. The engagement is the full path from use case to production with me involved; the checklist is the free distillation of what production-ready means, for teams running that path themselves.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Go deeper</h2></div>
          <nav className="kc-rel" aria-label="Related pages">
            <Link href={URLS.consultingLaunch}>Consulting: AI Application Launch →</Link>
            <Link href={URLS.deepAgents}>Deep Agents →</Link>
            <Link href={URLS.products}>All products →</Link>
          </nav>

          <DetailCta
            title="Launching an agent soon?"
            body="Email me one line about what you are shipping and when. I will send the checklist and point out the gates teams in your situation most often skip."
            subject="Agent Launch Checklist request"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
