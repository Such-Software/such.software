import { gameOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { pillars, pillarBySlug } from "@/lib/services";

export const alt = "Such Software services";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Prebuild one card per pillar (matches the page's dynamicParams=false).
export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

// Hex accents for the OG card (the pages use Tailwind stems; ImageResponse needs literal colours).
const ogAccent: Record<string, string> = {
  commerce: "#3b82f6", // blue
  games: "#a855f7", // purple
  crypto: "#22d3ee", // cyan
  education: "#f59e0b", // amber
};

export default async function Image({ params }: { params: Promise<{ pillar: string }> }) {
  const { pillar: slug } = await params;
  const pillar = pillarBySlug(slug);
  if (!pillar) return gameOgImage({ title: "Services", tagline: "Such Software", accent: "#34d399", badge: "Services" });
  return gameOgImage({
    title: pillar.title,
    tagline: pillar.card,
    accent: ogAccent[pillar.slug] ?? "#34d399",
    badge: "Services",
  });
}
