function loadTestCode() {
    if (!jQuery("body").hasClass("reviewStar_iv")) {
        jQuery("body").addClass("reviewStar_iv");
        
        function wrapDivsForMobile() {
            if (jQuery("#mobileWrapper").length) { 
                jQuery("#mobileWrapper").children().unwrap(); 
            } else {
                jQuery(".amw-page-pdp .yCmsContentSlot .js-query-result-item .amw-panel").append("<div id='mobileWrapper'></div>");
            }
        }
        
        wrapDivsForMobile();
        
        jQuery(window).resize(function () { 
            wrapDivsForMobile();
        });
        
        jQuery('.amw-page-pdp .yCmsContentSlot .js-query-result-item .amw-panel #mobileWrapper').append(jQuery('.yotpo-bottom-line-scroll-panel .yotpo-sr-bottom-line-button').eq(0));
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);