

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 15,
        nav: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        responsive: {
        0: {
        items: 2
    },
        600: {
        items: 3
    },
        1000: {
        items: 4
    }
      }
    });
  

    $('.select-right').click(function () {
        owl.trigger('owl.next.carousel');
    });

    $('.select-left').click(function () {
        owl.trigger('owl.prev.carousel');
    });
});




