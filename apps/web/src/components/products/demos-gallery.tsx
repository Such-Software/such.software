import Image from "next/image";
import { Card } from "@repo/ui/components/card";

// Literal class strings per color so Tailwind's JIT keeps them (no dynamic interpolation).
const cardBorder: Record<string, string> = {
  amber: "border-amber-500/20 hover:border-amber-500/50",
  blue: "border-blue-500/20 hover:border-blue-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
  violet: "border-violet-500/20 hover:border-violet-500/50",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
};
const titleColor: Record<string, string> = {
  amber: "text-amber-700 dark:text-amber-400",
  blue: "text-blue-700 dark:text-blue-400",
  emerald: "text-emerald-700 dark:text-emerald-400",
  violet: "text-violet-700 dark:text-violet-400",
  cyan: "text-cyan-700 dark:text-cyan-400",
};
type Demo = {
  name: string;
  slug: string;
  tagline: string;
  color: keyof typeof titleColor;
  href: string;
};

const demos: Demo[] = [
  {
    name: "Artisan",
    slug: "artisan",
    tagline: "Warm, handcrafted-goods storefront with editorial product pages.",
    color: "amber",
    href: "https://artisan-demo.such.software",
  },
  {
    name: "Merch",
    slug: "merch",
    tagline: "Bold band / brand merch shop wired to print-on-demand fulfillment.",
    color: "blue",
    href: "https://merch-demo.such.software",
  },
  {
    name: "Crypto",
    slug: "crypto",
    tagline: "Non-custodial crypto checkout: Bitcoin, Monero, Wownero, and Grin.",
    color: "emerald",
    href: "https://crypto-demo.such.software",
  },
  {
    name: "Yoga",
    slug: "yoga",
    tagline: "Calm studio storefront for classes, passes, and lifestyle goods.",
    color: "violet",
    href: "https://yoga-demo.such.software",
  },
  {
    name: "Coaching",
    slug: "coaching",
    tagline: "Service-led site for sessions, packages, and digital products.",
    color: "cyan",
    href: "https://coaching-demo.such.software",
  },
];

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <a
      href={demo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[2rem]"
      aria-label={`Open the ${demo.name} demo storefront in a new tab`}
    >
      <Card className={`glass-card h-full !p-0 overflow-hidden cursor-pointer transition-colors ${cardBorder[demo.color]}`}>
        {/* Real screenshot of the live themed storefront — captured at 1280×800,
            cropped to the hero/nav (the most brand-distinctive region). */}
        <div className="h-40 w-full overflow-hidden">
          <Image
            src={`/images/demos/${demo.slug}.jpg`}
            alt={`${demo.name} demo storefront`}
            width={1280}
            height={720}
            className="h-40 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${titleColor[demo.color]}`}>{demo.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{demo.tagline}</p>
          <span className="text-sm font-medium text-foreground group-hover:underline">
            Visit live demo →
          </span>
        </div>
      </Card>
    </a>
  );
}

export function DemosGallery() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {demos.map((demo) => (
        <DemoCard key={demo.slug} demo={demo} />
      ))}
    </div>
  );
}
