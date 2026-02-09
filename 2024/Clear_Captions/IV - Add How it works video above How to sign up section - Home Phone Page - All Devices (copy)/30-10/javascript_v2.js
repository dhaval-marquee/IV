const targetUrl = "/how-it-works/home-phone/";
if(jQuery('.newMenu_iv').length === 0) {
    jQuery('#menu-menu > li').eq(3).after(`<li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
        <a href="${targetUrl}" class="newMenu_iv">Home Phone</a>
    </li>`);
}

function loadTestCode() {
    console.log('all code executed');
    if (!jQuery('body').hasClass('homePhone_video')) {
        jQuery('body').addClass('homePhone_video');

        jQuery('.post-content .fusion-builder-row-1 video').replaceWith('<div id="dynamicvideo"></div>');

        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery('#dynamicvideo').load(contentPage + ' .fusion-builder-row-1 .fusion-builder-column-1', function (response, status, xhr) {
            if (status == "success") {
                } else {
                    console.error("Failed to load intro content.");
                }
        });
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && window.location.pathname === targetUrl ) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
