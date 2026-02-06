import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bauhaus Echo is Live | Such Software Blog",
  description: "Our first mobile game is available on Android and iOS. A visual memory puzzle inspired by Bauhaus design.",
  alternates: { canonical: "/blog/bauhaus-echo-launch" },
};

export default function BauhausEchoLaunchPost() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <article id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <time className="text-sm text-muted-foreground">February 6, 2026</time>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Bauhaus Echo is Live</h1>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Bauhaus Echo is now available on Google Play and the App Store. It is a visual memory game 
            where you memorize tile arrangements, watch them shuffle, and reconstruct the original pattern.
          </p>

          <h2>The Concept</h2>
          <p>
            The game shows you a grid of colorful geometric tiles inspired by Bauhaus design. You get a 
            few seconds to memorize their positions. Then the tiles spin, shrink, and scatter to the 
            bottom of the screen. Your job is to drag them back to where they belong.
          </p>

          <h2>Four Game Modes</h2>
          <ul>
            <li><strong>Classic</strong> - The core experience. Memorize and reconstruct.</li>
            <li><strong>Speed</strong> - Tiles appear one at a time. Place each before the next drops.</li>
            <li><strong>Endless</strong> - Speed mode that loops forever. See how long you last.</li>
            <li><strong>Memory</strong> - Traditional card-matching pairs.</li>
          </ul>

          <h2>Tech Stack</h2>
          <p>
            Built with libGDX, a cross-platform Java game framework. The same codebase runs on Android, 
            iOS (via RoboVM), desktop, and web (via GWT). The tile assets are packed into a TextureAtlas 
            for efficient rendering.
          </p>

          <h2>Download</h2>
          <p>
            Get it on{" "}
            <a href="https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" target="_blank" rel="noopener noreferrer">
              Google Play
            </a>{" "}
            or the{" "}
            <a href="https://apps.apple.com/app/bauhaus-echo" target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            . Free with ads, or pay once to remove them.
          </p>
        </div>
      </article>
      <MobileNav />
    </main>
  );
}
