function heroText() {
    if (!jQuery('body').hasClass('ivHomepageHero')) {
        jQuery('body').addClass('ivHomepageHero');

        jQuery('.moving-from-to .slide-header > h2 span').text('Fill out the form to get your free quote. No obligation. No hidden fees.');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroText();
    }
}, 100);
