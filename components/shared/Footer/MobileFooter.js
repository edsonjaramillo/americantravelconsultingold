import { useState } from 'react';

const MobileFooter = () => {
  const [firstFooter, setFirstFooter] = useState('+');
  const [secondFooter, setSecondFooter] = useState('+');

  const openContainer = (target) => {
    const footerNumber = String(target).replace('menutoggle', '');
    const items = document.querySelectorAll(
      `.mobilefooter_tab${footerNumber}item`
    );
    const content = document.querySelector(`#content${footerNumber}`);
    const list = document.querySelector(`#list${footerNumber}`);

    if (content.classList.contains('expand-content')) {
      // verticalLine.classList.remove('expand');
      content.classList.remove('expand-content');
      list.classList.remove('expand-list');
    } else {
      content.classList.add('expand-content');
      list.classList.add('expand-list');
    }

    for (let index = 0; index < items.length; index++) {
      if (items[index].classList.contains('expand')) {
        items[index].classList.remove('expand');
      } else {
        items[index].classList.add('expand');
      }
    }

    window.scroll(0, document.body.scrollHeight);
  };

  return (
    <>
      <footer className='mobilefooter'>
        <div className='responsive-width mobilefooter__containerList' id='tab1'>
          <div className='mobilefooter__containerTab'>
            <h1 className='mobilefooter__containerHeader'>Navigation</h1>
            <div
              className='mobilefooter__icon'
              title='menutoggle1'
              onClick={(e) => {
                openContainer(e.target.title);
                if (firstFooter === '+') {
                  setFirstFooter('-');
                } else {
                  setFirstFooter('+');
                }
              }}>
              {firstFooter}
            </div>
          </div>
          <div className='mobilefooter__content' id='content1'>
            <ul className='mobilefooter__list' id='list1'>
              <li className='mobilefooter__item mobilefooter_tab1item'>Home</li>
              <li className='mobilefooter__item mobilefooter_tab1item'>
                Destinations
              </li>
              <li className='mobilefooter__item mobilefooter_tab1item'>
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className='responsive-width mobilefooter__containerList' id='tab2'>
          <div className='mobilefooter__containerTab'>
            <h1 className='mobilefooter__containerHeader'>Contact</h1>
            <div
              className='mobilefooter__icon'
              title='menutoggle2'
              onClick={(e) => {
                openContainer(e.target.title);
                if (secondFooter === '+') {
                  setSecondFooter('-');
                } else {
                  setSecondFooter('+');
                }
              }}>
              {secondFooter}
            </div>
          </div>
          <div className='mobilefooter__content' id='content2'>
            <ul className='mobilefooter__list' id='list2'>
              <li className='mobilefooter__item mobilefooter_tab2item'>
                Email
              </li>
              <li className='mobilefooter__item mobilefooter_tab2item'>
                Phone
              </li>
              <li className='mobilefooter__item mobilefooter_tab2item'>
                PO BOX
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
