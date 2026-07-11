'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

type HoverVignetteProps = {
  /** WebM that plays on hover/focus (VP9-alpha for transparent overlays; plain VP9 for `fit="cover"` reels). */
  webm: string;
  /** Poster shown by default and whenever the video can't/shouldn't play (transparent PNG for overlays). */
  poster: string;
  /** Optional DARK-mode asset pair. Alpha vignettes are baked, so the ink/colour that reads on a light tile
   *  (dark outline) vanishes on a dark tile and vice-versa. When provided, these are used in dark mode. */
  webmDark?: string;
  posterDark?: string;
  /** Optional opaque H.264 fallback (for `fit="cover"` reels): lets Safari-family browsers, which cannot
   *  decode VP9, still play the clip. Pointless for alpha overlays (H.264 carries no alpha). */
  mp4?: string;
  /** contain (default): transparent overlay letterboxed over the tile art. cover: an opaque reel that
   *  FILLS the tile (no padding) — the poster is the tile art. */
  fit?: 'contain' | 'cover';
  className?: string;
};

/**
 * A perf-safe, purely-additive hover "vignette": a video that plays over (or as) a tile's
 * art when the tile is hovered or keyboard-focused, then resets to the poster on
 * leave/blur. The studio's motion budget, applied to the bento tiles:
 *
 *  - Poster-first: the `poster` paints immediately; for `contain` overlays it is a
 *    transparent RGBA PNG so the overlay is INVISIBLE by default and the tile's own art
 *    shows through untouched. For `cover` reels the poster IS the tile art.
 *  - `preload="none"`: the video downloads NOTHING until an actual play() fires. Idle
 *    page weight is unchanged; a visitor who never hovers never pays a byte.
 *  - Trigger is hover AND focus-within of the interactive tile (the `.bento-item`
 *    ancestor link), so keyboard users get the same effect. Pause + reset to the poster
 *    on mouseleave / blur.
 *  - NO-HOVER DEVICES (phones/tablets, `(hover: none)`): hover can never fire, so the
 *    tile plays while it is substantially on screen (IntersectionObserver ≥ 0.5) and
 *    resets when it scrolls away. Same deferred download: nothing loads until the tile
 *    is actually seen.
 *  - `prefers-reduced-motion`: no listeners, no observer — the video never downloads and
 *    never plays. The poster is the whole experience.
 *  - Codec gate: play() is skipped unless the browser reports it can decode one of the
 *    provided sources (VP9 webm, or the optional H.264 mp4 for `cover` reels). Safari
 *    cannot decode VP9-alpha, so overlay tiles degrade to the transparent poster there
 *    — never a broken or opaque box.
 *  - `pointer-events-none` + `aria-hidden`: decorative; never blocks the tile's link or
 *    steals focus, and adds no layout (absolutely positioned, inset-0).
 */
export function HoverVignette({
  webm,
  poster,
  webmDark,
  posterDark,
  mp4,
  fit = 'contain',
  className,
}: HoverVignetteProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setAllowMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setMounted(true);
  }, []);

  // Pick the theme-matched asset (falls back to the light pair until mounted / when no dark asset is given).
  const isDark = mounted && resolvedTheme === 'dark';
  const activeWebm = isDark && webmDark ? webmDark : webm;
  const activePoster = isDark && posterDark ? posterDark : poster;

  useEffect(() => {
    if (!allowMotion) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const canDecode = () =>
      !!video.canPlayType('video/webm; codecs="vp9"') || (!!mp4 && !!video.canPlayType('video/mp4'));

    const play = () => {
      if (!canDecode()) return;
      // play() on a preload="none" element kicks off the deferred fetch, then plays once
      // buffered. Swallow the rejection browsers throw when a quick blur/leave pause()
      // interrupts an in-flight play().
      video.play().catch(() => {});
    };
    const stop = () => {
      video.pause();
      // Snap back to frame 0 (the rest state) so the tile art shows cleanly again.
      try {
        video.currentTime = 0;
      } catch {
        /* not yet loaded — nothing to reset */
      }
    };

    // No-hover devices: play while substantially on screen instead of on hover.
    if (window.matchMedia('(hover: none)').matches) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) play();
          else stop();
        },
        { threshold: 0.5 },
      );
      io.observe(wrap);
      return () => {
        io.disconnect();
        video.pause();
      };
    }

    // The focusable/hoverable element is the tile link (an ancestor). focusin/focusout
    // bubble from it, and mouseenter/mouseleave cover pointer hover over the whole card.
    const trigger: HTMLElement =
      (wrap.closest('.bento-item') as HTMLElement | null) ?? (wrap.parentElement as HTMLElement) ?? wrap;

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
  }, [allowMotion, activeWebm, mp4]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[15] ${className ?? ''}`}
    >
      <video
        key={activeWebm}
        ref={videoRef}
        className={fit === 'cover' ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-2'}
        poster={activePoster}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
      >
        <source src={activeWebm} type='video/webm; codecs="vp9"' />
        {mp4 && <source src={mp4} type="video/mp4" />}
      </video>
    </div>
  );
}
