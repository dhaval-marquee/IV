function loadTestCode() {
    if (!jQuery('body').hasClass('hero_iv')) {
        jQuery('body').addClass('hero_iv');
        
        // Put your test code here
        jQuery('h1').eq(0).closest('section').addClass('hero_section');
        jQuery('.hero_section h1').text('Lose Weight and Invest In Your Health');
        jQuery('.hero_section p').text('Safe Bariatric Surgery for a Fraction of the Cost');
        jQuery('.hero_section .elementor-icon-box-title').eq(1).html('<span>Costs Up to 80% Less Than the Competition</span>');

        jQuery('.hero_section section').before('<div class="hero_button hide_mobile"><a href="#form_section">Request a Free Consultation to Learn More</a></div>');
        jQuery('.hero_section section').after('<div class="hero_button show_mobile"><a href="#form_section">Request a Free Consultation to Learn More</a></div>');
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);