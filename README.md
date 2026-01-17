# Such Software Website

Corporate website for Such Software LLC, a full-service software provider based in Kennett Square, PA.

## Lighthouse Scores

| Page | Performance | Accessibility | SEO | Best Practices |
|------|-------------|---------------|-----|----------------|
| Home | 99% | **100%** | **100%** | 77%* |
| Services | 98% | **100%** | **100%** | **100%** |
| About | 99% | **100%** | **100%** | **100%** |

*Home page Best Practices is 77% due to Cloudflare Turnstile third-party cookies.

## Tech Stack

- **Next.js 15** with App Router
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3** + **Framer Motion 11**
- **Radix UI** accessible primitives
- **next-themes** for dark/light mode
- **Zod** for validation
- **Cloudflare Turnstile** for bot protection
- **Turborepo** + **pnpm 9**

## Project Structure

```
such-software-site/
├── apps/web/               # Next.js website
│   ├── src/app/            # Pages (home, services, about)
│   ├── src/components/     # React components
│   ├── tests/              # Playwright a11y tests
│   └── public/             # Static assets
├── packages/ui/            # Shared UI components
└── packages/config/        # Shared config
```

## Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm start      # Start production server
```

## Testing

```bash
cd apps/web
pnpm test:a11y  # Run Playwright accessibility tests
pnpm test:ui    # Run tests with interactive UI
```

42 accessibility tests across Chromium, Firefox, and WebKit covering WCAG 2.2 AA compliance, heading hierarchy, color contrast, and keyboard navigation.

## Accessibility

- **WCAG 2.2 AA** compliant (100% Lighthouse)
- Skip-to-main link, semantic HTML5, ARIA labels
- Proper heading hierarchy, color contrast (4.5:1+)
- `prefers-reduced-motion` support
- Keyboard navigation, focus indicators
- Structured data (JSON-LD) and canonical URLs

## Environment Variables

Create `apps/web/.env.local`:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

See `apps/web/.env.example` for template.

## License

Proprietary - Such Software LLC
