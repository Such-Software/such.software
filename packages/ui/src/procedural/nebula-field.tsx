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
        themeMode === 'light' ? "text-sky-400/80" : "text-cyan-400/50"
      )}
    />
  );
};

export const NebulaField = ({ className, density = 8, themeMode = 'dark', position }: NebulaProps) => {
  // === ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS ===
  const monitorControls = useAnimation();
  const [monitorColor, setMonitorColor] = useState(themeMode === 'light' ? "text-sky-500" : "text-cyan-400/70");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  );

  // Parallax Scroll hooks (called unconditionally)
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 1000], [0, 250]);

  // Position calculations
  const computerX = position?.x ?? 18;
  const computerY = position?.y ?? 18;
  // Aim the streamers at the monitor's screen. +2.5 hit low-and-right; -1/-1.5 hit
  // high-and-left, so this is the midpoint. Tweak these two offsets to move the
  // convergence point.
  const targetX = computerX + 1.5;
  const targetY = computerY + 1.5;

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // On small screens the monitor and streamers have nowhere to sit without crossing
  // the hero text, and the scroll parallax drags them over it. Use the static glow
  // there instead.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Sync color with theme
  useEffect(() => {
    if (!prefersReducedMotion) {
      setMonitorColor(themeMode === 'light' ? "text-sky-400" : "text-cyan-400/50");
    }
  }, [themeMode, prefersReducedMotion]);

  const paths = useMemo(() => {
    return Array.from({ length: density }).map(() => {
      const edge = Math.floor(Math.random() * 4);
      let startX = 50, startY = 50;

      switch(edge) {
        case 0: startX = Math.random() * 100; startY = -20; break;
        case 1: startX = 120; startY = Math.random() * 100; break;
        case 2: startX = Math.random() * 100; startY = 120; break;
        case 3: startX = -20; startY = Math.random() * 100; break;
      }

      const endX = targetX + (Math.random() - 0.5) * 1.5;
      const endY = targetY + (Math.random() - 0.5) * 1.5;
      const cpX = (startX + endX) / 2 + (Math.random() - 0.5) * 40;
      const cpY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;

      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    });
  }, [density, themeMode, targetX, targetY]);

  const handleHit = useCallback(() => {
     const colors = themeMode === 'light'
        ? ["text-sky-400", "text-cyan-400", "text-blue-400", "text-sky-500"]
        : ["text-cyan-400/60", "text-sky-400/50", "text-blue-400/50", "text-cyan-300/50", "text-teal-400/50"];

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

  // === CONDITIONAL RETURNS AFTER ALL HOOKS ===

  // Cherenkov-blue radial glow ("reactor pool" bloom), positioned near the convergence point.
  const glowColor = themeMode === 'light' ? "rgba(56,189,248,0.22)" : "rgba(34,211,238,0.18)";
  const glowStyle = {
    background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
  } as const;

  // Static background for reduced-motion users and small screens (still Cherenkov-tinted,
  // with no monitor or streamers to overlap the hero text).
  if (prefersReducedMotion || isMobile) {
    return (
      <div className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        themeMode === 'light'
          ? "bg-gradient-to-br from-sky-50 via-slate-50 to-white"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-[#0a1622]",
        className
      )}>
        <div
          className="absolute h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2"
          style={{ ...glowStyle, left: `${computerX}%`, top: `${computerY}%` }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>

      {/* Base Cherenkov gradient wash */}
      <div className={cn(
        "absolute inset-0",
        themeMode === 'light'
          ? "bg-gradient-to-br from-sky-50/60 via-transparent to-transparent"
          : "bg-gradient-to-br from-slate-950 via-slate-900/80 to-[#0a1622]"
      )} />

      {/* Slowly-pulsing Cherenkov "reactor pool" bloom */}
      <motion.div
        className="absolute h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2"
        style={{ ...glowStyle, left: `${computerX}%`, top: `${computerY}%`, y: yRange }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />

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
