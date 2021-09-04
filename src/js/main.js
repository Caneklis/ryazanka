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
});
