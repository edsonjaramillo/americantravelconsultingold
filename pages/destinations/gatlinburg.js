import Head from 'next/head';
import { Map } from '@/components/index';
import Data from '@/data/gatlinburg';
import Image from 'next/image';
import { useState } from 'react';

export default function Gatlinburg() {
  const [status, setStatus] = useState('Show');
  const [showMap, setShowMap] = useState(false);

  const MapBox = () => {
    return (
      <>
        <div className='responsive-width map'>
          <Map
            dataMarkers={Data}
            lat={35.71313567614636}
            lon={-83.51276638686316}
            zoom={13.5}
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>American Travel Consulting | Gatlinburg, Tennessee</title>
      </Head>

      <div className='responsive-width destination__titleContainer'>
        <h1 className='destination__location'>Gatlinburg, Tennessee</h1>
        <h2 className='destination__country'>United States of America</h2>
      </div>
      <div className='responsive-width destination__imageWrapper'>
        <Image
          className='map__image'
          src={`/images/destinations/gatlinburg.jpg`}
          height='400'
          width='800'
          layout='responsive'
          alt='Disney World'
        />
      </div>
      <div className='responsive-width destination__attractions'>
        <ul className='destination__list'>
          {Data.map((item) => (
            <li className='destination__item' key={item.name}>
              {item.name}
            </li>
          ))}
          <li className='destination__item'>and more...</li>
        </ul>
      </div>

      <div className='mapSection'>
        <button
          className='responsive-width destination__showButton'
          onClick={() => {
            setShowMap(!showMap);
            if (status === 'Show') {
              setStatus('Hide');
            } else {
              setStatus('Show');
            }
          }}
        >
          {status} Interactive Map
        </button>
        {showMap && <MapBox />}
      </div>
    </>
  );
}
