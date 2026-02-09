function loadTestCode() {
    if (jQuery('body').hasClass('promoBannerIV')) return;
    jQuery('body').addClass('promoBannerIV');

    const addBanner = () => {
        const checkList = setInterval(() => {
            if (jQuery('.pss-unit-list__container').length && jQuery('#pss-skip-to-content').length) {
                clearInterval(checkList);
                const banner = jQuery('#pss-skip-to-content').clone();

                setTimeout(() => {
                    jQuery('.promoBannerIV .pss-unit-list__container').each(function() {
                        if (!jQuery(this).find('.bannerWrapper').length) {
                            jQuery(this).find('.pss-unit-list__item').eq(2).after(jQuery('<div class="bannerWrapper"></div>').append(banner.clone()));

                            function moveDisclaimer() {
                                if (window.innerWidth >= 992) {
                                    jQuery('.bannerWrapper .pss-promo-box__text-part3 > span') .after(jQuery('.bannerWrapper .pss-hero__promotion-disclaimer-internal-pages'));
                                } else {
                                    jQuery('.bannerWrapper .pss-promo-box__text-part3').after(jQuery('.bannerWrapper .pss-hero__promotion-disclaimer-internal-pages'));
                                }
                            }
                            
                            // Run the function on page load
                            moveDisclaimer();
                            
                            // Run the function when the window is resized
                            jQuery(window).resize(function() {
                                moveDisclaimer();
                            });
                            
                        }
                    });
                }, 500);
            }
        }, 100);
    };
    window.onresize = addBanner;
    window.dispatchEvent(new Event('resize'));
}

const checkCondition = setInterval(() => {
    if (typeof jQuery !== 'undefined' && jQuery('body').length) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
