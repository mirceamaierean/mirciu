/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["i.scdn.co"], // Add any other allowed domains as well
  },
};

module.exports = withContentlayer(nextConfig);
