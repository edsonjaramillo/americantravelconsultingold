// import { connectToDatabase } from '@/utils/mongodb';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { toastNotification } from '@/lib/toastNotification';

export default function Payment() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { schoolcode } = data;
    reset();
    router.push(`https://americantravelconsulting.grcoll.co/go/${schoolcode}`);
  };

  const ErrorMessage = ({ message }) => (
    <p className='form__errormessage'>{message}</p>
  );

  return (
    <>
      <Head>
        <title>American Travel Consulting | Payment</title>
        <meta name='robots' content='noindex' />
      </Head>
      <div className='section'>
        <h2 className='responsive-width-form section__header'>
          Payment Portal
        </h2>
        <div className='responsive-width-form' style={{ minHeight: '70vh' }}>
          <form
            className='form'
            onSubmit={handleSubmit(onSubmit, () => {
              toastNotification('error', 'Enter school code');
            })}>
            <div className='form__grid responsive-width-form'>
              <div className='form__inputgroup'>
                <label className='form__label'>
                  School Code
                  {errors.name?.type === 'required' && (
                    <ErrorMessage message='Required' />
                  )}
                </label>
                <input
                  className='form__input'
                  placeholder='schoolhsbandchicago2022'
                  {...register('schoolcode', {
                    required: true,
                  })}
                />
              </div>
              <input
                className='form__button'
                type='submit'
                value='Send Message'
              />
            </div>
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
