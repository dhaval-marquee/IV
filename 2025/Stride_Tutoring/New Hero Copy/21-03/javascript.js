function loadTestCode() {
    if (!jQuery('body').hasClass('hero_iv')) {
        jQuery('body').addClass('hero_iv');
        
        // Put your test code here        
        jQuery('.hero_iv .first-section .nectar-cta').before(`<p class="subheading">Searching for the perfect tutor to boost your child’s grades and confidence? At K12 Tutoring, we take the guesswork out of the process with a seamless, personalized approach. </p>
        <h5>Here’s what makes us different:</h5>
        <ul>
            <li>Reasonable Pricing</li>
            <li>Private 1-on-1 Sessions</li>
            <li>Top-Tier State-Certified Teachers Nationwide</li>
            <li>Outstanding Tutor Availability</li>
            <li>Grade & Tutor Guarantees</li>
        </ul>
        <h5>Find your tutor today and watch your child shine!</h5>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);

