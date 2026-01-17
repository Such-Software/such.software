# Such Software - Production Checklist

## 🟢 Production Ready

### Lighthouse Scores (January 2026)

| Page | Performance | Accessibility | SEO | Best Practices |
|------|-------------|---------------|-----|----------------|
| Home | 99% | 100% | 100% | 77%* |
| Services | 98% | 100% | 100% | 100% |
| About | 99% | 100% | 100% | 100% |

*Best Practices on home page is 77% due to Cloudflare Turnstile third-party cookies for bot protection.

---

## 🔴 Before Production Deployment

### 1. Cloudflare Turnstile Configuration

The contact form uses Cloudflare Turnstile for bot protection. You need to set up the secret key for production:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Turnstile
2. Create a new site or use existing widget
3. Copy the **Site Key** (public) and **Secret Key** (private)
4. Set environment variables:

```bash
# In your production environment (Vercel, etc.)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

⚠️ **Warning:** The current implementation returns `true` if no secret key is set. This is fine for development but must be configured in production.

See: `apps/web/src/lib/turnstile.ts`

---

## 🟡 Medium Priority Improvements

### 2. Set Up Playwright A11y Testing

The site claims "Playwright A11y Automation" but it's not yet implemented.

```bash
pnpm add -D @playwright/test @axe-core/playwright
npx playwright install
```

Create `apps/web/tests/a11y.spec.ts` with axe-core integration.

### 3. Add `prefers-reduced-motion` Support to NebulaField

File: `packages/ui/src/procedural/nebula-field.tsx`

Add:
```tsx
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

if (prefersReducedMotion) {
  return <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800" />;
}
```

### 4. Rate Limiting

Consider adding rate limiting to the contact form submission to prevent abuse.
Options: Upstash Ratelimit, Vercel Edge Config, or Cloudflare Workers.

---

## 🟢 Nice-to-Have

### 5. Add Structured Data (JSON-LD)

Add Organization schema to `layout.tsx` for better SEO:
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Such Software LLC",
  "url": "https://such.software",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "110 E State St, Suite 300",
    "addressLocality": "Kennett Square",
    "addressRegion": "PA",
    "postalCode": "19348",
    "addressCountry": "US"
  }
})}
</script>
```

### 6. Add Canonical URLs

Add canonical meta tags to prevent duplicate content issues.

---

## ✅ Recently Completed

- [x] **100% Accessibility** on all pages (Lighthouse)
- [x] **100% SEO** on all pages (Lighthouse)
- [x] Fixed color contrast (emerald-600 → emerald-700)
- [x] Fixed heading hierarchy across all pages
- [x] Lazy loaded NebulaField with `next/dynamic` and `requestIdleCallback`
- [x] Removed debug console.log statements
- [x] Set up Cloudflare Turnstile for bot protection
- [x] Created .env.example for environment variables
- [x] Fixed `pnpm start` script
- [x] Deleted sync conflict files
- [x] Fixed homepage `<h1>` heading hierarchy
- [x] Added page metadata to services and about pages
- [x] Fixed `outline-none` accessibility issue on form inputs
- [x] Established semantic CSS architecture (`.section-container`, `.glass-card`)
- [x] Extracted shared Header component
