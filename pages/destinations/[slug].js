import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Map } from '@/components/index';
import { getPlaiceholder } from 'plaiceholder';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Destination({ destination, blurhashes }) {
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
  } = destination;

  const { [id]: blur } = blurhashes;
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
            blurDataURL={blur.b64main}
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
            blurDataURL={blur.b64second}
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
            blurDataURL={blur.b64third}
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
            blurDataURL={blur.b64fourth}
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
      {/* <pre>{JSON.stringify(destination, null, 2)}</pre> */}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  // const { slug } = params;

  const query = gql`query MyQuery {
    destination(where: {slug: "${slug}"}) {
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
      }]
    }
  }
  `;

  const { destination } = await client.request(query);

  let blurhashes = {};

  const { id, main, secondimage, thirdimage, fourthimage } = destination;
  const { base64: b64main } = await getPlaiceholder(main.url);
  const { base64: b64second } = await getPlaiceholder(secondimage.url);
  const { base64: b64third } = await getPlaiceholder(thirdimage.url);
  const { base64: b64fourth } = await getPlaiceholder(fourthimage.url);

  blurhashes = {
    ...blurhashes,
    [id]: {
      b64main: b64main,
      b64second: b64second,
      b64third: b64third,
      b64fourth: b64fourth,
    },
  };

  return {
    props: {
      destination: destination,
      blurhashes: blurhashes,
    },
  };
};

// export const getStaticPaths = async () => {
//   const query = gql`
//     query MyQuery {
//       destinations {
//         slug
//       }
//     }
//   `;

//   const { destinations } = await client.request(query);

//   return {
//     paths: destinations.map(({ slug }) => ({ params: { slug: slug } })),
//     fallback: false,
//   };
// };
