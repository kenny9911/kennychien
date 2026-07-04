import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "Private 1:1 executive coaching for leaders making AI bets — strategy, vendor truth-telling, build versus buy, and board-ready judgment for the agentic era.";

export const metadata: Metadata = {
  title: "Executive Coaching for AI Strategy",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching/executive-coaching" },
  openGraph: {
    title: "Executive Coaching for AI Strategy — Kenny Chien",
    description: DESCRIPTION,
    url: "/coaching/executive-coaching",
    type: "website",
  },
};

export default function ExecutiveCoachingPage() {
  return (
    <>
      <style>{`
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 800; font-size: 19px; margin: 0; }
    .kc-faq-a { margin: 10px 0 0; font-size: 15px; line-height: 1.7; opacity: 0.82; max-width: 820px; text-wrap: pretty; }
    .kc-faq-a a { color: var(--verm); }
      `}</style>
      <JsonLd
        graph={[
          {
            "@type": "Service",
            name: "Executive Coaching",
            serviceType: "Executive coaching for AI strategy",
            url: SITE_URL + URLS.executiveCoaching,
            inLanguage: "en",
            description:
              "Private one-on-one executive coaching for leaders making AI bets: strategy, vendor truth-telling, what to build versus buy, and board-ready judgment for the agentic era.",
            provider: PERSON,
          },
          breadcrumbLd([
            ["Kenny Chien", "/"],
            ["Coaching", "/coaching"],
            ["Executive Coaching", "/coaching/executive-coaching"],
          ]),
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is executive coaching for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Leaders with an AI mandate and real decisions on their desk: CEOs, CTOs, CAIOs, and business-unit owners. It is judgment work, not a technical tutorial — developers who want hands-on skills belong in the Vibe Coding Bootcamp instead.",
                },
              },
              {
                "@type": "Question",
                name: "How is coaching different from consulting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Consulting ships a system; coaching sharpens the leader. If you need an application launched or an architecture designed, that is a consulting engagement. Coaching is for the judgment no engagement can outsource.",
                },
              },
              {
                "@type": "Question",
                name: "Is executive coaching confidential?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Sessions cover live strategy, vendors, and personnel, and nothing is shared, referenced, or reused elsewhere. An NDA is standard practice, not an objection.",
                },
              },
              {
                "@type": "Question",
                name: "How do I request a slot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Email kenny.chien@gmail.com with one paragraph: your role, the decision in front of you, and the timeline. Kenny takes a small number of executive clients at a time and will say plainly if there is no open slot.",
                },
              },
            ],
          },
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["COACHING", "/coaching"], ["EXECUTIVE COACHING"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.1</span>
            <span className="kc-detail-meta">FOR LEADERS · 1:1 · REMOTE OR IN PERSON · CONFIDENTIAL</span>
          </div>
          <h1 className="kc-detail-title">Executive Coaching</h1>
          <p className="kc-detail-sub">Private sessions for leaders making AI bets — strategy, vendor truth-telling, and what to build versus buy.</p>

          <div className="kc-detail-intro">
            <p>Executive coaching is a private, one-on-one engagement for leaders who have to make AI decisions they cannot delegate. We work on the calls you actually face: which bets to make, which vendors to believe, what to build versus buy, and how to talk about AI to a board without hype or fear.</p>
            <p>This is not a briefing service, and I will not read you the news. Sessions are working sessions: we take a live decision from your desk — a budget line, a vendor contract, a reorg, a build-versus-buy call — and pressure-test it until it holds or breaks. Between sessions you get direct access for the questions that cannot wait for the calendar.</p>
          </div>

          <div className="kc-pull"><p>&ldquo;Your vendors are not lying to you. They are paid to be optimistic. You need one advisor who is not.&rdquo;</p></div>

          <div className="kc-detail-h"><i></i><h2>Who this is for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>CEOs, CTOs, CAIOs, and business-unit leaders who own an AI mandate</p></div>
            <div className="kc-out"><i>→</i><p>Executives facing a build-versus-buy decision with real money attached</p></div>
            <div className="kc-out"><i>→</i><p>Leaders who need to evaluate vendor claims without a technical translator</p></div>
            <div className="kc-out"><i>→</i><p>Founders and operators repositioning their company for the agentic era</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Format and structure</h2></div>
          <div className="kc-phases">
            <div className="kc-phase">
              <span className="kc-phase-w">CADENCE</span>
              <h3 className="kc-phase-t">Recurring 1:1 sessions</h3>
              <p className="kc-phase-d">Sixty to ninety minutes, typically every one or two weeks, remote by default. In person when the decision warrants a room.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">BETWEEN SESSIONS</span>
              <h3 className="kc-phase-t">Direct access</h3>
              <p className="kc-phase-d">Async access for the time-sensitive questions — a vendor claim to sanity-check, a slide to challenge, a contract clause that smells off.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">MATERIAL</span>
              <h3 className="kc-phase-t">Your real decisions</h3>
              <p className="kc-phase-d">We work on live artifacts: strategy memos, vendor proposals, architecture diagrams, hiring plans. No hypotheticals, no case studies.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>A clear, defensible AI thesis you can state in one paragraph</p></div>
            <div className="kc-out"><i>→</i><p>A build-versus-buy framework calibrated to your organization, not the industry average</p></div>
            <div className="kc-out"><i>→</i><p>Sharper instincts for separating vendor claims from vendor evidence</p></div>
            <div className="kc-out"><i>→</i><p>Board- and team-ready language for what you are doing and why</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Common questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Who is executive coaching for?</h3>
              <p className="kc-faq-a">Leaders with an AI mandate and real decisions on their desk: CEOs, CTOs, CAIOs, and business-unit owners. It is judgment work, not a technical tutorial — developers who want hands-on skills belong in the <Link href={URLS.bootcamp}>Vibe Coding Bootcamp</Link> instead.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How is coaching different from consulting?</h3>
              <p className="kc-faq-a">Consulting ships a system; coaching sharpens the leader. If you need an application launched or an architecture designed, that is a <Link href={URLS.consulting}>consulting engagement</Link>. Coaching is for the judgment no engagement can outsource.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Is executive coaching confidential?</h3>
              <p className="kc-faq-a">Yes. Sessions cover live strategy, vendors, and personnel, and nothing is shared, referenced, or reused elsewhere. An NDA is standard practice, not an objection.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How do I request a slot?</h3>
              <p className="kc-faq-a">Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with one paragraph: your role, the decision in front of you, and the timeline. I take a small number of executive clients at a time and will say plainly if there is no open slot. If your whole team needs the shift, start with a <Link href={URLS.teamWorkshops}>team workshop</Link> instead.</p>
            </div>
          </div>

          <DetailCta
            title="Request a slot"
            body="Send one paragraph on your role and the decision in front of you. I will reply with an honest read — including whether you need a coach at all."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
