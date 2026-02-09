function loadTestCode() {
    if (!jQuery('body').hasClass('hero_iv')) {
        jQuery('body').addClass('hero_iv');
        
        // Put your test code here        
        jQuery('.hero_iv .first-section .nectar-responsive-text p').eq(0).html(`Boost your child’s grades and confidence with K12 Tutoring! Enjoy personalized, 1-on-1 sessions with state-certified teachers nationwide. With flexible pricing, great availability, and performance guarantees, finding the perfect tutor is a breeze.<br> Find your tutor today and let your child shine!`);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);

