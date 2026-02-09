function loadTestCode() {
    if (!jQuery('body').hasClass('iv-KneePainMenu')) {
        jQuery('body').addClass('iv-KneePainMenu');

        // Update Blog to Insurance nav
        jQuery('#desktop-mainnav > li > a:eq(3), #bootscore-navbar > li > a:eq(3)').attr('href', 'https://healthyveins.empirevein.com/gae/');
    }
}

// Wait until jQuery and body are available, then call loadTestCode
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition); 
        loadTestCode(); 
    }
}, 100);