'use client';

import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Button } from "@repo/ui/components/button";

type StoreLink = {
  platform: "apple" | "google";
  href: string;
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
