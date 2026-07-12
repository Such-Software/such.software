import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ProductsGrid, type Product } from "@/components/portfolio/products-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products: Crypto Tools, Games & Commerce | Such Software",
  description: "Explore Such Software's products: Wownerogue Monero roguelike, Neroswap crypto aggregator, Smirk wallet, headless Webshops, our mobile games, and nuclear games in development.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products: Crypto Tools, Games & Commerce | Such Software",
    description: "Explore Such Software's products: Wownerogue Monero roguelike, Neroswap crypto aggregator, Smirk wallet, headless Webshops, our mobile games, and nuclear games in development.",
    type: "website",
  },
};

const products: Product[] = [
  {
    slug: "webshops",
    title: "Webshops",
    description: "Custom online stores on revenue-share pricing. No upfront cost. Built on headless Medusa.",
    color: "emerald",
    icon: "/images/products/occupy-wallets.png",
    releaseDate: "2025-01-01",
  },
  {
    slug: "custom-websites",
    title: "Custom Websites",
    description: "Real-time web apps, multiplayer games, and live dashboards. Built on Next.js, Socket.io, and WebRTC.",
    color: "purple",
    icon: "/images/products/custom-websites.svg",
    releaseDate: "2025-01-01",
  },
  {
    slug: "smirk-wallet",
    title: "Smirk Wallet",
    description: "Non-custodial multi-asset browser wallet. Send, receive, and tip by username on Telegram and Discord. BTC, LTC, XMR, WOW, GRIN.",
    color: "amber",
    icon: "/images/products/smirk-wallet.png",
    releaseDate: "2026-03-01",
  },
  {
    slug: "bauhaus-echo",
    title: "Bauhaus Echo",
    description: "Visual memory puzzle game inspired by Bauhaus design. Android, iOS, Web.",
    color: "blue",
    icon: "/images/products/bauhaus-echo.png",
    releaseDate: "2026-04-01",
  },
  {
    slug: "suchoice",
    title: "Suchoice",
    description: "Stop overthinking decisions. Snap a photo, let AI read the options, spin the wheel. Plus coin flip and adventure mode. Android and iOS.",
    color: "pink",
    icon: "/images/products/suchoice.png",
    releaseDate: "2026-04-01",
  },
  {
    slug: "vegan-iq",
    title: "Vegan IQ",
    description: "Test your plant-based knowledge with 1,000+ trivia questions across 8 categories, plus a daily challenge and weekly quiz. Android and iOS.",
    color: "green",
    icon: "/images/products/vegan-iq.png",
    releaseDate: "2026-04-01",
  },
  {
    slug: "such-moon-launch",
    title: "Such Moon Launch",
    description: "Vry rocket. Much landing. Wow! Wownero-themed pixel rocket arcade. 11 levels, 4 weapons, tilt-to-steer, endless mode. Android, iOS, Web, Desktop.",
    color: "amber",
    icon: "/images/products/such-moon-launch.png",
    releaseDate: "2026-05-01",
  },
  {
    slug: "wownerogue",
    title: "Wownerogue",
    description: "A provably-fair multiplayer roguelike synced to Monero and Wownero block times. Free in the browser; escape the dungeon before the next block lands. The Monero stagenet instance pays out on-chain.",
    color: "orange",
    icon: "/images/products/privacy-labs.png",
    releaseDate: "2026-06-01",
  },
  {
    slug: "neroswap",
    title: "Neroswap",
    description: "Aggregated DEX & CEX orderbook data. Compare Monero, Wownero, and Bitcoin prices across 6 exchanges in real time.",
    color: "yellow",
    icon: "/images/products/neroswap.svg",
    releaseDate: "2026-03-01",
  },
  {
    slug: "barns-and-neutrons",
    title: "Barns & Neutrons",
    description: "A cozy exploration-puzzle game across the real Chart of Nuclides: the anti-spreadsheet. Capture neutrons, coax decays, and light up the chart while learning honest nuclear physics. Desktop and mobile.",
    color: "yellow",
    icon: "/images/products/barns-and-neutrons.svg",
    releaseDate: null,
    comingSoon: true,
  },
  {
    slug: "alpha-doc",
    title: "Alpha Doc",
    description: "A top-down academic-horror roguelike. You're the irradiated PhD student; master four kinds of radiation and descend through a warped physics facility to your thesis defense. Desktop and mobile.",
    color: "orange",
    icon: "/images/products/alpha-doc.svg",
    releaseDate: null,
    comingSoon: true,
  },
  {
    slug: "decay-theory",
    title: "Decay Theory",
    description: "A side-scrolling platformer where the world is simulated atom by atom, decaying in real time. Play Erwin, a quantum cat, and learn real nuclear physics. Episode 1 coming to iOS and Android.",
    color: "cyan",
    icon: "/images/products/decay-theory.svg",
    releaseDate: null,
    comingSoon: true,
  },
  {
    slug: "bloomword",
    title: "Bloomword",
    description: "A daily word game where everyone gets the same letters and races the sunset; every word you find grows a biome-specific, living 3D typographic tree. Build streaks, collect biomes, and share your bloom. Play free at bloomword.earth; launching on iOS and Android.",
    color: "green",
    icon: "/images/products/bloomword.svg",
    releaseDate: "2026-07-06",
  },
  {
    slug: "meatspace",
    title: "Meatspace",
    description: "A deduction game set in the ruins of the Ingestion: humanity's failed mass upload into the Lattice. Sift a lost person's fragments from the noise of the dead, through a living meat-vs-cyber crossfade, with an optional realtime multiplayer mode: The Wake.",
    color: "pink",
    icon: "/images/products/meatspace.svg",
    releaseDate: null,
    comingSoon: true,
  },
  {
    slug: "mushroom-capital",
    title: "Mushroom Capital",
    description: "A cozy 3D idle game where you build and tend a living fungal ecosystem. Grow your colony, bank Capital, and prestige with Heirloom Spores. Tilt-shift toybox worlds, mobile-first with web and desktop cross-progression. Soft launch this summer.",
    color: "orange",
    icon: "/images/products/mushroom-capital.png",
    releaseDate: null,
    comingSoon: true,
  },
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-500">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and apps we have shipped, from commerce backends to consumer games, plus three nuclear-physics games in development.
          </p>
        </div>

        <ProductsGrid products={products} />

        <div className="flex justify-center mt-16 motion-reduce:hidden">
          <img
            src="/images/animations/anim3_matrix_light.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-40 block dark:hidden"
          />
          <img
            src="/images/animations/anim3_matrix.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-50 hidden dark:block"
          />
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
