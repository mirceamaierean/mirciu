import Link from "next/link";
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

export const PostRow = (post: Post) => {
  return (
    <div className="mb-8 flex flex-row justify-between mx-7 items-center my-2">
      <h2 className="mb-1 text-lg">
        <Link href={post.url} className="">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-md ">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

