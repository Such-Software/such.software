import { gameOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Alpha Doc — an academic-horror roguelike";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return gameOgImage({
    title: "Alpha Doc",
    tagline: "A top-down roguelike where you're the disaster. Master four kinds of radiation.",
    accent: "#fb923c",
  });
}
