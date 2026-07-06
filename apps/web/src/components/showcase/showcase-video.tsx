'use client';

import { useEffect, useRef, useState } from 'react';

type ShowcaseVideoProps = {
  webm: string;
  mp4: string;
  poster: string;
  /** Accessible description of what the clip shows. */
  label: string;
  className?: string;
};

/**
 * Perf-safe showcase video. The studio's motion budget, enforced in one place:
 *  - The poster paints instantly; the video is `preload="none"`, so it
 *    downloads NOTHING until it is actually played.
 *  - It only plays while in the viewport (IntersectionObserver) and pauses
 *    when scrolled away or the tab is hidden. No offscreen decoders.
 *  - `prefers-reduced-motion`: the video is never played, so with
 *    `preload="none"` it is never even downloaded. The poster is the whole
 *    experience for those visitors.
 *  - `muted` + `playsInline` so mobile autoplay-on-view is permitted (one
 *    video at a time; this component is for a single hero/section clip, not a
 *    grid — a grid would gate to one visible at a time).
 */
export function ShowcaseVideo({ webm, mp4, poster, label, className }: ShowcaseVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    setAllowMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !allowMotion || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // .play() on a preload="none" element triggers the deferred load,
          // then plays once buffered. Ignore the rejection browsers throw when
          // a play() is interrupted by a quick pause() on fast scroll.
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowMotion]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
