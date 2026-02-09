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
    
        jQuery("<script>", {
            src: "https://amplify.review-alerts.com/widget-init.js",
            type: "text/javascript"
        }).appendTo("body");
        

        jQuery('#hero-section-right').html(`
            <div class="heroRight"><img src="https://www.maids.com/wp-content/uploads/2023/03/Image-MrCleanSeal.png"><div class="item-yellow"> <h2 class="first-title">Exclusive Partner Of Mr. Clean®</h2> <p class="y-body">Mr. Clean® has chosen The Maids as its exclusive cleaning services partner. The only maid service backed by Mr. Clean®, our highly trained teams are bonded and insured.</p></div></div>`
        );
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
