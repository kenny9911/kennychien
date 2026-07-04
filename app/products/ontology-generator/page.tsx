import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "The Ontology Generator points at your systems and docs and drafts an agent-readable ontology — entities, actions, and permissions — for engineers to refine.";

export const metadata: Metadata = {
  title: "Ontology Generator: Draft Your Agent Ontology",
  description: DESCRIPTION,
  alternates: { canonical: "/products/ontology-generator" },
  openGraph: {
    title: "Ontology Generator: Draft Your Agent Ontology — Kenny Chien",
    description: DESCRIPTION,
    url: "/products/ontology-generator",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "SoftwareApplication",
    name: "Ontology Generator",
    url: SITE_URL + URLS.ontologyGenerator,
    description:
      "A tool that points at your systems and documents and drafts an agent-readable ontology of entities, actions, and permissions for your engineers to refine.",
    applicationCategory: "DeveloperApplication",
    creator: PERSON,
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
    ["Ontology Generator", "/products/ontology-generator"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does the Ontology Generator replace the Ontology Canvas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — they are complements. The generator drafts an ontology from your systems and documents; the Ontology Canvas structures the human work of interrogating and refining that draft. The fastest teams generate first, then run the canvas against the output.",
        },
      },
      {
        "@type": "Question",
        name: "What inputs does the Ontology Generator need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whatever already describes your business in machine-readable or written form: database schemas, API specifications, internal documentation, runbooks, and process descriptions. The more of the real operational picture it sees, the fewer gaps your engineers have to fill by hand.",
        },
      },
      {
        "@type": "Question",
        name: "Is the generated ontology production-ready?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, and it is not meant to be. The output is a draft: a structured starting point that saves your engineers weeks of blank-page work. Actions, preconditions, and especially permissions must be reviewed by the people accountable for them before any agent acts through the ontology.",
        },
      },
    ],
  },
];

