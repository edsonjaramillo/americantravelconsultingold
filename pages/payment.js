import Head from 'next/head';
import Navbar from '@/components/shared/NavigationBar/Navbar';
export default function Payment() {
  return (
    <>
      <Head>
        <title>American Travel Company | Payment</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <h1>Payment Page</h1>
    </>
  );
}
