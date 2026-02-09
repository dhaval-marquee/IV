function loadcode() {
    if(!jQuery('body').hasClass('surgeryPage_iv')) {
        jQuery('body').addClass('surgeryPage_iv');

        jQuery('#section-1159-540 .ct-section-inner-wrap > div').eq(0).before('<h2 class="heading">Success Stories</h2>');
        jQuery('h4#headline-1154-540').text(jQuery('h4#headline-1154-540').text().replace('Why Choose True You?', ''));
        jQuery('#section-2597-7611 .ct-section-inner-wrap h4').text(jQuery('#section-2597-7611 .ct-section-inner-wrap h4').text().replace('Freedom is Waiting. Come Find Yourself at True You.', 'Request a Free Consultation'));
    }
}

loadcode();
