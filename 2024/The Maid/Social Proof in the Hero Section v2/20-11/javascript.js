function loadTestCode() {
    if (!jQuery('body').hasClass('bulletPoints_iv')) {
        jQuery('body').addClass('bulletPoints_iv');

        // Add phone field dynamically
        jQuery('#hero-section-left .section-background').html(`
            <h1>Your Home, Spotless and Stress-Free – Guaranteed!</h1>
            <ul>
                <li>Eco-Friendly Products Safe for Kids and Pets</li>
                <li>Thorough 22-Step Cleaning Process for a Deep Clean Every&nbsp;Time</li>
                <li>Flexible Scheduling with a 100% Satisfaction Guarantee</li>
            </ul>
            <div class="hero-review"></div>
            <a id="hero-quote" data-toggle="modal" class="button tmiglobal-franchise-getAQuote1data-target reformatted" data-target="#quoteModal">Get a quote</a>`
        );

        jQuery('.hero-review').append('<div class="amplify-widget" data-token="MTQ2MzM6aXYtazFaakVxRGFSdk53YTUxZUdXNmNBX2lV" data-widget-id="14633" data-widget-type="star_snapshot"></div>');

        jQuery('#hero-section-right').html(`
            <h1 class="iv-hero-title">See Why Our Customers Love Us!</h1>
            <div class="amplify-widget" data-token="MTQ2MzQ6aXYtazFaakVxRGFSdk53YTUxZUdXNmNBX2lV" data-widget-id="14634" data-widget-type="teaser"></div>`
        );

        jQuery("<script>", {
            src: "https://amplify.review-alerts.com/widget-init.js",
            type: "text/javascript"
        }).appendTo("body");
    
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over