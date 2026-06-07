'use client';

import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-40 h-11 lg:w-48 lg:h-12">
        {/* Dark mode logo (white text). No `priority`: the header wordmark is small,
            not the LCP, and hidden during the splash; preloading both theme variants
            just stole slow-4G bandwidth from the real critical path. */}
        <Image
          src="/images/branding/clean_dark_w_text.svg"
          alt="Such Software"
          fill
          className="object-contain hidden dark:block"
        />
        {/* Light mode logo (black text) */}
        <Image
          src="/images/branding/clean_light_w_text.svg"
          alt="Such Software"
          fill
          className="object-contain block dark:hidden"
        />
      </div>
    </Link>
  );
}
