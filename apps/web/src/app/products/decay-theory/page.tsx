import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decay Theory: Erwin's Atomic Adventure | Such Software",
  description: "Decay Theory is a side-scrolling platformer where the world decays atom by atom in real time. Play Erwin, a quantum cat, and learn real nuclear physics. In development.",
  alternates: { canonical: "/products/decay-theory" },
  keywords: [
    "platformer",
    "physics platformer",
    "nuclear physics game",
    "indie game",
    "decay theory",
    "Erwin atomic adventure",
  ],
  openGraph: {
    title: "Decay Theory: Erwin's Atomic Adventure",
    description: "Watch the ground dissolve beneath your feet, atom by atom. A platformer that teaches real nuclear physics. In development.",
    type: "website",
    url: "/products/decay-theory",
  },
};

const faqs = [
  { q: "What is Decay Theory?", a: "A 2D side-scrolling platformer where the entire world is made of individual atoms undergoing radioactive decay in real time. You don't see platforms vanish in bulk — you watch the ground dissolve atom by atom beneath your feet." },
  { q: "Who is Erwin?", a: "Erwin is a quantum-coherent cat — a nod to Schrödinger — whose body is itself a particle system. Health is 'quantum coherence,' shown as particle density: a healthy Erwin is a tight cloud; near death, a ghostly shimmer." },
  { q: "Does it actually teach physics?", a: "Yes, through mechanics rather than lectures. Decay modes, half-lives, decay chains, fission, and reactor control are things you feel. Isotopes use real half-lives and color coding." },
  { q: "How is it released?", a: "Episode 1, 'Ground State,' is a free vertical slice — no ads, no IAP. The full game (more zones and powers) unlocks via a single one-time purchase." },
  { q: "When is it out?", a: "Episode 1 is the current milestone, targeting iOS and Android first, with a desktop (Steam) port later. Follow Such Software for the launch." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Decay Theory: Erwin's Atomic Adventure",
  alternateName: "Decay Theory",
  url: "https://such.software/products/decay-theory",
  description:
    "A side-scrolling platformer where the world is simulated atom by atom, decaying in real time. Play Erwin, a quantum cat, and learn real nuclear physics.",
  applicationCategory: "Game",
  genre: ["Platformer", "Educational", "Indie"],
  gamePlatform: ["iOS", "Android", "PC"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "The world decays as you watch", body: "Every tile is thousands of simulated atoms with a real decay probability. Platforms erode into swiss cheese and crumble under your feet — stochastic, beautiful, and deadly." },
  { title: "Quantum powers", body: "Observation collapses a wave function to stabilize ground; Time Rewind undoes a fatal step. Later powers — superposition, entanglement, tunneling — each teach a real concept." },
  { title: "Erwin, a living particle system", body: "Your cat is rendered as 2,000+ particles. Coherence is health: take damage and Erwin literally comes apart at the seams." },
  { title: "Real isotope data", body: "Isotopes carry authentic half-lives and decay chains, color-coded by family. The Geiger-counter audio tempo tracks the local decay rate." },
  { title: "Tight, skill-based platforming", body: "Precise tilt-and-touch controls, checkpoints, and speedrun-friendly level design. A real platformer, not a quiz with jumps." },
  { title: "Premium, not predatory", body: "Free Episode 1, one-time unlock for the rest. No ads, no loot boxes, no energy systems, no tracking." },
];

export default function DecayTheoryPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Decay Theory", path: "/products/decay-theory" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/decay-theory.svg" alt="Decay Theory icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-cyan-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-1">
              In Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 leading-none">
              Decay Theory
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">Watch the ground dissolve beneath your feet. Atom by atom.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Decay Theory is a hard-sci-fi platformer where the entire world is composed of individual
            simulated atoms decaying in real time. You play Erwin, a quantum cat navigating a world that
            is literally evaporating at the subatomic level — and you learn real nuclear physics by
            feeling it, not by reading it.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-cyan-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-cyan-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Architecture:</strong> Godot renders; a Rust core runs 100% of the atom simulation.</li>
            <li><strong>Performance:</strong> tens of thousands of active, decaying atoms at a smooth frame rate on mid-range phones.</li>
            <li><strong>Powers:</strong> quantum mechanics turned into verbs — observation, time rewind, and more.</li>
            <li><strong>Platforms:</strong> iOS and Android first, desktop (Steam) to follow.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-cyan-600 dark:text-cyan-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">All Products</Link>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">Get notified / Feedback</Link>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
