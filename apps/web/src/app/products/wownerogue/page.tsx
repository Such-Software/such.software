import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { WownerogueLinks } from "@/components/store-buttons";
import Link from "next/link";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wownerogue: Provably-Fair Monero Multiplayer Roguelike | Such Software",
  description: "Play Wownerogue: a provably-fair, blockchain-synced multiplayer roguelike. Every run is verifiable, every round ends on a new block. Free in-browser, no download.",
  alternates: { canonical: "/products/wownerogue" },
  keywords: [
    "provably fair game",
    "monero game",
    "wownero game",
    "crypto roguelike",
    "blockchain multiplayer game",
    "browser roguelike",
    "monerogue",
    "wownerogue",
  ],
  openGraph: {
    title: "Wownerogue: Provably-Fair Monero Multiplayer Roguelike",
    description: "A provably-fair, blockchain-synced multiplayer roguelike. Escape the dungeon before the next block. Free in-browser at play.wowne.ro.",
    type: "website",
    url: "/products/wownerogue",
    images: ["/images/og/wownerogue.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/wownerogue.png"],
  },
};

const faqs = [
  { q: "What is a provably-fair game?", a: "A game whose outcome can be cryptographically verified after the fact. Before your run, the server publishes a SHA-256 commitment of a secret seed; afterward it reveals the seed. You hash the seed and confirm it matches the commitment, which proves the dungeon was fixed before you started and not rigged against you." },
  { q: "Is Wownerogue free to play?", a: "Yes. play.wowne.ro is free to play, with optional paid entry for the Hall of Champions leaderboard. The monerogue.app instance runs on Monero stagenet, where coins have no real value." },
  { q: "Do I need a wallet or a download?", a: "No download: it runs in your browser. You only need a Monero or Wownero address if you want to receive a payout on the payout instance." },
  { q: "How does the block-timing deadline work?", a: "Each round ends on a new Monero or Wownero block. Block times are random (roughly two minutes on average), so your deadline to escape is never the same twice. That randomness is the core of the game." },
  { q: "Is Wownerogue open source?", a: "Yes, it is MIT-licensed. The full server and client are public on GitHub at github.com/Such-Software/wownerogue." },
];

// VideoGame structured data: the highest-value rich result for a game query.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Wownerogue",
  alternateName: "Monerogue",
  url: "https://such.software/products/wownerogue",
  description:
    "A provably-fair, blockchain-synced multiplayer roguelike. Escape the dungeon before the next block, avoid the monster, grab the treasure, and earn on-chain payouts.",
  applicationCategory: "Game",
  genre: ["Roguelike", "Multiplayer"],
  gamePlatform: "Web browser",
  operatingSystem: "Any (web browser)",
  playMode: "MultiPlayer",
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: "https://play.wowne.ro",
  },
};

const features = [
  { title: "Provably Fair", body: "Each round commits to a SHA-256 hash before you play and reveals the seed after. That seed deterministically generates the entire dungeon, so you can verify nothing was changed once the round began." },
  { title: "Synced to Block Time", body: "Rounds start and end on new Monero or Wownero blocks. Because block timing is random, your escape deadline is genuinely unpredictable: that is the whole game." },
  { title: "Live Spectating", body: "Watch any in-progress run in real time from the lobby, with a global feed announcing escapes as they happen." },
  { title: "Two Leaderboards", body: "Free runs feed the Pleb board; paid runs feed the Hall of Champions. Rankings are time-windowed (day, week, all-time)." },
  { title: "On-Chain Payouts", body: "On the payout instance, escaping pays out real funds from a house wallet over wallet-RPC, batched and verified against the chain." },
  { title: "Open Source", body: "The full server and client are MIT-licensed and public. Read exactly how the fairness, payments, and payouts work." },
];

const steps = [
  { n: "1", title: "Queue", body: "Join the queue. Your run starts when the next block lands." },
  { n: "2", title: "Escape", body: "Move with WASD or arrow keys. Reach the exit before the next block, or the monster, ends your run." },
  { n: "3", title: "Grab the bag", body: "Collecting the treasure bag is optional but pays a higher multiplier on escape." },
  { n: "4", title: "Verify", body: "After the run, the seed is revealed. Check it against the pre-game commitment on the verification page." },
];

export default function WowneroguePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Wownerogue", path: "/products/wownerogue" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-orange-600 dark:text-orange-400">
          Wownerogue
        </h1>
        <p className="text-base text-muted-foreground mb-6">A provably-fair roguelike, synced to the blockchain.</p>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Wownerogue is a multiplayer dungeon-crawler that runs entirely in your browser. Every
            round is provably fair and synced to Monero or Wownero block times: you have until the
            next block to escape the dungeon, avoid the monster, and grab the treasure. Random block
            timing means your deadline is never the same twice.
          </p>
        </div>

        <div className="mb-12">
          <WownerogueLinks />
        </div>

        <h2 className="text-2xl font-bold mb-6">Two Worlds</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-card border-orange-500/20">
            <h3 className="text-xl font-bold mb-2">play.wowne.ro</h3>
            <p className="text-muted-foreground text-sm">
              The Wownero mainnet instance: free to play, with paid entry for the Hall of Champions.
              No crypto payouts, all the tension. The friendly place to learn the game.
            </p>
          </Card>
          <Card className="glass-card border-orange-500/20">
            <h3 className="text-xl font-bold mb-2">monerogue.app</h3>
            <p className="text-muted-foreground text-sm">
              The Monero stagenet instance, where escaping pays out stagenet XMR from a house wallet.
              Stagenet coins have no real value, so it is a safe sandbox for the full payout loop.
            </p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">How a Run Works</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {steps.map((s) => (
            <Card key={s.n} className="glass-card border-orange-500/20">
              <h3 className="font-bold mb-1">{s.n}. {s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-orange-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">How &ldquo;Provably Fair&rdquo; Works</h2>
        <div className="section-container border-l-4 border-orange-500 mb-12 text-muted-foreground space-y-4">
          <p>
            Before your run begins, the server publishes a SHA-256 hash, the commitment, of a secret
            random seed. You can record it. When the run ends, the server reveals the seed itself.
            Anyone can hash the revealed seed and confirm it matches the commitment they were shown
            earlier, which proves the seed was fixed before you started moving.
          </p>
          <p>
            That same seed deterministically generates the dungeon layout, the treasure and exit
            positions, and the monster&rsquo;s behaviour. Feed the seed back in and you regenerate
            the exact dungeon you played. There is no way to re-roll a bad board after the fact, and
            no hidden house edge in the level itself. The verification page does this check for you.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-orange-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Real-time:</strong> Node.js and Socket.io drive game state, chat, and spectating.</li>
            <li><strong>Fairness:</strong> SHA-256 commit-reveal with a seeded RNG for deterministic dungeons.</li>
            <li><strong>Payments:</strong> Monero and Wownero wallet-RPC for entry payments and batched payouts.</li>
            <li><strong>Storage:</strong> PostgreSQL with atomic, idempotent money handling in integer units.</li>
            <li><strong>Open source:</strong> MIT-licensed. The whole thing is on <a href="https://github.com/Such-Software/wownerogue" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">GitHub</a>.</li>
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

        <p className="text-muted-foreground mb-12">
          Want the build notes? Read{" "}
          <Link href="/blog/wownerogue-launch" className="text-orange-600 dark:text-orange-400 hover:underline">
            the launch write-up
          </Link>
          {" "}for how the fairness, block-timing, and payout logic came together.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <a href="https://github.com/Such-Software/wownerogue" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Source on GitHub
          </a>
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
