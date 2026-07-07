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
  { q: "What does Such Software build?", a: "Four things, from one small team: custom e-commerce and web apps on revenue share, games and mobile apps we ship ourselves, cryptocurrency and payments software (integration only, never custody), and PhD-led radiation-science education. The pillars below break each down with the products behind them." },
  { q: "Do you offer nuclear and radiation education?", a: "Yes. Our founder holds a PhD in radiation-detector materials and spent six years at Lawrence Livermore National Laboratory, plus shielding and spent-fuel work at Holtec. We teach radiation-science fundamentals and Monte Carlo methods, run GEANT4 training, and speak on these topics. Our GEANT4 radiation labs are published open-source (MIT / CC-BY). This is education and published methods." },
  { q: "Where are you based?", a: "We are a software studio in Kennett Square, Pennsylvania, working with clients remotely across the US and beyond." },
  { q: "Do you build for accessibility?", a: "Yes. We engineer front-ends to meet WCAG 2.2 AA and audit against it, alongside Core Web Vitals, as part of every project." },
  { q: "How does a project start?", a: "Reach out through the contact form with what you need. We scope it, propose an approach, and from there it can run as a fixed project or a performance-based revenue-share partnership." },
  { q: "Do you take revenue-share work?", a: "Yes. For a limited number of partners we build and operate products (such as webshops) for a share of revenue instead of a large upfront fee, so our incentives line up with yours." },
];

export const metadata: Metadata = {
  title: "Web, Games, Crypto & Nuclear-Science Education | Such Software",
  description: "Four pillars from one studio: custom e-commerce and web apps on revenue share, games and mobile apps, crypto and payments software (non-custodial), and PhD-led radiation-science education and GEANT4 training. Kennett Square, PA.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web, Games, Crypto & Nuclear-Science Education | Such Software",
    description: "Four pillars from one studio: custom e-commerce and web apps on revenue share, games and mobile apps, crypto and payments software (non-custodial), and PhD-led radiation-science education and GEANT4 training.",
    type: "website",
  },
};

// ---- Pillar model -------------------------------------------------------

type Pillar = {
  id: string;
  label: string;
  accent: string; // tailwind colour stem, e.g. "blue"
  title: string;
  lead: string;
};

const pillars: Pillar[] = [
  {
    id: "commerce",
    label: "Commerce & Web",
    accent: "blue",
    title: "Commerce & custom web",
    lead: "Proprietary, headless commerce and web apps that you own, built to your business logic instead of a template's limits. Often on revenue share: we build, host, and run it, and earn a share once you are live.",
  },
  {
    id: "games",
    label: "Games & Apps",
    accent: "purple",
    title: "Games & apps",
    lead: "We do not just consult on software, we ship it. A growing catalog of games and mobile apps built in-house across iOS, Android, web, and desktop, on Godot and Next.js.",
  },
  {
    id: "crypto",
    label: "Crypto & Payments",
    accent: "cyan",
    title: "Crypto & payments",
    lead: "Software and integration for payments and cryptocurrency. The client, a licensed processor, or the user's own wallet holds the funds; we build the system around it and never take custody.",
  },
  {
    id: "education",
    label: "Education & Science",
    accent: "amber",
    title: "Education & science",
    lead: "PhD-led radiation-science teaching, training, and speaking from years at a national lab, plus learning-through-play games that teach real science and math. We publish our methods open-source.",
  },
];

// Border-left colour per accent (literal strings so Tailwind's JIT keeps them).
const borderL: Record<string, string> = {
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  cyan: "border-l-cyan-500",
  amber: "border-l-amber-500",
};
const chipAccent: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  purple: "bg-purple-500/15 text-purple-700 dark:text-purple-300",
  cyan: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  amber: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};
const hoverBorder: Record<string, string> = {
  blue: "hover:border-blue-500/30",
  purple: "hover:border-purple-500/30",
  cyan: "hover:border-cyan-500/30",
  amber: "hover:border-amber-500/30",
};

// ---- Proof items (real products behind each pillar) ---------------------

type Proof = {
  title: string;
  blurb: string;
  img?: string; // /images/products/*
  href?: string; // internal detail page or external
  tag?: string; // status pill: "Live", "Open source", "Beta", "Early", "Flagship"
};

