import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DemosGallery } from "@/components/products/demos-gallery";
import { ShowcaseVideo } from "@/components/showcase/showcase-video";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Online Stores & E-Commerce | Such Software",
  description: "A multi-tenant commerce platform: your own fully-themed storefront, print-on-demand, non-custodial crypto checkout, Stripe Connect, and automated tax, no upfront cost, revenue-share pricing, fully managed hosting. Built on Medusa v2.",
  alternates: { canonical: "/products/webshops" },
  openGraph: {
    title: "Custom Online Stores & E-Commerce | Such Software",
    description: "Your own fully-themed storefront from one engine: print-on-demand, non-custodial crypto checkout, Stripe Connect, automated tax. No upfront cost, revenue-share, fully managed hosting. Built on Medusa v2.",
    type: "website",
    images: ["/images/og/webshops.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/webshops.png"],
  },
};

const faqs = [
  { q: "What makes each store unique if they share one platform?", a: "Every tenant gets a fully-themed storefront, its own colors, typography, layout, dark mode, and content, driven from a shared Medusa engine. One backend, many distinct-looking shops. See the five live demos on this page: each is the same platform wearing a completely different skin." },
  { q: "How does revenue-share pricing work?", a: "Instead of a large upfront build fee, we build and host your store at our own cost and take a small percentage of sales once you are live. We only make money when you do." },
  { q: "Who hosts the store?", a: "We do. Hosting is fully managed and included, the platform runs on our own infrastructure (VPS, pm2, Caddy), with deploys, TLS, backups, and monitoring handled by us. You do not need a Vercel or Railway account, and there is nothing for you to operate." },
  { q: "What is headless commerce, and why Medusa?", a: "Headless means the storefront is decoupled from the commerce backend. We use Medusa v2 (open-source, Node.js) for the backend and Next.js for a fast custom storefront, so you are not boxed in by a template or a hosted platform's limits." },
  { q: "Do I own my data?", a: "Yes. Unlike hosted platforms, you own your customer data, product catalog, and order history outright. There is no platform lock-in." },
  { q: "Which payment methods are supported?", a: "Stripe via Stripe Connect (you stay the merchant of record and settle directly) and non-custodial cryptocurrency, Bitcoin, Litecoin, Monero, Wownero, and Grin. Crypto payments land straight in your own wallet; we never take custody of funds." },
  { q: "Can you handle print-on-demand or dropshipping?", a: "Yes. We integrate Printful for print-on-demand and dropship fulfillment, so you can sell apparel and merch without holding inventory, orders route to production and ship automatically." },
  { q: "What about sales tax?", a: "Tax is automated. We support Stripe Tax for full multi-state calculation and filing, or a self-hosted single-state estimator for sub-nexus tenants, routed per tenant so you collect the right amount at checkout." },
  { q: "Can you migrate my existing store?", a: "Yes. We can migrate catalogs, customers, and order history from Shopify, WooCommerce, and other platforms." },
];

type Feature = { title: string; body: string };

const features: Feature[] = [
  {
    title: "Zero Upfront Cost",
    body: "We invest our development time and infrastructure. You focus on your brand and products. We take a small percentage of sales once you are live.",
  },
  {
    title: "Own Your Data",
    body: "Unlike Shopify, you own your customer data, product catalog, and order history. No platform lock-in, ever.",
  },
  {
    title: "Print-on-Demand & Dropship",
    body: "Printful integration for apparel and merch: sell without holding inventory. Orders route to production and ship automatically, and the platform reconciles production cost for you.",
  },
  {
    title: "Non-Custodial Crypto Checkout",
    body: "Accept Bitcoin, Litecoin, Monero, Wownero, and Grin. Funds settle directly into your own wallet, we never take custody, so you stay in control of your money.",
  },
  {
    title: "Stripe Connect Payments",
    body: "Card payments run through Stripe Connect: you stay the merchant of record on the statement, and the platform fee comes out as a transparent revenue-share on item margin only, tax and shipping pass through to you uncut.",
  },
  {
    title: "Wallet & Web3 Login",
    body: "Optional Sign-In-With-Ethereum and wallet-based login alongside email, backed by a three-tier auth model, the operator chooses which methods each tenant offers, and each tenant's customers sign in their way.",
  },
  {
    title: "Order Notifications",
    body: "Get pinged the moment a sale lands. Telegram and email notifications keep you and your team on top of new orders without babysitting a dashboard.",
  },
  {
    title: "Automated Sales Tax",
    body: "Tax is calculated at checkout via Stripe Tax, or a self-hosted single-state estimator for sub-nexus tenants, routed per tenant so you collect the right amount in the right jurisdictions.",
  },
  {
    title: "Flexible Architecture",
    body: "Subscriptions, bundles, B2B pricing, multi-warehouse inventory. Model your exact business logic without platform constraints.",
  },
  {
    title: "Performance First",
    body: "Next.js storefronts engineered for Core Web Vitals, with fast load times and high conversion in mind.",
  },
];

