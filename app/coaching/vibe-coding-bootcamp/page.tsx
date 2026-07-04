import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "A four-week vibe coding bootcamp taking developers from AI-curious to shipping agentic apps — live sessions, real codebases, and brutal code review.";

export const metadata: Metadata = {
  title: "Vibe Coding Bootcamp — Four-Week Cohort",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching/vibe-coding-bootcamp" },
  openGraph: {
    title: "Vibe Coding Bootcamp — Four-Week Cohort — Kenny Chien",
    description: DESCRIPTION,
    url: "/coaching/vibe-coding-bootcamp",
    type: "website",
  },
};

export default function VibeCodingBootcampPage() {
  return (
    <>
      <style>{`
    .kc-aside { font-family: var(--fs); font-style: italic; font-size: 19px; line-height: 1.55; margin: 40px 0 0; opacity: 0.85; max-width: 760px; }
    .kc-aside a { color: var(--verm); }
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 800; font-size: 19px; margin: 0; }
    .kc-faq-a { margin: 10px 0 0; font-size: 15px; line-height: 1.7; opacity: 0.82; max-width: 820px; text-wrap: pretty; }
    .kc-faq-a a { color: var(--verm); }
      `}</style>
      <JsonLd
        graph={[
          {
            "@type": "Course",
            name: "Vibe Coding Bootcamp",
            description:
              "A four-week, cohort-based vibe coding bootcamp that takes working developers from AI-curious to shipping agentic applications — live sessions, real codebases, and rigorous code review.",
            url: SITE_URL + URLS.bootcamp,
            inLanguage: "en",
            courseMode: "Online",
            timeRequired: "P4W",
            provider: PERSON,
          },
          breadcrumbLd([
            ["Kenny Chien", "/"],
            ["Coaching", "/coaching"],
            ["Vibe Coding Bootcamp", "/coaching/vibe-coding-bootcamp"],
          ]),
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need AI experience to join the bootcamp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. You need software experience. The bootcamp assumes you can ship code in a professional codebase; it does not assume you have used AI tools well — that is the point of the four weeks.",
                },
              },
              {
                "@type": "Question",
                name: "How much time does the bootcamp take per week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plan for roughly five to eight hours a week: two live sessions, an open office hour, and homework on real code. It is a bootcamp, not a webinar series.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a certificate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No certificate. You leave with shipped code, a line-by-line reviewed capstone, and a working vibe coding workflow — evidence that outperforms any PDF.",
                },
              },
              {
                "@type": "Question",
                name: "How do I join the bootcamp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cohorts are small and fill through a waitlist. Email kenny.chien@gmail.com with your role and a link to something you have built. Cohort dates and details go to the waitlist first.",
                },
              },
            ],
          },
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["COACHING", "/coaching"], ["VIBE CODING BOOTCAMP"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.2</span>
            <span className="kc-detail-meta">FOR DEVELOPERS · COHORT · FOUR WEEKS · LIVE · REMOTE</span>
          </div>
          <h1 className="kc-detail-title">Vibe Coding Bootcamp</h1>
          <p className="kc-detail-sub">Four weeks from AI-curious to shipping agentic apps — live sessions, real codebases, brutal code review.</p>

          <div className="kc-detail-intro">
            <p>The Vibe Coding Bootcamp is a four-week, cohort-based program that takes working developers from AI-curious to shipping agentic applications. It runs on live sessions and real codebases — including yours where possible — and treats vibe coding as what it is: a craft with standards, not a trick with prompts.</p>
            <p>Most AI-coding training teaches you to autocomplete faster. This bootcamp teaches you to engineer differently: to direct agents instead of typing for them, to review AI output with taste, and to ship features you would defend in production. Expect homework, expect pairing, and expect code review that does not spare your feelings.</p>
          </div>

          <div className="kc-pull"><p>&ldquo;Anyone can generate code now. The scarce skill is knowing what to keep.&rdquo;</p></div>

          <div className="kc-detail-h"><i></i><h2>Who this is for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Working developers who want AI in their production workflow, not just their side projects</p></div>
            <div className="kc-out"><i>→</i><p>Senior engineers who suspect their team&rsquo;s AI usage is mostly theater</p></div>
            <div className="kc-out"><i>→</i><p>Tech leads who will have to set the standards everyone else follows</p></div>
            <div className="kc-out"><i>→</i><p>Not for beginners — the bootcamp assumes you already ship software professionally</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>The four weeks</h2></div>
          <div className="kc-phases">
            <div className="kc-phase">
              <span className="kc-phase-w">WEEK 1</span>
              <h3 className="kc-phase-t">Foundations</h3>
              <p className="kc-phase-d">Prompting as engineering: context management, spec-first prompting, problem decomposition. You retool your daily workflow and ship your first AI-built feature to a real codebase by Friday.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">WEEK 2</span>
              <h3 className="kc-phase-t">Agentic patterns</h3>
              <p className="kc-phase-d">From autocomplete to agents: tool use, planning loops, recovery, multi-step tasks. You build an agent that survives contact with messy, real-world code.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">WEEK 3</span>
              <h3 className="kc-phase-t">Taste and review</h3>
              <p className="kc-phase-d">The week that separates this from every tutorial: reviewing AI output, failure taxonomies, evaluation cases, and knowing when to throw generated code away. Brutal code review of everything you have shipped so far.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">WEEK 4</span>
              <h3 className="kc-phase-t">Ship</h3>
              <p className="kc-phase-d">A capstone feature on a real codebase, end to end, defended in review. You leave with a working system and a workflow you keep.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>How it runs</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">Live sessions</h3>
                <p className="kc-prin-d">Two live sessions a week plus one open office hour. Sessions are working sessions — screens shared, code written, nothing pre-recorded.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Real codebases</h3>
                <p className="kc-prin-d">Exercises run on production-grade repositories, including your own where your employer allows it. No todo apps, no toy demos.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Code review is the curriculum</h3>
                <p className="kc-prin-d">Every line you ship gets reviewed — by me and by the cohort. The review is where the taste transfers; the lectures just set it up.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Small cohorts</h3>
                <p className="kc-prin-d">Cohorts stay small enough that I read everyone&rsquo;s code. When a cohort fills, the next one opens — the waitlist is the queue.</p>
              </div>
            </div>
          </div>

          <p className="kc-aside">The bootcamp teaches the same patterns documented in <Link href={URLS.playbook}>The Vibe Coding Playbook</Link> — the book is the reference, the bootcamp is the reps.</p>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>A production feature shipped with an agentic workflow, reviewed line by line</p></div>
            <div className="kc-out"><i>→</i><p>A personal vibe coding workflow — prompts, patterns, and guardrails you actually use</p></div>
            <div className="kc-out"><i>→</i><p>The judgment to tell generated slop from shippable code</p></div>
            <div className="kc-out"><i>→</i><p>A cohort of peers who build the same way you now do</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Common questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Do I need AI experience to join?</h3>
              <p className="kc-faq-a">No. You need software experience. The bootcamp assumes you can ship code in a professional codebase; it does not assume you have used AI tools well — that is the point of the four weeks.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How much time does it take per week?</h3>
              <p className="kc-faq-a">Plan for roughly five to eight hours a week: two live sessions, an open office hour, and homework on real code. It is a bootcamp, not a webinar series.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Is there a certificate?</h3>
              <p className="kc-faq-a">No certificate. You leave with shipped code, a line-by-line reviewed capstone, and a working workflow — evidence that outperforms any PDF. If your whole team needs this at once, a <Link href={URLS.teamWorkshops}>team workshop</Link> or a <Link href={URLS.vibeTeaming}>Vibe Teaming</Link> engagement is the better instrument.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How do I join?</h3>
              <p className="kc-faq-a">Cohorts are small and fill through a waitlist. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your role and a link to something you have built. Cohort dates and details go to the waitlist first.</p>
            </div>
          </div>

          <DetailCta
            title="Join the waitlist"
            body="Email me your role and a link to something you have shipped. The next cohort's dates and details go to the waitlist before anywhere else."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
