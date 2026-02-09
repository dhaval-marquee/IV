console.log('Variant 1 working fine');
function heroSection() {
    if (!jQuery('body').hasClass('iv-hero-sec')) {
        jQuery('body').addClass('iv-hero-sec');

        const innerSect = jQuery('h1').closest('.iv-hero-sec .e-con-inner');
        const heroSec = jQuery('[data-elementor-type="wp-page"] > div:first-child');
        heroSec.addClass('hero_sec')
        innerSect.addClass('innerPart');
        innerSect.append('<div class="hero-form"></div>');

        jQuery('h2').each(function() {
            if (jQuery(this).text() === "GET IN TOUCH") {
                jQuery(this).closest('.e-con-boxed').addClass('request-form-section');
            }
        });

        // Function to check if the .hero_sec is in the viewport
        function isHeroInView() {
            var $heroSec = jQuery('.hero_sec');
            if ($heroSec.length) {
                var windowHeight = jQuery(window).height();
                var scrollTop = jQuery(window).scrollTop();
                var heroTop = $heroSec.offset().top;
                var heroBottom = heroTop + $heroSec.outerHeight();

                return (scrollTop < heroBottom && scrollTop + windowHeight > heroTop);
            }
            return false;
        }

        // Function to move the form based on hero visibility
        function moveForm() {
            if (isHeroInView()) {
                // Move form to .hero-form if not already inside
                if (!jQuery('.hero-form').find('.hbspt-form').length) {
                    jQuery('.hero-form').append(jQuery('.request-form-section [data-id="93ff1db"]'));
                }
            } else {
                // Move form back to original location if it's inside .hero-form
                if (!jQuery('.request-form-section').find('.hbspt-form').length) {
                    jQuery('.request-form-section div[data-id="2b146f3"]').after(jQuery('[data-id="93ff1db"]'));
                }
            }
        }

        moveForm();

        jQuery(window).on('scroll', function() {
            moveForm();
        });

        jQuery(window).on('resize', function() {
            moveForm();
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroSection();
    }
}, 100);
