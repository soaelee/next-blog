import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <h1> My Blog </h1>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </>
  );
}

export default HomePage;