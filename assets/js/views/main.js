(function(){

  'use strict';

  var currentState = {
    init: function () {
      this.starter();
    },
    starter: function () {
      var currentPage = $('body').data('current-page');
      if (currentPage) {
        $('.nav a[data-page-id="' + currentPage + '"]').addClass('active');
      }
    }
  };

  var responsiveMenu = {
    init: function () {
      this.menu();
    },
    menu: function (menuBtn, menu) {
      menuBtn = $('.menu-btn'),
      menu    = $('.nav--main');

      menuBtn.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('active');
      });
    }
  };

  $(function () {
    currentState.init();
    responsiveMenu.init();
  });

})();
