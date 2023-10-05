import Link from "next/link";
import React from "react";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts} from 'contentlayer/generated'

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  console.log(posts[0]);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._raw.sourceFileName}>
            <Link href={`${post.url}`}>
                {post.title} ({format(parseISO(post.date), 'MMMM dd, yyyy')})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
