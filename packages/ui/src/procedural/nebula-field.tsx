'use client';

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "../lib/utils";
import { Monitor } from "lucide-react";

interface NebulaProps {
  className?: string;
  density?: number;
  themeMode?: 'light' | 'dark';
  /** Dynamic position as percentage of viewport. If not provided, uses default fixed position. */
  position?: { x: number; y: number };
}

interface StreamLineProps {
  d: string;
  themeMode: 'light' | 'dark';
  onHit: () => void;
  width: number;
  index: number;
}

const StreamLine = ({ d, themeMode, onHit, width, index }: StreamLineProps) => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    const animate = async () => {
      // Spread out initial starts so they don't all hit at once
      await new Promise(resolve => setTimeout(resolve, index * 1500 + Math.random() * 1000));
      
      while (isMounted) {
        // Calmer, longer durations (8-14 seconds)
        const duration = 8 + Math.random() * 6; 
        
        controls.set({ pathLength: 0, pathOffset: 0, opacity: 0 });

        // Timing: In the animation below, pathOffset reaches 0.8 at 80% of duration.
        // With pathLength 0.2, the head hits the target (1.0) exactly at 80%.
        const hitTimeout = setTimeout(() => {
          if (isMounted) onHit();
        }, duration * 1000 * 0.8); 

        // Animate the streamer path
        await controls.start({
          pathLength: [0, 0.2, 0.2, 0], 
          pathOffset: [0, 0, 0.8, 1.0], 
          opacity: [0, 0.4, 0.4, 0], 
          transition: { 
            duration, 
            ease: "linear",
            times: [0, 0.2, 0.8, 1] 
          }
        });

        clearTimeout(hitTimeout);
        // Longer pause between streaks for a more ambient feel
        await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
      }
    };
    animate();
    return () => { isMounted = false; };
  }, [controls, onHit, index]);

  return (
    <motion.path
      d={d}
      stroke="currentColor"
      strokeWidth={width}
      fill="none"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={controls}
      className={cn(
        "transition-colors duration-1000",
        themeMode === 'light' ? "text-slate-400" : "text-emerald-500/50"
      )}
    />
  );
};

export const NebulaField = ({ className, density = 8, themeMode = 'dark', position }: NebulaProps) => {
  const monitorControls = useAnimation();
  const [monitorColor, setMonitorColor] = useState(themeMode === 'light' ? "text-slate-400" : "text-emerald-500/60");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Return static background for reduced motion users
  if (prefersReducedMotion) {
    return (
      <div className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        themeMode === 'light'
          ? "bg-gradient-to-br from-slate-100 via-slate-50 to-white"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
        className
      )} />
    );
  }

  // Sync color with theme if no impacts have happened yet
  useEffect(() => {
    setMonitorColor(themeMode === 'light' ? "text-slate-300" : "text-emerald-500/40");
  }, [themeMode]);

  // --- POSITIONING & ANIMATION CONTROLS ---

  // Parallax Scroll: Vertical movement of the computer icon as you scroll.
  // [0, 1000] is the scroll pixel range, [0, 250] is the movement in pixels.
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 1000], [0, 250]);

  // 1. Computer Position: Where the icon sits on the screen (%)
  // Use dynamic position if provided, otherwise fall back to defaults
  const computerX = position?.x ?? 18; 
  const computerY = position?.y ?? 18;

  // 2. Streamer Convergence: Where the streamers actually head (%)
  // Offset from computer position so streamers hit the center of the monitor
  const targetX = computerX + 2.5;
  const targetY = computerY + 2.5;

  const paths = useMemo(() => {
    return Array.from({ length: density }).map(() => {
      // Streamer start position (random edge)
      const edge = Math.floor(Math.random() * 4);
      let startX = 50, startY = 50;
      
      switch(edge) {
        case 0: startX = Math.random() * 100; startY = -20; break;
        case 1: startX = 120; startY = Math.random() * 100; break;
        case 2: startX = Math.random() * 100; startY = 120; break;
        case 3: startX = -20; startY = Math.random() * 100; break;
      }

      const endX = targetX + (Math.random() - 0.5) * 1.5; // Even tighter
      const endY = targetY + (Math.random() - 0.5) * 1.5; 
      const cpX = (startX + endX) / 2 + (Math.random() - 0.5) * 40;
      const cpY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
      
      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    });
  }, [density, themeMode, targetX, targetY]);

  const handleHit = useCallback(() => {
     const colors = themeMode === 'light'
        ? ["text-slate-400", "text-blue-400", "text-indigo-400", "text-emerald-400"]
        : ["text-emerald-500/50", "text-blue-500/50", "text-purple-500/50", "text-cyan-500/50", "text-teal-500/50"];

     setMonitorColor(colors[Math.floor(Math.random() * colors.length)]);

     monitorControls.start({
        scale: [1, 1.1, 1],
        filter: [
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))",
          "brightness(1.3) drop-shadow(0 0 12px currentColor)",
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))"
        ],
        transition: { duration: 1.5, ease: "easeOut" }
     });
  }, [monitorControls, themeMode]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      
      <motion.div 
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: themeMode === 'light' ? 0.4 : 0.6, // More visible computer
          scale: 1 
        }}
        transition={{ duration: 1.5 }}
        style={{ 
          left: `${computerX}%`, 
          top: `${computerY}%`,
          y: yRange
        }}
      >
        <motion.div animate={monitorControls}>
          <Monitor 
            size={56} // Bigger icon as requested
            className={cn(
              "transition-colors duration-1000", // Back to smoother color shift
              monitorColor
            )} 
          />
        </motion.div>
      </motion.div>

      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-50 dark:opacity-70 absolute inset-0"
        style={{ y: yRange }} 
      >
        {paths.map((d: string, i: number) => (
          <StreamLine
            key={`${themeMode}-${i}`}
            d={d}
            themeMode={themeMode}
            onHit={handleHit}
            width={themeMode === 'light' ? 0.08 : 0.12} 
            index={i}
          />
        ))}
      </motion.svg>
    </div>
  );
};
