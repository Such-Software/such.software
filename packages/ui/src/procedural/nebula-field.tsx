'use client';

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "../lib/utils";
import { Monitor } from "lucide-react";

interface NebulaProps {
  className?: string;
  density?: number;
  themeMode?: 'light' | 'dark';
}

interface StreamLineProps {
  d: string;
  themeMode: 'light' | 'dark';
  onHit: () => void;
  width: number;
}

const StreamLine = ({ d, themeMode, onHit, width }: StreamLineProps) => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    const animate = async () => {
      // Shorter start delay (0-2s) so it feels more reactive on load
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
      
      while (isMounted) {
        const duration = 8 + Math.random() * 6; // slightly faster but still slow
        
        // Ensure starting state is definitely 0
        controls.set({ pathLength: 0, pathOffset: 0, opacity: 0 });

        // Trigger onHit when the tip reaches the end (at 75% of duration)
        const hitTimeout = setTimeout(() => {
          if (isMounted) onHit();
        }, duration * 750);

        await controls.start({
          pathLength: [0, 0.25, 0.25, 0],
          pathOffset: [0, 0, 0.75, 1],
          opacity: [0, 0.5, 0.5, 0],
          transition: { 
            duration, 
            ease: "linear",
            times: [0, 0.25, 0.75, 1] 
          }
        });

        clearTimeout(hitTimeout);
        
        // Continuous flow with small pause
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      }
    };
    animate();
    return () => { isMounted = false; };
  }, [controls, onHit]);

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
        themeMode === 'light' ? "text-slate-300" : "text-emerald-500/50"
      )}
    />
  );
};

export const NebulaField = ({ className, density = 8, themeMode = 'dark' }: NebulaProps) => { 
  const [mounted, setMounted] = useState(false);
  const monitorControls = useAnimation();
  const [monitorColor, setMonitorColor] = useState(themeMode === 'light' ? "text-slate-400" : "text-emerald-500");
  
  // Sync color with theme if no impacts have happened yet
  useEffect(() => {
    setMonitorColor(themeMode === 'light' ? "text-slate-300" : "text-emerald-500/50");
  }, [themeMode]);

  // Parallax Scroll for Computer Icon
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 1000], [0, 200]);

  // Configuration for convergence point
  const targetX = 25; 
  const targetY = 30; // Lowered to hit center of computer better

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

      const endX = targetX + (Math.random() - 0.5) * 4;
      const endY = targetY + (Math.random() - 0.5) * 4;
      const cpX = (startX + endX) / 2 + (Math.random() - 0.5) * 50;
      const cpY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
      
      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    });
  }, [density, themeMode]); // Regenerate on theme switch

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initial animation for the computer icon
  useEffect(() => {
    if (mounted) {
      monitorControls.set({ opacity: 0, scale: 0.5 });
      monitorControls.start({ 
        opacity: themeMode === 'light' ? 0.4 : 0.6, 
        scale: 1,
        transition: { duration: 2, ease: "easeOut" }
      });
    }
  }, [mounted, themeMode, monitorControls]);

  const handleHit = useCallback(() => {
     const colors = [
         "text-emerald-500", "text-blue-500", "text-purple-500", 
         "text-indigo-500", "text-cyan-500", "text-rose-500", "text-amber-500"
     ];
     setMonitorColor(colors[Math.floor(Math.random() * colors.length)]);

     monitorControls.start({
        scale: [1, 1.2, 1],
        filter: [
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))", 
          "brightness(1.5) drop-shadow(0 0 20px currentColor)", 
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))"
        ],
        transition: { duration: 4, ease: "easeInOut" } 
     });
  }, [monitorControls]);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      
      <motion.div 
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ 
          left: `${targetX}%`, 
          top: `${targetY}%`,
          y: yRange
        }}
        animate={monitorControls}
      >
        <Monitor 
          size={64} 
          className={cn(
            "transition-colors duration-2000",
            monitorColor
          )} 
        />
      </motion.div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-40 dark:opacity-70 absolute inset-0"
      >
        {paths.map((d: string, i: number) => (
          <StreamLine
            key={`${themeMode}-${i}`}
            d={d}
            themeMode={themeMode}
            onHit={handleHit}
            width={themeMode === 'light' ? 0.1 : 0.2}
          />
        ))}
      </svg>
    </div>
  );
};
