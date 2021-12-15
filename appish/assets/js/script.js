/*=====================
   Ratio js  start
==========================*/
(function ($) {
    "use strict";
    // image to background
    $(".bg-top").parent().addClass('b-top'); // background postion top
    $(".bg-bottom").parent().addClass('b-bottom'); // background postion bottom
    $(".bg-center").parent().addClass('b-center'); // background postion center
    $(".bg-left").parent().addClass('b-left'); // background postion left
    $(".bg-right").parent().addClass('b-right'); // background postion right
    $(".bg_size_content").parent().addClass('b_size_content'); // background size content
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('blur-up lazyload');
    $('.bg-img').each(function () {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();


        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'display': 'block'
        });

        el.hide();
    });

    /*=====================
        03.  Header sidebar 
      ==========================*/
    $(".nav-bar").on('click', function () {
        $(".header-sidebar").addClass("show");
        $(".overlay-sidebar").addClass("show");
        $('body').css({
            'overflow': 'hidden'
        });
    });
    $(".user-panel").on('click', function () {
        $(".header-sidebar").removeClass("show");
        $(".overlay-sidebar").removeClass("show");
        $('body').css({
            'overflow': 'unset'
        });
    });
    $(".overlay-sidebar").on('click', function () {
        $(".header-sidebar").removeClass("show");
        $(".overlay-sidebar").removeClass("show");
        $('body').css({
            'overflow': 'auto'
        });
    });


    /*=====================
        Filter select js
    ==========================*/
    $('.filter-row li, .filter-color li, .size-select li').on('click', function (e) {
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    /*=====================
      Video Thumbnail E-product main Js 
    ==========================*/

    $('.play').on('click', function () {
        var youtubeTrigger = ' <iframe class="video-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" > </iframe>';
        $(".video-thumb").replaceWith(youtubeTrigger);
        $(".play").css("display", "none");

    });

    /*=====================
      Video Thumbnail Blog Home Js 
    ==========================*/

    $('.categories .play').on('click', function () {
        var youtubeTrigger = ' <iframe class="video-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" > </iframe>';
        $(".categories .video-thumb").replaceWith(youtubeTrigger);
        $(".categories .play").css("display", "none");

    });

    /*=====================
      Video Thumbnail Blog Detail page Js 
    ==========================*/

    $('.video-section .play').on('click', function () {
        var youtubeTrigger = ' <iframe class="video-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" > </iframe>';
        $(".video-section .video-thumb").replaceWith(youtubeTrigger);
        $(".video-section .play").css("display", "none");

    });

    /*=====================
     Heart Fill Js 
    ==========================*/
    $(".feather-heart").on('click', function () {
        $(this).toggleClass("fill")
    });

    /*=====================
     Bookmark Fill Js 
    ==========================*/
    $(".feather-bookmark").on('click', function () {
        $(this).toggleClass("fill")
    });

    /*=====================
     Address Select Js 
    ==========================*/
    $(".address-box").on('click', function () {
        $(".address-box").removeClass("active");
        $(this).addClass("active");
    });

    /*=====================
     Payment Card Select Js 
    ==========================*/
    $(".card-box").on('click', function () {
        $(".card-box").removeClass("active");
        $(this).addClass("active");
    });

    /*=====================
      Plus Minuse Item  Js 
    ==========================*/
    $('.add').on('click', function () {
        if ($(this).prev().val() < 10) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').on('click', function () {
        if ($(this).next().val() > 0) {
            if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    /*=====================
     Grocery Responsive menu
     ==========================*/
    $(".catagories-menu").on('click', function () {
        $('#myScrollspy').addClass("show");
        $('.overlay').addClass("show");
        $(".toggle .overlay, .list-group-item").on('click', function () {
            $('#myScrollspy').removeClass("show");
            $('.overlay').removeClass("show");
        });
    });

})(jQuery);

