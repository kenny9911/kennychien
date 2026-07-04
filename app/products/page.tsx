import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "Field-tested tools for agentic builders — a vibe coding playbook, ontology toolkit, free agent launch checklist, and two software tools, all on request.";

export const metadata: Metadata = {
  title: "Products: Tools for Agentic Builders",
  description: DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products: Tools for Agentic Builders — Kenny Chien",
    description: DESCRIPTION,
    url: "/products",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "CollectionPage",
    name: "Products: Tools for Agentic Builders",
    url: `${SITE_URL}/products`,
    inLanguage: "en",
    description:
      "Field-tested tools for agentic builders: The Vibe Coding Playbook, Ontology Canvas, Agent Launch Checklist, Deep Agents, and Ontology Generator.",
    author: PERSON,
  },
  {
    "@type": "ItemList",
    name: "Products by Kenny Chien",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "The Vibe Coding Playbook", url: SITE_URL + URLS.playbook },
      { "@type": "ListItem", position: 2, name: "Ontology Canvas", url: SITE_URL + URLS.ontologyCanvas },
      { "@type": "ListItem", position: 3, name: "Agent Launch Checklist", url: SITE_URL + URLS.launchChecklist },
      { "@type": "ListItem", position: 4, name: "Deep Agents", url: SITE_URL + URLS.deepAgents },
      { "@type": "ListItem", position: 5, name: "Ontology Generator", url: SITE_URL + URLS.ontologyGenerator },
    ],
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I buy any of these products today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not yet. Everything on this page is in development. Each product page explains what the finished version will contain, and every product is available on request — email kenny.chien@gmail.com and I will share the current state or add you to the early-access list.",
        },
      },
      {
        "@type": "Question",
        name: "Is anything free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Agent Launch Checklist is free on request and will stay free. The other products have no published pricing because they are not finished. I would rather ship them right than sell them early.",
        },
      },
      {
        "@type": "Question",
        name: "Why publish product pages before the products are done?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the material is already in use inside my consulting engagements, and because I want feedback from real builders before locking anything in. An honest pre-launch page beats a fake buy button.",
        },
      },
      {
        "@type": "Question",
        name: "Which product should I start with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are about to ship an agent, request the Agent Launch Checklist. If you are earlier — still deciding what agents should be allowed to do — start with the Ontology Canvas. If you write code with AI every day, start with The Vibe Coding Playbook.",
        },
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <style>{`
    a.kc-prod-card { text-decoration: none; color: inherit; }
    .kc-prod-grid { margin-top: 30px; }
    .kc-prod-note { font-family: var(--fm); font-size: 9px; letter-spacing: 0.14em; opacity: 0.55; }
    .kc-fit p { margin: 18px 0 0; font-size: 16.5px; line-height: 1.75; max-width: 900px; text-wrap: pretty; }
    .kc-fit a { color: var(--verm); text-decoration: underline; text-underline-offset: 3px; }
    .kc-fit a:hover { color: var(--ink); }
    .kc-faq { margin-top: 12px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-item h3 { font-family: var(--fd); font-weight: 900; font-size: 19px; margin: 0; line-height: 1.3; }
    .kc-faq-item p { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: 0.85; max-width: 840px; text-wrap: pretty; }
    .kc-faq-item a { color: var(--verm); }
      `}</style>
      <JsonLd graph={GRAPH} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03</span>
            <span className="kc-detail-meta">FIVE TOOLS · FIELD-TESTED · ALL IN DEVELOPMENT</span>
          </div>
          <h1 className="kc-detail-title">Tools for agentic builders</h1>
          <p className="kc-detail-sub">Field-tested, no fluff — the playbook, canvas, checklist, and software behind my consulting practice.</p>

          <section className="kc-detail-intro">
            <p>These products are field-tested tools for agentic builders: a digital book on vibe coding, a worksheet system for agentic ontology, a free pre-flight checklist for agent launches, and two pieces of software — Deep Agents and the Ontology Generator. Each one is a distillation of work I already do inside enterprise consulting engagements, packaged so your team can use it without me in the room.</p>
            <p>None of them is for sale yet. Every product below is in development and available on request. Send me an email, tell me what you are building, and I will share the current state or put you on the early-access list. No fake buy buttons, no invented reviews — just the tools, described honestly.</p>
          </section>

          <div className="kc-pull">
            <p>Every tool here earned its place on a real engagement before it earned a page on this site.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>The five products</h2></div>
          <div className="kc-grid3 kc-prod-grid">
            <Link className="kc-prod-card" href={URLS.playbook}>
              <div className="kc-prod-head">
                <div className="kc-prod-shape" style={{ background: "#DF4A1E", borderRadius: "50%", border: "none" }}></div>
                <span className="kc-prod-tag">DIGITAL BOOK</span>
              </div>
              <h3 className="kc-prod-t">The Vibe Coding Playbook</h3>
              <p className="kc-prod-d">A field manual of prompts, patterns, and anti-patterns for shipping real software with AI.</p>
              <span className="kc-prod-note">IN DEVELOPMENT · ON REQUEST</span>
              <span className="kc-prod-cta">Get the book →</span>
            </Link>
            <Link className="kc-prod-card" href={URLS.ontologyCanvas}>
              <div className="kc-prod-head">
                <div className="kc-prod-shape" style={{ background: "#161512", borderRadius: 0, border: "none" }}></div>
                <span className="kc-prod-tag">TOOLKIT</span>
              </div>
              <h3 className="kc-prod-t">Ontology Canvas</h3>
              <p className="kc-prod-d">A structured worksheet system for mapping your enterprise into an agent-readable ontology.</p>
              <span className="kc-prod-note">IN DEVELOPMENT · ON REQUEST</span>
              <span className="kc-prod-cta">Explore the canvas →</span>
            </Link>
            <Link className="kc-prod-card" href={URLS.launchChecklist}>
              <div className="kc-prod-head">
                <div className="kc-prod-shape" style={{ background: "repeating-linear-gradient(45deg,#161512 0 2px,transparent 2px 8px)", borderRadius: "50%", border: "1px solid #161512" }}></div>
                <span className="kc-prod-tag">FREE</span>
              </div>
              <h3 className="kc-prod-t">Agent Launch Checklist</h3>
              <p className="kc-prod-d">The pre-flight list I run before any agentic app touches production.</p>
              <span className="kc-prod-note">IN DEVELOPMENT · FREE ON REQUEST</span>
              <span className="kc-prod-cta">Request free copy →</span>
            </Link>
            <Link className="kc-prod-card" href={URLS.deepAgents}>
              <div className="kc-prod-head">
                <div className="kc-prod-shape" style={{ background: "#2742D8", borderRadius: "50%", border: "none" }}></div>
                <span className="kc-prod-tag">PLATFORM</span>
              </div>
              <h3 className="kc-prod-t">Deep Agents</h3>
              <p className="kc-prod-d">Long-horizon agents that decompose goals, spawn sub-agents, and persist state across days of work — built for enterprise workflows.</p>
              <span className="kc-prod-note">IN DEVELOPMENT · ON REQUEST</span>
              <span className="kc-prod-cta">Request a demo →</span>
            </Link>
            <Link className="kc-prod-card" href={URLS.ontologyGenerator}>
              <div className="kc-prod-head">
                <div className="kc-prod-shape" style={{ background: "#DF4A1E", borderRadius: "50% 0 50% 0", border: "none" }}></div>
                <span className="kc-prod-tag">TOOL</span>
              </div>
              <h3 className="kc-prod-t">Ontology Generator</h3>
              <p className="kc-prod-d">Point it at your systems and docs — it drafts an agent-readable ontology of entities, actions, and permissions for your engineers to refine.</p>
              <span className="kc-prod-note">IN DEVELOPMENT · ON REQUEST</span>
              <span className="kc-prod-cta">Request access →</span>
            </Link>
          </div>

          <section className="kc-fit">
            <div className="kc-detail-h"><i></i><h2>How the tools fit together</h2></div>
            <p>The <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link> and the <Link href={URLS.ontologyGenerator}>Ontology Generator</Link> operationalize the method behind my <Link href={URLS.consultingOntology}>agentic architecture and ontology consulting</Link> — the canvas structures the human work, the generator drafts a starting point from your systems. <Link href={URLS.playbook}>The Vibe Coding Playbook</Link> is the reference text behind the <Link href={URLS.bootcamp}>Vibe Coding Bootcamp</Link>. The <Link href={URLS.launchChecklist}>Agent Launch Checklist</Link> condenses the hardening phase of an <Link href={URLS.consultingLaunch}>AI Application Launch</Link> into one document. If you want the thinking underneath all of them, start with the essay <Link href={URLS.ideaSchema}>Ontology is the new schema</Link>.</p>
          </section>

          <section>
            <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
            <div className="kc-faq">
              <div className="kc-faq-item">
                <h3>Can I buy any of these products today?</h3>
                <p>Not yet. Everything on this page is in development. Each product page explains what the finished version will contain, and every product is available on request — email me and I will share the current state or add you to the early-access list.</p>
              </div>
              <div className="kc-faq-item">
                <h3>Is anything free?</h3>
                <p>The <Link href={URLS.launchChecklist}>Agent Launch Checklist</Link> is free on request and will stay free. The other products have no published pricing because they are not finished. I would rather ship them right than sell them early.</p>
              </div>
              <div className="kc-faq-item">
                <h3>Why publish product pages before the products are done?</h3>
                <p>Because the material is already in use inside my consulting engagements, and because I want feedback from real builders before locking anything in. An honest pre-launch page beats a fake buy button.</p>
              </div>
              <div className="kc-faq-item">
                <h3>Which product should I start with?</h3>
                <p>If you are about to ship an agent, request the <Link href={URLS.launchChecklist}>Agent Launch Checklist</Link>. If you are earlier — still deciding what agents should be allowed to do — start with the <Link href={URLS.ontologyCanvas}>Ontology Canvas</Link>. If you write code with AI every day, start with <Link href={URLS.playbook}>The Vibe Coding Playbook</Link>.</p>
              </div>
            </div>
          </section>

          <DetailCta
            title="Want early access?"
            body="Tell me which tool you want and what you are building with it. I will reply with the current state, an honest timeline, and — where it is ready — the material itself."
            subject="Products early access"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
