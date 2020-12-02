function sidebar() {

  const menuIconHamburger = document.querySelector('.header__hamburger'), 
      headerNavigation = document.querySelector('.header__navigation'),
      headerButtons = document.querySelector('.header__buttons'),    
      overlayBody = document.querySelector('.overlay-sidebar');


  function openSidebar() {
      menuIconHamburger.addEventListener('click', () => {
        menuIconHamburger.classList.toggle('change');          
        headerNavigation.classList.toggle('change-sidebar');   
        document.body.classList.toggle('scroll-body');
        overlayBody.classList.toggle('overlay-body');
        if (window.innerWidth <= 414) {
          addLoginButtons();
        }
      });
  }

  function closeSidebar() {
      headerNavigation.addEventListener('click', (event) => {
          let target = event.target;
          if ((target || target.classList.contains('header-link')) && (window.innerWidth <= 768)) {
            headerNavigation.classList.toggle('change-sidebar');
            menuIconHamburger.classList.toggle('change');
            document.body.classList.toggle('scroll-body');
            overlayBody.classList.toggle('overlay-body');           
            addLoginButtons();
          }          
      });  
  }

  function addLoginButtons() {
    headerButtons.classList.toggle('change-sidebar');        
  }

  openSidebar();
  closeSidebar();
}

module.exports = sidebar;