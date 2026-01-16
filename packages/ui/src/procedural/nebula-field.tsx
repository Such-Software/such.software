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
      await new Promise(resolve => setTimeout(resolve, Math.random() * 800));
      
      while (isMounted) {
        const duration = 6 + Math.random() * 4; // Snappier, more frequent small impacts
        
        controls.set({ pathLength: 0, pathOffset: 0, opacity: 0 });

        const hitTimeout = setTimeout(() => {
          if (isMounted) onHit();
        }, duration * 750);

        await controls.start({
          pathLength: [0, 0.20, 0.20, 0],
          pathOffset: [0, 0, 0.75, 0.98], // Avoid overshooting center too much
          opacity: [0, 0.5, 0.5, 0], // More visible streamers
          transition: { 
            duration, 
            ease: "linear",
            times: [0, 0.2, 0.8, 1] 
          }
        });

        clearTimeout(hitTimeout);
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 1000));
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
        themeMode === 'light' ? "text-slate-400" : "text-emerald-500/50"
      )}
    />
  );
};

export const NebulaField = ({ className, density = 8, themeMode = 'dark' }: NebulaProps) => { 
  const [mounted, setMounted] = useState(false);
  const monitorControls = useAnimation();
  const [monitorColor, setMonitorColor] = useState(themeMode === 'light' ? "text-slate-400" : "text-emerald-500/60");
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync color with theme if no impacts have happened yet
  useEffect(() => {
    setMonitorColor(themeMode === 'light' ? "text-slate-300" : "text-emerald-500/40");
  }, [themeMode]);

  // Parallax Scroll for Computer Icon
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 1000], [0, 250]);

  // Configuration for convergence point
  const targetX = 18; // Moved right to clear margins better
  const targetY = 18; // High up near the title line

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
        scale: [1, 1.1, 1], // Slightly more pronounced pulse
        filter: [
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))", 
          "brightness(1.3) drop-shadow(0 0 12px currentColor)", // Stronger glow
          "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))"
        ],
        transition: { duration: 2.5, ease: "easeOut" } 
     });
  }, [monitorControls, themeMode]);

  if (!mounted) return null;

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
          left: `${targetX}%`, 
          top: `${targetY}%`,
          y: yRange
        }}
      >
        <motion.div animate={monitorControls}>
          <Monitor 
            size={56} // Bigger icon as requested
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
          />
        ))}
      </motion.svg>
    </div>
  );
};
