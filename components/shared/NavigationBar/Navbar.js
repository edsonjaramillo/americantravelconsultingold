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

          <Link href='/'>
            <a className='logowrapper'>
              <Image
                src='https://media.graphcms.com/iKlq3BmlS67bJPSeyO2Q'
                height='794'
                width='1123'
                layout='responsive'
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAvklEQVQImT2OvUrEQACEt/cJxAhB7kyy+eNiDAi+gT5CNm42AQmIpLzrrH0USwtLW18hnWVqA6cRi09zxJtmBuaDGYGxqByaY9QR8ZX4F9eH3EpB7aEjbkJ0zJPLe8qzfLUqtMS4gjL61mfbIuvvE7oVXNJnbGxUwIMtqDy0Q+H/3AUfLy7jBV1Cu0DFuw2VYUJKSeGwPvl6tD9bf1DZYNL9D0GdTETuk0uUO501p3P3Zh3MUBOOzXLO6vzPfgHMv1mmHVx3FgAAAABJRU5ErkJggg=='
                alt='american travel consulting logo'
                quality='25'
              />
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
