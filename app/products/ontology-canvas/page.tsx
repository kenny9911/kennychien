import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "The Ontology Canvas is a structured worksheet system for mapping your enterprise into an agent-readable ontology of entities, actions, and permissions.";

export const metadata: Metadata = {
  title: "Ontology Canvas: An Agent-Readable Worksheet",
  description: DESCRIPTION,
  alternates: { canonical: "/products/ontology-canvas" },
  openGraph: {
    title: "Ontology Canvas: An Agent-Readable Worksheet — Kenny Chien",
    description: DESCRIPTION,
    url: "/products/ontology-canvas",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "Product",
    name: "Ontology Canvas",
    url: SITE_URL + URLS.ontologyCanvas,
    description:
      "A structured worksheet system for mapping an enterprise into an agent-readable ontology: entity maps, action catalogues, and permission grids.",
    brand: PERSON,
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
    ["Ontology Canvas", "/products/ontology-canvas"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need a consulting engagement to use the Ontology Canvas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The canvas is the self-serve version of the method I use in agentic architecture and ontology engagements. An engagement gets you the method with me in the room; the canvas gets you the structure to run it yourself.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Ontology Canvas a physical product or a digital one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a worksheet system designed to work both ways: printable canvases for workshop walls and digital templates your architects keep versioned alongside the systems they describe. The output — your ontology draft — is meant to live in your repository, not in a drawer.",
        },
      },
      {
        "@type": "Question",
        name: "How does the canvas relate to the Ontology Generator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The canvas is human-led: it structures how your team articulates entities, actions, and permissions. The Ontology Generator is machine-led: it drafts a starting ontology from your systems and documents. They meet in the middle — generate a draft, then use the canvas to interrogate and refine it.",
        },
      },
    ],
  },
];

export default function OntologyCanvasPage() {
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
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS", "/products"], ["ONTOLOGY CANVAS"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.2</span>
            <span className="kc-detail-meta">TOOLKIT · IN DEVELOPMENT · EARLY ACCESS BY REQUEST</span>
            <div className="kc-hero-shape" style={{ background: "#161512", borderRadius: 0, border: "none" }}></div>
          </div>
          <h1 className="kc-detail-title">Ontology Canvas</h1>
          <p className="kc-detail-sub">A structured worksheet system for mapping your enterprise into an agent-readable ontology.</p>

          <div className="kc-detail-h" style={{ marginTop: "64px" }}><i></i><h2>What is the Ontology Canvas?</h2></div>
          <section className="kc-detail-intro" style={{ marginTop: "28px", borderTop: "none", paddingTop: 0 }}>
            <p>The Ontology Canvas is a structured worksheet system for mapping an enterprise into an agent-readable ontology. It walks a team through naming its entities, the actions that may be performed on them, and the permissions that govern who — human or agent — may perform which action, under which conditions. The output is a first ontology draft your architects can formalize.</p>
            <p>The canvas packages the excavation method from my <Link href={URLS.consultingOntology} style={{ color: "var(--verm)" }}>agentic architecture and ontology</Link> engagements into a form a team can run on its own: a sequence of worksheets, each with a sharp question, filled in by the people who actually operate the business. Agents do not fail for lack of intelligence. They fail because nobody told them what the business is. The canvas is how you tell them.</p>
          </section>

          <div className="kc-pull">
            <p>Databases described your data. Ontologies describe your business. The canvas is where that description gets written down.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>What&apos;s inside</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">Entity map</h3>
                <p className="kc-prin-d">Worksheets for naming your core business objects, their relationships, and their state machines — derived from how work actually flows, not from the org chart or the database schema.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Action catalogue</h3>
                <p className="kc-prin-d">A template for the operations agents may one day invoke — each entry forcing you to state preconditions, side effects, cost, and reversibility before any agent is granted the capability.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Permission grid</h3>
                <p className="kc-prin-d">A matrix for deciding who may act as whom, on what, within which limits — turning &quot;give the agent access&quot; from a vague request into a precise, reviewable statement.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Exception ledger</h3>
                <p className="kc-prin-d">A worksheet dedicated to the workflows nobody documents — the overrides, the workarounds, the Friday-afternoon exceptions. These are what break agents in production, so the canvas hunts them first.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">05</span>
              <div>
                <h3 className="kc-prin-t">Facilitation guide</h3>
                <p className="kc-prin-d">How to run the canvas as a working session: who to put in the room, the order of the worksheets, and how to resolve the arguments — which are usually the most valuable output.</p>
              </div>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Who it&apos;s for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Architects and platform teams designing the layer between models and the business</p></div>
            <div className="kc-out"><i>→</i><p>CTO and CAIO teams who want a shared, reviewable answer to &quot;what may agents do here&quot;</p></div>
            <div className="kc-out"><i>→</i><p>Teams about to build their first agent who have not yet written down what it acts on</p></div>
            <div className="kc-out"><i>→</i><p>Consultants and internal enablement teams who run ontology workshops of their own</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Status and availability</h2></div>
          <div className="kc-status">
            <span className="kc-status-tag">IN DEVELOPMENT</span>
            <p>The Ontology Canvas is in development and available on request. The worksheets exist and are used in live engagements today; the packaged, self-serve edition is being refined. Email me with a sketch of your architecture and I will share the current version and how other teams are using it.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3>Do I need a consulting engagement to use the canvas?</h3>
              <p>No. The canvas is the self-serve version of the method I use in <Link href={URLS.consultingOntology}>agentic architecture and ontology</Link> engagements. An engagement gets you the method with me in the room; the canvas gets you the structure to run it yourself.</p>
            </div>
            <div className="kc-faq-item">
              <h3>Is it a physical product or a digital one?</h3>
              <p>It is a worksheet system designed to work both ways: printable canvases for workshop walls and digital templates your architects keep versioned alongside the systems they describe. The output — your ontology draft — is meant to live in your repository, not in a drawer.</p>
            </div>
            <div className="kc-faq-item">
              <h3>How does the canvas relate to the Ontology Generator?</h3>
              <p>The canvas is human-led: it structures how your team articulates entities, actions, and permissions. The <Link href={URLS.ontologyGenerator}>Ontology Generator</Link> is machine-led: it drafts a starting ontology from your systems and documents. They meet in the middle — generate a draft, then use the canvas to interrogate and refine it.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Go deeper</h2></div>
          <nav className="kc-rel" aria-label="Related pages">
            <Link href={URLS.consultingOntology}>Consulting: Agentic Architecture &amp; Ontology →</Link>
            <Link href={URLS.ideaSchema}>Essay: Ontology is the new schema →</Link>
            <Link href={URLS.ontologyGenerator}>Ontology Generator →</Link>
            <Link href={URLS.products}>All products →</Link>
          </nav>

          <DetailCta
            title="Want to map your ontology?"
            body="Tell me what your agents will need to act on — one paragraph is enough. I will send the current canvas and an honest note on whether it fits your situation."
            subject="Ontology Canvas early access"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
