import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forward Deployed Engineering (FDE) Services",
  description:
    "Forward deployed engineering (FDE): Kenny Chien embeds with your engineers, ships agentic software against real data and systems, and leaves a team that ships.",
  alternates: { canonical: URLS.consultingFde },
  openGraph: {
    title: "Forward Deployed Engineering (FDE) Services — Kenny Chien",
    description:
      "Forward deployed engineering (FDE): Kenny Chien embeds with your engineers, ships agentic software against real data and systems, and leaves a team that ships.",
    url: URLS.consultingFde,
    type: "website",
  },
};

const service = {
  "@type": "Service",
  "@id": SITE_URL + URLS.consultingFde,
  name: "Forward Deployed Engineering",
  serviceType: "Embedded Engineering Consulting",
  url: SITE_URL + URLS.consultingFde,
  description:
    "Embedded, hands-on engagement in the Palantir-honed forward deployed engineering (FDE) model: pairing inside the client team, shipping agentic software against real data, and transferring capability so velocity holds after the embed ends.",
  provider: PERSON,
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is forward deployed engineering (FDE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forward deployed engineering is a delivery model, honed at Palantir, in which engineers embed inside the customer's team and ship working software as the means of consulting. The deliverable is a system in production and a team that can run it — not a recommendations deck.",
      },
    },
    {
      "@type": "Question",
      name: "How is an FDE embed different from staff augmentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A contractor adds hands; an FDE embed transfers capability. Every pull request is a teaching artifact and every review a transfer of taste, with explicit exit criteria: your team's velocity holds after I rotate out.",
      },
    },
    {
      "@type": "Question",
      name: "Is the embed remote or on-site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wherever your team works. The embed runs inside your repos, standups, and incident channel, which works fully remotely; on-site time is scoped per engagement when it genuinely helps. Either way, the first working change lands in production in week one.",
      },
    },
  ],
};

export default function ForwardDeployedEngineeringPage() {
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
          breadcrumbLd([["Home", "/"], ["Consulting", URLS.consulting], ["Forward Deployed Engineering", URLS.consultingFde]]),
          faq,
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["CONSULTING", URLS.consulting], ["FORWARD DEPLOYED ENGINEERING"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/02.3</span>
            <span className="kc-detail-meta">EMBEDDED · HANDS-ON · PALANTIR-HONED PRACTICE</span>
          </div>
          <h1 className="kc-detail-title">Forward Deployed Engineering</h1>
          <p className="kc-detail-sub">The consulting model is broken. The fix is engineers who deploy forward — into your team, your data, your production.</p>

          <div className="kc-detail-intro">
            <p>Forward Deployed Engineering is the practice Palantir built its delivery model on: instead of writing recommendations from the outside, engineers embed inside the customer, live with the real data and the real users, and ship working software as the means of consulting. The deliverable is not a deck — it is a system in production and a team that can run it.</p>
            <p>I run FDE engagements on that playbook, adapted for the agentic era: embedded in your sprint cadence, pairing with your engineers, turning every deployment into training. The measure of success is what your team ships after I leave.</p>
          </div>

          <div className="kc-pull"><p>“Slideware is a promise. A go-live is a fact.”</p></div>

          <div className="kc-detail-h"><i></i><h2>The FDE playbook</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin"><span className="kc-prin-n">01</span><div><h3 className="kc-prin-t">Deploy into the problem</h3><p className="kc-prin-d">Work happens where the data and users are — your repos, your meetings, your on-call. Understanding earned on the inside beats interviews from the outside.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">02</span><div><h3 className="kc-prin-t">Two hats: delivery and feedback</h3><p className="kc-prin-d">Palantir splits the role: engineers who bend the platform to today&apos;s customer problem, and engineers who feed what they learn back into the product. We run the same loop — every workaround becomes a roadmap item.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">03</span><div><h3 className="kc-prin-t">Ship against real data</h3><p className="kc-prin-d">No synthetic demos. The first week ends with software touching your actual systems behind your actual permissions — that is where every hard problem lives.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">04</span><div><h3 className="kc-prin-t">Ontology-first integration</h3><p className="kc-prin-d">Following Palantir&apos;s core lesson: integrate meaning, not just data. Model the business objects and actions once, and every later application inherits them.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">05</span><div><h3 className="kc-prin-t">Go-lives over slideware</h3><p className="kc-prin-d">Progress is measured in working deployments and trained operators — never in decks delivered.</p></div></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>How an embed runs</h2></div>
          <div className="kc-phases">
            <div className="kc-phase"><span className="kc-phase-w">WEEK 1</span><h3 className="kc-phase-t">Immerse</h3><p className="kc-phase-d">Inside your repos, standups, and incident channel. First working change in production by Friday — small, but real.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 2–6</span><h3 className="kc-phase-t">Ship &amp; pair</h3><p className="kc-phase-d">Agentic features delivered in your cadence, always pairing. Every PR is a teaching artifact; every review, a transfer of taste.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 7–8</span><h3 className="kc-phase-t">Hand over</h3><p className="kc-phase-d">I rotate out of the critical path. Your engineers lead; I review. Exit criteria: velocity holds after I am gone.</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Production features shipped inside your own codebase and stack</p></div>
            <div className="kc-out"><i>→</i><p>Engineers fluent in agentic patterns — by building, not by workshop</p></div>
            <div className="kc-out"><i>→</i><p>An integration layer and conventions the next team inherits</p></div>
            <div className="kc-out"><i>→</i><p>A delivery culture that measures go-lives, not decks</p></div>
          </div>

          <div className="kc-rel">
            <span className="kc-rel-label">RELATED</span>
            <Link href={URLS.ideaFde}>The FDE mindset</Link>
            <Link href={URLS.consultingLaunch}>AI Application Launch</Link>
            <Link href={URLS.consulting}>All consulting services</Link>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">What is forward deployed engineering (FDE)?</h3>
              <p className="kc-faq-a">Forward deployed engineering is a delivery model, honed at Palantir, in which engineers embed inside the customer&apos;s team and ship working software as the means of consulting. The deliverable is a system in production and a team that can run it — not a recommendations deck.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How is an FDE embed different from staff augmentation?</h3>
              <p className="kc-faq-a">A contractor adds hands; an FDE embed transfers capability. Every pull request is a teaching artifact and every review a transfer of taste, with explicit exit criteria: your team&apos;s velocity holds after I rotate out. I wrote more on this in <Link href={URLS.ideaFde}>The FDE mindset</Link>.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Is the embed remote or on-site?</h3>
              <p className="kc-faq-a">Wherever your team works. The embed runs inside your repos, standups, and incident channel, which works fully remotely; on-site time is scoped per engagement when it genuinely helps. Either way, the first working change lands in production in week one.</p>
            </div>
          </div>

          <DetailCta
            title="Need an FDE in the building?"
            body="Tell me about the team and the system. I will tell you in one call whether an embed will pay for itself."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
