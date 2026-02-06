import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Such Software",
  description: "Tools and applications built by Such Software. Webshops, custom websites, Smirk Wallet, and Bauhaus Echo.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Such Software",
    description: "Tools and applications built by Such Software.",
    type: "website",
  },
};

const products = [
  {
    slug: "webshops",
    title: "Webshops",
    description: "Headless Medusa commerce with revenue-share pricing. No upfront costs.",
    color: "emerald",
  },
  {
    slug: "custom-websites",
    title: "Custom Websites",
    description: "Real-time platforms and interactive experiences. See rcryptocurrency.com and moonplace.io.",
    color: "purple",
  },
  {
    slug: "smirk-wallet",
    title: "Smirk Wallet",
    description: "Non-custodial browser wallet for social tipping. BTC, LTC, XMR, WOW, GRIN.",
    color: "amber",
  },
  {
    slug: "bauhaus-echo",
    title: "Bauhaus Echo",
    description: "Visual memory puzzle game inspired by Bauhaus design. Android, iOS, Web.",
    color: "blue",
  },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  purple: "border-purple-500/30 hover:border-purple-500/60",
  amber: "border-amber-500/30 hover:border-amber-500/60",
  blue: "border-blue-500/30 hover:border-blue-500/60",
};

const titleColors: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  amber: "text-amber-600 dark:text-amber-400",
  blue: "text-blue-600 dark:text-blue-400",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-500">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools we have built, from commerce infrastructure to consumer apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Card className={`glass-card h-full min-h-[200px] ${colorClasses[product.color]} transition-all cursor-pointer`}>
                <h2 className={`text-2xl font-bold mb-3 ${titleColors[product.color]}`}>
                  {product.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
