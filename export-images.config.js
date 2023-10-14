/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
    ["jpeg", "webp"],
  ],
  quality: 60,
};

module.exports = config;
