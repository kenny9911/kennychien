import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "Kenny Chien's coaching teaches leaders and builders to think in agents — Vibe Teaming, executive coaching, a vibe coding bootcamp, and team workshops.";

export const metadata: Metadata = {
  title: "Coaching for the Agentic Era",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Coaching for the Agentic Era — Kenny Chien",
    description: DESCRIPTION,
    url: "/coaching",
    type: "website",
  },
};

export default function CoachingPage() {
  return (
    <>
      <style>{`
    .kc-feat {
      display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 32px; align-items: end;
      border: 2px solid var(--ink); background: var(--card); padding: 38px;
      margin-top: 26px; color: inherit; text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .kc-feat:hover { transform: translate(-4px, -4px); box-shadow: 8px 8px 0 var(--ink); }
    .kc-feat-tags { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .kc-feat-new { font-family: var(--fm); font-size: 10px; letter-spacing: 0.16em; background: var(--verm); color: var(--paper); padding: 4px 9px; }
    .kc-feat-meta { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; opacity: 0.65; text-transform: uppercase; }
    .kc-feat-t { font-family: var(--fd); font-weight: 900; font-size: clamp(30px, 3.2vw, 44px); margin: 18px 0 0; text-transform: uppercase; line-height: 1.05; }
    .kc-feat-d { margin: 16px 0 0; font-size: 16px; line-height: 1.65; opacity: 0.82; max-width: 720px; text-wrap: pretty; }
    .kc-feat-note { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.1em; margin: 18px 0 0; color: var(--blue); }
    .kc-feat-cta { font-family: var(--fm); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--verm); text-decoration: underline; text-underline-offset: 4px; white-space: nowrap; }
    .kc-offer-rows { margin-top: 8px; border-top: 1px solid var(--ink); }
    .kc-aside { font-family: var(--fs); font-style: italic; font-size: 19px; line-height: 1.55; margin: 40px 0 0; opacity: 0.85; max-width: 760px; }
    .kc-aside a { color: var(--verm); }
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 800; font-size: 19px; margin: 0; }
    .kc-faq-a { margin: 10px 0 0; font-size: 15px; line-height: 1.7; opacity: 0.82; max-width: 820px; text-wrap: pretty; }
    .kc-faq-a a { color: var(--verm); }
    @media (max-width: 1080px) {
      .kc-feat { grid-template-columns: minmax(0, 1fr); gap: 24px; align-items: start; }
    }
    @media (max-width: 680px) {
      .kc-feat { padding: 26px 22px; }
    }
      `}</style>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            name: "Coaching for the Agentic Era",
            url: `${SITE_URL}/coaching`,
            inLanguage: "en",
            description: DESCRIPTION,
            about: PERSON,
          },
          {
            "@type": "ItemList",
            name: "Coaching offerings",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Vibe Teaming", url: SITE_URL + URLS.vibeTeaming },
              { "@type": "ListItem", position: 2, name: "Executive Coaching", url: SITE_URL + URLS.executiveCoaching },
              { "@type": "ListItem", position: 3, name: "Vibe Coding Bootcamp", url: SITE_URL + URLS.bootcamp },
              { "@type": "ListItem", position: 4, name: "Team Workshops", url: SITE_URL + URLS.teamWorkshops },
            ],
          },
          breadcrumbLd([
            ["Kenny Chien", "/"],
            ["Coaching", "/coaching"],
          ]),
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What formats does the coaching take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Four formats: Vibe Teaming engagements for whole teams, private one-on-one executive coaching, a four-week cohort-based vibe coding bootcamp, and one- or two-day team workshops. Each format has its own page with the full structure.",
                },
              },
              {
                "@type": "Question",
                name: "Is the coaching remote or on-site?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both. Executive coaching and the bootcamp run remotely by default. Team workshops and Vibe Teaming engagements work best on-site, but remote versions exist for distributed teams. Time zones are workable.",
                },
              },
              {
                "@type": "Question",
                name: "Who is this coaching for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Leaders making AI decisions, developers who want to ship agentic software, and teams that need to build with AI as one unit. It is not a tool tutorial — tools change every quarter; thinking in agents is the durable skill.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Email kenny.chien@gmail.com with one paragraph on who you are and what you want to get better at. You will get an honest read on which format fits — or whether coaching is the wrong instrument for the problem.",
                },
              },
            ],
          },
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["COACHING"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03</span>
            <span className="kc-detail-meta">COACHING · FOR LEADERS AND BUILDERS · REMOTE OR ON-SITE</span>
          </div>
          <h1 className="kc-detail-title">Coaching for the agentic era</h1>
          <p className="kc-detail-sub">Learn to think in agents — the durable skill underneath every tool, model, and vendor pitch.</p>

          <div className="kc-detail-intro">
            <p>Kenny Chien&rsquo;s coaching teaches leaders and builders to think in agents — to frame problems, design workflows, and ship software the way the agentic era demands. I coach through practice, not lectures: real codebases, real decisions, real customer problems. The goal is capability that stays after I leave the room.</p>
            <p>Four offerings cover the range. Vibe Teaming is an AI-native execution model for whole teams — my featured methodology, newly published. Executive coaching is private one-on-one work for leaders making AI bets. The vibe coding bootcamp takes developers from AI-curious to shipping agentic applications in four weeks. Team workshops are one- and two-day intensives run on your codebase.</p>
          </div>

          <div className="kc-pull"><p>&ldquo;Tools change every quarter. The ability to think in agents compounds.&rdquo;</p></div>

          <div className="kc-detail-h"><i></i><h2>The offerings</h2></div>

          <Link className="kc-feat" href={URLS.vibeTeaming}>
            <div>
              <div className="kc-feat-tags">
                <span className="kc-feat-new">NEW</span>
                <span className="kc-feat-meta">FOR TEAMS · AI-NATIVE EXECUTION MODEL · FEATURED</span>
              </div>
              <h3 className="kc-feat-t">Vibe Teaming</h3>
              <p className="kc-feat-d">An AI-native execution model that puts domain experts, product thinkers, engineers, and customer-facing teams in one coached, hands-on loop — turning real customer problems into validated, reusable, deployable AI solutions. Six principles, a nine-step pipeline, and the reusable assets every session must leave behind.</p>
              <p className="kc-feat-note">DEEP-DIVE METHODOLOGY PAGE — 中文</p>
            </div>
            <span className="kc-feat-cta">Read the methodology →</span>
          </Link>

          <div className="kc-offer-rows">
            <Link className="kc-svc-row" href={URLS.executiveCoaching}>
              <span className="kc-svc-n">01</span>
              <h3 className="kc-svc-t">Executive Coaching</h3>
              <p className="kc-svc-d">Private sessions for leaders making AI bets: strategy, vendor truth-telling, and what to build versus buy.</p>
              <span className="kc-svc-m">FOR LEADERS · 1:1</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
            <Link className="kc-svc-row" href={URLS.bootcamp}>
              <span className="kc-svc-n">02</span>
              <h3 className="kc-svc-t">Vibe Coding Bootcamp</h3>
              <p className="kc-svc-d">Four weeks from AI-curious to shipping agentic apps — live sessions, real codebases, brutal code review.</p>
              <span className="kc-svc-m">FOR DEVELOPERS · COHORT</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
            <Link className="kc-svc-row" href={URLS.teamWorkshops}>
              <span className="kc-svc-n">03</span>
              <h3 className="kc-svc-t">Team Workshops</h3>
              <p className="kc-svc-d">One- and two-day intensives that rewire how a team builds with AI — on your codebase, not toy demos.</p>
              <span className="kc-svc-m">FOR TEAMS · ON-SITE</span>
              <span className="kc-svc-arrow">→</span>
            </Link>
          </div>

          <p className="kc-aside">Coaching builds capability. If you need a system shipped with you rather than skills built in you, that is <Link href={URLS.consulting}>consulting</Link>.</p>

          <div className="kc-detail-h"><i></i><h2>Who I coach</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Executives and senior leaders deciding what to build, what to buy, and what to believe</p></div>
            <div className="kc-out"><i>→</i><p>Developers moving from AI-curious to shipping agentic applications in production</p></div>
            <div className="kc-out"><i>→</i><p>Engineering and product teams that need one shared way of building with AI</p></div>
            <div className="kc-out"><i>→</i><p>Organizations adopting Vibe Teaming as their delivery model for AI work</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Common questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">What formats does the coaching take?</h3>
              <p className="kc-faq-a">Four formats: <Link href={URLS.vibeTeaming}>Vibe Teaming</Link> engagements for whole teams, private one-on-one <Link href={URLS.executiveCoaching}>executive coaching</Link>, a four-week cohort-based <Link href={URLS.bootcamp}>vibe coding bootcamp</Link>, and one- or two-day <Link href={URLS.teamWorkshops}>team workshops</Link>. Each format has its own page with the full structure.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Is the coaching remote or on-site?</h3>
              <p className="kc-faq-a">Both. Executive coaching and the bootcamp run remotely by default. Team workshops and Vibe Teaming engagements work best on-site, but remote versions exist for distributed teams. Time zones are workable.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Who is this coaching for?</h3>
              <p className="kc-faq-a">Leaders making AI decisions, developers who want to ship agentic software, and teams that need to build with AI as one unit. It is not a tool tutorial — tools change every quarter; thinking in agents is the durable skill.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How do I book?</h3>
              <p className="kc-faq-a">Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with one paragraph on who you are and what you want to get better at. You will get an honest read on which format fits — or whether coaching is the wrong instrument for the problem.</p>
            </div>
          </div>

          <DetailCta
            title="Not sure which format fits?"
            body="Send one paragraph on your team and your goal. I will point you to the right format — or tell you plainly if coaching is not what you need."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
