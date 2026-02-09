function loadTestCode() {
    if (!jQuery('body').hasClass('slider_iv')) {
        jQuery('body').addClass('slider_iv');

        // Put your test code here
        jQuery('.js-secondary-carousel').slick('unslick');
        jQuery('.js-secondary-carousel').each(function() {
            jQuery(this).find('> div').slice(1, 5).remove();
        });
        jQuery('.js-secondary-carousel[data-vertical] + .js-carousel-icons-control').removeClass('d-nmd-block');
        jQuery('.js-secondary-carousel:not([data-vertical]) + .js-carousel-icons-control').addClass('d-none');

        jQuery('.js-secondary-carousel[data-vertical]').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            lazyLoad: "progressive",
            responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }],
            shouldUseCustomVoicing: true,
            isDynamicVoicing: true,
        });

        jQuery('.js-secondary-carousel:not([data-vertical])').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
            lazyLoad: "progressive",
            responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }],
            shouldUseCustomVoicing: true,
            isDynamicVoicing: true,
        });

        jQuery('.js-primary-carousel').slick('unslick');
        jQuery('.js-primary-carousel > div').slice(1, 5).remove();
        jQuery('.js-primary-carousel').slick({
            adaptiveHeight: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            swipe: false,
            fade: true,
            infinite: true,
            lazyLoad: "progressive",
            responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, swipe: true, fade: false } }],
        });

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);