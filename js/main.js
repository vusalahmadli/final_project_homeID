$(".first-slide").owlCarousel({
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
      nav: false,
      dots: true,
    },
    1000: {
      dots: true,
      items: 1,
      nav: true,
    },
    1200: {
      dots: true,
      items: 1,
      nav: false,
    },
    1400: {
      dots: false,
      items: 1,
      nav: true,
    },
    1800: {
      dots: false,
      items: 1,
      nav: true,
    },
    1900: {
      dots: false,
      items: 1,
      nav: true,
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
      items: 2,
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
