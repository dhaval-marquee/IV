function loadTestCode() {
    if (!jQuery('body').hasClass('heroCopy')) {
        jQuery('body').addClass('heroCopy');
        
        // Put your test code here
        jQuery('#wrapper-homepage section form').prepend('<h5>Healthy Veins, Happier Life!</h5><h2>Specialized Vein Care You Can Trust</h2>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);