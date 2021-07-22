const swiperIntro = new Swiper('#swiper-intro', {
  loop: true,
  speed: 700,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next'
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },

  effect: 'cube'
});

export default swiperIntro;
