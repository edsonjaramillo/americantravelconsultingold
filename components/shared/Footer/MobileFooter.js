const MobileFooter = () => {
  function openContainer(target) {
    const footerNumber = String(target).replace('menutoggle', '');
    const verticalLine = document.querySelector(`#verticalLine${footerNumber}`);
    const items = document.querySelectorAll(
      `.mobilefooter_tab${footerNumber}item`
    );
    const content = document.querySelector(`#content${footerNumber}`);
    const list = document.querySelector(`#list${footerNumber}`);

    if (verticalLine.classList.contains('expand')) {
      verticalLine.classList.remove('expand');
      content.classList.remove('expand-content');
      list.classList.remove('expand-list');
    } else {
      verticalLine.classList.add('expand');
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
  }

  return (
    <>
      <div className='mobilefooter'>
        <div className='responsive-width mobilefooter__containerList' id='tab1'>
          <div className='mobilefooter__containerTab'>
            <h1 className='mobilefooter__containerHeader'>Navigation</h1>
            <div
              className='mobilefooter__symbol'
              title='menutoggle1'
              onClick={(e) => openContainer(e.target.title)}>
              <div className='mobilefooter__bg'></div>
              <div className='mobilefooter__vertical' id='verticalLine1'></div>
              <div className='mobilefooter__horizontal'></div>
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
              className='mobilefooter__symbol'
              title='menutoggle2'
              onClick={(e) => openContainer(e.target.title)}>
              <div className='mobilefooter__vertical' id='verticalLine2'></div>
              <div className='mobilefooter__horizontal'></div>
            </div>
          </div>
          <div className='mobilefooter__content' id='content2'>
            <ul className='mobilefooter__list' id='list2'>
              <li className='mobilefooter__item mobilefooter_tab2item'>Home</li>
              <li className='mobilefooter__item mobilefooter_tab2item'>
                Destinations
              </li>
              <li className='mobilefooter__item mobilefooter_tab2item'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
