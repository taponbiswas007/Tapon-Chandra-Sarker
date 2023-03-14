var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var mediaQuery1 = window.matchMedia("(max-width: 767px)");
var mediaQuery2 = window.matchMedia("(max-width: 600px)");

function updateSwiperOptions() {
  if (mediaQuery2.matches) {
    swiper.params.slidesPerView = 1.5;
  } else if (mediaQuery1.matches) {
    swiper.params.slidesPerView = 2.5;
  } else {
    swiper.params.slidesPerView = 3.5;
  }
  swiper.update();
}

// Call the function on page load and when the screen is resized
updateSwiperOptions();
window.addEventListener("resize", updateSwiperOptions);
