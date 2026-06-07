/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  // Inline the CSS into the HTML so the render-blocking stylesheet request leaves the
  // critical path. That request was the LCP gate on throttled mobile: the logo (a data
  // URI, ready instantly) couldn't paint until the separate CSS round-trip finished,
  // and that round-trip varied run-to-run (TTFB 0, render delay ~2.3s). Inlined CSS
  // arrives with the HTML, so the logo paints right away.
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/links",
        destination: "/apps",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;