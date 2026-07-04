/* Site-wide constants: canonical URL map, structured-data building blocks. */

/* www is the primary host in the Vercel domain config (apex 308s to it) — canonicals must match. */
export const SITE_URL = "https://www.kennychien.com";
export const SITE_NAME = "Kenny Chien";
export const CONTACT_EMAIL = "kenny.chien@gmail.com";

/** schema.org Person node used as author/provider across the site. */
export const PERSON = {
  "@type": "Person",
  name: "Kenny Chien",
  url: SITE_URL,
  jobTitle: "Enterprise AI Consultant",
} as const;

/** Canonical clean-URL map — the single source of truth for internal links & the sitemap. */
export const URLS = {
  home: "/",
  consulting: "/consulting",
  consultingLaunch: "/consulting/ai-application-launch",
  consultingOntology: "/consulting/agentic-ontology",
  consultingFde: "/consulting/forward-deployed-engineering",
  coaching: "/coaching",
  vibeTeaming: "/coaching/vibe-teaming",
  executiveCoaching: "/coaching/executive-coaching",
  bootcamp: "/coaching/vibe-coding-bootcamp",
  teamWorkshops: "/coaching/team-workshops",
  products: "/products",
  playbook: "/products/vibe-coding-playbook",
  ontologyCanvas: "/products/ontology-canvas",
  launchChecklist: "/products/agent-launch-checklist",
  deepAgents: "/products/deep-agents",
  ontologyGenerator: "/products/ontology-generator",
  ideas: "/ideas",
  ideaSchema: "/ideas/ontology-is-the-new-schema",
  ideaOrchestration: "/ideas/orchestration-over-prompting",
  ideaFde: "/ideas/the-fde-mindset",
  ideaSlop: "/ideas/slop-is-a-choice",
  podcast: "/podcast",
  blog: "/blog",
  tokenEssay: "/blogs/token_business_outcome_final_premium",
} as const;

/** Build a schema.org BreadcrumbList from [name, path] pairs (last item = current page, no URL). */
export function breadcrumbLd(items: Array<[string, string?]>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      ...(path ? { item: SITE_URL + (path === "/" ? "/" : path) } : {}),
    })),
  };
}
