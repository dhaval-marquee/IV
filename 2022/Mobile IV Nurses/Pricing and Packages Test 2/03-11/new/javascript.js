if (!jQuery('body').hasClass('pricing_packages')) {
    jQuery('body').addClass('pricing_packages');
    
    // Put your test code here
    jQuery('.pricing_packages  .button.custom-button-right span.button_label').each(function(){
        jQuery(this).text('Book Now');
    });

    jQuery('a.learn_more_link').parent().addClass('show_always');
    jQuery(document).on('click', 'a.learn_more_link', function(){
        jQuery(this).toggleClass('open');
        jQuery(this).siblings('.content_right').slideToggle();
    });
}