function loadTestCode() {
    if (!jQuery('body').hasClass('bar_iv')) {
        jQuery('body').addClass('bar_iv');

        jQuery('.fusion-tb-header').prepend('<div class="top-bar blue-bg">May is National Speech-Language-Hearing Month! Discover resources and practical steps for better communication. <a href="https://clearcaptions.com/blog/hearing-health/celebrating-national-speech-language-hearing-month/">Learn More<span class="long-arrow-right"></span></a></div>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('.fusion-tb-header').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);