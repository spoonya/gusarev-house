const currentSlideIndex = document.querySelector('#swiper-intro-current');
const totalSlidesCount = document.querySelector('#swiper-intro-total');

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

  resizeObserver: true,

  preloadImages: false,
  lazy: true,

  effect: 'coverflow',

  on: {
    init() {
      currentSlideIndex.textContent = `0${this.realIndex + 1}`;
      totalSlidesCount.textContent = `0${this.slides.length - 2}`;
    },

    slideChange() {
      currentSlideIndex.textContent = `0${this.realIndex + 1}`;
    }
  }
});

export default swiperIntro;
