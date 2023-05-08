import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import Link from "next/link";
import { Circle } from "@/components/Circle";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className="mt-32 sm:mt-4 mx-5 sm:mx-auto max-w-3xl bg-[#f7f7f7] dark:bg-[#2a2b33] rounded-xl border-2 border-[#f1f1f1] dark:border-[#2a2b33] ">
      <Link href="/blog" className="flex ml-5">
        <div className="scale-50">
          <Circle
            textContent="Back to all posts"
            rotationAngle={90}
            translateX={-10}
          />
        </div>
      </Link>
      <article className="mx-auto max-w-xl pb-8">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXComponent />
      </article>
    </div>
  );
};

export default PostLayout;