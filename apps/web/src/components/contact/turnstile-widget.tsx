'use client';
import { Turnstile } from '@marsidev/react-turnstile';
import { useState, useEffect } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({ onVerify }: { onVerify: (token: string) => void }) {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!SITE_KEY) {
    console.warn('NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set');
    return null;
  }

  // Only render on client after mount to avoid hydration issues
  if (!mounted) {
    return <div className="h-[65px] w-[300px]" />;
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