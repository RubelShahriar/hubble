const menubar = document.querySelector(".menubar-img");
const menuMultiply = document.querySelector(".menu-multiply-img");

menubar.addEventListener("click", function () {
  menubar.style.display = "none";
  menuMultiply.style.display = "block";
});
menuMultiply.addEventListener("click", function () {
  menuMultiply.style.display = "none";
  menubar.style.display = "block";
});

// slick slider
$(".customize-slider").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// slick marquee
jQuery(document).ready(function ($) {
  $(".header-marquee").slick({
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
});
// slick marquee
jQuery(document).ready(function ($) {
  $(".slick.marquee").slick({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
});
