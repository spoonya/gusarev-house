const swiperIntro = new Swiper('#swiper-product', {
  loop: true,
  speed: 700,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  autoplay: {
    delay: 3000
  },

  effect: 'fade'
});

export default swiperIntro;
