import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from "../lib/posts";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <h1> My Blog </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

export default HomePage;