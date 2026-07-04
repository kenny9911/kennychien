import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="kc-detail" style={{ minHeight: "55vh" }}>
        <p className="kc-detail-idx">/404</p>
        <h1 className="kc-detail-title">Page not found.</h1>
        <p className="kc-detail-sub">
          This page moved, or never shipped. Everything worth reading is one hop away.
        </p>
        <p style={{ marginTop: 40 }}>
          <Link className="kc-btn-primary" href="/">
            Back to the home page
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
