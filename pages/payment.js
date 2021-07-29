import { connectToDatabase } from '@/utils/mongodb';
import Head from 'next/head';

export default function Payment({ trips }) {
  const isEmpty = trips.length < 1 ? true : false;
  return (
    <>
      <Head>
        <title>American Travel Consulting | Payment</title>
      </Head>
      <div className='section'>
        <h2 className='responsive-width-form section__header'>Payment Links</h2>
        <div style={{ minHeight: '70vh' }}>
          <div className='responsive-width-form paymentgrid'>
            {isEmpty && <h1>No Trip Links Available</h1>}
            {trips.map(({ _id, date, organization, location, link }) => (
              <div key={_id} className='payment'>
                <p className='payment__organization'>{`${organization}`}</p>
                <p className='payment__location'>{`${location}`}</p>
                <p className='payment__date'>{date}</p>
                {/* <p className='payment__date'>{`${new Date(
                date
              ).toLocaleDateString()}`}</p> */}
                <a className='payment__link' href={link}>
                  Pay
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { db } = await connectToDatabase();
  const trips = await db
    .collection('trips')
    .find({ visible: true })
    .sort({ date: 1 })
    .toArray();

  return {
    props: {
      trips: JSON.parse(JSON.stringify(trips)),
    },
  };
};
