import Swiper from '../../node_modules/swiper/swiper-bundle';
import { Fancybox } from '@fancyapps/ui';

document.addEventListener('DOMContentLoaded', () => {
  require('./modules/main-nav');
  require('./modules/video');

  const searchFormToggle = document.querySelector('.header__search-btn');
  const searcForm = document.querySelector('.header__search');

  searchFormToggle.addEventListener('click', () => {
    let expanded = searchFormToggle.getAttribute('aria-expanded') === 'true';
    searchFormToggle.setAttribute('aria-expanded', !expanded);
    searcForm.classList.add('header__search--open');
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target == searcForm || searcForm.contains(target);
    // const its_btnMenu = target == btnMenu;
    const menu_is_active = searcForm.classList.contains('header__search--open');

    if (!itsMenu && menu_is_active) {
      searcForm.classList.remove('header__search--open');
    }
  });

  const eventsSwiper = new Swiper('.events__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  const souvenirsSwiper = new Swiper('.souvenirs__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  const textpageGallerySwiper = new Swiper('.textpage__gallery-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.textpage__gallery-slider-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.textpage__gallery-slider-next',
      prevEl: '.textpage__gallery-slider-prev',
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
  const textpageLargeSwiper = new Swiper('.textpage__large-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // If we need pagination
    pagination: {
      el: '.textpage__large-slider-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.textpage__large-slider-next',
      prevEl: '.textpage__large-slider-prev',
    },
  });

  const newsPageSlider = new Swiper('.news-page__slider--main', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.news-page__slider-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.news-page__slider-next',
      prevEl: '.news-page__slider-prev',
    },
  });

  const newsGallerySlider = new Swiper('.news-page__slider--gallery', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.news-page__slider-pagination',
      clickable: true,
    }, // Navigation arrows
    navigation: {
      nextEl: '.news-page__slider-next',
      prevEl: '.news-page__slider-prev',
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

  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, {
    overflow: true,
    // delay: 0.5,
    transition: 'cubic-bezier(0,0,0,1)',
    // maxTransition: 40,
  });
  var imageNoOverflow = document.getElementsByClassName(
    'thumbnail-no-overflow'
  );

  new simpleParallax(imageNoOverflow, {
    // overflow: true,
    // delay: 0.5,
    // transition: "cubic-bezier(0,0,0,1)",
    // maxTransition: 40,
  });

  const filterToggle = document.querySelector('.content__filter-toggle');
  const contentFilterList = document.querySelector('.content__filter-list');

  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      contentFilterList.classList.toggle('content__filter-list--open');
    });
  }

  Fancybox.defaults.ScrollLock = false;

  Fancybox.bind('[data-fancybox=gallery]', {
    groupAll: true, // Group all items
    // on: {
    //   ready: (fancybox) => {
    //     console.log(`fancybox #${fancybox.id} is ready!`);
    //   },
    // },
    Thumbs: {
      autoStart: false,
    },

    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    Carousel: {
      on: {
        change: (that) => {
          console.log('blaaa');
        },
      },
      Panzoom: {
        touch: false,
      },

      Navigation: {
        prevTpl: `<svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6674 9.64359C30.6674 9.35945 30.5545 9.08695 30.3536 8.88603C30.1526 8.68511 29.8801 8.57223 29.596 8.57223H4.3269L11.07 1.83124C11.1696 1.73163 11.2487 1.61337 11.3026 1.48322C11.3565 1.35308 11.3842 1.21358 11.3842 1.07271C11.3842 0.931843 11.3565 0.792351 11.3026 0.662204C11.2487 0.532056 11.1696 0.413801 11.07 0.31419C10.9704 0.21458 10.8522 0.135564 10.722 0.0816555C10.5919 0.0277466 10.4524 0 10.3115 0C10.1706 0 10.0312 0.0277466 9.901 0.0816555C9.77086 0.135564 9.6526 0.21458 9.55299 0.31419L0.982111 8.88507C0.882339 8.98459 0.803181 9.10282 0.74917 9.23298C0.69516 9.36314 0.667358 9.50267 0.667358 9.64359C0.667358 9.78451 0.69516 9.92405 0.74917 10.0542C0.803181 10.1844 0.882339 10.3026 0.982111 10.4021L9.55299 18.973C9.6526 19.0726 9.77086 19.1516 9.901 19.2055C10.0312 19.2594 10.1706 19.2872 10.3115 19.2872C10.4524 19.2872 10.5919 19.2594 10.722 19.2055C10.8522 19.1516 10.9704 19.0726 11.07 18.973C11.1696 18.8734 11.2487 18.7551 11.3026 18.625C11.3565 18.4948 11.3842 18.3553 11.3842 18.2145C11.3842 18.0736 11.3565 17.9341 11.3026 17.804C11.2487 17.6738 11.1696 17.5556 11.07 17.456L4.3269 10.715H29.596C29.8801 10.715 30.1526 10.6021 30.3536 10.4012C30.5545 10.2002 30.6674 9.92774 30.6674 9.64359Z" fill="#2E2E2E"/>
        </svg>
        `,
        nextTpl: `<svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.90735e-06 9.64359C-1.90735e-06 9.35945 0.112873 9.08695 0.313791 8.88603C0.514711 8.68511 0.787216 8.57223 1.07136 8.57223H26.3405L19.5973 1.83124C19.4977 1.73163 19.4187 1.61337 19.3648 1.48322C19.3109 1.35308 19.2831 1.21358 19.2831 1.07271C19.2831 0.931843 19.3109 0.792351 19.3648 0.662204C19.4187 0.532056 19.4977 0.413801 19.5973 0.31419C19.6969 0.21458 19.8152 0.135564 19.9453 0.0816555C20.0755 0.0277466 20.215 0 20.3558 0C20.4967 0 20.6362 0.0277466 20.7664 0.0816555C20.8965 0.135564 21.0148 0.21458 21.1144 0.31419L29.6852 8.88507C29.785 8.98459 29.8642 9.10282 29.9182 9.23298C29.9722 9.36314 30 9.50267 30 9.64359C30 9.78452 29.9722 9.92405 29.9182 10.0542C29.8642 10.1844 29.785 10.3026 29.6852 10.4021L21.1144 18.973C21.0148 19.0726 20.8965 19.1516 20.7664 19.2055C20.6362 19.2594 20.4967 19.2872 20.3558 19.2872C20.215 19.2872 20.0755 19.2594 19.9453 19.2055C19.8152 19.1516 19.6969 19.0726 19.5973 18.973C19.4977 18.8734 19.4187 18.7551 19.3648 18.625C19.3109 18.4948 19.2831 18.3553 19.2831 18.2145C19.2831 18.0736 19.3109 17.9341 19.3648 17.804C19.4187 17.6738 19.4977 17.5556 19.5973 17.456L26.3405 10.715H1.07136C0.787216 10.715 0.514711 10.6021 0.313791 10.4012C0.112873 10.2002 -1.90735e-06 9.92774 -1.90735e-06 9.64359Z" fill="#2E2E2E"/>
        </svg>`,
      },
    },

    Toolbar: false,
    closeButton: 'top',

    Image: {
      fit: 'contain',
      zoom: false,
      wheel: null,
    },

    template: {
      closeButton:
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.3756 10L0 18.3756L1.6244 20L10 11.6244L18.3756 20L20 18.3756L11.6244 10L20 1.6244L18.3756 0L10 8.3756L1.6244 0L0 1.6244L8.3756 10Z" fill="#414141"/></svg>',
    },

    hideScrollbar: true,

    on: {
      initLayout: (fancybox) => {
        const $mainPanel = document.createElement('div');
        $mainPanel.classList.add('fancybox__main-panel');

        const $closeBtn = document.createElement('button');
        $closeBtn.classList.add('close-btn');

        $closeBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.3756 10L0 18.3756L1.6244 20L10 11.6244L18.3756 20L20 18.3756L11.6244 10L20 1.6244L18.3756 0L10 8.3756L1.6244 0L0 1.6244L8.3756 10Z" fill="#414141"/></svg>
        `;

        $mainPanel.appendChild($closeBtn);
        $mainPanel.appendChild(fancybox.$carousel);

        fancybox.$backdrop.after($mainPanel);
      },
    },
  });
  Fancybox.defaults.Image = { zoom: false };
  Fancybox.defaults.ScrollLock = false;

  // Fancybox.getInstance().template({
  //   closeButton:
  //     '<div data-fancybox-close class="fancybox-close-small modal-close">Button</div>',
  // });

  // $('[data-fancybox="gallery"]').fancybox({

  //   fullScreen : false,
  //   slideShow  : false,
  //   autoSize : false,
  //   loop:true,
  //   touch : {
  //   vertical : false,
  //   horizontal : false
  //   },

  //   thumbs : {
  //   autoStart : true
  //   },

  //   onThumbsShow : function(instance, current) {
  //   instance.Thumbs.$grid.appendTo( instance.$refs.inner );
  //   },

  //   clickOutside : 'close',
  //   baseTpl :
  //   '<div class="fancybox-container qv-container" role="dialog" tabindex="-1">' +
  //   '<div class="fancybox-bg"></div>' +
  //   '<div class="fancybox-inner">' +
  //   '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
  //   '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
  //   '<button data-fancybox-close class="qv-close"></button>' +
  //   '<div data-fancybox-close class="qv-close"></div>' +
  //   '<div></div>' +
  //   '</div>' +
  //   '</div>',
  //   });

  const blindVersion = new isvek.Bvi({
    target: '.blind-version',
    fontSize: 24,
  });
});
