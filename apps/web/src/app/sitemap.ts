import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://such.software";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/neroswap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/webshops`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/custom-websites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/smirk-wallet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/bauhaus-echo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/vegan-iq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/suchoice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products/wownero-moon-launch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/apps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date + "T12:00:00") : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
