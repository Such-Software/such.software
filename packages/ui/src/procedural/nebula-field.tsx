'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface NebulaProps {
  className?: string;
  density?: number;
  themeMode?: 'light' | 'dark'; // customized prop
}

export const NebulaField = ({ className, density = 15, themeMode = 'dark' }: NebulaProps) => {
  const [paths, setPaths] = useState<string[]>([]);

  // Procedural generation: Create organic bezier curves
  useEffect(() => {
    const newPaths = Array.from({ length: density }).map(() => {
      // Random control points
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const cp1X = startX + (Math.random() - 0.5) * 50;
      const cp1Y = startY + (Math.random() - 0.5) * 50;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      
      return `M ${startX} ${startY} Q ${cp1X} ${cp1Y} ${endX} ${endY}`;
    });
    setPaths(newPaths);
  }, [density]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-40 dark:opacity-60"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth={themeMode === 'light' ? 0.1 : 0.3} 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 10, // Async timing
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="text-slate-400 dark:text-emerald-400"
          />
        ))}
      </svg>
    </div>
  );
};