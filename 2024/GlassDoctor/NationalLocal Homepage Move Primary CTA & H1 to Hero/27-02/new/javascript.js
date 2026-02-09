function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here
        jQuery('.homepage_iv #block-bean-homepage-image .field').append(`<div class="banner-text">
            <h1>Glass Repair, Replacement, and Installation for Home, Auto &amp; Business</h1>
            <a href="https://glassdoctor.com/schedule-appointment" class="btn btn-secondary">Request Job Estimate</a>
        </div>`);
        jQuery('.homepage_iv #block-bean-homepage-location-appointment-ce h2').after(`<div class="banner-text">
            <h1>Glass Repair, Replacement, and Installation for Home, Auto &amp; Business</h1>
            <a href="https://glassdoctor.com/schedule-appointment" class="btn btn-secondary">Request Job Estimate</a>
        </div>`);
    }
}

loadTestCode();