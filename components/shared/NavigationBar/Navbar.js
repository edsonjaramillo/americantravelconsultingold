import { Hamburger } from '@/components/index';
import Link from 'next/link';

export default function Navbar() {
  const closeMenu = () => {
    const burger = document.querySelector('.navbar__hamburger');
    const nav = document.querySelector('.navbar__items');
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      burger.classList.remove('menutoggle');
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='responsive-width navbar__boundary'>
          <Hamburger />

          <Link href='/'>
            <a>
              {/* <img className='navbar__logo' src='images/lbplus.svg' alt='' /> */}
              <h6>LOGO</h6>
            </a>
          </Link>

          <div className='navbar__empty'></div>

          <div className='navbar__items'>
            <Link href='/'>
              <a className='navbar__links' onClick={closeMenu}>
                Home
              </a>
            </Link>
            <Link href='/destinations'>
              <a className='navbar__links' onClick={closeMenu}>
                Destinations
              </a>
            </Link>
            {/* <Link href='/payment'>
              <a className='navbar__links' onClick={closeMenu}>Payment</a>
            </Link>
            <Link href='/about'>
              <a className='navbar__links' onClick={closeMenu}>About</a>
            </Link> */}
            <Link href='/contact'>
              <a className='navbar__links' onClick={closeMenu}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
