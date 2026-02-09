const targetUrl = "/how-it-works/home-phone/";
if(jQuery('.newMenu_iv').length === 0) {
    jQuery('#menu-menu > li').eq(3).after(`<li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
        <a href="${targetUrl}" class="newMenu_iv">Home Phone</a>
    </li>`);
}

function loadTestCode() {
    if (!jQuery('body').hasClass('homePhone_iv')) {
        jQuery('body').addClass('homePhone_iv');
        
        // Put your test code here
        jQuery('.post-content .fusion-builder-row-2').after('<div class="fusion-builder-row-3" id="dynamicContent"></div>');

        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery('#dynamicContent').load(contentPage + ' .fusion-builder-row-1', function (response, status, xhr) {
            if (status == "success") {
                // Append additional HTML after loading content
                jQuery('#dynamicContent p').after(`<div class="clear-section"><a class="fusion-button clear-btn fusion-button-default-size fusion-button-default min-w-230">Get started</a><p class="text-red-orange">Or call us now at <span id="getNumber"></span></p></<div>`);

                var i = 0;
                var getNumberInterval = setInterval(function() {
                    var numberDesktop  = jQuery('header .header-nav-call-now span').text();
                    var numberMobile = jQuery('header .header-nav-mobile-menu-phone a').text();

                    if (numberDesktop) {
                        jQuery("#getNumber").text(numberDesktop);
                    } 
                    if(numberMobile) {
                        jQuery("#getNumber").text(numberMobile);
                    }
                    if (i == 5) {
                        clearInterval(getNumberInterval);
                    }
                    i++;
                }, 1000);

            } else {
                console.error("Failed to load intro content.");
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && window.location.pathname === targetUrl ) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