export default function OntologyGeneratorPage() {
  return (
    <>
      <style>{`
    .kc-hero-shape { width: 62px; height: 62px; flex: none; margin-left: auto; align-self: center; }
    .kc-status { margin-top: 26px; border: 1px solid var(--ink); background: var(--card); padding: 28px 30px; display: flex; gap: 20px; align-items: baseline; flex-wrap: wrap; }
    .kc-status-tag { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; background: var(--verm); color: var(--paper); padding: 5px 10px; white-space: nowrap; }
    .kc-status p { margin: 0; font-size: 15.5px; line-height: 1.65; flex: 1; min-width: 240px; text-wrap: pretty; }
    .kc-status a { color: var(--verm); }
    .kc-faq { margin-top: 12px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-item h3 { font-family: var(--fd); font-weight: 900; font-size: 19px; margin: 0; line-height: 1.3; }
    .kc-faq-item p { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: 0.85; max-width: 840px; text-wrap: pretty; }
    .kc-faq-item a { color: var(--verm); }
    .kc-rel { margin-top: 22px; display: flex; flex-wrap: wrap; gap: 12px; }
    .kc-rel a { font-family: var(--fm); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--ink); padding: 11px 15px; text-decoration: none; }
    .kc-rel a:hover { background: var(--ink); color: var(--paper); }
      `}</style>
      <JsonLd graph={GRAPH} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS", "/products"], ["ONTOLOGY GENERATOR"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.5</span>
            <span className="kc-detail-meta">TOOL · IN DEVELOPMENT · ACCESS BY REQUEST</span>
            <div className="kc-hero-shape" style={{ background: "#DF4A1E", borderRadius: "50% 0 50% 0", border: "none" }}></div>
          </div>
          <h1 className="kc-detail-title">Ontology Generator</h1>
          <p className="kc-detail-sub">Point it at your systems and docs — it drafts an agent-readable ontology of entities, actions, and permissions for your engineers to refine.</p>

          <div className="kc-detail-h" style={{ marginTop: "64px" }}><i></i><h2>What is the Ontology Generator?</h2></div>
          <section className="kc-detail-intro" style={{ marginTop: "28px", borderTop: "none", paddingTop: 0 }}>
            <p>The Ontology Generator is a tool that drafts an agent-readable ontology from what your organization already has. Point it at your systems and documents — schemas, API specifications, runbooks, process docs — and it proposes a first ontology: the entities of your business, the actions that can be performed on them, and the permissions that should govern those actions.</p>
            <p>The blank page is the most expensive part of ontology work. Enterprises do not lack descriptions of their business; they lack one coherent, machine-readable description. The generator does the tedious synthesis so your engineers can spend their time on the part that actually needs judgment: deciding what is true, what is allowed, and what an agent must never touch.</p>
          </section>

          <div className="kc-pull">
            <p>The generator drafts. Your engineers decide. That order is a feature, not a limitation.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>How it works</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">Ingest</h3>
                <p className="kc-prin-d">Point it at the sources that already describe your business: database schemas, API specs, internal docs, runbooks. It reads what exists instead of asking your team to start from zero.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Draft entities and actions</h3>
                <p className="kc-prin-d">It proposes the entity map — business objects, relationships, states — and a catalogue of candidate actions, each drafted with preconditions and effects your engineers can accept, edit, or reject.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Draft permissions</h3>
                <p className="kc-prin-d">From the roles and access patterns visible in your sources, it drafts a permission grid: which principals may invoke which actions, within which limits. Drafted, flagged, and waiting for human sign-off.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Hand off for refinement</h3>
                <p className="kc-prin-d">The output is a versionable ontology document — built to be reviewed, argued over, and refined by your engineers, ideally with the Ontology Canvas as the structure for that review.</p>
              </div>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Who it&apos;s for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Teams starting ontology work who are rich in documentation and poor in time</p></div>
            <div className="kc-out"><i>→</i><p>Architects who ran the Ontology Canvas and want a machine-drafted baseline to test their map against</p></div>
            <div className="kc-out"><i>→</i><p>Platform teams preparing their systems for agents and needing an action catalogue to govern them</p></div>
            <div className="kc-out"><i>→</i><p>Consulting clients who want the excavation phase of an ontology engagement accelerated</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Status and availability</h2></div>
          <div className="kc-status">
            <span className="kc-status-tag">IN DEVELOPMENT</span>
            <p>The Ontology Generator is in development and access is by request. I am running it with early users whose source material stress-tests the drafting quality. Email me with a note on your systems and documentation landscape, and I will tell you honestly whether the current version would be useful to you yet.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3>Does the generator replace the Ontology Canvas?</h3>
              <p>No — they are complements. The generator drafts an ontology from your systems and documents; the <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link> structures the human work of interrogating and refining that draft. The fastest teams generate first, then run the canvas against the output.</p>
            </div>
            <div className="kc-faq-item">
              <h3>What inputs does it need?</h3>
              <p>Whatever already describes your business in machine-readable or written form: database schemas, API specifications, internal documentation, runbooks, and process descriptions. The more of the real operational picture it sees, the fewer gaps your engineers have to fill by hand.</p>
            </div>
            <div className="kc-faq-item">
              <h3>Is the generated ontology production-ready?</h3>
              <p>No, and it is not meant to be. The output is a draft: a structured starting point that saves your engineers weeks of blank-page work. Actions, preconditions, and especially permissions must be reviewed by the people accountable for them before any agent acts through the ontology — a principle I argue for in <Link href={URLS.ideaSchema}>Ontology is the new schema</Link>.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Go deeper</h2></div>
          <nav className="kc-rel" aria-label="Related pages">
            <Link href={URLS.consultingOntology}>Consulting: Agentic Architecture &amp; Ontology →</Link>
            <Link href={URLS.ideaSchema}>Essay: Ontology is the new schema →</Link>
            <Link href={URLS.ontologyCanvas}>Ontology Canvas →</Link>
            <Link href={URLS.products}>All products →</Link>
          </nav>

          <DetailCta
            title="Curious what it would draft from your stack?"
            body="Send a short note on your systems and documentation — no access required for a first conversation. I will reply with an honest read on whether the generator is ready for your case."
            subject="Ontology Generator access request"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
