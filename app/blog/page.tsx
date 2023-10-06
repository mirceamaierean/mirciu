import Link from "next/link";
import React from "react";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { PostRow } from "@/components/PostRow";

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  console.log(posts[0]);

  return (
    <div>
      <h1>Blog</h1>
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
