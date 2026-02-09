function loadTestCode() {
    if(!jQuery('body').hasClass('stickyHeader_iv')) {
        jQuery('body').addClass('stickyHeader_iv');

        jQuery('header#masthead .navaction-tel + .bookfree-link > .nav-link').html('Get a Free Consult');
    }
}


// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

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