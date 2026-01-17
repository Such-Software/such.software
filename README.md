# Such Software Website

Corporate website for Such Software LLC, a full-service software provider based in Kennett Square, PA.

## Lighthouse Scores (Production Build)

| Page | Performance | Accessibility | SEO | Best Practices |
|------|-------------|---------------|-----|----------------|
| Home | 99% | **100%** | **100%** | 77%* |
| Services | 98% | **100%** | **100%** | **100%** |
| About | 99% | **100%** | **100%** | **100%** |

*Home page Best Practices is 77% due to Cloudflare Turnstile third-party cookies for bot protection.

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety

### Styling & Animation
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 11** - Animations and transitions
- **tailwind-merge** - Conditional class merging
- **class-variance-authority** - Component variants

### UI Components
- **Radix UI** - Accessible primitives
- **Lucide React** - Icon library
- **react-icons** - Additional icons (FontAwesome, etc.)

### Theming
- **next-themes 0.4** - Dark/light mode with system preference detection

### Forms & Validation
- **Zod** - Schema validation
- **Cloudflare Turnstile** - Bot protection via `@marsidev/react-turnstile`

### Build & Dev Tools
- **Turborepo** - Monorepo build system
- **pnpm 9** - Package manager
- **ESLint** - Linting
- **Prettier** - Code formatting

## Project Structure

```
such-software-site/
├── apps/
│   └── web/                    # Next.js website
│       ├── src/
│       │   ├── app/            # App Router pages
│       │   │   ├── page.tsx    # Homepage
│       │   │   ├── services/   # Services page
│       │   │   ├── about/      # About page
│       │   │   └── layout.tsx  # Root layout
│       │   ├── components/
│       │   │   ├── about/      # About page components
│       │   │   ├── contact/    # Contact form
│       │   │   ├── landing/    # Homepage components
│       │   │   ├── layout/     # Header, Footer, etc.
│       │   │   └── portfolio/  # Portfolio grid
│       │   ├── actions/        # Server actions
│       │   └── lib/            # Utilities
│       └── public/             # Static assets
├── packages/
│   ├── ui/                     # Shared UI components
│   │   └── src/
│   │       ├── components/     # Button, Card, etc.
│   │       ├── procedural/     # Canvas animations (NebulaField, DataGrid)
│   │       └── lib/            # Utilities (cn)
│   └── config/                 # Shared TypeScript/ESLint config
├── turbo.json                  # Turborepo config
├── pnpm-workspace.yaml         # pnpm workspace config
└── package.json                # Root package.json
```

## Development

### Prerequisites
- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The dev server runs at `http://localhost:3000`.

## Accessibility & Quality

### WCAG 2.2 AA Compliance

This site achieves **100% Lighthouse Accessibility** on all pages through:

- Skip-to-main-content link
- Semantic HTML5 structure (`<main>`, `<nav>`, `<header>`, `<footer>`, `<address>`)
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- ARIA labels on interactive elements
- Form fields with proper labels and error handling
- Color contrast ratios meeting 4.5:1 minimum
- Keyboard navigation support
- Dark/light mode with system preference
- Reduced motion support in theme transitions

See [TODO_ACCESS.md](TODO_ACCESS.md) for detailed audit results.

### Testing

```bash
# Run Lighthouse audit (requires production build)
pnpm build && pnpm start

# In another terminal:
npx lighthouse http://localhost:3000 --view
```

## Environment Variables

Create `.env.local` in `apps/web/`:

```env
# Cloudflare Turnstile (for contact form)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key

# Contact form email (optional)
CONTACT_EMAIL=your@email.com
```

See `.env.example` for a template.

## Deployment

Built for deployment on Vercel or any Node.js hosting platform.

```bash
pnpm build
pnpm start
```

## License

Proprietary - Such Software LLC
