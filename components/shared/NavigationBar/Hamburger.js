import React, { useEffect } from 'react';

export default function Hamburger() {
  useEffect(() => {
    const button = document.getElementById('hamburger');
    button.addEventListener('click', () => {
      const burger = document.querySelector('.navbar__hamburger');
      const nav = document.querySelector('.navbar__items');
      // const links = document.querySelectorAll('.navbar__links');
      console.log('Clicked');

      burger.classList.toggle('menutoggle');
      nav.classList.toggle('open');
      // for (let index = 0; index < links.length; index++) {
      //   links[index].classList.toggle('linksToggle');
      // }
    });
  }, []);

  return (
    <>
      <section className='navbar__hamburger' id='hamburger'>
        <div className='navbar__hb1'></div>
        <div className='navbar__hb2'></div>
        <div className='navbar__hb3'></div>
      </section>
    </>
  );
}
