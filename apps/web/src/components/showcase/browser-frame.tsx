import type { ReactNode } from 'react';

/**
 * A lightweight, purely-decorative browser chrome (title bar + traffic lights +
 * a URL pill) to wrap a storefront screenshot or the theming-morph clip, so it
 * reads as "a real shop in a real browser." Static CSS, no JS.
 */
export function BrowserFrame({
  url = 'your-brand.com',
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 shadow-2xl ${className ?? ''}`}
    >
      <div
        className="flex items-center gap-2 border-b border-white/10 bg-slate-800/70 px-4 py-2.5"
        aria-hidden="true"
      >
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md bg-slate-950/50 px-3 py-1 text-center text-xs text-slate-400">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
