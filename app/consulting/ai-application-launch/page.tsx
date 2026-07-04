import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Application Launch: Pilot to Production",
  description:
    "AI Application Launch is a 6–12 week consulting engagement taking one high-value enterprise AI use case from whiteboard to production, with your team trained.",
  alternates: { canonical: URLS.consultingLaunch },
  openGraph: {
    title: "AI Application Launch: Pilot to Production — Kenny Chien",
    description:
      "AI Application Launch is a 6–12 week consulting engagement taking one high-value enterprise AI use case from whiteboard to production, with your team trained.",
    url: URLS.consultingLaunch,
    type: "website",
  },
};

const service = {
  "@type": "Service",
  "@id": SITE_URL + URLS.consultingLaunch,
  name: "AI Application Launch",
  serviceType: "Enterprise AI Consulting",
  url: SITE_URL + URLS.consultingLaunch,
  description:
    "A 6–12 week outcome-based engagement that takes one high-value enterprise AI use case from whiteboard to deployed application, with the client team trained along the way.",
  provider: PERSON,
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does an AI Application Launch take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Six to twelve weeks depending on scope, structured in four phases: frame, build, harden, and launch and transfer. A thin end-to-end slice reaches real users within weeks — never a six-month build toward a big-bang reveal.",
      },
    },
    {
      "@type": "Question",
      name: "Who from our side needs to be involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A leadership sponsor who owns the value model, plus a small delivery team who will own the system. Your engineers pair on every component and write the code; my job is leverage, not dependence.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Launch engagement cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is outcome-based and scoped per engagement against the value model built in the first phase — there is no rate card. Send one paragraph on the workflow to kenny.chien@gmail.com and I will reply with an honest read on whether it is launchable, and what it would take.",
      },
    },
  ],
};

