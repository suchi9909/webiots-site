(function ($) {
    "use strict";

    $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        speed: 300,
        centerPadding: '180px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '150px',

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '60px',

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',

                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px',

                }
            },

        ],
    });

})(jQuery);