import Link from 'next/link';

const ErroPage = () => {
  return (
    <>
      <div className='error responsive-width'>
        <h1 className='error__message'>Oops! This page is not found.</h1>
        <Link href='/'>
          <a className='error__button'>Return Home</a>
        </Link>
      </div>
    </>
  );
};

export default ErroPage;
