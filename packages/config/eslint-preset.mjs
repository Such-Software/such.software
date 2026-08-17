import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// eslint-config-next 15 still ships only an eslintrc-style config (no flat export),
// so FlatCompat translates it. baseDirectory is THIS package, because that is where
// eslint-config-next is declared and therefore resolvable from.
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/** Shared flat config for every app in the monorepo. */
const config = [
  // ESLint 9 only walks extensions that some config names in `files`. Without this,
  // `eslint .` silently lints the three loose .js files and skips all of src/*.tsx
  // while still exiting 0 -- a green run that checked nothing.
  { files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"] },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // strict accessibility rules will go here later
    },
  },
];

export default config;