export default function WebshopsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Custom Online Stores", path: "/products/webshops" },
      ])} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        {/* Hero, lead with the differentiator: per-tenant theming */}
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
          Multi-tenant commerce platform
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
          Your own fully-themed storefront, from one engine
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
          We run a single Medusa v2 commerce platform that spins up a completely distinct,
          fully-branded storefront for every tenant, your colors, your typography, your layout,
          your dark mode. One battle-tested engine underneath; a store that looks and feels like
          nobody else's on top. No large setup fee, no monthly retainer: we build, host, and
          maintain it on revenue share, so we only win when you make sales.
        </p>

        {/* Theming morph: the same platform themed as five real demo brands. */}
        <figure className="mb-16">
          <BrowserFrame url="your-brand.com">
            <ShowcaseVideo
              webm="/showcase/theming-morph.webm"
              mp4="/showcase/theming-morph.mp4"
              poster="/showcase/theming-morph-poster.jpg"
              label="The same commerce platform themed as five distinct brands, dissolving one into the next: an artisan shop, a merch store, a crypto shop, a yoga studio, and a coaching site."
              className="block aspect-video w-full"
            />
          </BrowserFrame>
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            One platform, five real storefronts. Every shop here runs the same engine.
          </figcaption>
        </figure>

        {/* Theming spotlight, the headline story */}
        <section aria-labelledby="theming-heading" className="section-container border-l-4 border-emerald-500 mb-16">
          <h2 id="theming-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Per-tenant theming is the whole point
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Most "multi-store" platforms give every shop the same skeleton with a swapped logo.
            Ours derives an entire visual system per tenant from your theme configuration:
            palette, fonts, spacing, component styling, and a matched dark mode across both the
            storefront and checkout. Two shops on the same backend can look nothing alike.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            That means you get the economics of a shared platform, managed hosting, security
            updates, and new features shipped to everyone, without the cookie-cutter look that
            usually comes with it. The five live demos below are all the exact same platform.
          </p>
        </section>

        {/* Live demos, proof of the theming story */}
        <section aria-labelledby="demos-heading" className="mb-16">
          <h2 id="demos-heading" className="text-2xl md:text-3xl font-bold mb-2">
            Live demos
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Five differently-themed storefronts, one platform. Open them side by side, same
            engine, five completely different looks.
          </p>
          <DemosGallery />
        </section>

        {/* Feature grid, the real platform capabilities */}
        <section aria-labelledby="features-heading" className="mb-16">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-8">
            What's built in
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="glass-card border-emerald-500/20">
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech stack, hosting line corrected to fully-managed self-hosting */}
        <section aria-labelledby="stack-heading" className="section-container border-l-4 border-emerald-500 mb-16">
          <h2 id="stack-heading" className="text-2xl font-bold mb-4">Tech Stack</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Backend:</strong> Medusa v2 (Node.js, PostgreSQL), multi-tenant with per-store sales-channel isolation</li>
            <li><strong>Frontend:</strong> Next.js 15, React 18, Tailwind CSS, per-tenant themed storefront</li>
            <li><strong>Payments:</strong> Stripe Connect and non-custodial crypto (BTC, LTC, XMR, WOW, Grin)</li>
            <li><strong>Fulfillment:</strong> Printful print-on-demand / dropship, plus your own inventory</li>
            <li><strong>Tax:</strong> Stripe Tax or self-hosted single-state estimator, routed per tenant</li>
            <li><strong>Hosting:</strong> Fully managed and included, we self-host on our own infrastructure (VPS, pm2, Caddy) with TLS, backups, and monitoring handled for you</li>
          </ul>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-emerald-600 dark:text-emerald-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-6">
            See also our{" "}
            <Link href="/services" className="text-emerald-600 dark:text-emerald-400 hover:underline">development services</Link>
            {" "}and{" "}
            <Link href="/products/custom-websites" className="text-emerald-600 dark:text-emerald-400 hover:underline">custom web apps</Link>.
          </p>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
