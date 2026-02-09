function loadTestCode() {
    if (!jQuery('body').hasClass('iv-Header-CTA')) {
        jQuery('body').addClass('iv-Header-CTA');

        const button = document.querySelector('body.free-trial .header .last-col .orange-btn');
        if (button) {
            button.textContent = "Looking for a Job?";
            button.setAttribute('href', 'https://www.mapcommunications.com/about-us/careers/');
        }
        
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);