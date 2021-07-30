const swiperIntro = new Swiper('#swiper-about', {
  loop: true,
  speed: 700,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next'
  },

  autoplay: {
    delay: 3000
  },

  effect: 'fade'
});

export default swiperIntro;
