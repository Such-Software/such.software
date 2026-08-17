import preset from "@repo/config/eslint-preset.mjs";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "next-env.d.ts",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  ...preset,
];

export default config;
