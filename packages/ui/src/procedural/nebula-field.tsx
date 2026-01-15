'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Monitor } from "lucide-react";

interface NebulaProps {
  className?: string;
  density?: number;
  themeMode?: 'light' | 'dark'; // customized prop
}

export const NebulaField = ({ className, density = 20, themeMode = 'dark' }: NebulaProps) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  
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
  }, [density, targetX, targetY]);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      
      {/* "Computer" Icon positioned via inline styles to match physics target exactly */}
      <div 
        className="absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-20 dark:opacity-40 animate-pulse"
        style={{ left: `${targetX}%`, top: `${targetY}%` }}
      >
        <Monitor 
          size={64} 
          className={cn(
            "transition-colors duration-1000",
            themeMode === 'light' ? "text-slate-400" : "text-emerald-500"
          )} 
        />
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-60 dark:opacity-80 absolute inset-0"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth={themeMode === 'light' ? 0.1 : 0.2} 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1], // Draw from start to end
              opacity: [0, 1, 0]  // Fade in, then out at the end
            }}
            transition={{
              duration: 5 + Math.random() * 5, // Faster, more data-stream like (was 20s)
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className={cn(
              "transition-colors duration-500",
              themeMode === 'light' ? "text-slate-400" : "text-emerald-500"
            )}
          />
        ))}
      </svg>
    </div>
  );
};