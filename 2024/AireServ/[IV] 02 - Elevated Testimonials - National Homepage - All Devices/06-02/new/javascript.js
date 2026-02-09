function loadTestCode() {
    if(!$('body').hasClass('elevatedSlide')) {
        $('body').addClass('elevatedSlide');

        $('.primary-hero-banner').after($('.testimonial-section'));
        $('.testimonial-section .row').addClass('slider_wrapper').before($('.testimonial-section .row > div').eq(0));
        $('.testimonial-section .row').after($('.testimonial-section .row > div:last-child'));
    
        // Slick Slide
        $('.slider_wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 9000,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,                      
                    }
                }
            ]
        });
    }
}
var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);