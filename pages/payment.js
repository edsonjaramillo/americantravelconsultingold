// import { connectToDatabase } from '@/utils/mongodb';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

export default function Payment({ trips }) {
  const router = useRouter();
  const [code, setCode] = useState('');

  const submit = () => {
    console.log(code);
    router.push(`https://americantravelconsulting.grcoll.co/go/${code}
    `);
  };

  return (
    <>
      <Head>
        <title>American Travel Consulting | Payment</title>
      </Head>
      <div className='section'>
        <h2 className='responsive-width-form section__header'>
          Payment Portal
        </h2>
        <div style={{ minHeight: '70vh' }} className='responsive-width-half'>
          <form
            className='form'
            onSubmit={(e) => {
              submit();
              e.preventDefault();
              e.target.reset();
            }}>
            <div className='form__inputContainer'>
              <label className='form__label' htmlFor='schoolcode'>
                School Code
              </label>
              <input
                type='text'
                name='schoolcode'
                id='schoolecode'
                className='form__input'
                placeholder='ex. schoolhsbandchicago2022'
                required
                onChange={(e) => setCode(String(e.target.value).trim())}
              />
            </div>
            <button className='form__buttonpayment' type='submit'>
              Submit
            </button>
            {/* <a
              className='form__link'
              href={`https://americantravelconsulting.grcoll.co/go/${code}
`}
            >
              Submit
            </a> */}
          </form>
        </div>
      </div>
    </>
  );
}

// export const getStaticProps = async (ctx) => {
//   const { db } = await connectToDatabase();
//   const trips = await db
//     .collection('trips')
//     .find({ visible: true })
//     .sort({ date: 1 })
//     .toArray();

//   return {
//     props: {
//       trips: JSON.parse(JSON.stringify(trips)),
//     },
//   };
// };
