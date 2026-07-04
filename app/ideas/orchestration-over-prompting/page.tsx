import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Orchestration Over Prompting",
  description:
    "Prompting is not programming — orchestration is. The unit of software engineering is shifting from the function to the agent loop, and what it means for teams.",
  alternates: { canonical: "/ideas/orchestration-over-prompting" },
  openGraph: {
    title: "Orchestration Over Prompting — Kenny Chien",
    description:
      "Prompting is not programming — orchestration is. The unit of software engineering is shifting from the function to the agent loop, and what it means for teams.",
    url: "/ideas/orchestration-over-prompting",
    type: "article",
  },
};

const graph = [
  {
    "@type": "Article",
    headline: "Prompting is not programming. Orchestration is.",
    description:
      "The unit of software engineering is shifting from the function to the agent loop: planning, tool calls, checks, recovery, and evals — not clever prompt wording.",
    url: `${SITE_URL}${URLS.ideaOrchestration}`,
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
    ["Prompting is not programming. Orchestration is.", URLS.ideaOrchestration],
  ]),
];

export default function OrchestrationOverPromptingPage() {
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
            items={[["KENNY CHIEN", "/"], ["IDEAS", URLS.ideas], ["ORCHESTRATION OVER PROMPTING"]]}
          />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/05.2</span>
            <span className="kc-detail-meta">ESSAY · 04 JULY 2026 · 4 MIN READ · KENNY CHIEN</span>
          </div>
          <h1 className="kc-detail-title">Prompting is not programming. Orchestration is.</h1>
          <p className="kc-detail-sub">
            The unit of engineering is shifting from the function to the agent loop.
          </p>

          <div className="kc-pull">
            <p>A prompt is a request. A loop is a system. Engineers are paid to build systems.</p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>In one paragraph</h2>
          </div>
          <div className="kc-onepara">
            <p>
              Orchestration over prompting means the engineering value in AI systems lives not in
              the prompt but in the loop around it: how an agent plans, calls tools, checks its own
              work, recovers from failure, and reports what it did. Prompting is an input skill,
              like writing a clear ticket. Orchestration is a systems skill. The unit of software
              engineering is shifting from the function — deterministic, composable, testable in
              isolation — to the agent loop — probabilistic, tool-using, evaluated statistically.
              Teams that treat the prompt as the product plateau at impressive demos. Teams that
              engineer the loop ship applications.
            </p>
          </div>

          <p className="kc-part">The argument</p>
          <div className="kc-detail-h">
            <i></i>
            <h2>The prompt plateau</h2>
          </div>
          <div className="kc-prose">
            <p>
              Every team's first month with AI is prompt worship. A better prompt produces a
              visibly better demo, so tuning prompts feels like engineering progress. It is not. A
              prompt has no error handling, no state, no memory of past failures, no way to
              escalate. You are tuning a single call to a stochastic function and mistaking the
              tuning for architecture.
            </p>
            <p>
              The ceiling arrives fast. Past a modest threshold, clever wording buys marginal
              gains, and the next model release moves the ceiling anyway. I have watched teams
              polish prompts for months that a plain verify-and-retry loop beat in a week.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>The new unit: the agent loop</h2>
          </div>
          <div className="kc-prose">
            <p>
              For fifty years the unit of engineering was the function: deterministic input to
              deterministic output, composable, unit-testable. The agent loop keeps the rigor and
              changes the shape. A loop plans, acts through tools, observes results, decides
              whether to retry, escalate, or proceed, and persists state across steps — sometimes
              across days.
            </p>
            <p>
              Every consequential design decision now lives in the loop, not the prompt. Which
              tools does the agent get, and under which permissions? Where are the human
              checkpoints? What is the retry policy, and what triggers escalation? What state
              survives a restart? What gets logged so the trajectory can be read later? These are
              architecture questions. They have wrong answers, and the wrong answers reach
              production.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Old disciplines, new object</h2>
          </div>
          <div className="kc-prose">
            <p>
              The disciplines that made software reliable do not disappear. They re-aim. Testing
              becomes evals: golden tasks, failure taxonomies, statistical acceptance thresholds
              instead of assertions. Error handling becomes recovery policy: not catching
              exceptions, but deciding what an agent does with a wrong answer it believes. Code
              review becomes trajectory review: reading the transcript of what the agent did and
              why. Observability becomes the craft of making agent decisions legible after the
              fact.
            </p>
            <p>
              This is good news for engineers. The profession transfers almost one to one; only the
              object changed. The people at risk are not programmers. They are prompt collectors.
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
                Hire and train for systems thinking. Prompt tricks depreciate with every model
                release; loop design does not.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Make evals first-class artifacts — written before the application, rerun on every
                model upgrade.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Put loop design in design review: tools, permissions, checkpoints, and escalation
                belong on the whiteboard, not in the prompt file.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Treat prompts as configuration: versioned, cheap to change, and expected to churn.
              </p>
            </div>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>The steelman</h2>
          </div>
          <div className="kc-prose">
            <p>
              The strongest counterargument: models absorb the loop. Each generation plans better,
              self-corrects better, and needs less scaffolding — so orchestration is just prompt
              engineering with extra steps, obsolete on the same schedule. Half of this is true.
              Models do absorb the generic loop: decomposition, retry, self-critique. Build
              elaborate scaffolding for those and you are writing code with an expiration date.
            </p>
            <p>
              What models cannot absorb is your loop: your tools, your permission boundaries, your
              human checkpoints, your definition of done. That context lives outside every
              foundation model by construction. The loop gets thinner every year; it does not
              disappear. And the team that owns the loop owns the evals — which is where an
              enterprise's trust in the system actually lives.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Where to go next</h2>
          </div>
          <div className="kc-next">
            <Link className="kc-next-card" href={URLS.bootcamp}>
              <span className="kc-next-k">Coaching</span>
              <h3 className="kc-next-t">Vibe Coding Bootcamp</h3>
              <p className="kc-next-d">
                Four weeks from AI-curious to shipping agentic apps — live sessions, real
                codebases, brutal code review.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.launchChecklist}>
              <span className="kc-next-k">Free</span>
              <h3 className="kc-next-t">Agent Launch Checklist</h3>
              <p className="kc-next-d">
                The pre-flight list I run before any agentic app touches production.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.consultingLaunch}>
              <span className="kc-next-k">Consulting</span>
              <h3 className="kc-next-t">AI Application Launch</h3>
              <p className="kc-next-d">
                One use case from whiteboard to production, with your team trained along the way.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.ideaSlop}>
              <span className="kc-next-k">Next essay</span>
              <h3 className="kc-next-t">Slop is a choice</h3>
              <p className="kc-next-d">AI does not produce mediocrity. Unexamined taste does.</p>
            </Link>
          </div>

          <DetailCta
            title="Building your first loop?"
            body="Tell me what the agent is supposed to do and where it keeps going wrong. I will reply with an honest read on whether it is a prompt problem or a loop problem."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
