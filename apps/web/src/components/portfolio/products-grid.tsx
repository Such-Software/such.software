"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type Product = {
  slug: string;
  title: string;
  description: string;
  color: string;
  icon?: string;
  /** ISO date string. Null for ongoing services or unreleased items. */
  releaseDate?: string | null;
  /** Not yet released. Sorts as "now" by release date and renders without a detail link. */
  comingSoon?: boolean;
};

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  purple: "border-purple-500/30 hover:border-purple-500/60",
  amber: "border-amber-500/30 hover:border-amber-500/60",
  blue: "border-blue-500/30 hover:border-blue-500/60",
  pink: "border-pink-500/30 hover:border-pink-500/60",
  orange: "border-orange-500/30 hover:border-orange-500/60",
  yellow: "border-yellow-500/30 hover:border-yellow-500/60",
  green: "border-green-500/30 hover:border-green-500/60",
  cyan: "border-cyan-400/30 hover:border-cyan-400/60",
};

const titleColors: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  amber: "text-amber-600 dark:text-amber-400",
  blue: "text-blue-600 dark:text-blue-400",
  pink: "text-pink-600 dark:text-pink-400",
  orange: "text-orange-600 dark:text-orange-400",
  yellow: "text-yellow-600 dark:text-yellow-400",
  green: "text-green-600 dark:text-green-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
};

const glyphBg: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  blue: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  pink: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
  orange: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  yellow: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
  green: "bg-green-500/15 text-green-600 dark:text-green-400",
  cyan: "bg-cyan-400/15 text-cyan-600 dark:text-cyan-400",
};

type SortKey = "release" | "name";

function effectiveTime(p: Product): number {
  if (p.releaseDate) return Date.parse(p.releaseDate);
  return 0;
}

function ProductIcon({ product }: { product: Product }) {
  if (product.icon) {
    return (
      <Image
        src={product.icon}
        alt={`${product.title} icon`}
        width={56}
        height={56}
        className="rounded-xl flex-shrink-0"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-2xl font-bold ${glyphBg[product.color] ?? glyphBg.cyan}`}
    >
      {product.title.charAt(0)}
    </div>
  );
}

function ProductCardInner({ product }: { product: Product }) {
  return (
    <Card className={`glass-card h-full min-h-[200px] ${colorClasses[product.color]} transition-all`}>
      <div className="flex items-center gap-4 mb-3">
        <ProductIcon product={product} />
        <div className="flex flex-col">
          <h2 className={`text-2xl font-bold ${titleColors[product.color]}`}>
            {product.title}
          </h2>
          {product.comingSoon && (
            <span className="mt-1 inline-flex w-fit items-center rounded-full bg-cyan-400/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Coming Soon
            </span>
          )}
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
    </Card>
  );
}

export function ProductsGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>("release");

  const sorted = useMemo(() => {
    const copy = [...products];
    if (sort === "name") {
      copy.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Released work first (newest first); coming-soon items grouped at the bottom.
      copy.sort((a, b) => {
        const aSoon = !!a.comingSoon;
        const bSoon = !!b.comingSoon;
        if (aSoon !== bSoon) return aSoon ? 1 : -1;
        return effectiveTime(b) - effectiveTime(a);
      });
    }
    return copy;
  }, [products, sort]);

  return (
    <>
      <div className="mb-8 flex items-center justify-end gap-3">
        <label htmlFor="product-sort" className="text-sm text-muted-foreground">
          Sort by
        </label>
        <select
          id="product-sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          <option value="release">Release date (newest)</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sorted.map((product, i) => (
          <ScrollReveal key={product.slug} delay={(i % 2) * 0.08}>
            <Link href={`/products/${product.slug}`} className="block h-full">
              <div className="h-full cursor-pointer">
                <ProductCardInner product={product} />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
