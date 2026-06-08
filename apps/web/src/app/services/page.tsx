import { DataGrid } from "@repo/ui/procedural/data-grid";
import { Button } from "@repo/ui/components/button";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@repo/ui/components/card";
import { JsonLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const faqs = [
  { q: "What does Such Software build?", a: "Custom e-commerce on Medusa v2, real-time web apps and multiplayer experiences, cryptocurrency and Monero integrations, and PhD-led radiation-science education. We work across the stack, from backend infrastructure to accessible front-ends." },
  { q: "Do you offer nuclear and radiation education?", a: "Yes. Our founder holds a PhD in radiation-detector materials and spent six years at Lawrence Livermore National Laboratory, plus shielding and spent-fuel work at Holtec. We teach radiation-science fundamentals and Monte Carlo methods, run GEANT4 training, and speak on these topics. Our GEANT4 radiation labs are published open-source (MIT / CC-BY). This is education and published methods, not for-hire controlled modeling." },
  { q: "Where are you based?", a: "We are a software studio in Kennett Square, Pennsylvania, working with clients remotely across the US and beyond." },
  { q: "Do you build for accessibility?", a: "Yes. We engineer front-ends to meet WCAG 2.2 AA and audit against it, alongside Core Web Vitals, as part of every project." },
  { q: "How does a project start?", a: "Reach out through the contact form with what you need. We scope it, propose an approach, and from there it can run as a fixed project or a performance-based revenue-share partnership." },
  { q: "Do you take revenue-share work?", a: "Yes. For a limited number of partners we build and operate products (such as webshops) for a share of revenue instead of a large upfront fee, so our incentives line up with yours." },
];

export const metadata: Metadata = {
  title: "Web, Crypto & Nuclear-Science Education | Such Software",
  description: "Custom e-commerce on Medusa v2, real-time web apps, crypto and Monero integration, and PhD-led radiation-science education and GEANT4 training. A Kennett Square, PA studio.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web, Crypto & Nuclear-Science Education | Such Software",
    description: "Custom e-commerce on Medusa v2, real-time web apps, crypto and Monero integration, and PhD-led radiation-science education and GEANT4 training. A Kennett Square, PA studio.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      <JsonLd data={faqLd(faqs)} />
      <DataGrid />
      <Header />

      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Specialized Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Commerce and custom web apps, crypto and payment integration, and
            PhD-led radiation-science education.
          </p>
        </div>

        {/* Philosophy Card */}
        <ScrollReveal className="mb-20">
            <div className="text-left section-container border-l-4 border-l-emerald-500">
                <h2 className="text-3xl font-bold mb-2">Partnership-First Development</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">
                   We build the software and run it with you. Many projects start as a fixed
                   build and continue as a revenue-share partnership.
                </p>
            </div>
        </ScrollReveal>

        {/* E-Commerce Section */}
        <ScrollReveal className="mb-24">
            <div className="text-left mb-10 section-container border-l-4 border-l-blue-500">
                <h2 className="text-3xl font-bold mb-2">Custom E-Commerce Engines</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    We build proprietary, headless commerce engines that scale with your business logic.
                    Stop fighting with Shopify's limitations and own your infrastructure.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Flexible Architecture</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Model your exact business logic (subscriptions, bundles, B2B pricing,
                        multi-warehouse inventory) without platform constraints.
                    </p>
                </Card>
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Revenue-Share Model</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        No upfront fees. No monthly retainers. We earn a low percentage of sales after launch. Aligned incentives, no fixed-cost risk.
                    </p>
                </Card>
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Performance-First Frontend</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Custom Next.js storefronts, engineered against Core Web Vitals and
                        WCAG 2.2 AA, not template bloat.
                    </p>
                </Card>
            </div>
        </ScrollReveal>

        {/* Custom Apps Section */}
        <ScrollReveal className="mb-24">
            <div className="text-left mb-10 section-container border-l-4 border-l-purple-500">
                <h2 className="text-3xl font-bold mb-2">Custom Apps & Interactive Websites</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    Whether it's a real-time collaborative tool or a high-end brand experience,
                    we deliver fast, accessible web applications.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card hover:border-purple-500/30">
                    <h3 className="text-xl font-bold mb-3">Real-time Platforms</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Socket.io and WebRTC integration for collaborative tools, dashboards,
                        and live data visualization.
                    </p>
                </Card>
                <Card className="glass-card hover:border-purple-500/30">
                    <h3 className="text-xl font-bold mb-3">Brand Motion & Interactive UX</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Scroll-driven narratives, data-reactive visuals, and Three.js scenes, built to stay fast on real devices.
                    </p>
                </Card>
            </div>
        </ScrollReveal>

        {/* Consulting umbrella */}
        <ScrollReveal className="mb-12">
            <div className="text-left section-container border-l-4 border-l-teal-500">
                <h2 className="text-3xl font-bold mb-2">Consulting</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    Beyond build work, we consult on cryptocurrency and Monero integration:
                    software and integration only. We don't take custody of funds or move them
                    on anyone's behalf.
                </p>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mt-3">
                    We also teach radiation science. Our founder holds a PhD and spent six years
                    at Lawrence Livermore National Laboratory; that background now goes into
                    training, talks, and open-source GEANT4 labs. Details below.
                </p>
            </div>
        </ScrollReveal>

        {/* Crypto Section */}
        <ScrollReveal className="mb-24">
            <div className="text-left mb-10 section-container border-l-4 border-l-cyan-500">
                <h2 className="text-3xl font-bold mb-2">Cryptocurrency &amp; Payments</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    Software and integration for accepting payments and crypto. The client or a
                    licensed processor holds the funds; we build the system around it.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card hover:border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-3">Payment Integration</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Stripe and multi-processor integrations, reconciliation tooling, and
                        webhook plumbing. The processor moves the money; we wire it in.
                    </p>
                </Card>
                <Card className="glass-card hover:border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-3">Web3 Integration</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Non-custodial wallet auth, Monero and on-chain integrations, and smart
                        contract interactions. We integrate; we never custody funds.
                    </p>
                </Card>
            </div>
        </ScrollReveal>

        {/* Nuclear & Radiation-Science Education Section */}
        <ScrollReveal className="mb-24">
            <div className="text-left mb-10 section-container border-l-4 border-l-cyan-400">
                <h2 className="text-3xl font-bold mb-2">Nuclear &amp; Radiation-Science Education</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    PhD-led radiation-science teaching, training, and speaking, built on years at
                    a national lab. We publish our methods open-source and teach them; we don't
                    take on for-hire controlled modeling.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card hover:border-cyan-400/30">
                    <h3 className="text-xl font-bold mb-3">Monte Carlo Methods</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        We teach radiation-transport Monte Carlo with <span className="font-semibold text-foreground">GEANT4</span>, grounded in
                        a published <span className="font-semibold text-foreground">MCNP</span> track record
                        (<a href="https://scholar.google.com/citations?user=xTyYIKkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline decoration-cyan-400/50 hover:text-primary transition-colors">peer-reviewed papers</a>).
                    </p>
                </Card>
                <Card className="glass-card hover:border-cyan-400/30">
                    <h3 className="text-xl font-bold mb-3">Shielding &amp; Dose Concepts</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Coursework on shielding and dose fundamentals, drawn from real spent-fuel
                        and dry-cask experience at Holtec.
                    </p>
                </Card>
                <Card className="glass-card hover:border-cyan-400/30">
                    <h3 className="text-xl font-bold mb-3">Detectors &amp; Isotopes</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Teaching on radiation-detector physics and radioisotope power
                        (RTG / betavoltaic), from PhD and national-lab work.
                    </p>
                </Card>
                <Card className="glass-card hover:border-cyan-400/30">
                    <h3 className="text-xl font-bold mb-3">Training &amp; Curriculum</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Radiation-science training and coursework for teams and classrooms. See our open-source{" "}
                        <a
                            href="https://jwinterm.github.io/geant4-radiation-labs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground underline decoration-cyan-400/50 hover:text-primary transition-colors"
                        >
                            GEANT4 radiation labs
                        </a>.
                    </p>
                </Card>
            </div>
            <Card className="glass-card border-cyan-400/20">
                <h3 className="text-lg font-bold mb-4">Why us</h3>
                <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                    <li>
                        <span className="font-semibold text-foreground">PhD in radiation-detector materials</span>, UT-Dallas (2014)
                    </li>
                    <li>
                        <span className="font-semibold text-foreground">Lawrence Livermore National Laboratory</span> (2015–2021): detector systems, radioisotope battery program, MCNP5 publications
                    </li>
                    <li>
                        <span className="font-semibold text-foreground">Holtec International</span>: radiation shielding and spent-fuel-to-dry-cask optimization
                    </li>
                    <li>
                        <span className="font-semibold text-foreground">College-level instructor</span>: author of open-source GEANT4 radiation labs
                    </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-5">
                    For training, speaking, or curriculum, PhD-led.{" "}
                    <Link href="/#contact" className="font-semibold text-foreground underline decoration-cyan-400/50 hover:text-primary transition-colors">
                        Start with a scope review
                    </Link>.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-3">
                    This is education and published open-source methods, not for-hire controlled
                    modeling. We are not a licensed professional-engineering (PE) firm and provide no
                    stamped engineering deliverables.
                </p>
            </Card>
        </ScrollReveal>

        {/* Recent Work */}
        <ScrollReveal className="mb-24">
            <div className="text-left mb-10 section-container border-l-4 border-l-amber-500">
                <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
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

        <ScrollReveal className="mt-20">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqs.map((f) => (
                    <div key={f.q}>
                        <h3 className="text-xl font-bold mb-1">{f.q}</h3>
                        <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                ))}
            </div>
        </ScrollReveal>

        <ScrollReveal className="mt-20 p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white text-center shadow-2xl relative overflow-hidden group border-2 border-white/5">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl font-bold mb-6 relative z-10 tracking-tight">Let's build together</h2>
            <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                We take on a limited number of revenue-share build partners. Tell us what you're
                building and we'll run a scope review.
            </p>
            <Link href="/#contact" className="relative z-10">
                <Button size="lg" variant="secondary" className="rounded-2xl px-12 py-8 text-xl font-bold hover:scale-105 transition-transform bg-white text-slate-900 hover:bg-slate-100">
                    Request a Consultation
                </Button>
            </Link>
        </ScrollReveal>
      </div>
      <MobileNav />
    </main>
  );
}