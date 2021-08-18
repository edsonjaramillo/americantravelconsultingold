import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { TripType, Location, Testimonial } from '@/components/index';

export default function Home() {
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

      {/* <div className='section'>
        <h2 className='responsive-width section__header'>Trip Types</h2>
        <div className='responsive-width typeGrid'>
          <TripType
            filename='orchestra.svg'
            title='PERFORMACE TOURS'
            altDescription='icon of a man orchestrating'
          />
          <TripType
            filename='group.svg'
            title='CORPORATE RETREATS'
            altDescription='icon of three people in buisness clothing'
          />
          <TripType
            filename='teamwork.svg'
            title='LARGE GROUP VACATIONS'
            altDescription='icon of three people in casual clothing'
          />
          <TripType
            filename='sports.svg'
            title='ATHLETIC TEAM TOURS'
            altDescription='icon with a basketball and football'
          />
          <TripType
            filename='student.svg'
            title='EDUCATIONAL TRIPS'
            altDescription='icon of three students in a blue uniform'
          />
          <TripType
            filename='family.svg'
            title='LARGE FAMILY RETREATS'
            altDescription='icon of a family'
          />
        </div>
      </div> */}
      <div className='section'>
        <h2 className='responsive-width section__header'>
          Popular Destinations
        </h2>
        <div className='responsive-width locationGrid'>
          <Location
            filename='orlando.jpg'
            place='Orlando, Florida'
            altDesciption='image of'
            link='orlando'
          />
          <Location
            filename='chicago.jpg'
            place='Chicago, Illinois'
            altDesciption='image of'
            link='chicago'
          />
          <Location
            filename='washingtondc.jpg'
            place='Washington D.C.'
            altDesciption='image of'
            link='washingtondc'
          />
          <Location
            filename='nyc.jpg'
            place='New York City, New York'
            altDesciption='image of'
            link='newyorkcity'
          />
          <Location
            filename='sanantonio.jpg'
            place='San Antonio, Texas'
            altDesciption='image of'
            link='sanantonio'
          />
          <Location
            filename='philadelphia.jpg'
            place='Philadelphia, Pennsylvania'
            altDesciption='image of'
            link='philadelphia'
          />
        </div>
      </div>

      <div className='section section--testimonial'>
        <h2 className='responsive-width section__header'>Testimonials</h2>
        <div className='responsive-width testimonialGrid'>
          <Testimonial
            quote='“We used American Travel Consulting, LLC for 2 different trips with our band. It was seamless and everything was taken care of. They anticipated any problems & took care of them for us with most of the members not even knowing there had been an issue. I highly recommend American Travel Consulting, LLC for your groups travel! Stacy, Chris, Ken & Curtis are top notch and have a great company, but more importantly they build relationships & help your group make memories for your students & families. You will not be disappointed if you choose this team for your travel plans!!”'
            name='Tiffany Rogers Martin'
            position='Booster President'
            organization='Guntersville High School Band'
          />
          <Testimonial
            quote='“I have been personally involved in 2 trips with American Travel Consulting to Philly and San Antonio - both have been amazing. My daughter also went to Macy’s with this group and had the best trip ever. We have a large band of over 350 kids and moving them is a major undertaking. Every detail of each trip was planned and executed flawlessly. As one of the band Dads that moves the equipment and uniforms, I’ve gotten to see the behind the scenes of what it takes to pull these trips off and these guys are amazing and get it done. Besides being the best professionals, Chris, Stacy, and Curtis are great guys I always look forward to seeing and spending some time with. My daughter has graduated but my son is a freshman in the band so can’t wait for the next great trip!!”'
            name='Dave Dagostino'
            position='Parent'
            organization='Gulf Coast High School Band'
          />
          <Testimonial
            quote='“I used American Travel for two different trips. The first was Pre-COVID and was absolutely seamless. Great customer service and care from beginning to end. The second was supposed to happen and then COVID hit and shut everything down. American Travel was outstanding to work with throughout the process and refunded money without any issues. I highly recommend using them for your travel needs.”	'
            name='Terry Ownby'
            position=''
            organization='Florence High School Band'
          />

          <Testimonial
            quote='“These folks are a band director’s “Dream Team” in organization. Our band went to NYC & Philly with them, and it was the best trip I have ever been on with my bands in 40 years of teaching. From preparation to scheduling & everything in between, we could not have asked for any better of an experience. My kids & parents still talk about what a great time it was. I was able to relax & enjoy myself because I knew they had it all covered. I am more than happy to share about our experience- contact me.”
            '
            name='David Bearden'
            position=''
            organization='Oneonta High School Band'
          />

          <Testimonial
            quote='“Great organization!! Highly recommend you let them take care of your group’s travel planning!”	'
            name='James Sewell'
            position=''
            organization='Bainbridge High School Band'
          />
        </div>
      </div>
    </>
  );
}
