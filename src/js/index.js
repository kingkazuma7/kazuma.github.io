"use strict";
$(function () {
  $(window).scroll(function () {
    $(".animate > *").each(function () {
      var targetAnimate = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHieght = $(window).height();
      if (scroll > targetAnimate  windowHieght + 150) {
        $(this).addClass("moving");
      }
    });
  });
});
