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