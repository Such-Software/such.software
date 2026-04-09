import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { StoreButtons } from "@/components/store-buttons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suchoice | Such Software",
  description: "Can't decide? Snap a photo, let AI read your options, and pick for you. Decision tools for when you're stuck. Android and iOS.",
  alternates: { canonical: "/products/suchoice" },
  openGraph: {
    title: "Suchoice | Such Software",
    description: "Can't decide? Snap a photo, let AI read your options, and pick for you. Decision tools for when you're stuck. Android and iOS.",
    type: "website",
    images: [{ url: "/images/products/suchoice.png", width: 512, height: 512, alt: "Suchoice" }],
  },
};

const features = [
  { name: "Snap & Decide", description: "Take a photo of any menu, list, or set of options. AI reads and extracts the items automatically." },
  { name: "Spin the Wheel", description: "Add your own options or use the ones AI found. Spin and go with it." },
  { name: "Coin Flip", description: "Quick 50/50 decisions with a satisfying animated flip." },
  { name: "Adventure Mode", description: "Enter a city, spin for a random activity, and open the winner in Maps." },
];

export default function SuchoicePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-5 mb-6">
          <Image
            src="/images/products/suchoice.png"
            alt="Suchoice icon"
            width={80}
            height={80}
            className="rounded-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400">
            Suchoice
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stop overthinking every decision. Snap a photo of any menu, list, or set of options, let AI read them, then spin the wheel and go with it.
            Plus a coin flip for quick 50/50 calls and an adventure mode that picks random activities in any city.
          </p>
        </div>

        <div className="mb-12">
          <StoreButtons links={[
            { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchoice" },
            { platform: "apple", href: "https://apps.apple.com/us/app/suchoice/id6759626658" },
          ]} />
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
