import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { StoreButtons } from "@/components/store-buttons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps | Such Software",
  description: "Download our apps on App Store and Google Play.",
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Such Software Apps",
    description: "Download our apps on App Store and Google Play.",
    type: "website",
    images: [{ url: "/images/branding/OG_banner_v2_light.png", width: 1200, height: 630, alt: "Such Software" }],
  },
};

const apps = [
  {
    name: "Vegan IQ",
    tagline: "Plant-based trivia backed by real data",
    icon: "/images/products/vegan-iq.png",
    color: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/20",
    href: "/products/vegan-iq",
    links: [
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.veganiq.vegan_iq" },
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/vegan-iq-plant-based-trivia/id6761139580" },
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
      { platform: "google" as const, href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchoice" },
      { platform: "apple" as const, href: "https://apps.apple.com/us/app/suchoice/id6759626658" },
    ],
  },
];

export default function LinksPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-lg mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-3xl font-bold mb-2 text-center">Such Software</h1>
        <p className="text-muted-foreground text-center mb-10">Our apps</p>

        <div className="space-y-8">
          {apps.map((app) => (
            <div key={app.name} className={`rounded-xl border ${app.borderColor} bg-card p-6`}>
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
