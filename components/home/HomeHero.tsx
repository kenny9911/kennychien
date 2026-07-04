/* Hero with the geometric agent-loop art (port of heroHtml). */

import type { Locale } from "@/lib/i18n";

export default function HomeHero({ t, onOpenChat }: { t: Locale; onOpenChat: () => void }) {
  return (
    <header className="kc-hero" id="top">
      <div>
        <p className="kc-kicker">
          <span className="kc-kicker-sq"></span>
          <span>{t.heroKicker}</span>
        </p>
        <h1 className="kc-hero-title">{t.heroL1}</h1>
        <p className="kc-hero-line2">
          {t.heroL2a} <b>{t.heroL2b}</b>
        </p>
        <p className="kc-hero-sub">{t.heroSub}</p>
        <div className="kc-hero-ctas">
          <a className="kc-btn-primary" href="#contact">
            {t.heroCta1} →
          </a>
          <button className="kc-btn-ghost" onClick={onOpenChat}>
            ✳ {t.heroCta2}
          </button>
        </div>
      </div>
      <div className="kc-art" aria-hidden="true">
        <div className="kc-art-ring"></div>
        <div className="kc-art-circle"></div>
        <div className="kc-art-hatch"></div>
        <div className="kc-art-square">
          <span>ONTOLOGY.GRAPH</span>
        </div>
        <div className="kc-art-dot"></div>
        <div className="kc-art-line"></div>
        <div className="kc-art-agent">
          <i></i>
          <span>AGENT_01</span>
        </div>
        <div className="kc-art-tool">TOOL_CALL ↺</div>
        <span className="kc-art-plus1">＋</span>
        <span className="kc-art-plus2">＋</span>
        <div className="kc-art-figline">PLAN → ACT → VERIFY → LEARN</div>
        <div className="kc-art-fig">FIG. 01 — THE AGENT LOOP</div>
      </div>
    </header>
  );
}
