# Accessibility & Performance Audit

## Lighthouse Scores (Dev Server)

| Category | Score | Target |
|----------|-------|--------|
| Performance | 51 | 100 |
| Accessibility | 95 | 100 |
| SEO | 91 | 100 |
| Best Practices | 73 | 100 |

**Note:** Dev server scores are typically lower than production. Run `pnpm build && pnpm start` for accurate production scores.

## Critical Issues (Score: 0%)

### Accessibility
- [ ] **Color contrast** - Background and foreground colors do not have sufficient contrast ratio
- [ ] **Heading order** - Heading elements are not in sequentially-descending order

### Performance
- [ ] **Time to Interactive** - Too slow
- [ ] **Max Potential First Input Delay** - Too high
- [ ] **Total Blocking Time** - 9% (needs major improvement)
- [ ] **Largest Contentful Paint** - 12% (needs major improvement)
- [ ] **Minimize main-thread work** - Too much JS execution
- [ ] **Reduce JavaScript execution time** - Too slow

### SEO
- [ ] **Meta description** - Document does not have a meta description (may be dev-only issue)

### Best Practices
- [ ] **Browser console errors** - Errors logged to console
- [ ] **Third-party cookies** - Uses third-party cookies
- [ ] **Missing source maps** - For large first-party JavaScript
- [ ] **Unminified JavaScript** - (dev server issue)

## Claims Made on Site (founder-signature.tsx)
- WCAG 2.2 AA Compliance
- Section 508 & ADA
- Semantic HTML5 Architecture
- Playwright A11y Automation

## Current Status

### WCAG 2.2 AA Compliance - 95% but needs fixes

**What's working:**
- Skip-to-main link in header.tsx
- Proper `aria-label` on nav element
- Form fields have proper `<label>` elements with `htmlFor`
- `aria-describedby` and `aria-invalid` on form inputs
- `role="alert"` on error messages
- `role="status"` and `aria-live="polite"` on success/error notifications
- `sr-only` classes for screen reader text
- `lang="en"` on `<html>` element

**Gaps to address:**
- [ ] **Color contrast issues** - Fix low contrast text
- [ ] **Heading order** - Fix heading hierarchy (likely h2 before h1 somewhere, or skipping levels)
- [ ] Theme toggle button missing `aria-label` describing current state
- [ ] Verify focus indicators are visible in both themes (2.4.7 Focus Visible)

### Semantic HTML5 Architecture - Good but heading order issue

- Uses semantic `<main>`, `<header>`, `<nav>`, `<footer>` elements
- `<address>` element used correctly on About page
- Form has proper `<label>` elements
- **Issue:** Heading hierarchy has gaps or wrong order

### Section 508 & ADA - Partial

Section 508 aligns with WCAG 2.0 AA. Needs:
- [ ] Fix color contrast issues
- [ ] Fix heading order
- [ ] Screen reader testing
- [ ] Keyboard-only navigation testing

### Playwright A11y Automation - NOT SET UP

There is **no Playwright configuration** in this project. No test files exist.

**To implement:**
```bash
pnpm add -D @playwright/test @axe-core/playwright
npx playwright install
```

### Core Web Vitals / Performance - FAILING

The NebulaField canvas animation is likely the main culprit for:
- High Total Blocking Time
- Slow Largest Contentful Paint
- High main-thread work

**Recommendations:**
- [ ] Lazy load NebulaField (only render after initial paint)
- [ ] Reduce animation complexity or frame rate
- [ ] Consider CSS-only alternative for initial load
- [ ] Use `will-change` and GPU acceleration properly

### SEO - 91% (minor issues)

- Proper `<title>` and `description` meta tags per page
- OpenGraph metadata configured
- Semantic HTML structure
- **Issue:** Meta description not detected (check if it's rendering correctly)

## Priority Tasks

### P0 - Critical (before claiming compliance)
1. [ ] Fix color contrast issues
2. [ ] Fix heading order (find and fix h-level skips)
3. [ ] Add `aria-label` to ThemeToggle button

### P1 - High (for performance claims)
4. [ ] Lazy load NebulaField background
5. [ ] Fix console errors
6. [ ] Run production build and re-test Lighthouse

### P2 - Medium (for full compliance)
7. [ ] Set up Playwright with axe-core
8. [ ] Manual screen reader testing
9. [ ] Keyboard navigation testing

### P3 - Low (polish)
10. [ ] Optimize NebulaField animation performance
11. [ ] Add preloading for critical assets
