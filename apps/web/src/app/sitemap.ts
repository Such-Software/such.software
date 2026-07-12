import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://such.software";

  // Stable content-update date for the static pages. Using `new Date()` here would stamp
  // every page as "modified now" on every build, which is noise that dilutes the freshness
  // signal. Bump this when the site's static content meaningfully changes. (Blog posts carry
  // their own per-post dates below.)
  const updated = new Date("2026-06-01");

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, lastModified: updated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/wownerogue`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/neroswap`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/webshops`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/custom-websites`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/smirk-wallet`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/bauhaus-echo`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/vegan-iq`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/suchoice`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products/such-moon-launch`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products/barns-and-neutrons`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/products/alpha-doc`, lastModified: updated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/products/decay-theory`, lastModified: updated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/products/bloomword`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/products/meatspace`, lastModified: updated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/products/mushroom-capital`, lastModified: updated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/services`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/commerce`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/games`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/crypto`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/education`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, lastModified: updated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/apps`, lastModified: updated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date + "T12:00:00") : updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
