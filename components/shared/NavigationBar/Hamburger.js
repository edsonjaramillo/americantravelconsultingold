import React from 'react';

export default function Hamburger() {
  const openMenu = () => {
    const button = document.getElementById('hamburger');
    const burger = document.querySelector('.navbar__hamburger');
    const nav = document.querySelector('.navbar__items');
    burger.classList.toggle('menutoggle');
    nav.classList.toggle('open');
  };

  return (
    <>
      <div className='navbar__hamburger' id='hamburger' onClick={openMenu}>
        <div className='navbar__hb1'></div>
        <div className='navbar__hb2'></div>
        <div className='navbar__hb3'></div>
      </div>
    </>
  );
}
