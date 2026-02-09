jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 50) {
        jQuery('header').addClass('stick');
    } else {
        jQuery('header').removeClass('stick');
    }
});


var getMenu = setInterval(() => {
    if(jQuery('#link_text-337-89').length > 0) {
        clearInterval(getMenu)
        jQuery('#link_text-337-89').before('<a id="link-329-89" class="ct-link " href="https://trueyouweightloss.com/"><img id="image-335-89" alt="True You Weight Loss Logo" src="https://trueyouweightloss.com/wp-content/uploads/trueyou-logo-reversed.png" class="ct-image"></a>')
    }
}, 100);