"use client";

import Link from "next/link";
import { ChevronDown, LayoutGrid, Smartphone, Wrench, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SPLASH_LOGO_SRC } from "./splash-logo-data";

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
  const [entering, setEntering] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  // warmed: set on idle, well after LCP. It (a) paints a 1px element through the water
  // filter so the browser compiles the filter graph BEFORE the first real use (the
  // first-click stutter was the graph compiling mid-transition), and (b) turns on
  // will-change for the logo so its layer is promoted ahead of the zoom. Doing this
  // on requestIdleCallback keeps it invisible to Lighthouse.
  const [warmed, setWarmed] = useState(false);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  // Latest-handler ref so the window listeners below never hold a stale closure.
  const enterRef = useRef<() => void>(() => {});

  // When the page asks the splash to leave, it first becomes a fixed overlay; one
  // frame later we drop opacity so it cross-fades into the revealed content.
  useEffect(() => {
    if (!leaving) return;
    const id = requestAnimationFrame(() => setFadeOut(true));
    return () => cancelAnimationFrame(id);
  }, [leaving]);

  const handleEnter = () => {
    if (entering) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
  enterRef.current = handleEnter;

  // Scroll intent = enter. Scrolling PAST the splash already dismissed it (the shell's
  // IntersectionObserver), but only after a full screen of scrolling and with a hard
  // cut. First wheel tick / touch drag / scroll key now plays the SAME water-ripple
  // enter as a tap. Listeners are passive (never block the scroll) and the `entering`
  // guard inside handleEnter dedupes against the button path.
  useEffect(() => {
    if (leaving) return;
    let touchY: number | null = null;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 8) enterRef.current();
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY == null) return;
      const y = e.touches[0]?.clientY ?? touchY;
      if (touchY - y > 24) {   // a deliberate upward drag (scroll down), not a resting thumb
        touchY = null;
        enterRef.current();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") enterRef.current();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [leaving]);

  // Pre-warm on idle (post-LCP): compile the filter graph + promote the logo layer.
  useEffect(() => {
    const ric: typeof requestIdleCallback | undefined = (window as any).requestIdleCallback;
    const id = ric ? ric(() => setWarmed(true)) : window.setTimeout(() => setWarmed(true), 1500);
    return () => {
      const cic: typeof cancelIdleCallback | undefined = (window as any).cancelIdleCallback;
      if (ric && cic) cic(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

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
        <div
          aria-hidden="true"
          className="splash-wash pointer-events-none fixed inset-0 z-20 backdrop-blur-sm"
          style={{ background: "radial-gradient(circle at center, rgba(34,211,238,0.28), transparent 65%)" }}
        />
      )}

      {/* Water-refraction filter, animated by handleEnter */}
      <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
        <filter id="splash-water" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.008 0.0104" numOctaves={2} seed={7} result="noise" />
          <feDisplacementMap ref={dispRef} in="SourceGraphic" in2="noise" scale={0} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Filter pre-warm: a near-invisible 1px paint through the filter (opacity must be
          non-zero or the paint is skipped and nothing compiles). Idle-gated via `warmed`. */}
      {warmed && !entering && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-px opacity-[0.01]"
          style={{ filter: "url(#splash-water)" }}
        />
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
        {/* Plain div, no framer: keeps the logo (the LCP element) a clean,
            statically-painted image. The water filter + zoom only apply on enter. */}
        <div
          className={entering ? "splash-zoom" : undefined}
          style={{
            filter: entering ? "url(#splash-water)" : undefined,
            willChange: warmed && !entering ? "transform, filter, opacity" : undefined,
          }}
        >
          {/* Data URI (no network request) so the logo paints with FCP; it is the
              mobile LCP element. */}
          <img
            src={SPLASH_LOGO_SRC}
            alt="Such Software"
            fetchPriority="high"
            className="h-auto w-[min(72vw,42vh)]"
          />
        </div>
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
