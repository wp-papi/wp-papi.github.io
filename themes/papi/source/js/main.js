// Redirect to the old documentation when selecting a old version.
document.querySelector('.version-select').addEventListener('change', function (e) {
  var version = e.target.value
  if (version.indexOf('3.') !== 0) {
    window.location.assign('https://wp-papi.github.io/docs-' + version + '/')
  }
});

hljs.initHighlightingOnLoad();
