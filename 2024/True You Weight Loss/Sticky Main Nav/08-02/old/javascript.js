jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 50) {
        jQuery('header').addClass('stick');
    } else {
        jQuery('header').removeClass('stick');
    }
});