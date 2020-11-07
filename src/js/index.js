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

  /*
  hum
  */
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

/*
  mail validate
  https://www.aizulab.com/blog/free-contact-form-service/
*/
// $(function () {
//   $("#myform").validate({
//     rules: {
//       name: {
//         required: "true", // 入力必須チェック
//         rangelength: [1, 50], // 最小１文字、最大５０文字
//       },
//       email: {
//         required: "*メールアドレスを入力してください", // 入力必須チェック
//         email: "*正しいメールアドレス形式で入力してください", // メールアドレス形式チェック
//       },
//       message: {
//         required: "*メッセージを入力してください", // 入力必須チェック
//       },
//     },
//   });
// });
