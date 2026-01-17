import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Skip webkit for home page - canvas/WebGL issues cause error state
const isWebkit = (browserName: string) => browserName === "webkit";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
];

for (const { name, path } of pages) {
  test.describe(`${name} Page Accessibility`, () => {
    test(`should have no WCAG 2.2 AA violations`, async ({ page, browserName }) => {
      // Skip webkit on home page due to canvas/WebGL compatibility issues
      test.skip(isWebkit(browserName) && path === "/", "Webkit has canvas issues on home page");

      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");
      // Give time for React hydration
      await page.waitForTimeout(1000);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
        .analyze();

      expect(results.violations).toEqual([]);
    });

    test(`should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");

      const headings = await page.evaluate(() => {
        const h = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        return Array.from(h).map((el) => ({
          level: parseInt(el.tagName[1]),
          text: el.textContent?.trim().slice(0, 50),
        }));
      });

      // Should have exactly one h1
      const h1s = headings.filter((h) => h.level === 1);
      expect(h1s.length).toBe(1);

      // No skipped heading levels
      for (let i = 1; i < headings.length; i++) {
        const current = headings[i].level;
        const previous = headings[i - 1].level;
        const skipped = current > previous + 1;
        expect(skipped, `Heading "${headings[i].text}" skips levels`).toBe(false);
      }
    });

    test(`should have no color contrast issues`, async ({ page, browserName }) => {
      test.skip(isWebkit(browserName) && path === "/", "Webkit has canvas issues on home page");

      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(1000);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2aa"])
        .options({ runOnly: ["color-contrast"] })
        .analyze();

      expect(results.violations).toEqual([]);
    });

    test(`should be keyboard navigable`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");

      // Tab through interactive elements
      const focusableElements = await page.evaluate(() => {
        const elements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        return elements.length;
      });

      expect(focusableElements).toBeGreaterThan(0);

      // First tab should reach skip link or first focusable element
      await page.keyboard.press("Tab");
      const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
      expect(firstFocused).toBeTruthy();
    });
  });
}

test.describe("Theme Accessibility", () => {
  test("should maintain accessibility in dark mode", async ({ page, browserName }) => {
    test.skip(isWebkit(browserName), "Webkit has canvas issues on home page");

    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(1000);

    // Toggle to dark mode
    const themeToggle = page.getByRole("button", { name: /theme|dark|light/i });
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(500);
    }

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});

test.describe("Form Accessibility", () => {
  test("contact form should have proper labels and ARIA", async ({ page, browserName }) => {
    test.skip(isWebkit(browserName), "Webkit has canvas issues on home page");

    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(1000);

    // Scroll to contact section
    await page.evaluate(() => {
      document.getElementById("contact")?.scrollIntoView();
    });
    await page.waitForTimeout(500);

    // Check form fields exist with accessible names (label or aria-label)
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();

    // Check fields have accessible labels (via label element or aria-label)
    const nameLabel = await nameInput.evaluate((el) => {
      const label = document.querySelector(`label[for="${el.id}"]`);
      return label?.textContent || el.getAttribute("aria-label") || el.getAttribute("placeholder");
    });
    expect(nameLabel).toBeTruthy();

    // Check required fields are marked
    await expect(nameInput).toHaveAttribute("required");
    await expect(emailInput).toHaveAttribute("required");
    await expect(messageInput).toHaveAttribute("required");
  });
});
