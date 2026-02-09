function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here
        jQuery('#wrapper-homepage .dv-home-slider .textwrap div').html('Expert Treatment for Varicose & Spider&nbsp;Veins')

        jQuery('#wrapper-homepage .dv-home-slider .textwrap div').after(`<ul class="info-list">
            <li>Affordable, transparent pricing with no surprises.</li>
            <li>Minimally invasive solutions with little downtime.</li>
            <li>Tailored care plans for effective, long-term results</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);