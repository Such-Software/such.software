'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { cn } from "../lib/utils";
import { Monitor } from "lucide-react";

interface NebulaProps {
  className?: string;
  density?: number;
  themeMode?: 'light' | 'dark'; // customized prop
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
      // Random initial delay
      await new Promise(resolve => setTimeout(resolve, Math.random() * 4000));
      
      while (isMounted) {
        const duration = 2 + Math.random() * 4;
        
        controls.set({ pathLength: 0, opacity: 0 });

        await controls.start({
          pathLength: [0, 1],
          opacity: [0, 1, 1, 0],
          transition: { 
            duration, 
            ease: "easeInOut",
            times: [0, 0.1, 0.9, 1]
          }
        });

        if (isMounted) onHit();
        
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
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
      animate={controls}
      className={cn(
        "transition-colors duration-500",
        themeMode === 'light' ? "text-slate-400" : "text-emerald-500"
      )}
    />
  );
};

export const NebulaField = ({ className, density = 20, themeMode = 'dark' }: NebulaProps) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const monitorControls = useAnimation();
  
  // Configuration for convergence point (percent of container)
  const targetX = 25; // moved right
  const targetY = 20; // moved up

  useEffect(() => {
    setMounted(true);
    const newPaths = Array.from({ length: density }).map(() => {
      // Determine random edge start point
      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX = 50, startY = 50;
      
      // Push start point well outside viewbox to ensure full coverage
      switch(edge) {
        case 0: startX = Math.random() * 100; startY = -20; break; // Top
        case 1: startX = 120; startY = Math.random() * 100; break; // Right
        case 2: startX = Math.random() * 100; startY = 120; break; // Bottom
        case 3: startX = -20; startY = Math.random() * 100; break; // Left
      }

      // End at target point with small variance
      const endX = targetX + (Math.random() - 0.5) * 5;
      const endY = targetY + (Math.random() - 0.5) * 5;

      // Control point for curve
      const cpX = (startX + endX) / 2 + (Math.random() - 0.5) * 50;
      const cpY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
      
      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    });
    setPaths(newPaths);
  }, [density]); // Removed targetX/Y dep as constant

  const handleHit = useCallback(() => {
     monitorControls.start({
        scale: [1, 1.15, 1],
        filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
        transition: { duration: 0.3 }
     });
  }, [monitorControls]);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      
      {/* "Computer" Icon positioned via inline styles to match physics target exactly */}
      <motion.div 
        className="absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-30 dark:opacity-50"
        style={{ left: `${targetX}%`, top: `${targetY}%` }}
        animate={monitorControls}
      >
        <Monitor 
          size={64} 
          className={cn(
            "transition-colors duration-1000",
            themeMode === 'light' ? "text-slate-400" : "text-emerald-500"
          )} 
        />
      </motion.div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-60 dark:opacity-80 absolute inset-0"
      >
        {paths.map((d, i) => (
          <StreamLine
            key={i}
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