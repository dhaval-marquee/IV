function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('drip_test')) {
        bodyEle.classList.add('drip_test');

        // Put your test code here
        jQuery('.fancy_heading_arrows').closest('.section_wrapper').addClass('drip_test_wrapper');
        jQuery('.fancy_heading_arrows').closest('.wrap').after('<div class="column_wrapper_iv"></div>');

        jQuery('.drip_test_wrapper').each(function () {
            var column = jQuery(this).find('.wrap[data-col="one-fifth"]');
            jQuery(column).removeClass('one-fifth').addClass('one-fourth');
            jQuery(column).attr('data-col','one-fourth');
            jQuery('.column_wrapper_iv').append(column);
        }).promise().done(function () {
           
            jQuery('.column_wrapper_iv').prepend(`<div class="wrap mcb-wrap mcb-wrap-g0brex0y4 valign-top clearfix one-fourth" data-col="one-fourth">
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column mcb-item-z2ld6f0c9 one column_pricing_item">
                        <div class="pricing-box  pricing-box-box">
                            <div class="plan-header">
                                <div class="image">
                                    <img src="https://mobileivnurses.com/wp-content/uploads/2022/08/HSN-Mobile-IV-1.jpg" alt="Ultimate Myers IV Bag" width="1080" height="1080">
                                </div>
                                <h2>Hair, Skin, and Nails</h2>
                                <div class="price"><sup class="currency">$</sup><span>275</span><sup class="period"></sup></div>
                                <hr class="hr_color">
                                <p class="subtitle"><big>This saline IV bag doesn't include any add-ins, so it's ideal for people who have allergies or any kind of intolerances. It's the best choice when you just need to replenish lost fluids from dehydration. The $100 cost includes travel fees to your location, whether that's your home, office, hotel room, or anywhere else.</big></p>
                            </div>
                            <div class="plan-inside"></div>
                            <div class="plan-footer">
                                <a href="/pricing-packages/myers-cocktail-ivs/" class="button button_theme has-icon">
                                    <span class="button_icon">
                                        <i class="icon-link"></i>
                                    </span>
                                    <span class="button_label">More Info</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            jQuery('.column_wrapper_iv .plan-footer').each(function() {
                jQuery(this).html('<a class="button mivn-button button_size_1" href="https://mobileivnurses.com/schedule-online/" style="background-color:#1b9d2c!important;color:#ffffff;"><span class="button_label">Schedule Now</span></a>');
            });

            jQuery('.pricing-box .plan-inside ul li').each(function () {
                var SelectElement = jQuery(this);
                if (SelectElement.html().replace(/\s|&nbsp;/g, '').length == 0) {
                    SelectElement.empty().remove();
                }
            });
            
        });
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