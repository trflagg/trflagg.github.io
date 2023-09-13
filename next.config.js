/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
    outputStandalone: true,
  },
};

module.exports = nextConfig;
