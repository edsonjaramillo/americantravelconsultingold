import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Site = ({ title, description, link, alt }) => {
  return (
    <>
      <div className='destinationscard'>
        <div className='destinationscard__imageWrapper'>
          <Image
            src={`/images/destinations/${link}.jpg`}
            height='400'
            width='800'
            layout='responsive'
            alt={alt}
            quality='5'
          />
        </div>
        <h2 className='destinationscard__title'>{title}</h2>
        <p className='destinationscard__description'>{description}</p>
        <Link href={`destinations/${link}`}>
          <a className='destinationscard__button'>More Details</a>
        </Link>
      </div>
    </>
  );
};
export default function Destinations() {
  return (
    <>
      <Head>
        <title>American Travel Consulting | Destinations</title>
      </Head>

      <div className='section'>
        <h2 className='responsive-width section__header'>Destinations</h2>
        <div className='responsive-width destinationsGrid'>
          <Site
            title='Atlanta, Georgia'
            description={`World-class restaurants, festive nightlife, professional sports teams, and an abundance of attractions and events help make Atlanta the center for entertainment in the South. Marvel at the Georgia Aquarium, and taste iconic flavors at the World of Coca-Cola.`}
            link='atlanta'
          />
          <Site
            title='Chicago, Illinois'
            description='Take a wonderful boat cruise through the heart of the city, see your reflection in “The Bean,” step outside one of the world’s tallest buildings. We’ve rounded up some of the city’s must-see sights, iconic attractions, and top tours to add to your itinerary.'
            link='chicago'
          />
          <Site
            title='Gatlinburg, Tennessee'
            description={`Within a short walk, you’ll find a world-class aquarium, mini golf and mountain coasters, museums and arcades, and countless other attractions for kids and adults alike, right on the Parkway. Fly over the trees in gondolas, chairlifts, or a tram car!`}
            link='gatlinburg'
          />
          <Site
            title='Los Angeles, California'
            description={`LA's cultural attractions are second to none, whether it’s the Space Shuttle Endeavour, Walt Disney Concert Hall, the Getty Center or art galleries and urban art. Show off your ensemble with a performance in Disneyland and Universal Studios Hollywood.`}
            link='losangeles'
          />
          <Site
            title='New Orleans, Louisiana'
            description={`Whether this is your first time to New Orleans or you’re a seasoned visitor, the city’s invigorating spirit will captivate your students. Take a Jazz dinner cruise on the Steamboat Natchez, visit the Audubon Aquarium, or take in the  Ghost and Spirits tour. With many performance options to choose from, New Orleans is sure to be a hit with your group.`}
            link='neworleans'
          />
          <Site
            title='New York City, New York'
            description={`New York is so big and so diverse a place that you could live here four lifetimes and not experience all the amazing things the city has to offer. Visit the many attractions such as the Statue of Liberty, 9/11 Memorial, many museums, or take in one of your favorite Broadway shows.`}
            link='newyorkcity'
          />
          <Site
            title='Orlando, Florida'
            description='The central Florida region attracts around 60 million visitors every year who come for the warm climate and world-famous theme parks.  With so many performance opportunities available for your group, you will love everything Orlando has to offer.'
            link='orlando'
          />
          <Site
            title='Philadelphia, Pennsylvania'
            description={`Philadelphia’s museums and attractions are small and massive, historic and modern, interactive and exclusive, eccentric and unexpected. As home to Independence Hall, the Liberty Bell, and the country’s oldest Thanksgiving Day Parade, your student group will love everything Philly has to offer.
            `}
            link='philadelphia'
          />
          <Site
            title='San Antonio, Texas'
            description={`What’s old is new again in San Antonio. A city rich in history and booming with attractions, such as Six Flags Fiesta Texas and Sea World, San Antonio is a student group’s playground. Visitors will love exploring the River Walk and performing in the Fiesta Flambeau Parade.`}
            link='sanantonio'
          />
          <Site
            title='Washington D.C.'
            description={`Home to our nation’s Capital this wonderful city is filled with museums, monuments, memorials and attractions sure to engage your student’s imagination.  With numerous performance opportunities available, Washington D.C. is the perfect travel destination for student groups of all ages.`}
            link='washingtondc'
          />
        </div>
      </div>
    </>
  );
}
