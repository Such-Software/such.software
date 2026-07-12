"use client";

import { DynamicBackground } from "@/components/landing/dynamic-background";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { HeroSplash } from "@/components/landing/hero-splash";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Avoid the "useLayoutEffect does nothing on the server" warning during SSR.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Client shell for the homepage. Owns the splash state machine, the entered-gating
 * of the header / nav / background, the nebula position, and scroll restoration.
 * The page itself is a Server Component and passes the static hero + sections in as
 * `children`, so all of that renders as server HTML instead of shipping as client
 * JS (smaller hydration tree = faster, more stable LCP).
 */
export function HomeShell({ children }: { children: ReactNode }) {
  // The splash owns the first screen. Once the visitor scrolls through it (or hits
  // "Explore"), we "enter" the site: the splash unmounts for good and the real hero,
  // header, bottom nav, and background take over. Scrolling back up lands on the hero,
  // never the splash again.
  const [entered, setEntered] = useState(false);
  // `splashUp` keeps the splash mounted through its fade-out; `leaving` triggers the
  // cross-fade overlay (button path only).
  const [splashUp, setSplashUp] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const splashRef = useRef<HTMLElement>(null);
  const restoreScroll = useRef(0);
  const [nebulaPosition, setNebulaPosition] = useState<{ x: number; y: number } | null>(null);

  // Respect prefers-reduced-motion: skip the splash entirely and land straight on
  // the main hero, on desktop and mobile. Runs before paint, so the splash never
  // flashes for these visitors.
  useIsoLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The splash is a one-time intro per session: once entered, a refresh (even
    // from mid-page) skips it so you can't scroll back up into it.
    const alreadyEntered = sessionStorage.getItem("such:entered") === "1";
    if (reduced || alreadyEntered) {
      setEntered(true);
      setSplashUp(false);
    }
  }, []);

  // Dismiss the splash once it has fully scrolled out of view.
  useEffect(() => {
    if (entered) return;
    const el = splashRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          restoreScroll.current = Math.max(0, window.scrollY - el.offsetHeight);
          sessionStorage.setItem("such:entered", "1");
          setEntered(true);
          setSplashUp(false); // scrolled past: just unmount, no overlay fade needed
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

  // Place the nebula/monitor just to the left of the hero title, at any screen width.
  // The title lives in the server-rendered children, so read it by id.
  useEffect(() => {
    let lastWidth = window.innerWidth;
    const updatePosition = () => {
      const title = document.getElementById("hero-title");
      if (!title) return;
      const rect = title.getBoundingClientRect();
      // Use the title's document-absolute top (rect.top + scrollY), not its
      // viewport-relative top, so the value does not shift as the page scrolls.
      // Mobile browsers fire `resize` on scroll when the address bar hides, and a
      // viewport-relative read at that moment is what made the monitor jump.
      const titleLeftPercent = (rect.left / window.innerWidth) * 100;
      const titleTopPercent = ((rect.top + window.scrollY) / window.innerHeight) * 100;
      setNebulaPosition({
        x: Math.max(5, titleLeftPercent - 8),
        y: Math.max(10, titleTopPercent - 2),
      });
    };
    updatePosition();
    // Recompute only on a real width change (orientation / window resize). Ignore
    // height-only changes, which on mobile are just the address bar showing or hiding.
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      updatePosition();
    };
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(updatePosition);
    return () => window.removeEventListener("resize", onResize);
  }, [entered]);

  const enterFromButton = () => {
    restoreScroll.current = 0;
    sessionStorage.setItem("such:entered", "1");
    setEntered(true);
    setLeaving(true);
    // Scroll-intent entries arrive with wheel/touch MOMENTUM still flowing; without a
    // lock those trailing events scroll the freshly-revealed page down during the wave,
    // so you land below the hero instead of at the very top (same as a click would).
    // Freeze scrolling for the transition, then release exactly at the top.
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    window.scrollTo(0, 0);
    // Any scroll that sneaks past the overflow lock gets yanked back to 0.
    const pin = () => window.scrollTo(0, 0);
    window.addEventListener("scroll", pin, { passive: true });
    // The gesture that triggered the enter keeps emitting MOMENTUM (a trackpad flick
    // can trail for ~1.5s — longer than the 800ms wave). Releasing the lock on a fixed
    // timer let those trailing ticks scroll the revealed page, so you landed below the
    // hero instead of at the very top. Hold the lock until the input goes QUIET
    // (250ms with no wheel/touch), capped at 3s so a deliberate scroller is never trapped.
    let lastInput = performance.now();
    const note = () => { lastInput = performance.now(); };
    window.addEventListener("wheel", note, { passive: true });
    window.addEventListener("touchmove", note, { passive: true });
    const release = () => {
      window.removeEventListener("scroll", pin);
      window.removeEventListener("wheel", note);
      window.removeEventListener("touchmove", note);
      html.style.overflow = prevOverflow;
      window.scrollTo(0, 0);
    };
    const started = performance.now();
    const tryRelease = () => {
      const now = performance.now();
      if (now - lastInput > 250 || now - started > 3000) release();
      else setTimeout(tryRelease, 100);
    };
    // Keep the splash mounted briefly as a fixed, fading overlay so it cross-fades
    // into the revealed content instead of hard-cutting; release the scroll lock only
    // once the wave is done AND the triggering gesture's momentum has died down.
    setTimeout(() => {
      setSplashUp(false);
      tryRelease();
    }, 800);
  };

  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      <DynamicBackground nebulaPosition={nebulaPosition} visible={entered} />
      <Header floating visible={entered} />

      {splashUp && <HeroSplash sectionRef={splashRef} onEnter={enterFromButton} leaving={leaving} />}

      {children}

      <MobileNav visible={entered} />
    </main>
  );
}
