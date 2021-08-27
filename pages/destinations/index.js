import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

const Site = ({ name, description, slug, mainalt, url }) => {
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
            quality='5'
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
      </Head>

      <div className='section'>
        <h2 className='responsive-width section__header'>Destinations</h2>
        <div className='responsive-width destinationsGrid'>
          {destinations.map(
            ({ id, name, description, slug, main, mainalt }) => (
              <Site
                key={id}
                name={name}
                description={description}
                url={main.url}
                slug={slug}
                mainalt={mainalt}
              />
            )
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

  return {
    props: {
      destinations: destinations,
    },
  };
};
