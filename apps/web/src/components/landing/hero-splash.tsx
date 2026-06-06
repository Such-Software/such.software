"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, LayoutGrid, Smartphone, Wrench, Info } from "lucide-react";
import { useState } from "react";

const navButtons = [
  { label: "Portfolio", href: "/products", Icon: LayoutGrid, corner: "left-4 top-6 sm:left-6 sm:top-24 lg:left-8 lg:top-32" },
  { label: "Apps", href: "/apps", Icon: Smartphone, corner: "right-4 top-6 sm:right-6 sm:top-24 lg:right-8 lg:top-32" },
  { label: "Services", href: "/services", Icon: Wrench, corner: "left-4 bottom-6 sm:left-6 sm:bottom-24 lg:left-8 lg:bottom-32" },
  { label: "About", href: "/about", Icon: Info, corner: "right-4 bottom-6 sm:right-6 sm:bottom-24 lg:right-8 lg:bottom-32" },
];

/** The "SUCH" glyph mark (2x2 letter grid) with a Cherenkov-blue treatment. */
function SuchMark({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Such Software"
      className="h-auto w-[min(72vw,42vh)] drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
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
      <rect x="14" y="14" width="172" height="172" rx="16" fill="none" stroke="#22d3ee" strokeWidth="3.5" filter="url(#splash-glow)" opacity="0.45" />
      {/* two Cherenkov glow segments circling the ring in opposite directions */}
      {animate && (
        <>
          <motion.rect
            x="14" y="14" width="172" height="172" rx="16"
            fill="none" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" filter="url(#splash-glow)"
            pathLength={1} strokeDasharray="0.16 0.84"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: [0, -1] }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          />
          <motion.rect
            x="14" y="14" width="172" height="172" rx="16"
            fill="none" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" filter="url(#splash-glow)"
            pathLength={1} strokeDasharray="0.06 0.94" opacity="0.7"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: [0, 1] }}
            transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          />
        </>
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

export function HeroSplash({ onEnter, sectionRef }: { onEnter: () => void; sectionRef?: any }) {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    if (entering) return;
    if (prefersReduced) {
      onEnter();
      return;
    }
    setEntering(true); // the wave plays, then onEnter fires on completion
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Such Software"
      className="relative z-10 flex min-h-[100svh] w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-4 py-12 text-center"
    >
      {/* Click-to-enter Cherenkov wave: a watery blur wash + expanding ripples */}
      {entering && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-20 backdrop-blur-md"
            style={{ background: "radial-gradient(circle at center, rgba(34,211,238,0.30), transparent 65%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            {[0, 0.1, 0.2, 0.3].map((delay, i) => (
              <motion.span
                key={i}
                className="absolute left-0 top-0 block h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-300/70"
                style={{ boxShadow: "0 0 50px rgba(34,211,238,0.55)" }}
                initial={{ scale: 0.15, opacity: 0.85 }}
                animate={{ scale: 16, opacity: 0 }}
                transition={{ duration: 1.05, delay, ease: "easeOut" }}
                onAnimationComplete={i === 3 ? onEnter : undefined}
              />
            ))}
          </div>
        </>
      )}

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
          initial={{ opacity: 0, scale: 0.94 }}
          animate={entering ? { opacity: 0, scale: 1.2 } : { opacity: 1, scale: 1, y: animate ? [0, -8, 0] : 0 }}
          transition={
            entering
              ? { duration: 0.6, ease: "easeIn" }
              : { opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
          }
        >
          <SuchMark animate={animate} />
        </motion.div>
      </button>

      {/* Cover text hidden on mobile (logo + corner icons carry it there); fades out on enter */}
      <p className={`mt-10 hidden sm:block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text pb-1 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl transition-opacity duration-700 ${entering ? "opacity-0" : "opacity-100"}`}>
        Precision Engineering for Everyone
      </p>
      <p className={`mt-4 hidden max-w-xl text-base text-muted-foreground sm:block sm:text-lg transition-opacity duration-700 ${entering ? "opacity-0" : "opacity-100"}`}>
        A software studio in Kennett Square, PA. Custom e-commerce, apps, games,
        payments, and consulting.
      </p>

      {/* Nav buttons in the four corners: icon-only on mobile, labeled pills on larger screens */}
      {navButtons.map((b) => (
        <Link
          key={b.href}
          href={b.href}
          aria-label={b.label}
          className={`absolute flex items-center justify-center rounded-2xl border border-cyan-400/25 bg-foreground/[0.06] backdrop-blur-md shadow-md shadow-black/20 ring-1 ring-inset ring-white/10 transition-all hover:scale-[1.03] hover:border-cyan-400/60 hover:bg-foreground/10 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/15 h-12 w-12 sm:h-auto sm:w-36 sm:px-6 sm:py-4 lg:w-48 ${b.corner} ${entering ? "opacity-0 pointer-events-none" : ""}`}
        >
          <b.Icon className="h-5 w-5 sm:hidden" aria-hidden="true" />
          <span className="hidden text-base font-semibold sm:inline">{b.label}</span>
        </Link>
      ))}

      {/* Enter-the-site affordance */}
      <button
        type="button"
        onClick={handleEnter}
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all hover:text-foreground focus-visible:text-foreground ${entering ? "opacity-0 pointer-events-none" : ""}`}
      >
        <span>Explore</span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
