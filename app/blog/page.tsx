import React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { PostRow } from "@/components/PostRow";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mt-32 sm:mt-4 mx-5 sm:mx-auto max-w-3xl bg-[#f7f7f7] dark:bg-[#2a2b33] rounded-xl border-2 border-[#f1f1f1] dark:border-[#2a2b33] ">
      <h1 className="text-3xl sm:text-4xl font-bold p-2 mx-auto text-center py-8">
        Blog
      </h1>
      <h2 className="text-md sm:text-lg font-lg mx-2 sm:mx-auto text-center">
        Ocassionaly I like to think that I have something interesting to say, so
        I write it down here.
      </h2>
      <hr className="h-px my-4 mx-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        {posts.map((post) => (
          <li key={post.url}>
            <PostRow {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
