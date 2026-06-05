import { gameOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Decay Theory — Erwin's Atomic Adventure";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return gameOgImage({
    title: "Decay Theory",
    tagline: "Watch the ground dissolve beneath your feet. Atom by atom.",
    accent: "#22d3ee",
  });
}
