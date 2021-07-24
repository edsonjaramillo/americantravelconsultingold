import Link from 'next/link';

const Footer = () => {
  const getYear = () => {
    const d = new Date();
    const year = d.getFullYear();
    return year;
  };

  const FooterSection = ({ category, children }) => {
    return (
      <>
        <div className='footer__section'>
          <h2 className='footer__category'>{category}</h2>
          {children}
        </div>
      </>
    );
  };

  const SocialIcon = ({ name, link, path }) => {
    return (
      <Link href={link}>
        <a className='footer__sociallink'>
          <img
            className='footer__socialicon'
            src={`/images/social/${name}.svg`}
            alt={`${name} icon`}
          />
        </a>
      </Link>
    );
  };

  return (
    <>
      <footer className='footer'>
        <div className='footer__grid responsive-width'>
          <FooterSection category='Navigation'>
            <Link href='/destinations'>
              <a className='footer__link'>Destinations</a>
            </Link>
            <Link href='/payment'>
              <a className='footer__link'>Payment</a>
            </Link>
            <Link href='/about'>
              <a className='footer__link'>About</a>
            </Link>
            <Link href='/contact'>
              <a className='footer__link'>Contact</a>
            </Link>
          </FooterSection>

          <FooterSection category='Social'>
            <Link href='https://www.facebook.com/AmericanTravelConsulting/'>
              <a className='footer__link'>Facebook</a>
            </Link>
            <Link href='#'>
              <a className='footer__link'>Instagram</a>
            </Link>
          </FooterSection>
          <FooterSection category='Contact'>
            <a
              href='mailto:chris@americantravelconsulting.com'
              className='footer__link'
            >
              chris@americantravelcompany.com
            </a>
            <a href='tel:2565720669' className='footer__link'>
              (256) 572-0669
            </a>
          </FooterSection>
          {/* <FooterSection category='Company'>
            <Link href='/'>
              <a className='footer__link'>Pricing</a>
            </Link>
            <Link href='/'>
              <a className='footer__link'>Contact</a>
            </Link>
          </FooterSection> */}
        </div>
        {/* <div className='footer__socialgrid responsive-width'>
          <SocialIcon name='facebook' link='https://facebook.com' />
          <SocialIcon name='twitter' link='https://twitter.com' />
          <SocialIcon name='instagram' link='https://instagram.com' />
          <SocialIcon
            name='snapchat'
            link='https://snapchat
          .com'
          />
          <SocialIcon name='yelp' link='https://yelp.com' />
        </div> */}
        <small className='responsive-width footer__copyright'>
          &copy; {getYear()}, American Travel Consulting LLC. All Rghts
          Reserved.
        </small>
      </footer>
    </>
  );
};

export default Footer;
