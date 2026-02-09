function initCode() {
    jQuery(document).ready(function(jQuery){
        if(!jQuery('body').hasClass('mobile_redesign_test')) {
            jQuery('body').addClass('mobile_redesign_test');

    

            jQuery('.mobile_redesign_test').css('opacity','1');
        }
    });
}


jQuery('body').addClass('mobile_redesign_test');
jQuery('.mobile_redesign_test header .container').before('<a class="call-us head" href="tel:(619)478-0295">(619)478-0295</a>');
jQuery('.mobile_redesign_test .home nav.services-main').before('<h2>Our Services</h2>');

jQuery('.mobile_redesign_test nav.sticky-tools ul li a:nth-of-type(1)').html('Schedule by Phone')



