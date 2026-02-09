function loadTestCode() {
    if (!jQuery('body').hasClass('locationPage_iv')) {
        jQuery('body').addClass('locationPage_iv');
        
        // Put your test code here
        var phoneNumber = jQuery('.locationPage_iv a#facilityPhoneNumber').attr('href');
        if (phoneNumber) {
            phoneNumber = phoneNumber.replace('tel:', '');

            jQuery('.pss-facility__schedule-mobile div').eq(2).after(`
                <div class="numberWrapper">
                    <span>Phone Number:</span>
                    <span>${phoneNumber}</span>
                </div>
            `);
        }
    }
}

function runCode() {
    var checkCondition = setInterval(function() {
        if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 100);
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {
    runCode();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over