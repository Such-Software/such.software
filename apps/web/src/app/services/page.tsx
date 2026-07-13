import { DataGrid } from "@repo/ui/procedural/data-grid";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { JsonLd, faqLd } from "@/components/seo/json-ld";
import { PillarCards } from "@/components/services/pillar-cards";
import { ServicesCta } from "@/components/services/services-cta";
import { faqs } from "@/lib/services";
import { Card } from "@repo/ui/components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web, Games, Crypto & Nuclear-Science Education | Such Software",
  description:
    "Four pillars from one studio: custom e-commerce and web apps on revenue share, games and mobile apps, crypto and payments software (non-custodial), and PhD-led radiation-science education and GEANT4 training. Kennett Square, PA.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web, Games, Crypto & Nuclear-Science Education | Such Software",
    description:
      "Four pillars from one studio: custom e-commerce and web apps on revenue share, games and mobile apps, crypto and payments software (non-custodial), and PhD-led radiation-science education and GEANT4 training.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      <JsonLd data={faqLd(faqs.map(({ q, a }) => ({ q, a })))} />
      <DataGrid />
      <Header />

      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            What we build
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Commerce and custom web, games and apps, crypto and payments, and
            education from radiation science to word games. Pick a pillar to see
            the products behind it.
          </p>
        </div>

        {/* The four pillars, each its own page */}
        <ScrollReveal className="mb-20">
          <PillarCards />
        </ScrollReveal>

        {/* Philosophy */}
        <ScrollReveal className="mb-20">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold mb-2">Partnership-first</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              We build the software and run it with you. Many projects start as a fixed
              build and continue as a revenue-share partnership, so we only win when you do.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Scope", b: "Tell us what you're building. We scope it and propose an approach, as a fixed project or a revenue-share partnership." },
              { n: "02", t: "Build", b: "We build it to your business logic on our own stack, and host it on our infrastructure. You own the result." },
              { n: "03", t: "Run it together", b: "Most projects continue as a partnership: we operate and improve it, and earn a share once you're live." },
            ].map((s) => (
              <Card key={s.n} className="glass-card h-full !p-7 hover:border-emerald-500/30 transition-colors">
                <div className="text-2xl font-bold text-emerald-500/80 mb-3 font-mono">{s.n}</div>
                <h3 className="text-lg font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.b}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Recent work */}
        <ScrollReveal className="mb-20">
          <div className="text-left mb-6">
            <h2 className="text-3xl font-bold mb-2">Recent work</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Long-term partnerships over one-off projects.
            </p>
          </div>
          <Card className="glass-card hover:border-amber-500/30">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/images/products/occupy-wallets.png"
                alt="Occupy Wallets"
                width={72}
                height={72}
                className="rounded-xl flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">Occupy Wallets</h3>
                <a
                  href="https://occupywallets.art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  occupywallets.art
                </a>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              With us since day one. Five years on WordPress, migrating to a custom Medusa v2 storefront this spring.
            </p>
          </Card>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal className="mb-20">
          <div className="section-container border-l-4 border-l-indigo-500">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-xl font-bold mb-1">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <ServicesCta />
        </ScrollReveal>
      </div>
      <MobileNav />
    </main>
  );
}
