import Image from 'next/image';
export default function TripType({ filename, title }) {
  return (
    <>
      <div className='type'>
        <div className='type__imageWrapper'>
          <Image
            src={`/images/home/${filename}`}
            height='40'
            width='40'
            layout='responsive'
          />
        </div>
        {/* <img className='type__icon' src={`/images/home/${filename}`} alt='' /> */}
        <h2 className='type__header'>{title}</h2>
      </div>
    </>
  );
}
