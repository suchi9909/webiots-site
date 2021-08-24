/*=====================
    Loader js 
==========================*/
$(window).on('load', function() {
  setTimeout(function() {
      $('.loader').fadeOut('slow');
  }, 500);
  $('.loader').remove('slow');
});


/*=====================
    Slick slider js 
==========================*/
$('.vertical-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  autoplaySpeed: 3500,
  arrows: false
});


$('.slide-5').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slide-3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slide-3',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

/*=====================
 Image to background js
 ==========================*/
$(".bg-top").parent().addClass('b-top');
$(".bg-bottom").parent().addClass('b-bottom');
$(".bg-center").parent().addClass('b-center');
$(".bg_size_content").parent().addClass('b_size_content');
$(".bg-img").parent().addClass('bg-size');
$(".bg-img.blur-up").parent().addClass('blur-up lazyload');

jQuery('.bg-img').each(function () {

  var el = $(this),
    src = el.attr('src'),
    parent = el.parent();

  parent.css({
    'background-image': 'url(' + src + ')',
    'background-size': 'cover',
    'background-position': 'center',
    'display': 'block'
  });

  el.hide();
});


/*=====================
 Sticky Scroll js
 ==========================*/
$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


/*=====================
 Swiper js
 ==========================*/
//  var swiper = new Swiper('.swiper-screenshots-container-1', {
//   effect: 'coverflow',
//   grabCursor: true,
//   initialSlide: 2,
//   centeredSlides: true,
//   loop: true,
//   spaceBetween: 0,
//   slidesPerView: 2,
//   pagination: false,
//   coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 1.43,
//       slideShadows: false,
//   },
//   autoplay: {
//       delay: 5000,
//   },
//   breakpoints: {
//       360: {
//           slidesPerView: 1,
//           coverflowEffect: {
//               depth: 50,
//               modifier: 0,
//           },
//       },
//       640: {
//           slidesPerView: 3,
//           coverflowEffect: {
//               depth: 80,
//               modifier: 0,
//           },
//       }
//   }
// });
