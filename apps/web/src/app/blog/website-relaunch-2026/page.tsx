import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Relaunch | Such Software Blog",
  description: "We rebuilt such.software from the ground up. Here is what we used and why.",
  alternates: { canonical: "/blog/website-relaunch-2026" },
};

export default function WebsiteRelaunchPost() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <article id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Blog
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <time className="text-sm text-muted-foreground">February 6, 2026</time>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Website Relaunch</h1>
            <p className="text-muted-foreground mt-3">New design, new infrastructure, same focus on quality</p>
          </header>

          <div className="prose dark:prose-invert max-w-none">
          <p>
            We rebuilt such.software. New design, new infrastructure, same focus on performance and accessibility.
          </p>

          <h2>Stack</h2>
          <ul>
            <li><strong>Framework:</strong> Next.js 15 (App Router)</li>
            <li><strong>Language:</strong> TypeScript</li>
            <li><strong>Styling:</strong> Tailwind CSS with CSS variables for theming</li>
            <li><strong>Animation:</strong> Framer Motion</li>
            <li><strong>Monorepo:</strong> Turborepo + pnpm workspaces</li>
            <li><strong>Testing:</strong> Playwright with axe-core for accessibility</li>
            <li><strong>Bot Protection:</strong> Cloudflare Turnstile</li>
            <li><strong>Email:</strong> Resend</li>
          </ul>

          <h2>Procedural Graphics</h2>
          <p>
            The site features two custom procedural animations: NebulaField and DataGrid. Both are 
            SVG-based, theme-aware, and respect prefers-reduced-motion. NebulaField renders animated 
            data streams flowing toward a central icon using quadratic Bezier curves on the homepage. 
            DataGrid draws a pulsing grid with traveling data packets on the Services page.
          </p>

          <h2>Accessibility</h2>
          <p>
            We run 42 automated accessibility tests across Chromium, Firefox, and WebKit on every build. 
            Tests cover WCAG 2.2 AA compliance, heading hierarchy, color contrast, keyboard navigation, 
            and form accessibility. Lighthouse scores are 99-100 across all pages.
          </p>

          <h2>Performance</h2>
          <p>
            The NebulaField component is lazy loaded with next/dynamic and requestIdleCallback. Canvas 
            rendering is throttled. Fonts are loaded via next/font for zero layout shift. Images use 
            next/image for automatic optimization.
          </p>

          <h2>Structure</h2>
          <p>
            The site now has Products, Services, Blog, and About sections. Products showcases our 
            standalone offerings: Webshops, Custom Websites, Smirk Wallet, and Bauhaus Echo. Services 
            covers our partnership model and consulting work. Mobile users get a bottom navigation bar.
          </p>
        </div>
        </div>
      </article>
      <MobileNav />
    </main>
  );
}
