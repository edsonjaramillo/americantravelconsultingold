export default function Input({ label, type, name, example }) {
  return (
    <>
      <div className='form__inputContainer'>
        <label className='form__label' htmlFor='organization'>
          {label}
          <span className='form__required'> * Required</span>
        </label>
        <input
          className='form__input'
          type={type}
          name={name}
          id={name}
          placeholder={`ex. ${example}`}
          required
        />
      </div>
    </>
  );
}
