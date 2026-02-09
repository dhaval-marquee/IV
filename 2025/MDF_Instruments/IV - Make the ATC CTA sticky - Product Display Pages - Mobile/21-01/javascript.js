function stickyButton() {
    const button = jQuery('.buy-buttons button');
    const buffer = 10;

    if (jQuery(window).width() <= 767) {
        const buttonTop = button.offset().top;
        const buttonHeight = button.height();

        jQuery(window).on('scroll', function () {
            const currentScroll = jQuery(this).scrollTop();
            const windowHeight = jQuery(this).height();

            if ((buttonTop < (currentScroll + windowHeight - buffer)) && 
                ((buttonTop + buttonHeight) > (currentScroll + buffer))) {
                button.removeClass("sticky");
            } else {
                button.addClass("sticky");
            }
        });
    } else {
        button.removeClass("sticky");
    }
}

// Initialize when jQuery and the DOM are ready
const checkCondition = setInterval(() => {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && jQuery('.buy-buttons button').length > 0) {
        clearInterval(checkCondition);
        stickyButton();
        jQuery(window).resize(stickyButton);
    }
}, 100);