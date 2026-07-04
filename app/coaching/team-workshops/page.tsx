import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { CONTACT_EMAIL, PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "One- and two-day team workshops that rewire how teams build with AI — run on your codebase, not toy demos, ending with a written standard your team keeps.";

export const metadata: Metadata = {
  title: "AI Team Workshops on Your Codebase",
  description: DESCRIPTION,
  alternates: { canonical: "/coaching/team-workshops" },
  openGraph: {
    title: "AI Team Workshops on Your Codebase — Kenny Chien",
    description: DESCRIPTION,
    url: "/coaching/team-workshops",
    type: "website",
  },
};

export default function TeamWorkshopsPage() {
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
            "@type": "Service",
            name: "Team Workshops",
            serviceType: "AI team workshops and training intensives",
            url: SITE_URL + URLS.teamWorkshops,
            inLanguage: "en",
            description:
              "One- and two-day intensives that rewire how an engineering or product team builds with AI — run on the team's own codebase and backlog, ending with a written team standard.",
            provider: PERSON,
          },
          breadcrumbLd([
            ["Kenny Chien", "/"],
            ["Coaching", "/coaching"],
            ["Team Workshops", "/coaching/team-workshops"],
          ]),
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who should be in the room for a team workshop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The whole team that ships together — engineers plus the product or design partner who shapes the work. Mixed roles is a feature, not a compromise: it is how Vibe Teaming works at full scale.",
                },
              },
              {
                "@type": "Question",
                name: "Should we book one day or two?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One day changes how the team works; the second day makes it stick with agentic patterns for your architecture and a written team standard. If budget forces a choice, one great day beats two thin ones.",
                },
              },
              {
                "@type": "Question",
                name: "Are workshops remote or on-site?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On-site by default — the format works best in one room. A remote version exists for distributed teams, run as shorter blocks across two or three days.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book a workshop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Email kenny.chien@gmail.com with a paragraph about the team, the codebase, and what you want to be different afterward. You will get a scoping call and an honest read on one day versus two.",
                },
              },
            ],
          },
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["COACHING", "/coaching"], ["TEAM WORKSHOPS"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.3</span>
            <span className="kc-detail-meta">FOR TEAMS · 1–2 DAYS · ON-SITE OR REMOTE · YOUR CODEBASE</span>
          </div>
          <h1 className="kc-detail-title">Team Workshops</h1>
          <p className="kc-detail-sub">One- and two-day intensives that rewire how a team builds with AI — on your codebase, not toy demos.</p>

          <div className="kc-detail-intro">
            <p>Team workshops are one- and two-day intensives that change how an engineering or product team builds with AI. They run on your codebase and your backlog — not toy demos — so the new way of working starts inside the work you already have. By the end of day one, the team has shipped real backlog items with the new method.</p>
            <p>A workshop is the fastest honest intervention I offer. It will not transform a team in a day — nothing does — but it will replace vague AI enthusiasm with a shared working method, and it names precisely what the team should practice next. Teams that want the longer arc pair a workshop with the <Link href={URLS.bootcamp}>bootcamp</Link> or a <Link href={URLS.vibeTeaming}>Vibe Teaming</Link> engagement.</p>
          </div>

          <div className="kc-pull"><p>&ldquo;A team that watched a demo learned nothing. A team that shipped together learned a method.&rdquo;</p></div>

          <div className="kc-detail-h"><i></i><h2>How a workshop runs</h2></div>
          <div className="kc-phases">
            <div className="kc-phase">
              <span className="kc-phase-w">BEFORE</span>
              <h3 className="kc-phase-t">Scoping call</h3>
              <p className="kc-phase-d">We pick the codebase, the backlog items, and the outcome that would make the day worth it. I prepare on your actual repository, not a slide deck.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">DAY 1</span>
              <h3 className="kc-phase-t">Build together</h3>
              <p className="kc-phase-d">Morning: the agentic working method — decomposition, prompting as specification, review discipline — taught by doing. Afternoon: the team ships real backlog items with the method, pairing in rotations.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">DAY 2 · OPTIONAL</span>
              <h3 className="kc-phase-t">Deepen and standardize</h3>
              <p className="kc-phase-d">Agentic patterns for your architecture, evaluation cases, and a written team standard: how we prompt, how we review, what we never merge. The second day turns a good experience into a durable convention.</p>
            </div>
            <div className="kc-phase">
              <span className="kc-phase-w">AFTER</span>
              <h3 className="kc-phase-t">Follow-through</h3>
              <p className="kc-phase-d">A written summary of what the team shipped, the standard we agreed on, and a concrete practice plan for the next thirty days.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Format</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">On-site by default</h3>
                <p className="kc-prin-d">Workshops work best in one room with a whiteboard and no competing meetings. I travel to you.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Remote when needed</h3>
                <p className="kc-prin-d">A remote format exists for distributed teams — shorter, high-intensity blocks across two or three days instead of one long one.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Team-sized</h3>
                <p className="kc-prin-d">Built for one team that ships together — roughly five to fifteen people. Larger groups split into cohorts rather than diluting the room.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Your codebase</h3>
                <p className="kc-prin-d">All exercises run on your repositories and your backlog. Nothing synthetic — the point is that Monday looks different.</p>
              </div>
            </div>
          </div>

          <p className="kc-aside">If what you need is weeks of embedded delivery rather than days of training, that is <Link href={URLS.consultingFde}>forward deployed engineering</Link>.</p>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Real backlog items shipped during the workshop with the new method</p></div>
            <div className="kc-out"><i>→</i><p>A written team standard for building with AI — prompting, review, merge criteria</p></div>
            <div className="kc-out"><i>→</i><p>A shared vocabulary that ends the tools-versus-craft argument</p></div>
            <div className="kc-out"><i>→</i><p>A concrete practice plan for the next thirty days</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Common questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Who should be in the room?</h3>
              <p className="kc-faq-a">The whole team that ships together — engineers plus the product or design partner who shapes the work. Mixed roles is a feature, not a compromise: it is how <Link href={URLS.vibeTeaming}>Vibe Teaming</Link> works at full scale.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">One day or two?</h3>
              <p className="kc-faq-a">One day changes how the team works. The second day makes it stick — agentic patterns for your architecture and a written team standard. If budget forces a choice, one great day beats two thin ones.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Remote or on-site?</h3>
              <p className="kc-faq-a">On-site by default — the format works best in one room. The remote version runs as shorter blocks across two or three days and works well for distributed teams.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How do I book a workshop?</h3>
              <p className="kc-faq-a">Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with a paragraph about the team, the codebase, and what you want to be different afterward. You will get a scoping call and an honest read on one day versus two.</p>
            </div>
          </div>

          <DetailCta
            title="Book a workshop"
            body="Tell me about the team and the codebase. I will send a scoping call slot and an honest read on one day versus two."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
