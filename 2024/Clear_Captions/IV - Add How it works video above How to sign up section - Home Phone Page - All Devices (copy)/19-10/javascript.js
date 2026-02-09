function loadTestCode() {
    if (!jQuery('body').hasClass('homePhone_iv')) {
        jQuery('body').addClass('homePhone_iv');
        
        // Put your test code here
        jQuery('.post-content .fusion-builder-row-2').after('<div class="fusion-builder-row-3" id="dynamicContent"></div>');
        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery('#dynamicContent').load(contentPage + ' .fusion-builder-row-1', function (response, status, xhr) {
            if (status == "success") {
                // Append additional HTML after loading content
                jQuery('#dynamicContent p').after('<div class="clear-section"><a class="fusion-button clear-btn fusion-button-default-size fusion-button-default min-w-230">Get started</a><p class="text-red-orange">Or call us now at <a href="tel:+1-866-219-3373">1-866-219-3373</a></p></<div');
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