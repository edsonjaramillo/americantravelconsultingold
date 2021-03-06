import Head from 'next/head';
import { RequestForm } from '@/components/index';
export default function Contact() {
  return (
    <>
      <Head>
        <title>American Travel Consulting | Contact</title>
        <meta name='robots' content='noindex' />
      </Head>
      <div className='contactheader responsive-width-form'>
        <h1 className='contactheader__title'>Need a quote?</h1>
        <p className='contactheader__subtitle'>
          Please fill out the form below and our team will be in contact soon.
        </p>
      </div>
      <RequestForm />
    </>
  );
}
