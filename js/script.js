// Initialize hamburger toggle fallback (if header included synchronously)
function initNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}

// Highlight current page in nav menu
function highlightCurrentNav() {
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href');
    // Compare href filename
    if (href === path || (href === 'index.html' && path === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize Swiper carousel
function initSwiper() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('#reviews-carousel', {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  }
}

// On DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  highlightCurrentNav();
  initSwiper();
});
