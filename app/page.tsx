import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HomeClient from "@/components/home/HomeClient";
import { CONTACT_EMAIL, PERSON, SITE_NAME, SITE_URL, URLS } from "@/lib/site";

export const metadata: Metadata = {
  // `absolute` bypasses the "%s — Kenny Chien" layout template.
  title: {
    absolute: "Kenny Chien — Enterprise AI Consultant · Vibe Coding · Agentic Ontology",
  },
  description:
    "Kenny Chien helps enterprises ship AI that works — consulting, coaching, products, podcast and writing on vibe coding, AI coding, agentic application development, forward deployed engineering and agentic ontology.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kenny Chien — Enterprise AI Consultant",
    description:
      "Consulting, coaching and tools for the agentic era: vibe coding, AI coding, agentic apps, FDE, agentic ontology.",
    url: "/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        graph={[
          {
            ...PERSON,
            description:
              "Enterprise consultant and educator for the agentic era: vibe coding, AI coding, agentic application development, forward deployed engineering (FDE) and agentic ontology.",
            knowsAbout: [
              "Vibe Coding",
              "AI Coding",
              "Agentic Application Development",
              "Forward Deployed Engineering",
              "Agentic Ontology",
              "Enterprise AI",
            ],
            email: CONTACT_EMAIL,
            sameAs: [
              "https://x.com/kennychien",
              "https://www.linkedin.com/in/kennychien",
              "https://github.com/kennychien",
            ],
          },
          {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            inLanguage: ["en", "zh-Hans", "zh-Hant"],
          },
          {
            "@type": "PodcastSeries",
            name: "The Agentic Hour",
            url: SITE_URL + URLS.podcast,
            author: { "@type": "Person", name: "Kenny Chien" },
          },
        ]}
      />
      <HomeClient />
    </>
  );
}
