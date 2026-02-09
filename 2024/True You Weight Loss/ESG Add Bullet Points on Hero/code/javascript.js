function loadTestCode() {
    if (!jQuery('body').hasClass('heroIV')) {
        jQuery('body').addClass('heroIV');
        
        // Put your test code here
        jQuery('.heroIV #headline-47-143').html('Same-day procedure, lifelong&nbsp;results!').after(`<ul class="heroList">
            <li>Non-surgical, same-day weight loss procedure.</li>
            <li>Feel full faster & longer for sustainable weight loss.</li>
            <li>Lose up to 20% of your body weight without any incisions.</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('#headline-47-143').length > 0 ) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);