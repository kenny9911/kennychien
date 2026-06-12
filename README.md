# kennychien.com

Personal site of Kenny Chien — enterprise AI consultant and educator for the agentic era (vibe coding, AI coding, agentic application development, FDE, agentic ontology).

Implemented from the approved Claude Design handoff (`Kennychien.com.dc.html`): print-editorial / Bauhaus art direction — warm paper, ink black, vermillion accent, geometric "agent loop" hero, hard offset shadows, marquee strip.

## Features

- **8 home sections**: hero/about, consulting (hover-invert rows), products, coaching (ink band), ideas, podcast, blog, contact (vermillion finale)
- **Trilingual**: working EN / 简体 / 繁體 switcher — all copy translated, font stacks swap to proper SC/TC, choice persists in `localStorage`, page title updates per language
- **Consulting detail pages**: `#/consulting/launch`, `#/consulting/ontology`, `#/consulting/fde` — full editorial layouts (thesis, pull-quote, principles, engagement phases, outcomes, email CTA), deep-linkable via hash routing
- **Kenny.AI chat** (✳ button, bottom right): live assistant briefed on Kenny's services, replies in the active language; backed by `api/chat.js`
- **SEO/GEO**: semantic markup, meta description, canonical + hreflang links, JSON-LD (Person, WebSite, PodcastSeries)
- Contact email is composed at runtime so email-obfuscation rewriters can't mangle the mailto link

## Structure

```
index.html          static head (SEO/meta/fonts) + app shell
assets/styles.css   design system + responsive breakpoints
assets/i18n.js      all trilingual copy (extracted verbatim from the design)
assets/app.js       rendering, language switching, hash routing, chat
api/chat.js         Kenny.AI serverless endpoint (Vercel-style, OpenRouter-backed)
blogs/              standalone blog artifacts
```

No build step — plain HTML/CSS/JS.

## Run locally

```sh
# static site only (chat shows its graceful error message)
python3 -m http.server 8080

# with the chat endpoint
vercel dev
```

## Deploy

Deploy to Vercel (or any static host + one serverless function):

```sh
vercel
```

Set environment variables in the Vercel project:

- `OPENROUTER_API_KEY` — required for Kenny.AI chat (key already in local `.env`)
- `CHAT_MODEL` — optional, defaults to `anthropic/claude-sonnet-4.6`

## Intentional deviations from the design prototype

- Responsive breakpoints below ~1080px (the prototype was only verified at ≥ ~920px)
- `:focus-visible` vermillion outline and a `prefers-reduced-motion` block that stills the marquee/ring/pulse animations — accessibility hardening
- The chat input is focused when the panel is opened (user-initiated dialog focus)
- Detail pages live at hash routes (`#/consulting/…`) so they are deep-linkable and the back button works
- Detail-page visits append the page name to `document.title`

## Notes / next steps

- Episode, blog-post, and product copy is the approved placeholder draft from the design — swap in real material as it exists
- Social links and product CTAs are visual-only until real URLs exist
- A headshot in the about section would strengthen it (per the design notes)
