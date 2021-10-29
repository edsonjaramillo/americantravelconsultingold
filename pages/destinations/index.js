import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import { getPlaiceholder } from 'plaiceholder';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

const Site = ({ name, description, slug, mainalt, url, blur }) => {
  return (
    <>
      <div className='destinationscard'>
        <div className='destinationscard__imageWrapper'>
          <Image
            src={url}
            height='400'
            width='800'
            layout='responsive'
            alt={mainalt}
            placeholder='blur'
            blurDataURL={blur}
            quality='50'
          />
        </div>
        <h2 className='destinationscard__title'>{name}</h2>
        <p className='destinationscard__description'>{description}</p>
        <Link href={`/destinations/${slug}`}>
          <a className='destinationscard__button'>More Details</a>
        </Link>
      </div>
    </>
  );
};

export default function Destinations({ destinations }) {
  return (
    <>
      <Head>
        <title>American Travel Consulting | Destinations</title>
        <meta name='robots' content='noindex' />
      </Head>

      <div className='section'>
        <h2 className='responsive-width section__header'>Destinations</h2>
        <div className='responsive-width destinationsGrid'>
          {destinations.map(
            ({ id, name, description, slug, main, mainalt, blur }) => {
              return (
                <Site
                  key={id}
                  name={name}
                  description={description}
                  url={main.url}
                  slug={slug}
                  mainalt={mainalt}
                  blur={blur}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const query = gql`
    query MyQuery {
      destinations(orderBy: name_ASC) {
        id
        name
        description
        slug
        main {
          id
          url
        }
        mainalt
      }
    }
  `;

  const { destinations } = await client.request(query);
  for (let index = 0; index < destinations.length; index++) {
    const { base64: blur } = await getPlaiceholder(
      destinations[index].main.url,
      { size: 10 }
    );

    destinations[index] = {
      ...destinations[index],
      blur: blur,
    };
  }

  return {
    props: {
      destinations: destinations,
    },
  };
};
