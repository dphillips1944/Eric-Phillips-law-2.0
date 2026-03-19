document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (event) => {
      const clickedInsideNav = navLinks.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        navLinks.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (typeof Swiper !== "undefined" && document.querySelector("#reviews-carousel")) {
    new Swiper("#reviews-carousel", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
});