'use client';

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load the heavy NebulaField component
const NebulaField = dynamic(
  () => import("@repo/ui/procedural/nebula-field").then((mod) => mod.NebulaField),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-0 h-screen w-screen bg-background" />,
  }
);

interface DynamicBackgroundProps {
  nebulaPosition?: { x: number; y: number } | null;
}

export function DynamicBackground({ nebulaPosition }: DynamicBackgroundProps) {
  const { resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showNebula, setShowNebula] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay nebula render to prioritize main content (LCP)
    // Use typeof check for Safari compatibility (requestIdleCallback not supported)
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(() => setShowNebula(true));
    } else {
      timeoutHandle = window.setTimeout(() => setShowNebula(true), 100);
    }

    return () => {
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle);
      }
    };
  }, []);

  // Don't render until mounted (standard hydration fix)
  if (!mounted) {
    return <div className="fixed inset-0 z-0 h-screen w-screen bg-background" />;
  }

  // After mount, determine the theme - fall back to system preference or 'dark'
  const effectiveTheme = resolvedTheme || systemTheme || 'dark';
  const themeMode = effectiveTheme === 'dark' ? 'dark' : 'light';

  if (!showNebula) {
    return <div className="fixed inset-0 z-0 h-screen w-screen bg-background" />;
  }

  return (
    <NebulaField
      className="fixed inset-0 z-0 h-screen w-screen"
      themeMode={themeMode}
      position={nebulaPosition ?? undefined}
    />
  );
}
