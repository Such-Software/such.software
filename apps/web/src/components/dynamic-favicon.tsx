'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const variant = resolvedTheme === 'dark' ? 'dark' : 'light';

    // Update all favicon link elements
    const links = document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href?.includes('/images/branding/favicon_')) {
        link.href = href.replace(/favicon_(dark|light)/, `favicon_${variant}`);
      }
    });
  }, [resolvedTheme]);

  return null;
}
