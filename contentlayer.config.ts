import { defineDocumentType, makeSource } from 'contentlayer/source-files';
 
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { s } from 'hastscript';
 
// defining document type where we will defing our mdx document frontmatter structure
// (all these fields will be passed to static json with types that can be imported and used by next app)
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: 'string',
      resolve: (post) => {
        const wordsPerMinute = 200;
        const noOfWords = post.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));
 
export default makeSource({
  contentDirPath: 'data/blog',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3'],
          properties: { class: 'heading-link' },
          content: s(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              width: '24',
              height: '24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'aria-label': 'Anchor link',
            },
            [
              s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
              s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
              s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
              s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
            ],
          ),
        } satisfies Partial<AutolinkOptions>,
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'monokai',
          },
        } satisfies Partial<PrettyCodeOptions>,
      ],
    ],
  },
});