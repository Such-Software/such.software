import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { SuchMoonLaunchStoreButtons } from "@/components/store-buttons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Such Moon Launch — Global Leaderboard | Such Software",
  description:
    "Live global rankings for Such Moon Launch: fastest landings, biggest Moonrock hauls, and Endless Mode wave records across all 12 levels.",
  alternates: { canonical: "/products/such-moon-launch/leaderboard" },
  openGraph: {
    title: "Such Moon Launch — Global Leaderboard",
    description:
      "Live global rankings: fastest landings, biggest Moonrock hauls, and Endless Mode wave records.",
    type: "website",
    images: ["/images/og/such-moon-launch.png"],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/such-moon-launch.png"] },
};

const API_BASE =
  process.env.NEXT_PUBLIC_MOONLAUNCH_API ?? "https://api.such.software/v1/moonlaunch";

// index 0..11 maps to level 1..12 (level 12 = Endless Mode, wave board)
const LEVELS = [
  "Moon", "Mars", "Venus", "Io", "Jupiter", "Saturn",
  "Neptune", "Pluto", "Asteroid Belt", "Space Station", "Mothership", "Endless",
];

type Score = {
  nickname: string;
  completion_time: number;
  fuel_remaining: number;
  crypto_collected: number;
  stars: number;
  wave: number;
  platform: string | null;
  rank: number;
};

// null = request failed (vs [] = no scores yet)
async function fetchBoard(level: number, board: string): Promise<Score[] | null> {
  try {
    const res = await fetch(
      `${API_BASE}/scores?level=${level}&board=${board}&limit=50`,
      { next: { revalidate: 60 } }, // cache the board for a minute
    );
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data?.scores) ? data.scores : [];
  } catch {
    return null;
  }
}

function fmtTime(s: number): string {
  if (s >= 60) {
    const m = Math.floor(s / 60);
    const sec = (s % 60).toFixed(1).padStart(4, "0");
    return `${m}:${sec}`;
  }
  return `${s.toFixed(1)}s`;
}

function rankCell(rank: number): string {
  return rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : String(rank);
}

export default async function LeaderboardPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string; board?: string }>;
}) {
  const sp = await searchParams;

  let level = parseInt(sp.level ?? "1", 10);
  if (!Number.isFinite(level) || level < 1 || level > 12) level = 1;
  const isEndless = level === 12;

  let board = sp.board ?? (isEndless ? "wave" : "time");
  if (isEndless) board = "wave";
  else if (board !== "time" && board !== "score") board = "time";

  const scores = await fetchBoard(level, board);
  const levelName = level === 12 ? "Endless Mode" : LEVELS[level - 1];
  const metricLabel = board === "time" ? "Time" : board === "score" ? "Moonrocks" : "Wave";
  const base = "/products/such-moon-launch/leaderboard";

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Such Moon Launch", path: "/products/such-moon-launch" },
          { name: "Leaderboard", path: base },
        ])}
      />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link
          href="/products/such-moon-launch"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Such Moon Launch
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-600 dark:text-amber-400">
          🏆 Leaderboard
        </h1>
        <p className="text-base text-muted-foreground mb-6">
          Live global rankings — <span className="text-foreground font-medium">{levelName}</span>. Updates every minute.
        </p>

        {/* Level selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {LEVELS.map((name, i) => {
            const lv = i + 1;
            const active = lv === level;
            return (
              <Link
                key={name}
                href={`${base}?level=${lv}`}
                className={`px-2.5 py-1.5 rounded-md text-sm border transition-colors ${
                  active
                    ? "bg-amber-500 text-black border-amber-500 font-semibold"
                    : "border-amber-500/30 text-muted-foreground hover:text-foreground hover:border-amber-500/60"
                }`}
              >
                <span className="opacity-60 mr-1">{lv}</span>
                {name}
              </Link>
            );
          })}
        </div>

        {/* Board selector (story levels only) */}
        {!isEndless && (
          <div className="flex flex-wrap gap-2 mb-6">
            {([["time", "⏱ Fastest"], ["score", "💰 Most Moonrocks"]] as const).map(([key, label]) => {
              const active = key === board;
              return (
                <Link
                  key={key}
                  href={`${base}?level=${level}&board=${key}`}
                  className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                    active
                      ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/60 font-semibold"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Board */}
        {scores === null ? (
          <Card className="glass-card border-amber-500/20 p-8 text-center text-muted-foreground">
            Leaderboard is temporarily unavailable. Please try again shortly.
          </Card>
        ) : scores.length === 0 ? (
          <Card className="glass-card border-amber-500/20 p-8 text-center text-muted-foreground">
            No scores yet for {levelName}. Be the first —{" "}
            <a href="https://moonlaunch.such.software" className="text-amber-600 dark:text-amber-400 hover:underline">
              play on web
            </a>
            !
          </Card>
        ) : (
          <Card className="glass-card border-amber-500/20 overflow-hidden !p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-500/20 text-muted-foreground">
                    <th className="px-3 py-3 w-12 text-center font-medium">#</th>
                    <th className="px-3 py-3 text-left font-medium">Pilot</th>
                    <th className="px-3 py-3 text-right font-medium">{metricLabel}</th>
                    {board === "wave" ? (
                      <th className="px-3 py-3 text-right font-medium hidden sm:table-cell">Moonrocks</th>
                    ) : (
                      <th className="px-3 py-3 text-right font-medium hidden sm:table-cell">Fuel</th>
                    )}
                    <th className="px-3 py-3 text-center font-medium hidden sm:table-cell">Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((s, i) => (
                    <tr key={`${s.rank}-${s.nickname}-${i}`} className="border-b border-border/40 last:border-0">
                      <td className="px-3 py-2.5 text-center tabular-nums">{rankCell(s.rank)}</td>
                      <td className="px-3 py-2.5 font-medium truncate max-w-[9rem] sm:max-w-[16rem]">{s.nickname}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums font-semibold text-amber-600 dark:text-amber-400">
                        {board === "time"
                          ? fmtTime(s.completion_time)
                          : board === "score"
                            ? s.crypto_collected.toLocaleString()
                            : s.wave}
                      </td>
                      {board === "wave" ? (
                        <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground hidden sm:table-cell">
                          {s.crypto_collected.toLocaleString()}
                        </td>
                      ) : (
                        <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground hidden sm:table-cell">
                          {Math.round(s.fuel_remaining)}%
                        </td>
                      )}
                      <td className="px-3 py-2.5 text-center text-amber-500 hidden sm:table-cell">
                        {"★".repeat(Math.max(0, Math.min(3, s.stars)))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          Each pilot&apos;s best run per level.{" "}
          {board === "time"
            ? "Ranked by fastest completion time."
            : board === "score"
              ? "Ranked by most Moonrocks collected."
              : "Ranked by highest wave survived."}
        </p>

        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold mb-3">Climb the ranks</h2>
          <SuchMoonLaunchStoreButtons />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link href="/products/such-moon-launch" className="hover:text-foreground transition-colors">
            About the game
          </Link>
          <span>•</span>
          <a href="https://moonlaunch.such.software" className="hover:text-foreground transition-colors">
            Play on web
          </a>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
