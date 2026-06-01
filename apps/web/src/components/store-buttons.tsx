'use client';

import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Button } from "@repo/ui/components/button";

type StoreLink = {
  platform: "apple" | "google";
  /** Live store URL, or `null` to render a disabled "Coming Soon" button. */
  href: string | null;
};

type StoreButtonsProps = {
  links: StoreLink[];
  extraLinks?: { href: string; label: string }[];
};

const platformConfig = {
  apple: { icon: FaApple, label: "App Store" },
  google: { icon: FaGooglePlay, label: "Google Play" },
} as const;

export function StoreButtons({ links, extraLinks }: StoreButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 not-prose">
      {links.map(({ platform, href }) => {
        const { icon: Icon, label } = platformConfig[platform];
        if (href === null) {
          return (
            <Button key={platform} variant="outline" size="lg" disabled>
              <Icon className="h-5 w-5 mr-2" aria-hidden="true" />
              {label} — Coming Soon
            </Button>
          );
        }
        return (
          <a key={platform} href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Icon className="h-5 w-5 mr-2" aria-hidden="true" />
              {label}
            </Button>
          </a>
        );
      })}
      {extraLinks?.map(({ href, label }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            {label}
          </Button>
        </a>
      ))}
    </div>
  );
}

// Pre-configured components for use in MDX blog posts
export function VeganIqStoreButtons() {
  return (
    <StoreButtons links={[
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.veganiq.vegan_iq" },
      { platform: "apple", href: "https://apps.apple.com/us/app/vegan-iq-plant-based-trivia/id6761139580" },
    ]} />
  );
}

export function SuchoiceStoreButtons() {
  return (
    <StoreButtons links={[
      { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchoice" },
      { platform: "apple", href: "https://apps.apple.com/us/app/suchoice/id6759626658" },
    ]} />
  );
}

export function SuchMoonLaunchStoreButtons() {
  // Google Play is live; Apple still in review (flip null → real URL once approved).
  return (
    <StoreButtons
      links={[
        { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.suchmoonlaunch" },
        { platform: "apple", href: null },
      ]}
      extraLinks={[
        { href: "https://moonlaunch.such.software", label: "Play on Web" },
      ]}
    />
  );
}

export function WownerogueLinks() {
  // Wownerogue is a browser game, not a store app: link the two live instances + source.
  return (
    <StoreButtons
      links={[]}
      extraLinks={[
        { href: "https://play.wowne.ro", label: "Play Free (Wownero)" },
        { href: "https://monerogue.app", label: "Monero Stagenet" },
        { href: "https://github.com/Such-Software/wownerogue", label: "Source on GitHub" },
      ]}
    />
  );
}

export function BauhausEchoStoreButtons() {
  return (
    <StoreButtons
      links={[
        { platform: "apple", href: "https://apps.apple.com/us/app/bauhaus-echo/id6759010657" },
        { platform: "google", href: "https://play.google.com/store/apps/details?id=com.suchsoftware.bauhausecho" },
      ]}
      extraLinks={[
        { href: "https://bauhaus.such.software", label: "Play on Web" },
        { href: "https://suchsoftware.itch.io/bauhaus-echo", label: "itch.io — $2" },
      ]}
    />
  );
}
