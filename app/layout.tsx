import type { Metadata } from "next";
import "./globals.css";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400;1,6..72,500&family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Serif+SC:wght@400;600&family=Noto+Serif+TC:wght@400;600&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kennychien.com"),
  title: {
    default: "Kenny Chien — Enterprise AI Consultant · Vibe Coding · Agentic Ontology",
    template: "%s — Kenny Chien",
  },
  description:
    "Kenny Chien helps enterprises ship AI that works — consulting, coaching, products, podcast and writing on vibe coding, AI coding, agentic application development, forward deployed engineering and agentic ontology.",
  openGraph: { siteName: "Kenny Chien", type: "website" },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* React 19 hoists precedence-tagged stylesheets into <head> */}
        <link rel="stylesheet" href={FONTS_HREF} precedence="default" />
        {children}
      </body>
    </html>
  );
}
