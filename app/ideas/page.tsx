import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ideas — Working Theses on Enterprise AI",
  description:
    "Working theses on enterprise AI from Kenny Chien: agentic ontology, orchestration over prompting, the FDE mindset, and why slop is a choice — argued in public.",
  alternates: { canonical: "/ideas" },
  openGraph: {
    title: "Ideas — Working Theses on Enterprise AI — Kenny Chien",
    description:
      "Working theses on enterprise AI from Kenny Chien: agentic ontology, orchestration over prompting, the FDE mindset, and why slop is a choice — argued in public.",
    url: "/ideas",
    type: "website",
  },
};

const graph = [
  {
    "@type": "CollectionPage",
    name: "Ideas — Working Theses on Enterprise AI",
    url: `${SITE_URL}${URLS.ideas}`,
    inLanguage: "en",
    description:
      "Working theses on enterprise AI: agentic ontology, orchestration over prompting, forward deployed engineering, and quality in the age of generation.",
    author: PERSON,
  },
  {
    "@type": "ItemList",
    name: "Essays",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ontology is the new schema",
        url: `${SITE_URL}${URLS.ideaSchema}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prompting is not programming. Orchestration is.",
        url: `${SITE_URL}${URLS.ideaOrchestration}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The FDE mindset",
        url: `${SITE_URL}${URLS.ideaFde}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Slop is a choice",
        url: `${SITE_URL}${URLS.ideaSlop}`,
      },
    ],
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Ideas", URLS.ideas],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: 'What does "ontology is the new schema" mean?',
        acceptedAnswer: {
          "@type": "Answer",
          text: "It means the durable asset in enterprise AI is a machine-readable model of your business — entities, relationships, actions, permissions — rather than the database schema. A schema describes how data is stored; an ontology describes what it means and what an agent may do with it. Agents need the latter to act safely.",
        },
      },
      {
        "@type": "Question",
        name: "Is prompting a real engineering skill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prompting is a useful input skill, like writing a clear ticket, but it is not where the engineering lives. The engineering lives in orchestration: the loop of planning, tool calls, checks, recovery, and evals around the model. That is the argument of the essay on orchestration over prompting.",
        },
      },
      {
        "@type": "Question",
        name: "What is forward deployed engineering (FDE)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forward deployed engineering is the practice of consulting by shipping software from inside the client's team, against real data and real users. Palantir built its delivery model on it. The deliverable is a production system and a team that can run it, not a deck.",
        },
      },
      {
        "@type": "Question",
        name: "Does using AI mean accepting lower-quality work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The same model produces slop on one team and production-grade work on another; the difference is taste, review culture, and evals. Mediocrity is a process failure, not a model property — which is why slop is a choice.",
        },
      },
      {
        "@type": "Question",
        name: "How often are these essays revised?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are working theses, so they change when a deployment teaches me something or a reader lands a better counterargument. All four were last revised in July 2026. Each essay ends with the strongest objection I know and my answer to it.",
        },
      },
    ],
  },
];

export default function IdeasPage() {
  return (
    <>
      <style>{`
    a.kc-idea-row { color: inherit; text-decoration: none; }
    .kc-ideas-list { margin-top: 20px; border-top: 2px solid var(--ink); }
    .kc-faq-list { margin-top: 22px; max-width: 940px; }
    .kc-faq { border-top: 1px solid var(--hair); padding: 24px 4px; }
    .kc-faq h3 { font-family: var(--fd); font-weight: 800; font-size: 19px; margin: 0; line-height: 1.3; }
    .kc-faq p { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: .85; max-width: 76ch; text-wrap: pretty; }
    .kc-faq p a { color: inherit; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--verm); }
    .kc-faq p a:hover { color: var(--verm); }
      `}</style>
      <JsonLd graph={graph} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["IDEAS"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/05</span>
            <span className="kc-detail-meta">ESSAYS · WORKING THESES · REVISED JULY 2026</span>
          </div>
          <h1 className="kc-detail-title">Ideas worth arguing with</h1>
          <p className="kc-detail-sub">
            Working theses from real enterprise deployments — argued in public, revised when they
            lose.
          </p>

          <div className="kc-detail-intro">
            <p>
              What are these ideas? They are the four working theses behind my consulting and
              coaching practice — on agentic ontology, on orchestration as the new unit of
              engineering, on forward deployed engineering (FDE), and on quality in the age of
              generation. Each one was formed inside real enterprise deployments, not composed for
              publication.
            </p>
            <p>
              I hold them firmly and loosely at once. Firmly, because I bet engagements on them.
              Loosely, because a thesis that cannot survive a strong counterargument is not worth
              betting on. Every essay ends with the best objection I know and my answer to it. If
              you have a better objection, send it.
            </p>
          </div>

          <div className="kc-pull">
            <p>A thesis you cannot defend in public is not a thesis. It is a hope.</p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>The essays</h2>
          </div>
          <div className="kc-ideas-list">
            <Link className="kc-idea-row" href={URLS.ideaSchema}>
              <span className="kc-idea-n">01</span>
              <h3 className="kc-idea-t">Ontology is the new schema</h3>
              <p className="kc-idea-d">
                Databases described your data. Ontologies describe your business. Agents need the
                latter.
              </p>
            </Link>
            <Link className="kc-idea-row" href={URLS.ideaOrchestration}>
              <span className="kc-idea-n">02</span>
              <h3 className="kc-idea-t">Prompting is not programming. Orchestration is.</h3>
              <p className="kc-idea-d">
                The unit of engineering is shifting from the function to the agent loop.
              </p>
            </Link>
            <Link className="kc-idea-row" href={URLS.ideaFde}>
              <span className="kc-idea-n">03</span>
              <h3 className="kc-idea-t">The FDE mindset</h3>
              <p className="kc-idea-d">
                Why the best consultants now ship code from inside the building.
              </p>
            </Link>
            <Link className="kc-idea-row" href={URLS.ideaSlop}>
              <span className="kc-idea-n">04</span>
              <h3 className="kc-idea-t">Slop is a choice</h3>
              <p className="kc-idea-d">AI does not produce mediocrity. Unexamined taste does.</p>
            </Link>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Questions about these essays</h2>
          </div>
          <div className="kc-faq-list">
            <div className="kc-faq">
              <h3>What does &ldquo;ontology is the new schema&rdquo; mean?</h3>
              <p>
                It means the durable asset in enterprise AI is a machine-readable model of your
                business — entities, relationships, actions, permissions — rather than the database
                schema. A schema describes how data is stored; an ontology describes what it means
                and what an agent may do with it. Agents need the latter to act safely.{" "}
                <Link href={URLS.ideaSchema}>Read the full argument</Link>.
              </p>
            </div>
            <div className="kc-faq">
              <h3>Is prompting a real engineering skill?</h3>
              <p>
                Prompting is a useful input skill, like writing a clear ticket, but it is not where
                the engineering lives. The engineering lives in orchestration: the loop of planning,
                tool calls, checks, recovery, and evals around the model. That is the argument of{" "}
                <Link href={URLS.ideaOrchestration}>the essay on orchestration over prompting</Link>
                .
              </p>
            </div>
            <div className="kc-faq">
              <h3>What is forward deployed engineering (FDE)?</h3>
              <p>
                Forward deployed engineering is the practice of consulting by shipping software from
                inside the client's team, against real data and real users. Palantir built its
                delivery model on it. The deliverable is a production system and a team that can run
                it, not a deck. <Link href={URLS.ideaFde}>The FDE mindset</Link> makes the case;{" "}
                <Link href={URLS.consultingFde}>the FDE engagement page</Link> shows how I run it.
              </p>
            </div>
            <div className="kc-faq">
              <h3>Does using AI mean accepting lower-quality work?</h3>
              <p>
                No. The same model produces slop on one team and production-grade work on another;
                the difference is taste, review culture, and evals. Mediocrity is a process failure,
                not a model property — which is why <Link href={URLS.ideaSlop}>slop is a choice</Link>
                .
              </p>
            </div>
            <div className="kc-faq">
              <h3>How often are these essays revised?</h3>
              <p>
                They are working theses, so they change when a deployment teaches me something or a
                reader lands a better counterargument. All four were last revised in July 2026. Each
                essay ends with the strongest objection I know and my answer to it.
              </p>
            </div>
          </div>

          <DetailCta
            title="Want to argue with one of these?"
            body="Send me the strongest counterargument you have. The essays improve when they lose, and I credit good objections."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
