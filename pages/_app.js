import '@/styles/main.css';
import Head from 'next/head';
import { Navbar } from '@/components/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
