import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { SuchMoonLaunchStoreButtons } from "@/components/store-buttons";
import { JsonLd, breadcrumbLd, softwareAppLd } from "@/components/seo/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Such Moon Launch: Pixel Rocket Arcade Game | Such Software",
  description: "Fly a rocket across the solar system in this Wownero-themed pixel arcade. 11 levels, 4 weapons, tilt-to-steer, endless mode. Free on iOS, Android, web, desktop.",
  alternates: { canonical: "/products/such-moon-launch" },
  openGraph: {
    title: "Such Moon Launch: Pixel Rocket Arcade Game | Such Software",
    description: "Fly a rocket across the solar system in this Wownero-themed pixel arcade. 11 levels, 4 weapons, tilt-to-steer, endless mode. Free on iOS, Android, web, desktop.",
    type: "website",
    images: ["/images/og/such-moon-launch.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/such-moon-launch.png"],
  },
};

const levels = [
  { name: "Moon", description: "Tutorial — learn to fly and land" },
  { name: "Mars", description: "Dodge your first Martians" },
  { name: "Venus", description: "Gamma rays and more enemies" },
  { name: "Io", description: "Asteroids join the chaos" },
  { name: "Jupiter", description: "Double gravity, wormholes" },
  { name: "Saturn", description: "Solar wind crosswinds" },
  { name: "Neptune", description: "Deep space nebula fog" },
  { name: "Pluto", description: "Tiny target, long journey" },
  { name: "Asteroid Belt", description: "Land on a drifting rock cluster" },
  { name: "Space Station", description: "Rotating target, black holes" },
  { name: "Mothership", description: "Boss fight — land on the enemy ship" },
  { name: "Endless Mode", description: "Procedural waves, infinite challenge" },
];

const weapons = [
  { name: "🔫 Cannon", description: "Auto-aim forward projectiles" },
  { name: "🚀 Missiles", description: "Homing projectiles, limited ammo" },
  { name: "⚡ Laser", description: "Continuous beam, drains fuel" },
  { name: "💥 EMP", description: "Area blast, destroys all nearby enemies" },
];

export default function SuchMoonLaunchPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Such Moon Launch", path: "/products/such-moon-launch" },
      ])} />
      <JsonLd data={softwareAppLd({
        name: "Such Moon Launch",
        path: "/products/such-moon-launch",
        description: "Fly a rocket across the solar system in this Wownero-themed pixel arcade. 11 levels, 4 weapons, tilt-to-steer, endless mode. Free on iOS, Android, web, desktop.",
        category: "GameApplication",
        operatingSystem: "Android, iOS, Web, Windows, macOS, Linux",
        price: "0",
        offerUrl: "https://moonlaunch.such.software",
      })} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-600 dark:text-amber-400">
          Such Moon Launch
        </h1>
        <p className="text-base text-muted-foreground mb-6">Vry rocket. Much landing. Wow!</p>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A Wownero-themed pixel-art rocket arcade. Fly across the solar system, dodge Martians,
            asteroids, gamma rays, and black holes. Collect crypto, upgrade your ship, and unlock
            13 ship skins. 11 story levels plus a procedural endless mode — with tilt-to-steer
            controls on mobile.
          </p>
        </div>

        <div className="mb-12">
          <SuchMoonLaunchStoreButtons />
        </div>

        <h2 className="text-2xl font-bold mb-6">The Story</h2>
        <div className="section-container border-l-4 border-amber-500 mb-12 text-muted-foreground space-y-4">
          <p>
            Such Moon Launch is the greatly expanded re-release of <strong>the very first game I ever wrote</strong>.
            The original — <em>Meowlet Moon Launch</em> — was a single-level rocket-landing prototype
            published years ago as a test app under our old <strong>Tabby Labs</strong> developer account.
            One level, simple physics, no music, no juice. But it shipped, and people played it.
          </p>
          <p>
            This release is a near-complete rebuild. 11 hand-tuned story levels across the solar system,
            a procedural endless mode, 4 weapons, 8 ship upgrades, 13 skins, achievements on Google Play
            Games and Apple Game Center, cloud save, a global leaderboard backend, a 3D landing
            mini-game on final approach, and proper <strong>tilt-to-steer</strong> controls calibrated
            for phones — no drift, no fight. All wrapped in a Wownero-themed pixel-art aesthetic.
          </p>
          <p>
            Same rocket, same Moon. Almost everything else is new.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="section-container border-l-4 border-amber-500 mb-12">
          <ol className="space-y-4 text-muted-foreground">
            <li><strong>1. Launch</strong> — Blast off from Earth with limited fuel.</li>
            <li><strong>2. Navigate</strong> — Fly through space, dodging hazards and collecting crypto.</li>
            <li><strong>3. Land</strong> — Touch down gently on the target planet. Tilt and speed matter.</li>
            <li><strong>4. Upgrade</strong> — Spend Moonrocks on thrust, fuel, weapons, shields, and skins.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6">11 Levels + Endless Mode</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {levels.map((level) => (
            <Card key={level.name} className="glass-card border-amber-500/20">
              <h3 className="font-bold mb-1">{level.name}</h3>
              <p className="text-sm text-muted-foreground">{level.description}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Weapons</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {weapons.map((weapon) => (
            <Card key={weapon.name} className="glass-card border-amber-500/20">
              <h3 className="text-lg font-bold mb-2">{weapon.name}</h3>
              <p className="text-muted-foreground">{weapon.description}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">13 Ship Skins</h3>
            <p className="text-sm text-muted-foreground">8 purchasable + 4 achievement unlocks + default</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">8 Ship Upgrades</h3>
            <p className="text-sm text-muted-foreground">Thrust, fuel, shield, armor, landing gear, magnet, and more</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Star Ratings</h3>
            <p className="text-sm text-muted-foreground">1–3 stars per level based on time and fuel</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Global Leaderboards</h3>
            <p className="text-sm text-muted-foreground">Per-level rankings across all platforms</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Cloud Save</h3>
            <p className="text-sm text-muted-foreground">Progress synced to our backend, restore anytime</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Cross-Platform</h3>
            <p className="text-sm text-muted-foreground">Android, iOS, Web, Windows, macOS, Linux</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">3D Landing Mode</h3>
            <p className="text-sm text-muted-foreground">Final approach in 3D with cockpit HUD</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Warp Tunnel</h3>
            <p className="text-sm text-muted-foreground">Hyperspace transition between levels</p>
          </Card>
          <Card className="glass-card border-amber-500/20">
            <h3 className="font-bold mb-2">Crypto Theme</h3>
            <p className="text-sm text-muted-foreground">WOW, XMR, BTC, DOGE collectibles as in-game currency</p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">Space Hazards</h2>
        <div className="section-container border-l-4 border-amber-500 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Martians</strong> — enemy ships that chase your rocket</li>
            <li><strong>Gamma Rays</strong> — periodic lethal beams across the level</li>
            <li><strong>Asteroids</strong> — orbiting and drifting rock hazards</li>
            <li><strong>Black Holes</strong> — extreme gravity, instant death at the event horizon</li>
            <li><strong>Nebula Zones</strong> — drain fuel and slow you down</li>
            <li><strong>Solar Wind</strong> — constant force pushing you off course</li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/products/such-moon-launch/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/products/such-moon-launch/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support &amp; Feedback
          </Link>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
