'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHouse, FaBoxesStacked, FaNewspaper, FaCircleInfo, FaGear } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Home", icon: FaHouse },
  { href: "/products", label: "Products", icon: FaBoxesStacked },
  { href: "/services", label: "Services", icon: FaGear },
  { href: "/blog", label: "Blog", icon: FaNewspaper },
  { href: "/about", label: "About", icon: FaCircleInfo },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
