import * as React from "react";

import PostCard from "../components/PostCard";

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <div>
      <h2>My Blog</h2>
      <p className="mb-0">
        I keep a blog share knowledge and track my learnings.
      </p>
      <p> Here are some recent posts:</p>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <PostCard post={posts[0]} />
      </div>
    </div>
  );
}
