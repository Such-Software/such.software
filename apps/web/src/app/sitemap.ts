import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { pillars } from "@/lib/services";
import { staticRoutes } from "@/lib/routes";

/**
 * Per-route ranking. Only the routes that differ from the default appear here, so this is a
 * short table of opinions rather than a second copy of the site map. A route absent from it
 * is still in the sitemap; it just ranks at the default.
 */
const RANK: Record<
  string,
  {
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority: number;
  }
> = {
  "/": { changeFrequency: "weekly", priority: 1.0 },
  "/products": { changeFrequency: "weekly", priority: 0.9 },
  "/games": { changeFrequency: "weekly", priority: 0.9 },
  "/services": { changeFrequency: "monthly", priority: 0.9 },
  "/blog": { changeFrequency: "weekly", priority: 0.8 },
  "/about": { changeFrequency: "monthly", priority: 0.7 },
  "/apps": { changeFrequency: "monthly", priority: 0.5 },
  "/support": { changeFrequency: "monthly", priority: 0.5 },
  "/privacy": { changeFrequency: "yearly", priority: 0.3 },
  "/privacy/shops": { changeFrequency: "yearly", priority: 0.3 },
  "/terms": { changeFrequency: "yearly", priority: 0.3 },
};

/** Legal pages change rarely and rank low wherever they sit in the tree. */
function rankFor(route: string) {
  if (RANK[route]) return RANK[route];
  if (/\/(privacy|terms)$/.test(route)) {
    return { changeFrequency: "yearly" as const, priority: 0.3 };
  }
  if (route.startsWith("/services/"))
    return { changeFrequency: "monthly" as const, priority: 0.8 };
  if (route.startsWith("/products/"))
    return { changeFrequency: "weekly" as const, priority: 0.8 };
  return { changeFrequency: "monthly" as const, priority: 0.5 };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://such.software";

  // Stable content-update date for the static pages. Using `new Date()` here would stamp
  // every page as "modified now" on every build, which is noise that dilutes the freshness
  // signal. Bump this when the site's static content meaningfully changes. (Blog posts carry
  // their own per-post dates below.)
  const updated = new Date("2026-11-18");

  const staticPages: MetadataRoute.Sitemap = staticRoutes().map((route) => ({
    url: route === "/" ? base : `${base}${route}`,
    lastModified: updated,
    ...rankFor(route),
  }));

  // The service pillars are a dynamic segment, so the tree cannot see them: like blog posts,
  // their URLs come from the data that generates them.
  const pillarPages: MetadataRoute.Sitemap = pillars.map((pillar) => ({
    url: `${base}/services/${pillar.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date + "T12:00:00") : updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...pillarPages, ...blogPosts];
}
