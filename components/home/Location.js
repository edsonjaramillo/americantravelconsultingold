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
            // placeholder='blur'
            // blurDataURL={`/images/home/${filename}`}
            alt={altDesciption}
            quality='25'
          />
        </div>
        <h3 className='location__header'>{place}</h3>
        <Link href={`/destinations/${link}`}>
          <a className='location__link'>View Details</a>
        </Link>
      </div>
    </>
  );
}
