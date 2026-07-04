"use client";

/* Home page client shell — faithful port of assets/app.js:
   language state (localStorage 'kc_lang', default 'en'), applyLang() side effects
   (<html lang>, font-stack CSS vars, document.title), the Kenny.AI chat wiring,
   and a back-compat redirect for the old #/consulting/* hash routes. */

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { I18N, LANG_STORAGE_KEY, TITLES, isLang, type Lang } from "@/lib/i18n";
import { URLS } from "@/lib/site";
import ChatWidget from "@/components/ChatWidget";
import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import HomeSections from "@/components/home/HomeSections";

const LEGACY_HASH_ROUTES: Record<string, string> = {
  launch: URLS.consultingLaunch,
  ontology: URLS.consultingOntology,
  fde: URLS.consultingFde,
};

export default function HomeClient() {
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>("en");
  const [chatOpen, setChatOpen] = useState(false);

  // Back-compat: the old SPA served consulting details at #/consulting/<key>.
  useEffect(() => {
    const m = window.location.hash.match(/^#\/consulting\/(launch|ontology|fde)$/);
    if (m) {
      const target = LEGACY_HASH_ROUTES[m[1]];
      if (target) router.replace(target);
    }
  }, [router]);

  // Restore the persisted language (same key + default as app.js).
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* localStorage unavailable — stay on 'en' */
    }
  }, []);

  // applyLang(): <html lang>, font-stack CSS variables, document.title.
  useEffect(() => {
    const root = document.documentElement;
    const tw = lang === "zh-TW";
    const sans = tw ? "'Noto Sans TC','Noto Sans SC'" : "'Noto Sans SC','Noto Sans TC'";
    const serif = tw ? "'Noto Serif TC','Noto Serif SC'" : "'Noto Serif SC','Noto Serif TC'";
    root.lang = lang;
    root.style.setProperty("--fd", "'Archivo'," + sans + ",sans-serif");
    root.style.setProperty("--fb", "'Archivo'," + sans + ",sans-serif");
    root.style.setProperty("--fm", "'IBM Plex Mono'," + sans + ",monospace");
    root.style.setProperty("--fs", "'Newsreader'," + serif + ",Georgia,serif");
    document.title = TITLES[lang];
    return () => {
      // Restore the stylesheet defaults when leaving the home page.
      root.lang = "en";
      root.style.removeProperty("--fd");
      root.style.removeProperty("--fb");
      root.style.removeProperty("--fm");
      root.style.removeProperty("--fs");
    };
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    setLangState(l);
  }, []);

  const t = I18N[lang];

  return (
    <>
      <HomeNav t={t} lang={lang} onSelectLang={setLang} />
      <HomeHero t={t} onOpenChat={() => setChatOpen(true)} />
      <HomeSections t={t} />
      <ChatWidget lang={lang} open={chatOpen} onOpenChange={setChatOpen} />
    </>
  );
}
