function loadTestCode() {
    if (!jQuery('body').hasClass('expandedPD')) {
        jQuery('body').addClass('expandedPD');
        
        // Put your test code here
        jQuery('.productDetailsPageRightBottomSlot .collapse').eq(0).addClass('show');

    }
}
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
