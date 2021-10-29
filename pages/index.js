import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Location, Testimonial } from '@/components/index';
import { GraphQLClient, gql } from 'graphql-request';
import { getPlaiceholder } from 'plaiceholder';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Home({ destinations, testimonials, blurhashes }) {
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
        <meta
          name='keywords'
          content='americantravelconsulting, american travel consulting'
        />
      </Head>
      <header className='cta'>
        <div className='cta__grid responsive-width'>
          <div className='cta__info'>
            <h1 className='cta__title'>
              TRAVEL EASIER
              <br />
              TRAVEL STRESS-FREE
              <br />
              LET US DO THE WORK
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
              layout='fill'
              objectFit='contain'
              quality='15'
              alt='american travel consulting logo'
            />
          </div>
        </div>
      </header>
      <div className='section'>
        <h2 className='responsive-width section__header'>
          Popular Destinations
        </h2>
        <div className='responsive-width locationGrid'>
          {destinations.map(({ id, name, main, slug, mainalt, blur }) => (
            <Location
              key={id}
              url={main.url}
              name={name}
              mainalt={mainalt}
              blur={blur}
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
      testimonials: testimonials,
    },
  };
};
