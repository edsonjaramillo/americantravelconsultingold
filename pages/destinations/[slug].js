import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Map } from '@/components/index';
import { getPlaiceholder } from 'plaiceholder';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Destination({ destination }) {
  const [status, setStatus] = useState('Show');
  const [showMap, setShowMap] = useState(false);

  const {
    id,
    name,
    slug,
    description,
    mapitems,
    main,
    mainalt,
    secondimage,
    secondalt,
    thirdimage,
    thirdalt,
    fourthimage,
    fourthalt,
    zoomlevel,
    viewport,
    blurmain,
    blursecond,
    blurthird,
    blurfourth,
  } = destination;

  const quality = 25;

  const MapBox = () => {
    return (
      <>
        <div className='responsive-width map'>
          <Map
            mapitems={mapitems}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={zoomlevel}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>{`American Travel Consulting | ${name}`}</title>
        <meta name='description' content={description} />
        <meta
          property='og:url'
          content={`https://americantravelconsulting.com/destinations/${slug}`}
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`American Travel Consulting | ${name}`}
        />
        <meta property='og:description' content={`${description}`} />
        <meta property='og:image' content={main.url}></meta>
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:domain'
          content={`https://americantravelconsulting.com/destinations/${slug}`}
        />
        <meta
          property='twitter:url'
          content={`https://americantravelconsulting.com/destinations/${slug}`}
        />
        <meta
          name='twitter:title'
          content={`American Travel Consulting | ${name}`}
        />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={main.url}></meta>
      </Head>

      <div className='responsive-width destination__titleContainer'>
        <h1 className='destination__location'>{name}</h1>
      </div>

      <div className='destination__imagegrid responsive-width'>
        <div className='destination__imagemain' id='main'>
          <Image
            className='map__image'
            src={main.url}
            height='400'
            width='800'
            placeholder='blur'
            blurDataURL={blurmain}
            layout='responsive'
            alt={mainalt}
            quality={quality}
          />
        </div>
        <div className='destination__imagesecond' id='second'>
          <Image
            className='map__image'
            src={secondimage.url}
            height='400'
            width='800'
            layout='responsive'
            placeholder='blur'
            blurDataURL={blursecond}
            alt={secondalt}
            quality={quality}
          />
        </div>
        <div className='destination__imagethird' id='third'>
          <Image
            className='map__image'
            src={thirdimage.url}
            height='400'
            width='800'
            layout='responsive'
            placeholder='blur'
            blurDataURL={blurthird}
            alt={thirdalt}
            quality={quality}
          />
        </div>
        <div className='destination__imagefourth' id='fourth'>
          <Image
            className='map__image'
            src={fourthimage.url}
            height='400'
            width='800'
            layout='responsive'
            placeholder='blur'
            blurDataURL={blurfourth}
            alt={fourthalt}
            quality={quality}
          />
        </div>
      </div>
      <div className='responsive-width destination__attractions'>
        <ul className='destination__list'>
          {mapitems.map(({ id, name }) => (
            <li className='destination__item' key={id}>
              {name}
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
          }}>
          {status} Interactive Map
        </button>
        {showMap && <MapBox />}
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  // const { slug } = ctx.query;
  const { slug } = params;

  const query = gql`
    query MyQuery {
      destination(where: { slug: "${slug}" }) {
        id
        slug
        name
        description
        main {
          id
          url
        }
        mainalt
        secondimage {
          id
          url
        }
        secondalt
        thirdimage {
          id
          url
        }
        thirdalt
        fourthimage {
          id
          url
        }
        fourthalt
        zoomlevel
        viewport {
          latitude
          longitude
        }
        mapitems(orderBy: name_ASC) {
          id
          name
          coordinate {
            latitude
            longitude
          }
          link
        }
      }
    }
  `;

  let { destination } = await client.request(query);

  const { main, secondimage, thirdimage, fourthimage } = destination;
  const { base64: blurmain } = await getPlaiceholder(main.url, { size: 10 });
  const { base64: blursecond } = await getPlaiceholder(secondimage.url, {
    size: 10,
  });
  const { base64: blurthird } = await getPlaiceholder(thirdimage.url, {
    size: 10,
  });
  const { base64: blurfourth } = await getPlaiceholder(fourthimage.url, {
    size: 10,
  });

  destination = {
    ...destination,
    blurmain: blurmain,
    blursecond: blursecond,
    blurthird: blurthird,
    blurfourth: blurfourth,
  };

  return {
    props: {
      destination: destination,
    },
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query MyQuery {
      destinations {
        slug
      }
    }
  `;

  const { destinations } = await client.request(query);

  return {
    paths: destinations.map(({ slug }) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
