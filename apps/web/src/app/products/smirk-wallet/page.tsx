import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smirk Wallet | Such Software",
  description: "Non-custodial browser wallet for social tipping. Send BTC, LTC, XMR, WOW, and GRIN by Telegram or Discord username.",
  alternates: { canonical: "/products/smirk-wallet" },
};

const currencies = [
  { name: "Bitcoin", symbol: "BTC", type: "secp256k1" },
  { name: "Litecoin", symbol: "LTC", type: "secp256k1" },
  { name: "Monero", symbol: "XMR", type: "ed25519" },
  { name: "Wownero", symbol: "WOW", type: "ed25519" },
  { name: "Grin", symbol: "GRIN", type: "secp256k1" },
];

export default function SmirkWalletPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600 dark:text-amber-400">
          Smirk Wallet
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Non-custodial multi-currency wallet for social tipping. 
            Tip anyone on Telegram or Discord by username. Your keys never leave your browser.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://smirk.cash" target="_blank" rel="noopener noreferrer">
            <Button size="lg">Visit smirk.cash</Button>
          </a>
          <a href="https://github.com/Such-Software/smirk-extension/releases" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">Download Extension</Button>
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-card border-amber-500/20">
            <h3 className="text-xl font-bold mb-3">Non-Custodial</h3>
            <p className="text-muted-foreground">
              Your private keys are generated locally and encrypted with your password. 
              We never see your spend keys. Your funds are always yours.
            </p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="text-xl font-bold mb-3">Social Tipping</h3>
            <p className="text-muted-foreground">
              Link your Telegram or Discord account. Anyone with Smirk can send you 
              crypto by username. No wallet address needed.
            </p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="text-xl font-bold mb-3">Encrypted Tips</h3>
            <p className="text-muted-foreground">
              Tips are encrypted with the recipient's public key. Only they can claim. 
              Senders can reclaim unclaimed tips (no lost funds).
            </p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="text-xl font-bold mb-3">One Seed, Five Chains</h3>
            <p className="text-muted-foreground">
              A single 12-word seed phrase derives addresses for all supported currencies. 
              Restore your entire wallet with one backup.
            </p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">Supported Currencies</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 font-semibold">Currency</th>
                <th className="py-3 px-4 font-semibold">Symbol</th>
                <th className="py-3 px-4 font-semibold">Key Type</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((c) => (
                <tr key={c.symbol} className="border-b border-border/50">
                  <td className="py-3 px-4">{c.name}</td>
                  <td className="py-3 px-4 font-mono">{c.symbol}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-container border-l-4 border-amber-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why These Coins?</h2>
          <p className="text-muted-foreground leading-relaxed">
            BTC is the most widely used. LTC is fast and cheap (MWEB support coming). 
            XMR is the gold standard for privacy. WOW has a great community. 
            GRIN is lightweight, private, and has the fairest emission schedule of any coin.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://t.me/smirkwallet" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Telegram</Button>
          </a>
          <a href="https://discord.gg/7EnsaWTm6C" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Discord</Button>
          </a>
          <a href="https://github.com/Such-Software/smirk-extension" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
