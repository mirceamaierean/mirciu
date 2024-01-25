/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"], // Add any other allowed domains as well
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
