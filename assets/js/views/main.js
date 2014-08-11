(function(){

  'use strict';

  var responsiveMenu = {
    init: function () {
      this.menu();
    },
    menu: function (menuBtn, menu) {
      menuBtn = $(".menu-btn"),
      menu    = $(".nav--main");

      menuBtn.on("click", function (e) {
        e.preventDefault();
        menu.toggleClass('active');
      });
    }
  };

  $(function () {
    responsiveMenu.init();
  });

})();
