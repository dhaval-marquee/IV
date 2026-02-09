function loadTestCode() {
    if (!jQuery('body').hasClass('redesignIV')) {
        jQuery('body').addClass('redesignIV');
        
        // Put your test code here
        $('.top-wrapper').hide().before('<div class="dynamicContentWrapper"></div>');
        var contentPage = "https://www.mapcommunications.com/services/answering-services/";
        $('.dynamicContentWrapper').load(contentPage + ' .hero-section', function(response, status, xhr) {
            if (status == "success") {
                console.log('Title loaded');
                $('.hero-content h1').text('Business Phone Etiquette');
            } else {
                console.error("Failed to load intro content.");
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);