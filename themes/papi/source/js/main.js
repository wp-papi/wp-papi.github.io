// Redirect to the old documentation when selecting a old version.
if (document.querySelector('.version-select')) {
  document.querySelector('.version-select').addEventListener('change', function(e) {
    var version = e.target.value
    if (version.indexOf('3.') !== 0) {
      window.location.assign('https://wp-papi.github.io/docs-' + version + '/')
    }
  });
}

// Main mobile navigation.
var mobileMenu = document.querySelector('#js-centered-navigation-menu');
var mobileToggle = document.querySelector('#js-centered-navigation-mobile-menu');

mobileToggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (mobileMenu.className.indexOf(' show') !== -1) {
    mobileMenu.className = mobileMenu.className.replace('show', '');
  } else {
    mobileMenu.className += ' show';
  }
});

mobileToggle.dispatchEvent(new Event('click'));

// Initialize highlight.js
hljs.initHighlightingOnLoad();

// Sidebar menu navigation.
var sidebarMenu = document.querySelector('.sidebar .menu-root');

if (sidebarMenu) {
  var pathname = window.location.pathname.replace('.html', '');
  var childs = sidebarMenu.querySelectorAll('li ul');

  for (var i = 0, l = childs.length; i < l; i++) {
    var href = childs[i].parentElement.querySelector('a').href;

    if (href.indexOf(pathname) === -1) {
      var links = childs[i].getElementsByTagName('a');
      var found = false;

      for (var j = 0, k = links.length; j < k; j++) {
        if (links[j].href.indexOf(pathname) !== -1) {
          found = true;
          break;
        }
      }

      if (!found) {
        childs[i].className += ' hide';
      }
    } else if (pathname === '/docs/') {
      childs[i].className += ' hide';
    }
  }
}
