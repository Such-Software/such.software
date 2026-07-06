import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meatspace: A Deduction Game After the Upload | Such Software",
  description:
    "Meatspace is a deduction game set in the ruins of the Ingestion: humanity's failed mass upload into the Lattice. Reconstruct a lost person from fragments, through a living meat-vs-cyber crossfade. In development.",
  alternates: { canonical: "/products/meatspace" },
  keywords: [
    "deduction game",
    "narrative mystery game",
    "mind upload game",
    "sci-fi horror game",
    "reconstruction game",
    "multiplayer deduction",
    "meatspace",
  ],
  openGraph: {
    title: "Meatspace: Find Who You Lost in the Wreck of the Upload",
    description:
      "A deduction game in the ruins of a failed mass mind-upload, with a living meat-vs-cyber crossfade and an optional multiplayer mode. In development by Such Software.",
    type: "website",
    url: "/products/meatspace",
  },
};

const faqs = [
  { q: "What is Meatspace?", a: "A deduction game set after the Ingestion: humanity's failed attempt to upload itself en masse into a digital substrate called the Lattice. You sift through the fragments of the dead to reconstruct one specific lost person, and the way you piece them together shapes an ending you won't fully understand until you reach it." },
  { q: "What is the Ingestion?", a: "The fiction's central catastrophe: the mass upload that was supposed to save everyone and instead left a ruin of half-copied minds. The game lives in that wreckage: part meat, part cyber, neither settled." },
  { q: "Is it single-player or multiplayer?", a: "Primarily a single-player deduction experience, with an optional realtime multiplayer mode called The Wake, built on Nakama, for playing the reconstruction together." },
  { q: "What's the meat-vs-cyber look?", a: "The world renders in two layers, organic 'meat' and digital 'cyber', with a continuous post-process crossfade we call the Seam Director. The balance shifts as you play, so the image is never fully one or the other." },
  { q: "What platforms and when?", a: "Built in Godot for desktop and mobile; the marketing site is live at meatspace.place and the game is in active development. Follow Such Software for release news." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Meatspace",
  url: "https://such.software/products/meatspace",
  description:
    "A deduction game set in the ruins of a failed mass mind-upload. Reconstruct a lost person from fragments, through a living meat-vs-cyber crossfade, with an optional multiplayer mode.",
  applicationCategory: "Game",
  genre: ["Adventure", "Mystery", "Narrative"],
  gamePlatform: ["PC", "iOS", "Android"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "Deduction that dawns on you", body: "You reconstruct a lost person from unreliable fragments, and you get it wrong in ways you won't see until the ending makes you feel it." },
  { title: "The Seam Director", body: "A continuous meat-vs-cyber crossfade rendered as a post-process. The world is never fully organic or fully digital; the balance moves as you do." },
  { title: "The Wake", body: "An optional realtime multiplayer mode, on Nakama, for working through the reconstruction alongside others." },
  { title: "A world built to unsettle", body: "The ruins of the Ingestion: half-copied minds, a substrate called the Lattice, rendered with an intentionally uneasy, in-between aesthetic." },
  { title: "AI-assisted, human-directed pipeline", body: "3D (Meshy), audio (ElevenLabs), and imagery (nano-gpt) feed an engine that owns the composition, the same 'AI makes ingredients, the engine makes the content' approach we use across the studio." },
];

export default function MeatspacePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Meatspace", path: "/products/meatspace" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/meatspace.svg" alt="Meatspace icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-pink-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400 mb-1">
              In Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 leading-none">
              Meatspace
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">Find who you lost in the wreck of the upload.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Meatspace is a deduction game set in the ruins of the Ingestion: humanity&rsquo;s failed
            mass upload into the Lattice. You sift a lost person&rsquo;s fragments out of the noise of
            the dead, reconstructing who they were, and you get it wrong in ways you won&rsquo;t see
            until the end. It renders in a continuous meat-vs-cyber crossfade, with an optional
            multiplayer mode. Its home is at{" "}
            <a href="https://meatspace.place" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline">meatspace.place</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-pink-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-pink-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Engine:</strong> Godot with a Rust GDExtension, one codebase for desktop and mobile.</li>
            <li><strong>The Seam Director:</strong> a post-process that crossfades an organic and a digital render of the same world.</li>
            <li><strong>Multiplayer:</strong> The Wake, a realtime mode on Nakama.</li>
            <li><strong>Asset pipeline:</strong> Meshy (3D), ElevenLabs (audio), and nano-gpt (imagery) feed an engine that owns the composition.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-pink-600 dark:text-pink-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">All Products</Link>
          <span>•</span>
          <a href="https://meatspace.place" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">meatspace.place</a>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
