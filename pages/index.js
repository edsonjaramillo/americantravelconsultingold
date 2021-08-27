import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Location, Testimonial } from '@/components/index';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Home({ destinations, testimonials }) {
  return (
    <>
      <Head>
        <title>American Travel Consulting</title>
      </Head>
      <div className='cta'>
        <div className='responsive-width cta__boundary'>
          <div className='cta__imagewrapper'>
            <Image
              src='/logo.png'
              height='794'
              width='1123'
              layout='responsive'
            />
          </div>
          <div className='cta__content'>
            {/* <p className='cta__company'>American Travel Consulting</p> */}
            <h1 className='cta__title cta--newline'>
              {`TRAVEL EASIER\nTRAVEL STRESS-FREE\nLET US DO THE WORK`}
            </h1>
            <p className='cta__subtitle'>
              Enjoy your next student group trip from start to finish without a
              worry in the world
            </p>
            <Link href='/contact'>
              <a className='cta__link'>REQUEST A QUOTE</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='responsive-width section__header'>
          Popular Destinations
        </h2>
        <div className='responsive-width locationGrid'>
          {destinations.map(({ id, name, main, slug, mainalt }) => (
            <Location
              key={id}
              url={main.url}
              name={name}
              mainalt={mainalt}
              slug={slug}
            />
          ))}
        </div>
      </div>

      <div className='section section--testimonial'>
        <h2 className='responsive-width section__header'>Testimonials</h2>
        <div className='responsive-width testimonialGrid'>
          {testimonials.map(({ id, name, organization, position, quote }) => (
            <Testimonial
              key={id}
              quote={quote}
              name={name}
              position={position}
              organization={organization}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const query = gql`
    query MyQuery {
      destinations(orderBy: featuredsort_ASC, where: { featured: true }) {
        id
        name
        slug
        main {
          id
          url
        }
        mainalt
      }
      testimonials(orderBy: order_ASC) {
        id
        quote
        name
        organization
        order
      }
    }
  `;

  const data = await client.request(query);
  const { testimonials } = data;
  const { destinations } = data;

  return {
    props: {
      destinations: destinations,
      testimonials: testimonials,
    },
  };
};
