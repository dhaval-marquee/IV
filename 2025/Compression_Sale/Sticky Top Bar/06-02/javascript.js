function loadTestCode() {
    if (!jQuery('body').hasClass('topBar_iv')) {
        jQuery('body').addClass('topBar_iv');

        jQuery('#shopify-section-static-announcement .announcement-bar-text a, #shopify-section-static-announcement .small-promo a').each(function() {
            jQuery(this).attr('href', 'javascript:;');
        });

        function toggleStickyClass() {
            jQuery('header').toggleClass('site-header-sticky--scrolled', jQuery(window).scrollTop() >= 50);
        }
        
        function addClass() {
            if (window.matchMedia("(max-width: 1023.98px)").matches) {
                jQuery(window).on("scroll", toggleStickyClass);
            } else {
                jQuery(window).off("scroll", toggleStickyClass).removeClass('site-header-sticky--scrolled');
            }
        }
        
        // Run on load and resize
        addClass();
        jQuery(window).on("resize", addClass);
        
        function textChanged() {
            jQuery('.announcement-bar .announcement-bar-text .scl-text a').text('FREE Shipping on ALL US Orders!');
        }

        // Load code just for mobile 
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            textChanged();
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
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
