function loadTestCode() {
    if (!jQuery('body').hasClass('bulletPoints_iv')) {
        jQuery('body').addClass('bulletPoints_iv');
        jQuery('body').addClass('bulletPoints_v2');

        // Add phone field dynamically
        jQuery('#hero-section-left .section-background').html(`
            <h1>Your Home, Spotless and Stress-Free – Guaranteed!</h1>
            <ul>
                <li>Eco-Friendly Products Safe for Kids and Pets</li>
                <li>Thorough 22-Step Cleaning Process for a Deep Clean Every&nbsp;Time</li>
                <li>Flexible Scheduling with a 100% Satisfaction Guarantee</li>
            </ul>
            <a id="hero-quote" data-toggle="modal" class="button tmiglobal-franchise-getAQuote1data-target reformatted" data-target="#quoteModal">Get a quote</a>`
        );

        jQuery('#hero-section-right').html(`
            <picture>
                <source media="(max-width:767.98px)" srcset="https://cdn-ikpkfpn.nitrocdn.com/GgSQfJmDdcyTssVfjcXUMhEnReCcaZWO/assets/images/optimized/rev-868e1af/www.maids.com/wp-content/uploads/2023/03/Home-Header-Photo-Dog.png.webp">
                <img src="https://cdn-ikpkfpn.nitrocdn.com/GgSQfJmDdcyTssVfjcXUMhEnReCcaZWO/assets/images/optimized/rev-868e1af/www.maids.com/wp-content/uploads/2023/03/Home-Header-Photo-Dog.png" alt="LawPay Dashboard Image">
            </picture>`
        );
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);