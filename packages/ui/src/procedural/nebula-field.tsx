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
      // Very short initial delay for first streamers
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
      
      while (isMounted) {
        const duration = 7 + Math.random() * 5; // Faster, snappier
        
        controls.set({ pathLength: 0, pathOffset: 0, opacity: 0 });

        const hitTimeout = setTimeout(() => {
          if (isMounted) onHit();
        }, duration * 750);

        await controls.start({
          pathLength: [0, 0.25, 0.25, 0],
          pathOffset: [0, 0, 0.75, 1],
          opacity: [0, 0.4, 0.4, 0], // Muted streamers
          transition: { 
            duration, 
            ease: "linear",
            times: [0, 0.25, 0.75, 1] 
          }
        });

        clearTimeout(hitTimeout);
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
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
  const targetY = 35; // Moved down slightly more

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

      const endX = targetX + (Math.random() - 0.5) * 2; // Tighter hit box
      const endY = targetY + (Math.random() - 0.5) * 2; // Tighter hit box
      const cpX = (startX + endX) / 2 + (Math.random() - 0.5) * 50;
      const cpY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
      
      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    });
  }, [density, themeMode, targetX, targetY]); // Added dependencies for stability

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleHit = useCallback(() => {
     const colors = themeMode === 'light' 
        ? ["text-slate-400", "text-blue-400", "text-indigo-400", "text-emerald-400", "text-cyan-400"]
        : ["text-emerald-400/60", "text-blue-400/60", "text-purple-400/60", "text-indigo-400/60", "text-cyan-400/60", "text-rose-400/60", "text-amber-400/60"];
     
     setMonitorColor(colors[Math.floor(Math.random() * colors.length)]);

     monitorControls.start({
        scale: [1, 1.08, 1], // Less jarring scale
        filter: [
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))", 
          "brightness(1.2) drop-shadow(0 0 15px currentColor)", // Less brightness
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))"
        ],
        transition: { duration: 3, ease: "easeOut" } // Slower and smoother
     });
  }, [monitorControls, themeMode]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      
      <motion.div 
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: themeMode === 'light' ? 0.3 : 0.5, 
          scale: 1 
        }}
        transition={{ duration: 1 }}
        style={{ 
          left: `${targetX}%`, 
          top: `${targetY}%`,
          y: yRange
        }}
      >
        <motion.div animate={monitorControls}>
          <Monitor 
            size={64} 
            className={cn(
              "transition-colors duration-2000",
              monitorColor
            )} 
          />
        </motion.div>
      </motion.div>

      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-40 dark:opacity-70 absolute inset-0"
        style={{ y: yRange }} // SVG follows computer parallax
      >
        {paths.map((d: string, i: number) => (
          <StreamLine
            key={`${themeMode}-${i}`}
            d={d}
            themeMode={themeMode}
            onHit={handleHit}
            width={themeMode === 'light' ? 0.08 : 0.12} // slightly thinner for less jarring feel
          />
        ))}
      </motion.svg>
    </div>
  );
};
