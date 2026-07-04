# kennychien.com

Personal site of Kenny Chien — enterprise AI consultant and educator for the agentic era (vibe coding, AI coding, agentic application development, FDE, agentic ontology).

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript (strict). Deployed on Vercel.

Design: print-editorial / Bauhaus art direction from the approved Claude Design handoff — warm paper, ink black, vermillion accent, geometric "agent loop" hero, hard offset shadows, marquee strip. The Vibe Teaming page keeps its own standalone field-manual design (signal orange, graph-paper texture), scoped so it can't leak into the rest of the site.

## Pages — every page is a real, shareable URL

| Route | Content |
|---|---|
| `/` | Trilingual home (EN / 简体 / 繁體 switcher, persists in `localStorage`) with all eight sections + Kenny.AI chat |
| `/consulting` | Consulting landing: services, methodology, technologies, use cases, trends |
| `/consulting/ai-application-launch` · `/agentic-ontology` · `/forward-deployed-engineering` | Service detail pages |
| `/coaching` | Coaching landing (4 offerings) |
| `/coaching/vibe-teaming` | **Vibe Teaming** — AI-native execution methodology (中文, standalone design) |
| `/coaching/executive-coaching` · `/vibe-coding-bootcamp` · `/team-workshops` | Coaching area pages |
| `/products` + 5 child pages | Product landing pages (honest pre-launch state, email CTAs) |
| `/ideas` + 4 essay pages | Ideabrowser-style idea explainers |
| `/podcast` | The Agentic Hour — YouTube-style episode card grid |
| `/blog` | Field notes landing; features the Token → Business Outcome essay |
| `/blogs/token_business_outcome_final_premium` | Legacy standalone essay (static file in `public/`, served via rewrite) |

## Structure

```
app/                    App Router routes (one folder per clean URL)
  layout.tsx            fonts, metadata template, globals.css
  page.tsx              home (server shell) → components/home/* (client)
  api/chat/route.ts     Kenny.AI endpoint (OpenRouter-backed)
  sitemap.ts robots.ts  generated /sitemap.xml + /robots.txt
  globals.css           kc- design system
components/             SiteNav, SiteFooter, Breadcrumb, JsonLd, DetailCta, ChatWidget, home/*
lib/site.ts             canonical URL map, schema.org Person, breadcrumb builder
lib/i18n.ts             trilingual home copy (typed)
public/blogs/           standalone blog artifacts
```

## SEO / GEO

- Unique title/description, exact canonical, OG/Twitter tags on every route (Next Metadata API)
- JSON-LD on every page: Person, Service, Course, Product/Book/SoftwareApplication, Article, PodcastSeries, Blog/BlogPosting, BreadcrumbList, FAQPage (only where visible FAQs exist)
- Answer-first openings, visible breadcrumbs, FAQ sections, dense internal cross-linking
- `robots.ts` explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended); full `sitemap.xml`
- Everything server-rendered — content is crawlable without JavaScript

## Run locally

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Deploy

Deploy to Vercel (`vercel`). Environment variables:

- `OPENROUTER_API_KEY` — required for Kenny.AI chat (key in local `.env`)
- `CHAT_MODEL` — optional, defaults to `anthropic/claude-sonnet-4.6`

## Notes / next steps

- Podcast episodes and most product CTAs are honest pre-launch placeholders — swap in real URLs as they exist
- Backend expansion planned; the chat route handler is the only server code today
- Pre-React static implementation is preserved in git history (commit `fd4f5b6`)
