function loadTestCode() {
    if (!jQuery('body').hasClass('bullet_iv')) {
        jQuery('body').addClass('bullet_iv');
        
        // Put your test code here
        jQuery('.hero.hero__overlay .hero-small-wrapper ').html(`<h3 class="h3 mega-title desktop-only">Get Recharged With Our On-Demand Mobile IV Therapy</h3>
        <h3 class="h3 mega-title s-none">Get On-Demand Mobile IV Therapy</h3>
        <div class="rte-setting mega-subtitle">
            <ul>
                <li>Administered by Medical Professionals</li>
                <li>Proven Ingredients to Deliver Results Fast</li>
                <li>We're Available For Service 24/7</li>
                <li>Book Now and Pay at Time of Service</li>
            </ul>
        </div>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
