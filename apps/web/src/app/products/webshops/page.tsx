import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DemosGallery } from "@/components/products/demos-gallery";
import { SurfacesGallery } from "@/components/products/surfaces-gallery";
import { ShowcaseVideo } from "@/components/showcase/showcase-video";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

const DESCRIPTION =
  "We build, host, and run your online store. Sell products, merch, or appointments; take cards and cryptocurrency; own your data. No upfront cost: we take a share of sales once you are live.";

export const metadata: Metadata = {
  title: "Custom Online Stores & E-Commerce | Such Software",
  description: DESCRIPTION,
  alternates: { canonical: "/products/webshops" },
  openGraph: {
    title: "Custom Online Stores & E-Commerce | Such Software",
    description: DESCRIPTION,
    type: "website",
    images: ["/images/og/webshops.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/webshops.png"],
  },
};

const faqs = [
  {
    q: "What does it cost?",
    a: "Nothing upfront. We build and host the store at our own cost and take a small percentage of sales once you are live. There is no setup fee and no monthly retainer.",
  },
  {
    q: "Who runs it once it is live?",
    a: "We do. Hosting, TLS, backups, updates, and monitoring are included, and there is nothing for you to operate. You get an admin dashboard for products and orders.",
  },
  {
    q: "How do I get paid?",
    a: "Card payments run through Stripe Connect, so you are the merchant of record and money settles directly to you. Cryptocurrency payments land straight in your own wallet: we never take custody of your funds.",
  },
  {
    q: "Can I sell services or appointments?",
    a: "Yes. Appointment items get a booking calendar on the product page, themed to match the rest of the shop, with no shipping step. Classes, sessions, consultations, and passes all work.",
  },
  {
    q: "Can I sell merch without holding inventory?",
    a: "Yes. Printful handles print-on-demand and dropship fulfilment, so orders route to production and ship on their own.",
  },
  {
    q: "What about sales tax?",
    a: "Handled at checkout. Stripe Tax covers multi-state calculation and filing, and smaller shops can use a single-state estimator instead.",
  },
  {
    q: "Do I own my data?",
    a: "Yes. Your customer list, catalog, and order history are yours outright, and you can take them with you. There is no lock-in.",
  },
  {
    q: "Can you move my existing store over?",
    a: "Yes. We migrate catalogs, customers, and order history from Shopify, WooCommerce, and others.",
  },
];

type Feature = { title: string; body: string };

const features: Feature[] = [
  {
    title: "It looks like your brand",
    body: "Your colours, type, layout, and dark mode, all the way through the catalog, cart, and checkout. Not a template with your logo dropped into the corner.",
  },
  {
    title: "Nothing to pay upfront",
    body: "We build and host at our own cost and take a percentage of sales once you are live. We only make money when you do.",
  },
  {
    title: "Sell products, merch, or time",
    body: "Physical stock, print-on-demand apparel with no inventory to hold, or appointments booked on a calendar right on the page.",
  },
  {
    title: "Get paid your way",
    body: "Cards through Stripe, with you as the merchant of record. Or Bitcoin, Litecoin, Monero, Wownero, and Grin, straight into your own wallet.",
  },
  {
    title: "You own your data",
    body: "Your customers, catalog, and order history belong to you, and you can leave with all of it. No lock-in.",
  },
  {
    title: "We keep it running",
    body: "Hosting, TLS, backups, updates, and monitoring are ours to worry about. New orders ping you on Telegram or email.",
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

        {/* Lead with what the client gets, not with how we run it. The multi-tenant
            architecture is our operational concern and belongs at the bottom. */}
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
          Custom online stores
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
          An online store that looks like you built it yourself
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
          We design it around your brand, build it, host it, and keep it running. You sell
          products, merch, or appointments, take cards and cryptocurrency, and own your
          customer list outright.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
          There is nothing to pay upfront. We take a percentage of sales once you are live,
          so the store has to work for us to get paid.
        </p>

        <figure className="mb-16">
          <BrowserFrame url="your-brand.com">
            <ShowcaseVideo
              webm="/showcase/theming-morph.webm"
              mp4="/showcase/theming-morph.mp4"
              poster="/showcase/theming-morph-poster.jpg"
              label="Five demo storefronts dissolving one into the next: an artisan shop, a merch store, a crypto shop, a yoga studio, and a coaching site."
              className="block aspect-video w-full"
            />
          </BrowserFrame>
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            Five demo shops we built. Same platform underneath, and no two look alike.
          </figcaption>
        </figure>

        <section aria-labelledby="features-heading" className="mb-16">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-8">
            What you get
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

        <section aria-labelledby="demos-heading" className="mb-16">
          <h2 id="demos-heading" className="text-2xl md:text-3xl font-bold mb-2">
            See it working
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Five demo storefronts, live and clickable. Open a couple side by side: they run on
            the same platform yours would, and they look nothing like each other.
          </p>
          <DemosGallery />
        </section>

        <section aria-labelledby="surfaces-heading" className="mb-16">
          <h2 id="surfaces-heading" className="text-2xl md:text-3xl font-bold mb-2">
            Every page, not just the front one
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Product pages, catalog, cart, and checkout all carry your look. Service shops get a
            real booking calendar on the product page, which is how the yoga studio schedules
            classes and the coaching site books calls.
          </p>
          <SurfacesGallery />
        </section>

        {/* The technical detail, kept to one block at the bottom for the readers who
            want it. Everything above is written for someone deciding whether to hire us. */}
        <section aria-labelledby="stack-heading" className="section-container border-l-4 border-emerald-500 mb-16">
          <h2 id="stack-heading" className="text-2xl font-bold mb-2">Under the hood</h2>
          <p className="text-muted-foreground mb-4 max-w-3xl">
            For the technically inclined. None of this is anything you have to operate.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Backend:</strong> Medusa v2 (Node.js, PostgreSQL). Headless, so the storefront is not boxed in by a template</li>
            <li><strong>Storefront:</strong> Next.js 15 and Tailwind, built per shop and tuned for Core Web Vitals</li>
            <li><strong>Theming:</strong> a whole visual system generated per shop from one theme config, covering storefront and checkout</li>
            <li><strong>Payments:</strong> Stripe Connect, plus non-custodial BTC, LTC, XMR, WOW, and Grin</li>
            <li><strong>Fulfilment:</strong> Printful print-on-demand and dropship, or your own inventory</li>
            <li><strong>Tax:</strong> Stripe Tax, or a self-hosted single-state estimator for smaller shops</li>
            <li><strong>Hosting:</strong> our own infrastructure (VPS, pm2, Caddy) with TLS, backups, and monitoring</li>
            <li><strong>Also possible:</strong> subscriptions, bundles, B2B pricing, multi-warehouse stock, and wallet or Sign-In-With-Ethereum login</li>
          </ul>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-emerald-600 dark:text-emerald-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {/* /#contact, not /contact: the latter is a 307 redirect hop. */}
          <Link href="/#contact">
            <Button size="lg">Start a Project</Button>
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
