import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { Circle } from "./Circle";

export const PostRow = (post: Post) => {
  return (
    <div className="mb-8 flex flex-row justify-between items-center my-2">
      <h2 className="mb-1 text-lg flex flex-row items-center">
        <Link href={post.url}>
          <div className="scale-75">
            <Circle
              textContent={post.title}
              rotationAngle={270}
              translateX={10}
            />
          </div>
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-sm my-auto max-w-[6rem]">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};
