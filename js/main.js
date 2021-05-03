$(".first-slide").owlCarousel({
  loop: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      dots: true,
      items: 1,
      nav: false,
    },
  },
});

$(".second").owlCarousel({
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