const commerceProof: Proof[] = [
  { title: "Webshops", blurb: "Our multi-tenant commerce platform: fully-themed storefronts, print-on-demand, non-custodial crypto checkout, and automated tax, on revenue share.", img: "/images/products/occupy-wallets.png", href: "/products/webshops", tag: "Flagship" },
  { title: "Custom builds", blurb: "Real-time web apps, multiplayer experiences, and live dashboards on Next.js, Socket.io, and WebRTC.", img: "/images/products/custom-websites.svg", href: "/products/custom-websites", tag: "Live" },
  { title: "Grin BTCPay plugin", blurb: "An open-source BTCPay Server plugin we built to accept Grin (Mimblewimble) payments, including auto-Tor invoice exchange.", tag: "Open source" },
  { title: "Evaluetron", blurb: "A self-hostable AI-compute platform: one core that runs a personal image bot or a paid multi-customer service, with an append-only credit ledger and pricing built in.", tag: "Building" },
];

const gamesProof: Proof[] = [
  { title: "Suchoice", blurb: "Stop overthinking decisions: snap a photo, let AI read the options, spin the wheel. iOS and Android.", img: "/images/products/suchoice.png", href: "/products/suchoice", tag: "Live" },
  { title: "Vegan IQ", blurb: "1,000+ plant-based trivia questions across 8 categories, with a daily challenge and weekly quiz. iOS and Android.", img: "/images/products/vegan-iq.png", href: "/products/vegan-iq", tag: "Live" },
  { title: "Bloomword", blurb: "A daily word game where every word you find grows a living 3D typographic tree. Free at bloomword.earth, launching on mobile.", img: "/images/products/bloomword.svg", href: "/products/bloomword", tag: "Live" },
  { title: "Bauhaus Echo", blurb: "A visual memory puzzle game inspired by Bauhaus design. Android, iOS, and web.", img: "/images/products/bauhaus-echo.png", href: "/products/bauhaus-echo", tag: "Live" },
  { title: "Such Moon Launch", blurb: "Vry rocket, much landing, wow: a Wownero-themed pixel rocket arcade with 11 levels and tilt-to-steer. Everywhere.", img: "/images/products/such-moon-launch.png", href: "/products/such-moon-launch", tag: "Live" },
];

const cryptoProof: Proof[] = [
  { title: "Payments consulting", blurb: "Stripe and multi-processor integrations, reconciliation tooling, Monero and on-chain integration. The processor or wallet moves the money; we wire it in.", tag: "Service" },
  { title: "Smirk Wallet", blurb: "A non-custodial multi-asset browser wallet: send, receive, and tip by username on Telegram and Discord. BTC, LTC, XMR, WOW, GRIN.", img: "/images/products/smirk-wallet.png", href: "/products/smirk-wallet", tag: "Live" },
  { title: "Hash Bags", blurb: "A mobile multi-chain wallet forked from Cake Wallet, tuned for the privacy-coin ecosystem.", tag: "Beta" },
  { title: "Evaluetron", blurb: "Pay-for-compute done right: an append-only credit ledger, a job queue, and an evaluator that lets on-demand work preempt opportunistic work. Customers can never self-credit.", tag: "Building" },
];

const educationProof: Proof[] = [
  { title: "Barns & Neutrons", blurb: "A cozy exploration-puzzle game across the real Table of Nuclides: capture neutrons, coax decays, and learn honest nuclear physics. Our premiere visual work.", img: "/images/products/barns-and-neutrons.svg", href: "/products/barns-and-neutrons", tag: "Coming soon" },
  { title: "Nuclear consulting & training", blurb: "PhD-led radiation-science teaching: Monte Carlo methods with GEANT4, shielding and dose fundamentals, detector physics, and open-source labs.", href: "https://jwinterm.github.io/geant4-radiation-labs/", tag: "Service" },
  { title: "Numchangers", blurb: "A kids math game (ages 5-8) where numbers morph into dots, shapes, and 3D characters, so arithmetic becomes a visible action instead of a quiz. Godot, mobile-first.", tag: "Early" },
];

const tagStyle: Record<string, string> = {
  Flagship: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  Live: "bg-green-500/15 text-green-700 dark:text-green-300",
  Service: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  "Open source": "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  Beta: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Building: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Early: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300",
  "Coming soon": "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300",
};

