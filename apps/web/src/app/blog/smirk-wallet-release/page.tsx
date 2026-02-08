import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smirk Wallet v0.1.6 | Such Software Blog",
  description: "Announcing Smirk Wallet, a non-custodial browser extension for social tipping with BTC, LTC, XMR, WOW, and GRIN.",
  alternates: { canonical: "/blog/smirk-wallet-release" },
};

export default function SmirkWalletReleasePost() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <article id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Blog
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <time className="text-sm text-muted-foreground">February 6, 2026</time>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Smirk Wallet v0.1.6</h1>
            <p className="text-muted-foreground mt-3">Non-custodial social tipping for Telegram and Discord</p>
          </header>

          <div className="prose dark:prose-invert max-w-none">
          <p>
            Smirk Wallet is a non-custodial browser extension that lets you tip people cryptocurrency 
            by their Telegram or Discord username. We have shipped six releases and the extension is 
            available now on GitHub.
          </p>

          <h2>What It Does</h2>
          <p>
            One 12-word seed phrase gives you addresses for five currencies: Bitcoin, Litecoin, Monero, 
            Wownero, and Grin. Link your Telegram or Discord account on smirk.cash, and anyone running 
            Smirk can send you crypto by username.
          </p>
          <p>
            Tips are encrypted with the recipient's public key. Only they can claim. If a tip goes 
            unclaimed, the sender can claw it back. No funds get lost.
          </p>

          <h2>Non-Custodial by Design</h2>
          <p>
            Your private spend keys are generated locally and never leave your browser. They are 
            encrypted with your password. We store only public keys and view keys (for Monero/Wownero 
            balance scanning). We cannot move your funds.
          </p>

          <h2>What We Built</h2>
          <ul>
            <li>Browser extension (TypeScript, Preact, Vite)</li>
            <li>Backend API (Rust, Axum, PostgreSQL)</li>
            <li>Light wallet servers for XMR and WOW</li>
            <li>Grin wallet with client-side WASM</li>
            <li>Telegram and Discord bots for tip notifications</li>
            <li>User dashboard at smirk.cash</li>
          </ul>

          <h2>Chrome Web Store Status</h2>
          <p>
            Our initial submission was rejected for requesting an unused permission (activeTab). 
            We had included it for a planned feature that was not yet implemented. The fix is already 
            in v0.1.6. We have removed the permission and resubmitted.
          </p>
          <p>
            In the meantime, you can install manually from{" "}
            <a href="https://github.com/Such-Software/smirk-extension/releases" target="_blank" rel="noopener noreferrer">
              GitHub Releases
            </a>
            . Firefox support is also available.
          </p>

          <h2>Open Source</h2>
          <p>
            The extension and WASM libraries are open source on GitHub:
          </p>
          <ul>
            <li>
              <a href="https://github.com/Such-Software/smirk-extension" target="_blank" rel="noopener noreferrer">
                smirk-extension
              </a>
            </li>
            <li>
              <a href="https://github.com/Such-Software/monero-oxide" target="_blank" rel="noopener noreferrer">
                monero-oxide
              </a>{" "}
              (Monero WASM)
            </li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Visit{" "}
            <a href="https://smirk.cash" target="_blank" rel="noopener noreferrer">
              smirk.cash
            </a>{" "}
            to learn more, or join the community on{" "}
            <a href="https://t.me/smirkwallet" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>{" "}
            or{" "}
            <a href="https://discord.gg/7EnsaWTm6C" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            .
          </p>
        </div>
        </div>
      </article>
      <MobileNav />
    </main>
  );
}
