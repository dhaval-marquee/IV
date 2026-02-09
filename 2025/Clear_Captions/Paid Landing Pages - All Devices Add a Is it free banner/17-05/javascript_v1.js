function loadTestCode() {
    if (!jQuery('body').hasClass('bar_iv')) {
        jQuery('body').addClass('bar_iv');

        jQuery('.fusion-tb-header .fusion-fullwidth').prepend('<div class="top-bar sky-bg">See why our caption phone is at no cost for the hearing impaired: <a href="#its-call" class="smooth-scroll">Learn More</a></div>');

        jQuery('img').each(function() {
            if (jQuery(this).attr('title') === 'MaryJo and Delbert Forward') {
                jQuery(this).attr('id', 'its-call');
                jQuery(this).closest('div.fusion-builder-row').addClass('main');
            }
        });

        jQuery('.smooth-scroll').on('click', function(event) {
            event.preventDefault();
            var target = jQuery(this.getAttribute('href'));
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 150 
                }, 800);
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);