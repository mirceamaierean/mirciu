import Link from "next/link";
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

export const PostRow = (post: Post) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs ">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

