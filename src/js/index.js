"use-strict";

$(function () {
  $(window).scroll(function () {
    $(".animate > *").each(function () {
      var targetAnime = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetAnime - windowHeight + 200) {
        $(this).addClass("moving");
      }
    });
  });
});
