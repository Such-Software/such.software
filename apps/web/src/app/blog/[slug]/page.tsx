import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  StoreButtons,
  VeganIqStoreButtons,
  SuchoiceStoreButtons,
  BauhausEchoStoreButtons,
} from "@/components/store-buttons";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Such Software Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${slug}`,
      siteName: "Such Software",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <article id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Blog
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <time className="text-sm text-muted-foreground">{post.dateDisplay}</time>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{post.title}</h1>
            {post.excerpt && (
              <p className="text-muted-foreground mt-3">{post.excerpt}</p>
            )}
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={{
              StoreButtons,
              VeganIqStoreButtons,
              SuchoiceStoreButtons,
              BauhausEchoStoreButtons,
            }} />
          </div>
        </div>
      </article>
      <MobileNav />
    </main>
  );
}
