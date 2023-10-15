import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

const postsSitemap: MetadataRoute.Sitemap = allPosts.map((post) => ({
  url: `https://mirciu.com/blog/${post._raw.flattenedPath}`,
  lastModified: post.date,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mirciu.com",
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
}
