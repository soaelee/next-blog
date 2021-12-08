import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="description" value="This is a first post page" />
      </Head>
      <p>{post.date}</p>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map(slug => ({
      params: {slug}
    })),
    fallback: false,
  };
}
export async function getStaticProps({params: {slug}}) { // context
  const post = await getPost(slug);
  return {
    props: { post },
  };
}
export default PostPage;
