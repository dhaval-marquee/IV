function loadTestCode() {
    if (!jQuery('body').hasClass('pricingPage_iv')) {
        jQuery('body').addClass('pricingPage_iv');
        
        jQuery('.page-content div[data-id="66d5089"] .e-con-inner > div > div ul.elementor-icon-list-items li + li, \
            .page-content div[data-id="66ee4ce"] .e-con-inner > div > div ul.elementor-icon-list-items li + li, \
            .page-content div[data-id="7975281"] .e-con-inner > div > div ul.elementor-icon-list-items li + li')
            .each(function() {
                jQuery(this).html((i, html) => html.replace('FINANCING AVAILABLE*', '0% FINANCING AVAILABLE*')).addClass('list-item'); 
            });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);