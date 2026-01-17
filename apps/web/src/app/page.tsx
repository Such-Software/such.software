import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import { Header } from "@/components/layout/header";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden">
      <Header />

      <div id="main-content" className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-20 pb-10 px-4 text-center">
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
            <div className="text-left mb-8 section-container border-l-4 border-l-blue-500">
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Selected Works</h3>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    A curated gallery of recent projects where we've pushed the boundaries of 
                    performance, accessibility, and user experience.
                </p>
            </div>
            <PortfolioGrid />
         </div>

         <div className="w-full max-w-6xl mx-auto mb-20 px-4">
            <div className="text-left mb-12 section-container border-l-4 border-l-purple-500">
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Inclusive by Design</h3>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    We believe the web is for everyone. Every line of code we write is 
                    audited for WCAG 2.2 compliance and high-performance across all devices.
                </p>
            </div>
            <FounderSignature />
         </div>

         <div id="contact" className="w-full mt-20 mb-20 flex flex-col items-center">
            <div className="w-full max-w-6xl text-left mb-12 section-container border-l-4 border-l-cyan-500">
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