function ProofCard({ p, accent }: { p: Proof; accent: string }) {
  const inner = (
    <Card className={`glass-card h-full !p-6 transition-colors ${hoverBorder[accent]}`}>
      <div className="flex items-start gap-4">
        {p.img ? (
          <Image
            src={p.img}
            alt={p.title}
            width={48}
            height={48}
            className="rounded-xl flex-shrink-0 h-12 w-12 object-cover bg-white/5"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-lg font-bold ${chipAccent[accent]}`}
          >
            {p.title.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
            {p.tag && (
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${tagStyle[p.tag] ?? chipAccent[accent]}`}>
                {p.tag}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
          {p.href && (
            <span className="mt-2 inline-block text-sm font-medium text-foreground group-hover:underline">
              Learn more →
            </span>
          )}
        </div>
      </div>
    </Card>
  );

  if (!p.href) return <div>{inner}</div>;
  const external = p.href.startsWith("http");
  return external ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      {inner}
    </a>
  ) : (
    <Link href={p.href} className="group block h-full">
      {inner}
    </Link>
  );
}

function proofFor(id: string): Proof[] {
  if (id === "commerce") return commerceProof;
  if (id === "games") return gamesProof;
  if (id === "crypto") return cryptoProof;
  return educationProof;
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      <JsonLd data={faqLd(faqs)} />
      <DataGrid />
      <Header />

      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Four things, done well
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Commerce and custom web, games and apps, crypto and payments, and
            PhD-led radiation-science education. Each pillar comes with the
            products behind it.
          </p>
        </div>

        {/* Pillar sub-nav: jump links so the page reads as four clear areas */}
        <nav aria-label="Service pillars" className="mb-16">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {pillars.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium mask-backdrop border border-white/10 text-foreground hover:border-white/30 transition-colors"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Philosophy */}
        <ScrollReveal className="mb-20">
          <div className="text-left section-container border-l-4 border-l-emerald-500">
            <h2 className="text-3xl font-bold mb-2">Partnership-first</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              We build the software and run it with you. Many projects start as a fixed
              build and continue as a revenue-share partnership, so we only win when you do.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        {pillars.map((pillar) => (
          <section
            key={pillar.id}
            id={pillar.id}
            aria-labelledby={`${pillar.id}-heading`}
            className="mb-24 scroll-mt-24"
          >
            <ScrollReveal>
              <div className={`text-left mb-10 section-container border-l-4 ${borderL[pillar.accent]}`}>
                <h2 id={`${pillar.id}-heading`} className="text-3xl font-bold mb-2">
                  {pillar.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                  {pillar.lead}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {proofFor(pillar.id).map((p) => (
                  <ProofCard key={p.title} p={p} accent={pillar.accent} />
                ))}
              </div>
            </ScrollReveal>

            {/* Education pillar carries the founder credentials inline */}
            {pillar.id === "education" && (
              <ScrollReveal>
                <Card className="glass-card border-amber-400/20 mt-6 !p-8">
                  <h3 className="text-lg font-bold mb-4">Why us, on the science</h3>
                  <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                    <li><span className="font-semibold text-foreground">PhD in radiation-detector materials</span>, UT-Dallas (2014)</li>
                    <li><span className="font-semibold text-foreground">Lawrence Livermore National Laboratory</span> (2015-2021): detector systems, radioisotope battery program, MCNP5 publications</li>
                    <li><span className="font-semibold text-foreground">Holtec International</span>: radiation shielding and spent-fuel-to-dry-cask optimization</li>
                    <li><span className="font-semibold text-foreground">College-level instructor</span>: author of open-source GEANT4 radiation labs</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/70 mt-5">
                    This is education and published open-source methods, not for-hire controlled
                    modeling. We are not a licensed professional-engineering (PE) firm and provide no
                    stamped engineering deliverables.
                  </p>
                </Card>
              </ScrollReveal>
            )}
          </section>
        ))}

        {/* Recent Work */}
        <ScrollReveal className="mb-24">
          <div className="text-left mb-10 section-container border-l-4 border-l-amber-500">
            <h2 className="text-3xl font-bold mb-2">Recent work</h2>
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

        {/* FAQ */}
        <ScrollReveal className="mt-20">
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
        <ScrollReveal className="mt-20 p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white text-center shadow-2xl relative overflow-hidden group border-2 border-white/5">
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-4xl font-bold mb-6 relative z-10 tracking-tight">Let&apos;s build together</h2>
          <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            We take on a limited number of revenue-share build partners. Tell us what you&apos;re
            building and we&apos;ll run a scope review.
          </p>
          <Link href="/contact" className="relative z-10">
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
