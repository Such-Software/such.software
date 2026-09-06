import fs from "fs";
import path from "path";

/** Where the App Router's pages live, resolved from the package root at build time. */
const APP_DIR = path.join(process.cwd(), "src", "app");

/**
 * Routes that exist as pages but must NOT be advertised, each with the reason. A route is
 * excluded because of something true about it, not because somebody forgot to add it: that is
 * the difference between this list and the hand-kept sitemap it replaces.
 */
const EXCLUDED: Record<string, string> = {
  "/contact":
    "redirects to /#contact, and a sitemap should name the destination, not the door",
};

function walk(dir: string, segments: string[], out: string[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // `[slug]` and `[...rest]` enumerate themselves through generateStaticParams, so their
    // URLs come from the data, not from the tree. `(group)` and `_private` are not segments.
    if (
      name.startsWith("[") ||
      name.startsWith("(") ||
      name.startsWith("_") ||
      name === "api"
    ) {
      continue;
    }
    const next = [...segments, name];
    if (fs.existsSync(path.join(dir, name, "page.tsx")))
      out.push("/" + next.join("/"));
    walk(path.join(dir, name), next, out);
  }
}

/**
 * Every static route the app actually builds, discovered from the tree.
 *
 * The sitemap used to be a list somebody maintained by hand, and it had drifted: nine built
 * routes were missing, among them the per-app privacy and terms URLs that Apple and Google
 * fetch during store review. A list of pages is derivable from the pages, so deriving it means
 * a new page is advertised because it exists rather than because it was remembered.
 */
export function staticRoutes(): string[] {
  const out: string[] = [];
  if (fs.existsSync(path.join(APP_DIR, "page.tsx"))) out.push("/");
  walk(APP_DIR, [], out);
  return out.filter((r) => !(r in EXCLUDED)).sort();
}

export const EXCLUDED_ROUTES = EXCLUDED;
