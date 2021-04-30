$(".first-slide").owlCarousel({
  loop: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      dots: false,
      items: 1,
      nav: true,
    },
  },
});

$(".second-slider").owlCarousel({
  loop: false,
  dots: true,
  margin: 20,
  nav: false,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 4,
    },
    1800: {
      items: 4,
    },
    1900: {
      items: 4,
    },
  },
});
