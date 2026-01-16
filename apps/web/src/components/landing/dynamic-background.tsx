'use client';

import { useTheme } from "next-themes";
import { NebulaField } from "@repo/ui/procedural/nebula-field";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const { theme } = useTheme();

  return (
    <NebulaField 
      className="fixed inset-0 z-0 h-screen w-screen" 
      themeMode={theme === 'dark' ? 'dark' : 'light'} 
    />
  );
}