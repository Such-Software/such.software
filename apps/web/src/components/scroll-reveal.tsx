'use client';

import { createElement, useEffect, useRef, useState, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type Tag = 'div' | 'section' | 'article' | 'li';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  className?: string;
  as?: Tag;
}

const hiddenTransform = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':    return `translateY(${distance}px)`;
    case 'down':  return `translateY(${-distance}px)`;
    case 'left':  return `translateX(${distance}px)`;
    case 'right': return `translateX(${-distance}px)`;
    case 'none':  return 'translate(0, 0)';
  }
};

/**
 * Reveal-on-scroll wrapper. Uses an IntersectionObserver + a CSS transition instead of
 * framer-motion, so it adds no JS animation library to the bundle (transform/opacity
 * run on the compositor). Respects prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 24,
  amount = 0.2,
  className,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  const style = reduced
    ? undefined
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? 'translate(0, 0)' : hiddenTransform(direction, distance),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      };

  return createElement(as, { ref, className, style }, children);
}
