function initCode() {
    jQuery(document).ready(function(jQuery){
        if(!jQuery('body').hasClass('mobile_redesign_test')) {
            jQuery('body').addClass('mobile_redesign_test');
            
            jQuery('.mobile_redesign_test header .container').before('<a class="call-us head" href="tel:6194780295">(619) 478-0295</a>');
            jQuery('.mobile_redesign_test .services-main').prepend('<h2>Our Services</h2>');
            
            jQuery('.mobile_redesign_test nav.sticky-tools ul li:nth-of-type(2) a').html('Schedule by Phone');
    

            jQuery('.mobile_redesign_test').css('visibility','visible');
        }
    });
}


// Load code just for Mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    initCode();

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
// Load code just for Mobile over