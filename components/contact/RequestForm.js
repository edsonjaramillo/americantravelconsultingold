import emailjs from 'emailjs-com';

export default function RequestForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pdeufkb',
        'template_e5ir1o2',
        e.target,
        'user_nP0ri4IytysxtBiIFWg6M'
      )
      .then(
        (result) => {
          //   console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className='responsive-width-half'>
        <form
          className='form'
          type='submit'
          onSubmit={sendEmail}
          id='requestform'
        >
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='name'>
              Name <span className='form__required'>* Required</span>
            </label>
            <input
              className='form__input'
              type='text'
              name='name'
              id='name'
              placeholder='ex. Jane Doe'
              required
            />
          </div>
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='organization'>
              School/Organization
              <span className='form__required'>* Required</span>
            </label>
            <input
              className='form__input'
              type='text'
              name='organization'
              id='organization'
              placeholder='ex. Jane Doe High School'
              required
            />
          </div>
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='phone'>
              Phone Number <span className='form__required'>* Required</span>
            </label>
            <input
              className='form__input'
              type='text'
              name='phone'
              id='phone'
              placeholder='ex. 1234567890'
              required
            />
          </div>
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='email'>
              Email <span className='form__required'>* Required</span>
            </label>
            <input
              className='form__input'
              type='email'
              name='email'
              id='email'
              placeholder='ex. janedoe@domain.com'
              required
            />
          </div>

          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='message'>
              Message <span className='form__required'>* Required</span>
            </label>
            <textarea
              className='form__input'
              name='message'
              id='message'
              rows='12'
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
