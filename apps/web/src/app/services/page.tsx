import { DataGrid } from "@repo/ui/procedural/data-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import { Card } from "@repo/ui/components/card";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      
      {/* Option B: Data Grid Background for Technical Feel */}
      <DataGrid />

      <header className="z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 bg-background/50 backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter">Such Software</Link>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
             <Link href="/services" className="text-primary transition-colors">Services</Link>
             <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>

      <div className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
            Medusa v2 Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build proprietary, headless commerce engines that scale with your business logic. 
            Stop fighting with Shopify's limitations.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-indigo-500/20">
                <h3 className="text-xl font-bold mb-2">Unlimited Data Modeling</h3>
                <p className="text-sm text-muted-foreground">
                    Need a product with "DNA Sequence", "Artist Bio", and "Royalty Logic"? 
                    We model that natively in the database, not via hacky meta-fields.
                </p>
            </Card>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-indigo-500/20">
                <h3 className="text-xl font-bold mb-2">Workflow Orchestration</h3>
                <p className="text-sm text-muted-foreground">
                     Automate complex business logic—like splitting an order between a print-on-demand provider 
                     and a local warehouse automatically using Medusa Workflows.
                </p>
            </Card>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-indigo-500/20">
                <h3 className="text-xl font-bold mb-2">Headless Performance</h3>
                <p className="text-sm text-muted-foreground">
                    We couple the robust Medusa backend with a Next.js 16 frontend, ensuring your shop 
                    scores 100/100 on Core Web Vitals and SEO.
                </p>
            </Card>
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to upgrading your shop?</h2>
            <p className="mb-8 text-slate-300">
                We are currently accepting beta partners for our new Medusa v2 accelerator.
            </p>
            <Link href="/#contact">
                <Button size="lg" variant="secondary" className="rounded-full">
                    Request a Demo
                </Button>
            </Link>
        </div>
      </div>

    </main>
  );
}