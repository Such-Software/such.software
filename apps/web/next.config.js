/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
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