import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://such.software";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/neroswap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/webshops`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/custom-websites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/smirk-wallet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/bauhaus-echo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/suchoice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products/wownero-moon-launch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/neroswap-aggregator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/crypto-checkout-infrastructure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/bauhaus-echo-launch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/smirk-wallet-release`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/website-relaunch-2026`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog/wownero-moon-launch-release`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
