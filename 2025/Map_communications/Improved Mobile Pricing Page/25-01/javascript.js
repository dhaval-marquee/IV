function pricingSliderMobile() {
    if (!jQuery('body').hasClass('slider_iv')) {
        jQuery('body').addClass('slider_iv');
        
        // Put your test code here
        // Slick Slide
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css">');
        jQuery.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
            jQuery('.pricing-chart-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                infinite: true,
                dots: true,
                arrows: true,
                centerMode: true,
                centerPadding: '60px',
                responsive: [
                    {
                    breakpoint: 575,
                        settings: {
                            centerPadding: '30px',
                        }
                    },
                ]
            });
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    var pricingSliderMobileInterval = setInterval(function() {
        if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
            clearInterval(pricingSliderMobileInterval);
            pricingSliderMobile();
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over