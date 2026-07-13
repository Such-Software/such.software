import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StoreButtons } from "@/components/store-buttons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps: Games & Tools for iOS, Android & Web | Such Software",
  description: "Download Such Software's apps and games: Bloomword, Bauhaus Echo, Suchoice, Vegan IQ, Such Moon Launch, and more. Free on the App Store, Google Play, and the web.",
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Apps: Games & Tools for iOS, Android & Web | Such Software",
    description: "Download Such Software's apps and games: Bloomword, Bauhaus Echo, Suchoice, Vegan IQ, Such Moon Launch, and more. Free on the App Store, Google Play, and the web.",
    type: "website",
    images: [{ url: "/images/branding/OG_banner_v2_light.png", width: 1200, height: 630, alt: "Such Software" }],
  },
};

const apps = [
  {
    name: "Bloomword",
    tagline: "Grow your vocab: a daily word game with a living 3D tree",
    icon: "/images/products/bloomword.svg",
    color: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/20",
    href: "/products/bloomword",
    links: [
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/bloomword-grow-your-vocab/id6781658542" },
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bloomword" },
    ],
  },
  {
    name: "Vegan IQ",
    tagline: "Plant-based trivia backed by real data",
    icon: "/images/products/vegan-iq.png",
    color: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/20",
    href: "/products/vegan-iq",
    links: [
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/vegan-iq-plant-based-trivia/id6761139580" },
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.veganiq.vegan_iq" },
    ],
  },
  {
    name: "Bauhaus Echo",
    tagline: "Visual memory puzzle inspired by Bauhaus design",
    icon: "/images/products/bauhaus-echo.png",
    color: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/20",
    href: "/products/bauhaus-echo",
    links: [
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/bauhaus-echo/id6759010657" },
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" },
    ],
  },
  {
    name: "Suchoice",
    tagline: "AI-powered decision making",
    icon: "/images/products/suchoice.png",
    color: "text-pink-600 dark:text-pink-400",
    borderColor: "border-pink-500/20",
    href: "/products/suchoice",
    links: [
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/suchoice/id6759626658" },
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchoice" },
    ],
  },
  {
    name: "Such Moon Launch",
    tagline: "Vry rocket. Much landing. Wow!",
    icon: "/images/products/such-moon-launch.png",
    color: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500/20",
    href: "/products/such-moon-launch",
    links: [
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/such-moon-launch/id6767909623" },
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchmoonlaunch" },
    ],
  },
];

export default function LinksPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-3xl font-bold mb-2 text-center">Such Software</h1>
        <p className="text-muted-foreground text-center mb-10">Our apps</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {apps.map((app, i) => (
            <ScrollReveal key={app.name} delay={(i % 2) * 0.08}>
              <div className={`h-full rounded-xl border ${app.borderColor} bg-card p-6`}>
                <div className="flex items-center gap-4 mb-3">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={56}
                    height={56}
                    className="rounded-xl"
                  />
                  <div>
                    <Link href={app.href}>
                      <h2 className={`text-xl font-bold ${app.color} hover:underline`}>{app.name}</h2>
                    </Link>
                    <p className="text-sm text-muted-foreground">{app.tagline}</p>
                  </div>
                </div>
                <StoreButtons links={app.links} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center mt-12 mb-6 motion-reduce:hidden">
          <img
            src="/images/animations/anim1_pulse_light.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-50 block dark:hidden"
          />
          <img
            src="/images/animations/anim1_pulse.svg"
            alt=""
            aria-hidden="true"
            className="w-20 h-20 opacity-50 hidden dark:block"
          />
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            such.software
          </Link>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
