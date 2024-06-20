function toggle() {
  const navLinks = document.getElementById("navlinks");
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex-col");
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1440: {
      items: 3,
    },
    1600: {
      items: 3,
    },
  },
});
