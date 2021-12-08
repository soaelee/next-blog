import { promises as fs } from "fs";
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getPost(slug) {
  const source = await fs.readFile(`content/posts/${slug}.md`, "utf8");
  const { data: {date, title}, content } = matter(source);
  const body = marked(content);
  return { title, date, body };
}
