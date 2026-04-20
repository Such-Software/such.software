import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Such Software",
  description: "Tools and applications built by Such Software. Neroswap, Webshops, Custom Websites, Smirk Wallet, Bauhaus Echo, Suchoice, Vegan IQ, and Wownero Moon Launch.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Such Software",
    description: "Tools and applications built by Such Software.",
    type: "website",
  },
};

const products = [
  {
    slug: "neroswap",
    title: "Neroswap",
    description: "Aggregated DEX & CEX orderbook data. Compare Monero, Wownero, and Bitcoin prices across 6 exchanges in real time.",
    color: "yellow",
    icon: "/images/products/neroswap.png",
  },
  {
    slug: "webshops",
    title: "Webshops",
    description: "Headless Medusa commerce with revenue-share pricing. No upfront costs.",
    color: "emerald",
    icon: "/images/products/occupy-wallets.png",
  },
  {
    slug: "custom-websites",
    title: "Custom Websites",
    description: "Real-time platforms and interactive experiences. See rcryptocurrency.com and moonplace.io.",
    color: "purple",
    icon: "/images/products/r-cryptocurrency.png",
  },
  {
    slug: "smirk-wallet",
    title: "Smirk Wallet",
    description: "Non-custodial browser wallet for social tipping. BTC, LTC, XMR, WOW, GRIN.",
    color: "amber",
    icon: "/images/products/smirk-wallet.png",
  },
  {
    slug: "bauhaus-echo",
    title: "Bauhaus Echo",
    description: "Visual memory puzzle game inspired by Bauhaus design. Android, iOS, Web.",
    color: "blue",
    icon: "/images/products/bauhaus-echo.png",
  },
  {
    slug: "suchoice",
    title: "Suchoice",
    description: "Stop overthinking decisions. Snap a photo, let AI read the options, spin the wheel. Plus coin flip and adventure mode. Android and iOS.",
    color: "pink",
    icon: "/images/products/suchoice.png",
  },
  {
    slug: "vegan-iq",
    title: "Vegan IQ",
    description: "Test your plant-based knowledge with 2000+ trivia questions across 8 categories. Verified data, swipe gameplay. Android and iOS.",
    color: "green",
    icon: "/images/products/vegan-iq.png",
  },
  {
    slug: "wownero-moon-launch",
    title: "Wownero Moon Launch",
    description: "Crypto-themed space landing game. 11 levels, 4 weapons, endless mode. Android, iOS, Web, Desktop.",
    color: "orange",
    icon: "/images/products/such-moon-launch.png",
  },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  purple: "border-purple-500/30 hover:border-purple-500/60",
  amber: "border-amber-500/30 hover:border-amber-500/60",
  blue: "border-blue-500/30 hover:border-blue-500/60",
  pink: "border-pink-500/30 hover:border-pink-500/60",
  orange: "border-orange-500/30 hover:border-orange-500/60",
  yellow: "border-yellow-500/30 hover:border-yellow-500/60",
  green: "border-green-500/30 hover:border-green-500/60",
};

const titleColors: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  amber: "text-amber-600 dark:text-amber-400",
  blue: "text-blue-600 dark:text-blue-400",
  pink: "text-pink-600 dark:text-pink-400",
  orange: "text-orange-600 dark:text-orange-400",
  yellow: "text-yellow-600 dark:text-yellow-400",
  green: "text-green-600 dark:text-green-400",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-500">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools we have built, from commerce infrastructure to consumer apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Card className={`glass-card h-full min-h-[200px] ${colorClasses[product.color]} transition-all cursor-pointer`}>
                <div className="flex items-center gap-4 mb-3">
                  <Image
                    src={product.icon}
                    alt={`${product.title} icon`}
                    width={56}
                    height={56}
                    className="rounded-xl flex-shrink-0"
                  />
                  <h2 className={`text-2xl font-bold ${titleColors[product.color]}`}>
                    {product.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16 motion-reduce:hidden">
          <img
            src="/images/animations/anim3_matrix_light.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-40 block dark:hidden"
          />
          <img
            src="/images/animations/anim3_matrix.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-50 hidden dark:block"
          />
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
