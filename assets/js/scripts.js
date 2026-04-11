var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
  var mobileMenuLinks = menuContainer.querySelectorAll('a');

  var setMenuState = function (isOpen) {
    menuContainer.classList.toggle('open', isOpen);
    menuTrigger.classList.toggle('is-active', isOpen);
    body.classList.toggle('lock-scroll', isOpen);
    menuTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  menuTrigger.addEventListener('click', function () {
    setMenuState(!menuContainer.classList.contains('open'));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuContainer.classList.contains('open')) {
      setMenuState(false);
      menuTrigger.focus();
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function () {
      setMenuState(false);
    });
  }
}
