'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@repo/ui/components/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = resolvedTheme === "dark";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Skip animation if user prefers reduced motion or browser doesn't support view transitions
    if (prefersReducedMotion || !document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
        }
      );
    });
  };

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={mounted ? toggleTheme : undefined}
      className="rounded-full"
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
    >
      {/* Show the icon representing what clicking will switch TO */}
      {mounted && isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}