"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, LayoutGrid, Smartphone, Wrench, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navButtons = [
  { label: "Portfolio", href: "/products", Icon: LayoutGrid, corner: "left-4 top-6 sm:left-6 sm:top-24 lg:left-8 lg:top-32" },
  { label: "Apps", href: "/apps", Icon: Smartphone, corner: "right-4 top-6 sm:right-6 sm:top-24 lg:right-8 lg:top-32" },
  { label: "Services", href: "/services", Icon: Wrench, corner: "left-4 bottom-6 sm:left-6 sm:bottom-24 lg:left-8 lg:bottom-32" },
  { label: "About", href: "/about", Icon: Info, corner: "right-4 bottom-6 sm:right-6 sm:bottom-24 lg:right-8 lg:bottom-32" },
];

// The "SUCH" mark is served as /images/branding/splash-such.svg and rendered as an
// <img> below: an <img> is a valid Largest-Contentful-Paint candidate, whereas an
// inline <svg> is not, which is what was producing NO_LCP on mobile (where the
// tagline text is hidden, leaving the logo as the only large element).

export function HeroSplash({ onEnter, sectionRef, leaving }: { onEnter: () => void; sectionRef?: any; leaving?: boolean }) {
  const prefersReduced = useReducedMotion();
  const [entering, setEntering] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  // When the page asks the splash to leave, it first becomes a fixed overlay; one
  // frame later we drop opacity so it cross-fades into the revealed content.
  useEffect(() => {
    if (!leaving) return;
    const id = requestAnimationFrame(() => setFadeOut(true));
    return () => cancelAnimationFrame(id);
  }, [leaving]);

  const handleEnter = () => {
    if (entering) return;
    if (prefersReduced) {
      onEnter();
      return;
    }
    setEntering(true);
    // Begin the cross-fade immediately so the water shimmer plays ON the splash as
    // it fades into the revealed content (snappier and more blended than shimmer-
    // then-cut).
    onEnter();
    // Water refraction: ramp the displacement scale up and back down while the
    // turbulence drifts, so the logo ripples like a disturbed liquid surface.
    const DURATION = 800;
    const MAX_SCALE = 40;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const env = Math.sin(Math.PI * t); // 0 -> 1 -> 0
      if (dispRef.current) dispRef.current.setAttribute("scale", String(env * MAX_SCALE));
      if (turbRef.current) {
        const f = 0.008 + t * 0.02;
        turbRef.current.setAttribute("baseFrequency", `${f.toFixed(4)} ${(f * 1.3).toFixed(4)}`);
      }
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Such Software"
      className={
        leaving
          ? `fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4 py-12 text-center pointer-events-none transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`
          : "relative z-10 flex min-h-[100svh] w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-4 py-12 text-center"
      }
    >
      {/* Click-to-enter: soft Cherenkov wash. The ripple itself is the SVG water
          filter refracting the logo (driven by handleEnter's rAF loop). */}
      {entering && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-20 backdrop-blur-sm"
          style={{ background: "radial-gradient(circle at center, rgba(34,211,238,0.28), transparent 65%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}

      {/* Water-refraction filter, animated by handleEnter */}
      <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
        <filter id="splash-water" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.008 0.0104" numOctaves={2} seed={7} result="noise" />
          <feDisplacementMap ref={dispRef} in="SourceGraphic" in2="noise" scale={0} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Logo (click to enter) + pulsing Cherenkov glow */}
      <button
        type="button"
        onClick={handleEnter}
        aria-label="Enter Such Software"
        className="relative flex cursor-pointer items-center justify-center rounded-3xl border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.2),transparent_65%)] motion-safe:animate-pulse"
          style={{ animationDuration: "4.5s" }}
        />
        <motion.div
          style={{ filter: entering ? "url(#splash-water)" : undefined }}
          initial={{ opacity: 1, scale: 1 }}
          animate={entering ? { scale: [1, 1.06, 1.14] } : undefined}
          transition={entering ? { duration: 0.8, ease: "easeInOut" } : undefined}
        >
          <img
            src="/images/branding/splash-such.svg"
            alt="Such Software"
            className="h-auto w-[min(72vw,42vh)] drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          />
        </motion.div>
      </button>

      {/* Cover text hidden on mobile (logo + corner icons carry it there); fades out on enter */}
      <p
        className={`mt-10 hidden sm:block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text pb-1 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl transition-opacity duration-700 motion-safe:animate-in motion-safe:fade-in ${entering ? "opacity-0" : "opacity-100"}`}
        style={{ animationDuration: "700ms", animationDelay: "120ms", animationFillMode: "backwards" }}
      >
        Precision Engineering for Everyone
      </p>
      <p
        className={`mt-4 hidden max-w-xl text-base text-muted-foreground sm:block sm:text-lg transition-opacity duration-700 motion-safe:animate-in motion-safe:fade-in ${entering ? "opacity-0" : "opacity-100"}`}
        style={{ animationDuration: "700ms", animationDelay: "240ms", animationFillMode: "backwards" }}
      >
        A software studio in Kennett Square, PA. Custom e-commerce, apps, games,
        payments, and consulting.
      </p>

      {/* Nav buttons in the four corners: icon-only on mobile, labeled pills on larger screens */}
      {navButtons.map((b, i) => (
        <Link
          key={b.href}
          href={b.href}
          aria-label={b.label}
          style={{ animationDuration: "700ms", animationDelay: `${360 + i * 110}ms`, animationFillMode: "backwards" }}
          className={`absolute flex items-center justify-center rounded-2xl border border-cyan-400/25 bg-foreground/[0.06] backdrop-blur-md shadow-md shadow-black/20 ring-1 ring-inset ring-white/10 transition-all motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 hover:scale-[1.03] hover:border-cyan-400/60 hover:bg-foreground/10 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/15 h-12 w-12 sm:h-auto sm:w-36 sm:px-6 sm:py-4 lg:w-48 ${b.corner} ${entering ? "opacity-0 pointer-events-none" : ""}`}
        >
          <b.Icon className="h-5 w-5 sm:hidden" aria-hidden="true" />
          <span className="hidden text-base font-semibold sm:inline">{b.label}</span>
        </Link>
      ))}

      {/* Enter-the-site affordance */}
      <button
        type="button"
        onClick={handleEnter}
        style={{ animationDuration: "700ms", animationDelay: "700ms", animationFillMode: "backwards" }}
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all motion-safe:animate-in motion-safe:fade-in hover:text-foreground focus-visible:text-foreground ${entering ? "opacity-0 pointer-events-none" : ""}`}
      >
        <span>Explore</span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
