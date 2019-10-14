(function ($) {
    "use strict";

    //preloader js
    $(window).on('load', function () {
        $("#status").delay(1000).fadeOut();
        $("#preloader").delay(1000).fadeOut("slow");
    });

    //countdown js
    $('#countdown').dsCountDown({
        endDate: new Date("july 10, 2020 23:59:00"),
        theme: 'flat'
    });

    //about js
    $("#about").animatedModal();

    //contact js
    $("#contact").animatedModal({
        modalTarget: 'modal-02',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: 'rgba(0, 0, 0, 0.95)',
        // Callbacks
        beforeOpen: function () {
            console.log("The animation was called");
        },
        afterOpen: function () {
            console.log("The animation is completed");
        },
        beforeClose: function () {
            console.log("The animation was called");
        },
        afterClose: function () {
            console.log("The animation is completed");
        }
    });

    /* ripple js */
    $('.site_wraper').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });
    
    

}(jQuery));
