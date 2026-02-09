function initCode() {
    jQuery(document).ready(function(jQuery){
        if(!jQuery('body').hasClass('mobile_redesign_test')) {
            jQuery('body').addClass('mobile_redesign_test');
            jQuery(".mfn-builder-content .section").each(function (index) {
                jQuery(this).addClass("mob-" + index);
             }); 
            //How Mobile IV Therapy Works-section
            jQuery('.mob-1').addClass('asap-service-redesign')
            jQuery(".mob-2 .mcb-wrap-inner .column").each(function (index) {
               jQuery(this).addClass("mcb-wrap-inner-" + index);
            }); 
            jQuery(".asap-service-redesign .section_wrapper .section-0 .mcb-wrap-inner .column").each(function (index) {
                jQuery(this).addClass("section-inn" + index);
             }); 
             jQuery(".mob-2 .mcb-section-inner .wrap").each(function (index) {
                jQuery(this).addClass("wrap-" + index);
             });
             jQuery('.mcb-wrap-inner-1 h4').text('Schedule Your Appointment');
             jQuery('.mcb-wrap-inner-1 .desc p').text('We can make recommendations on an IV package that\'s right for you!');
             jQuery('.mcb-wrap-inner-2 .desc p').text('One of our licensed and vetted health care professionals will meet you wherever you choose');
             jQuery('.mcb-wrap-inner-3 h4').text('Feel Better Faster');
             jQuery('.mcb-wrap-inner-3 .desc p').text('You\'ll feel rejuvenated and revived almost instantly!');
             //jQuery('.section-inn4').addClass('hide-class');
            //end How Mobile IV Therapy Works

            //iV_drip
            jQuery('.mob-2').after('<div class="iV_drip">\
            <div class="drips-title span"><span>Our Most Popular IV Drips</span></div>\
            <div class="section_wrapper">\
                <div class="mcb-wrap-inner">\
                    <div class="iV_drip_wrap iV_drip_wrap_0">\
                      <div class="best-seller seller"><div class="best-seller-wrap seller-wrap">Best Seller!</div></div>\
                        <div class="iV_drip_inner">\
                            <div class="image">\
                                <img src="/wp-content/uploads/2021/07/IMG950823.jpg"  alt="Myers Cocktail">\
                            </div>\
                            <div class="desc">\
                                <h3 class="headline">Myers\' Cocktail - Now $195</h3>\
                                <p class="sub_Head">Our Best Selling Package</p>\
                                <ul>\
                                    <li>- Affordable Relief</li>\
                                    <li>- Supports your Immune System</li>\
                                    <li>- Cure hangovers and fatigue</li>\
                                </ul>\
                                <div class="drip-lern-more"><a href="https://mobileivnurses.com/pricing-packages/">Learn More</a></div>\
                            </div>\
                        </div>\
                        <div class="hero_cta">\
                            <a href="javascript:void(0);" class="button hero_btn" data-target="model-1">\
                                <span class="button_label">Schedule Now</span></a></div>\
                        </div>\
                    <div class="iV_drip_wrap iV_drip_wrap_1">\
                        <div class="iV_drip_inner">\
                            <div class="image">\
                                <img src="https://mobileivnurses.com/wp-content/uploads/2022/04/2AEC0E3C-D18B-4B67-AA36-E79F89531888.jpeg" alt="Ultimate Myers">\
                            </div>\
                            <div class="desc">\
                                <h3 class="headline">Ultimate Myers - $295</h3>\
                                <p class="sub_Head">Our Premium Package</p>\
                                <ul>\
                                    <li>- Knock out symptoms Fast</li>\
                                    <li>- Be more Alert & Energetic</li>\
                                    <li>- Vitamin C & Glutathione</li>\
                                </ul>\
                                <div class="drip-lern-more"><a href="https://mobileivnurses.com/pricing-packages/">Learn More</a></div>\
                            </div>\
                        </div>\
                        <div class="hero_cta"><a href="javascript:void(0);" class="button hero_btn" data-target="model-1">\
                            <span class="button_label">Schedule Now</span></a>\
                        </div>\
                    </div>\
                    <div class="iV_drip_wrap iV_drip_wrap_2">\
                    <div class="new-tag seller"><div class="new-tag-wrap seller-wrap">New!</div></div>\
                        <div class="iV_drip_inner">\
                            <div class="image">\
                                <img src="https://mobileivnurses.com/wp-content/uploads/2022/08/HSN-Mobile-IV-1.jpg" alt="Performance Plus">\
                            </div>\
                            <div class="desc">\
                                <h3 class="headline">Hair, Skin, Nails - $275</h3>\
                                <p class="sub_Head">Restore Your Youth</p>\
                                <ul>\
                                    <li>- Give your skin a youthful glow</li>\
                                    <li>- Promote healthy hair and nail growth</li>\
                                    <li>- Combat oxidative stress caused by free radicals</li>\
                                </ul>\
                                <div class="drip-lern-more"><a href="https://mobileivnurses.com/pricing-packages/">Learn More</a></div>\
                            </div>\
                        </div>\
                        <div class="hero_cta"><a href="javascript:void(0);" class="button hero_btn" data-target="model-1">\
                            <span class="button_label">Schedule Now</span></a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="full_Menu">\
                <a href="https://mobileivnurses.com/pricing-packages/">Click Here to see our Full Menu</a>\
            </div>\
        </div>'); 
            jQuery(document).on('click', '.mobile_redesign_test .iV_drip .hero_cta .hero_btn, .mobile_redesign_test .iV_nurses .hero_cta a.button.hero_btn, .contact_us a[data-target="model-1"]', function(e){
                e.preventDefault();
                jQuery('.mob-0 .modalOpen').click();
            });
        }

        //iV_nurses
        jQuery('.iV_drip').after('<div class="iV_nurses">\
          <div class="container">\
           <div class="drips_nurses"><span>Why Mobile IV Nurses?</span></div>\
           <div class="iV_nurses_inner">\
             <div class="nurses_box convenient ">\
               <div class="nurses_left_box">\
                 <p>One of our trained registered nurses or paramedics (dependent on location) will arrive ready to provide the relief you need.</p>\
               </div>\
               <div class="nurses_rigth_box">\
                 <div class="nurses_img_box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1661152362/mobileIVnurses/Pricing_and_Packages_Test/Convenient.png" alt="Convenient"></div>\
               </div>\
             </div>\
             <div class="nurses_box affordable">\
               <div class="nurses_left_box">\
                 <p>We\'ve helped thousands recover from migraines, dehydration, jet lag, chemotherapy symptoms, all at a lower cost than a hospital visit.</p>\
               </div>\
               <div class="nurses_rigth_box">\
                 <div class="nurses_img_box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1661152362/mobileIVnurses/Pricing_and_Packages_Test/Affordable.png" alt="Affordable"></div>\
               </div>\
             </div>\
             <div class="nurses_box fast">\
               <div class="nurses_left_box">\
                 <p>The convenience of IV therapy in your home, office, or hotel room so you can relax during treatment</p>\
               </div>\
               <div class="nurses_rigth_box">\
                 <div class="nurses_img_box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1661152362/mobileIVnurses/Pricing_and_Packages_Test/Fast.png" alt="Fast"></div>\
               </div>\
             </div>\
           </div>\
            <div class="hero_cta">\
                <a href="javascript:void(0);" class="button hero_btn" data-target="model-1">\
                    <span class="button_label">Schedule Now</span>\
                </a>\
            </div>\
          </div>\
        </div>');

        //faq
        jQuery('.iV_nurses').after(' <div class="section the_content has_content">\
        <div class="section_wrapper">\
            <div class="the_content_wrapper ">\
            <h2>FAQs</h2>\
                <div class="wpsm_panel-group" id="wpsm_accordion_4874">\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse1" aria-expanded="false">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">What are your hours? </span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse1" class="wpsm_panel-collapse collapse" aria-expanded="false" style="height: 0px;">\
                            <div class="wpsm_panel-body">Our team provides mobile IV vitamin therapy from 8 a.m. to 8 p.m. daily. We also offer 24-hour service, depending on nurse availability.&nbsp; </div>\
                        </div>\
                    </div>\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse2">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">What locations do you serve? </span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse2" class="wpsm_panel-collapse collapse ">\
                            <div class="wpsm_panel-body">Mobile IV Nurses has multiple locations throughout Arizona and Florida, including Miami, Phoenix, Fort Lauderdale, Palm Beach Gardens, Tamp, Tucson, Flagstaff, and many others. <a href="https://mobileivnurses.com/areas-we-serve/">You can find a list of all our service areas here.</a></div>\
                        </div>\
                    </div>\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse3">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">How long does an IV treatment take?&nbsp; </span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse3" class="wpsm_panel-collapse collapse ">\
                            <div class="wpsm_panel-body">We specialize in&nbsp;prompt, responsive IV therapy. A typical appointment takes 30 to 45 minutes. The specific length of time for your IV infusion depends on the treatment you select. </div>\
                        </div>\
                    </div>\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse4">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">Does insurance cover Mobile IV vitamin therapy?</span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse4" class="wpsm_panel-collapse collapse ">\
                            <div class="wpsm_panel-body">We do not accept insurance for treatment. However, we do take cash, check, debit, credit, HSA, and FSA. Learn more about our&nbsp;payment policies and options. </div>\
                        </div>\
                    </div>\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse8">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">Who should get an IV? </span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse8" class="wpsm_panel-collapse collapse ">\
                            <div class="wpsm_panel-body">Just about anyone! Depending on their health history, IV therapy works well for people ages 10 and older who weigh more than 100 pounds. The patient must be able to consent to treatment.&nbsp; </div>\
                        </div>\
                    </div>\
                    <div class="wpsm_panel wpsm_panel-default">\
                        <div class="wpsm_panel-heading" role="tab">\
                            <h4 class="wpsm_panel-title">\
                                <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse9">\
                                    <span class="ac_open_cl_icon fa fa-plus"></span>\
                                    <span class="ac_title_class">How often should I get an IV treatment? </span>\
                                </a>\
                            </h4>\
                        </div>\
                        <div id="ac_4874_collapse9" class="wpsm_panel-collapse collapse ">\
                            <div class="wpsm_panel-body">This depends on what you want to achieve with vitamin IV therapy: -Weekly IV drips are used for detox or wellness treatments. Multiple IV infusions over the course of a few days help bring symptom relief to people suffering from illnesses. Occasional IV treatments are used by people suffering flare-ups of medical conditions, such as migraine or arthritis. For instance, migraine attacks may be lessened in severity or even prevented with timely IV therapy. IVs are also ideal for temporary conditions such as athletic recovery, hangovers, or dehydration from excessive sun or heat exposure.</div>\
                        </div>\
                    </div>\
                </div>\
                <p class="contact_us">If you have additional questions about IV therapy, don\'t hesitate to <a href="#" data-target="model-1">contact us</a> today.</p>\
                <p>Expect a reply within 24 hours. Contact Mobile IV Nurses today and let our in-home IV treatments get you feeling better than ever.</p>\
                <div class="desc">\
                    <h3>Payment Methods</h3> We accept cash and all major credit cards. Our services are also HSA (Health Savings Account) approved! <img style="max-width:90%" src="/wp-content/uploads/2021/07/accepted-cards.png" alt="All Major Cards Accepted">\
                </div>\
            </div>\
        </div>\
    </div>')
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