function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here        
        jQuery('#ajax-content-wrap .main-content h1').closest('.first-section').addClass('hero-section');
        jQuery('.homepage_iv .hero-section h1').html('Achieve Academic Excellence with Expert Tutoring');
        jQuery('.homepage_iv .hero-section h1').after('<p class="subheading">Effective, personalized, and flexible tutoring that delivers real results.</p>');
        jQuery('.homepage_iv .hero-section .wpb_text_column').html(`<ul class="hero-bullets">
            <li>State-certified tutors dedicated to your progress.</li>
            <li>Grade lift guarantee for measurable improvement.</li>
            <li>100% tutor satisfaction guarantee ensures quality support.</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);