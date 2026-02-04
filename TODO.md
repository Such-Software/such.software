# Such Software - TODO

## Before Production

- [x] **Turnstile keys** - Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in production environment

## Nice to Have

- [ ] **Blog** - Consider adding blog/articles section (MDX, Contentlayer, or headless CMS)
- [ ] **Rate limiting** - Turnstile handles bots; add rate limiting only if abuse observed
- [ ] Manual screen reader testing (NVDA, VoiceOver)
- [ ] Further canvas performance optimization

## Future Projects

- [ ] Puzzle game (mobile app with web demo)
- [ ] Decision making app (mobile app with web demo)

---

## Architecture Notes (Feb 2026)

### Blog Options

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| **MDX in repo** | Simple, version controlled, no deps | Dev-only editing, rebuild to publish | Tech blog, infrequent posts |
| **Contentlayer** | Type-safe MDX, great DX with Next.js | Learning curve, config overhead | Structured content, many posts |
| **Headless CMS** (Sanity/Payload) | Non-dev editing, media management | External dependency, cost at scale | Team editing, media-heavy |

Recommendation: Start with MDX in `apps/web/src/content/blog/`, add Contentlayer if it grows.

### New App Architecture

**Option A: Monorepo (web demos)**
```
apps/
  web/              # such.software
  puzzle-demo/      # Vite or Next.js
  decision-demo/    # Vite or Next.js
packages/
  ui/               # Shared (already exists)
```
- ✅ Share `@repo/ui`, unified CI/CD, easy cross-linking
- ❌ Coupled deploys, heavier repo

**Option B: Separate repos + subdomains**
- `puzzle.such.software` → own repo
- `decide.such.software` → own repo
- ✅ Independent deploys, clean separation
- ❌ No shared packages, more repos to manage

**Option C: Hybrid (recommended)**
- Web demos in this monorepo (lightweight, share UI)
- Mobile apps in separate repos (React Native/Expo needs own tooling)
- Link from such.software portfolio to demos

### Mobile Considerations
- React Native/Expo likely needs separate repo due to tooling differences
- Web demos can use same game logic via shared `packages/` if extracted
- Consider Expo Web for code sharing between mobile and web demo

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
