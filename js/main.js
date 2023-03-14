var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Detect screen size and update swiper options
var mediaQuery = window.matchMedia('(max-width: 600px)');
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    swiper.params.slidesPerView = 1.5;
    swiper.update();
  } else {
    swiper.params.slidesPerView = 3.5;
    swiper.update();
  }
}
handleMediaQuery(mediaQuery); // Call once on page load
mediaQuery.addListener(handleMediaQuery); // Call on screen size change
