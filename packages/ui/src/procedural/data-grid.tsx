'use client';

import { motion } from "framer-motion";

export const DataGrid = () => {
  const gridLines = Array.from({ length: 10 }).map((_, i) => i * 10);
  
  return (
    <svg className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none z-0">
      {gridLines.map((pos, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0" y1={`${pos}%`} x2="100%" y2={`${pos}%`}
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-200 dark:text-slate-800" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.1 }}
        />
      ))}
       {/* Animated "Data Packets" travelling lines */}
       <motion.rect
         width="2" height="2" fill="currentColor"
         className="text-blue-500 dark:text-blue-400"
       >
         <motion.animateMotion 
           path="M 0 50 H 100"
           dur="5s"
           repeatCount="indefinite"
         />
       </motion.rect>
    </svg>
  );
};