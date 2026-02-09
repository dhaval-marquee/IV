jQuery('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');

function loadTestCode() {
    if (!jQuery('body').hasClass('relatedSpeaker')) {
        jQuery('body').addClass('relatedSpeaker');
        
        // Put your test code here
        jQuery('.quote-marks').after(jQuery('#social'));
        jQuery('#speakerprofile #social .similarspeakers .photos .inner .extra').removeClass('extra');

        jQuery.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () {
            jQuery('#speakerprofile #social .similarspeakers .photos .inner').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                autoplay: true,
                dots: true,
                speed: 300,
            });
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);