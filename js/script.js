const menubar = document.querySelector(".menubar-img");
const menuMultiply = document.querySelector(".menu-multiply-img");
const x = document.querySelector(".small-chatbox");
const bringBtn = document.querySelector(".bring-btn");
const bringImg0 = document.querySelector(".bring-img");
const bringImg1 = document.querySelector(".bring-img1");
const bringImg2 = document.querySelector(".bring-img2");
const floatingMsgCircle = document.querySelector(".floating-msg-circle");
const msgBox = document.querySelector(".msg-box");
const floatingXIcon = document.querySelector(".floating-x-icon");
const convIcon = document.querySelector(".conv-icon");
const meteorImg = document.querySelector(".why-hubble-meteor-img");
const meteorImg1 = document.querySelector(".meteor-img1");

AOS.init({
  duration: 1200,
});

window.addEventListener("load", function () {
  meteorImg1.style.top = "40px";
  meteorImg1.style.right = "100px";
  meteorImg.style.top = "20px";
  meteorImg.style.right = "100px";
});

bringBtn.addEventListener("mouseenter", function () {
  bringImg0.style.width = "500px";
  bringImg1.style.width = "900px";
  bringImg2.style.width = "1200px";
});
bringBtn.addEventListener("mouseout", function () {
  bringImg0.style.width = "600px";
  bringImg1.style.width = "1000px";
  bringImg2.style.width = "1400px";
});

x.addEventListener("click", function () {
  x.style.display = "none";
});

floatingMsgCircle.addEventListener("click", function () {
  msgBox.classList.toggle("d-none");
  floatingXIcon.classList.toggle("d-none");
  convIcon.classList.toggle("d-none");
});

menubar.addEventListener("click", function () {
  menubar.style.display = "none";
  menuMultiply.style.display = "block";
});
menuMultiply.addEventListener("click", function () {
  menuMultiply.style.display = "none";
  menubar.style.display = "block";
});

// slick slider
$(".customize-slider").on("init", function (event, slick) {
  var dots = $(".slick-dots li");
  // console.log(dots);
  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });
  var items = slick.$slides;
  items.each(function (k, v) {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      var text = $(this).find("h2").text();
      $(".heading" + k).text(text);
    }
  });
});
$(".customize-slider").slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 100,
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
    speed: 19000,
    autoplay: true,
    autoplaySpeed: 500,
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
