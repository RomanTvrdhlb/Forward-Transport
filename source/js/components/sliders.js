import Swiper from "../vendor/swiper.js";
import vars from "../_vars.js";

document.addEventListener("DOMContentLoaded", function () {
  const { reviewsSliders, infoSliders, cookingSliders, parentSliders } = vars;

  reviewsSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-btn.next");
    const prevBtn = slider.querySelector(".swiper-btn.prev");

    const mainSwiper = new Swiper(container, {
      spaceBetween: 30,
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 2,
      speed: 1800,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: true,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 25,
        },
        450: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        576: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        870: {
          slidesPerView: 3,
          spaceBetween: 37,
        },
        1400: {
          spaceBetween: 47,
        },
        1800: {
          spaceBetween: 65,
        },
      },
    });
  });

  infoSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-button-next");
    const prevBtn = slider.querySelector(".swiper-button-prev");
    const pagination = slider.querySelector(".swiper-pagination");

    const slides = container.querySelectorAll(".swiper-slide");
    const isSingleSlide = slides.length === 1;

    const infoSwiper = new Swiper(container, {
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 1800,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: !isSingleSlide,
      autoplay: !isSingleSlide ? { delay: 3000 } : false,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  });

  cookingSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-button-next");
    const prevBtn = slider.querySelector(".swiper-button-prev");

    const slides = container.querySelectorAll(".swiper-slide");
    const isSingleSlide = slides.length === 1;

    const cookingSwiper = new Swiper(container, {
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 1800,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: !isSingleSlide,
      autoplay: !isSingleSlide ? { delay: 3000 } : false,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });
  });

  parentSliders &&
    parentSliders.forEach(function (parent) {
      const mainSwiper = parent.querySelector(".product-slider__main"),
        subSwiper = parent.querySelector(".sub-slider");

      const subSlider = new Swiper(subSwiper, {
        slidesPerView: 5,
        spaceBetween: 25,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical",

        breakpoints: {
          320: {
            direction: "horizontal",
          },
          576: {
            direction: "vertical",
          },
          768: {
            direction: "horizontal",
          },
          1024: {
            direction: "vertical",
          },
        },
      });

      const mainSlider = new Swiper(mainSwiper, {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 800,
        loop: true,
        centeredSlides: true,

        thumbs: {
          swiper: subSlider,
        },
      });
    });
});
