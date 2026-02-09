function ivReservationList() {
    if (!$('body').hasClass('iv-reservation')) {
        $('body').addClass('iv-reservation');
        
        // Put your test code here
        $('.pss-reserve-reservation-details').after(`
            <div class="iv-reservation-details">
                <h3>WHY PRICE SELF STORAGE?</h3>
                <ul>
                    <li>Security Features for Your Peace of Mind</li>
                    <li>Month-to-month Leases</li>
                    <li>Free Concierge Service</li>
                    <li>Competitive Rates</li>
                    <li>Large Variety of Storage Unit Size</li>
                </ul>
            </div>
        `);
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 992px)").matches) {

    ivReservationList();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over