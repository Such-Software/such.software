import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Build-time Open Graph card for a (pre-release) game product page.
 * Themed by accent color, on the Cherenkov-dark studio background.
 */
export function gameOgImage({
  title,
  tagline,
  accent,
  badge = "In Development",
}: {
  title: string;
  tagline: string;
  accent: string;
  badge?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a1622",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#94a3b8" }}>
            SUCH SOFTWARE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              color: accent,
              border: `2px solid ${accent}`,
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            {badge.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, color: accent, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1", marginTop: 28, maxWidth: 1000 }}>
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#64748b" }}>such.software</div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
