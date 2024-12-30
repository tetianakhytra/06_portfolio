/** @format */

$(function () {
  $("#slides").slidesjs({
    width: 940,
    height: 528,
    navigation: {
      effect: "fade",
    },
    pagination: {
      effect: "fade",
    },
    effect: {
      fade: {
        speed: 1800,
      },
    },
    play: {
      effect: "fade",
      auto: true,
    },
  });
});
