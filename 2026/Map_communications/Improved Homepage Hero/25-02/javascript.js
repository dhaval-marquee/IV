function loadTestCode() {
    if (!jQuery('body').hasClass('iv-Homepage')) {
        jQuery('body').addClass('iv-Homepage');

        // Put your test code here
        jQuery('.iv-Homepage main .banner-content .banner-btn').after(`<div class="banner-btn iv-btnWrapper wow fadeInUp">
            <a href="https://www.mapcommunications.com/contact-us/request-information/" class="requestMoreInfoBtn">Start Free Trial</a>
            <a href="https://www.mapcommunications.com/pricing/" class="SeePricingBtn">See Pricing</a>
        </div>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);