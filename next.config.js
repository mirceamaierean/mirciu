/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["i.scdn.co"], // Add any other allowed domains as well
  },
};

module.exports = nextConfig;
