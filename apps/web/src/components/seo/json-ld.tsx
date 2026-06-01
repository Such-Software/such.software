/**
 * JSON-LD helpers. `JsonLd` renders a structured-data <script>; the builders return
 * schema.org objects so pages can stay declarative. Server components only (no client JS).
 */
const SITE = "https://such.software";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Breadcrumb trail for a deep page, e.g. Home › Products › Neroswap. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

type SoftwareAppOpts = {
  name: string;
  path: string;
  description: string;
  /** schema.org applicationCategory, e.g. "GameApplication", "FinanceApplication". */
  category: string;
  operatingSystem: string;
  /** Price as a string; "0" for free. */
  price?: string;
  /** External play/download URL the offer points at (defaults to the on-site path). */
  offerUrl?: string;
  /** Optional store rating, rendered as AggregateRating when provided. */
  rating?: { value: string; count: string };
};

/** SoftwareApplication node: drives app/game rich results (and star ratings when rated). */
export function softwareAppLd(opts: SoftwareAppOpts) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    url: `${SITE}${opts.path}`,
    description: opts.description,
    applicationCategory: opts.category,
    operatingSystem: opts.operatingSystem,
    offers: {
      "@type": "Offer",
      price: opts.price ?? "0",
      priceCurrency: "USD",
      url: opts.offerUrl ?? `${SITE}${opts.path}`,
    },
    publisher: { "@type": "Organization", name: "Such Software" },
  };
  if (opts.rating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: opts.rating.value,
      ratingCount: opts.rating.count,
    };
  }
  return data;
}

/** BlogPosting node for an article page. */
export function articleLd(opts: { title: string; description: string; slug: string; date: string }) {
  const url = `${SITE}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.date,
    dateModified: opts.date,
    author: { "@type": "Organization", name: "Such Software" },
    publisher: {
      "@type": "Organization",
      name: "Such Software",
      logo: { "@type": "ImageObject", url: `${SITE}/images/branding/clean_dark_w_text.svg` },
    },
  };
}
