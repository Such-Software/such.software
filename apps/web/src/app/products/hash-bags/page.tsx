import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { StoreButtons } from "@/components/store-buttons";
import { JsonLd, breadcrumbLd, softwareAppLd } from "@/components/seo/json-ld";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const DESCRIPTION =
  "Open-source, non-custodial wallet for Monero, Wownero, Bitcoin, and nine more chains. Wownero-first, with Ledger, Trezor, and BitBox support. Free on Android; iOS and desktop coming soon.";

export const metadata: Metadata = {
  title: "Hash Bags: Non-Custodial Multi-Chain Crypto Wallet | Such Software",
  description: DESCRIPTION,
  alternates: { canonical: "/products/hash-bags" },
  openGraph: {
    title: "Hash Bags: Non-Custodial Multi-Chain Crypto Wallet | Such Software",
    description: DESCRIPTION,
    type: "website",
    images: ["/images/branding/OG_banner_v2_light.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/branding/OG_banner_v2_light.png"],
  },
};

const chains = [
  { name: "Monero", ticker: "XMR" },
  { name: "Wownero", ticker: "WOW" },
  { name: "Bitcoin", ticker: "BTC" },
  { name: "Litecoin", ticker: "LTC, incl. MWEB" },
  { name: "Bitcoin Cash", ticker: "BCH" },
  { name: "Dogecoin", ticker: "DOGE" },
  { name: "Nano", ticker: "XNO" },
  { name: "Ethereum", ticker: "ETH + ERC-20s" },
  { name: "Polygon", ticker: "POL" },
  { name: "Base", ticker: "BASE" },
  { name: "Arbitrum", ticker: "ARB" },
  { name: "BNB Smart Chain", ticker: "BSC" },
];

export default function HashBagsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Hash Bags", path: "/products/hash-bags" },
      ])} />
      <JsonLd data={softwareAppLd({
        name: "Hash Bags",
        path: "/products/hash-bags",
        description: DESCRIPTION,
        category: "FinanceApplication",
        operatingSystem: "Android",
        price: "0",
      })} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-5 mb-6">
          <Image
            src="/images/products/hash-bags.png"
            alt="Hash Bags icon"
            width={80}
            height={80}
            className="rounded-[22%]"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
            Hash Bags
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A wallet for your coins. Hash Bags is an open-source, non-custodial, multi-chain
            crypto wallet: your keys and your funds stay on your device, and we never hold
            either. Free on Android today, with iOS and desktop on the way.
          </p>
        </div>

        <div className="mb-12">
          <StoreButtons
            links={[
              { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.hashwallet" },
              { platform: "apple", href: null },
            ]}
            extraLinks={[{ href: "https://hash.boats", label: "hash.boats" }]}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Live on Google Play. The iOS build is in review, and macOS, Linux, and Windows
            follow after that.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why it exists</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Cake Wallet ended Wownero support in early 2026. Hash Bags is a fork that keeps
              Wownero a first-class mobile experience, maintained by the project&apos;s founder,
              while shipping a slimmer and more focused multi-coin wallet without the chains and
              integrations we would rather not maintain or recommend.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Twelve chains</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {chains.map((c) => (
              <Card key={c.name} className="glass-card p-4">
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.ticker}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Hardware wallets</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ledger, Trezor, and BitBox are supported, so the keys can stay off the phone
            entirely if that is how you prefer to hold them.
          </p>
        </section>

        <div className="text-center">
          <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← All products
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
