var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  loop: true,
  speed: 500,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      a: console.log(320),
    },
    480: {
      slidesPerView: 2,
      a: console.log(480),
    },
    768: {
      slidesPerView: 3,
      a: console.log(768),
    },
    1024: {
      slidesPerView: 4,
      a: console.log(1024),
    },
    1300: {
      slidesPerView: 5,
      a: console.log(1300),
    },
  },
});
