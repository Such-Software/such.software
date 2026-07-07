'use client';

import { useEffect, useRef, useState } from 'react';

type HoverVignetteProps = {
  /** Alpha (VP9-with-alpha) WebM that plays on hover/focus, layered over the tile art. */
  webm: string;
  /** Transparent RGBA PNG shown by default and whenever the video can't/shouldn't play. */
  poster: string;
  className?: string;
};

/**
 * A perf-safe, purely-additive hover "vignette": a transparent alpha-WebM that plays
 * OVER a tile's existing static art when the tile is hovered or keyboard-focused, then
 * resets to a transparent poster on leave/blur. The studio's motion budget, applied to
 * the bento tiles:
 *
 *  - Poster-first: the `poster` is a transparent RGBA PNG, so the overlay is INVISIBLE
 *    by default and the tile's own art shows through untouched.
 *  - `preload="none"`: the WebM downloads NOTHING until an actual hover/focus play()
 *    fires. Idle page weight is unchanged; a visitor who never hovers never pays a byte.
 *  - Trigger is hover AND focus-within of the interactive tile (the `.bento-item`
 *    ancestor link), so keyboard users get the same effect. Pause + reset to the poster
 *    on mouseleave / blur.
 *  - `prefers-reduced-motion`: the listeners are never attached, so the video never
 *    downloads and never plays. The transparent poster is the whole experience.
 *  - Safari: VP9-alpha is unsupported. `canPlayType` returns "" there, so play() is a
 *    no-op and the transparent poster remains — graceful degradation to the tile art,
 *    never a broken or opaque box.
 *  - `pointer-events-none` + `aria-hidden`: the overlay is decorative and never blocks
 *    the tile's link/click/tap or steals focus. It also adds no layout (absolutely
 *    positioned, inset-0), so it can't shift the tile.
 */
export function HoverVignette({ webm, poster, className }: HoverVignetteProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    setAllowMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (!allowMotion) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    // The focusable/hoverable element is the tile link (an ancestor). focusin/focusout
    // bubble from it, and mouseenter/mouseleave cover pointer hover over the whole card.
    const trigger: HTMLElement =
      (wrap.closest('.bento-item') as HTMLElement | null) ?? (wrap.parentElement as HTMLElement) ?? wrap;

    const play = () => {
      // Browsers that can't decode VP9 WebM (Safari family, no alpha support) return ""
      // here — bail so the transparent poster stays put instead of an opaque frame.
      if (!video.canPlayType('video/webm; codecs="vp9"')) return;
      // play() on a preload="none" element kicks off the deferred fetch, then plays once
      // buffered. Swallow the rejection browsers throw when a quick blur/leave pause()
      // interrupts an in-flight play().
      video.play().catch(() => {});
    };
    const stop = () => {
      video.pause();
      // Snap back to the transparent first frame so the tile art shows cleanly again.
      try {
        video.currentTime = 0;
      } catch {
        /* not yet loaded — nothing to reset */
      }
    };

    trigger.addEventListener('mouseenter', play);
    trigger.addEventListener('mouseleave', stop);
    trigger.addEventListener('focusin', play);
    trigger.addEventListener('focusout', stop);
    return () => {
      trigger.removeEventListener('mouseenter', play);
      trigger.removeEventListener('mouseleave', stop);
      trigger.removeEventListener('focusin', play);
      trigger.removeEventListener('focusout', stop);
      video.pause();
    };
  }, [allowMotion]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[15] ${className ?? ''}`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain p-2"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
      >
        <source src={webm} type='video/webm; codecs="vp9"' />
      </video>
    </div>
  );
}
