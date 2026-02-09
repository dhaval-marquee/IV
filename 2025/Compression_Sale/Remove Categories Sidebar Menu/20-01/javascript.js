function loadTestCode() {
    if (!jQuery('body').hasClass('sidebar_iv')) {
        jQuery('body').addClass('sidebar_iv');
        
        // Put your test code here

        // only 2 and 3
        jQuery(".slider-left ul.vertical-menu > li.navmenu-item-title ").each(function (index) {
            jQuery(this).addClass("shopByBrand" + index);
        });

        jQuery("#site-mobile-nav .mobile-nav-content > ul > li.navmenu-item-title ").each(function (index) {
            jQuery(this).addClass("shopByBrandMobile" + index);
        });

        jQuery('#shopify-section-left-common .tp-2-dec ul li a').each(function () {
            const linkText = jQuery(this).text();
            jQuery(this).replaceWith(linkText);   
        });

        jQuery('body').css('visibility', 'visible');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);