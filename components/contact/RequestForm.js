import emailjs from 'emailjs-com';
import { Input } from '@/components/index';

export default function RequestForm() {
  function sendEmail(e) {
    try {
      emailjs.sendForm(
        'service_pdeufkb',
        'template_e5ir1o2',
        e.target,
        'user_nP0ri4IytysxtBiIFWg6M'
      );
      e.target.reset();
      alert(
        'Thank you for submitting. We will get back to you as soon as we can.'
      );
    } catch (error) {
      alert(error);
    }
    e.preventDefault();
  }

  return (
    <>
      <div className='responsive-width-form'>
        <form className='form' type='submit' onSubmit={sendEmail}>
          <Input label='Name' type='text' name='name' example='Jane Doe' />
          <Input
            label='School/Organization'
            type='text'
            name='organization'
            example='Jane Doe High School'
          />
          <Input
            label='Destination'
            type='text'
            name='destination'
            example='Orlando, Florida'
          />
          <Input
            label='Phone Number'
            type='text'
            name='phone'
            example='1234567890'
          />
          <Input
            label='Email'
            type='email'
            name='email'
            example='janedoe@domain.com'
          />
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='message'>
              Message<span className='form__required'> * Required</span>
            </label>
            <textarea
              className='form__input'
              name='message'
              id='message'
              rows='15'
              required
            ></textarea>
          </div>
          <button className='form__button' type='submit'>
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}
