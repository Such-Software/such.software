import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barns & Neutrons: Chart of Nuclides Game | Such Software",
  description: "Barns & Neutrons is a cozy exploration-puzzle game across the real Chart of Nuclides. Capture neutrons, coax decays, and learn honest, cited nuclear physics. In development.",
  alternates: { canonical: "/products/barns-and-neutrons" },
  keywords: [
    "table of nuclides game",
    "nuclear physics game",
    "edutainment game",
    "isotope game",
    "neutron capture",
    "radiochemistry game",
    "barns and neutrons",
  ],
  openGraph: {
    title: "Barns & Neutrons: A Game About the Chart of Nuclides",
    description: "A cozy, honest expedition across the real Chart of Nuclides — the anti-spreadsheet. In development by Such Software.",
    type: "website",
    url: "/products/barns-and-neutrons",
  },
};

const faqs = [
  { q: "What is Barns & Neutrons?", a: "A cozy exploration-puzzle game set on the real Chart of Nuclides — the grid of every known isotope. You start on a small island of known nuclides and each step into the dark is a small physics puzzle: capture a neutron, coax a decay. The reward is discovery, as a new nuclide lights up and its Compendium entry unfolds." },
  { q: "Is it educational?", a: "Yes, but through play, not lectures. Every animation reflects real physics, and discoveries unlock real-world context (Tc-99m in medical imaging, Am-241 in smoke detectors, C-14 in dating) along with half-lives, Q-values, and cornerstone papers. The data is grounded in open sources like ENDF, IAEA, and NIST." },
  { q: "What does “Barns” mean?", a: "A barn is the real unit of nuclear cross-section (10⁻²⁴ cm²) — a measure of how likely a nucleus is to interact with a neutron. The neutron-capture puzzles are literally about tuning energy to hit that cross-section." },
  { q: "What platforms will it be on?", a: "It is built in Godot for desktop (Windows, macOS, Linux) and mobile (iOS, Android)." },
  { q: "When is it out?", a: "It is in active development. The first playable slice (the Mo-99 → Tc-99m neighborhood) is the current milestone. Follow Such Software for release news." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Barns & Neutrons",
  url: "https://such.software/products/barns-and-neutrons",
  description:
    "A cozy exploration-puzzle game across the real Chart of Nuclides. Capture neutrons, coax decays, and learn honest, cited nuclear physics.",
  applicationCategory: "Game",
  genre: ["Puzzle", "Educational", "Simulation"],
  gamePlatform: ["PC", "iOS", "Android"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "Discovery is the loop", body: "No linear tech tree. You explore a real, enormous map of ~3,300 nuclides. Completionism and pure curiosity pull you deeper, with no timers and no game-overs." },
  { title: "Honest physics", body: "When reality and a cuter lie compete, reality wins — then we make reality beautiful. Neutron scattering is forward-peaked at fast energies because it actually is." },
  { title: "Failure is serendipity", body: "Miss a neutron capture and the nucleus does what it really would — maybe a decay instead. You discover a different nuclide and learn real behavior. No punishment, only discovery." },
  { title: "The Compendium", body: "Every discovered isotope unlocks a card: real uses, half-lives, Q-values, and a link to a cornerstone paper (Fermi, Chadwick, Hahn & Strassmann). You learn the history, not just the facts." },
  { title: "A 3D tabletop, not a spreadsheet", body: "A tilted, extruded ceramic-tile board with a glowing valley of stability and dramatic discovery vignettes. Cozy, warm, and tactile." },
  { title: "Open core", body: "The physics, data, and code are open; the art, prose, and Compendium illustrations are ours. Facts aren't copyrightable, and we cite them anyway." },
];

export default function BarnsAndNeutronsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Barns & Neutrons", path: "/products/barns-and-neutrons" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/barns-and-neutrons.svg" alt="Barns & Neutrons icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-yellow-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400 mb-1">
              In Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 leading-none">
              Barns &amp; Neutrons
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">A cozy, honest expedition across the real Chart of Nuclides — the anti-spreadsheet.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Barns &amp; Neutrons is a calm puzzle game about the real Chart of Nuclides. You begin on a
            tiny lit island of known isotopes, and each step into the dark is a small, elegant physics
            puzzle — capture a neutron, coax a decay. The reward is discovery: a new nuclide lights up
            and its Compendium entry unfolds. It is our flagship edutainment title, and it shares its
            DNA with our founder&rsquo;s open-source{" "}
            <a href="https://jwinterm.github.io/geant4-radiation-labs/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-400 hover:underline">GEANT4 radiation labs</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-yellow-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-yellow-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Engine:</strong> Godot 4, one codebase for desktop and mobile.</li>
            <li><strong>The board:</strong> all ~3,300 nuclides rendered in a single 3D instance, with a glowing valley of stability.</li>
            <li><strong>Ground truth:</strong> nuclear data from ENDF/B-VIII.0, IAEA, and NIST, with clickable citations in-game.</li>
            <li><strong>Honest model:</strong> real cross-sections, real decay modes, real moderation physics.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-yellow-600 dark:text-yellow-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mb-12">
          Curious about the science behind it? See our{" "}
          <Link href="/services" className="text-yellow-600 dark:text-yellow-400 hover:underline">nuclear &amp; radiation modeling</Link>
          {" "}work.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">All Products</Link>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">Get notified / Feedback</Link>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
