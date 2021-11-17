import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { toastNotification } from '@/lib/toastNotification';

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name } = data;
    const templateParameters = {
      name: data.name,
      organization: data.organization,
      destination: data.destination,
      email: data.email,
      phone: data.phone,
      choice: data.choice,
      message: data.message,
    };
    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );

    if (status == 200) {
      // toastNotification(
      //   'success',
      //   `Thank your for your message, ${name}! We will be in contact soon.`
      // );
      reset();
    } else {
      toastNotification('error', 'Error occured. Try again.');
    }
  };

  const ErrorMessage = ({ message }) => <p className='form__errormessage'>{message}</p>;

  return (
    <>
      <div className='responsive-width-form'>
        <form
          className='form'
          onSubmit={handleSubmit(onSubmit, () => {
            // toastNotification('error', 'Check input requirments.');
            // errors.phone?.type === 'minLength' &&
            //   toastNotification('error', 'Phone number must be 10 digits.', 4000);
            // errors.phone?.type === 'maxLength' &&
            //   toastNotification('error', 'Phone number must be 10 digits.', 4000);
          })}>
          <div className='form__grid responsive-width-form'>
            <div className='form__inputgroup'>
              <label className='form__label'>
                Name
                {errors.name?.type === 'required' && <ErrorMessage message='Required' />}
              </label>
              <input
                className='form__input'
                placeholder='Jane Doe'
                {...register('name', { required: true })}
              />
            </div>
            <div className='form__inputgroup'>
              <label className='form__label'>
                School/Organization
                {errors.organization?.type === 'required' && (
                  <ErrorMessage message='Required' />
                )}
              </label>
              <input
                className='form__input'
                placeholder='Jane Doe High School'
                {...register('organization', { required: true })}
              />
            </div>
            <div className='form__inputgroup'>
              <label className='form__label'>
                Destination
                {errors.destination?.type === 'required' && (
                  <ErrorMessage message='Required' />
                )}
              </label>
              <input
                className='form__input'
                placeholder='Orlando, Florida'
                {...register('destination', { required: true })}
              />
            </div>
            {/* Email */}
            <div className='form__inputgroup'>
              <label className='form__label' htmlFor='email'>
                Email
                {errors.email?.type === 'required' && <ErrorMessage message='Required' />}
              </label>

              <input
                className='form__input'
                placeholder='janedoe@domain.com'
                {...register('email', { required: true })}
              />
            </div>
            {/* Phone Number */}
            <div className='form__inputgroup'>
              <label className='form__label'>
                Phone Number
                {errors.phone?.type === 'required' && <ErrorMessage message='Required' />}
              </label>

              <input
                className='form__input'
                placeholder='1234567890'
                type='text'
                {...register('phone', {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
            </div>

            {/* Message */}
            <div className='form__inputgroup'>
              <label className='form__label '>
                Message
                {errors.message?.type === 'required' && <ErrorMessage message='Required' />}
              </label>

              <textarea
                className='form__input form--textarea'
                placeholder='Enter message...'
                rows={10}
                {...register('message', { required: true })}></textarea>
            </div>
            {/* Choice */}
            <div className='form__inputgroup'>
              <label className='form__label' htmlFor='phoneNumber'>
                Preffered Form of Contact
                {errors.choice?.type === 'required' && <ErrorMessage message='Required' />}
              </label>

              <div className='form__radiogroup'>
                <label className='form__radiolabel'>
                  <input
                    className='form__radioinput'
                    type='radio'
                    name='choice'
                    id='Email'
                    value='Email'
                    {...register('choice', { required: true })}
                  />
                  Email
                </label>
                <label className='form__radiolabel'>
                  <input
                    className='form__radioinput'
                    type='radio'
                    name='choice'
                    id='Phone'
                    value='Phone'
                    {...register('choice', {
                      required: true,
                    })}
                  />
                  Phone
                </label>
                <label className='form__radiolabel'>
                  <input
                    className='form__radioinput'
                    type='radio'
                    name='choice'
                    id='Phone'
                    value='Phone'
                    {...register('choice', {
                      required: true,
                    })}
                  />
                  Either
                </label>
              </div>
            </div>
            <input className='form__button' type='submit' value='Send Message' />
          </div>
        </form>
      </div>
    </>
  );
}
