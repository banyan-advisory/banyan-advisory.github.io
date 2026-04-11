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

var sectorFilterButtons = document.querySelectorAll('[data-sector-filter]');
var transactionSections = document.querySelectorAll('.transaction-section[data-sector]');

if (sectorFilterButtons.length && transactionSections.length) {
  var setSectorFilter = function (sector) {
    for (var i = 0; i < sectorFilterButtons.length; i++) {
      var button = sectorFilterButtons[i];
      var isActive = button.getAttribute('data-sector-filter') === sector;
      button.classList.toggle('is-active', isActive);
    }

    for (var j = 0; j < transactionSections.length; j++) {
      var section = transactionSections[j];
      var matchesSector = section.getAttribute('data-sector') === sector;
      var shouldShow = sector === 'all' || matchesSector;
      section.style.display = shouldShow ? '' : 'none';
    }
  };

  for (var k = 0; k < sectorFilterButtons.length; k++) {
    sectorFilterButtons[k].addEventListener('click', function () {
      setSectorFilter(this.getAttribute('data-sector-filter'));
    });
  }
}
