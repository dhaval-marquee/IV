function loadTestCode() {
    if (!jQuery('body').hasClass('homePhone_iv')) {
        jQuery('body').addClass('homePhone_iv');
        
        // Put your test code here
        jQuery('.post-content .fusion-builder-row-2').after('<div class="fusion-builder-row-3" id="dynamicContent"></div>');

        jQuery('#menu-menu > li').eq(3).after(`<li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
                <a href="https://clearcaptions.com/how-it-works/home-phone/">Home Phone</a>
        </li>`);
        
        var getNumber = document.querySelector('header .header-nav-call-now span').textContent;
        console.log(getNumber);
        
        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery('#dynamicContent').load(contentPage + ' .fusion-builder-row-1', function (response, status, xhr) {
            if (status == "success") {
                // Append additional HTML after loading content
                jQuery('#dynamicContent p').after(`<div class="clear-section"><a class="fusion-button clear-btn fusion-button-default-size fusion-button-default min-w-230">Get started</a><p class="text-red-orange">Or call us now at <span>${getNumber}</span></p></<div>`);
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
