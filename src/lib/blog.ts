import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export interface PostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  keywords?: string[];
  persona?: string;
  pillar?: boolean;
  readingTime?: number;
}

export interface Post {
  meta: PostMeta;
  html: string;
  raw: string;
}

const postModules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const parsedPosts: Post[] = Object.entries(postModules)
  .map(([_path, raw]) => {
    const { data, content } = matter(raw);
    const html = marked.parse(content, { async: false }) as string;
    return {
      meta: data as PostMeta,
      html,
      raw: content,
    };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return parsedPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return parsedPosts.find((p) => p.meta.slug === slug);
}

export function getAllSlugs(): string[] {
  return parsedPosts.map((p) => p.meta.slug);
}
