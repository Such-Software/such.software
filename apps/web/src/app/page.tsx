"use client";

import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DynamicBackground } from "@/components/landing/dynamic-background";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [nebulaPosition, setNebulaPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Position nebula to the left of the title with a comfortable margin
        // Convert pixel position to percentage of viewport
        const titleLeftPercent = (rect.left / viewportWidth) * 100;
        const titleTopPercent = (rect.top / viewportHeight) * 100;
        
        // Place the nebula 8% to the left of where the title starts
        // and vertically aligned with the title's top area
        const nebulaX = Math.max(5, titleLeftPercent - 8);
        const nebulaY = Math.max(10, titleTopPercent - 2);
        
        setNebulaPosition({ x: nebulaX, y: nebulaY });
      }
    };

    updatePosition();
    
    // Update on resize
    window.addEventListener('resize', updatePosition);
    
    // Also update after fonts load (can affect title width)
    document.fonts?.ready.then(updatePosition);
    
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden">
      <DynamicBackground nebulaPosition={nebulaPosition} />
      <Header />

      <div id="main-content" className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-20 pb-10 px-4 text-center">
         <h1
           ref={titleRef}
           className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 pb-2"
           style={{
             // Calculated max-width to prevent nebula overlap (only matters on larger screens)
             maxWidth: 'min(calc(90vw - 120px), 100%)',
           }}
         >
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
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Selected Works</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    A curated gallery of recent projects where we've pushed the boundaries of 
                    performance, accessibility, and user experience.
                </p>
            </div>
            <PortfolioGrid />
         </div>

         <div className="w-full max-w-6xl mx-auto mb-20 px-4">
            <div className="text-left mb-12 section-container border-l-4 border-l-purple-500">
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Inclusive by Design</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    We believe the web is for everyone. Every line of code we write is 
                    audited for WCAG 2.2 compliance and high-performance across all devices.
                </p>
            </div>
            <FounderSignature />
         </div>

         <div id="contact" className="w-full mt-20 mb-20 pb-16 md:pb-0 flex flex-col items-center">
            <div className="w-full max-w-6xl text-left mb-12 section-container border-l-4 border-l-cyan-500">
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Start a Project</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    Ready to build something exceptional? Drop us a line and let's discuss 
                    how we can help you scale your digital presence.
                </p>
            </div>
            <ContactForm />
         </div>
      </div>
      <MobileNav />
    </main>
  );
}