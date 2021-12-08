import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <h1> My Blog </h1>
      <ul>
        <li>
          <Link href="/posts/first-post">
            <a>First Post</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;