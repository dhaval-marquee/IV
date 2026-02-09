function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here

        jQuery('.home-banner .copy p a').html('4000x faster');
        jQuery('section#benchmark h2 + p + p').html('Discover analytical latency as low as .0224 milliseconds - more than <strong>4000X faster than the blink of an eye</strong> (100-400 milliseconds).');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);