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

