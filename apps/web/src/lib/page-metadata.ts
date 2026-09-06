import type { Metadata } from "next";

/**
 * The site's social card. Declared once so a page cannot forget it.
 */
export const DEFAULT_OG_IMAGE = "/images/branding/OG_banner_v2_light.png";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Canonical path, root-relative and leading-slashed: "/about". */
  path: string;
  /** Defaults to the site card. Pass a path here, or omit it entirely on a route that ships
   *  its own `opengraph-image.tsx`, which Next attaches by file convention. */
  image?: string | null;
  type?: "website" | "article";
  /** Title for the social card, when the tab title is too long or too keyworded to share well. */
  socialTitle?: string;
  /** Description for the social card. A search snippet and a shared link are read in different
   *  places by different people, so several pages already word them differently. */
  socialDescription?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Build a page's metadata so the social card survives.
 *
 * Next merges metadata shallowly: a page that exports `openGraph: { title, description }`
 * REPLACES the parent's whole `openGraph` object, image included. Every page here wants its own
 * title, so every page was writing that block by hand, and seventeen of them dropped the card on
 * the way through. Twelve had no `opengraph-image.tsx` to fall back on, so they shared to Slack,
 * iMessage and LinkedIn as a bare grey rectangle.
 *
 * The fix is not to remember harder. It is to make the block impossible to write incompletely:
 * pass the parts that differ, and the parts that must not go missing are filled in here.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  socialTitle,
  socialDescription,
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const cardTitle = socialTitle ?? title;
  const cardDescription = socialDescription ?? description;
  // `null` is a route saying "I have my own opengraph-image.tsx"; omitting the key entirely is
  // what lets Next's file convention supply it, whereas an empty array would suppress it.
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: "Such Software" }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: cardTitle,
      description: cardDescription,
      type,
      url: path,
      siteName: "Such Software",
      ...(images ? { images } : {}),
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: cardTitle,
      description: cardDescription,
      ...(image ? { images: [image] } : {}),
    },
  };
}
