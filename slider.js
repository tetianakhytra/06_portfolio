/**
 * global $
 *
 * @format
 */

/*

 *** NOTE : i wasn't able to make this without (elzero web scholl) ***
 
 */

$(document).ready(function () {
  "use strict";

  // center the slider content on load

  $(".slider .slides .img .overlay").each(function () {
    $(this).css({ paddingTop: ($(window).height() - $(".text").height()) / 2 });
  });

  // center the slider content on resize

  $(window).resize(function () {
    $(".slider .slides .img .overlay").each(function () {
      $(this).css({ paddingTop: ($(window).height() - $(".text").height()) / 2 });
    });
  });

  // slider next button

  $(".fa-arrow-right").on("click", function () {
    $(".slider .slides.active").each(function () {
      // is this is not the last child , fade in the next slide

      if (!$(this).is(":last-child")) {
        $(this).fadeOut(1000, function () {
          $(this).removeClass("active").next().fadeIn(1000).addClass("active");
        });

        // if this is the last slide , go to the first slide
      } else {
        $(this)
          .removeClass("active")
          .fadeOut(1000, function () {
            $(".slider .slides").eq(0).fadeIn(1000).addClass("active");
          });
      }
    });
  });

  // slider previous button

  $(".fa-arrow-left").on("click", function () {
    $(".slider .slides.active").each(function () {
      // if is not the first slide , fade in the previous slides

      if (!$(this).is(":first-child")) {
        $(this).fadeOut(1000, function () {
          $(this).removeClass("active").prev().fadeIn(1000).addClass("active");
        });

        // if is the first slide , go to the last slide
      } else {
        $(this)
          .removeClass("active")
          .fadeOut(1000, function () {
            $(".slider .slides").eq(2).fadeIn(1000).addClass("active");
          });
      }
    });
  });
});
