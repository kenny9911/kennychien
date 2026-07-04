import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DetailCta from "@/components/DetailCta";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";

const DESCRIPTION =
  "The Vibe Coding Playbook is a digital field manual of prompts, patterns, anti-patterns, and review workflows for shipping real software with AI. In development.";

export const metadata: Metadata = {
  title: "The Vibe Coding Playbook: A Field Manual",
  description: DESCRIPTION,
  alternates: { canonical: "/products/vibe-coding-playbook" },
  openGraph: {
    title: "The Vibe Coding Playbook: A Field Manual — Kenny Chien",
    description: DESCRIPTION,
    url: "/products/vibe-coding-playbook",
    type: "website",
  },
};

const GRAPH = [
  {
    "@type": "Book",
    name: "The Vibe Coding Playbook",
    url: SITE_URL + URLS.playbook,
    description:
      "A digital field manual of prompts, patterns, and anti-patterns for shipping real software with AI — drawn from production engagements, not toy demos.",
    inLanguage: "en",
    bookFormat: "https://schema.org/EBook",
    author: PERSON,
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Products", "/products"],
    ["The Vibe Coding Playbook", "/products/vibe-coding-playbook"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is The Vibe Coding Playbook a course or a book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A book — a digital field manual you keep next to your editor, not a video course. It is also the reference text behind the Vibe Coding Bootcamp: the bootcamp is where the material is practiced live, the playbook is where it is written down.",
        },
      },
      {
        "@type": "Question",
        name: "What does vibe coding mean in this playbook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe coding means shipping software at the speed of intent — treating prompting as a craft, not a trick. The playbook takes the term seriously: it is about producing production-grade software with AI in the loop, with review discipline to match, not about accepting whatever the model emits.",
        },
      },
      {
        "@type": "Question",
        name: "When will the playbook be released and how do I get it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is in development, and I am not publishing a date I might miss. It is available on request: email kenny.chien@gmail.com and I will share the current draft chapters where they are ready, and notify you when the full edition ships.",
        },
      },
    ],
  },
];

