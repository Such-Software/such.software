import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Such Software",
  description: "News, updates, and technical articles from Such Software.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Such Software",
    description: "News, updates, and technical articles from Such Software.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground mb-8">
          News, launches, and technical notes.
        </p>

        {/* Animated accent */}
        <div className="flex justify-center mb-12 motion-reduce:hidden">
          <img
            src="/images/animations/anim_type_v4_light.svg"
            alt=""
            aria-hidden="true"
            className="w-24 h-24 opacity-60 block dark:hidden"
          />
          <img
            src="/images/animations/anim_type_v4.svg"
            alt=""
            aria-hidden="true"
            className="w-24 h-24 opacity-60 hidden dark:block"
          />
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="glass-card hover:border-primary/30 transition-colors cursor-pointer">
                  <time className="text-sm text-muted-foreground">{post.dateDisplay}</time>
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
