/// categories search page ///
$('.categories-slide').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2
            }
        },

    ],
});

//// People say Start ////
var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    //console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
        prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
    speed: 1000,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button> prev</button>',
    nextArrow: '<button> next</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
        return '';
    },
    /*infinite: false,*/
});

/// onboarding slider ///
$('.onboarding-slide').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,

});
/// E Commerce Banner slider ///
$('.e-banner-slider').slick({
    dots: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 430,
            settings: {
                centerPadding: '20px',
            }
        },
        {
            breakpoint: 366,
            settings: {
                centerPadding: '10px',
            }
        },
        {
            breakpoint: 337,
            settings: {
                centerMode: false,
                centerPadding: '0',
            }
        },

    ],

});
/// E Commerce Banner slider ///
$('.recent-view-slide').slick({
    dots: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 430,
            settings: {
                centerPadding: '20px',
            }
        },
        {
            breakpoint: 366,
            settings: {
                centerPadding: '10px',
            }
        },
        {
            breakpoint: 337,
            settings: {
                centerMode: false,
                centerPadding: '0',
            }
        },

    ],

});

/// E Product main Banner slider ///
$('.product-banner-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
});

/// Recently Viewed slider ///
$('.recently-v-slider').slick({
    dots: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 386,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});
/// Recently Viewed slider ///
$('.g-v-slider').slick({
    dots: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});


/// Grocery Banner slider ///
$('.grocery-slide ').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 440,
            settings: {
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 355,
            settings: {
                centerMode: false,
                centerPadding: '0',
            }
        },


    ],

});

/// Blog Home Banner slider ///
$('.blog-slider').slick({
    dots: false,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '50px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 370,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

/// Blog list style slider ///
$('.blog-detail-slide ').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 440,
            settings: {
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 355,
            settings: {
                centerMode: false,
                centerPadding: '0',
            }
        },


    ],

});