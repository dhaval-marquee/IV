function loadTestCode() {
    if (!jQuery('body').hasClass('bar_iv')) {
        jQuery('body').addClass('bar_iv');

        jQuery('.header-cc').prepend('<div class="top-bar blue-bg">See why our caption phone is at no cost for the hearing impaired: <a href="https://clearcaptions.com/how-it-works/why-its-free/">Learn More<span class="long-arrow-right"></span></a></div>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
