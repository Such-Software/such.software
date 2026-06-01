import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";

// Literal class strings per color so Tailwind's JIT keeps them (no dynamic interpolation).
const cardBg: Record<string, string> = {
  orange: "!bg-orange-50/95 dark:!bg-orange-950/95 !border-orange-500/20",
  yellow: "!bg-yellow-50/95 dark:!bg-yellow-950/95 !border-yellow-500/20",
  amber: "!bg-amber-50/95 dark:!bg-amber-950/95 !border-amber-500/20",
  emerald: "!bg-emerald-50/95 dark:!bg-emerald-950/95 !border-emerald-500/20",
  blue: "!bg-blue-50/95 dark:!bg-blue-950/95 !border-blue-500/20",
  green: "!bg-green-50/95 dark:!bg-green-950/95 !border-green-500/20",
};
const titleColor: Record<string, string> = {
  orange: "text-orange-700 dark:text-orange-400",
  yellow: "text-yellow-700 dark:text-yellow-400",
  amber: "text-amber-700 dark:text-amber-400",
  emerald: "text-emerald-700 dark:text-emerald-400",
  blue: "text-blue-700 dark:text-blue-400",
  green: "text-green-700 dark:text-green-400",
};
const imgBorder: Record<string, string> = {
  orange: "border-orange-500/10",
  yellow: "border-yellow-500/10",
  amber: "border-amber-500/10",
  emerald: "border-emerald-500/10",
  blue: "border-blue-500/10",
  green: "border-green-500/10",
};
const spanClass: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
};

type Item = {
  name: string;
  tagline: string;
  color: keyof typeof titleColor;
  span: 1 | 2;
  image: string;
  alt: string;
  href: string;
  external?: boolean;
};

// Order matters: spans 2,1,1,2,2,1 tile a 3-column grid with no gaps while alternating the
// wide side row to row for a balanced bento look.
const items: Item[] = [
  { name: "Wownerogue", tagline: "Provably-fair roguelike, synced to crypto block times.", color: "orange", span: 2, image: "/images/products/privacy-labs.png", alt: "Screenshot of the Wownerogue roguelike dungeon-crawler", href: "/products/wownerogue" },
  { name: "Neroswap", tagline: "DEX & CEX orderbook aggregator.", color: "yellow", span: 1, image: "/images/products/neroswap.png", alt: "Screenshot of the Neroswap orderbook aggregator", href: "https://neroswap.com", external: true },
  { name: "Smirk Wallet", tagline: "Non-custodial browser wallet with social tipping.", color: "amber", span: 1, image: "/images/products/smirk-wallet.png", alt: "Smirk Wallet browser extension", href: "https://smirk.cash", external: true },
  { name: "Occupy Wallets", tagline: "Custom e-commerce storefront we build and host for an art brand.", color: "emerald", span: 2, image: "/images/products/occupy-wallets.png", alt: "Occupy Wallets online store and gallery", href: "https://occupywallets.art", external: true },
  { name: "Bauhaus Echo", tagline: "Visual memory puzzle game.", color: "blue", span: 2, image: "/images/products/bauhaus-echo.png", alt: "Bauhaus Echo visual memory puzzle game", href: "/products/bauhaus-echo" },
  { name: "Vegan IQ", tagline: "Plant-based trivia game.", color: "green", span: 1, image: "/images/products/vegan-iq.png", alt: "Vegan IQ plant-based trivia game", href: "/products/vegan-iq" },
];

function BentoCard({ item, delay }: { item: Item; delay: number }) {
  const inner = (
    <Card className={`h-full glass-card group min-h-[300px] rounded-[2.5rem] ${cardBg[item.color]} cursor-pointer`}>
      <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
        <h3 className={`text-xl font-bold ${titleColor[item.color]}`}>{item.name}</h3>
        <p className="text-sm mt-1 text-foreground font-semibold">{item.tagline}</p>
      </div>
      <div className={`absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border ${imgBorder[item.color]} shadow-inner`}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-contain p-2 opacity-60 transition-transform duration-1000 group-hover:scale-105"
          sizes={item.span === 2 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
    </Card>
  );

  const className = `bento-item ${spanClass[item.span]}`;
  const style = { animationDelay: `${delay}ms` };

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className} style={style}>
      {inner}
    </Link>
  );
}

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 w-full max-w-7xl mx-auto p-4 z-10 relative">
      {items.map((item, i) => (
        <BentoCard key={item.name} item={item} delay={i * 75} />
      ))}
    </section>
  );
};
