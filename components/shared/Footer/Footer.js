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
          <p className='footer__category'>{category}</p>
          {children}
        </div>
      </>
    );
  };

  return (
    <>
      <footer className='footer'>
        <div className='footer__grid responsive-width-footer'>
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
            <a
              className='footer__link'
              href='https://www.facebook.com/AmericanTravelConsulting/'>
              Facebook
            </a>
            <a
              className='footer__link'
              href='https://www.instagram.com/americantravelconsulting/'>
              Instagram
            </a>
          </FooterSection>
          <FooterSection category='Contact'>
            <a
              href='mailto:chris@americantravelconsulting.com'
              className='footer__link'>
              chris@americantravelconsulting.com
            </a>
            <a href='tel:2565720669' className='footer__link'>
              (256) 572-0669
            </a>
          </FooterSection>
        </div>
        <small className='responsive-width footer__copyright'>
          &copy; {getYear()}, American Travel Consulting LLC. All Rights
          Reserved.
        </small>
      </footer>
    </>
  );
};

export default Footer;
