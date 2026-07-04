import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { SITE_URL, CONTACT_EMAIL, PERSON, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Field Notes: Blog on Enterprise & Agentic AI",
  description:
    "Field Notes is Kenny Chien's blog on enterprise AI in production: deployment write-ups, agentic ontology, token economics, plus working notes and scripts.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes: Blog on Enterprise & Agentic AI — Kenny Chien",
    description:
      "Field Notes is Kenny Chien's blog on enterprise AI in production: deployment write-ups, agentic ontology, token economics, plus working notes and scripts.",
    url: "/blog",
    type: "website",
  },
};

const graph = [
  {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Field Notes",
    url: `${SITE_URL}/blog`,
    description:
      "Kenny Chien's blog on enterprise AI in production: deployment write-ups, agentic ontology, token economics, working notes and scripts.",
    inLanguage: ["en", "zh-Hans"],
    author: PERSON,
    blogPost: [
      {
        "@type": "BlogPosting",
        headline: "Token 是成本单位，业务结果才是价值单位",
        url: SITE_URL + URLS.tokenEssay,
        datePublished: "2026-06-12",
        inLanguage: "zh-Hans",
        description: "Token 是 AI 基础设施的成本单位，业务结果才是企业客户真正购买的价值单位。",
        author: PERSON,
      },
    ],
  },
  breadcrumbLd([
    ["Home", "/"],
    ["Blog", "/blog"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does the Field Notes blog cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Field Notes is Kenny Chien's blog on enterprise AI in production. It covers deployment write-ups, agentic application launches, agentic ontology in practice, token economics, and the working notes and scripts behind real engagements.",
        },
      },
      {
        "@type": "Question",
        name: "How is the blog different from the Ideas section?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ideas holds the longer thesis essays — the arguments. Field Notes is the shorter, operational record: what shipped in a specific deployment, what broke, and what the fix was. Read Ideas for the why; read Field Notes for the how.",
        },
      },
      {
        "@type": "Question",
        name: "What languages are posts written in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Posts appear in English or Chinese, whichever language the argument was born in. Every post is labelled with its language on this page, so you know before you click. The latest essay, on token economics, is in Simplified Chinese.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get new posts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'There is no mailing-list machinery yet. Email kenny.chien@gmail.com with the subject "Subscribe to Field Notes" and you will get new posts by reply as they are published.',
        },
      },
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      <style>{`
    /* /blog page-specific styles */
    .kc-blog-intro-links a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
    .kc-blog-intro-links a:hover { color: var(--verm); }

    /* Featured (real) post */
    .kc-feat {
      display: block; border: 1px solid var(--ink); background: var(--card);
      padding: 42px 44px; margin-top: 28px; color: inherit; text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .kc-feat:hover { transform: translate(-4px, -4px); box-shadow: 8px 8px 0 var(--ink); }
    .kc-feat-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .kc-feat-label { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; color: var(--verm); }
    .kc-badge-zh { font-family: var(--fm); font-size: 9.5px; letter-spacing: 0.14em; border: 1px solid var(--ink); padding: 3px 8px; white-space: nowrap; }
    .kc-feat-t {
      font-family: var(--fd); font-weight: 900; font-size: clamp(26px, 3.4vw, 46px);
      line-height: 1.18; margin: 20px 0 0; text-wrap: balance; word-break: keep-all;
    }
    .kc-feat-gloss { font-family: var(--fs); font-style: italic; font-size: clamp(18px, 1.9vw, 24px); line-height: 1.4; color: var(--verm); margin: 14px 0 0; text-wrap: pretty; }
    .kc-feat-d { margin: 20px 0 0; font-size: 16px; line-height: 1.7; opacity: 0.82; max-width: 780px; text-wrap: pretty; }
    .kc-feat-cta {
      display: inline-block; margin-top: 24px;
      font-family: var(--fm); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--verm); text-decoration: underline; text-underline-offset: 4px;
    }

    /* In-progress cards: kc-post-card look, honestly inert */
    .kc-soon { cursor: default; }
    .kc-soon:hover { background: transparent; transform: none; box-shadow: none; }
    .kc-soon-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .kc-soon .kc-post-t { opacity: 0.55; }
    .kc-soon-badge {
      font-family: var(--fm); font-size: 9px; letter-spacing: 0.14em;
      border: 1px solid var(--hair); padding: 4px 8px; opacity: 0.65; white-space: nowrap;
    }
    .kc-soon-d { margin: 0; font-size: 14.5px; line-height: 1.6; opacity: 0.55; text-wrap: pretty; }
    .kc-soon-note { margin: 20px 0 0; font-size: 15px; line-height: 1.65; opacity: 0.75; max-width: 780px; text-wrap: pretty; }

    /* Notes & scripts strip */
    .kc-strip {
      border: 1px solid var(--ink); background: var(--tint); margin-top: 28px;
      padding: 34px 38px; display: flex; align-items: center; justify-content: space-between;
      gap: 24px 40px; flex-wrap: wrap;
    }
    .kc-strip p { margin: 0; font-size: 16px; line-height: 1.7; max-width: 760px; text-wrap: pretty; }
    .kc-strip p a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
    .kc-strip p a:hover { color: var(--verm); }
    .kc-strip-cta {
      font-family: var(--fm); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
      background: var(--ink); color: var(--paper); padding: 15px 22px; text-decoration: none; white-space: nowrap;
    }
    .kc-strip-cta:hover { background: var(--verm); }

    /* FAQ */
    .kc-faq { margin-top: 18px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 26px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 900; font-size: 20px; margin: 0; line-height: 1.3; }
    .kc-faq-a { margin: 12px 0 0; font-size: 15.5px; line-height: 1.7; opacity: 0.82; max-width: 840px; text-wrap: pretty; }
    .kc-faq-a a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
    .kc-faq-a a:hover { color: var(--verm); }

    @media (max-width: 1080px) {
      .kc-feat { padding: 34px 32px; }
    }
    @media (max-width: 680px) {
      .kc-feat { padding: 26px 22px; }
      .kc-strip { padding: 26px 22px; }
    }
      `}</style>
      <JsonLd graph={graph} />
      <SiteNav />

      <main>
        <article className="kc-detail">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["BLOG"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/07</span>
            <span className="kc-detail-meta">FROM REAL DEPLOYMENTS · POSTS · NOTES · SCRIPTS</span>
          </div>
          <h1 className="kc-detail-title">Field notes.</h1>
          <p className="kc-detail-sub">
            The operational record of the agentic era — what shipped, what broke, and what the token
            bill actually bought.
          </p>

          <div className="kc-detail-intro kc-blog-intro-links">
            <p>
              Field Notes is my blog on enterprise AI in production. It collects deployment
              write-ups, launch post-mortems, and working notes on agentic ontology and token
              economics — the things I learn while shipping, written down before the sting fades.
              Everything here comes from real engagements, not thought experiments.
            </p>
            <p>
              The longer thesis essays live in <Link href={URLS.ideas}>Ideas</Link>, and recorded
              conversations live on <Link href={URLS.podcast}>the podcast</Link>. This page is the
              shorter, more practical companion to <Link href={URLS.consulting}>the consulting work</Link>{" "}
              itself. Posts appear in English or Chinese, whichever language the argument was born
              in; each one is labelled so you know before you click.
            </p>
          </div>

          <div className="kc-pull">
            <p>
              Everything here was learned in production — on real data, behind real permissions,
              with real users watching.
            </p>
          </div>

          <section aria-labelledby="latest-h">
            <div className="kc-detail-h">
              <i></i>
              <h2 id="latest-h">The latest post</h2>
            </div>
            {/* Served by a rewrite from the legacy static file — keep as a plain <a>, not <Link>. */}
            <a className="kc-feat" href={URLS.tokenEssay}>
              <span className="kc-feat-meta">
                <span className="kc-feat-label">JUN 2026 · ESSAY · AI NATIVE BUSINESS</span>
                <span className="kc-badge-zh">中文</span>
              </span>
              <h3 className="kc-feat-t" lang="zh-Hans">
                Token 是成本单位，业务结果才是价值单位
              </h3>
              <p className="kc-feat-gloss">
                Tokens are the cost unit. Business outcomes are the value unit.
              </p>
              <p className="kc-feat-d">
                The entire AI infrastructure chain — models, inference, chips, data centers — is
                repricing around tokens. Application companies must not worship them. This essay
                argues that the real dividend of the AI era is converting the right tokens, with the
                right model, context, and ontology, into measurable, reusable business outcomes —
                and gives enterprise buyers three questions for judging any AI application. Written
                in Simplified Chinese.
              </p>
              <span className="kc-feat-cta">Read the essay →</span>
            </a>
          </section>

          <section aria-labelledby="progress-h">
            <div className="kc-detail-h">
              <i></i>
              <h2 id="progress-h">In progress</h2>
            </div>
            <p className="kc-soon-note">
              Three posts are on the desk right now. They are drafted from live engagement notes and
              will publish here when they are honest enough to defend. No links yet — nothing on
              this site points anywhere that does not exist.
            </p>
            <div className="kc-grid3" style={{ marginTop: "26px" }}>
              <div className="kc-post-card kc-soon">
                <div className="kc-soon-top">
                  <span className="kc-post-d">DRAFTED MAY 2026 · PLAYBOOK</span>
                  <span className="kc-soon-badge">IN PROGRESS</span>
                </div>
                <h3 className="kc-post-t">Launching your first agentic app: a 90-day plan</h3>
                <p className="kc-soon-d">
                  The week-by-week sequence I run in an AI application launch — evals first, thin
                  slice second, hardening third.
                </p>
              </div>
              <div className="kc-post-card kc-soon">
                <div className="kc-soon-top">
                  <span className="kc-post-d">DRAFTED APR 2026 · ONTOLOGY</span>
                  <span className="kc-soon-badge">IN PROGRESS</span>
                </div>
                <h3 className="kc-post-t">Five ontology mistakes that quietly break agents</h3>
                <p className="kc-soon-d">
                  Failure patterns from real agentic ontology reviews — none of them look like
                  failures until an agent acts on them.
                </p>
              </div>
              <div className="kc-post-card kc-soon">
                <div className="kc-soon-top">
                  <span className="kc-post-d">DRAFTED MAR 2026 · FIELD NOTES</span>
                  <span className="kc-soon-badge">IN PROGRESS</span>
                </div>
                <h3 className="kc-post-t">What I learned embedding as an FDE at a Fortune 100</h3>
                <p className="kc-soon-d">
                  Notes from a forward deployed engineering (FDE) embed — what survives contact with
                  enterprise reality.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="notes-h">
            <div className="kc-detail-h">
              <i></i>
              <h2 id="notes-h">Notes &amp; scripts</h2>
            </div>
            <div className="kc-strip">
              <p>
                Not everything here will be a full essay. Shorter working notes and the scripts
                behind them — eval harnesses, prompt sets, launch checklists like{" "}
                <Link href={URLS.launchChecklist}>the Agent Launch Checklist</Link> — will land on
                this page as they stabilize.
              </p>
              <a
                className="kc-strip-cta"
                href={`mailto:${CONTACT_EMAIL}?subject=Subscribe%20to%20Field%20Notes`}
              >
                Get new posts by email →
              </a>
            </div>
          </section>

          <section aria-labelledby="faq-h">
            <div className="kc-detail-h">
              <i></i>
              <h2 id="faq-h">Common questions</h2>
            </div>
            <div className="kc-faq">
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">What does the Field Notes blog cover?</h3>
                <p className="kc-faq-a">
                  Field Notes is Kenny Chien's blog on enterprise AI in production. It covers
                  deployment write-ups, agentic application launches, agentic ontology in practice,
                  token economics, and the working notes and scripts behind real engagements.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">How is the blog different from the Ideas section?</h3>
                <p className="kc-faq-a">
                  <Link href={URLS.ideas}>Ideas</Link> holds the longer thesis essays — the
                  arguments. Field Notes is the shorter, operational record: what shipped in a
                  specific deployment, what broke, and what the fix was. Read Ideas for the why;
                  read Field Notes for the how.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">What languages are posts written in?</h3>
                <p className="kc-faq-a">
                  Posts appear in English or Chinese, whichever language the argument was born in.
                  Every post is labelled with its language on this page, so you know before you
                  click. The latest essay, on token economics, is in Simplified Chinese.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">How do I get new posts?</h3>
                <p className="kc-faq-a">
                  There is no mailing-list machinery yet.{" "}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=Subscribe%20to%20Field%20Notes`}>
                    Email kenny.chien@gmail.com with the subject "Subscribe to Field Notes"
                  </a>{" "}
                  and you will get new posts by reply as they are published.
                </p>
              </div>
            </div>
          </section>

          <DetailCta
            title="Want to argue with a post?"
            body="Replies are the best part of publishing. Send me the paragraph you disagree with — or the deployment story you think I should write up next."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
