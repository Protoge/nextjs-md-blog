import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetaData } from "@/lib/getPostMetadata";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }) => {
  const { slug } = params;
  const post = getPostContent(slug);
  return (
    <div>
      <h2 className="text-2xl text-violet-600">{post.data.title}</h2>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