export default function VibeCodingPlaybookPage() {
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
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PRODUCTS", "/products"], ["THE VIBE CODING PLAYBOOK"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/03.1</span>
            <span className="kc-detail-meta">DIGITAL BOOK · IN DEVELOPMENT · EARLY ACCESS BY REQUEST</span>
            <div className="kc-hero-shape" style={{ background: "#DF4A1E", borderRadius: "50%", border: "none" }}></div>
          </div>
          <h1 className="kc-detail-title">The Vibe Coding Playbook</h1>
          <p className="kc-detail-sub">A field manual of prompts, patterns, and anti-patterns for shipping real software with AI.</p>

          <div className="kc-detail-h" style={{ marginTop: "64px" }}><i></i><h2>What is The Vibe Coding Playbook?</h2></div>
          <section className="kc-detail-intro" style={{ marginTop: "28px", borderTop: "none", paddingTop: 0 }}>
            <p>The Vibe Coding Playbook is a digital field manual for shipping real software with AI. It collects the prompts, patterns, anti-patterns, and review workflows I use in production engagements — the working notes of vibe coding practiced as a craft, not a trick. It is written for engineers who want AI in the loop and quality out the other end.</p>
            <p>Everything in it comes from real codebases: consulting deliveries, forward deployed engineering embeds, and the cohorts of the <Link href={URLS.bootcamp} style={{ color: "var(--verm)" }}>Vibe Coding Bootcamp</Link>, where this material is taught live. Nothing in the playbook is theoretical. If a pattern has not survived contact with a production system, it does not get a page.</p>
          </section>

          <div className="kc-pull">
            <p>AI does not produce mediocrity. Unexamined taste does. The playbook exists to make the examination systematic.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>What&apos;s inside</h2></div>
          <div className="kc-prin-grid">
            <div className="kc-prin">
              <span className="kc-prin-n">01</span>
              <div>
                <h3 className="kc-prin-t">The prompt library</h3>
                <p className="kc-prin-d">Working prompts for the phases that matter: framing a spec, scaffolding a system, refactoring safely, and debugging with the model instead of against it. Each prompt annotated with when it works and when it quietly fails.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">02</span>
              <div>
                <h3 className="kc-prin-t">Patterns</h3>
                <p className="kc-prin-d">The repeatable moves behind fast, safe AI-assisted delivery: spec-first prompting, the smallest deployable loop, test-anchored generation, and context management that keeps long sessions coherent.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">03</span>
              <div>
                <h3 className="kc-prin-t">Anti-patterns</h3>
                <p className="kc-prin-d">A catalogue of the failure modes I see most in the field — prompt sprawl, context rot, unreviewed merges, and slop acceptance — each with the early symptoms and the corrective move.</p>
              </div>
            </div>
            <div className="kc-prin">
              <span className="kc-prin-n">04</span>
              <div>
                <h3 className="kc-prin-t">Review workflows</h3>
                <p className="kc-prin-d">How to code-review AI output without becoming the bottleneck: what to read line by line, what to test instead of read, and how to turn every review into a transfer of taste across the team.</p>
              </div>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Who it&apos;s for</h2></div>
          <div className="kc-out-grid">
            <div className="kc-out"><i>→</i><p>Engineers who use AI daily and want their output to be production-grade, not plausible-looking</p></div>
            <div className="kc-out"><i>→</i><p>Tech leads setting the standards for how their team builds with AI in the loop</p></div>
            <div className="kc-out"><i>→</i><p>Participants of the Vibe Coding Bootcamp who want the reference text after the cohort ends</p></div>
            <div className="kc-out"><i>→</i><p>Skeptics who have seen AI slop merged to main and want the discipline that prevents it</p></div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Status and availability</h2></div>
          <div className="kc-status">
            <span className="kc-status-tag">IN DEVELOPMENT</span>
            <p>The playbook is being written now, chapter by chapter, and is available on request. Email me and I will share the draft chapters that are ready, and notify you when the full edition ships. No pre-orders, no payment — just an honest early look in exchange for honest feedback.</p>
          </div>

          <div className="kc-detail-h"><i></i><h2>Frequently asked questions</h2></div>
          <div className="kc-faq">
            <div className="kc-faq-item">
              <h3>Is The Vibe Coding Playbook a course or a book?</h3>
              <p>A book — a digital field manual you keep next to your editor, not a video course. It is also the reference text behind the <Link href={URLS.bootcamp}>Vibe Coding Bootcamp</Link>: the bootcamp is where the material is practiced live, the playbook is where it is written down.</p>
            </div>
            <div className="kc-faq-item">
              <h3>What does &quot;vibe coding&quot; mean in this playbook?</h3>
              <p>Vibe coding means shipping software at the speed of intent — treating prompting as a craft, not a trick. The playbook takes the term seriously: it is about producing production-grade software with AI in the loop, with review discipline to match, not about accepting whatever the model emits. The essay <Link href={URLS.ideaSlop}>Slop is a choice</Link> is the short version of that argument.</p>
            </div>
            <div className="kc-faq-item">
              <h3>When will it be released, and how do I get it?</h3>
              <p>It is in development, and I am not publishing a date I might miss. It is available on request: email me and I will share the current draft chapters where they are ready, and notify you when the full edition ships.</p>
            </div>
          </div>

          <div className="kc-detail-h"><i></i><h2>Go deeper</h2></div>
          <nav className="kc-rel" aria-label="Related pages">
            <Link href={URLS.bootcamp}>Vibe Coding Bootcamp →</Link>
            <Link href={URLS.ideaSlop}>Essay: Slop is a choice →</Link>
            <Link href={URLS.products}>All products →</Link>
          </nav>

          <DetailCta
            title="Want the draft chapters?"
            body="Send one line on what you build and how AI fits into it today. I will reply with the chapters that are ready and add you to the release list."
            subject="Vibe Coding Playbook early access"
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
