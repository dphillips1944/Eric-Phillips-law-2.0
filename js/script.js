const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('#reviews-carousel', {
  loop: true,
  slidesPerView: 1,         // ← only one slide visible
  centeredSlides: true,     // ← optional: centers the slide in the container
  spaceBetween: 20,         // ← keeps your gutter
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

});