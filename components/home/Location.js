import Image from 'next/image';
import Link from 'next/link';

export default function Location({ url, name, slug, mainalt, blurhash }) {
  return (
    <>
      <div className='location'>
        <div className='location__imageWrapper'>
          <Image
            className='location__image'
            src={url}
            height='400'
            width='800'
            layout='responsive'
            placeholder='blur'
            blurDataURL={blurhash}
            alt={mainalt}
            quality='25'
          />
        </div>
        <h3 className='location__header'>{name}</h3>
        <Link href={`/destinations/${slug}`}>
          <a className='location__link'>View Details</a>
        </Link>
      </div>
    </>
  );
}
