import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Websites | Such Software",
  description: "Real-time platforms and interactive web experiences. See our work on rcryptocurrency.com and moonplace.io.",
  alternates: { canonical: "/products/custom-websites" },
};

export default function CustomWebsitesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600 dark:text-purple-400">
          Custom Websites
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-time platforms, collaborative tools, and high-end brand experiences. 
            We build performant web applications that handle scale.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="https://rcryptocurrency.com" target="_blank" rel="noopener noreferrer">
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3">rcryptocurrency.com</h3>
              <p className="text-muted-foreground mb-4">
                Governance dashboard for the r/CryptoCurrency subreddit with 10M+ members. 
                Real-time DAO metrics, proposal tracking, and community analytics.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Real-time data via WebSocket</li>
                <li>Reddit API integration</li>
                <li>On-chain governance tracking</li>
              </ul>
            </Card>
          </a>
          <a href="https://moonplace.io" target="_blank" rel="noopener noreferrer">
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3">moonplace.io</h3>
              <p className="text-muted-foreground mb-4">
                Collaborative pixel art canvas with real-time multiplayer. 
                Thousands of concurrent users painting together.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>WebSocket real-time sync</li>
                <li>Canvas rendering optimization</li>
                <li>User authentication and cooldowns</li>
              </ul>
            </Card>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-card border-purple-500/20">
            <h3 className="text-xl font-bold mb-3">Real-time Platforms</h3>
            <p className="text-muted-foreground">
              Socket.io and WebRTC integration for collaborative tools, dashboards, 
              and live data visualization.
            </p>
          </Card>
          <Card className="glass-card border-purple-500/20">
            <h3 className="text-xl font-bold mb-3">Brand Motion</h3>
            <p className="text-muted-foreground">
              Framer Motion and Three.js powered interfaces that tell your brand's 
              story through motion and depth.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/about#contact">
            <Button size="lg">Start a Project</Button>
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
