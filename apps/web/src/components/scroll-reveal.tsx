'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { createElement, type ReactNode } from 'react';

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

const axisFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':    return { x: 0, y: distance };
    case 'down':  return { x: 0, y: -distance };
    case 'left':  return { x: distance, y: 0 };
    case 'right': return { x: -distance, y: 0 };
    case 'none':  return { x: 0, y: 0 };
  }
};

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
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const offset = axisFor(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const common = {
    className,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount },
    variants,
    children,
  };

  const Component =
    as === 'section' ? motion.section :
    as === 'article' ? motion.article :
    as === 'li'      ? motion.li :
                       motion.div;

  return createElement(Component as never, common);
}
