import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Site = ({ title, desciption, link, alt }) => {
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
        <p className='destinationscard__description'>{desciption}</p>
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
            desciption={`World-class restaurants, festive nightlife, professional sports teams, and an abundance of attractions and events help make Atlanta the center for entertainment in the South. Marvel at the Georgia Aquarium, and taste iconic flavors at the World of Coca-Cola.`}
            link='atlanta'
          />
          <Site
            title='Chicago, Illinois'
            desciption='Take a wonderful boat cruise through the heart of the city, see your reflection in “The Bean,” step outside one of the world’s tallest buildings. We’ve rounded up some of the city’s must-see sights, iconic attractions, and top tours to add to your itinerary.'
            link='chicago'
          />
          <Site
            title='Gatlinburg, Tennessee'
            desciption={`Within a short walk, you’ll find a world-class aquarium, mini golf and mountain coasters, museums and arcades, and countless other attractions for kids and adults alike, right on the Parkway. Fly over the trees in gondolas, chairlifts, or an tram car!`}
            link='gatlinburg'
          />
          <Site
            title='Los Angeles, California'
            desciption={`LA's cultural attractions are second to none, whether it’s the Space Shuttle Endeavour, Walt Disney Concert Hall, the Getty Center or art galleries and urban art. LA dining is acclaimed for Michelin-starred restaurants and multicultural neighborhoods alike.`}
            link='losangeles'
          />
          <Site
            title='New Orleans, Louisiana'
            desciption={`Whether this is your first time to New Orleans or you’re a seasoned visitor, the city’s invigorating spirit is sure to inspire, captivate and motivate you to jump in and see and do so much.  With so many options and many things to do all the time, narrowing the playing field can be a challenge.`}
            link='neworleans'
          />
          <Site
            title='New York City, New York'
            desciption={`New York is so big and so diverse a place that you could live here four lifetimes and not experience all the amazing things the city has to offer. Visit the many attractions such as the Statue of Libery, 9/11 Memorial, many museums, or even the incredible world famous Central Park.`}
            link='newyorkcity'
          />
          <Site
            title='Orlando, Florida'
            desciption='This central Florida region attracts around 60 million visitors every year, who come for the warm climate, the world-famous theme parks, the shopping malls, the golf courses and the nightlife. They come for the beaches too, as some of America’s finest are within easy reach.'
            link='orlando'
          />
          <Site
            title='Philadelphia, Pennsylvania'
            desciption={`Philadelphia’s museums and attractions are small and massive, historic and modern, interactive and exclusive, eccentric and unexpected. Renowned for its music scene, Philly’s vibrant rock, rap, jazz and pop venues located in neighborhoods across the city showcase the best musicians.`}
            link='philadelphia'
          />
          <Site
            title='San Antonio, Texas'
            desciption={`What’s old is new again in San Antonio. A city rich in history and booming with attractions, San Antonio invites visitors to be inspired and hungry. Walk, bike, hike, and play through our spectacular parks, gardens, and outdoor spaces. Experience the city through tours, festivals, and seasonal events.`}
            link='sanantonio'
          />
          <Site
            title='Washington D.C.'
            desciption={`Home of our nation's capitol this wonderful city is filled with history and attractions. Take sight of the White House or the US Capitol building where all of our nation's laws are passed. Walk the halls of free Smithsonian museums or sit back on a double-decker tour bus and soak up some history.`}
            link='washingtondc'
          />
        </div>
      </div>
    </>
  );
}
