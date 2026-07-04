import type { MetadataRoute } from "next";
import { SITE_URL, URLS } from "@/lib/site";

const LANDINGS: string[] = [
  URLS.consulting,
  URLS.coaching,
  URLS.products,
  URLS.ideas,
  URLS.podcast,
  URLS.blog,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-04");
  return Object.values(URLS).map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    priority: path === "/" ? 1 : LANDINGS.includes(path) ? 0.8 : 0.6,
  }));
}
