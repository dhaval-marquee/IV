function loadTestCode() {
    if (!jQuery('body').hasClass('esg_iv')) {
        jQuery('body').addClass('esg_iv');
        jQuery('body').addClass('esg_iv2');
        var refreshInterval = setInterval(function () {
            if (jQuery('.esg_iv #section-1312-540').length > 0) {
                clearInterval(refreshInterval);
                jQuery('#section-1139-540').after(jQuery('#section-1243-540'));
                jQuery('#text_block-1247-540').html(`<p>ESG is currently the most effective non-surgical weight loss procedure available, producing an average of 23.1% total body weight loss at 1 year.</p>
                <p>Though results may vary for each individual undergoing ESG, most patients will lose 70% of their excess weight, or more.</p>`);
                jQuery('#text_block-1253-540').after(`<a class="ct-link-button" href="https://trueyouweightloss.com/request-a-consultation/">Request a Free Consultation</a>`);
                jQuery('#section-1254-540').after(jQuery('#section-1312-540'));
                jQuery('#section-1279-540').after(jQuery('#section-1149-540')).before(jQuery('#section-73-6'));


                // add Scroll down class
                jQuery('section a[href="https://trueyouweightloss.com/request-a-consultation/"]').eq(1).attr('href','javascript:;').addClass('scrollToForm');
                jQuery('.ct-link-button[href="#section-1857-540"]').addClass('scrollToForm');

                // Scroll down click events
                jQuery(document).on('click', '.scrollToForm', function(e){
                    e.preventDefault();
                    console.log('scroll to form');

                    jQuery('html, body').animate({
                        scrollTop: jQuery("section form.hs-form").closest('section').offset().top - jQuery('header').height()
                    }, 500);
                });
            }
        }, 200);
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);