(function() {
  const menu = document.querySelector( '.menu' ),
        menuItems = document.querySelectorAll( '.menu__item' ),
        menuIcon = document.getElementById( 'menu__check' );
        

  menuIcon.addEventListener( 'click', showMenu );

  menuItems.forEach( (i) => {
    i.addEventListener( 'click', makeMenuItemActive  );
  });

  function showMenu() {
    menu.classList.toggle( 'menu--visible' );
  }

  function makeMenuItemActive(e) {

    makeMenuItemNoActive();
    e.target.classList.add('menu__item--active');
  }

  function makeMenuItemNoActive() {
    
    menuItems.forEach( (i) => {
      if ( i.classList.contains( 'menu__item--active' )) {
        i.classList.remove( 'menu__item--active' );
      }
    });
  }

}());