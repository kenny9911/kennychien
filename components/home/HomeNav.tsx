/* Home-page fixed nav: trilingual anchor links + language switcher (port of navHtml). */

import { HREFS, type Lang, type Locale } from "@/lib/i18n";

const LANG_BUTTONS: ReadonlyArray<readonly [Lang, string]> = [
  ["en", "EN"],
  ["zh-CN", "简"],
  ["zh-TW", "繁"],
];

export default function HomeNav({
  t,
  lang,
  onSelectLang,
}: {
  t: Locale;
  lang: Lang;
  onSelectLang: (lang: Lang) => void;
}) {
  return (
    <nav className="kc-nav">
      <a
        className="kc-logo"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        KENNY CHIEN<b>.</b>
      </a>
      <div className="kc-nav-links">
        {t.nav.map((label, i) => (
          <a key={HREFS[i]} className="kc-nav-link" href={HREFS[i]}>
            {label}
          </a>
        ))}
      </div>
      <div className="kc-langs">
        {LANG_BUTTONS.map(([code, label]) => (
          <button
            key={code}
            className={"kc-lang" + (lang === code ? " is-active" : "")}
            onClick={() => onSelectLang(code)}
          >
            {label}
          </button>
        ))}
      </div>
      <a className="kc-nav-cta" href="#contact">
        {t.navContact}
      </a>
    </nav>
  );
}
