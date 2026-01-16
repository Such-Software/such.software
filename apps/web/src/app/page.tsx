import { DynamicBackground } from "@/components/landing/dynamic-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden">
      
      <header className="z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 pb-2">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold tracking-tighter">Such Software</h1>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
             <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
             <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>
      
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-20 pb-10 px-4 text-center">
         <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 pb-2">
           Digital Craftsmanship
         </h2>
         <p className="max-w-2xl text-xl text-muted-foreground mb-8">
           Next-generation web applications engineered for scale, compliance, and performance.
         </p>
         
         <div className="flex gap-4 mb-10">
            <Link href="/services">
              <Button size="lg" className="rounded-full">
                Explore Services
              </Button>
            </Link>
            <Link href="#contact">
               <Button variant="outline" size="lg" className="rounded-full">
                 Start a Project
               </Button>
            </Link>
         </div>

         <ServicesPreview />
         
         <div className="w-full max-w-6xl mx-auto mb-16 px-4">
            <div className="text-left mb-8 px-2 border-l-2 border-blue-500/50 pl-6">
                <h3 className="text-2xl font-bold mb-2">Selected Works</h3>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    A curated gallery of recent projects where we've pushed the boundaries of 
                    performance, accessibility, and user experience.
                </p>
            </div>
            <PortfolioGrid />
         </div>

         <div className="w-full max-w-6xl mx-auto mb-16 px-4">
            <div className="text-left mb-8 px-2 border-l-2 border-purple-500/50 pl-6">
                <h3 className="text-2xl font-bold mb-2">Inclusive by Design</h3>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    We believe the web is for everyone. Every line of code we write is 
                    audited for WCAG 2.1 compliance and high-performance across all devices.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <Card className="p-8 bg-card/50 backdrop-blur-sm border-purple-500/10 hover:border-purple-500/30 transition-all group">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                     <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 text-sm">01</span>
                     A11y First Architecture
                  </h4>
                  <p className="text-muted-foreground text-sm">
                     Semantic HTML, ARIA patterns, and keyboard navigation aren't afterthoughts—they are the foundation of our build process.
                  </p>
               </Card>
               <Card className="p-8 bg-card/50 backdrop-blur-sm border-blue-500/10 hover:border-blue-500/30 transition-all group">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                     <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm">02</span>
                     Edge Performance
                  </h4>
                  <p className="text-muted-foreground text-sm">
                     By leveraging edge computing and static generation, we ensure your site is usable even on 3G connections and older hardware.
                  </p>
               </Card>
            </div>
         </div>

         <FounderSignature />

         <div id="contact" className="w-full mt-20 mb-20 flex flex-col items-center">
            <div className="w-full max-w-6xl text-left mb-12 px-2 border-l-2 border-emerald-500/50 pl-6">
                <h3 className="text-2xl font-bold mb-2">Start a Project</h3>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    Ready to build something exceptional? Drop us a line and let's discuss 
                    how we can help you scale your digital presence.
                </p>
            </div>
            <ContactForm />
         </div>
      </div>
    </main>
  );
}