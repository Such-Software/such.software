import { DynamicBackground } from "@/components/landing/dynamic-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import { SiteLogo } from "@/components/layout/site-logo";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden">
      
      <header className="z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 bg-background/50 backdrop-blur-3xl sticky top-0 rounded-b-3xl border-b border-border/50">
        <div className="flex items-center gap-8">
          <SiteLogo />
          <nav className="hidden md:flex gap-6 text-sm font-medium">
             <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
             <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>
      
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-20 pb-10 px-4 text-center">
         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 pb-2">
           Digital Craftsmanship
         </h1>
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
            <div className="text-left mb-8 px-2 border-l-2 border-blue-500/50 section-container">
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Selected Works</h3>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    A curated gallery of recent projects where we've pushed the boundaries of 
                    performance, accessibility, and user experience.
                </p>
            </div>
            <PortfolioGrid />
         </div>

         <div className="w-full max-w-6xl mx-auto mb-20 px-4">
            <div className="text-left mb-12 px-2 border-l-2 border-purple-500/50 section-container">
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Inclusive by Design</h3>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    We believe the web is for everyone. Every line of code we write is 
                    audited for WCAG 2.2 compliance and high-performance across all devices.
                </p>
            </div>
            <FounderSignature />
         </div>

         <div id="contact" className="w-full mt-20 mb-20 flex flex-col items-center">
            <div className="w-full max-w-6xl text-left mb-12 px-2 border-l-2 border-emerald-500/50 section-container">
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Start a Project</h3>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
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