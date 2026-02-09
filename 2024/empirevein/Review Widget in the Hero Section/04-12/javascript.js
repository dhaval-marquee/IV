function loadTestCode() {
    jQuery('head').append('<script src="https://static.elfsight.com/platform/platform.js" async><\/script>');
    if (jQuery('.dv-home-slider .__intro .textwrap').length > 0) {
        jQuery('.dv-home-slider .__intro .textwrap').append('<div class="elfsight-app-ecc4968d-5c28-4cb8-8da9-470dc7bbec2e" data-elfsight-app-lazy></div><a href="/book-online/" class="btn btn-primary mt-4 screening-btn w-100">Schedule Free Screening</a>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);