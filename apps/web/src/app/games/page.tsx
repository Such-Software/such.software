import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { StoreButtons } from "@/components/store-buttons";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const title = "Free Online Games: Puzzle, Word & Arcade | Such Software";
const description =
  "Play free puzzle and arcade games online in your browser, with nothing to install: Bauhaus Echo, Such Moon Launch, and Wownerogue. Vegan IQ trivia and Bloomword's daily word game are on iOS and Android.";

export const metadata: Metadata = {
  ...pageMetadata({
    title,
    description,
    path: "/games",
    socialTitle: "Free online games from Such Software",
    socialDescription: "Puzzle and arcade games you can play right now in your browser.",
  }),
};

type Game = {
  name: string;
  genre: string;
  pitch: string;
  icon: string;
  page: string;
  /** Playable in the browser; `null` when the game is mobile only for now. */
  play: string | null;
  site?: string;
  stores?: { platform: "apple" | "google"; href: string }[];
  border: string;
  color: string;
};

const games: Game[] = [
  {
    name: "Bauhaus Echo",
    genre: "Memory puzzle",
    pitch:
      "Study a grid of bold Bauhaus tiles, watch them scatter, then rebuild the picture. Five modes, from quick rounds to a calm Zen sandbox.",
    icon: "/images/products/bauhaus-echo.png",
    page: "/products/bauhaus-echo",
    play: "https://play.bauhausecho.com",
    site: "https://bauhausecho.com",
    stores: [
      { platform: "apple", href: "https://apps.apple.com/us/app/bauhaus-echo/id6759010657" },
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" },
    ],
    border: "border-blue-500/20",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Vegan IQ",
    genre: "Trivia quiz",
    pitch:
      "Over 1,000 sourced questions on food, nutrition, and the planet. Swipe true or false, keep a daily streak, and see how much you really know.",
    icon: "/images/products/vegan-iq.png",
    page: "/products/vegan-iq",
    play: null,
    site: "https://veganiq.site",
    stores: [
      { platform: "apple", href: "https://apps.apple.com/us/app/vegan-iq-plant-based-trivia/id6761139580" },
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.veganiq.vegan_iq" },
    ],
    border: "border-green-500/20",
    color: "text-green-600 dark:text-green-400",
  },
  {
    name: "Such Moon Launch",
    genre: "Arcade",
    pitch:
      "Fly a pixel rocket across the solar system, dodge Martians and asteroids, and stick the landing. Eleven levels and an endless mode.",
    icon: "/images/products/such-moon-launch.png",
    page: "/products/such-moon-launch",
    play: "https://moonlaunch.space/play/",
    site: "https://moonlaunch.space",
    stores: [
      { platform: "apple", href: "https://apps.apple.com/us/app/such-moon-launch/id6767909623" },
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchmoonlaunch" },
    ],
    border: "border-amber-500/20",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    name: "Wownerogue",
    genre: "Roguelike",
    pitch:
      "A multiplayer dungeon crawl where every round ends on a new block. Free to play in your browser.",
    icon: "/images/products/privacy-labs.png",
    page: "/products/wownerogue",
    play: "https://play.wowne.ro",
    border: "border-orange-500/20",
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    name: "Bloomword",
    genre: "Word game",
    pitch:
      "One shared word puzzle a day. Every word you find grows a living 3D tree you can share.",
    icon: "/images/products/bloomword.png",
    page: "/products/bloomword",
    play: null,
    site: "https://bloomword.earth",
    stores: [
      { platform: "apple", href: "https://apps.apple.com/us/app/bloomword-grow-your-vocab/id6781658542" },
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bloomword" },
    ],
    border: "border-green-500/20",
    color: "text-green-600 dark:text-green-400",
  },
];

const faqs = [
  {
    q: "Are these games free?",
    a: "Yes. All of them are free to play, in the browser or on iOS and Android. Some offer optional extras inside the game.",
  },
  {
    q: "Do I need to download anything to play online?",
    a: "No. Bauhaus Echo, Such Moon Launch and Wownerogue run in a modern web browser on a computer, tablet or phone, with no install and no account needed to start.",
  },
  {
    q: "Which game is a puzzle game?",
    a: "Bauhaus Echo is a visual memory puzzle: you memorize a grid of tiles, watch it shuffle, and put the picture back together. Bloomword is a daily word puzzle on iOS and Android.",
  },
  {
    q: "Who makes these games?",
    a: "Such Software, an independent studio in Kennett Square, Pennsylvania.",
  },
];

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free online games",
  itemListElement: games.map((game, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoGame",
      name: game.name,
      genre: game.genre,
      url: `https://such.software${game.page}`,
      gamePlatform: [
        ...(game.play ? ["Web browser"] : []),
        ...(game.stores ? ["iOS", "Android"] : []),
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: game.play ?? `https://such.software${game.page}`,
      },
    },
  })),
};

export default function GamesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Free Online Games", path: "/games" },
      ])} />
      <JsonLd data={itemListLd} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Online Games</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          Puzzle and arcade games you can play online right now. They run in your browser,
          cost nothing to play, and need no download. Prefer your phone? Most of them are on
          iOS and Android too, along with our trivia and word games.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {games.map((game) => (
            <section key={game.name} className={`rounded-xl border ${game.border} bg-card p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={game.icon}
                  alt={`${game.name} icon`}
                  width={64}
                  height={64}
                  className="rounded-[22%] shrink-0"
                />
                <div>
                  <h2 className={`text-2xl font-bold ${game.color}`}>
                    <Link href={game.page} className="hover:underline">{game.name}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">{game.genre}</p>
                  <p className="text-muted-foreground">{game.pitch}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {game.play ? (
                  <a
                    href={game.play}
                    className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                    data-umami-event="play_online"
                    data-umami-event-game={game.name}
                  >
                    Play {game.name} online
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Browser version coming soon</span>
                )}
                {game.stores ? <StoreButtons links={game.stores} /> : null}
              </div>
              {game.site ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  More at{" "}
                  <a href={game.site} className="underline hover:text-foreground">
                    {game.site.replace("https://", "")}
                  </a>
                </p>
              ) : null}
            </section>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Questions</h2>
        <dl className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold">{item.q}</dt>
              <dd className="text-muted-foreground mt-1">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <MobileNav />
    </main>
  );
}
