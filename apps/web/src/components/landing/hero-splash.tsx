"use client";

import { useEffect, useRef, useState } from "react";

// How long the splash holds before it hands over. This MUST match the pack's
// motion.splash.ms: the morph asset is generated to end exactly on this number, so a gate
// that closes early cuts the last letter mid-draw and one that closes late holds a still
// frame. See such-graphics packs/such-software/pack.json.
const SPLASH_MS = 1337;

// Long enough to read as a cross-fade, short enough that it does not feel like a second
// gate stacked on the first.
const FADE_MS = 260;

// The four monogram cells, in the 2x2 grid the mark ends on: S and C in the left column,
// U and H in the right. The burst throws one blob out of each, in that letter's own colour,
// so the handover reads as the logo dispersing rather than as an unrelated flash.
const BURST_CELLS = [
  { key: "s", left: "44%", top: "44%" },
  { key: "u", left: "56%", top: "44%" },
  { key: "c", left: "44%", top: "56%" },
  { key: "h", left: "56%", top: "56%" },
] as const;

/**
 * First-load splash: the pillar signature.
 *
 * Four dots become the four pillar symbols become the word SUCH, then the page takes over.
 * The whole thing is one generated SVG (morph_splash*.svg) whose CSS timeline is scaled to
 * land on SPLASH_MS, so this component only has to hold it and then get out of the way.
 *
 * It is a FIXED overlay from its first paint, never a block in document flow. That is not
 * cosmetic: in flow, removing it pulled a viewport of height out of the page and shifted
 * the hero by a full screen (CLS 1.0). A click used to hide that from CLS, since shifts
 * within 500ms of input are excused, but visitors who never clicked ate it in full.
 *
 * Returning visitors never see this at all, and crucially never see a FRAME of it: the
 * decision is made by a synchronous script in <head> (see layout.tsx) that hides the
 * overlay before the first paint. Doing it in React cannot work -- even useLayoutEffect
 * runs after the server HTML has been painted, which is the flash.
 */
export function HeroSplash({ onEnter, leaving }: { onEnter: () => void; leaving?: boolean }) {
  const [fadeOut, setFadeOut] = useState(false);
  const entered = useRef(false);
  // Latest-handler ref so the window listeners never hold a stale closure.
  const enterRef = useRef<() => void>(() => {});

  // Once asked to leave, drop opacity on the NEXT frame: the browser needs a painted
  // start value to transition from, and setting both in one frame is a cut, not a fade.
  useEffect(() => {
    if (!leaving) return;
    const id = requestAnimationFrame(() => setFadeOut(true));
    return () => cancelAnimationFrame(id);
  }, [leaving]);

  const handleEnter = () => {
    if (entered.current) return;
    entered.current = true;
    onEnter();
  };
  enterRef.current = handleEnter;

  // The gate: hand over when the morph ends.
  useEffect(() => {
    if (leaving) return;
    const id = window.setTimeout(() => enterRef.current(), SPLASH_MS);
    return () => window.clearTimeout(id);
  }, [leaving]);

  // Any intent to move on skips the rest. Passive listeners so none of this can block a
  // scroll, and handleEnter dedupes against the timer.
  useEffect(() => {
    if (leaving) return;
    const skip = () => enterRef.current();
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " ", "Escape", "Enter"].includes(e.key)) skip();
    };
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchstart", skip, { passive: true });
    window.addEventListener("pointerdown", skip, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchstart", skip);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", onKey);
    };
  }, [leaving]);

  const fade = { transitionDuration: `${FADE_MS}ms`, opacity: fadeOut ? 0 : 1 };

  return (
    <div
      id="splash-overlay"
      role="presentation"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
        leaving ? "pointer-events-none" : "bg-background"
      }`}
    >
      {/* The ground and the mark fade on their own, NOT as one container: the burst has to
          outlive them, and fading the whole overlay would take the burst down with it in
          the same 260ms. */}
      {leaving && (
        <div className="absolute inset-0 bg-background transition-opacity" style={fade} />
      )}

      {/* The handover burst: one blob per monogram cell, in that cell's own colour, thrown
          outward from where the letter was. aria-hidden and pointer-events-none: it is pure
          decoration over content that is already interactive underneath. */}
      {leaving && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {BURST_CELLS.map((cell, i) => (
            <span
              key={cell.key}
              className={`splash-burst-blob splash-burst-${cell.key}`}
              style={{ left: cell.left, top: cell.top, animationDelay: `${i * 25}ms` }}
            />
          ))}
        </div>
      )}

      {/* The mark is the largest thing on the first screen, so it is the LCP candidate: an
          <img> is a valid LCP element where an inline <svg> is not. */}
      <div className={leaving ? "relative transition-opacity" : "relative"} style={leaving ? fade : undefined}>
        <img
          src="/images/animations/morph_splash_light.svg"
          alt="Such Software"
          fetchPriority="high"
          className="h-auto w-[min(62vw,38vh)] dark:hidden"
        />
        <img
          src="/images/animations/morph_splash.svg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="hidden h-auto w-[min(62vw,38vh)] dark:block"
        />
      </div>
    </div>
  );
}
