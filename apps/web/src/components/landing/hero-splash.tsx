"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navButtons = [
  { label: "Portfolio", href: "/products", corner: "left-4 top-16 sm:left-6 sm:top-24 lg:left-8 lg:top-32" },
  { label: "Apps", href: "/apps", corner: "right-4 top-16 sm:right-6 sm:top-24 lg:right-8 lg:top-32" },
  { label: "Services", href: "/services", corner: "left-4 bottom-24 sm:left-6 lg:left-8 lg:bottom-32" },
  { label: "About", href: "/about", corner: "right-4 bottom-24 sm:right-6 lg:right-8 lg:bottom-32" },
];

/** The "SUCH" glyph mark (2x2 letter grid) with a Cherenkov-blue treatment. */
function SuchMark({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Such Software"
      className="h-auto w-[min(74vw,44vh)] drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
    >
      <defs>
        <filter id="splash-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* steady bounding box, Cherenkov cyan */}
      <rect
        x="14" y="14" width="172" height="172" rx="16"
        fill="none" stroke="#22d3ee" strokeWidth="3.5" filter="url(#splash-glow)" opacity="0.45"
      />
      {/* a Cherenkov glow segment slowly circling the ring */}
      {animate && (
        <motion.rect
          x="14" y="14" width="172" height="172" rx="16"
          fill="none" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" filter="url(#splash-glow)"
          pathLength={1} strokeDasharray="0.16 0.84"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [0, -1] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
      )}
      {/* letters with a gentle breath */}
      <motion.g
        animate={animate ? { opacity: [0.9, 1, 0.9] } : undefined}
        transition={animate ? { duration: 5, ease: "easeInOut", repeat: Infinity } : undefined}
      >
        {/* S */}
        <path d="M 78,36 H 36 V 58 H 78 V 82 H 36" fill="none" stroke="#35c98e" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {/* U */}
        <path d="m 118,36 v 34 c 0,12.15 9.85,14 22,14 12.15,0 22,-1.85 22,-14 V 36" fill="none" stroke="#e8689e" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {/* C */}
        <path d="M 78,118 H 36 V 164 H 78" fill="none" stroke="#4aade0" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {/* H */}
        <path d="M 118,118 V 164 M 162,118 V 164 M 118,141 H 162" fill="none" stroke="#45c99e" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HeroSplash({ onEnter, sectionRef }: { onEnter: () => void; sectionRef?: any }) {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section
      ref={sectionRef}
      aria-label="Such Software"
      className="relative z-10 flex min-h-[100svh] w-full max-w-7xl flex-col items-center justify-center px-4 py-12 text-center"
    >
      {/* Logo + pulsing Cherenkov glow */}
      <div className="relative flex items-center justify-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] motion-safe:animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SuchMark animate={animate} />
        </motion.div>
      </div>

      {/* Cover tagline (the real page H1 lives in the hero revealed after entering) */}
      <p className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text pb-1 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
        Precision Engineering for Everyone
      </p>
      <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
        A software studio in Kennett Square, PA. Custom e-commerce, apps, games,
        payments, and consulting.
      </p>

      {/* Nav buttons in the four corners (all breakpoints) */}
      {navButtons.map((b) => (
        <Link
          key={b.href}
          href={b.href}
          className={`absolute flex items-center justify-center rounded-2xl border border-cyan-400/25 bg-foreground/[0.06] backdrop-blur-md shadow-md shadow-black/20 ring-1 ring-inset ring-white/10 px-4 py-3 text-sm font-semibold transition-all hover:scale-[1.03] hover:border-cyan-400/60 hover:bg-foreground/10 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/15 w-28 sm:w-36 sm:px-6 sm:py-4 sm:text-base lg:w-48 ${b.corner}`}
        >
          {b.label}
        </Link>
      ))}

      {/* Enter-the-site affordance */}
      <button
        type="button"
        onClick={onEnter}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
      >
        <span>Explore</span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
