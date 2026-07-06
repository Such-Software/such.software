import Image from "next/image";
import { Card } from "@repo/ui/components/card";

// Literal class strings per accent so Tailwind's JIT keeps them.
const border: Record<string, string> = {
  violet: "border-violet-500/20 hover:border-violet-500/50",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
  amber: "border-amber-500/20 hover:border-amber-500/50",
  blue: "border-blue-500/20 hover:border-blue-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
};
const chip: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  cyan: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  amber: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  blue: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
};

type Surface = {
  img: string;
  title: string;
  blurb: string;
  shop: string;
  color: keyof typeof chip;
  href: string;
};

// Deliberately varied surfaces across DIFFERENT shops: the point is to show
// depth the homepage crops hide (booking calendars especially) and that every
// surface is themed, not just the landing page.
const surfaces: Surface[] = [
  {
    img: "yoga-booking",
    title: "Book a class on a themed calendar",
    blurb: "Service products get a real scheduling calendar, no shipping, appointment details after checkout.",
    shop: "Sage & Sun (yoga)",
    color: "violet",
    href: "https://yoga-demo.such.software/us/products/beginner-class",
  },
  {
    img: "coaching-booking",
    title: "Schedule a discovery call inline",
    blurb: "Same booking engine, different brand: sessions and packages scheduled right on the product page.",
    shop: "Compass (coaching)",
    color: "cyan",
    href: "https://coaching-demo.such.software/us/products/discovery-call",
  },
  {
    img: "artisan-product",
    title: "Editorial product pages",
    blurb: "Big imagery, calm type, expandable product and shipping details, tuned to the shop's personality.",
    shop: "Honeyglow (artisan)",
    color: "amber",
    href: "https://artisan-demo.such.software/us/products/beeswax-pillar",
  },
  {
    img: "merch-store",
    title: "Dense catalog with overlay cards",
    blurb: "A four-up grid with image-forward overlay cards, a different card style and density per tenant.",
    shop: "Aurora Print (merch)",
    color: "blue",
    href: "https://merch-demo.such.software/us/store",
  },
  {
    img: "crypto-product",
    title: "Digital goods, crypto checkout",
    blurb: "A dark gallery skin for downloads and prints, payable in Bitcoin, Monero, Wownero, or Grin.",
    shop: "0xCanvas (crypto)",
    color: "emerald",
    href: "https://crypto-demo.such.software/us/products/pixel-sunrise",
  },
  {
    img: "artisan-cart",
    title: "Cart and checkout in-brand",
    blurb: "The cart, summary, and checkout carry the shop's palette and type all the way to payment.",
    shop: "Honeyglow (artisan)",
    color: "amber",
    href: "https://artisan-demo.such.software/us/store",
  },
];

function SurfaceCard({ s }: { s: Surface }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[2rem]"
      aria-label={`Open the ${s.shop} demo (${s.title}) in a new tab`}
    >
      <Card className={`glass-card h-full !p-0 overflow-hidden cursor-pointer transition-colors ${border[s.color]}`}>
        <div className="aspect-[16/10] w-full overflow-hidden">
          <Image
            src={`/images/demos/${s.img}.jpg`}
            alt={`${s.shop}: ${s.title}`}
            width={1280}
            height={800}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${chip[s.color]}`}>
            {s.shop}
          </span>
          <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
        </div>
      </Card>
    </a>
  );
}

export function SurfacesGallery() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {surfaces.map((s) => (
        <SurfaceCard key={s.img} s={s} />
      ))}
    </div>
  );
}
