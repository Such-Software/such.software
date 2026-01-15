'use client';

import { useTheme } from "next-themes";
import { NebulaField } from "@repo/ui/procedural/nebula-field";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NebulaField 
      className="fixed inset-0 z-0 h-screen w-screen" 
      themeMode={theme === 'dark' ? 'dark' : 'light'} 
    />
  );
}