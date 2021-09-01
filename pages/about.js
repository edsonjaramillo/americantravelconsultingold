import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function About({ employees }) {
  const Person = ({ name, biography, quote, email }) => {
    return (
      <>
        <div className='person'>
          <h2 className='person__name'>{name}</h2>
          <div className='person__content'>
            <div className='person__bio'>{biography}</div>
            <div className='person__quote'>{quote}</div>
          </div>
          <a href={`mailto:${email}`} className='person__email'>
            {`Email ${name}`}
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>American Travel Consulting | About</title>
      </Head>
      <h1
        className='responsive-width'
        style={{
          fontWeight: 'bold',
          marginTop: '1rem',
          marginBottom: '1rem',
          fontSize: '2rem',
        }}>
        About Us
      </h1>
      <div className='personGrid responsive-width'>
        {employees.map(({ id, name, biography, quote, email }) => (
          <Person
            key={id}
            name={name}
            biography={biography}
            quote={quote}
            email={email}
            employees={email}
          />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const query = gql`
    query MyQuery {
      employees {
        id
        name
        biography
        quote
        email
      }
    }
  `;

  const { employees } = await client.request(query);

  return {
    props: {
      employees: employees,
    },
  };
};
