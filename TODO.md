# Such Software - Production Checklist

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

### 2. Extract Shared Header Component

The header is duplicated across three pages:
- `apps/web/src/app/page.tsx`
- `apps/web/src/app/services/page.tsx`
- `apps/web/src/app/about/page.tsx`

Create a shared component at `apps/web/src/components/layout/header.tsx`.

### 3. Add `prefers-reduced-motion` Support

The NebulaField and DynamicBackground components run animations without checking user preferences.

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

### 4. Add Skip-to-Content Link

For keyboard accessibility, add a skip link in `apps/web/src/app/layout.tsx`:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg">
  Skip to main content
</a>
```

### 5. Add `aria-hidden` to Decorative Icons

In `apps/web/src/app/about/page.tsx`, add `aria-hidden="true"` to decorative icons:
```tsx
<FaMapMarkerAlt aria-hidden="true" />
<FaPhone aria-hidden="true" />
<FaBuilding aria-hidden="true" />
```

### 6. Type Server Action Properly

In `apps/web/src/actions/submit-contact.ts`, the `prevState` parameter uses `any`. Update to:
```tsx
export async function submitContactForm(
  prevState: { success: boolean; message: string; errors?: Record<string, string> },
  formData: FormData
): Promise<{ success: boolean; message: string; errors?: Record<string, string> }>
```

### 7. Rate Limiting

Consider adding rate limiting to the contact form submission to prevent abuse.
Options: Upstash Ratelimit, Vercel Edge Config, or Cloudflare Workers.

---

## 🟢 Nice-to-Have

### 8. Add Structured Data (JSON-LD)

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

### 9. Add Canonical URLs

Add canonical meta tags to prevent duplicate content issues.

### 10. Remove Console Logs

Remove `console.log` statements before production:
- `apps/web/src/components/contact/turnstile-widget.tsx`

---

## ✅ Recently Completed

- [x] Deleted sync conflict files
- [x] Fixed homepage `<h1>` heading hierarchy
- [x] Added page metadata to services and about pages
- [x] Fixed `outline-none` accessibility issue on form inputs
- [x] Established semantic CSS architecture (`.section-container`, `.glass-card`)
