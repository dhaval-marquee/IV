function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here        
        // jQuery("#ajax-content-wrap .main-content .row > div").each(function (index) {
        //     jQuery(this).addClass("section" + index);
        // });
        
        // jQuery('.section0').after(jQuery('.pricing_iv .section4'));
        jQuery('#ajax-content-wrap .main-content h1').html('test')

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);