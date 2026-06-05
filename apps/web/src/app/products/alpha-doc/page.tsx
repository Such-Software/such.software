import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Doc: An Academic-Horror Roguelike | Such Software",
  description: "Alpha Doc is a top-down roguelike where you're the irradiated PhD student. Master four kinds of radiation and descend to your thesis defense. In development.",
  alternates: { canonical: "/products/alpha-doc" },
  keywords: [
    "roguelike",
    "academic horror game",
    "radiation game",
    "indie roguelike",
    "physics game",
    "alpha doc",
  ],
  openGraph: {
    title: "Alpha Doc: An Academic-Horror Roguelike",
    description: "A top-down roguelike where you're the disaster. Master four kinds of radiation and decide if the truth matters more than your PhD. In development.",
    type: "website",
    url: "/products/alpha-doc",
  },
};

const faqs = [
  { q: "What is Alpha Doc?", a: "A top-down roguelike set in a physics research facility warped by a containment breach. You play a doctoral candidate who caused the disaster the same night as their thesis defense — now irradiated, you descend through five department wings to face the Committee." },
  { q: "What are the four radiation types?", a: "Alpha, Beta, Gamma, and Neutron, each a distinct playstyle. Neutron is the standout: it's not a weapon but an environmental transmutation tool — you reshape the map itself, destroying cover and creating hazards before a fight even starts." },
  { q: "Is there a morality system?", a: "Yes, but it's never an explicit choice. The aggressive play that wins fights also destroys the evidence of your culpability. Your standing is inferred from the world and reflected in four different endings — you can't quite feel good about winning." },
  { q: "How will it be sold?", a: "Modern shareware: a free, complete first sector (the Grant Office), then a single one-time purchase to unlock the rest. No ads, no microtransactions, no energy timers." },
  { q: "When is it out?", a: "It's in active development — a playable vertical slice exists. Follow Such Software for release news on Steam, itch.io, iOS, and Android." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Alpha Doc",
  url: "https://such.software/products/alpha-doc",
  description:
    "A top-down academic-horror roguelike. Descend through a warped physics facility, master four types of radiation, and decide if the truth matters more than your PhD.",
  applicationCategory: "Game",
  genre: ["Roguelike", "Action", "Indie"],
  gamePlatform: ["PC", "iOS", "Android"],
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  { title: "Four-element combat", body: "Alpha, Beta, Gamma, and Neutron are four real playstyles, not reskins. Each rewards a different read of the room." },
  { title: "Neutron reshapes the map", body: "The Neutron element transmutes the environment — destroy cover, open paths, arm dormant hazards. You change the battlefield before the battle." },
  { title: "Instability as a dial", body: "Push instability for harder-hitting shots at a slower fire rate, or dial it back and let it decay. Tension, not a punishment cliff." },
  { title: "Emergent morality", body: "No morality meter. Burning evidence for power quietly shifts dialogue, companion reactions, and which of four endings you reach." },
  { title: "Academic horror", body: "Your enemies are colleagues with real grievances — the reviewer you ignored, the safety inspector you overruled, the adjuncts caught in the blast." },
  { title: "Respectful premium design", body: "Free first sector, one-time unlock, no ads or timers. The systems are built for a complete experience, not a monetization funnel." },
];

export default function AlphaDocPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Alpha Doc", path: "/products/alpha-doc" },
      ])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/alpha-doc.svg" alt="Alpha Doc icon" width={64} height={64} className="rounded-2xl" />
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-1">
              In Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 leading-none">
              Alpha Doc
            </h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">A top-down roguelike where you&rsquo;re the disaster.</p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            It is 2:07 AM. A fifth-year PhD student has just caused a catastrophic accelerator overload,
            irradiating the building and everyone in it — and the thesis defense is at 8:00 AM. Descend
            through five warped department wings, master four types of radiation, and decide whether to
            bury the evidence or face the Committee. Alpha Doc is a systems-driven roguelike with dark
            academic teeth.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">What makes it different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-orange-500/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-orange-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Engine:</strong> Godot 4 (.NET / C#) with a fixed 3/4 orthographic camera.</li>
            <li><strong>Procedural generation:</strong> BSP rooms and constraint-solved layouts for endless runs.</li>
            <li><strong>Structure:</strong> five sectors, four bosses plus a multi-phase thesis defense, and four endings.</li>
            <li><strong>Platforms:</strong> Steam and itch.io on desktop, plus iOS and Android.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-orange-600 dark:text-orange-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

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
