"use client";

import { PortfolioGrid } from "@/components/portfolio/bento-grid";
import { ContactForm } from "@/components/contact/contact-form";
import { FounderSignature } from "@/components/about/founder-signature";
import { ServicesPreview } from "@/components/landing/services-preview";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DynamicBackground } from "@/components/landing/dynamic-background";
import { HeroSplash } from "@/components/landing/hero-splash";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Avoid the "useLayoutEffect does nothing on the server" warning during SSR.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
  // The splash owns the first screen. Once the visitor scrolls through it (or hits
  // "Explore"), we "enter" the site: the splash unmounts for good and the real hero,
  // header, bottom nav, and background take over. Scrolling back up lands on the hero,
  // never the splash again.
  const [entered, setEntered] = useState(false);
  const splashRef = useRef<HTMLElement>(null);
  const restoreScroll = useRef(0);

  // Respect prefers-reduced-motion: skip the splash entirely and land straight on
  // the main hero, on desktop and mobile. Runs before paint, so the splash never
  // flashes for these visitors.
  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEntered(true);
    }
  }, []);

  // Deliberately place the nebula/monitor just to the left of the hero title, at any
  // screen width (restored from the original hero).
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [nebulaPosition, setNebulaPosition] = useState<{ x: number; y: number } | null>(null);

  // Dismiss the splash once it has fully scrolled out of view.
  useEffect(() => {
    if (entered) return;
    const el = splashRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          restoreScroll.current = Math.max(0, window.scrollY - el.offsetHeight);
          setEntered(true);
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [entered]);

  // After the splash unmounts, keep the visitor's position in the content stable
  // (no jump). Runs before paint.
  useIsoLayoutEffect(() => {
    if (entered) window.scrollTo(0, restoreScroll.current);
  }, [entered]);

  // Compute the nebula position from the title. Recompute once entered (the title is
  // now in its final on-screen position) and on resize / font load.
  useEffect(() => {
    const updatePosition = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      const titleLeftPercent = (rect.left / window.innerWidth) * 100;
      const titleTopPercent = (rect.top / window.innerHeight) * 100;
      setNebulaPosition({
        x: Math.max(5, titleLeftPercent - 8),
        y: Math.max(10, titleTopPercent - 2),
      });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    document.fonts?.ready.then(updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [entered]);

  const enterFromButton = () => {
    restoreScroll.current = 0;
    setEntered(true);
  };

  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      <DynamicBackground nebulaPosition={nebulaPosition} visible={entered} />
      <Header floating visible={entered} />

      {!entered && <HeroSplash sectionRef={splashRef} onEnter={enterFromButton} />}

      <div id="main-content" className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-32 pb-10 px-4 text-center scroll-mt-28">
         <h1
           ref={titleRef}
           className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 pb-2"
           style={{ maxWidth: "min(calc(90vw - 120px), 100%)" }}
         >
           <span className="block">Precision Engineering</span>
           <span className="block">for Everyone</span>
         </h1>
         <p className="max-w-2xl text-xl text-muted-foreground mb-8">
           Custom e-commerce, websites, apps, and consulting. Plus our own mobile apps and games. A software studio in Kennett Square, PA.
         </p>

         <div className="flex gap-4 mb-10">
            <Link href="/products">
              <Button size="lg" className="rounded-full">View Portfolio</Button>
            </Link>
            <Link href="#contact">
               <Button variant="outline" size="lg" className="rounded-full">Start a Project</Button>
            </Link>
         </div>

         <ServicesPreview />

         <ScrollReveal className="w-full max-w-6xl mx-auto mb-16 px-4">
            <div className="text-left mb-8 section-container border-l-4 border-l-blue-500">
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Selected Works</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    Recent projects spanning e-commerce, games, payment infrastructure, and interactive web applications.
                </p>
            </div>
            <PortfolioGrid />
         </ScrollReveal>

         <ScrollReveal className="w-full max-w-6xl mx-auto mb-20 px-4">
            <div className="text-left mb-12 section-container border-l-4 border-l-purple-500">
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Inclusive by Design</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    We believe the web is for everyone. Every line of code we write is
                    audited for WCAG 2.2 compliance and high-performance across all devices.
                </p>
            </div>
            <FounderSignature />
         </ScrollReveal>

         <ScrollReveal as="section" className="w-full mt-20 mb-20 pb-16 md:pb-0 flex flex-col items-center">
            <div id="contact" className="w-full max-w-6xl text-left mb-12 section-container border-l-4 border-l-cyan-500">
                <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Start a Project</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    Have a project in mind? Let's talk about what you need and how we can help.
                </p>
            </div>
            <ContactForm />
         </ScrollReveal>
      </div>
      <MobileNav visible={entered} />
    </main>
  );
}
