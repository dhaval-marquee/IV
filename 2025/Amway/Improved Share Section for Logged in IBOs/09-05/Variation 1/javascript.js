function loadTestCode() {
    if (!jQuery("body").hasClass("iv_text")) {
        jQuery("body").addClass("iv_text");

        jQuery(".amw-page-pdp .yCmsContentSlot .js-query-result-item .amw-panel").append(
            '<div class="content">' +
                '<span class="earn-text">Want to earn more?</span>' +
                '<a href="javascript:;" class="js-open-share-modal">Share your link with your customers to get credit!</a>' +
            '</div>'
        );

        function wrapDivsForMobile() {
            if (jQuery(window).width() <= 1181) { 
                if (!jQuery("#mobileWrapper").length) { 
                    jQuery(".AddToCart-ShareAction, .content").wrapAll("<div id='mobileWrapper'></div>");
                }
            } else {
                jQuery("#mobileWrapper").children().unwrap(); 
            }
        }

        wrapDivsForMobile();

        jQuery(window).resize(function () { 
            wrapDivsForMobile();
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);