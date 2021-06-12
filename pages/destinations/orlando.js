import Head from 'next/head';
import { Map } from '@/components/index';
import Data from '@/data/orlando';
import Image from 'next/image';

export default function Orlando() {
  return (
    <>
      <Head>
        <title>American Travel Consulting | Orlando, Florida</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='responsive-width destination__titleContainer'>
        <h1 className='destination__location'>Orlando, Florida</h1>
        <h2 className='destination__country'>United States of America</h2>
      </div>
      <div className='responsive-width destination__imageWrapper'>
        <Image
          className='map__image'
          src={`/images/home/orlando.jpg`}
          height='400'
          width='800'
          layout='responsive'
          alt='Disney World'
        />
      </div>
      <div className='responsive-width destination__attractions'>
        {/* <div className='destination__attractionContent'> */}
        <ul className='destination__list'>
          {Data.map((item) => (
            <li className='destination__item' key={item.name}>
              {item.name}
            </li>
          ))}
          <li className='destination__item'>and more...</li>
        </ul>
        {/* </div> */}
      </div>
      {/* <p className='responsive-width destination__description'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
        consequuntur sunt, quasi nemo animi iste. Eius optio quo sit sint
        similique, nulla ipsum ex maxime recusandae reprehenderit, veritatis
        maiores laborum.
      </p> */}
      <div className='responsive-width map'>
        <Map dataMarkers={Data} lat={28.438336} lon={-81.379234} zoom={8.75} />
      </div>
    </>
  );
}