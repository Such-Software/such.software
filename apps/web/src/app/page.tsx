import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HomeShell } from "@/components/landing/home-shell";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";

// Server Component: the hero and sections render as static server HTML. Only the
// splash, header, nav, background (in HomeShell) and the scroll-reveal / contact
// islands ship as client JS. ServicesPreview, PortfolioGrid, and FounderSignature
// have no client features, so they hydrate to nothing.
export default function Home() {
  return (
    <HomeShell>
      <div
        id="main-content"
        className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-44 sm:pt-32 pb-10 px-4 text-center scroll-mt-28"
      >
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 pb-2"
          style={{ maxWidth: "min(calc(90vw - 120px), 100%)" }}
        >
          <span className="block">Precision Engineering</span>
          <span className="block">for Everyone</span>
        </h1>
        <p className="max-w-2xl text-xl text-muted-foreground mb-8">
          Custom e-commerce, websites, apps, and consulting. Plus our own mobile apps and games. A software studio in Kennett Square, PA.
        </p>

        <div className="flex gap-4 mb-10">
          <Link href="/products">
            <Button size="lg" className="rounded-full">View Portfolio</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="rounded-full">Start a Project</Button>
          </Link>
        </div>

        <ServicesPreview />

        <ScrollReveal className="w-full max-w-6xl mx-auto mb-16 px-4">
          <div className="text-left mb-8 section-container border-l-4 border-l-blue-500">
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Selected Works</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              Recent projects spanning e-commerce, games, payment infrastructure, and interactive web applications.
            </p>
          </div>
          <PortfolioGrid />
        </ScrollReveal>

        <ScrollReveal className="w-full max-w-6xl mx-auto mb-20 px-4">
          <div className="text-left mb-12 section-container border-l-4 border-l-purple-500">
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Inclusive by Design</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              The web should work for everyone. We engineer to meet WCAG 2.2 AA and audit
              against it, and we build for performance on older hardware and slow connections.
            </p>
          </div>
          <FounderSignature />
        </ScrollReveal>

        <ScrollReveal as="section" className="w-full mt-20 mb-20 pb-16 md:pb-0 flex flex-col items-center">
          <div id="contact" className="w-full max-w-6xl text-left mb-12 section-container border-l-4 border-l-cyan-500">
            <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Start a Project</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              Have a project in mind? Let's talk about what you need and how we can help.
            </p>
          </div>
          <ContactForm />
        </ScrollReveal>
      </div>
    </HomeShell>
  );
}
