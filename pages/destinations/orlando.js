import Head from 'next/head';
import { Map } from '@/components/index';
import Data from '@/data/orlando';
import Image from 'next/image';
import { useState } from 'react';

export default function Orlando() {
  const [status, setStatus] = useState('Show');
  const [showMap, setShowMap] = useState(false);

  const MapBox = () => {
    return (
      <>
        <div className='responsive-width map'>
          <Map
            dataMarkers={Data}
            lat={28.438336}
            lon={-81.379234}
            zoom={8.75}
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>American Travel Consulting | Orlando, Florida</title>
        <meta
          name='description'
          content='This central Florida region attracts around 60 million visitors every year, who come for the warm climate, the world-famous theme parks, the shopping malls, the golf courses and the nightlife. They come for the beaches too, as some of America’s finest are within easy reach.'
        />
      </Head>

      <div className='responsive-width destination__titleContainer'>
        <h1 className='destination__location'>Orlando, Florida</h1>
      </div>
      <div className='responsive-width destination__imageWrapper'>
        <Image
          className='map__image'
          src={`/images/destinations/orlando.jpg`}
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
