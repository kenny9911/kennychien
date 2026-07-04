import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ontology Is the New Schema",
  description:
    "Ontology is the new schema: databases describe data, ontologies describe your business. Why AI agents need a machine-readable model of meaning to act safely.",
  alternates: { canonical: "/ideas/ontology-is-the-new-schema" },
  openGraph: {
    title: "Ontology Is the New Schema — Kenny Chien",
    description:
      "Ontology is the new schema: databases describe data, ontologies describe your business. Why AI agents need a machine-readable model of meaning to act safely.",
    url: "/ideas/ontology-is-the-new-schema",
    type: "article",
  },
};

const graph = [
  {
    "@type": "Article",
    headline: "Ontology is the new schema",
    description:
      "Databases described your data. Ontologies describe your business. AI agents need a machine-readable model of meaning — entities, actions, permissions — to act safely.",
    url: `${SITE_URL}${URLS.ideaSchema}`,
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
    ["Ontology is the new schema", URLS.ideaSchema],
  ]),
];

export default function OntologyIsTheNewSchemaPage() {
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
            items={[["KENNY CHIEN", "/"], ["IDEAS", URLS.ideas], ["ONTOLOGY IS THE NEW SCHEMA"]]}
          />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/05.1</span>
            <span className="kc-detail-meta">ESSAY · 04 JULY 2026 · 4 MIN READ · KENNY CHIEN</span>
          </div>
          <h1 className="kc-detail-title">Ontology is the new schema</h1>
          <p className="kc-detail-sub">
            Databases described your data. Ontologies describe your business. Agents need the
            latter.
          </p>

          <div className="kc-pull">
            <p>
              Agents do not fail for lack of intelligence. They fail because nobody told them what
              the business is.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>In one paragraph</h2>
          </div>
          <div className="kc-onepara">
            <p>
              Ontology is the new schema means the durable asset in enterprise AI is no longer the
              database schema but a machine-readable model of the business itself: its entities,
              relationships, actions, and permissions. A schema tells software how data is stored.
              An ontology tells an AI agent what the data means, which operations exist, and what
              it is allowed to do. Enterprises that formalize this layer can swap models freely and
              let agents act safely. Enterprises that skip it get agents that guess at meaning,
              improvise against raw tables, and eventually act on a business they do not
              understand.
            </p>
          </div>

          <p className="kc-part">The argument</p>
          <div className="kc-detail-h">
            <i></i>
            <h2>Databases describe data</h2>
          </div>
          <div className="kc-prose">
            <p>
              The relational schema was the great contract of the software era. It answers
              structural questions with total precision: which tables exist, which columns they
              hold, which keys join them. It answers nothing else. A field reading{" "}
              <em>status = 3</em> is valid in every database on earth and meaningful in none of
              them.
            </p>
            <p>
              For thirty years that was acceptable, because humans supplied the meaning. The
              analyst knew that status 3 meant held for fraud review. The operations lead knew a
              shipment could not be cancelled after the carrier scan. The meaning of the business
              lived in people's heads, onboarding decks, and wiki pages nobody maintains. Software
              did not need to understand the business, because software never acted alone. A person
              was always in the loop, carrying the semantics.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Businesses run on meaning</h2>
          </div>
          <div className="kc-prose">
            <p>
              A business is not its tables. It is entities — customers, orders, shipments, claims —
              bound by relationships and moved through state machines by actions. Cancel the order
              is not a row update. It is an operation with preconditions, side effects, a refund
              policy, and an owner. None of that appears in the schema.
            </p>
            <p>
              This is why new hires take months to become useful even when they can read SQL on day
              one. What they are learning is the ontology: what things mean, how they connect, and
              what they are allowed to do. Every enterprise already has an ontology. Almost none
              have written it down.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>What an agent needs to act safely</h2>
          </div>
          <div className="kc-prose">
            <p>
              An agent wired to raw database access has intelligence and no world model. To act
              safely it needs three things a schema never supplies. First, semantics: what the
              entities are and how they relate, so cancel the order refers to a real operation and
              not a token pattern. Second, a typed action interface: a catalogue of operations it
              may invoke, each with preconditions, effects, cost, and reversibility, so capability
              is granted rather than improvised. Third, permissions with provenance: whom the agent
              may act as, on what, within which limits — with a decision trail for the day audit
              asks why.
            </p>
            <p>
              This is the core lesson Palantir spent two decades proving in the field: integrate
              meaning, not just data. Model the business objects and actions once, and every later
              application — human-facing or agentic — inherits them. Agents do not raise the bar
              for data integration. They raise the bar for meaning integration.
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
                Start with one workflow, not the whole enterprise. Mine the ontology from operators
                and live systems, not org charts.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Write the action catalogue before you wire an agent to tools. If an operation is
                not in the catalogue, the agent does not get it.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Treat the ontology as versioned, reviewed code. It changes when the business
                changes, and it outlives every model you buy.
              </p>
            </div>
            <div className="kc-out">
              <i>→</i>
              <p>
                Keep it model-agnostic. The ontology binds to your systems, not to a vendor — swap
                models the way you swap drivers.
              </p>
            </div>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>The steelman</h2>
          </div>
          <div className="kc-prose">
            <p>
              The strongest counterargument: we tried this. Enterprise ontologies, master data
              management, the semantic web — the 2000s are littered with meaning projects that
              collapsed under their own ceremony. Fair, and mostly true.
            </p>
            <p>
              But those projects failed for a specific reason: they built meaning nobody consumed.
              No software existed that could read an ontology and do useful work with it, so the
              artifact rotted the day the consultants left. That constraint is gone. Agents are the
              consuming software, and they consume ontology hungrily — every entity you define is a
              capability they gain. The second failure mode, totality, still applies: an ontology
              of everything ships nothing. The fix is scope. One workflow, one thin slice, consumed
              by a working agent within weeks — then widen.
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Where to go next</h2>
          </div>
          <div className="kc-next">
            <Link className="kc-next-card" href={URLS.consultingOntology}>
              <span className="kc-next-k">Consulting</span>
              <h3 className="kc-next-t">Agentic Architecture &amp; Ontology</h3>
              <p className="kc-next-d">
                The engagement where I design this layer with your architects: semantic core,
                action interface, permissions.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.ontologyCanvas}>
              <span className="kc-next-k">Toolkit</span>
              <h3 className="kc-next-t">Ontology Canvas</h3>
              <p className="kc-next-d">
                A structured worksheet system for mapping your enterprise into an agent-readable
                ontology.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.ontologyGenerator}>
              <span className="kc-next-k">Tool</span>
              <h3 className="kc-next-t">Ontology Generator</h3>
              <p className="kc-next-d">
                Point it at your systems and docs — it drafts the ontology for your engineers to
                refine.
              </p>
            </Link>
            <Link className="kc-next-card" href={URLS.ideaOrchestration}>
              <span className="kc-next-k">Next essay</span>
              <h3 className="kc-next-t">Prompting is not programming. Orchestration is.</h3>
              <p className="kc-next-d">
                The unit of engineering is shifting from the function to the agent loop.
              </p>
            </Link>
          </div>

          <DetailCta
            title="Architecting this now?"
            body="Send me where the ontology would sit in your current architecture diagram. I will tell you what breaks first without it."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
