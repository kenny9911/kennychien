import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // legacy standalone blog artifact keeps its shareable clean URL
      {
        source: "/blogs/token_business_outcome_final_premium",
        destination: "/blogs/token_business_outcome_final_premium.html",
      },
    ];
  },
  async redirects() {
    return [
      // the Vibe Teaming page was briefly referenced as services/vibe-teaming
      {
        source: "/services/vibe-teaming",
        destination: "/coaching/vibe-teaming",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
