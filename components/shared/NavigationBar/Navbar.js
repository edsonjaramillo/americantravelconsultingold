import { Hamburger } from '@/components/index';
import Link from 'next/link';
const pages = ['Home', 'Destinations', 'Payment', 'About', 'Contact'];

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='responsive-width navbar__boundary'>
          <Hamburger />

          <Link href='/'>
            <a>
              {/* <img className='navbar__logo' src='images/lbplus.svg' alt='' /> */}
              <h1>LOGO</h1>
            </a>
          </Link>

          <div className='navbar__empty'></div>

          <div className='navbar__items'>
            {pages.map((lnk) => (
              <Link
                key={lnk}
                href={`/${String(lnk === 'Home' ? '' : lnk).toLowerCase()}`}
              >
                <a className='navbar__links'>{lnk}</a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
