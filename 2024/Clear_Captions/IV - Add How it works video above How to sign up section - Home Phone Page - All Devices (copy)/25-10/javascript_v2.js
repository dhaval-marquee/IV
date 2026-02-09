function loadTestCode() {
    if (!jQuery('body').hasClass('homePhone_video')) {
        jQuery('body').addClass('homePhone_video');

        jQuery('#menu-menu > li').eq(3).after(`<li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
                <a href="https://clearcaptions.com/how-it-works/home-phone/">Home Phone</a>
        </li>`);
    
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
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
