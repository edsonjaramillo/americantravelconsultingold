import Image from 'next/image';
import Link from 'next/link';

export default function Location({ filename, place, link, altDesciption }) {
  return (
    <>
      <div className='location'>
        <div className='location__imageWrapper'>
          <Image
            className='location__image'
            src={`/images/home/${filename}`}
            height='400'
            width='800'
            layout='responsive'
            alt={altDesciption}
          />
        </div>
        <h3 className='location__header'>{place}</h3>
        <Link href='/'>
          <a className='location__link'>View Details</a>
        </Link>
      </div>
    </>
  );
}
