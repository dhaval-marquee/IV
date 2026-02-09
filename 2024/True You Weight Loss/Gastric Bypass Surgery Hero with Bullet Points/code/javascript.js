function loadTestCode() {
    if (!jQuery('body').hasClass('heroIV')) {
        jQuery('body').addClass('heroIV');
        
        // Put your test code here
        jQuery('.heroIV #headline-1157-540').after(`
        <h2 id="headline-47-143" class="ct-headline">Same-day procedure, lifelong&nbsp;results!</h2>
        <ul class="heroList">
            <li>Non-surgical, same-day weight loss procedure.</li>
            <li>Feel full faster & longer for sustainable weight loss.</li>
            <li>Lose up to 20% of your body weight without any incisions.</li>
        </ul>`);

        jQuery('#link_button-1696-7611').text('Request a Consultation or Just Learn More');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('#headline-1157-540').length > 0 ) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);