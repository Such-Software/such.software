import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomword: Daily Word Game with a Living Tree | Such Software",
  description:
    "Bloomword is a daily word game where everyone gets the same letters and every word you find grows a living 3D typographic tree. Five biomes, streaks, and a bloom to share. Coming to iOS and Android.",
  alternates: { canonical: "/products/bloomword" },
  keywords: [
    "daily word game",
    "word puzzle game",
    "typography game",
    "3d word game",
    "word tree game",
    "wordle alternative",
    "bloomword",
  ],
  openGraph: {
    title: "Bloomword: Find the Day's Words, Grow a Living Tree",
    description:
      "A daily word game where every word you find grows a biome-specific, living 3D typographic tree. Coming to iOS and Android from Such Software.",
    type: "website",
    url: "/products/bloomword",
  },
};

const faqs = [
  { q: "What is Bloomword?", a: "A daily word game. Everyone gets the same set of letters each day and races to find words before the sunset, and every valid word you find grows a living 3D tree made of typography. It is designed as a calm daily habit: find your words, watch your tree bloom, keep your streak." },
  { q: "How does the tree work?", a: "Each word you find sprouts new growth on a 3D typographic tree rendered by our in-house typograph-engine. The tree's look changes with the day's biome, so your finished board is both a score and a little piece of generative art you can share." },
  { q: "Is it the same puzzle for everyone?", a: "Yes. Like the best daily games, the letters are shared worldwide each day, so leaderboards and streaks are apples-to-apples. Results are server-replayed for fairness." },
  { q: "Is it free?", a: "Yes, free to play, supported by light ads and optional in-app purchases. A privacy-conscious build is a priority." },
  { q: "What platforms will it be on?", a: "Built in Godot for iOS and Android. It is in final pre-launch polish (store review); follow Such Software for the release date." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Bloomword",
  url: "https://such.software/products/bloomword",
  description:
    "A daily word game where everyone gets the same letters and every word you find grows a living 3D typographic tree. Five biomes, streaks, and a bloom to share.",
  applicationCategory: "Game",
  genre: ["Word", "Puzzle", "Casual"],
  gamePlatform: ["iOS", "Android"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "One shared daily puzzle", body: "Everyone gets the same letters each day and races the sunset. Server-replayed results keep streaks and leaderboards honest." },
  { title: "Words become a living tree", body: "Every word you find grows a 3D typographic tree, rendered in real time by our in-house typograph-engine. Your finished board is a shareable piece of generative art." },
  { title: "Five biomes", body: "Forest, desert, mushroom, kelp, and prairie; each biome gives the day's tree its own palette and character, so no two blooms look alike." },
  { title: "Built for the daily habit", body: "Streaks and biome collections reward showing up. It is a calm, one-a-day ritual, not an attention trap." },
  { title: "Play with anyone", body: "A shared daily seed and Nakama-backed leaderboards mean you can compare with friends or the whole world on the exact same board." },
  { title: "Free and privacy-conscious", body: "Free to play with light ads and optional purchases, built to respect your data." },
];

export default function BloomwordPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Bloomword", path: "/products/bloomword" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/bloomword.svg" alt="Bloomword icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-green-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-green-600 dark:text-green-400 mb-1">
              Now Live
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 leading-none">
              Bloomword
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">Find the day&rsquo;s words. Grow a living tree.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bloomword is a daily word game with a twist you can watch grow. Everyone gets the same
            letters each day and races the sunset to find words, and every word you find sprouts new
            growth on a living 3D typographic tree. Keep your streak, collect the biomes, and share the
            bloom you grew today. It is live at{" "}
            <a href="https://bloomword.earth" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">bloomword.earth</a>{" "}
            and coming to iOS and Android.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-green-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-green-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Engine:</strong> Godot 4 with a Rust GDExtension, one codebase for iOS and Android.</li>
            <li><strong>The tree:</strong> a custom typograph-engine renders words as living 3D type in real time.</li>
            <li><strong>Fair daily play:</strong> a shared daily seed with Nakama-backed, server-replayed leaderboards.</li>
            <li><strong>Free to play:</strong> light ads and optional in-app purchases, built privacy-first.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-green-600 dark:text-green-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">All Products</Link>
          <span>•</span>
          <a href="https://bloomword.earth" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">bloomword.earth</a>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
