function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here

        jQuery('section.tabbed-content-block').addClass('customer-stories');

        jQuery('section.tabbed-content-block .container .tabs-wrapper').after(jQuery('.customer-stories .background-color-quaternary'));   
    
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);