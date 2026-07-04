import Link from "next/link";

/** Fixed top nav for all subpages (the home page renders its own trilingual nav). */
export default function SiteNav() {
  return (
    <nav className="kc-nav">
      <Link className="kc-logo" href="/">
        KENNY CHIEN<b>.</b>
      </Link>
      <div className="kc-nav-links">
        <Link className="kc-nav-link" href="/#about">About</Link>
        <Link className="kc-nav-link" href="/consulting">Consulting</Link>
        <Link className="kc-nav-link" href="/products">Products</Link>
        <Link className="kc-nav-link" href="/coaching">Coaching</Link>
        <Link className="kc-nav-link" href="/ideas">Ideas</Link>
        <Link className="kc-nav-link" href="/podcast">Podcast</Link>
        <Link className="kc-nav-link" href="/blog">Blog</Link>
      </div>
      <Link className="kc-nav-cta" href="/#contact">Get in touch</Link>
    </nav>
  );
}
