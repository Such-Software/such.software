import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neroswap — Aggregated DEX & CEX Orderbook Data | Such Software",
  description:
    "Real-time aggregated orderbook data across decentralized and centralized exchanges. Compare Monero, Wownero, and Bitcoin prices across BasicSwap, Retoswap, Eigenwallet, Nonlogs, CexSwap, and AltQuick — no KYC, no custody.",
  alternates: { canonical: "/products/neroswap" },
  openGraph: {
    title: "Neroswap — DEX & CEX Aggregator",
    description:
      "Compare crypto prices across 6 exchanges in real time. Privacy-focused, self-sovereign, no KYC.",
    type: "website",
    url: "https://such.software/products/neroswap",
  },
  keywords: [
    "neroswap",
    "dex aggregator",
    "cex aggregator",
    "monero exchange",
    "wownero exchange",
    "basicswap",
    "atomic swap",
    "no kyc exchange",
    "crypto price comparison",
    "decentralized exchange aggregator",
    "privacy coin exchange",
  ],
};

const exchanges = [
  {
    name: "BasicSwap",
    type: "DEX",
    desc: "SMSG atomic swaps — BTC, LTC, XMR, PART, WOW, FIRO, DASH & more. Fully decentralized, on-chain settlement.",
  },
  {
    name: "Retoswap",
    type: "DEX",
    desc: "P2P exchange for XMR ↔ fiat and crypto pairs. Trades settle over Tor for maximum privacy.",
  },
  {
    name: "Eigenwallet",
    type: "DEX",
    desc: "BTC ↔ XMR trustless atomic swaps via Tor rendezvous. No intermediary at any point.",
  },
  {
    name: "Nonlogs",
    type: "CEX",
    desc: "No-KYC Wownero-focused exchange with WOW/BTC, WOW/USDT, and other pairs.",
  },
  {
    name: "CexSwap",
    type: "CEX",
    desc: "Wownero CEX with spot markets and AMM liquidity pools across 40+ coins.",
  },
  {
    name: "AltQuick",
    type: "CEX",
    desc: "No-KYC altcoin exchange with 25+ BTC-quoted markets including WOW and XMR.",
  },
];

const features = [
  {
    title: "No KYC, No Custody",
    desc: "Neroswap is a read-only aggregator. It never holds funds, never asks for identity, and has no accounts. You trade directly on the source exchange.",
  },
  {
    title: "Real-Time Data Pipeline",
    desc: "Scrapers run every 10 minutes on our infrastructure, pulling live orderbooks and ticker data from all 6 exchanges. Data is served via CDN.",
  },
  {
    title: "Best Price Discovery",
    desc: "The dashboard compares prices across all sources and highlights the best bid/ask for each pair. Filter by DEX, CEX, WOW, or XMR.",
  },
  {
    title: "Clickable Markets",
    desc: "Every ticker row links directly to the market on the source exchange. Find the best price, click, and trade — no extra steps.",
  },
  {
    title: "Kraken Reference Prices",
    desc: "BTC and XMR USD reference prices from Kraken are used to compute approximate USD values across all pairs.",
  },
  {
    title: "Open Architecture",
    desc: "Next.js frontend with ISR caching. Python scrapers on a dedicated server. JSON data served over HTTPS. Easy to extend with new exchanges.",
  },
];

export default function NeroswapPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div
        id="main-content"
        className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20"
      >
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">
          Neroswap
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Aggregated DEX &amp; CEX orderbook data across decentralized and
            centralized exchanges. Compare Monero, Wownero, and Bitcoin prices
            in real time. No KYC. No custody. Self-sovereign.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://neroswap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Visit neroswap.com</Button>
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6">Supported Exchanges</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {exchanges.map((ex) => (
            <Card
              key={ex.name}
              className="glass-card border-yellow-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold">{ex.name}</h3>
                <span
                  className={`rounded px-2 py-0.5 text-xs font-medium ${
                    ex.type === "DEX"
                      ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {ex.type}
                </span>
              </div>
              <p className="text-muted-foreground">{ex.desc}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card
              key={f.title}
              className="glass-card border-yellow-500/20"
            >
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>

        <div className="section-container border-l-4 border-yellow-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Neroswap runs a fleet of Python scrapers on a dedicated server. Every
            10 minutes, each scraper pulls the latest orderbook or ticker data
            from its exchange — via API, gRPC, or HTML scraping over Tor. The
            results are merged into JSON files and synced to a CDN edge server.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The{" "}
            <a
              href="https://neroswap.com"
              className="text-yellow-600 dark:text-yellow-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              neroswap.com
            </a>{" "}
            frontend is a Next.js app with ISR caching. It fetches the cached
            JSON on demand, computes best prices and USD estimates, and renders
            sortable, filterable tables for each exchange. Every row links back
            to the source exchange so you can trade immediately.
          </p>
        </div>

        <div className="section-container border-l-4 border-yellow-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">Privacy First</h2>
          <p className="text-muted-foreground leading-relaxed">
            Neroswap has no user accounts, no tracking, no cookies, and no
            analytics. The site is a static read-only dashboard. All exchanges
            listed are either fully decentralized (BasicSwap, Eigenwallet) or
            no-KYC (Nonlogs, CexSwap, AltQuick). Retoswap trades are conducted
            entirely over Tor.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://neroswap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Launch Neroswap</Button>
          </a>
          <Link href="/blog/neroswap-aggregator">
            <Button variant="outline">Read the Blog Post</Button>
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
