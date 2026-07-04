import { CONTACT_EMAIL } from "@/lib/site";

/** Ink CTA block that closes every landing/detail page. */
export default function DetailCta({
  title,
  body,
  subject,
}: {
  title: string;
  body: string;
  subject?: string;
}) {
  const href = `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <section className="kc-detail-cta">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <a className="kc-detail-cta-btn" href={href}>
        {CONTACT_EMAIL} →
      </a>
    </section>
  );
}
