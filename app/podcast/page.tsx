import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DetailCta from "@/components/DetailCta";
import { SITE_URL, CONTACT_EMAIL, PERSON, URLS, breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Agentic Hour, an Enterprise AI Podcast",
  description:
    "The Agentic Hour is Kenny Chien's enterprise AI podcast — long-form conversations about agents in production, vibe coding, and agentic ontology.",
  alternates: { canonical: "/podcast" },
  openGraph: {
    title: "The Agentic Hour, an Enterprise AI Podcast — Kenny Chien",
    description:
      "The Agentic Hour is Kenny Chien's enterprise AI podcast — long-form conversations about agents in production, vibe coding, and agentic ontology.",
    url: "/podcast",
    type: "website",
  },
};

const SERIES_ID = `${SITE_URL}/podcast#series`;

const EPISODES = [
  { num: "014", episodeNumber: 14, title: "What enterprises get wrong about agents", minutes: 42 },
  { num: "013", episodeNumber: 13, title: "Vibe coding in regulated industries", minutes: 48 },
  { num: "012", episodeNumber: 12, title: "Ontology before automation", minutes: 39 },
] as const;

const graph = [
  {
    "@type": "PodcastSeries",
    "@id": SERIES_ID,
    name: "The Agentic Hour",
    url: `${SITE_URL}/podcast`,
    description:
      "A podcast about enterprise AI in the agentic era, hosted by enterprise AI consultant Kenny Chien. Conversations with the people building the agentic era — operators, researchers, and the occasional skeptic.",
    inLanguage: "en",
    author: PERSON,
  },
  {
    "@type": "ItemList",
    name: "The Agentic Hour — latest episodes",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: EPISODES.map((ep, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "PodcastEpisode",
        name: ep.title,
        episodeNumber: ep.episodeNumber,
        duration: `PT${ep.minutes}M`,
        inLanguage: "en",
        partOfSeries: { "@id": SERIES_ID },
      },
    })),
  },
  breadcrumbLd([
    ["Kenny Chien", "/"],
    ["Podcast", "/podcast"],
  ]),
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is The Agentic Hour about?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Agentic Hour is a podcast about enterprise AI in the agentic era, hosted by enterprise AI consultant Kenny Chien. Each episode is a long-form conversation with an operator, researcher, or skeptic about agents in production — the architecture, the ontology, the failures, and the taste it takes to ship well.",
        },
      },
      {
        "@type": "Question",
        name: "How long are episodes of The Agentic Hour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recent episodes of The Agentic Hour run between 39 and 48 minutes — long enough for a real argument, short enough for a commute. Episodes are recorded and rolling out now.",
        },
      },
      {
        "@type": "Question",
        name: "How can I be a guest on The Agentic Hour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email kenny.chien@gmail.com with a short pitch: who you are, what you have built or studied, and the one claim you are willing to defend for an hour. Practitioners with production stories get priority over vendors with product announcements.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I listen to The Agentic Hour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Public platform links are rolling out now and are not live on this page yet. To hear episodes as soon as they land, email kenny.chien@gmail.com with the subject line The Agentic Hour and you will be notified when they drop.",
        },
      },
    ],
  },
];

