import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mushroom Capital: Cozy 3D Idle Mushroom Game | Such Software",
  description:
    "Mushroom Capital is a cozy 3D idle and async-social game where you build and tend a living fungal ecosystem. Grow your colony, bank Capital, and prestige with Heirloom Spores. Coming to mobile, web, and desktop.",
  alternates: { canonical: "/products/mushroom-capital" },
  keywords: [
    "idle game",
    "cozy game",
    "mushroom game",
    "incremental game",
    "async social game",
    "tilt shift game",
    "mushroom capital",
  ],
  openGraph: {
    title: "Mushroom Capital: Tend a Living Fungal Ecosystem",
    description:
      "A cozy 3D idle and async-social game with a tilt-shift toybox aesthetic. Grow a colony, earn Capital, prestige with Heirloom Spores. Coming soon from Such Software.",
    type: "website",
    url: "/products/mushroom-capital",
  },
};

const faqs = [
  { q: "What is Mushroom Capital?", a: "A cozy 3D idle and async-social game. You build and tend a self-contained, living fungal ecosystem: a stylized, tilt-shift toybox that keeps growing while you're away. It's a calm, collect-and-prestige experience, not a hardcore optimizer." },
  { q: "What do you actually do?", a: "Grow and arrange your colony, keep the ecosystem healthy, and bank two currencies: Capital (the soft, moment-to-moment score) and Heirloom Spores (prestige you carry forward when you reset). The loop rewards curation and patience over grinding." },
  { q: "Is it multiplayer?", a: "It's async-social: your world is yours, but you connect with others between sessions. Cross-progression means one save follows you across mobile, web, and desktop." },
  { q: "What platforms?", a: "Mobile-first (iOS and Android), with web and desktop cross-progression. Built in Godot 4." },
  { q: "When is it out?", a: "A soft launch is planned for summer 2026, with a wider launch in September around the Kennett Square Mushroom Festival. Its home is mushroom.capital." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Mushroom Capital",
  url: "https://such.software/products/mushroom-capital",
  description:
    "A cozy 3D idle and async-social game where you build and tend a living fungal ecosystem, with a tilt-shift toybox aesthetic and cross-progression.",
  applicationCategory: "Game",
  genre: ["Simulation", "Casual", "Idle"],
  gamePlatform: ["iOS", "Android", "PC", "Web"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "A living fungal ecosystem", body: "Build and tend a self-contained colony that keeps growing while you're away. Curation and care matter more than clicking." },
  { title: "Two currencies, one calm loop", body: "Bank Capital as you grow, then prestige with Heirloom Spores to start richer. A tidy, legible economy with no dark patterns." },
  { title: "Tilt-shift toybox", body: "A stylized miniature aesthetic: everything reads like a warm, hand-built diorama you can turn in your fingers." },
  { title: "Async-social", body: "Your world is yours, but it's better with others between sessions: light, unpressured social hooks, not a leaderboard grind." },
  { title: "Cross-progression", body: "One save follows you across mobile, web, and desktop, so your colony is always where you are." },
];

export default function MushroomCapitalPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Mushroom Capital", path: "/products/mushroom-capital" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/mushroom-capital.png" alt="Mushroom Capital icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-1">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 leading-none">
              Mushroom Capital
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">Grow a colony. Bank Capital. Prestige with spores.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mushroom Capital is a cozy 3D idle game where you build and tend a living fungal
            ecosystem: a stylized, tilt-shift toybox that keeps growing while you&rsquo;re away. Bank
            Capital as you go, prestige with Heirloom Spores, and carry one save across mobile, web, and
            desktop. Its home is at{" "}
            <a href="https://mushroom.capital" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">mushroom.capital</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-orange-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-orange-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Engine:</strong> Godot 4 (Vulkan) with Rust (gdext) for the perf-critical client.</li>
            <li><strong>Server:</strong> self-hosted Nakama with TypeScript RPC modules and PostgreSQL.</li>
            <li><strong>Cross-progression:</strong> one account across mobile, web, and desktop.</li>
            <li><strong>Economy:</strong> a clean two-currency prestige loop: Capital and Heirloom Spores.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-orange-600 dark:text-orange-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">All Products</Link>
          <span>•</span>
          <a href="https://mushroom.capital" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">mushroom.capital</a>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
