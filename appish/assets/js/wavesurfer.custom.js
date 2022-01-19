(function ($) {
    "use strict";
    ///// wave audio player /////
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        barHeight: 3,
        height: 35,
        width: "100%",
        hideScrollbar: true,
        responsive: true,
        plugins: [
            WaveSurfer.regions.create({}),

        ]

    });
    wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

    /// controlls //
    $('.controls .play').on('click', function () {
        $('.play-m').toggle(function () {
            $(".play-m").css("display", "none");
        }, function () {
            $(".pause-m").css("display", "inline-block");
        });
        $('.pause-m').toggle(function () {
            $(".pause-m").css("display", "none");
        }, function () {
            $(".play").css("display", "block")
        });

        var action = $(this).data('action');
        console.log(action);
        switch (action) {
            case 'play':
                wavesurfer.playPause();
                break;
            case 'back':
                wavesurfer.skipBackward();
                break;
            case 'forward':
                wavesurfer.skipForward();
                break;
            case 'mute':
                wavesurfer.toggleMute();
                break;
        }
    });
})(jQuery);
