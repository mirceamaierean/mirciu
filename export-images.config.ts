/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  // in my case I want all my images to be converted to webp format.
  // WebP is a modern image format developed by Google, known for its high-quality compression and smaller file sizes
  convertFormat: [['png', 'webp'], ['jpg', 'webp'], ['jpeg', 'webp']],
  quality: 60, // default 75 but I didn't notice any differences
};
 
module.exports = config;