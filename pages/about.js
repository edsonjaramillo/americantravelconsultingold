import Head from 'next/head';
import Navbar from '@/components/shared/NavigationBar/Navbar';
export default function About() {
  return (
    <>
      <Head>
        <title>American Travel Company | About</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <h1>About Page</h1>
    </>
  );
}
