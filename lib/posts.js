import { promises as fs } from "fs";
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getPost(slug) {
  const source = await fs.readFile(`content/posts/${slug}.md`, "utf8");
  const { data: {date, title}, content } = matter(source);
  const body = marked(content);
  return { title, date, body };
}

export async function getSlugs() {
  const suffic = '.md';
  const files = await fs.readdir('content/posts');
  return files
    .filter((file) => file.endsWith(suffic))
    .map((file) => file.slice(0, -suffic.length));
}