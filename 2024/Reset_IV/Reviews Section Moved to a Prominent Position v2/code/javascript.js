if(!jQuery('body').hasClass('reviews_iv')) {
    jQuery('body').addClass('reviews_iv');

    jQuery('.template-index .main_container > div').eq(1).after(jQuery('.template-index .main_container > div').eq(9));

    jQuery('.section-has-title .review-wrapper').after(`<div class="btn-wrapper">
        <a href="https://resetiv.com/pages/packages" class="btn btn-banner2 viewDripPackage-btn">
            <span>View Drip Packages</span>
        </a>
    </div>`);

    var reviewsSlider = setInterval(() => {
        if (jQuery('.review-wrapper .wprevpro_t1_P_3').length > 0) {
            var showChar = 350;
            var ellipsestext = '...';
            var moretext = 'Read More';
            var lesstext = 'Read Less';

            jQuery('.review-wrapper .wprevpro_t1_P_3').each(function() {
                var content = jQuery(this).html();
                if(content.length > showChar) {
                    var c = content.substr(0, showChar);
                    var h = content.substr(showChar, content.length - showChar);
                    var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;<u class="morelink">' + moretext + '</u></span>';
                    jQuery(this).html(html);
                }
            });
            jQuery('.review-wrapper .wprs_unslider-nav ol li.wprs_unslider-active').click();

            jQuery('.morelink').click(function() {
                if(jQuery(this).hasClass('less')) {
                    jQuery(this).removeClass('less');
                    jQuery(this).html(moretext);
                } else {
                    jQuery(this).addClass('less');
                    jQuery(this).html(lesstext);
                }
                jQuery(this).parent().prev().toggle();
                jQuery(this).prev().toggle();
                jQuery('.review-wrapper .wprs_unslider-nav ol li.wprs_unslider-active').click();
                return false;
            });
            clearInterval(reviewsSlider);
        }
    }, 200);
}