'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@repo/ui/components/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = theme === "dark";
    
    // Fallback for browsers without startViewTransition
    if (!document.startViewTransition) {
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

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}