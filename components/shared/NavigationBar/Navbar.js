import { Hamburger } from '@/components/index';
import Link from 'next/link';
import Image from 'next/image';

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

          <div className='navbar__logogrid'>
            <Link href='/'>
              <a className='logowrapper'>
                <Image
                  src='/logo.png'
                  height='794'
                  width='1123'
                  layout='responsive'
                  alt='american travel consulting logo'
                  quality='25'
                />
              </a>
            </Link>
            <h1 className='navbar__companyname'>American Travel Consulting</h1>
          </div>

          <div className='navbar__empty'></div>

          <div className='navbar__items'>
            <Link href='/destinations'>
              <a className='navbar__links' onClick={closeMenu}>
                Destinations
              </a>
            </Link>
            <Link href='/payment'>
              <a className='navbar__links' onClick={closeMenu}>
                Payment
              </a>
            </Link>
            {/* <Link href='/about'>
              <a className='navbar__links' onClick={closeMenu}>About</a>
            </Link> */}
            <Link href='/about'>
              <a className='navbar__links' onClick={closeMenu}>
                About
              </a>
            </Link>
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
