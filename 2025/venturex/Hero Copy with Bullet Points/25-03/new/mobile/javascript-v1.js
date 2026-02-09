function changeFunctionNameToTestName() {
    if (!jQuery('body').hasClass('heroBullet-iv')) {
        jQuery('body').addClass('heroBullet-iv');
        
        // Put your test code here
        jQuery('.heroBullet-iv section.oxy-video-background h1').wrap('<div class="heroHeaderWrapper"></div>');
        jQuery('.heroBullet-iv section.oxy-video-background h1').html('Modern Coworking Spaces, No Long-Term Commitment');

        jQuery('#text_block-752-202').html(jQuery('#text_block-752-202').html().replace('Your nearest', 'Your nearest '));
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        changeFunctionNameToTestName();
    }
}, 100);
