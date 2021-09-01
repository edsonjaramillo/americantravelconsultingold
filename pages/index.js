import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Location, Testimonial } from '@/components/index';
import { GraphQLClient, gql } from 'graphql-request';
import { getPlaiceholder } from 'plaiceholder';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Home({
  asset,
  destinations,
  testimonials,
  blurhashes,
}) {
  return (
    <>
      <Head>
        <title>American Travel Consulting</title>
        <meta
          name='description'
          content='Specializing in student group travel, American Travel Consulting can customize the perfect trip for your group!  With decades of experience in student group travel, we look forward to working with you to plan your next band, choir, orchestra, or school group trip!'
        />
        <meta
          property='og:url'
          content='https://www.americantravelconsulting.com/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='American Travel Consulting' />
        <meta
          property='og:description'
          content='Specializing in student group travel, American Travel Consulting can customize the perfect trip for your group!  With decades of experience in student group travel, we look forward to working with you to plan your next band, choir, orchestra, or school group trip!'
        />
        <meta
          property='og:image'
          content='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:domain'
          content='americantravelconsulting.com'
        />
        <meta
          property='twitter:url'
          content='https://www.americantravelconsulting.com/'
        />
        <meta name='twitter:title' content='American Travel Consulting' />
        <meta
          name='twitter:description'
          content='Specializing in student group travel, American Travel Consulting can customize the perfect trip for your group!  With decades of experience in student group travel, we look forward to working with you to plan your next band, choir, orchestra, or school group trip!
'
        />
        <meta
          name='twitter:image'
          content='https://media.graphcms.com/s1jLe0UQqibjOvkDfNCj'
        />
      </Head>
      {/* <div className='cta'>
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
      </div> */}

      <header className='cta'>
        <div className='cta__grid responsive-width'>
          <div className='cta__info'>
            <h1 className='cta__title'>
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
          <div className='cta__image'>
            <Image
              src='/logo.png'
              height='794'
              width='1123'
              layout='responsive'
            />
          </div>
        </div>
      </header>
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
              blurhash={blurhashes[id]}
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
      asset(where: { id: "ckt0sv8ao7aup0c782lxrmkzg" }) {
        url
      }
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
  const { asset } = data;
  const { testimonials } = data;
  const { destinations } = data;
  let blurhashes = {};

  for (let index = 0; index < destinations.length; index++) {
    const { id, main } = destinations[index];
    const { base64: b64main } = await getPlaiceholder(main.url);

    blurhashes = {
      ...blurhashes,
      [id]: { b64main: b64main },
    };
  }

  return {
    props: {
      asset: asset,
      destinations: destinations,
      testimonials: testimonials,
      blurhashes: blurhashes,
    },
  };
};
