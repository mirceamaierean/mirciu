import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXContent from '@/components/mdx-content';
import { Metadata } from 'next';

import Link from "next/link";
import { Circle } from "@/components/Circle";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
 
  const { title } = post;
 
  const description = post.summary;
 
  return {
    title,
    description,
  };
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return (
    <div className="mt-32 sm:mt-4 mx-5 sm:mx-auto max-w-3xl bg-[#f7f7f7] dark:bg-[#2a2b33] rounded-xl border-2 border-[#f1f1f1] dark:border-[#2a2b33] ">
      <Link href="/blog" className="mx-auto flex ml-[-2rem]">
        <div className="scale-[0.6]">
          <Circle
            textContent="Back to all posts"
            rotationAngle={90}
            translateX={-10}
          />
        </div>
      </Link>
      <article className="mx-auto max-w-xl pb-8">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="flex flex-row justify-center items-center mt-2">
            <time dateTime={post.date} className="mr-4 text-xs text-gray-600 dark:text-gray-400">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <p className="text-xs text-gray-600 dark:text-gray-400">{post.readTime} min read</p>
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-0">
          <MDXContent code={post.body.code} />
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
