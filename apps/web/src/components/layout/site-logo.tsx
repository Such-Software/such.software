'use client';

import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-40 h-11 lg:w-48 lg:h-12">
        {/* Dark mode logo (white text) */}
        <Image
          src="/images/logo_dark_w_name.svg"
          alt="Such Software"
          fill
          className="object-contain hidden dark:block"
          priority
        />
        {/* Light mode logo (black text) */}
        <Image
          src="/images/logo_light_w_name.svg"
          alt="Such Software"
          fill
          className="object-contain block dark:hidden"
          priority
        />
      </div>
    </Link>
  );
}
