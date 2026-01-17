# Such Software - TODO

## Before Production

- [ ] **Turnstile keys** - Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in production environment
- [ ] **Rate limiting** - Consider adding rate limiting to contact form (Upstash, Vercel Edge Config, etc.)

## Nice to Have

- [ ] Manual screen reader testing (NVDA, VoiceOver)
- [ ] Further canvas performance optimization

## Completed

### Lighthouse Scores (January 2026)

| Page | Performance | Accessibility | SEO | Best Practices |
|------|-------------|---------------|-----|----------------|
| Home | 99% | 100% | 100% | 77%* |
| Services | 98% | 100% | 100% | 100% |
| About | 99% | 100% | 100% | 100% |

*Home 77% Best Practices due to Cloudflare Turnstile third-party cookies.

### Accessibility & Compliance
- [x] WCAG 2.2 AA compliance (100% Lighthouse)
- [x] Section 508 & ADA compliance
- [x] Semantic HTML5 architecture
- [x] Playwright a11y automation (42 tests, chromium/firefox/webkit)
- [x] Color contrast fixes (emerald-600 → emerald-700)
- [x] Heading hierarchy (h1 → h2 → h3 → h4)
- [x] `prefers-reduced-motion` support in NebulaField
- [x] Skip-to-main link, ARIA labels, form accessibility

### SEO
- [x] Meta descriptions and OpenGraph on all pages
- [x] Structured data (JSON-LD Organization schema)
- [x] Canonical URLs on all pages

### Performance
- [x] Lazy loaded NebulaField with `next/dynamic` + `requestIdleCallback`
- [x] Removed debug console.log statements

### Infrastructure
- [x] Cloudflare Turnstile bot protection
- [x] `.env.example` template
- [x] `pnpm start` script
