import fs from "fs";
import matter from "gray-matter";

export function link(slug: string) {
  return `/posts/${slug}`;
}

export async function getAllPosts() {
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      content,
      link: link(slug),
      ...frontmatter,
    } as Post;
  });

  // sort newest to oldest
  posts.sort(function (a, b) {
    var c = new Date(a.date) as any;
    var d = new Date(b.date) as any;
    return d - c;
  });

  return posts as Post[];
}
