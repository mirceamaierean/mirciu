/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["i.scdn.co"], // Add any other allowed domains as well
  },
  output: "export",
};

module.exports = withContentlayer(withExportImages(nextConfig));
