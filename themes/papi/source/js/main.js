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

// Community properties search
var communityProperties = document.querySelector('.community-properties');

if (communityProperties) {
  var search = communityProperties.querySelector('#search');

  search.addEventListener('keyup', function(e) {
    e.preventDefault();

    var value = this.value.toLowerCase();
    var list = this.parentElement.querySelectorAll('ul li');

    for(var i = 0, l = list.length; i < l; i++) {
      var keywords = list[i].getAttribute('data-keywords');
      keywords = keywords === null ? '' : keywords;
      var title = list[i].querySelector('h4');
      title = typeof title === 'undefined' ? '' : title.innerText;

      if (title.toLowerCase().indexOf(value) !== -1 || keywords.toLowerCase().indexOf(value) !== -1) {
        list[i].className = '';
      } else if (list[i].className.indexOf('hide') === -1) {
        list[i].className += ' hide';
      } else if (value === '' && list[i].className.indexOf('hide') !== -1) {
        list[i].className = '';
      }
    }
  });
}
