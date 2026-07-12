import { gameOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Such Software — four things, done well";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return gameOgImage({
    title: "Four things, done well",
    tagline: "Commerce & web, games & apps, crypto & payments, and PhD-led science education.",
    accent: "#34d399",
    badge: "Services",
  });
}
