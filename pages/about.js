import Head from 'next/head';
import { Children } from 'react';
export default function About() {
  const Person = ({ name, email, children }) => {
    return (
      <>
        <div className='person'>
          <h2 className='person__name person__child'>{name}</h2>
          <div className='person__info'>{children}</div>
          <a href={`mailto:${email}`} className='person__email person__child'>
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
        }}
      >
        About Us
      </h1>
      <div className='personGrid responsive-width'>
        <Person name='Chris Lindley' email='chris@americantravelconsulting.com'>
          <p className='person__child'>
            {
              'Chris Lindley became President of American Travel Consulting in January 2021.  He retired in July of 2021 after teaching band in the public schools of Alabama for twenty-five years, most of that time at Albertville High School.  During his career as a band director, he participated in the Macy*s Thanksgiving Day Parade (2007) in New York City, and led the Albertville Band in the Rose Parade (2011, 2018) in Pasadena, California, as well as many other parades in cities such as Chicago, Philadelphia, Gatlinburg, and Washington DC.  Through these experiences, Chris gained a unique insight into student travel planning, having participated in parades/performances across the country as a band director.     '
            }
          </p>
          <p className='person__child'>
            {
              'In 2018, Chris was the recipient of the Phi Beta Mu Bandmaster of the Year Award for Alabama.  In 2019, he directed the Alabama Bicentennial All-Star Band in the Alabama Bicentennial Parade and was inducted into the Jacksonville State University Alumni Hall of Fame through the School of Education in 2020.'
            }
          </p>
          <p className='person__quote person__child'>
            {
              '“We at American Travel Consulting pride ourselves on providing the best travel experience possible for your group.  Our team is comprised of retired music educators with decades of experience in group travel and we are ready to put that experience to work for you!”'
            }
          </p>
        </Person>
        <Person name='Stacy Goss' email='stacy@americantravelconsulting.com'>
          <p className='person__child'>
            {`Stacy Goss enjoyed a stellar twenty-nine year career in public music education as
              band director at Brooks High School (AL), Albertville High School (AL) and Carrollton Christian Academy (TX).  Stacy led the Albertville High School Band in the 1983, 1987, & 1992 Macy*s Thanksgiving Day Parades, and won multiple Grand Championships in festivals across the Southeast.  Stacy founded American Travel Consulting in 2013 after working in the travel industry upon retirement and built ATC into a successful group travel company trusted by directors/teachers across the southeast.`}
          </p>
          <p className='person__quote person__child'>
            {`“At American Travel Consulting, we care about your students, and our main goal is for them to have a great trip.  We know what real trip planning looks like because each member of our ATC team has years of experience in group travel.  We have done it all with our own bands and now we are enjoying sharing success with our fellow educators.”`}
          </p>
        </Person>
        <Person
          name='Curtis Burttram'
          email='curtis@americantravelconsulting.com'
        >
          <p className='person__child'>
            {`Curtis Burttram joined the American Travel team after an outstanding thirty-four year career as a band director in Alabama public schools, much of that time at Albertville High School.  Curtis led the Albertville High School Band in the 2007 Macy*s Thanksgiving Day Parade, and participated in the Hollywood Christmas Parade (CA), National Cherry Blossom Parade (Wash DC), and the Magnificent Mile Lights Festival Parade in Chicago.  In addition, Curtis’ bands have performed in the Fiesta Bowl Parade (AZ), the Fiesta Flambeau Parade (TX), and in Nassau, Bahamas.`}
          </p>
          <p className='person__quote person__child'>
            {`“We at ATC truly enjoy helping our clients plan the perfect trip.  We have worked with bands, choirs, and other school groups from fifty to five hundred.  Are you a middle school teacher looking for a great trip to Washington D.C. for your eighth-grade classes?  No problem!  Perhaps you are looking for insight into how to build your band’s resume to be considered for the national parades.  We at ATC can provide that unique perspective because each member of our team has done just that.  We are ready to take your group on its next adventure!”`}
          </p>
        </Person>
        <Person name='Ken Bodiford' email='ken@americantravelconsulting.com'>
          <p className='person__child'>
            {`Ken Bodiford has taught in the public schools of Virginia and Alabama for thirty years and is currently in his twenty-seventh year as Director of Bands at Jacksonville State University.  Ken led the JSU Marching Southerners in the 1996 Macy*s Thanksgiving Day Parade as well as performances in the Lord Mayor’s Parade in London, England, the World Peace Parade in Rome, Italy and has performed as part of the Commemoration of the 75th Anniversary of Pearl Harbor in Hawaii.  He joined the ATC team in 2018 and brings a wealth of knowledge in student travel planning to our clients.`}
          </p>
          <p className='person__child'>
            {`Ken is a 2019 inductee in the Jacksonville State University Alumni Hall of Fame through the School of Education.  He holds the Doctor of Musical Arts degree from the University of Alabama, as well as degrees from East Carolina University and Jacksonville State University.  Ken was selected as the 2016-2017 Director of the United States Army All-American Marching Band based in San Antonio, TX.`}
          </p>
          <p className='person__quote person__child'>
            {`“At ATC, student travel planning is our passion.  Having traveled extensively throughout our careers, our team understands just how important travel is to a student’s well-rounded education.  Travel provides students real world experiences not available from a textbook and offers learning opportunities on an enhanced level.  From elementary school groups headed to Atlanta for a weekend trip to marching bands flying to California for the Rose Parade, our team is ready to help plan your perfect trip!”`}
          </p>
        </Person>
      </div>
    </>
  );
}
