function loadTestCode() {
    if (!jQuery('body').hasClass('heroBtn')) {
        jQuery('body').addClass('heroBtn');
        
        // Put your test code here
        jQuery('.heroBtn main .hero-title-section h1').after('<div class="heroBtn_iv"><a href="https://www.accelerationpartners.com/contact/" class="btn btn-red">CONNECT WITH US</a></div>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);