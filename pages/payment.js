// import { connectToDatabase } from '@/utils/mongodb';
import { useState } from 'react';
import Head from 'next/head';

export default function Payment({ trips }) {
  // const isEmpty = trips.length < 1 ? true : false;
  const [code, setCode] = useState('');
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
          <form className='form'>
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
            <a
              className='form__link'
              href={`https://americantravelconsulting.grcoll.co/go/${code}
`}
            >
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
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
