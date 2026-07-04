import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agentic Architecture & Ontology Consulting",
  description:
    "Agentic ontology consulting by Kenny Chien: the semantic model, action interface and permission system your enterprise agents run on — durable across models.",
  alternates: { canonical: URLS.consultingOntology },
  openGraph: {
    title: "Agentic Architecture & Ontology Consulting — Kenny Chien",
    description:
      "Agentic ontology consulting by Kenny Chien: the semantic model, action interface and permission system your enterprise agents run on — durable across models.",
    url: URLS.consultingOntology,
    type: "website",
  },
};

const service = {
  "@type": "Service",
  "@id": SITE_URL + URLS.consultingOntology,
  name: "Agentic Architecture & Ontology",
  serviceType: "Enterprise AI Architecture Consulting",
  url: SITE_URL + URLS.consultingOntology,
  description:
    "Advisory and architecture engagement designing the ontology an enterprise runs on: the semantic model, the action interface agents are given, the permission system that makes autonomy safe, and the evaluation regime that keeps it honest.",
  provider: PERSON,
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an agentic ontology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An agentic ontology is a machine-readable model of your enterprise — its entities, relationships, actions, and permissions — that lets agents reason about the business instead of autocompleting strings. It is the layer between commodity models and your systems, and the asset that survives model upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "How is an ontology different from a database schema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A schema describes your data; an ontology describes your business — including what operations exist, their preconditions and side effects, and who may perform them. Databases described your data. Ontologies describe your business. Agents need the latter.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to rebuild our systems before starting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The ontology binds to your systems as they are, through model-agnostic seams. The work starts by excavating how work actually flows today, then formalizing it, then proving it with one agent operating in production conditions.",
      },
    },
  ],
};

export default function AgenticOntologyPage() {
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
          breadcrumbLd([["Home", "/"], ["Consulting", URLS.consulting], ["Agentic Architecture & Ontology", URLS.consultingOntology]]),
          faq,
        ]}
      />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["CONSULTING", URLS.consulting], ["AGENTIC ARCHITECTURE & ONTOLOGY"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/02.2</span>
            <span className="kc-detail-meta">ADVISORY · ARCHITECTURE · CAIO / CTO LEVEL</span>
          </div>
          <h1 className="kc-detail-title">Agentic Architecture &amp; Ontology</h1>
          <p className="kc-detail-sub">The decisions that outlive any model: how your enterprise is represented, and what agents are allowed to do to it.</p>

          <div className="kc-detail-intro">
            <p>Models are becoming a commodity; the durable asset is the layer between them and your business. That layer is an ontology — a machine-readable model of your entities, relationships, actions, and permissions. It is what lets an agent know that &quot;cancel the order&quot; is a real operation with preconditions, side effects, and an owner — not a string to autocomplete.</p>
            <p>I work with your architects to design this layer deliberately: the semantic model, the action interface agents are given, the permission system that makes autonomy safe, and the evaluation regime that keeps it honest as models and business rules change underneath it.</p>
          </div>

          <div className="kc-pull"><p>“Agents do not fail for lack of intelligence. They fail because nobody told them what the business is.”</p></div>

          <div className="kc-detail-h"><i></i><h2>What we design</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin"><span className="kc-prin-n">01</span><div><h3 className="kc-prin-t">Semantic core</h3><p className="kc-prin-d">Entities, relationships, and state machines that describe your business as it actually runs — derived from systems and operators, not org charts.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">02</span><div><h3 className="kc-prin-t">Action interface</h3><p className="kc-prin-d">A typed catalogue of operations agents may invoke — each with preconditions, effects, cost, and reversibility — so capability is granted, never improvised.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">03</span><div><h3 className="kc-prin-t">Permission &amp; provenance</h3><p className="kc-prin-d">Who may an agent act as, on what, within which limits — and a full decision trail for when audit, legal, or an angry customer asks why.</p></div></div>
            <div className="kc-prin"><span className="kc-prin-n">04</span><div><h3 className="kc-prin-t">Model-agnostic seams</h3><p className="kc-prin-d">The ontology binds to your systems, not to a vendor. Swap models the way you swap drivers; keep the asset.</p></div></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>How the work runs</h2></div>
          <div className="kc-phases">
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 1–2</span><h3 className="kc-phase-t">Excavate</h3><p className="kc-phase-d">Workshops with operators and system owners. We mine the real ontology from how work actually flows — including the exceptions nobody documents.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 3–5</span><h3 className="kc-phase-t">Formalize</h3><p className="kc-phase-d">The semantic model and action catalogue, written down, reviewed, versioned — plus a reference implementation against one live system.</p></div>
            <div className="kc-phase"><span className="kc-phase-w">WEEKS 6–8</span><h3 className="kc-phase-t">Prove</h3><p className="kc-phase-d">One agent, traversing the ontology in production conditions, with evals that test permission boundaries as hard as task success.</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>What you walk away with</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>An ontology document your engineers and your auditors can both read</p></div>
            <div className="kc-out"><i>→</i><p>A reference agent implementation against your live systems</p></div>
            <div className="kc-out"><i>→</i><p>A permission model that makes &quot;give the agent access&quot; a precise statement</p></div>
            <div className="kc-out"><i>→</i><p>An architecture review your board can act on</p></div>
          </div>

          <div className="kc-rel">
            <span className="kc-rel-label">RELATED</span>
            <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link>
            <Link href={URLS.ontologyGenerator}>Ontology Generator</Link>
            <Link href={URLS.ideaSchema}>Ontology is the new schema</Link>
            <Link href={URLS.consulting}>All consulting services</Link>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">What is an agentic ontology?</h3>
              <p className="kc-faq-a">An agentic ontology is a machine-readable model of your enterprise — its entities, relationships, actions, and permissions — that lets agents reason about the business instead of autocompleting strings. It is the layer between commodity models and your systems, and the asset that survives model upgrades.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">How is an ontology different from a database schema?</h3>
              <p className="kc-faq-a">A schema describes your data; an ontology describes your business — including what operations exist, their preconditions and side effects, and who may perform them. I make the full argument in <Link href={URLS.ideaSchema}>Ontology is the new schema</Link>. If you want to start mapping this yourself, the <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link> is the worksheet system I use in engagements.</p>
            </div>
            <div className="kc-faq-item">
              <h3 className="kc-faq-q">Do we need to rebuild our systems before starting?</h3>
              <p className="kc-faq-a">No. The ontology binds to your systems as they are, through model-agnostic seams. The work starts by excavating how work actually flows today, then formalizing it, then proving it with one agent operating in production conditions.</p>
            </div>
          </div>

          <DetailCta
            title="Architecting this now?"
            body="Share where agents sit in your current architecture diagram. I will tell you what will break first."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
