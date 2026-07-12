import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import { pillars, borderL, hoverBorder } from "@/lib/services";

// The four pillar cards, each linking to its /services/<slug> subpage. Used as the hub's
// primary nav and, with `exclude`, as the "explore the other pillars" block on a subpage.
export function PillarCards({ exclude, heading }: { exclude?: string; heading?: string }) {
  const shown = pillars.filter((p) => p.slug !== exclude);
  return (
    <div>
      {heading && <h2 className="text-2xl font-bold mb-6">{heading}</h2>}
      <div className="grid sm:grid-cols-2 gap-6">
        {shown.map((p) => (
          <Link key={p.slug} href={`/services/${p.slug}`} className="group block h-full">
            <Card className={`glass-card h-full !p-7 text-left border-l-4 ${borderL[p.accent]} transition-colors ${hoverBorder[p.accent]}`}>
              <h3 className="text-xl font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{p.card}</p>
              <span className="mt-3 inline-block text-sm font-medium text-foreground group-hover:underline">
                Explore {p.label} →
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
