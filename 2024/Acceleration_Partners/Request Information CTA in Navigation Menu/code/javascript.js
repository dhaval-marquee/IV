function loadTestCode() {
    if (!jQuery('body').hasClass('header_btn')) {
        jQuery('body').addClass('header_btn');
        
        // Put your test code here
        jQuery('.header_btn #menu-item-6757').after('<li class="btn_iv"><a href="https://www.accelerationpartners.com/contact/" class="btn btn-red">Request Information</a></li>');

        // jQuery('.header_btn .header-inner button').before('<div class="btn_iv"><a href="https://www.accelerationpartners.com/contact/" class="btn btn-red">Request Information</a></div>');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);