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
                        if (jQuery('.bannerWrapper').length == 0 && jQuery('.pss-off-word').length == 0) {
                            jQuery(this).find('.pss-unit-list__item').eq(2).after(jQuery('<div class="bannerWrapper"></div>').append(banner.clone()));
                            jQuery('.bannerWrapper .pss-promo-box__text-part3').wrapInner('<span class="pss-off-word"></span>');
                            jQuery('.bannerWrapper .pss-promo-box__text-part3 .pss-off-word').before(jQuery('.bannerWrapper .pss-promo-box__text-part3 .pss-font-primary-eb')).append(jQuery('.bannerWrapper .pss-hero__promotion-disclaimer-internal-pages'));
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
