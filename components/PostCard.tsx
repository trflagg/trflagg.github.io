import * as React from "react";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

import CategoryTag from "./CategoryTag";
import { authorForName } from "../utils/author";

interface OwnProps {
  post: Post;
}

const BlogCard = ({ post }: OwnProps) => {
  const date = Date.parse(post?.date);
  const author = authorForName(post.author);

  return (
    <Link href={`/posts/${post.slug}`}>
      <article
        key={post.slug}
        className="rounded-lg flex drop-shadow-lg flex-col items-start justify-between bg-gray-100 p-5 hover:bg-gray-200 hover:cursor-pointer"
      >
        <div className="relative w-full">
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-6 flex items-center gap-x-4 text-xs">
            <CategoryTag category={post.category} />
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="text-xs mb-5">
              {date && <ReactTimeAgo date={date} locale="en-US" />}
            </p>
            <p className="mb-3 text-sm leading-6 text-gray-600 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
