#!/usr/bin/env node
/**
 * Assert the social and canonical tags on the pages we actually built.
 *
 * Metadata in Next is composed at build time from a parent object and whatever each page
 * exports, and it merges shallowly: a page that declares its own `openGraph` block replaces the
 * parent's, image included. That is not visible in a diff, in a type error, or in lint. It is
 * only visible in the HTML, which is why this reads the HTML.
 *
 * Seventeen pages had done it before `pageMetadata()` landed, twelve of them with no
 * `opengraph-image.tsx` to fall back on, so those shared to Slack and LinkedIn as a bare grey
 * rectangle for however long it had been true. This is the check that would have said so.
 *
 *   node scripts/check-metadata.mjs        # after `pnpm build`
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const BUILD = join(process.cwd(), ".next", "server", "app");

/** Every tag a page must carry, and why it is not optional. */
const REQUIRED = [
  {
    name: "og:image",
    test: /property="og:image"/,
    why: "a shared link renders as a blank card without it",
  },
  {
    name: "twitter:image",
    test: /name="twitter:image"/,
    why: "X and iMessage read this one, not og:image",
  },
  {
    name: "canonical",
    test: /rel="canonical"/,
    why: "without it a page competes with its own query-string variants",
  },
  {
    name: "description",
    test: /name="description"/,
    why: "the search snippet is otherwise chosen for us",
  },
];

function htmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

if (!existsSync(BUILD) || !statSync(BUILD).isDirectory()) {
  console.error(
    `check-metadata: no build output at ${relative(process.cwd(), BUILD)}. ` +
      "This reads the HTML Next actually emitted, so it needs `pnpm build` to have run. " +
      "Refusing rather than reporting a pass over zero pages.",
  );
  process.exit(2);
}

const pages = htmlFiles(BUILD);
if (pages.length === 0) {
  console.error(
    `check-metadata: ${relative(process.cwd(), BUILD)} exists but contains no .html, so the ` +
      "build produced nothing to check. Refusing rather than passing vacuously.",
  );
  process.exit(2);
}

let failed = 0;
for (const file of pages.sort()) {
  const html = readFileSync(file, "utf8");
  const route = "/" + relative(BUILD, file).replace(/\.html$/, "").replace(/^index$/, "");
  for (const { name, test, why } of REQUIRED) {
    if (!test.test(html)) {
      console.error(`check-metadata: ${route} has no ${name}: ${why}`);
      failed += 1;
    }
  }
}

if (failed) {
  console.error(
    `\ncheck-metadata: ${failed} missing tag(s) across ${pages.length} built pages. ` +
      "Build the page's metadata with `pageMetadata()` from src/lib/page-metadata.ts, which " +
      "fills these in, rather than hand-writing an openGraph block that drops them.",
  );
  process.exit(1);
}

console.log(`check-metadata: ${pages.length} built pages carry og:image, twitter:image, canonical and description`);
