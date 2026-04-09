import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { StoreButtons } from "@/components/store-buttons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bauhaus Echo | Such Software",
  description: "Visual memory puzzle game inspired by Bauhaus design. Memorize, shuffle, reconstruct. Android, iOS, Web, Desktop.",
  alternates: { canonical: "/products/bauhaus-echo" },
  openGraph: {
    title: "Bauhaus Echo | Such Software",
    description: "Visual memory puzzle game inspired by Bauhaus design. Memorize, shuffle, reconstruct. Android, iOS, Web, Desktop.",
    type: "website",
  },
};

const gameModes = [
  { name: "Classic", description: "Memorize tile positions, reconstruct after shuffle" },
  { name: "Speed", description: "Tiles drop one at a time, place each before the next appears" },
  { name: "Endless", description: "Speed mode with tile cycling, play forever" },
  { name: "Memory", description: "Traditional card-matching pairs game" },
];

export default function BauhausEchoPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-5 mb-6">
          <Image
            src="/images/products/bauhaus-echo.png"
            alt="Bauhaus Echo icon"
            width={80}
            height={80}
            className="rounded-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
            Bauhaus Echo
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A visual memory puzzle game inspired by Bauhaus design aesthetics. 
            Memorize arrangements of geometric tiles, watch them shuffle, then reconstruct the pattern.
          </p>
        </div>

        <div className="mb-12">
          <StoreButtons
            links={[
              { platform: "apple", href: "https://apps.apple.com/us/app/bauhaus-echo/id6759010657" },
              { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" },
            ]}
            extraLinks={[
              { href: "https://bauhaus.such.software", label: "Play on Web" },
              { href: "https://suchsoftware.itch.io/bauhaus-echo", label: "itch.io — $2" },
            ]}
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="section-container border-l-4 border-blue-500 mb-12">
          <ol className="space-y-4 text-muted-foreground">
            <li><strong>1. Memorization</strong> — Tiles appear in a grid. Study their positions.</li>
            <li><strong>2. Shuffle</strong> — Tiles spin, shrink, and scatter to the bottom.</li>
            <li><strong>3. Reconstruction</strong> — Drag tiles back to their original positions.</li>
            <li><strong>4. Scoring</strong> — Earn points based on accuracy and speed.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6">Game Modes</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {gameModes.map((mode) => (
            <Card key={mode.name} className="glass-card border-blue-500/20">
              <h3 className="text-xl font-bold mb-2">{mode.name}</h3>
              <p className="text-muted-foreground">{mode.description}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card border-blue-500/20">
            <h3 className="font-bold mb-2">500+ Tile Designs</h3>
            <p className="text-sm text-muted-foreground">Curated Bauhaus-style geometric art</p>
          </Card>
          <Card className="glass-card border-blue-500/20">
            <h3 className="font-bold mb-2">Multiple Grid Sizes</h3>
            <p className="text-sm text-muted-foreground">2×2, 3×3, 4×4, 5×5</p>
          </Card>
          <Card className="glass-card border-blue-500/20">
            <h3 className="font-bold mb-2">Cross-Platform</h3>
            <p className="text-sm text-muted-foreground">Android, iOS, Web, Desktop</p>
          </Card>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/products/bauhaus-echo/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/blog/bauhaus-echo-launch" className="hover:text-foreground transition-colors">
            Blog Post
          </Link>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support &amp; Feedback
          </Link>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
