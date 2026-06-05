import { gameOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Barns & Neutrons — a game about the Table of Nuclides";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return gameOgImage({
    title: "Barns & Neutrons",
    tagline: "A cozy, honest expedition across the real Table of Nuclides.",
    accent: "#facc15",
  });
}
