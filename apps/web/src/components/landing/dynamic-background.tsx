'use client';

import { useTheme } from "next-themes";
import { NebulaField } from "@repo/ui/procedural/nebula-field";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const { resolvedTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug on first load
  useEffect(() => {
    console.log('[DynamicBackground] mounted:', mounted, 'theme:', theme, 'resolvedTheme:', resolvedTheme, 'systemTheme:', systemTheme);
  }, [mounted, theme, resolvedTheme, systemTheme]);

  // Don't render until mounted (standard hydration fix)
  if (!mounted) {
    return <div className="fixed inset-0 z-0 h-screen w-screen" />;
  }

  // After mount, determine the theme - fall back to system preference or 'dark'
  const effectiveTheme = resolvedTheme || systemTheme || 'dark';
  const themeMode = effectiveTheme === 'dark' ? 'dark' : 'light';

  return (
    <NebulaField
      className="fixed inset-0 z-0 h-screen w-screen"
      themeMode={themeMode}
    />
  );
}