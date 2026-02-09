function changeFunctionNameToTestName() {
    if (!jQuery('body').hasClass('heroBullet-iv')) {
        jQuery('body').addClass('heroBullet-iv');
        
        // Put your test code here
        jQuery('.heroBullet-iv section.oxy-video-background h1').wrap('<div class="heroHeaderWrapper"></div>');
        jQuery('.heroBullet-iv section.oxy-video-background h1').html('Premium Coworking Workspaces Without Long-term Commitments');
        jQuery('.heroBullet-iv section.oxy-video-background h1').after(`<ul>
            <li>Scalable office options for teams of all sizes.</li>
            <li>Flexible terms with fully serviced offices.</li>
            <li>High-speed WiFi with 24/7 keycard access.</li>
        </ul>`);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        changeFunctionNameToTestName();
    }
}, 100);