import Swiper from "../../node_modules/swiper/swiper-bundle";

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-console
  console.log("DOM полностью загружен и разобран");
  require("./modules/main-nav");

  const searchFormToggle = document.querySelector(".header__search-btn");
  const searcForm = document.querySelector(".header__search");

  searchFormToggle.addEventListener("click", () => {
    let expanded = searchFormToggle.getAttribute("aria-expanded") === "true";
    searchFormToggle.setAttribute("aria-expanded", !expanded);
    searcForm.classList.add("header__search--open");
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const itsMenu = target == searcForm || searcForm.contains(target);
    // const its_btnMenu = target == btnMenu;
    const menu_is_active = searcForm.classList.contains("header__search--open");

    if (!itsMenu && menu_is_active) {
      searcForm.classList.remove("header__search--open");
    }
  });

  const eventsSwiper = new Swiper(".events__slider", {
    // Optional parameters
    slidesPerView: 1,
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
    slidesPerView: 1,
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

  const textpageGallerySwiper = new Swiper(".textpage__gallery-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".textpage__gallery-slider-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".textpage__gallery-slider-next",
      prevEl: ".textpage__gallery-slider-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
  const textpageLargeSwiper = new Swiper(".textpage__large-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // If we need pagination
    pagination: {
      el: ".textpage__large-slider-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".textpage__large-slider-next",
      prevEl: ".textpage__large-slider-prev",
    },
  });

  const newsPageSlider = new Swiper(".news-page__slider--main", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".news-page__slider-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".news-page__slider-next",
      prevEl: ".news-page__slider-prev",
    },
  });

  const newsGallerySlider = new Swiper(".news-page__slider--gallery", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".news-page__slider-pagination",
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: ".news-page__slider-next",
      prevEl: ".news-page__slider-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  var image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    overflow: true,
    // delay: 0.5,
    transition: "cubic-bezier(0,0,0,1)",
    // maxTransition: 40,
  });
  var imageNoOverflow = document.getElementsByClassName(
    "thumbnail-no-overflow"
  );

  new simpleParallax(imageNoOverflow, {
    // overflow: true,
    // delay: 0.5,
    // transition: "cubic-bezier(0,0,0,1)",
    // maxTransition: 40,
  });

  const filterToggle = document.querySelector(".content__filter-toggle");
  const contentFilterList = document.querySelector(".content__filter-list");

  if (filterToggle) {
    filterToggle.addEventListener("click", () => {
      contentFilterList.classList.toggle("content__filter-list--open");
    });
  }
});
