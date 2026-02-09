function loadTestCode() {
    if (!jQuery('body').hasClass('heroBullet-iv')) {
        jQuery('body').addClass('heroBullet-iv');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
