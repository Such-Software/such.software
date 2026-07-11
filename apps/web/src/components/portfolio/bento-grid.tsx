import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";
import { HoverVignette } from "@/components/showcase/hover-vignette";

// Literal class strings per color so Tailwind's JIT keeps them (no dynamic interpolation).
// The colour tint + border only paint on hover/focus (via the `group/tile` link) — at rest
// the .bento-item CSS keeps the card chrome transparent so tiles read as title + render only.
const cardBg: Record<string, string> = {
  orange: "group-hover/tile:!bg-orange-50/95 dark:group-hover/tile:!bg-orange-950/95 group-focus-within/tile:!bg-orange-50/95 dark:group-focus-within/tile:!bg-orange-950/95 group-hover/tile:!border-orange-500/20 group-focus-within/tile:!border-orange-500/20",
  yellow: "group-hover/tile:!bg-yellow-50/95 dark:group-hover/tile:!bg-yellow-950/95 group-focus-within/tile:!bg-yellow-50/95 dark:group-focus-within/tile:!bg-yellow-950/95 group-hover/tile:!border-yellow-500/20 group-focus-within/tile:!border-yellow-500/20",
  amber: "group-hover/tile:!bg-amber-50/95 dark:group-hover/tile:!bg-amber-950/95 group-focus-within/tile:!bg-amber-50/95 dark:group-focus-within/tile:!bg-amber-950/95 group-hover/tile:!border-amber-500/20 group-focus-within/tile:!border-amber-500/20",
  emerald: "group-hover/tile:!bg-emerald-50/95 dark:group-hover/tile:!bg-emerald-950/95 group-focus-within/tile:!bg-emerald-50/95 dark:group-focus-within/tile:!bg-emerald-950/95 group-hover/tile:!border-emerald-500/20 group-focus-within/tile:!border-emerald-500/20",
  blue: "group-hover/tile:!bg-blue-50/95 dark:group-hover/tile:!bg-blue-950/95 group-focus-within/tile:!bg-blue-50/95 dark:group-focus-within/tile:!bg-blue-950/95 group-hover/tile:!border-blue-500/20 group-focus-within/tile:!border-blue-500/20",
  green: "group-hover/tile:!bg-green-50/95 dark:group-hover/tile:!bg-green-950/95 group-focus-within/tile:!bg-green-50/95 dark:group-focus-within/tile:!bg-green-950/95 group-hover/tile:!border-green-500/20 group-focus-within/tile:!border-green-500/20",
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
  /**
   * Optional hover/focus "vignette" — a transparent alpha-WebM 3D render from the
   * game/app that plays OVER this tile's static art on hover or keyboard focus.
   * Purely additive: with no assets present (or on Safari / reduced-motion) the tile
   * renders exactly as its static `image`. Asset convention:
   *   webm:   /showcase/vignettes/<slug>.webm  (VP9 + alpha)
   *   poster: /showcase/vignettes/<slug>.png   (transparent RGBA PNG)
   */
  vignette?: { webm: string; poster: string; webmDark?: string; posterDark?: string };
};

// Six tiles, spans tiling the 3-column grid gap-free: (2,1) / (1,2) / (1,2) = three full rows.
// Barns & Neutrons is the feature tile — a live transparent 3D vignette that grows on hover.
const items: Item[] = [
  { name: "Occupy Wallets", tagline: "Custom e-commerce storefront we build and host for an artist.", color: "emerald", span: 2, image: "/images/products/occupy-wallets.png", alt: "Occupy Wallets online store and gallery", href: "https://occupywallets.art", external: true },
  { name: "Smirk Wallet", tagline: "Non-custodial browser wallet with social tipping.", color: "amber", span: 1, image: "/images/products/smirk-wallet.png", alt: "Smirk Wallet browser extension", href: "https://smirk.cash", external: true },
  { name: "Wownerogue", tagline: "Provably-fair roguelike, synced to crypto block times.", color: "orange", span: 1, image: "/images/products/privacy-labs.png", alt: "Screenshot of the Wownerogue roguelike dungeon-crawler", href: "/products/wownerogue" },
  { name: "Bauhaus Echo", tagline: "Visual memory puzzle game.", color: "blue", span: 2, image: "/images/products/bauhaus-echo.png", alt: "Bauhaus Echo visual memory puzzle game", href: "/products/bauhaus-echo" },
  { name: "Vegan IQ", tagline: "Plant-based trivia game.", color: "green", span: 1, image: "/images/products/vegan-iq.png", alt: "Vegan IQ plant-based trivia game", href: "/products/vegan-iq" },
  // Single theme-independent asset: the INSET black silhouette stroke (sg_outline) sits ON the yellow letters, so one
  // baked alpha render reads on both light and dark tiles — no per-theme pair needed (a 3D->web pipeline win).
  { name: "Barns & Neutrons", tagline: "Cozy puzzle expedition across the real Table of Nuclides.", color: "amber", span: 2, image: "/images/products/barns-and-neutrons.svg", alt: "Barns & Neutrons, a game about the Table of Nuclides", href: "/products/barns-and-neutrons", vignette: { webm: "/showcase/vignettes/barns.webm", poster: "/showcase/vignettes/barns.png" } },
];

function BentoCard({ item, delay }: { item: Item; delay: number }) {
  // Feature tiles (a live vignette) drop the static screenshot — the transparent poster is the
  // rest state — and grow + lift above their neighbours on hover so the animation is the focus.
  const feature = !!item.vignette;
  const inner = (
    <Card className={`h-full glass-card group min-h-[300px] rounded-[2.5rem] ${cardBg[item.color]} cursor-pointer`}>
      <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
        <h3 className={`text-xl font-bold ${titleColor[item.color]}`}>{item.name}</h3>
        <p className="text-sm mt-1 text-foreground font-semibold">{item.tagline}</p>
      </div>
      <div className={`absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border ${imgBorder[item.color]} shadow-inner`}>
        {feature ? (
          <HoverVignette
            webm={item.vignette!.webm}
            poster={item.vignette!.poster}
            webmDark={item.vignette!.webmDark}
            posterDark={item.vignette!.posterDark}
          />
        ) : (
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain p-2 opacity-60 transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 65vw, 280px"
          />
        )}
      </div>
    </Card>
  );

  const className = `bento-item group/tile ${spanClass[item.span]}${
    feature
      ? " relative z-0 transition-transform duration-500 ease-out will-change-transform motion-safe:hover:scale-[1.05] motion-safe:hover:z-30 focus-visible:z-30"
      : ""
  }`;
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
