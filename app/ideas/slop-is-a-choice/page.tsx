import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Slop Is a Choice",
  description:
    "Slop is a choice: AI does not produce mediocrity, unexamined taste does. How taste, review culture, and evals keep AI-generated work at production quality.",
  alternates: { canonical: "/ideas/slop-is-a-choice" },
  openGraph: {
    title: "Slop Is a Choice — Kenny Chien",
    description:
      "Slop is a choice: AI does not produce mediocrity, unexamined taste does. How taste, review culture, and evals keep AI-generated work at production quality.",
    url: "/ideas/slop-is-a-choice",
    type: "article",
  },
};

const graph = [
  {
    "@type": "Article",
    headline: "Slop is a choice",
    description:
      "AI does not produce mediocrity. Unexamined taste does. The antidote to AI slop is judgment applied systematically: taste, review culture, and evals.",
    url: `${SITE_URL}${URLS.ideaSlop}`,
    datePublished: "2026-07-04",
    inLanguage: "en",
    author: PERSON,
    isPartOf: {
      "@type": "CollectionPage",
      name: "Ideas",
      url: `${SITE_URL}${URLS.ideas}`,
    },
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Ideas", URLS.ideas],
    ["Slop is a choice", URLS.ideaSlop],
  ]),
];

export default function SlopIsAChoicePage() {
  return (
    <>
      <style>{`
    .kc-prose { max-width: 820px; }
    .kc-prose p { font-family: var(--fs); font-size: 19px; line-height: 1.78; margin: 24px 0 0; text-wrap: pretty; }
    .kc-prose a { color: inherit; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--verm); }
    .kc-prose a:hover { color: var(--verm); }
    .kc-onepara { max-width: 860px; box-sizing: border-box; border: 1px solid var(--ink); background: var(--card); padding: 32px 36px; margin-top: 26px; }
    .kc-onepara p { font-family: var(--fs); font-size: 19.5px; line-height: 1.75; margin: 0; text-wrap: pretty; }
    .kc-part { font-family: var(--fm); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--verm); margin: 90px 0 0; }
    .kc-part + .kc-detail-h { margin-top: 20px; }
    .kc-next { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 26px; max-width: 1000px; }
    .kc-next-card { border: 1px solid var(--ink); background: var(--card); padding: 22px 24px; text-decoration: none; color: var(--ink); display: flex; flex-direction: column; gap: 9px; transition: transform .15s ease, box-shadow .15s ease; }
    .kc-next-card:hover { transform: translate(-4px, -4px); box-shadow: 8px 8px 0 var(--ink); }
    .kc-next-k { font-family: var(--fm); font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase; opacity: .65; }
    .kc-next-t { font-family: var(--fd); font-weight: 900; font-size: 19px; line-height: 1.2; margin: 0; }
    .kc-next-d { font-size: 14px; line-height: 1.55; opacity: .75; margin: 0; }
    @media (max-width: 680px) {
      .kc-next { grid-template-columns: minmax(0, 1fr); }
      .kc-onepara { padding: 24px 20px; }
    }
      `}</style>
      <JsonLd graph={graph} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb
            items={[["KENNY CHIEN", "/"], ["IDEAS", URLS.ideas], ["SLOP IS A CHOICE"]]}
          />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/05.4</span>
            <span className="kc-detail-meta">ESSAY · 04 JULY 2026 · 4 MIN READ · KENNY CHIEN</span>
          </div>
          <h1 className="kc-detail-title">Slop is a choice</h1>
          <p className="kc-detail-sub">AI does not produce mediocrity. Unexamined taste does.</p>

          <div className="kc-pull">
            <p>
              Generation is free now. Judgment is not. Slop is what happens when you confuse the
              two.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>In one paragraph</h2>
          </div>
          <div className="kc-onepara">
            <p>
              Slop is a choice means that AI-generated mediocrity is a property of the process
              around the model, not of the model itself. The same model yields slop on one team and
              production-grade work on another; the variable is whether anyone with taste examined
              the output before it shipped. Slop appears when generation is treated as completion —
              no review, no explicit quality bar, no evals. The antidote is judgment applied
              systematically: taste to know what good looks like, review culture to enforce it on
              every artifact, and evals to make that enforcement repeatable at machine speed.
            </p>
          </div>

          <p className="kc-part">The argument</p>
          <div className="kc-detail-h">
            <i></i>
            <h2>Where slop actually comes from</h2>
          </div>
          <div className="kc-prose">
            <p>
              A language model generates the median of everything it has seen. That is its nature
              and, correctly used, its virtue: a competent first draft of almost anything, in
              seconds. Median is the default. It was never the destiny. Blaming the model for slop
              is blaming the printing press for bad novels.
            </p>
            <p>
              Before AI, mediocre work had a natural rate limiter: it still took effort to produce,
              so there was less of it, and the effort forced at least a minimum of examination.
              Generation removed the limiter. Volume with judgment is leverage. Volume without
              judgment is slop — and the volume was chosen by whoever pressed generate and shipped
              the result unread.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Taste is the scarce input</h2>
          </div>
          <div className="kc-prose">
            <p>
              Taste is unglamorously concrete: knowing what good looks like in your domain, and
              being able to say why. It is not a gift. It is trained — by reading excellent code
              and excellent prose, by being reviewed hard, by rewriting until the difference
              between fine and right becomes visible.
            </p>
            <p>
              The economics have inverted around it. Generation is now nearly free; discrimination
              is not. The scarce skill is the eye that rejects nine drafts and can articulate why
              the tenth is right. A person with taste plus a model produces more good work than
              either alone. A person without taste plus a model produces confident slop at
              unprecedented speed. The model is an amplifier, and amplifiers do not care what they
              amplify.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Review and evals are the antidote</h2>
          </div>
          <div className="kc-prose">
            <p>
              Taste in one head does not protect an organization. It has to be institutionalized,
              and there are exactly two mechanisms that work.
            </p>
            <p>
              The first is review culture: human judgment applied to every artifact that ships,
              with AI-assisted work held to the same bar as human work. The moment a team maintains
              a separate, lower standard for generated output, it has chosen slop and outsourced
              the signature. The second is evals: taste written down as executable criteria —
              golden examples, failure taxonomies, acceptance thresholds — run against every
              generation and every model upgrade. Review scales judgment across people. Evals
              scale it across volume. Teams that build both ship AI-assisted work indistinguishable
              from their best human work, because it was judged by the same standard.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>What it means for your team</h2>
          </div>
          <div className="kc-out-grid">
            <div className="kc-out">
              <i>→</i>
              <p>
                Set one quality bar. If AI-assisted work gets a softer review, you have chosen slop
                as policy.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Make review non-optional and named: a human signs everything that ships, and the
                signature means they read it.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Write your taste down as evals — golden examples and failure taxonomies your
                pipeline runs automatically.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Train taste deliberately. Put good and mediocre outputs side by side and make the
                team articulate the difference.
              </p>
            </div>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>The steelman</h2>
          </div>
          <div className="kc-prose">
            <p>
              The strongest counterargument is arithmetic: if models let a team generate a hundred
              times more, humans cannot review it all, so slop wins by volume no matter what
              culture you build. Correct — if review means reading everything. It does not.
            </p>
            <p>
              Manufacturing solved this a century ago: quality is controlled with sampling, tight
              specifications, and instruments — not by inspecting every unit by hand. The
              equivalent here is reviewing at the shipping boundary rather than the generation
              boundary, sampling deeply, and pushing the rest of your judgment into evals that run
              at machine speed. And the arithmetic hides a choice: nothing obliges you to ship
              everything the model produces. Teams drowning in their own AI output chose the volume
              before they chose the quality bar. Choose in the other order.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Where to go next</h2>
          </div>
          <div className="kc-next">
            <Link className="kc-next-card" href={URLS.coaching}>
              <span className="kc-next-k">Coaching</span>
              <h3 className="kc-next-t">Coaching</h3>
              <p className="kc-next-d">
                Executive coaching, bootcamps, and workshops — taste is trained, not found.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.playbook}>
              <span className="kc-next-k">Digital book</span>
              <h3 className="kc-next-t">The Vibe Coding Playbook</h3>
              <p className="kc-next-d">
                A field manual of prompts, patterns, and anti-patterns for shipping real software
                with AI.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.bootcamp}>
              <span className="kc-next-k">Coaching</span>
              <h3 className="kc-next-t">Vibe Coding Bootcamp</h3>
              <p className="kc-next-d">
                Four weeks, real codebases, brutal code review — the review culture this essay
                argues for.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.ideaOrchestration}>
              <span className="kc-next-k">Related essay</span>
              <h3 className="kc-next-t">Prompting is not programming. Orchestration is.</h3>
              <p className="kc-next-d">
                Evals are half of that argument too — the unit of engineering is the loop.
              </p>
            </Link>
          </div>

          <DetailCta
            title="Worried your team is shipping slop?"
            body="Tell me how AI-assisted work gets reviewed on your team today. I will reply with the first hole to close."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
