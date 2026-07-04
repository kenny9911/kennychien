import Link from "next/link";

/** Visible breadcrumb trail. Pass [label, href] pairs; the last item is the current page (no href). */
export default function Breadcrumb({ items }: { items: Array<[string, string?]> }) {
  return (
    <p className="kc-crumb">
      {items.map(([label, href], i) => (
        <span key={label + i}>
          {i > 0 && " / "}
          {href ? <Link href={href}>{label}</Link> : label}
        </span>
      ))}
    </p>
  );
}
