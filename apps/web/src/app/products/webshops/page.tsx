import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webshops | Such Software",
  description: "Headless Medusa commerce engines with revenue-share pricing. No upfront costs, aligned incentives.",
  alternates: { canonical: "/products/webshops" },
};

export default function WebshopsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
          Webshops
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            We build headless commerce platforms on Medusa v2 with a revenue-share model. 
            No massive setup fees, no monthly retainers. We only win when you make sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-card border-emerald-500/20">
            <h3 className="text-xl font-bold mb-3">Zero Upfront Cost</h3>
            <p className="text-muted-foreground">
              We invest our development time and infrastructure. You focus on your brand and products. 
              We take a small percentage of sales once you are live.
            </p>
          </Card>
          <Card className="glass-card border-emerald-500/20">
            <h3 className="text-xl font-bold mb-3">Own Your Data</h3>
            <p className="text-muted-foreground">
              Unlike Shopify, you own your customer data, product catalog, and order history. 
              No platform lock-in, ever.
            </p>
          </Card>
          <Card className="glass-card border-emerald-500/20">
            <h3 className="text-xl font-bold mb-3">Flexible Architecture</h3>
            <p className="text-muted-foreground">
              Subscriptions, bundles, B2B pricing, multi-warehouse inventory. 
              Model your exact business logic without platform constraints.
            </p>
          </Card>
          <Card className="glass-card border-emerald-500/20">
            <h3 className="text-xl font-bold mb-3">Performance First</h3>
            <p className="text-muted-foreground">
              Next.js storefronts optimized for Core Web Vitals. 100/100 Lighthouse scores, 
              fast load times, high conversion rates.
            </p>
          </Card>
        </div>

        <div className="section-container border-l-4 border-emerald-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Backend:</strong> Medusa v2 (Node.js, PostgreSQL)</li>
            <li><strong>Frontend:</strong> Next.js 15, React 18, Tailwind CSS</li>
            <li><strong>Payments:</strong> Stripe, PayPal, crypto (optional)</li>
            <li><strong>Hosting:</strong> Vercel, Railway, or your infrastructure</li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/about">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
