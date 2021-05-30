import Head from 'next/head';
import Navbar from '@/components/shared/NavigationBar/Navbar';
import TripType from '@/components/home/TripType';

export default function Home() {
  return (
    <>
      <Head>
        <title>American Travel Company | Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main>
        <div className='section'>
          <h2 className='responsive-width section__header'>Trip Types</h2>
          <div className='responsive-width typeGrid'>
            <TripType filename='orchestra.svg' title='PERFORMANCE ARTS TOURS' />
            <TripType filename='group.svg' title='CORPORATE RETREATS' />
            <TripType filename='teamwork.svg' title='LARGE GROUP VACATIONS' />
            <TripType filename='sports.svg' title='ATHLETIC TEAM TOURS' />
            <TripType filename='student.svg' title='EDUCATIONAL TRIPS' />
            <TripType filename='family.svg' title='LARGE FAMILY RETREATS' />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
