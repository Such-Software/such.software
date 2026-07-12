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
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-40 sm:pt-28 pb-10 px-4 text-center scroll-mt-28"
      >
        {/* Decorative aura behind the title (aria-hidden, LCP-safe, motion-safe). */}
        <div
          aria-hidden="true"
          className="hero-aura pointer-events-none absolute left-1/2 top-24 sm:top-16 -z-10 h-64 w-[46rem] max-w-[92vw] rounded-full bg-cyan-400/25 blur-3xl"
        />
        <h1
          id="hero-title"
          className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold mb-6 pb-2"
          style={{ maxWidth: "min(calc(90vw - 120px), 100%)" }}
        >
          <span className="block">Precision Engineering</span>
          <span className="block">for Everyone</span>
        </h1>
        <p className="max-w-2xl text-xl text-muted-foreground mb-8">
          Custom e-commerce, websites, apps, and consulting. Plus our own mobile apps and games. A software studio in Kennett Square, PA.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link href="/products">
            <Button size="lg" className="rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] transition-all">View Portfolio</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="rounded-full hover:scale-[1.03] transition-all">Start a Project</Button>
          </Link>
        </div>

        {/* Show, don't tell: the bento leads directly under the hero (the Selected Works
            header card was dropped to pull the work up higher). */}
        <ScrollReveal className="w-full max-w-6xl mx-auto mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">Selected Works</h2>
          <PortfolioGrid />
        </ScrollReveal>

        <ScrollReveal className="w-full">
          <ServicesPreview />
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
