import { DataGrid } from "@repo/ui/procedural/data-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@repo/ui/components/button";
import { SiteLogo } from "@/components/layout/site-logo";
import Link from "next/link";
import { Card } from "@repo/ui/components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Such Software",
  description: "Medusa v2 development, custom web applications, and cryptocurrency consulting. High-performance headless commerce, real-time platforms, and Web3 integration.",
  openGraph: {
    title: "Services | Such Software",
    description: "Medusa v2 development, custom web applications, and cryptocurrency consulting.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      
      {/* Option B: Data Grid Background for Technical Feel */}
      <DataGrid />

      <header className="z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 bg-background/50 backdrop-blur-3xl sticky top-0 border-b border-border/50 rounded-b-3xl">
        <div className="flex items-center gap-8">
          <SiteLogo />
          <nav className="hidden md:flex gap-6 text-sm font-medium">
             <Link href="/services" className="text-primary transition-colors">Services</Link>
             <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>

      <div className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        {/* Context Header */}
        <div className="mb-20">
            <div className="text-left mb-8 px-2 border-l-2 border-emerald-500/50 section-container">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                  Specialized Solutions
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                   We solve complex business problems with elegant architecture. 
                   Whether you're scaling a commerce empire or building a new financial protocol, 
                   we provide the technical firepower.
                </p>
            </div>
        </div>

        {/* Medusa / Webshops Section */}
        <div className="mb-24">
            <div className="text-left mb-8 px-2 border-l-2 border-blue-500/50 section-container mb-10">
                <h2 className="text-3xl font-bold mb-2">Medusa v2 Development</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    We build proprietary, headless commerce engines that scale with your business logic. 
                    Stop fighting with Shopify's limitations and own your infrastructure.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Unlimited Data Modeling</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Natively model complex entities like "DNA Sequences" or "Royalty Logic" 
                        directly in the database without hacky metadata.
                    </p>
                </Card>
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Zero Capital Upfront</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Our "Toast" style partnership means we win when you win. Low friction onboarding 
                        with performance-based incentives.
                    </p>
                </Card>
                <Card className="glass-card hover:border-indigo-500/30">
                    <h3 className="text-xl font-bold mb-3">Headless SEO</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Custom Next.js frontends engineered for perfect lighthouse scores and 
                        superior organic search conversion.
                    </p>
                </Card>
            </div>
        </div>

        {/* Custom Apps Section */}
        <div className="mb-24">
            <div className="text-left mb-8 px-2 border-l-2 border-purple-500/50 section-container mb-10">
                <h2 className="text-3xl font-bold mb-2">Custom Apps & Interactive Websites</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    Whether it's a real-time collaborative tool or a high-end brand experience, 
                    we build performant web applications that delight users.
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
                    <h3 className="text-xl font-bold mb-3">Brand Motion</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Framermotion and Three.js powered interfaces that tell your brand's story 
                        through motion and depth.
                    </p>
                </Card>
            </div>
        </div>

        {/* Crypto Section */}
        <div className="mb-24">
            <div className="text-left mb-8 px-2 border-l-2 border-cyan-500/50 section-container mb-10">
                <h2 className="text-3xl font-bold mb-2">Cryptocurrency & Payment Consulting</h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    Navigate the complex world of global finance. We bridge the gap between 
                    traditional banking and decentralized protocols.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card hover:border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-3">Payment Orchestration</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Multi-PSP routing, automated reconciliation, and fraud prevention for 
                        high-volume merchants.
                    </p>
                </Card>
                <Card className="glass-card hover:border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-3">Web3 Integration</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Non-custodial wallet auth, on/off ramp solutions, and smart contract 
                        interactions for modern dApps.
                    </p>
                </Card>
            </div>
        </div>

        <div className="mt-20 p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white text-center shadow-2xl relative overflow-hidden group border-2 border-white/5">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl font-bold mb-6 relative z-10 tracking-tight">Start building the future</h2>
            <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                We are currently accepting a limited number of partners for performance-based development. 
                Let's see if we're a fit.
            </p>
            <Link href="/#contact" className="relative z-10">
                <Button size="lg" variant="secondary" className="rounded-2xl px-12 py-8 text-xl font-bold hover:scale-105 transition-transform bg-white text-slate-900 hover:bg-slate-100">
                    Request a Consultation
                </Button>
            </Link>
        </div>
      </div>

    </main>
  );
}