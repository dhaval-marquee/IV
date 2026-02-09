function loadTestCode() {
    if (!jQuery('body').hasClass('homePageBtn_iv')) {
        jQuery('body').addClass('homePageBtn_iv');
        
        // Put your test code here
        jQuery('.homePageBtn_iv .home-banner .banner-ctas a').html('Get started with KX');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);