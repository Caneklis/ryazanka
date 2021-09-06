import Swiper from "../../node_modules/swiper/swiper-bundle";

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-console
  console.log("DOM полностью загружен и разобран");
  require("./modules/main-nav");

  const eventsSwiper = new Swiper(".events__slider", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  const souvenirsSwiper = new Swiper(".souvenirs__slider", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  var image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    overflow: false,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
    // maxTransition: 60,
  });

  // // Parallax effect
  // // Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

  // // Update : added throttle to increase performance
  // window.addEventListener("scroll", throttle(parallax, 14));

  // function throttle(fn, wait) {
  //   var time = Date.now();
  //   return function () {
  //     if (time + wait - Date.now() < 0) {
  //       fn();
  //       time = Date.now();
  //     }
  //   };
  // }

  // function parallax() {
  //   var scrolled = window.pageYOffset;
  //   var parallax = document.querySelector(".parallax");
  //   // You can adjust the 0.4 to change the speed
  //   var coords = scrolled * 0.4 + "px";
  //   parallax.style.transform = "translateY(" + coords + ")";
  // }
});
