import Head from 'next/head';
import { Navbar, MobileFooter } from '@/components/index';
import '@/styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <MobileFooter />
    </>
  );
}

export default MyApp;
