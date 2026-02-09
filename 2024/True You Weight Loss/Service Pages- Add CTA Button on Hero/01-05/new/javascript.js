function loadTestCode() {
    if (!jQuery('body').hasClass('surgeryPage_iv')) {
        jQuery('body').addClass('surgeryPage_iv');
        var heroInterval = setInterval(function () {
            if (jQuery('.surgeryPage_iv #section-16-143').length > 0) {
                clearInterval(heroInterval);

                jQuery('#headline-17-143').after(`<h2 class="subHeadline">Speak with an expert today!</h2>
                <a class="hero_btn ct-link-text" href="https://trueyouweightloss.com/request-a-consultation/">Request a Free Consultation</a>`);
        
                var span = jQuery('#section-16-143 h1').html();
                span = span.replace(/&nbsp;/g, '');
                jQuery('#section-16-143 h1').html(span);

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