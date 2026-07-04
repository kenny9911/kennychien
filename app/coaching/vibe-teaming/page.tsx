import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { PERSON, SITE_URL, URLS, breadcrumbLd } from "@/lib/site";
import VibeTeamingClient from "./VibeTeamingClient";

const META_DESCRIPTION =
  "Vibe Teaming — 一种 AI-native 的执行模式：让 Domain Experts、Product Thinkers、Engineers 与 Customer-facing Teams 在教练式、动手实战的协作中，快速把真实客户问题转化为经过验证、可复用、可部署的 AI 解决方案。";

const OG_DESCRIPTION =
  "一种 AI-native 的执行模式：让 Domain Experts、Product Thinkers、Engineers 与 Customer-facing Teams 在教练式、动手实战的协作中，快速把真实客户问题转化为经过验证、可复用、可部署的 AI 解决方案。";

export const metadata: Metadata = {
  title: { absolute: "Vibe Teaming · AI-native 执行方法论 · Kenny Chien" },
  description: META_DESCRIPTION,
  alternates: { canonical: "/coaching/vibe-teaming" },
  openGraph: {
    title: "Vibe Teaming · AI-native 执行方法论",
    description: OG_DESCRIPTION,
    url: "/coaching/vibe-teaming",
    type: "website",
    locale: "zh_CN",
  },
};

export default function VibeTeamingPage() {
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "Service",
            name: "Vibe Teaming",
            serviceType: "AI-native team execution methodology and coaching",
            url: SITE_URL + URLS.vibeTeaming,
            inLanguage: "zh-CN",
            description: OG_DESCRIPTION,
            provider: PERSON,
          },
          breadcrumbLd([
            ["Kenny Chien", "/"],
            ["Coaching", "/coaching"],
            ["Vibe Teaming", "/coaching/vibe-teaming"],
          ]),
        ]}
      />
      <VibeTeamingClient />
    </>
  );
}
