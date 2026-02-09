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
        
        jQuery('#mobileWrapper').append(jQuery('.productDetailsPageRightPanelSlot-component .yotpo-widget-instance'));
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);