export default function PodcastPage() {
  return (
    <>
      <style>{`
    /* /podcast — page-specific styles (design-system tokens from app/globals.css) */
    .kc-pod-page .kc-detail-metarow { margin-top: 32px; }

    .kc-pod-hero { margin-top: 54px; border-top: 2px solid var(--ink); padding-top: 44px; }
    .kc-pod-intro p { margin: 0 0 20px; font-size: 17px; line-height: 1.75; text-wrap: pretty; }
    .kc-pod-intro p:last-child { margin-bottom: 0; }
    .kc-pod-intro a, .kc-faq a, .kc-read a, .kc-guest a {
      color: inherit; text-decoration: underline; text-decoration-color: var(--verm); text-underline-offset: 3px;
    }
    .kc-pod-intro a:hover, .kc-faq a:hover, .kc-read a:hover, .kc-guest a:hover { color: var(--verm); }

    /* Episode grid — YouTube-style cards, CSS-drawn thumbnails */
    .kc-epi-note { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.14em; opacity: 0.65; margin: 20px 0 28px; }
    .kc-epi-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
    .kc-epi-card { border: 1px solid var(--ink); background: var(--card); display: flex; flex-direction: column; }
    .kc-epi-thumb { position: relative; aspect-ratio: 16 / 9; background: var(--ink); border-bottom: 1px solid var(--ink); overflow: hidden; }
    .kc-epi-show { position: absolute; left: 16px; top: 13px; font-family: var(--fm); font-size: 8.5px; letter-spacing: 0.18em; color: var(--paper); opacity: 0.6; }
    .kc-epi-num { position: absolute; left: 14px; bottom: 6px; font-family: var(--fm); font-weight: 500; font-size: clamp(46px, 4.4vw, 58px); line-height: 1.1; color: var(--paper); letter-spacing: 0.02em; }
    .kc-epi-ring { position: absolute; left: 62%; top: 50%; transform: translate(-50%, -50%); width: 88px; height: 88px; border: 1px dashed rgba(242, 238, 227, 0.4); border-radius: 50%; }
    .kc-epi-playbtn { position: absolute; left: 62%; top: 50%; transform: translate(-50%, -50%); width: 56px; height: 56px; border-radius: 50%; background: var(--verm); color: var(--ink); display: flex; align-items: center; justify-content: center; font-size: 15px; transition: transform 0.15s ease; }
    .kc-epi-card:hover .kc-epi-playbtn { transform: translate(-50%, -50%) scale(1.08); }
    .kc-epi-badge { position: absolute; right: 10px; bottom: 10px; font-family: var(--fm); font-size: 9.5px; letter-spacing: 0.1em; background: var(--paper); color: var(--ink); padding: 3px 7px; }
    .kc-epi-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
    .kc-epi-t { font-family: var(--fd); font-weight: 800; font-size: 20px; line-height: 1.22; margin: 0; text-wrap: balance; }
    .kc-epi-m { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; opacity: 0.65; margin: auto 0 0; }
    .kc-read { margin: 30px 0 0; font-size: 15px; line-height: 1.75; opacity: 0.85; max-width: 860px; text-wrap: pretty; }
    .kc-read-k { font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; color: var(--verm); }

    /* Listen & subscribe row */
    .kc-listen { display: grid; grid-template-columns: minmax(0, 1.6fr) auto; gap: 32px 44px; align-items: center; border: 1px solid var(--ink); background: var(--card); padding: 36px 40px; margin-top: 28px; }
    .kc-listen p { margin: 0; font-size: 16px; line-height: 1.7; text-wrap: pretty; }
    .kc-listen .kc-listen-note { margin-top: 14px; font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; opacity: 0.6; }
    .kc-listen-btn { justify-self: end; white-space: nowrap; }

    /* Pitch a guest */
    .kc-guest p { margin: 22px 0 0; font-size: 17px; line-height: 1.75; max-width: 860px; text-wrap: pretty; }
    .kc-guest .kc-pod-cta { margin-top: 22px; }

    /* FAQ */
    .kc-faq { margin-top: 26px; }
    .kc-faq-item { border-top: 1px solid var(--hair); padding: 24px 4px; }
    .kc-faq-q { font-family: var(--fd); font-weight: 800; font-size: 19px; margin: 0; }
    .kc-faq-a { margin: 10px 0 0; font-size: 15.5px; line-height: 1.7; opacity: 0.85; max-width: 900px; text-wrap: pretty; }

    @media (max-width: 1080px) {
      .kc-epi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .kc-listen { grid-template-columns: minmax(0, 1fr); }
      .kc-listen-btn { justify-self: start; }
    }
    @media (max-width: 680px) {
      .kc-epi-grid { grid-template-columns: minmax(0, 1fr); }
      .kc-listen { padding: 26px 22px; }
      .kc-pod-hero { padding-top: 32px; margin-top: 40px; }
    }
      `}</style>
      <JsonLd graph={graph} />
      <SiteNav />

      <main>
        <article className="kc-detail kc-pod-page">
          <Breadcrumb items={[["KENNY CHIEN", "/"], ["PODCAST"]]} />

          <div className="kc-detail-metarow">
            <span className="kc-detail-idx">/06</span>
            <span className="kc-detail-meta">
              PODCAST · HOSTED BY KENNY CHIEN · EPISODES ROLLING OUT — GET NOTIFIED BY EMAIL
            </span>
          </div>
          <h1 className="kc-detail-title">The Agentic Hour</h1>
          <p className="kc-detail-sub">
            Conversations with the people building the agentic era — operators, researchers, and the
            occasional skeptic.
          </p>

          <div className="kc-pod-hero kc-pod-grid">
            <div className="kc-pod-card">
              <span className="kc-pod-label">PODCAST — HOSTED BY KENNY CHIEN</span>
              <div className="kc-pod-title" aria-hidden="true">
                The
                <br />
                Agentic
                <br />
                Hour
              </div>
              <div className="kc-pod-foot">
                <span className="kc-pod-sched">EPISODES ROLLING OUT</span>
                <div className="kc-pod-play" aria-hidden="true">
                  ▶
                </div>
              </div>
            </div>
            <div className="kc-pod-intro">
              <p>
                The Agentic Hour is a podcast about enterprise AI in the agentic era, hosted by
                enterprise AI consultant Kenny Chien. In each episode, I sit down with an operator,
                researcher, or skeptic and push past the demo reel to what actually happens when
                agents meet production. Episodes are rolling out now — get notified by email below.
              </p>
              <p>
                The show covers the same territory as my consulting and writing: agents in
                production, <Link href={URLS.bootcamp}>vibe coding</Link> under real constraints,{" "}
                <Link href={URLS.consultingOntology}>agentic architecture and ontology</Link>, and
                forward deployed engineering (FDE). If you prefer the arguments in written form,
                start with the essays in <Link href={URLS.ideas}>Ideas</Link>.
              </p>
            </div>
          </div>

          <div className="kc-pull">
            <p>
              "The best conversations about agents start where the demo ends. That is where the show
              starts too."
            </p>
          </div>

          <div className="kc-detail-h">
            <i></i>
            <h2>Latest episodes</h2>
          </div>
          <p className="kc-epi-note">
            RECORDED · PLATFORM LINKS ROLLING OUT — SEE LISTEN &amp; SUBSCRIBE BELOW
          </p>

          {/* ==================================================================
              EPISODE LINKS — placeholder state (2026-07-04)
              No public platform or episode URLs exist yet, so each episode is a
              non-clickable <article>. When an episode goes public:
                1. Wrap its <article class="kc-epi-card"> in
                   <a class="kc-epi-link" href="{public episode URL}">…</a>
                   and add to the <style> block:
                   .kc-epi-link { color: inherit; text-decoration: none; display: block; }
                2. Add "url": "{public episode URL}" to the matching
                   PodcastEpisode node in the JSON-LD @graph.
                3. Replace the note in the "Listen & subscribe" row with real
                   platform links (Apple Podcasts / Spotify / YouTube).
              ================================================================== */}
          <div className="kc-epi-grid">
            {EPISODES.map((ep) => (
              <article className="kc-epi-card" key={ep.num}>
                <div className="kc-epi-thumb" aria-hidden="true">
                  <span className="kc-epi-show">THE AGENTIC HOUR</span>
                  <span className="kc-epi-num">{ep.num}</span>
                  <span className="kc-epi-ring"></span>
                  <span className="kc-epi-playbtn">▶</span>
                  <span className="kc-epi-badge">{ep.minutes} MIN</span>
                </div>
                <div className="kc-epi-body">
                  <h3 className="kc-epi-t">{ep.title}</h3>
                  <p className="kc-epi-m">
                    EP {ep.num} · {ep.minutes} MIN
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="kc-read">
            <span className="kc-read-k">READ ALONGSIDE — </span> EP 014 pairs with the{" "}
            <Link href={URLS.consultingLaunch}>AI Application Launch</Link> engagement, EP 013 with
            the <Link href={URLS.bootcamp}>Vibe Coding Bootcamp</Link>, and EP 012 with the essay{" "}
            <Link href={URLS.ideaSchema}>"Ontology is the new schema"</Link>.
          </p>

          <div className="kc-detail-h">
            <i></i>
            <h2>Listen &amp; subscribe</h2>
          </div>
          <div className="kc-listen">
            <div>
              <p>
                The first episodes are recorded and rolling out now. There are no public platform
                links on this page yet — when the feed goes live on Apple Podcasts, Spotify, and
                YouTube, this is where you will find it. Until then, one email puts you on the drop
                list.
              </p>
              <p className="kc-listen-note">PLATFORM LINKS WILL APPEAR HERE AS EPISODES GO PUBLIC.</p>
            </div>
            <a
              className="kc-btn-primary kc-listen-btn"
              href={`mailto:${CONTACT_EMAIL}?subject=The%20Agentic%20Hour`}
            >
              Get notified when episodes drop
            </a>
          </div>

          <section className="kc-guest">
            <div className="kc-detail-h">
              <i></i>
              <h2>Pitch a guest</h2>
            </div>
            <p>
              I book guests the way I take clients: on substance. If you operate agentic systems
              inside a real enterprise, research the parts everyone else hand-waves, or think the
              whole agent wave is oversold — I want that conversation on tape. Send three sentences:
              who you are, what you have shipped or studied, and the one claim you are willing to
              defend for an hour. Consulting, coaching, and speaking inquiries go through the{" "}
              <Link href="/#contact">contact page</Link>.
            </p>
            <a
              className="kc-pod-cta"
              href={`mailto:${CONTACT_EMAIL}?subject=The%20Agentic%20Hour%20guest%20pitch`}
            >
              Pitch a guest →
            </a>
          </section>

          <section>
            <div className="kc-detail-h">
              <i></i>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="kc-faq">
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">What is The Agentic Hour about?</h3>
                <p className="kc-faq-a">
                  The Agentic Hour is a podcast about enterprise AI in the agentic era, hosted by
                  enterprise AI consultant Kenny Chien. Each episode is a long-form conversation with
                  an operator, researcher, or skeptic about agents in production — the architecture,
                  the <Link href={URLS.consultingOntology}>ontology</Link>, the failures, and the
                  taste it takes to ship well.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">How long are episodes of The Agentic Hour?</h3>
                <p className="kc-faq-a">
                  Recent episodes of The Agentic Hour run between 39 and 48 minutes — long enough for
                  a real argument, short enough for a commute. Episodes are recorded and rolling out
                  now.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">How can I be a guest on The Agentic Hour?</h3>
                <p className="kc-faq-a">
                  Email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=The%20Agentic%20Hour%20guest%20pitch`}>
                    kenny.chien@gmail.com
                  </a>{" "}
                  with a short pitch: who you are, what you have built or studied, and the one claim
                  you are willing to defend for an hour. Practitioners with production stories get
                  priority over vendors with product announcements.
                </p>
              </div>
              <div className="kc-faq-item">
                <h3 className="kc-faq-q">Where can I listen to The Agentic Hour?</h3>
                <p className="kc-faq-a">
                  Public platform links are rolling out now and are not live on this page yet. To
                  hear episodes as soon as they land, email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=The%20Agentic%20Hour`}>
                    kenny.chien@gmail.com
                  </a>{" "}
                  with the subject line The Agentic Hour and you will be notified when they drop.
                </p>
              </div>
            </div>
          </section>

          <DetailCta
            title="Want in on the conversation?"
            body="Episode drops, a guest pitch, or a topic the show should argue about — one email reaches me, and I read all of it."
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
