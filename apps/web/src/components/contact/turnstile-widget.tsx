'use client';
import { Turnstile } from '@marsidev/react-turnstile';
import { useState, useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({ onVerify }: { onVerify: (token: string) => void }) {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  // Lazy-load gate: Turnstile pulls ~450KB of challenge scripts the moment it
  // mounts. On the homepage the form sits far below the fold, and on a slow
  // mobile connection that download competes with the critical path during
  // load (it was the biggest single drag on the mobile PageSpeed score). So
  // the widget only mounts once its container is within ~800px of the
  // viewport; the placeholder below reserves the layout. On /contact, where
  // the form is at the top, the observer fires immediately.
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (near) return;
    const el = placeholderRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '800px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  if (!SITE_KEY) {
    console.warn('NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set');
    return null;
  }

  // Only render on client after mount (hydration) AND once the form is near
  // the viewport (see above).
  if (!mounted || !near) {
    return <div ref={placeholderRef} className="h-[65px] w-[300px]" />;
  }

  if (error) {
    return (
      <div className="text-xs text-muted-foreground">
        Security check unavailable
      </div>
    );
  }

  return (
    <Turnstile
      siteKey={SITE_KEY}
      onSuccess={onVerify}
      onError={() => setError(true)}
      onExpire={() => onVerify('')}
      options={{ theme: 'auto' }}
    />
  );
}