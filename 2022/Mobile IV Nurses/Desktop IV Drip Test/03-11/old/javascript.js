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
           
            jQuery('.column_wrapper_iv').html(`<!-- 1st product -->
            <div class="wrap mcb-wrap mcb-wrap-g0brex0y4 valign-top clearfix one-fourth" data-col="one-fourth">
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
                                <h3>Restore Your Youth</h3>
                                <ul>
                                    <li>Designed to deliver ingredients that help promote healthy hair and nail growth, while also combating oxidative stress caused by free radical to give your skin a youthful glow.</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a class="button mivn-button button_size_1" href="https://mobileivnurses.com/schedule-online/" style="background-color:#1b9d2c!important;color:#ffffff;"><span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 2nd product -->
            <div class="wrap mcb-wrap mcb-wrap-g0brex0y4 valign-top clearfix one-fourth" data-col="one-fourth">
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column mcb-item-z2ld6f0c9 one column_pricing_item">
                        <div class="pricing-box  pricing-box-box">
                            <div class="plan-header">
                                <div class="image">
                                    <img src="https://mobileivnurses.com/wp-content/uploads/2021/07/IMG950823.jpg" alt="Ultimate Myers IV Bag" width="1080" height="1080">
                                </div>
                                <h2>They Myers' Cocktail</h2>
                                <div class="price"><sup class="currency">$</sup><span>195</span><sup class="period"></sup></div>
                                <hr class="hr_color">
                                <h3>Our Best Selling Hydration Package</h3>
                                <ul>
                                    <li>Features 6 of our highest-impact vitamins, minerals, antioxidants, and Hydration, can help with skin health, and aid your weight loss regimen.</li>
                                    <li>Supports your Immune System and can give you a burst of energy to stop you from feeling sluggish.</li>
                                    <li>Recommended for everything from hangovers to fatigue, the flu, recovery from an athletic event, or a chronic illness.</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a class="button mivn-button button_size_1" href="https://mobileivnurses.com/schedule-online/" style="background-color:#1b9d2c!important;color:#ffffff;"><span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 3rd product -->
            <div class="wrap mcb-wrap mcb-wrap-g0brex0y4 valign-top clearfix one-fourth" data-col="one-fourth">
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column mcb-item-z2ld6f0c9 one column_pricing_item">
                        <div class="pricing-box  pricing-box-box">
                            <div class="plan-header">
                                <div class="image">
                                    <img src="https://mobileivnurses.com/wp-content/uploads/2022/04/2AEC0E3C-D18B-4B67-AA36-E79F89531888.jpeg" alt="Ultimate Myers IV Bag" width="1080" height="1080">
                                </div>
                                <h2>The Ultimate Myers' Cocktail</h2>
                                <div class="price"><sup class="currency">$</sup><span>295</span><sup class="period"></sup></div>
                                <hr class="hr_color">
                                <h3>Our Premium Package</h3>
                                <ul>
                                    <li>5000 mg of Vitamin C and 1000 mg of Glutathion</li>
                                    <li>Antioxidant-rich package will knock out the toughest flu or hangover symptoms</li>
                                    <li>Increase overall energy and alertness.</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a class="button mivn-button button_size_1" href="https://mobileivnurses.com/schedule-online/" style="background-color:#1b9d2c!important;color:#ffffff;"><span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 4th product -->
            <div class="wrap mcb-wrap mcb-wrap-g0brex0y4 valign-top clearfix one-fourth" data-col="one-fourth">
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column mcb-item-z2ld6f0c9 one column_pricing_item">
                        <div class="pricing-box  pricing-box-box">
                            <div class="plan-header">
                                <div class="image">
                                    <img src="https://mobileivnurses.com/wp-content/uploads/2021/07/add-ins-iv-bag.jpg" alt="Ultimate Myers IV Bag" width="1080" height="1080">
                                </div>
                                <h2>Ad-Ins</h2>
                                <div class="price"><sup class="currency">$</sup><span>25+</span><sup class="period"></sup></div>
                                <hr class="hr_color">
                                <h3>Restore Your Youth</h3>
                                <ul>
                                    <li>Increase the effectiveness of your IV or target a specific symptom by upgrading your IV with an Add-In or Intramuscular Injection</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a class="button mivn-button button_size_1" href="https://mobileivnurses.com/schedule-online/" style="background-color:#1b9d2c!important;color:#ffffff;"><span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            
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