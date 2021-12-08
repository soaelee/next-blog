import Head from "next/head";
import { getPost } from '../../lib/posts';

const FirstPostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="description" value="This is a first post page" />
      </Head>
      <p>{post.date}</p>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{__html: post.body}}></article>
    </>
  );
};

export async function getStaticProps() {
  const post = await getPost("first-post");
  return {
    props: {post}
  }
}
export default FirstPostPage;
