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
      // Each game's privacy policy lives on its own site now.
      {
        source: "/products/such-moon-launch/privacy",
        destination: "https://moonlaunch.space/privacy/",
        permanent: true,
      },
      {
        source: "/products/bauhaus-echo/privacy",
        destination: "https://bauhausecho.com/privacy/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;