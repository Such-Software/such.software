'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLogo } from "./site-logo";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * On the home page the splash owns the first screen, so the header is `floating`
 * (fixed) and only shown once the visitor has `visible`-entered the site. Other
 * pages use the default always-on sticky header.
 */
export function Header({ floating = false, visible = true }: { floating?: boolean; visible?: boolean }) {
  const pathname = usePathname();

  const positionClasses = floating
    ? `fixed top-0 inset-x-0 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
      }`
    : "sticky top-0";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className={`z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 bg-background/50 backdrop-blur-3xl rounded-b-3xl border-b border-border/50 ${positionClasses}`}>
        <div className="flex items-center gap-4">
          <SiteLogo />
          <nav className="hidden md:flex gap-6 text-sm font-medium" aria-label="Main navigation">
            <Link
              href="/products"
              className={pathname.startsWith("/products") ? "text-primary" : "hover:text-primary transition-colors"}
            >
              Portfolio
            </Link>
            <Link
              href="/apps"
              className={pathname.startsWith("/apps") ? "text-primary" : "hover:text-primary transition-colors"}
            >
              Apps
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "text-primary" : "hover:text-primary transition-colors"}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={pathname.startsWith("/blog") ? "text-primary" : "hover:text-primary transition-colors"}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-primary" : "hover:text-primary transition-colors"}
            >
              About
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>
    </>
  );
}
