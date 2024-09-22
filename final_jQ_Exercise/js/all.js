$(document).ready(function () {
  //nav-item 下拉選單 dropdown-open
  $(".nav-item").click(function (e) {
    e.preventDefault();
    $(this).siblings().find(".dropdown-open").slideUp();
    $(this).find(".dropdown-open").slideToggle();
  });
  //swiper-----------------------------------------------
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
    },
    effect: "slide",
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //swiper-----------------------------------------------
  //lightbox---------------------------------------------
  $(".button").click(function (event) {
    $(".text").fadeToggle(1000);
    // fadeIn 預設隱藏的東西給打開
    // fadeOut 預設開啟的東西給關閉
  });

  // lightbox 效果
  lightbox.option({
    resizeDuration: 1000,
    wrapAround: true,
  });
  $(window).load(function () {
    $("#slider").nivoSlider();
  });
  //lightbox---------------------------------------------

  //----go to top-----------------------------------
  $(".top a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      3000
    );
  });
  //---------------------------------------------
});
