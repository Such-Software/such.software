import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suchoice | Such Software",
  description: "Can't decide? Snap a photo, let AI read your options, and pick for you. Decision tools for when you're stuck. Android and iOS.",
  alternates: { canonical: "/products/suchoice" },
};

const features = [
  { name: "AI Image Reading", description: "Point your camera at any text. Suchoice extracts the options automatically." },
  { name: "Random Pick", description: "Spin the wheel and let the app choose for you." },
  { name: "Decision Tools", description: "Coin flip, dice roll, and other quick ways to break a deadlock." },
  { name: "Cross-Platform", description: "Available on Android and iOS." },
];

export default function SuchoicePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-600 dark:text-pink-400">
          Suchoice
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Can't decide? Point your camera at any text with options, and Suchoice reads it, extracts the choices, and picks one for you.
            Menus, lists, schedules, whatever. Plus a set of general decision tools for when you're stuck.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="outline" size="lg" disabled className="cursor-not-allowed">
            Google Play — Under Review
          </Button>
          <Button variant="outline" size="lg" disabled className="cursor-not-allowed">
            App Store — Under Review
          </Button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.name} className="glass-card border-pink-500/20">
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/products/suchoice/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
