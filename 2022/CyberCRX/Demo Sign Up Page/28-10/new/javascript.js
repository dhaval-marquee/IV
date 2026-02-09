function loadTestCode() {
    if (!$('body').hasClass('iv_cyber_demo')) {
        $('body').addClass('iv_cyber_demo');

        $('.iv_cyber_demo #lp-pom-text-16 h1').text('See CyberGRX in Action')

        $('.iv_cyber_demo #lp-pom-text-141 span').text('Book your free demo today with one of our security experts to get:');

        $('.iv_cyber_demo #lp-pom-image-330').before('<img id="capterraImg" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1666941314/CyberGRX/Capterra_White.png" alt"Capterra Image">');

        $('.iv_cyber_demo').css('visibility', 'visible');
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over