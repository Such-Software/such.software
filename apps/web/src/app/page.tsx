import { DynamicBackground } from "@/components/landing/dynamic-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

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
         
         <div className="grid gap-4 w-full">
            <h3 className="text-3xl font-bold text-left w-full mt-10 mb-6 px-4">Selected Works</h3>
            <PortfolioGrid />
         </div>

         <FounderSignature />

         <div id="contact" className="w-full mt-20 mb-10 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-8">Start a Project</h3>
            <ContactForm />
         </div>
      </div>
    </main>
  );
}