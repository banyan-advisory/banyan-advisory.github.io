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
    menuContainer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
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

  menuContainer.addEventListener('click', function (event) {
    if (event.target === menuContainer) {
      setMenuState(false);
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function () {
      setMenuState(false);
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && menuContainer.classList.contains('open')) {
      setMenuState(false);
    }
  });
}

var sectorFilterButtons = document.querySelectorAll('[data-sector-filter]');
var transactionSections = document.querySelectorAll('.transaction-section[data-sector]');

if (sectorFilterButtons.length && transactionSections.length) {
  var getSectorHash = function (sector) {
    if (sector === 'technology') return '#sector-technology';
    if (sector === 'healthcare') return '#sector-healthcare';
    if (sector === 'other') return '#sector-other';
    return '#transactions-top';
  };

  var getSectorFromHash = function () {
    var hash = window.location.hash;
    if (hash === '#sector-technology') return 'technology';
    if (hash === '#sector-healthcare') return 'healthcare';
    if (hash === '#sector-other') return 'other';
    return 'all';
  };

  var setSectorFilter = function (sector) {
    for (var i = 0; i < sectorFilterButtons.length; i++) {
      var button = sectorFilterButtons[i];
      var isActive = button.getAttribute('data-sector-filter') === sector;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
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
      var selectedSector = this.getAttribute('data-sector-filter');
      setSectorFilter(selectedSector);
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, '', getSectorHash(selectedSector));
      }
    });
  }

  setSectorFilter(getSectorFromHash());
}
