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
