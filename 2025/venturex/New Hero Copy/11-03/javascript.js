function changeFunctionNameToTestName() {
    if (!jQuery('body').hasClass('hero-iv')) {
        jQuery('body').addClass('hero-iv');
        
        // Put your test code here
        jQuery('.hero-iv section.oxy-video-background h1').wrap('<div class="heroHeaderWrapper"></div>');
        jQuery('.hero-iv section.oxy-video-background h1').html('Premium Coworking Workspaces Without Long-term Commitments');
        jQuery('.hero-iv section.oxy-video-background h1').after('<p>Flexible workspaces with private offices, shared spaces, and premium amenities to help you thrive.</p>');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        changeFunctionNameToTestName();
    }
}, 100);