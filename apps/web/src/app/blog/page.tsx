import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Such Software",
  description: "News, updates, and technical articles from Such Software.",
  alternates: { canonical: "/blog" },
};

// For now, hardcoded posts. Can migrate to MDX/CMS later.
const posts = [
  {
    slug: "smirk-wallet-release",
    title: "Smirk Wallet v0.1.6",
    date: "2026-02-06",
    excerpt: "Non-custodial browser extension for social tipping with BTC, LTC, XMR, WOW, and GRIN. Now on GitHub, Chrome Web Store pending.",
    draft: false,
  },
  {
    slug: "website-relaunch-2026",
    title: "Website Relaunch",
    date: "2026-02-06",
    excerpt: "We rebuilt such.software from the ground up. Here is what we used and why.",
    draft: false,
  },
  {
    slug: "bauhaus-echo-launch",
    title: "Bauhaus Echo is Live",
    date: "2026-02-06",
    excerpt: "Our first mobile game is available on Android and iOS. A visual memory puzzle inspired by Bauhaus design.",
    draft: true,
  },
];

const publishedPosts = posts.filter((p) => !p.draft);

export default function BlogPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground mb-12">
          News, launches, and technical notes.
        </p>

        {publishedPosts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-6">
            {publishedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="glass-card hover:border-primary/30 transition-colors cursor-pointer">
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <h2 className="text-2xl font-bold mt-1 mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <MobileNav />
    </main>
  );
}
