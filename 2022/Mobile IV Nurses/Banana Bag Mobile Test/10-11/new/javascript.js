function initCode() {
    jQuery(document).ready(function(jQuery){
        if(!jQuery('body').hasClass('bananaBag_test')) {
            jQuery('body').addClass('bananaBag_test');

          // Put your test code here
    jQuery('.sections_group .column.mcb-column.mcb-item-r3qojx3hr.one-second').before(`<div class="iV_drip">
    <div class="section_wrapper">
        <div class="mcb-wrap-inner">
            <div class="iV_drip_wrap iV_drip_wrap_0">
                <div class="best-seller seller">
                    <div class="best-seller-wrap seller-wrap">Best Seller!</div>
                </div>
                <div class="iV_drip_inner">
                    <div class="image"> <img src="/wp-content/uploads/2021/07/IMG950823.jpg" alt="Myers Cocktail">
                    </div>
                    <div class="desc">
                        <h3 class="headline">Myers' Cocktail - Now $195</h3>
                        <p class="sub_Head">Our Best Selling Package</p>
                        <ul>
                            <li>- Affordable Relief</li>
                            <li>- Supports your Immune System</li>
                            <li>- Cure hangovers and fatigue</li>
                        </ul>
                        <div class="drip-lern-more"><a href="https://mobileivnurses.com/pricing-packages/">Learn More</a></div>
                    </div>
                </div>
                <div class="hero_cta"> <a href="javascript:void(0);" class="button hero_btn popmake-5305 pum-trigger" data-target="model-1">
                        <span class="button_label">Schedule Now</span></a></div>
            </div>
        </div>
    </div>
</div>`);

jQuery('.sections_group .image_frame.no_border').before(`<div class="iV_drip iV_drip2">
    <div class="section_wrapper">
        <div class="mcb-wrap-inner">
            <div class="iV_drip_wrap iV_drip_wrap_2">
                <div class="new-tag seller">
                    <div class="new-tag-wrap seller-wrap">New!</div>
                </div>
                <div class="iV_drip_inner">
                    <div class="image"> 
                        <img src="https://mobileivnurses.com/wp-content/uploads/2022/08/HSN-Mobile-IV-1.jpg" alt="Performance Plus"> </div>
                    <div class="desc">
                        <h3 class="headline">Hair, Skin, Nails - $275</h3>
                        <p class="sub_Head">Restore Your Youth</p>
                        <ul>
                            <li>- Give your skin a youthful glow</li>
                            <li>- Promote healthy hair and nail growth</li>
                            <li>- Combat oxidative stress caused by free radicals</li>
                        </ul>
                        <div class="drip-lern-more"><a href="https://mobileivnurses.com/pricing-packages/">Learn
                                More</a></div>
                    </div>
                </div>
                <div class="hero_cta"><a href="javascript:void(0);" class="button hero_btn popmake-5305 pum-trigger" data-target="model-1"> <span
                            class="button_label">Schedule Now</span></a> </div>
            </div>
        </div>
    </div>
</div>`);

    jQuery('.bananaBag_test').css('opacity','1');
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