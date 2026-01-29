'use client';
import { Turnstile } from '@marsidev/react-turnstile';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({ onVerify }: { onVerify: (token: string) => void }) {
  if (!SITE_KEY) {
    console.warn('NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set');
    return null;
  }

  return (
    <Turnstile
      siteKey={SITE_KEY}
      onSuccess={onVerify}
      options={{ theme: 'auto' }}
    />
  );
}