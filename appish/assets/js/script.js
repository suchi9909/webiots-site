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
    $(".user-panel, .overlay-sidebar ").on('click', function () {
        $(".header-sidebar").removeClass("show");
        $(".overlay-sidebar").removeClass("show");
        $('body').css({
            'overflow': 'unset'
        });
    });


    /*=====================
        Filter select js
    ==========================*/
    $('.filter-row li, .filter-color li, .size-select li').on('click', function (e) {
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    /*=====================
      Video Thumbnail 
    ==========================*/
    $('.play').on('click', function () {
        $(".video-iframe").css("display", "block");
        $(".video-thumb").css("display", "none");
        $(".play").css("display", "none");
    });


    /*=====================
     Heart &  Bookmark  Fill Js 
    ==========================*/
    $(".feather-heart, .feather-bookmark").on('click', function () {
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

    /*=====================
     Toast Init
     ==========================*/
    /// Self Closing ///
    function showHideSelf(click, show) {
        click.on("click", function () {
            if ($('.toast').hasClass("show")) {
                $('.toast').removeClass('show');
            }
            show.addClass('show');
            setTimeout(function () {
                $(show).removeClass('show');
            }, 2000)

        });
    }
    showHideSelf($(".toast-success-btn"), $(".toast-success"));
    showHideSelf($(".toast-progress-btn"), $(".toast-progress"));
    showHideSelf($(".toast-info-btn"), $(".toast-info"));
    showHideSelf($(".toast-warning-btn"), $(".toast-warning"));
    showHideSelf($(".toast-danger-btn"), $(".toast-danger"));

    ///  Closing Btn ///
    function showhide(clClick, clShow) {
        clClick.on("click", function () {
            if ($('.toast').hasClass("show")) {
                $('.toast').removeClass('show');
            }
            clShow.addClass('show');
            $(".toast-close").on("click", function () {
                $(clShow).removeClass('show');
            })
        });
    }
    showhide($(".toast-success-cl-btn"), $(".toast-cl-success"));
    showhide($(".toast-progress-cl-btn"), $(".toast-cl-progress"));
    showhide($(".toast-info-cl-btn"), $(".toast-cl-info"));
    showhide($(".toast-warning-cl-btn"), $(".toast-cl-warning"));
    showhide($(".toast-danger-cl-btn"), $(".toast-cl-danger"));

    /*=====================
     Notification Init
     ==========================*/
    function notification(click, show) {
        click.on("click", function () {
            if ($(".notification").hasClass("show")) {
                $(".notification").removeClass('show');
            }
            show.addClass('show');
            setTimeout(function () {
                $(show).removeClass('show');
            }, 2000)

        });

    }
    notification($(".notifi-btn"), $(".notifi-default"));
    notification($(".notifi-a1-btn"), $(".notifi-a1"));
    notification($(".notifi-a2-btn"), $(".notifi-a2"));
    notification($(".notifi-news-btn"), $(".notifi-news"));
    notification($(".notifi-call-btn"), $(".notifi-call"));
    /*=====================
       Swiper js
    ==========================*/
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {

            } else {
                /* right swipe */
            }
        } else {
            if (yDiff > 0) {
                /* swipe up */
            } else {
                $(".offcanvas").removeClass("show")
                $(".modal-backdrop").removeClass("show")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

})(jQuery);

