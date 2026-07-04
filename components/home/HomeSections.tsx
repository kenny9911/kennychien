/* Home-page body sections — faithful port of app.js render functions:
   marquee, about, consulting, products, coaching, ideas, podcast, blog,
   contact (mailto composed at runtime, like app.js) and trilingual footer. */

import { useEffect, useState } from "react";
import Link from "next/link";
import { SHAPES, type Locale } from "@/lib/i18n";
import { URLS } from "@/lib/site";

function SecHead({
  num,
  title,
  kicker,
  extra,
  tight,
}: {
  num: string;
  title: string;
  kicker: string;
  extra?: string;
  tight?: boolean;
}) {
  return (
    <div className={"kc-sechead" + (extra ? " " + extra : "")}>
      <span className="kc-secnum">{num}</span>
      <h2 className={"kc-sectitle" + (tight ? " kc-sectitle--tight" : "")}>{title}</h2>
      <span className="kc-seckicker">{kicker}</span>
    </div>
  );
}

function Marquee({ t }: { t: Locale }) {
  const loop = [...t.marquee, ...t.marquee];
  return (
    <div className="kc-marquee">
      <div className="kc-marquee-track">
        {loop.map((w, i) => (
          <span key={i} className="kc-marquee-item">
            <b>{w}</b>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ t }: { t: Locale }) {
  return (
    <section id="about" className="kc-section kc-section--padtop">
      <SecHead num="/01" title={t.aboutTitle} kicker={t.aboutKicker} extra="kc-sechead--mb54" tight />
      <div className="kc-about-grid">
        <div>
          <p className="kc-bio1">{t.bio1}</p>
          <p className="kc-bio2">{t.bio2}</p>
        </div>
        <div>
          {t.expertise.map((ex) => (
            <div key={ex.tag} className="kc-exp-row">
              <span className="kc-exp-tag">{ex.tag}</span>
              <p className="kc-exp-d">{ex.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consulting({ t }: { t: Locale }) {
  return (
    <section id="consulting" className="kc-section">
      <SecHead num="/02" title={t.consultTitle} kicker={t.consultKicker} />
      <div>
        {t.services.map((sv) => (
          <Link key={sv.url} className="kc-svc-row" href={sv.url}>
            <span className="kc-svc-n">{sv.n}</span>
            <h3 className="kc-svc-t">{sv.t}</h3>
            <p className="kc-svc-d">{sv.d}</p>
            <span className="kc-svc-m">{sv.m}</span>
            <span className="kc-svc-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Products({ t }: { t: Locale }) {
  return (
    <section id="products" className="kc-section">
      <SecHead num="/03" title={t.prodTitle} kicker={t.prodKicker} extra="kc-sechead--mb44" />
      <div className="kc-grid3">
        {t.products.map((pr, i) => {
          const sh = SHAPES[i % SHAPES.length];
          return (
            <Link key={pr.url} className="kc-prod-card" href={pr.url}>
              <div className="kc-prod-head">
                <div
                  className="kc-prod-shape"
                  style={{ background: sh.sBg, borderRadius: sh.sRad, border: sh.sBrd }}
                ></div>
                <span className="kc-prod-tag">{pr.tag}</span>
              </div>
              <h3 className="kc-prod-t">{pr.t}</h3>
              <p className="kc-prod-d">{pr.d}</p>
              <span className="kc-prod-cta">{pr.cta} →</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Coaching({ t }: { t: Locale }) {
  return (
    <section id="coaching" className="kc-band">
      <div className="kc-band-inner">
        <SecHead num="/04" title={t.coachTitle} kicker={t.coachKicker} extra="kc-sechead--dark" />
        <div className="kc-coach-grid">
          {t.coaching.map((co) => (
            <div key={co.url} className="kc-coach-col">
              <span className="kc-coach-m">{co.m}</span>
              <h3 className="kc-coach-t">{co.t}</h3>
              <p className="kc-coach-d">{co.d}</p>
              <Link className="kc-coach-cta" href={co.url}>
                {co.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ideas({ t }: { t: Locale }) {
  return (
    <section id="ideas" className="kc-section kc-section--padtop">
      <SecHead num="/05" title={t.ideasTitle} kicker={t.ideasKicker} />
      <div>
        {t.ideas.map((idea, i) => (
          <Link key={idea.url} className="kc-idea-row" href={idea.url}>
            <span className="kc-idea-n">0{i + 1}</span>
            <h3 className="kc-idea-t">{idea.t}</h3>
            <p className="kc-idea-d">{idea.d}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Podcast({ t }: { t: Locale }) {
  return (
    <section id="podcast" className="kc-section">
      <SecHead num="/06" title={t.podTitle} kicker={t.podKicker} extra="kc-sechead--mb48" />
      <div className="kc-pod-grid">
        <div className="kc-pod-card">
          <span className="kc-pod-label">PODCAST — HOSTED BY KENNY CHIEN</span>
          <h3 className="kc-pod-title">
            The
            <br />
            Agentic
            <br />
            Hour
          </h3>
          <div className="kc-pod-foot">
            {/* Cadence claim removed for honesty — matches the /podcast page's "EPISODES ROLLING OUT". */}
            <span className="kc-pod-sched">EPISODES ROLLING OUT</span>
            <div className="kc-pod-play">▶</div>
          </div>
        </div>
        <div>
          <p className="kc-pod-sub">{t.podSub}</p>
          {t.episodes.map((ep) => (
            <Link key={ep.n} className="kc-ep-row" href={URLS.podcast}>
              <span className="kc-ep-n">{ep.n}</span>
              <h4 className="kc-ep-t">{ep.t}</h4>
              <span className="kc-ep-m">{ep.m}</span>
              <span className="kc-ep-play">▶</span>
            </Link>
          ))}
          <Link className="kc-pod-cta" href={URLS.podcast}>
            {t.podCta} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Blog({ t }: { t: Locale }) {
  return (
    <section id="blog" className="kc-section kc-section--blog">
      <SecHead num="/07" title={t.blogTitle} kicker={t.blogKicker} extra="kc-sechead--mb44" />
      <div className="kc-grid3">
        {t.posts.map((po) => (
          <Link key={po.t} className="kc-post-card" href={po.url}>
            <span className="kc-post-d">{po.d}</span>
            <h3 className="kc-post-t">{po.t}</h3>
            <span className="kc-post-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }: { t: Locale }) {
  // Composed at runtime in the browser, like app.js — keeps the plain address
  // out of the server-rendered HTML source.
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail("kenny.chien" + String.fromCharCode(64) + "gmail.com");
  }, []);
  return (
    <section id="contact" className="kc-contact">
      <div className="kc-contact-inner">
        <span className="kc-contact-label">/08 — CONTACT</span>
        <h2 className="kc-contact-title">{t.contactTitle}</h2>
        <p className="kc-contact-sub">{t.contactSub}</p>
        <a className="kc-contact-email" href={email ? "mailto:" + email : undefined}>
          {email}
        </a>
        <div className="kc-socials">
          <span className="kc-social">X / TWITTER ↗</span>
          <span className="kc-social">LINKEDIN ↗</span>
          <span className="kc-social">GITHUB ↗</span>
          <span className="kc-social">YOUTUBE ↗</span>
        </div>
      </div>
    </section>
  );
}

function HomeFooter({ t }: { t: Locale }) {
  return (
    <footer className="kc-footer">
      <div className="kc-footer-inner">
        <span className="kc-footer-logo">
          KENNY CHIEN<b className="kc-dot">.</b>
        </span>
        <span className="kc-footer-tag">{t.footerTag}</span>
        <span className="kc-footer-langs">ENGLISH · 简体中文 · 繁體中文</span>
        <span className="kc-footer-rights">{t.footerRights}</span>
      </div>
    </footer>
  );
}

export default function HomeSections({ t }: { t: Locale }) {
  return (
    <>
      <Marquee t={t} />
      <About t={t} />
      <Consulting t={t} />
      <Products t={t} />
      <Coaching t={t} />
      <Ideas t={t} />
      <Podcast t={t} />
      <Blog t={t} />
      <Contact t={t} />
      <HomeFooter t={t} />
    </>
  );
}
