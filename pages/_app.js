import Head from 'next/head';
import Navbar from '../components/layout/Navbar'
import '../styles/globals.css';

const App = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App