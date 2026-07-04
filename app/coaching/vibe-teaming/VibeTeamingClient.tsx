"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { URLS } from "@/lib/site";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Serif+SC:wght@600;700;900&family=Noto+Sans+SC:wght@400;500;700&display=swap";

/** Pipeline ticker content — rendered twice for the seamless marquee loop
    (the static page duplicated it with innerHTML at load time). */
function TickerContent() {
  return (
    <>
      <span>Customer Problem</span>
      <span className="arw">→</span>
      <span>Scenario Framing</span>
      <span className="arw">→</span>
      <span>Workflow Design</span>
      <span className="arw">→</span>
      <span>Agent / Task Decomposition</span>
      <span className="arw">→</span>
      <span>Prototype</span>
      <span className="arw">→</span>
      <span>Vibe Coding</span>
      <span className="arw">→</span>
      <span>Validation</span>
      <span className="arw">→</span>
      <span>Customer Demo</span>
      <span className="arw">→</span>
      <span>Iteration</span>
      <span className="arw">↻</span>
    </>
  );
}

export default function VibeTeamingClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // scroll reveal
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  // scroll progress
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const upd = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      bar.style.width = p * 100 + "%";
    };
    window.addEventListener("scroll", upd, { passive: true });
    upd();
    return () => window.removeEventListener("scroll", upd);
  }, []);

  return (
    <div ref={rootRef} className="vt-root grid-tex" lang="zh-CN">
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />
      <style>{`
/* ============================================================
   TOKENS — field manual / engineering blueprint
   (scoped to .vt-root; body rules merged in)
   ============================================================ */
.vt-root{
  --paper:#F4F0E5;
  --paper-2:#FBF8F0;
  --ink:#1A201C;
  --ink-soft:#39423C;
  --muted:rgba(26,32,28,.64);
  --faint:rgba(26,32,28,.58);
  --line:rgba(26,32,28,.16);
  --hair:rgba(26,32,28,.09);

  --accent:#DE4A17;        /* signal orange — Vibe Coding */
  --accent-deep:#B23A0F;
  --teal:#0E6B5C;          /* Vibe Design */
  --gold:#B8860B;          /* Validate */
  --night:#131B16;         /* dark section bg */
  --night-2:#182219;

  --maxw:1160px;
  --pad:clamp(20px,5vw,72px);

  --font-cjk:"Noto Sans SC","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;
  --font-serif:"Noto Serif SC","Songti SC",serif;
  --font-display:"Bricolage Grotesque","Noto Sans SC",sans-serif;
  --font-mono:"IBM Plex Mono","PingFang SC",monospace;

  --ease:cubic-bezier(.22,.61,.36,1);

  font-family:var(--font-cjk);
  background:var(--paper);
  color:var(--ink);
  line-height:1.85;
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
  overflow-x:hidden;
}

/* ============================================================
   BASE
   ============================================================ */
.vt-root,.vt-root *{box-sizing:border-box;margin:0;padding:0}
.vt-root [id]{scroll-margin-top:76px}
.vt-root ::selection{background:var(--accent);color:#fff}
.vt-root a{color:inherit;text-decoration:none}
.vt-root strong{font-weight:700}
.en{font-family:var(--font-mono);font-size:.92em;letter-spacing:.01em}

/* graph-paper texture over the whole light canvas */
.grid-tex{
  background-image:
    linear-gradient(rgba(26,32,28,.045) 1px,transparent 1px),
    linear-gradient(90deg,rgba(26,32,28,.045) 1px,transparent 1px);
  background-size:36px 36px;
}

.wrap{max-width:var(--maxw);margin:0 auto;padding:0 var(--pad)}

/* ============================================================
   TOPBAR
   ============================================================ */
.topbar{
  position:fixed;inset:0 0 auto 0;z-index:100;height:58px;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 var(--pad);
  background:rgba(244,240,229,.85);
  backdrop-filter:saturate(150%) blur(12px);
  -webkit-backdrop-filter:saturate(150%) blur(12px);
  border-bottom:1px solid var(--line);
}
.topbar .mark{
  font-family:var(--font-display);font-weight:800;font-size:15px;letter-spacing:.04em;
  display:flex;align-items:center;gap:10px;
}
.topbar .mark .dot{width:9px;height:9px;background:var(--accent);border-radius:1px;transform:rotate(45deg)}
.topnav{display:flex;gap:26px;font-family:var(--font-mono);font-size:12px;letter-spacing:.05em;color:var(--muted)}
.topnav a{transition:color .2s var(--ease)}
.topnav a:hover{color:var(--accent)}
@media(max-width:860px){.topnav{display:none}}
.site-link{
  font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;color:var(--muted);
  border:1px solid var(--line);padding:6px 13px;white-space:nowrap;
  transition:color .2s var(--ease),border-color .2s var(--ease);
}
.site-link:hover{color:var(--accent);border-color:var(--accent)}

/* scroll progress */
.progress{position:fixed;top:0;left:0;height:2px;background:var(--accent);width:0;z-index:101;transition:width .1s linear}

/* ============================================================
   HERO
   ============================================================ */
.hero{position:relative;padding:150px 0 0;overflow:hidden}
.hero .wrap{position:relative;z-index:2}
.eyebrow{
  font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;color:var(--accent-deep);
  display:flex;align-items:center;gap:12px;flex-wrap:wrap;
}
.eyebrow::before{content:"";width:34px;height:1px;background:var(--accent)}
.hero h1{
  font-family:var(--font-display);
  font-size:clamp(56px,11.5vw,148px);
  font-weight:800;line-height:.96;letter-spacing:-.015em;
  margin:22px 0 8px;text-transform:uppercase;
}
.hero h1 .row2{display:block;color:transparent;-webkit-text-stroke:2px var(--ink);}
.hero h1 .row2 em{font-style:normal;color:var(--accent);-webkit-text-stroke:0}
.hero-def{
  max-width:760px;margin-top:34px;
  font-family:var(--font-serif);font-weight:700;
  font-size:clamp(19px,2.6vw,26px);line-height:1.75;
}
.hero-def .hl{background:linear-gradient(transparent 62%,rgba(222,74,23,.28) 62%)}
.hero-sub{max-width:680px;margin-top:18px;color:var(--muted);font-size:15.5px}
.hero-chips{display:flex;gap:12px;flex-wrap:wrap;margin-top:40px}
.chip{
  font-family:var(--font-mono);font-size:12.5px;letter-spacing:.04em;
  border:1px solid var(--line);background:var(--paper-2);
  padding:9px 16px;display:flex;align-items:center;gap:9px;
}
.chip b{color:var(--accent-deep);font-weight:600}
/* hero pipeline ticker */
.ticker-band{
  margin-top:72px;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);
  background:var(--paper-2);overflow:hidden;white-space:nowrap;position:relative;
}
.ticker{
  display:inline-block;padding:13px 0;
  font-family:var(--font-mono);font-size:12.5px;letter-spacing:.1em;color:var(--ink-soft);
  animation:tick 46s linear infinite;
}
.ticker span{margin:0 14px}
.ticker .arw{color:var(--accent)}
.ticker-band:hover .ticker{animation-play-state:paused}
@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
/* big background sup2 */
.hero-bg{
  position:absolute;right:-4%;top:4%;z-index:1;
  font-family:var(--font-display);font-weight:800;
  font-size:clamp(300px,42vw,620px);line-height:1;color:transparent;
  -webkit-text-stroke:1px rgba(26,32,28,.10);user-select:none;pointer-events:none;
}

/* ============================================================
   SECTION SCAFFOLD
   ============================================================ */
.sec{padding:clamp(76px,10vw,130px) 0;position:relative}
.sec-head{margin-bottom:clamp(40px,6vw,64px)}
.sec-no{
  font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;color:var(--accent-deep);
  display:flex;align-items:center;gap:12px;margin-bottom:16px;
}
.sec-no::after{content:"";flex:1;height:1px;background:var(--line)}
.sec h2{
  font-family:var(--font-serif);font-weight:900;
  font-size:clamp(30px,4.6vw,46px);line-height:1.3;letter-spacing:.01em;
}
.sec h2 .en{font-family:var(--font-display);font-weight:800;font-size:.82em;color:var(--accent);letter-spacing:0}
.sec-lede{max-width:720px;margin-top:16px;color:var(--muted);font-size:15.5px}

/* reveal */
.rv{opacity:0;transform:translateY(26px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.rv.in{opacity:1;transform:none}

/* ============================================================
   S1 — WHY: old vs new
   ============================================================ */
.vs{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--ink)}
@media(max-width:860px){.vs{grid-template-columns:1fr}}
.vs-col{padding:clamp(26px,4vw,44px)}
.vs-col.old{background:var(--paper-2);border-right:1px solid var(--ink)}
@media(max-width:860px){.vs-col.old{border-right:0;border-bottom:1px solid var(--ink)}}
.vs-col.new{background:var(--night);color:#EFEDE4}
.vs-tag{
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.16em;
  display:inline-block;padding:5px 12px;margin-bottom:26px;
}
.vs-col.old .vs-tag{border:1px solid var(--line);color:var(--muted)}
.vs-col.new .vs-tag{background:var(--accent);color:#fff}
.vs-item{display:flex;gap:16px;padding:18px 0;border-top:1px dashed var(--line)}
.vs-col.new .vs-item{border-top:1px dashed rgba(239,237,228,.2)}
.vs-col .vs-item:first-of-type{border-top:0;padding-top:0}
.vs-item .ico{flex:0 0 auto;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:15px}
.vs-col.old .ico{color:var(--faint)}
.vs-col.new .ico{color:var(--accent)}
.vs-item h4{font-size:16px;font-weight:700;margin-bottom:4px}
.vs-item p{font-size:14px;line-height:1.8;color:var(--muted)}
.vs-col.new .vs-item p{color:rgba(239,237,228,.68)}
.vs-flow{
  margin-top:26px;padding-top:20px;border-top:1px solid var(--line);
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.03em;color:var(--faint);
  line-height:2;
}
.vs-col.new .vs-flow{border-top:1px solid rgba(239,237,228,.2);color:rgba(239,237,228,.55)}
.vs-flow .x{color:var(--accent);}

/* ============================================================
   S2 — SIX PRINCIPLES
   ============================================================ */
.prin{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--ink);border:1px solid var(--ink)}
@media(max-width:1020px){.prin{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.prin{grid-template-columns:1fr}}
.p-card{background:var(--paper-2);padding:30px 28px 34px;position:relative;transition:background .3s var(--ease)}
.p-card:hover{background:#fff}
.p-card .no{
  font-family:var(--font-display);font-weight:800;font-size:44px;line-height:1;
  color:transparent;-webkit-text-stroke:1.5px var(--accent);margin-bottom:20px;
}
.p-card h3{font-family:var(--font-serif);font-weight:900;font-size:19px;line-height:1.5;margin-bottom:4px}
.p-card .sub-en{font-family:var(--font-mono);font-size:11.5px;letter-spacing:.06em;color:var(--accent-deep);display:block;margin-bottom:14px}
.p-card p{font-size:13.5px;line-height:1.9;color:var(--muted)}
.p-card .corner{position:absolute;top:10px;right:10px;width:8px;height:8px;border-top:1.5px solid var(--line);border-right:1.5px solid var(--line)}

/* ============================================================
   S3 — PIPELINE (dark)
   ============================================================ */
.sec.dark{
  background:var(--night);color:#EFEDE4;
  background-image:
    linear-gradient(rgba(239,237,228,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(239,237,228,.035) 1px,transparent 1px);
  background-size:36px 36px;
}
.sec.dark .sec-no{color:var(--accent)}
.sec.dark .sec-no::after{background:rgba(239,237,228,.16)}
.sec.dark .sec-lede{color:rgba(239,237,228,.62)}
.sec.dark h2 .en{color:var(--accent)}

.pipe{position:relative;margin-top:8px}
.pipe::before{
  content:"";position:absolute;left:27px;top:10px;bottom:10px;width:2px;
  background:linear-gradient(180deg,rgba(239,237,228,.14),rgba(239,237,228,.14) 78%,transparent);
}
.phase{position:relative;padding-left:0;margin-bottom:14px}
.phase-tag{
  position:relative;z-index:2;display:inline-flex;align-items:center;gap:10px;
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.18em;
  padding:7px 16px 7px 12px;margin:26px 0 18px;color:#fff;
}
.phase-tag .sq{width:8px;height:8px;background:#fff;opacity:.85;transform:rotate(45deg)}
.phase.ph-a .phase-tag{background:#3E4A42}
.phase.ph-b .phase-tag{background:var(--teal)}
.phase.ph-c .phase-tag{background:var(--accent)}
.phase.ph-d .phase-tag{background:var(--gold)}
.step{
  position:relative;display:grid;grid-template-columns:56px 1fr;gap:0 22px;
  padding:20px 0;
}
.step .node{
  position:relative;z-index:2;width:56px;height:56px;flex:0 0 auto;
  background:var(--night-2);border:1px solid rgba(239,237,228,.22);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--font-display);font-weight:800;font-size:19px;
  transition:border-color .3s var(--ease),transform .3s var(--ease);
}
.step:hover .node{transform:rotate(45deg)}
.step:hover .node span{transform:rotate(-45deg)}
.step .node span{display:block;transition:transform .3s var(--ease)}
.phase.ph-a .node{color:#B9C4BC}
.phase.ph-b .node{color:#5FBFA9;border-color:rgba(95,191,169,.4)}
.phase.ph-c .node{color:#FF7A45;border-color:rgba(255,122,69,.45)}
.phase.ph-d .node{color:#E0B54D;border-color:rgba(224,181,77,.4)}
.step .body{max-width:720px;padding-top:4px}
.step h4{
  font-size:18px;font-weight:700;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
}
.step h4 .en{font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;color:rgba(239,237,228,.58);font-weight:500}
.step p{margin-top:6px;font-size:14px;line-height:1.9;color:rgba(239,237,228,.66)}
.loopback{
  margin-top:30px;margin-left:78px;max-width:720px;
  border:1px dashed rgba(255,122,69,.5);padding:18px 22px;
  font-family:var(--font-mono);font-size:12.5px;letter-spacing:.04em;color:#FF9A6B;
  display:flex;gap:12px;align-items:center;
}
@media(max-width:640px){
  .step{grid-template-columns:44px 1fr;gap:0 14px}
  .step .node{width:44px;height:44px;font-size:16px}
  .pipe::before{left:21px}
  .loopback{margin-left:0}
}

/* ============================================================
   S4 — ROLES / THE LOOP
   ============================================================ */
.coach{
  border:1.5px solid var(--ink);background:var(--paper-2);
  padding:clamp(26px,4vw,42px);margin-bottom:36px;position:relative;
  display:grid;grid-template-columns:auto 1fr;gap:clamp(20px,4vw,44px);align-items:start;
}
@media(max-width:760px){.coach{grid-template-columns:1fr}}
.coach::before{
  content:"OS";position:absolute;top:-13px;right:22px;
  font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;
  background:var(--accent);color:#fff;padding:4px 12px;
}
.coach .role-big{
  font-family:var(--font-display);font-weight:800;font-size:clamp(28px,4vw,40px);line-height:1.1;
}
.coach .role-big small{display:block;font-family:var(--font-serif);font-weight:900;font-size:.52em;margin-top:8px;color:var(--ink-soft)}
.coach p{font-size:14.5px;color:var(--muted)}
.coach p b{color:var(--ink)}
.coach ul{list-style:none;margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px 24px}
@media(max-width:640px){.coach ul{grid-template-columns:1fr}}
.coach li{
  font-size:13.5px;color:var(--ink-soft);display:flex;gap:10px;align-items:baseline;
}
.coach li::before{content:"▸";color:var(--accent);font-family:var(--font-mono)}
.roles{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
@media(max-width:1020px){.roles{grid-template-columns:repeat(3,1fr)}}
@media(max-width:680px){.roles{grid-template-columns:repeat(2,1fr)}}
@media(max-width:440px){.roles{grid-template-columns:1fr}}
.r-card{
  border:1px solid var(--line);background:var(--paper-2);padding:22px 18px 24px;
  transition:transform .3s var(--ease),border-color .3s var(--ease);
}
.r-card:hover{transform:translateY(-4px);border-color:var(--accent)}
.r-card .glyph{
  width:34px;height:34px;border:1.5px solid var(--accent);color:var(--accent-deep);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);font-size:13px;font-weight:600;margin-bottom:16px;
  transform:rotate(45deg);
}
.r-card .glyph span{transform:rotate(-45deg)}
.r-card h4{font-size:15px;font-weight:700;line-height:1.5}
.r-card .en-name{display:block;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.05em;color:var(--accent-deep);margin:2px 0 10px}
.r-card p{font-size:12.5px;line-height:1.8;color:var(--muted)}
.loop-note{
  margin-top:28px;text-align:center;font-family:var(--font-mono);
  font-size:12.5px;letter-spacing:.08em;color:var(--muted);
}
.loop-note b{color:var(--accent-deep)}

/* ============================================================
   S5 — ASSETS
   ============================================================ */
.sec.assets{background:var(--paper-2)}
.assets-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ink);border:1px solid var(--ink)}
@media(max-width:1020px){.assets-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.assets-grid{grid-template-columns:1fr}}
.a-cell{background:var(--paper);padding:26px 24px 30px;transition:background .3s var(--ease)}
.a-cell:hover{background:#fff}
.a-cell .a-no{font-family:var(--font-mono);font-size:11px;color:var(--faint);letter-spacing:.1em}
.a-cell h4{font-family:var(--font-display);font-weight:700;font-size:17px;margin:12px 0 6px;letter-spacing:.01em}
.a-cell p{font-size:13px;line-height:1.8;color:var(--muted)}
.assets-warn{
  margin-top:34px;border-left:3px solid var(--accent);background:rgba(222,74,23,.06);
  padding:18px 24px;font-family:var(--font-serif);font-weight:700;font-size:16.5px;
}

/* ============================================================
   S6 — MEASURABLE DELIVERY
   ============================================================ */
.deliver-frame{border:1.5px solid var(--ink);background:var(--paper-2);padding:clamp(28px,5vw,56px)}
.deliver-kicker{
  font-family:var(--font-serif);font-weight:900;font-size:clamp(20px,3vw,27px);
  line-height:1.6;margin-bottom:36px;max-width:760px;
}
.deliver-kicker .strike{position:relative;white-space:nowrap;color:var(--faint)}
.deliver-kicker .strike::after{content:"";position:absolute;left:-2px;right:-2px;top:54%;height:2.5px;background:var(--accent)}
.qs{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:760px){.qs{grid-template-columns:1fr}}
.q{
  display:flex;gap:18px;align-items:flex-start;
  border:1px solid var(--line);background:var(--paper);padding:22px 24px;
  transition:border-color .3s var(--ease);
}
.q:hover{border-color:var(--accent)}
.q .qno{
  flex:0 0 auto;font-family:var(--font-display);font-weight:800;font-size:15px;
  width:38px;height:38px;border:1.5px solid var(--ink);display:flex;align-items:center;justify-content:center;
  background:var(--paper-2);
}
.q h4{font-size:16.5px;font-weight:700;line-height:1.6}
.q p{font-size:13px;color:var(--muted);margin-top:4px;line-height:1.8}

/* ============================================================
   FOOTER
   ============================================================ */
.foot{background:var(--night);color:#EFEDE4;padding:clamp(70px,9vw,110px) 0 46px;position:relative;overflow:hidden}
.foot .defbox{
  border:1px solid rgba(239,237,228,.22);padding:clamp(28px,5vw,52px);
  position:relative;background:var(--night-2);
}
.foot .defbox::before{
  content:"DEFINITION";position:absolute;top:-10px;left:26px;
  font-family:var(--font-mono);font-size:10.5px;letter-spacing:.24em;
  background:var(--accent);color:#fff;padding:3px 12px;
}
.foot .defbox p{
  font-family:var(--font-serif);font-weight:700;
  font-size:clamp(18px,2.6vw,24px);line-height:1.9;max-width:900px;
}
.foot .defbox .en{color:#FF9A6B}
/* accessibility: respect reduced-motion preference */
@media (prefers-reduced-motion: reduce){
  .ticker{animation:none}
  .rv{opacity:1;transform:none;transition:none}
  .progress{transition:none}
  .step:hover .node,.step:hover .node span,.r-card:hover{transform:none}
}

.byline{
  margin-top:36px;display:flex;align-items:baseline;gap:14px;
}
.byline::before{content:"";width:34px;height:1px;background:var(--accent);align-self:center}
.byline .by-name{font-family:var(--font-display);font-weight:700;font-size:16px;letter-spacing:.02em;color:#EFEDE4}
.byline .by-date{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;color:rgba(239,237,228,.58)}
.foot-meta{
  margin-top:44px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.08em;color:rgba(239,237,228,.58);
}
.foot-meta a{transition:color .2s var(--ease)}
.foot-meta a:hover{color:var(--accent)}
      `}</style>
      <noscript>
        <style>{`.rv{opacity:1;transform:none}`}</style>
      </noscript>

      <div className="progress" id="progress" ref={progressRef}></div>

      <header className="topbar">
        <div className="mark">
          <span className="dot"></span>VIBE TEAMING
        </div>
        <nav className="topnav">
          <a href="#why">WHY</a>
          <a href="#principles">六大原则</a>
          <a href="#pipeline">PIPELINE</a>
          <a href="#loop">团队 LOOP</a>
          <a href="#assets">资产沉淀</a>
          <a href="#delivery">交付验收</a>
        </nav>
        <Link className="site-link" href={URLS.coaching}>
          KENNYCHIEN.COM
        </Link>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg">VT</div>
        <div className="wrap">
          <div className="eyebrow rv">AI-NATIVE EXECUTION MODEL · 执行方法论 · FIELD MANUAL</div>
          <h1 className="rv">
            Vibe
            <span className="row2">
              Team<em>ing</em>
            </span>
          </h1>
          <p className="hero-def rv">
            把 <span className="en">Domain Experts</span>、<span className="en">Product Thinkers</span>、<span className="en">Engineers</span> 与{" "}
            <span className="en">Customer-facing Teams</span> 放进同一个 <span className="en">Loop</span>，在
            <span className="hl">教练式（Coached）、动手实战</span>的协作中，解决真实的客户问题。
          </p>
          <p className="hero-sub rv">
            目标不是“使用 AI 工具”，而是把集体的业务知识与执行能力，转化为<strong>经过验证（Validated）、可复用（Reusable）、可部署（Deployable）</strong>的 AI-native 解决方案。
          </p>
          <div className="hero-chips rv">
            <div className="chip">
              <b>×1</b> 团队 Loop
            </div>
            <div className="chip">
              <b>×6</b> 核心原则
            </div>
            <div className="chip">
              <b>×9</b> 步执行 Pipeline
            </div>
            <div className="chip">
              <b>×8</b> 类可复用资产
            </div>
          </div>
        </div>
        <div className="ticker-band">
          <div className="ticker" id="ticker">
            <TickerContent />
            <TickerContent />
          </div>
        </div>
      </section>

      {/* ============ S1 WHY ============ */}
      <section className="sec" id="why">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.01 — WHY VIBE TEAMING</div>
            <h2>
              不是换工具，
              <br />
              是换一种<span style={{ color: "var(--accent)" }}>执行方式</span>
            </h2>
            <p className="sec-lede">
              传统交付把战略、需求、设计、编码、交付切成互不相连的阶段；Vibe Teaming 用 LLM、AI Design Tools 与 Vibe Coding Workflows，把“理解问题”到“可运行方案”压缩进同一个高速循环。
            </p>
          </div>
          <div className="vs rv">
            <div className="vs-col old">
              <span className="vs-tag">BEFORE · 传统交付模式</span>
              <div className="vs-item">
                <div className="ico">✕</div>
                <div>
                  <h4>阶段割裂</h4>
                  <p>Strategy → Requirements → Design → Coding → Delivery 层层交接，每一次交接都在丢失客户语境。</p>
                </div>
              </div>
              <div className="vs-item">
                <div className="ico">✕</div>
                <div>
                  <h4>Brains 与 Hands 分离</h4>
                  <p>有人只负责“想”（brains），有人只负责“做”（hands），判断与执行永远不在同一个现场。</p>
                </div>
              </div>
              <div className="vs-item">
                <div className="ico">✕</div>
                <div>
                  <h4>内部想象驱动</h4>
                  <p>从内部的产品想象（product imagination）出发立项，做完才发现不是客户真正的痛。</p>
                </div>
              </div>
              <div className="vs-flow">
                STRATEGY ─ REQUIREMENTS ─ DESIGN ─ CODING ─ DELIVERY
                <br />· 线性 · 交接 · 失真 ·
              </div>
            </div>
            <div className="vs-col new">
              <span className="vs-tag">AFTER · VIBE TEAMING</span>
              <div className="vs-item">
                <div className="ico">◆</div>
                <div>
                  <h4>同一个 Loop</h4>
                  <p>判断、设计、构建、验证由同一组人连续完成，客户语境全程在场，不再逐层失真。</p>
                </div>
              </div>
              <div className="vs-item">
                <div className="ico">◆</div>
                <div>
                  <h4>LLM 加速执行</h4>
                  <p>用 LLM、AI Design Tools 与 Vibe Coding Workflows，大幅压缩从问题理解到可运行方案的周期。</p>
                </div>
              </div>
              <div className="vs-item">
                <div className="ico">◆</div>
                <div>
                  <h4>客户现场驱动</h4>
                  <p>输入是客户场景、VOC、Workflow 瓶颈、运营痛点、失效流程与可度量的业务结果——不是会议室里的想象。</p>
                </div>
              </div>
              <div className="vs-flow">
                PROBLEM <span className="x">→</span> DESIGN <span className="x">→</span> BUILD <span className="x">→</span> VALIDATE <span className="x">↻</span>
                <br />· 循环 · 同场 · 保真 ·
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ S2 PRINCIPLES ============ */}
      <section className="sec" id="principles" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.02 — SIX PRINCIPLES</div>
            <h2>
              六大原则 <span className="en">/ Operating Principles</span>
            </h2>
          </div>
          <div className="prin rv">
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">01</div>
              <h3>真实客户问题优先</h3>
              <span className="sub-en">REAL CUSTOMER PROBLEM FIRST</span>
              <p>起点是真实的客户之痛，而非内部产品想象。输入应当是客户场景、VOC（Voice of Customer）、Workflow 瓶颈、运营痛点、失效流程，以及可度量的业务结果。</p>
            </div>
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">02</div>
              <h3>Coaching 是操作系统</h3>
              <span className="sub-en">COACHING AS THE OPERATING SYSTEM</span>
              <p>资深成员不只是分派任务，而是带教团队：如何与 LLM 一起思考、如何结构化 Prompt、如何拆解问题、如何验证输出、如何把混乱的客户需求变成可执行的 AI Workflow。</p>
            </div>
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">03</div>
              <h3>Brain + Hands-on 合一</h3>
              <span className="sub-en">BRAIN + HANDS-ON POWER</span>
              <p>很多团队里，“brains” 只会说，“hands” 只会做。Vibe Teaming 把 Domain Experts、Solution Designers、FDEs、Product Engineers 与 AI Developers 放进同一个工作 Loop。</p>
            </div>
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">04</div>
              <h3>先 Vibe Design，再 Vibe Coding</h3>
              <span className="sub-en">VIBE DESIGN BEFORE VIBE CODING</span>
              <p>不要直接跳进编码。先完成场景框定（Scenario Framing）、Workflow 设计与 Agent/Task 拆解，做出 Prototype 对齐认知，再进入 Vibe Coding。</p>
            </div>
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">05</div>
              <h3>沉淀可复用资产</h3>
              <span className="sub-en">CAPTURE REUSABLE ASSETS</span>
              <p>每一次 Vibe Teaming 都必须留下可复用资产：Prompts、Workflows、Agent Patterns、Ontology Objects、Business Rules、Evaluation Cases、Demo Templates 与 Implementation Playbooks。</p>
            </div>
            <div className="p-card">
              <div className="corner"></div>
              <div className="no">06</div>
              <h3>可度量的交付</h3>
              <span className="sub-en">MEASURABLE DELIVERY</span>
              <p>最终检验不是“我们做了个很酷的东西”，而是：是否解决了客户问题？是否缩短了时间、降低了成本、减少了错误或人工依赖？能否复用？能否沉淀为产品能力？</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ S3 PIPELINE (dark) ============ */}
      <section className="sec dark" id="pipeline">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.03 — EXECUTION PIPELINE</div>
            <h2>
              九步执行 <span className="en">Pipeline</span>
            </h2>
            <p className="sec-lede">从客户问题到迭代闭环的完整序列。先 Vibe Design，后 Vibe Coding——顺序本身就是纪律。</p>
          </div>
          <div className="pipe rv">
            <div className="phase ph-a">
              <div className="phase-tag">
                <span className="sq"></span>PHASE A · 理解 UNDERSTAND
              </div>
              <div className="step">
                <div className="node">
                  <span>01</span>
                </div>
                <div className="body">
                  <h4>
                    客户问题 <span className="en">CUSTOMER PROBLEM</span>
                  </h4>
                  <p>从客户现场出发：客户场景、VOC、Workflow 瓶颈、运营痛点、失效流程，以及要改变的业务指标。问题定义不清，后面全部白做。</p>
                </div>
              </div>
            </div>

            <div className="phase ph-b">
              <div className="phase-tag">
                <span className="sq"></span>PHASE B · VIBE DESIGN
              </div>
              <div className="step">
                <div className="node">
                  <span>02</span>
                </div>
                <div className="body">
                  <h4>
                    场景框定 <span className="en">SCENARIO FRAMING</span>
                  </h4>
                  <p>把混乱的需求收敛为清晰的业务场景：谁、在什么流程里、卡在哪里、成功长什么样、用什么指标衡量。</p>
                </div>
              </div>
              <div className="step">
                <div className="node">
                  <span>03</span>
                </div>
                <div className="body">
                  <h4>
                    Workflow 设计 <span className="en">WORKFLOW DESIGN</span>
                  </h4>
                  <p>画出目标 Workflow：哪些环节由人完成、哪些交给 AI、系统之间如何衔接、数据从哪里来到哪里去。</p>
                </div>
              </div>
              <div className="step">
                <div className="node">
                  <span>04</span>
                </div>
                <div className="body">
                  <h4>
                    Agent / Task 拆解 <span className="en">AGENT / TASK DECOMPOSITION</span>
                  </h4>
                  <p>把 Workflow 拆成可执行的 Agent 与 Task 单元，明确每个单元的输入、输出、边界与验证方式。</p>
                </div>
              </div>
              <div className="step">
                <div className="node">
                  <span>05</span>
                </div>
                <div className="body">
                  <h4>
                    原型 <span className="en">PROTOTYPE</span>
                  </h4>
                  <p>用 AI Design Tools 快速做出可感知、可讨论的原型，先在团队与客户之间对齐认知，再投入工程。</p>
                </div>
              </div>
            </div>

            <div className="phase ph-c">
              <div className="phase-tag">
                <span className="sq"></span>PHASE C · VIBE CODING
              </div>
              <div className="step">
                <div className="node">
                  <span>06</span>
                </div>
                <div className="body">
                  <h4>
                    Vibe Coding 构建 <span className="en">BUILD WITH LLM WORKFLOWS</span>
                  </h4>
                  <p>在 LLM 协作下高速实现：资深工程师把关架构与验证标准，全员动手，代码与设计在同一节奏里推进。</p>
                </div>
              </div>
            </div>

            <div className="phase ph-d">
              <div className="phase-tag">
                <span className="sq"></span>PHASE D · 验证 VALIDATE
              </div>
              <div className="step">
                <div className="node">
                  <span>07</span>
                </div>
                <div className="body">
                  <h4>
                    验证 <span className="en">VALIDATION</span>
                  </h4>
                  <p>用真实数据与 Evaluation Cases 检验输出质量与业务效果；不达标就回到设计，而不是硬着头皮上线。</p>
                </div>
              </div>
              <div className="step">
                <div className="node">
                  <span>08</span>
                </div>
                <div className="body">
                  <h4>
                    客户演示 <span className="en">CUSTOMER DEMO</span>
                  </h4>
                  <p>拿到客户面前演示、收集真实反馈——检验标准来自客户现场，不是内部评审的自我感觉。</p>
                </div>
              </div>
              <div className="step">
                <div className="node">
                  <span>09</span>
                </div>
                <div className="body">
                  <h4>
                    迭代 <span className="en">ITERATION</span>
                  </h4>
                  <p>根据反馈快速迭代。每一轮循环都在沉淀 Prompts、Workflows、Patterns 等可复用资产，让下一轮更快。</p>
                </div>
              </div>
            </div>

            <div className="loopback rv">↻&nbsp;&nbsp;LOOP BACK — 回到 Scenario Framing，直到客户问题被真正解决</div>
          </div>
        </div>
      </section>

      {/* ============ S4 ROLES ============ */}
      <section className="sec" id="loop">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.04 — ONE LOOP, ALL HANDS</div>
            <h2>
              同一个 <span className="en">Loop</span> 里的人
            </h2>
            <p className="sec-lede">“动嘴的”与“动手的”不再分开。五种角色在同一个循环里协作，而 Coaching 像操作系统一样贯穿全程。</p>
          </div>

          <div className="coach rv">
            <div className="role-big">
              COACH<small>教练 · 贯穿全程</small>
            </div>
            <div>
              <p>
                <b>Coaching 不是一个环节，是整套方法的操作系统（Operating System）。</b>资深成员的职责不是分派任务，而是在实战中带教团队：
              </p>
              <ul>
                <li>如何与 LLM 一起思考（think with LLMs）</li>
                <li>如何结构化 Prompt</li>
                <li>如何拆解复杂问题</li>
                <li>如何验证 AI 的输出</li>
                <li>如何把混乱的客户需求变成可执行的 AI Workflow</li>
                <li>如何判断“做到什么程度才算好”</li>
              </ul>
            </div>
          </div>

          <div className="roles rv">
            <div className="r-card">
              <div className="glyph">
                <span>DE</span>
              </div>
              <h4>业务专家</h4>
              <span className="en-name">DOMAIN EXPERT</span>
              <p>带来行业纵深与客户语境，判断“这个问题值不值得解、解到什么程度才有价值”。</p>
            </div>
            <div className="r-card">
              <div className="glyph">
                <span>SD</span>
              </div>
              <h4>方案设计师</h4>
              <span className="en-name">SOLUTION DESIGNER</span>
              <p>把业务痛点翻译成 Scenario 与 Workflow，是业务语言与工程语言之间的桥。</p>
            </div>
            <div className="r-card">
              <div className="glyph">
                <span>FDE</span>
              </div>
              <h4>前线部署工程师</h4>
              <span className="en-name">FORWARD DEPLOYED ENGINEER</span>
              <p>驻扎客户现场，把方案在真实环境里落地跑通，把一线反馈带回 Loop。</p>
            </div>
            <div className="r-card">
              <div className="glyph">
                <span>PE</span>
              </div>
              <h4>产品工程师</h4>
              <span className="en-name">PRODUCT ENGINEER</span>
              <p>把经过验证的能力沉淀为产品化组件，让单次交付长成可复用的产品能力。</p>
            </div>
            <div className="r-card">
              <div className="glyph">
                <span>AI</span>
              </div>
              <h4>AI 开发者</h4>
              <span className="en-name">AI DEVELOPER</span>
              <p>构建 Agent、Prompt 与 Evaluation 体系，保证 AI 部分可控、可测、可迭代。</p>
            </div>
          </div>
          <div className="loop-note rv">
            BRAINS <b>×</b> HANDS — 判断与执行，在同一个现场
          </div>
        </div>
      </section>

      {/* ============ S5 ASSETS ============ */}
      <section className="sec assets" id="assets">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.05 — REUSABLE ASSETS</div>
            <h2>
              每一次协作，都要<span style={{ color: "var(--accent)" }}>留下资产</span>
            </h2>
            <p className="sec-lede">Vibe Teaming 的每一个 Session 都必须产出可复用资产——这是它区别于“办了一场 Workshop”的分水岭。</p>
          </div>
          <div className="assets-grid rv">
            <div className="a-cell">
              <div className="a-no">ASSET / 01</div>
              <h4>Prompts</h4>
              <p>经过实战验证的 Prompt 及其结构模式，可直接迁移到下一个场景。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 02</div>
              <h4>Workflows</h4>
              <p>可复用的业务 Workflow 定义：人机分工、环节衔接、数据流转。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 03</div>
              <h4>Agent Patterns</h4>
              <p>可迁移的 Agent 设计模式：拆解方式、协作结构、边界约定。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 04</div>
              <h4>Ontology Objects</h4>
              <p>沉淀下来的业务本体对象与关系，让业务知识成为可计算的结构。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 05</div>
              <h4>Business Rules</h4>
              <p>从客户现场显性化出来的业务规则，是 AI 决策的护栏。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 06</div>
              <h4>Evaluation Cases</h4>
              <p>质量验证用例集：什么样的输出算好，用什么数据来测。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 07</div>
              <h4>Demo Templates</h4>
              <p>面向客户的演示模板，让下一次 Demo 从 80 分起步。</p>
            </div>
            <div className="a-cell">
              <div className="a-no">ASSET / 08</div>
              <h4>Implementation Playbooks</h4>
              <p>实施打法手册：踩过的坑、走通的路，变成组织的肌肉记忆。</p>
            </div>
          </div>
          <div className="assets-warn rv">没有资产沉淀的 Vibe Teaming，只是又办了一场 Workshop。</div>
        </div>
      </section>

      {/* ============ S6 DELIVERY ============ */}
      <section className="sec" id="delivery">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="sec-no">SEC.06 — MEASURABLE DELIVERY</div>
            <h2>
              交付验收：四个问题 <span className="en">/ The Final Test</span>
            </h2>
          </div>
          <div className="deliver-frame rv">
            <p className="deliver-kicker">
              最终的检验标准不是 <span className="strike">“我们做了个很酷的东西”</span>，而是下面四个问题都能给出肯定回答：
            </p>
            <div className="qs">
              <div className="q">
                <div className="qno">Q1</div>
                <div>
                  <h4>是否解决了客户问题？</h4>
                  <p>回到最初定义的客户之痛与业务指标，用事实回答。</p>
                </div>
              </div>
              <div className="q">
                <div className="qno">Q2</div>
                <div>
                  <h4>是否缩短了时间、降低了成本、减少了错误或人工依赖？</h4>
                  <p>可度量的改善，而不是体验上的“感觉更好了”。</p>
                </div>
              </div>
              <div className="q">
                <div className="qno">Q3</div>
                <div>
                  <h4>能否复用到下一个客户？</h4>
                  <p>沉淀的资产与打法，能否让下一次交付更快、更稳。</p>
                </div>
              </div>
              <div className="q">
                <div className="qno">Q4</div>
                <div>
                  <h4>能否沉淀为产品能力？</h4>
                  <p>从一次性交付走向 Product Capability，让解决方案长进产品里。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="foot">
        <div className="wrap">
          <div className="defbox rv">
            <p>
              Vibe Teaming 是一种 AI-native 的交付模式——把 <span className="en">Domain Knowledge</span>、<span className="en">Product Design</span>、
              <span className="en">Engineering Execution</span> 与 <span className="en">LLM-powered Workflows</span> 结合，快速把真实的客户问题，转化为
              <strong>经过验证、可复用、可部署</strong>的 AI 解决方案。
            </p>
          </div>
          <div className="byline rv">
            <span className="by-name">By Kenny Chien</span>
            <span className="by-date">7/4/2026</span>
          </div>
          <div className="foot-meta">
            <span>VIBE TEAMING · AI-NATIVE EXECUTION MODEL</span>
            <span>PROBLEM → DESIGN → BUILD → VALIDATE ↻</span>
            <Link href={URLS.coaching}>KENNYCHIEN.COM / COACHING ↗</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
