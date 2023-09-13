import * as React from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

import BannerWithImage from "../../components/BannerWithImage";
import { authorForName } from "../../utils/author";
import CategoryTag from "../../components/CategoryTag";

var md = require("markdown-it")();
md.use(require("markdown-it-container"), "error");

interface OwnProps {
  post: Post;
  author: Author;
}

export default function Post({ post, author }: OwnProps) {
  const date = Date.parse(post?.date);
  return (
    <div>
      <BannerWithImage />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-8 lg:mb-12 not-format">
              <div className="mb-3">
                <CategoryTag category={post.category} />
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                {post.title}
              </h1>
              {!isNaN(date) && (
                <span className="text-sm text-right">
                  <span className="text-gray-700">
                    {`${new Intl.DateTimeFormat("en-US").format(date)}  - `}
                  </span>
                  <span className="text-gray-400">
                    {date && <ReactTimeAgo date={date} locale="en-US" />}
                  </span>
                </span>
              )}
            </header>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
            />
          </article>
        </div>
      </main>
    </div>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const author = authorForName(frontmatter.author);
  return {
    props: {
      post: {
        content,
        ...frontmatter,
      } as Post,
      author,
    },
  };
}
