import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";
import { chipAccent, hoverBorder, tagStyle, type Proof } from "@/lib/services";

// One "real product behind a pillar" card. Used on the hub and on every /services/[pillar] page.
export function ProofCard({ p, accent }: { p: Proof; accent: string }) {
  const inner = (
    <Card className={`glass-card h-full !p-6 transition-colors ${hoverBorder[accent]}`}>
      <div className="flex items-start gap-4">
        {p.img ? (
          <Image
            src={p.img}
            alt={p.title}
            width={48}
            height={48}
            className="rounded-xl flex-shrink-0 h-12 w-12 object-cover bg-white/5"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-lg font-bold ${chipAccent[accent]}`}
          >
            {p.title.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
            {p.tag && (
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${tagStyle[p.tag] ?? chipAccent[accent]}`}>
                {p.tag}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
          {p.href && (
            <span className="mt-2 inline-block text-sm font-medium text-foreground group-hover:underline">
              Learn more →
            </span>
          )}
        </div>
      </div>
    </Card>
  );

  if (!p.href) return <div>{inner}</div>;
  const external = p.href.startsWith("http");
  return external ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      {inner}
    </a>
  ) : (
    <Link href={p.href} className="group block h-full">
      {inner}
    </Link>
  );
}
