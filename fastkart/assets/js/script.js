/*-----------------------------------------------------------------------------------

    Template Name:Appish APP
    Template URI: themes.pixelstrap.com/appish-app
    Description: This is PWA Html Template
    Author: Pixelstrap
    Author URL: https://themeforest.net/user/pixelstrap

----------------------------------------------------------------------------------- */
// 01.Manifest js
// 02.Pre Loader js 
// 03.Ratio js
// 04.Header Sidebar js
// 05.Filter Select js
// 06.Video Thumbnail 
// 07.Heart & Bookmark Fill Js
// 08.Address Select Js
// 09.Payment Card Select Js
// 10.Plus Minuse Item  Js
// 11.Grocery Responsive Menu
// 12.Toast Init js
// 13.Notification Init js
// 14.Swiper js


(function ($) {

    /*========================
      01. Manifest js
      ==========================*/

    // $(window).on('load', function () {
    //     'use strict';
    //     if ('serviceWorker' in navigator) {
    //         navigator.serviceWorker
    //             .register('sw.js');
    //     }
    // });

    /*=====================
     02. Pre Loader js 
     ==========================*/
    $(window).on('load', function () {
        setTimeout(function () {
            $('.pre-loader').fadeOut('slow');
        }, 500);
        $('.pre-loader').remove('slow');
    });


    /*=====================
      03. Ratio js
     ==========================*/
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
        04.  Header sidebar js
      ==========================*/
    $(".nav-bar").on('click', function () {
        $(".header-sidebar,.overlay-sidebar").addClass("show");
        $('body').addClass("bluer");
    });
    $(".user-panel, .overlay-sidebar ").on('click', function () {
        $(".header-sidebar,.overlay-sidebar").removeClass("show");
        $('body').removeClass("bluer");
    });

    /*=====================
      05. Filter select js
    ==========================*/
    $('.filter-row li').on('click', function (e) {
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    /*========================
       06. Address Active js
       =============================*/
    $('.address-box').on('click', function (e) {
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    /*=====================
     07. Plus Minus Item  Js 
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

    /*========================
    08. Catagories Mordent Menu js
    =============================*/
    $(".catagories-menu").on('click', function () {
        $('#myScrollspy,.overlay').addClass("show");
        $(".toggle .overlay, .list-group-item").on('click', function () {
            $('#myScrollspy,.overlay').removeClass("show");
        });
    });

    /*========================
    09. Filter Active js
    =============================*/
    $(".size").on('click', function () {
        $(".size").removeClass('active');
        $(this).addClass('active');
    });

    /*==============================
       10. Swipe To Show Delete cart page js
    =====================================*/
    $(".swipe-to-show").on("swipeleft", function () {
        $(this).addClass('active').siblings().removeClass("active")
    })
    $(".swipe-to-show").on("swiperight", function () {
        $(this).removeClass("active")
    })

})(jQuery);

