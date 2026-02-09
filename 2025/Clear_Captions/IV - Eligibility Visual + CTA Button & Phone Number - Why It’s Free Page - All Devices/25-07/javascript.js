function loadTestCode() {
    if (!jQuery('body').hasClass('iv-how-it-work')) {
        jQuery('body').addClass('iv-how-it-work');
        
        // Put your test code here
        jQuery('#content .post-content > div:nth-child(2) > div > div:nth-child(2) > div > div').eq(1).after(`
        <div class="button-wrapper">
            <a href="tel:18669961498" class="number for-desktop">Call: <span>1-866-996-1498</span></a>
            <a href="tel:18662091412" class="number for-mobile">Call: <span>1-866-209-1412</span></a>
            <a href="/sign-me-up/" class="btn GetMyPhoneBtn">Get My Phone</a>
        </div>`);

            var i = 0;
            var getNumberInterval = setInterval(function() {
            var numberDesktop = jQuery('.header-nav .header-nav-call-now span').text().trim();
            var numberMobile = jQuery('.header-nav-mobile .header-nav-mobile-menu-phone a').text().trim();

            // Update desktop number and href
            if (numberDesktop) {
                jQuery(".for-desktop span").text(numberDesktop);
                jQuery(".for-desktop").attr('href', 'tel:' + numberDesktop.replace(/[^0-9+]/g, ''));
            }

            // Update mobile number and href
            if (numberMobile) {
                jQuery(".for-mobile span").text(numberMobile);
                jQuery(".for-mobile").attr('href', 'tel:' + numberMobile.replace(/[^0-9+]/g, ''));
            }

            if (i == 5) {
                clearInterval(getNumberInterval);
            }
            i++;
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
