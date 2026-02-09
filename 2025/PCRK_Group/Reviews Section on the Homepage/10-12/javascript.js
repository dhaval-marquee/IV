function loadTestCode() {
    if (!jQuery('body').hasClass('iv-ReviewsSection')) {
        jQuery('body').addClass('iv-ReviewsSection');

        var contentPage = "https://pcrkgroup.com/life-at-pcrk/";

        jQuery.get(contentPage, function (response) {

            var $html = jQuery(response);
            var $testimonialSection = $html.find('.section:has(.testimonials)').first();

            if ($testimonialSection.length && !jQuery('.section-benefits').next().is($testimonialSection)) {
                jQuery('.section-benefits').before($testimonialSection);
                $testimonialSection.addClass('testimonial-Section');
                    jQuery('.testimonials').after(`<div class="gb-container gb-container-469c1fb5">
                    <a class="gb-button gb-button-b0ca3310 gb-button-text" href="https://recruiting.paylocity.com/recruiting/jobs/All/82c2cc31-fe87-4023-ac2b-e0967073cc6b/PCRK-Group" target="_blank" rel="noopener noreferrer">View Open Positions</a>
                    </div>`);

                // ✅ init slick AFTER insert
                var $slider = jQuery('.slick-carousel.testimonials .wp-block-group__inner-container');
                if ($slider.length && !$slider.hasClass('slick-initialized')) {
                    $slider.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        infinite: true,
                        autoplay: false,
                        speed: 500,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    centerMode: true
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                }

            } else {
                console.warn('Testimonials section not found or already inserted.');
            }

        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);