export default function AiApplicationLaunchPage() {
  return (
    <>
      <style>{`
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 900; font-size: 21px; margin: 0; line-height: 1.25; }
    .kc-faq-a { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: .85; max-width: 840px; text-wrap: pretty; }
    .kc-faq-a a { color: var(--verm); text-decoration: underline; text-underline-offset: 3px; }
    .kc-rel { display: flex; flex-wrap: wrap; align-items: baseline; gap: 12px 28px; margin-top: 64px; border-top: 2px solid var(--ink); padding-top: 22px; }
    .kc-rel-label { font-family: var(--fm); font-size: 10px; letter-spacing: .16em; color: var(--verm); }
    .kc-rel a { font-family: var(--fm); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
    .kc-rel a:hover { color: var(--verm); }
    @media (max-width: 680px) {
      .kc-faq-item { padding: 20px 2px; }
      .kc-faq-q { font-size: 19px; }
    }
      `}</style>
      <JsonLd
        graph={[
          service,
          breadcrumbLd([["Home", "/"], ["Consulting", URLS.consulting], ["AI Application Launch", URLS.consultingLaunch]]),
          faq,
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["CONSULTING", URLS.consulting], ["AI APPLICATION LAUNCH"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/02.1</span>
            <span className="kc-detail-meta">6–12 WEEKS · OUTCOME-BASED · LEADERSHIP + DELIVERY TEAM</span>
          </div>
          <h1 className="kc-detail-title">AI Application Launch</h1>
          <p className="kc-detail-sub">One use case, taken seriously — from board-level thesis to software running in production.</p>

          <div className="kc-detail-intro">
            <p>Most enterprise AI initiatives die in pilot purgatory: a promising demo, an enthusiastic steering committee, and no path to production. The cause is rarely the model. It is unowned risk — unanswered questions about data boundaries, evaluation, security review, and who carries the pager when the agent is wrong.</p>
            <p>A Launch engagement is designed as the opposite of a pilot. We pick one use case with measurable economics, define what &quot;working&quot; means before writing a line of code, and drive it through the full gauntlet — legal, security, evaluation, rollout — so your organization learns the entire path, not just the demo.</p>
          </div>

          <div className="kc-pull"><p>“The goal is not a demo. The goal is the organizational muscle to ship the next ten applications without me.”</p></div>

          <div className="kc-detail-h"><i></i><h2>Operating principles</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin"><span className="kc-prin-n">01</span><div><h3 className="kc-prin-t">Economics before architecture</h3><p className="kc-prin-d">We model the value of the use case first — minutes saved, revenue unlocked, risk retired — and let that number discipline every technical decision.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">02</span><div><h3 className="kc-prin-t">Evaluation is the product</h3><p className="kc-prin-d">Before the first prompt, we build the eval set: golden tasks, failure taxonomies, acceptance thresholds. A system you cannot score is a system you cannot ship.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">03</span><div><h3 className="kc-prin-t">Smallest deployable loop</h3><p className="kc-prin-d">We ship a thin, end-to-end slice to real users in weeks, then widen it — never a six-month build toward a big-bang reveal.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">04</span><div><h3 className="kc-prin-t">Your team writes the code</h3><p className="kc-prin-d">My job is leverage, not dependence. Your engineers pair on every component and own the system from day one of production.</p></div></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Engagement structure</h2></div>
          <div className="kc-phases">
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 1–2</span><h3 className="kc-phase-t">Frame</h3><p className="kc-phase-d">Use-case selection, value model, data and risk audit, definition of done. Output: a launch memo your CFO and CISO both sign.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 3–6</span><h3 className="kc-phase-t">Build</h3><p className="kc-phase-d">Evals first, then the application: retrieval, tools, agent loops, human-in-the-loop checkpoints. Weekly demos against the eval set.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 7–10</span><h3 className="kc-phase-t">Harden</h3><p className="kc-phase-d">Red-teaming, security review, observability, cost envelopes, rollback paths. The unglamorous work that separates demos from systems.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 11–12</span><h3 className="kc-phase-t">Launch &amp; transfer</h3><p className="kc-phase-d">Production rollout to a real cohort, runbooks, and a trained team. I leave; the system stays.</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>A production application with measured impact against the value model</p></div>
            <div className="kc-out"><i>→</i><p>An evaluation harness your team reruns on every model upgrade</p></div>
            <div className="kc-out"><i>→</i><p>A security and governance template reusable for the next launch</p></div>
            <div className="kc-out"><i>→</i><p>Engineers who have shipped agentic software, not watched it</p></div>
          </div>

          <div className="kc-rel">
            <span className="kc-rel-label">RELATED</span>
            <Link href={URLS.launchChecklist}>Agent Launch Checklist (free)</Link>
            <Link href={URLS.ideaOrchestration}>Orchestration over prompting</Link>
            <Link href={URLS.consulting}>All consulting services</Link>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How long does an AI Application Launch take?</h3>
              <p className="kc-faq-a">Six to twelve weeks depending on scope, structured in four phases: frame, build, harden, and launch and transfer. A thin end-to-end slice reaches real users within weeks — never a six-month build toward a big-bang reveal.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Who from our side needs to be involved?</h3>
              <p className="kc-faq-a">A leadership sponsor who owns the value model, plus a small delivery team who will own the system. Your engineers pair on every component and write the code; my job is leverage, not dependence. If building capability across a whole team is the deeper goal, <Link href={URLS.consultingFde}>forward deployed engineering</Link> may be the better fit.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">What does a Launch engagement cost?</h3>
              <p className="kc-faq-a">Pricing is outcome-based and scoped per engagement against the value model built in the first phase — there is no rate card. Send one paragraph on the workflow to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and I will reply with an honest read on whether it is launchable, and what it would take.</p>
            </div>
          </div>

          <DetailCta
            title="Have a use case in mind?"
            body="Send one paragraph on the workflow and what it costs you today. I will reply with an honest read on whether it is launchable."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
