import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bauhaus Echo is Live | Such Software Blog",
  description: "Our first mobile game is available on App Store, Google Play, itch.io, and the web. A visual memory puzzle inspired by Bauhaus design.",
  alternates: { canonical: "/blog/bauhaus-echo-launch" },
};

export default function BauhausEchoLaunchPost() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <article id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Blog
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <time className="text-sm text-muted-foreground">March 4, 2026</time>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Bauhaus Echo is Live</h1>
            <p className="text-muted-foreground mt-3">A visual memory puzzle inspired by Bauhaus design — now on every platform</p>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              Bauhaus Echo is now available on the{" "}
              <a href="https://apps.apple.com/us/app/bauhaus-echo/id6759010657" target="_blank" rel="noopener noreferrer">App Store</a>,{" "}
              <a href="https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" target="_blank" rel="noopener noreferrer">Google Play</a>,{" "}
              <a href="https://suchsoftware.itch.io/bauhaus-echo" target="_blank" rel="noopener noreferrer">itch.io</a>, and{" "}
              <a href="https://bauhaus.such.software" target="_blank" rel="noopener noreferrer">the web</a>.
              It is a visual memory game where you memorize tile arrangements, watch them shuffle, and
              reconstruct the original pattern.
            </p>

            <h2>The Concept</h2>
            <p>
              The game shows you a grid of colorful geometric tiles inspired by Bauhaus design. You get a
              few seconds to memorize their positions. Then the tiles spin, shrink, and scatter to the
              bottom of the screen. Your job is to drag them back to where they belong.
            </p>

            <h2>Four Game Modes</h2>
            <ul>
              <li><strong>Classic</strong> — The core experience. Memorize and reconstruct.</li>
              <li><strong>Speed</strong> — Tiles appear one at a time. Place each before the next drops.</li>
              <li><strong>Endless</strong> — Speed mode that loops forever. See how long you last.</li>
              <li><strong>Memory</strong> — Traditional card-matching pairs.</li>
            </ul>

            <p>
              Each mode supports 2×2 through 5×5 grids and three difficulty levels. Global leaderboards
              let you compete against other players across all platforms.
            </p>

            <h2>500 Bauhaus Tiles</h2>
            <p>
              The tile collection features 500 hand-curated geometric designs drawn from the Bauhaus
              aesthetic — bold shapes, primary colors, clean lines. Each tile has beveled 3D edges and
              the game board is styled like a wood-and-felt craft table.
            </p>

            <h2>Tech Stack</h2>
            <p>
              Built with{" "}
              <a href="https://libgdx.com/" target="_blank" rel="noopener noreferrer">libGDX</a>,
              a cross-platform Java game framework. One codebase runs on Android, iOS (via RoboVM),
              desktop (LWJGL3), and web (via GWT). The tile assets are packed into a TextureAtlas
              for efficient GPU rendering.
            </p>

            <h2>Get It</h2>
            <ul>
              <li>
                <strong>Mobile (free with ads)</strong> —{" "}
                <a href="https://apps.apple.com/us/app/bauhaus-echo/id6759010657" target="_blank" rel="noopener noreferrer">App Store</a>{" | "}
                <a href="https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" target="_blank" rel="noopener noreferrer">Google Play</a>
              </li>
              <li>
                <strong>Desktop ($2, no ads)</strong> —{" "}
                <a href="https://suchsoftware.itch.io/bauhaus-echo" target="_blank" rel="noopener noreferrer">itch.io</a>
              </li>
              <li>
                <strong>Web (free)</strong> —{" "}
                <a href="https://bauhaus.such.software" target="_blank" rel="noopener noreferrer">bauhaus.such.software</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <MobileNav />
    </main>
  );
}
