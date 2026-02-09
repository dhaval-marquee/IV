function loadTestCode() {
    if (!jQuery('body').hasClass('pricing_iv')) {
        jQuery('body').addClass('pricing_iv');
        
        // Put your test code here        
        jQuery("#ajax-content-wrap .main-content .row > div").each(function (index) {
            jQuery(this).addClass("section" + index);
        });
        
        jQuery('.section0').after(jQuery('.pricing_iv .section4'));


    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);