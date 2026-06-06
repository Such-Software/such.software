import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Apps & Real-Time Platforms | Such Software",
  description: "We build fast, accessible real-time web apps: multiplayer games, live dashboards, and crypto platforms with WebSocket sync. Next.js, Socket.io, WebRTC.",
  alternates: { canonical: "/products/custom-websites" },
  openGraph: {
    title: "Custom Web Apps & Real-Time Platforms | Such Software",
    description: "Fast, accessible real-time web apps: multiplayer games, live dashboards, and crypto platforms with WebSocket sync. Next.js, Socket.io, WebRTC.",
    type: "website",
    images: ["/images/og/custom-websites.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/custom-websites.png"],
  },
};

export default function CustomWebsitesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Custom Web Apps", path: "/products/custom-websites" },
      ])} />
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
          <Link href="/products/wownerogue">
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3">Wownerogue</h3>
              <p className="text-muted-foreground mb-4">
                A provably-fair multiplayer roguelike that runs entirely in the browser, with
                game rounds synced to Monero and Wownero block times. Live spectating, a shared
                chat lobby, and on-chain payouts.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Socket.io real-time game state and spectating</li>
                <li>SHA-256 commit-reveal for provable fairness</li>
                <li>Wallet-RPC payment and payout pipeline</li>
              </ul>
            </Card>
          </Link>
          <a href="https://neroswap.com" target="_blank" rel="noopener noreferrer">
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3">Neroswap</h3>
              <p className="text-muted-foreground mb-4">
                A live orderbook aggregator that pulls prices from six DEX and no-KYC CEX venues
                and compares Monero, Wownero, and Bitcoin markets in real time.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Real-time price feeds via WebSocket</li>
                <li>Multi-exchange orderbook normalization</li>
                <li>No accounts, no custody, no tracking</li>
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
              Smooth, animated interfaces with purposeful motion and visual depth.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg">Start a Project</Button>
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
