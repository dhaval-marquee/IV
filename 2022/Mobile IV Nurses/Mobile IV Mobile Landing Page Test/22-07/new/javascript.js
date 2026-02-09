function initCode() {
    jQuery(document).ready(function(jQuery){
        if(!jQuery('body').hasClass('mobile_redesign_test')) {
            jQuery('body').addClass('mobile_redesign_test');

            jQuery('.mobile_redesign_test #Top_bar .logo').after(`<div class="nav_cta">
                <a href="javascript:void(0);" data-target="model-2">
                    <span>Questions? click here to call</span>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/home-page/Phone-Icon-Blue.png" alt="contact">
                </a>
            </div>`);

            jQuery('.mobile_redesign_test #Wrapper #Content .entry-content .mfn-builder-content').prepend(`<div class="hero">
                <div class="section_wrapper mcb-section-inner">
                    <div class="hero_content">
                        <h2 class="hero_title">Feel Better Faster</h2>
                        <p class="hero_description">Fast and easy mobile IV therapy when you need it, where you need it</p>
                        <div class="hero_cta">
                            <a href="javascript:void(0);" class="button hero_btn" data-target="model-1">
                                <span class="button_label">Schedule Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`);

            jQuery('.mobile_redesign_test .sections_group .section.mcb-section.mcb-section-hf3po8unt').addClass('mobile_IV_Therapy');
            jQuery('.mobile_IV_Therapy .how_it_works p a').text(jQuery('.mobile_IV_Therapy .how_it_works p a').text().replace('schedule', "Schedule"));
            jQuery('.mobile_IV_Therapy .one-fourth:nth-child(2) h4').html('Schedule Your Appointment');
            jQuery('.mobile_IV_Therapy .one-fourth:nth-child(3) h4').text(jQuery('.mobile_IV_Therapy .one-fourth:nth-child(3) h4').text().replace('To', "to"));
            jQuery('.mobile_IV_Therapy .one-fourth:nth-child(3) .desc p').html('One of our licensed and vetted health care professionals will meet you wherever you choose and administer your IV drip.');
            jQuery('.mobile_IV_Therapy .one-fourth:nth-child(4) h4').html('Feel Better Faster');
            jQuery('.mobile_IV_Therapy .one-fourth:nth-child(4) .desc p').html("You'll feel rejuvenated and revived almost&nbsp;instantly!");
            jQuery('.mobile_redesign_test .sections_group .section.mcb-section.mcb-section-hf3po8unt').after(`<div class="list_section">
                <div class="section_wrapper">
                    <h2 class="title">Why Mobile IV Nurses?</h2>
                    <ul>
                    <li>
                        <div class="img_wrapper">
                            <span>
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957591/mobileIVnurses/home-page/HomePage_redesign/IV_Icon.png" alt="IV icon">
                            </span>
                        </div>
                        <p>You can expect one of our trained registered nurses or paramedics (dependent on location) to arrive ready to provide the relief you need.</p>
                    </li>
                    <li>
                        <div class="img_wrapper">
                            <span>
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957591/mobileIVnurses/home-page/HomePage_redesign/IV_Icon.png" alt="IV icon">
                            </span>
                        </div>
                        <p>We've helped thousands of clients across the country recover from migraines, dehydration, jet lag, chemotherapy symptoms, and more.</p>
                    </li>
                    <li>
                        <div class="img_wrapper">
                            <span>
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957591/mobileIVnurses/home-page/HomePage_redesign/IV_Icon.png" alt="IV icon">
                            </span>
                        </div>
                        <p>The convenience of IV therapy in your home, office, or hotel room so you can relax during treatment.</p>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="iV_drip">
                <h2 class="title">Our Most Popular IV Drips</h2>
                <div class="section_wrapper">
                    <div class="mcb-wrap-inner">
                        <div class="iV_drip_wrap">
                            <div class="iV_drip_inner">
                                <div class="image">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957592/mobileIVnurses/home-page/HomePage_redesign/Myers_Bag.jpg"  alt="Myers Bag">
                                </div>
                                <div class="desc">
                                    <h3 class="headline">Myers\' Cocktail - Now $195</h3>
                                    <p class="sub_Head">Our Best Selling Package</p>
                                    <ul>
                                        <li>-Affordable Relief</li>
                                        <li>-Supports your Immune System</li>
                                        <li>-Cure hangovers and fatigue</li>
                                        <li>-Six high impact ingredients</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hero_cta">
                                <a href="javascript:void(0);" class="button hero_btn" data-target="model-1">
                                    <span class="button_label">Schedule Now</span></a></div>
                            </div>
                        <div class="iV_drip_wrap">
                            <div class="iV_drip_inner">
                                <div class="image">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957592/mobileIVnurses/home-page/HomePage_redesign/Ultimate_Myers_Bag.jpg" alt="Ultimate Myers Bag">
                                </div>
                                <div class="desc">
                                    <h3 class="headline">Ultimate Myers - $295</h3>
                                    <p class="sub_Head">Our Premium Package</p>
                                    <ul>
                                        <li>-Knock out symptoms Fast</li>
                                        <li>-More Alert & Energetic</li>
                                        <li>-5000mg Vitamin C</li>
                                        <li>-1000mg Glutathione</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hero_cta"><a href="javascript:void(0);" class="button hero_btn" data-target="model-1">
                                <span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                        <div class="iV_drip_wrap">
                            <div class="iV_drip_inner">
                                <div class="image">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657957592/mobileIVnurses/home-page/HomePage_redesign/Performance_Plus_Bag.jpg" alt="Performance Plus Bag">
                                </div>
                                <div class="desc">
                                    <h3 class="headline">The Performance Plus - $325</h3>
                                    <p class="sub_Head">Raise Your Game</p>
                                    <ul>
                                        <li>-Athletic Formula</li>
                                        <li>-Pre or Post Workout</li>
                                        <li>-Boost performance to it\'s highest level</li>
                                        <li>-1000mg Glutathione</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hero_cta"><a href="javascript:void(0);" class="button hero_btn" data-target="model-1">
                                <span class="button_label">Schedule Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full_Menu">
                    <a href="https://mobileivnurses.com/pricing-packages/">Click Here to see our Full Menu</a>
                </div>
            </div>
            <div class="list_section">
                <div class="section_wrapper">
                    <h2 class="title">Benefits of IV Drips</h2>
                    <ul>
                        <li>
                            <div class="img_wrapper">
                                <span>
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1658387172/mobileIVnurses/home-page/HomePage_redesign/icon_1.png" alt="Stopwatch icon">
                                </span>
                            </div>
                            <h4>Fast</h4>
                            <p>IV\'s are highly efficient with an immediate effect</p>
                        </li>
                        <li>
                            <div class="img_wrapper">
                                <span>
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1658387172/mobileIVnurses/home-page/HomePage_redesign/icon_2.png" alt="Wallet icon">
                                </span>
                            </div>
                            <h4>Affordable</h4>
                            <p>Mobile IV services cost less than a hospital service</p>
                        </li>
                        <li>
                            <div class="img_wrapper">
                                <span>
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1658387172/mobileIVnurses/home-page/HomePage_redesign/icon_3.png" alt="Bullseye icon">
                                </span>
                            </div>
                            <h4>Effective</h4>
                            <p>IV treatments deliver nutrients right where they can do the most good</p>
                        </li>
                        <li>
                            <div class="img_wrapper">
                                <span>
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1658387172/mobileIVnurses/home-page/HomePage_redesign/icon_4.png" alt="Phone touch icon">
                                </span>
                            </div>
                            <h4> Convenient</h4>
                            <p>Save time and money by avoiding the hospital waiting room</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section the_content has_content">
                <div class="section_wrapper">
                    <div class="the_content_wrapper ">
                    <h2>FAQs</h2>
                        <div class="wpsm_panel-group" id="wpsm_accordion_4874">
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse1" aria-expanded="false">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">What are your hours? </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse1" class="wpsm_panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                    <div class="wpsm_panel-body">Our team provides mobile IV vitamin therapy from 8 a.m. to 8 p.m. daily. We also offer 24-hour service, depending on nurse availability.&nbsp; </div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse2">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">What locations do you serve? </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse2" class="wpsm_panel-collapse collapse ">
                                    <div class="wpsm_panel-body">Mobile IV Nurses has multiple locations throughout Arizona and Florida, including Miami, Phoenix, Fort Lauderdale, Palm Beach Gardens, Tampa, Tucson, Flagstaff, and many others. <a href="https://mobileivnurses.com/areas-we-serve/">You can find a list of all our service areas here.</a></div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse3">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">How long does an IV treatment take?&nbsp; </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse3" class="wpsm_panel-collapse collapse ">
                                    <div class="wpsm_panel-body">We specialize in&nbsp;prompt, responsive IV therapy. A typical appointment takes 30 to 45 minutes. The specific length of time for your IV infusion depends on the treatment you select. </div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse4">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">Does insurance cover IV vitamin therapy? </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse4" class="wpsm_panel-collapse collapse ">
                                    <div class="wpsm_panel-body">We do not accept insurance for treatment. However, we do take cash, check, debit, credit, HSA, and FSA. <a href="https://mobileivnurses.com/contact-page/">Contact us with questions about payment options.</a> </div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse8">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">Who should get an IV? </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse8" class="wpsm_panel-collapse collapse ">
                                    <div class="wpsm_panel-body">Just about anyone! Depending on their health history, IV therapy works well for people ages 10 and older who weigh more than 100 pounds. The patient must be able to consent to treatment.&nbsp; </div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                            <!-- Inner panel Start -->
                            <div class="wpsm_panel wpsm_panel-default">
                                <div class="wpsm_panel-heading" role="tab">
                                    <h4 class="wpsm_panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="" href="javascript:void(0)" data-target="#ac_4874_collapse9">
                                            <span class="ac_open_cl_icon fa fa-plus"></span>
                                            <span class="ac_title_class">How often should I get an IV treatment? </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac_4874_collapse9" class="wpsm_panel-collapse collapse ">
                                    <div class="wpsm_panel-body">This depends on what you want to achieve with vitamin IV therapy: -Weekly IV drips are used for detox or wellness treatments. Multiple IV infusions over the course of a few days help bring symptom relief to people suffering from illnesses. Occasional IV treatments are used by people suffering flare-ups of medical conditions, such as migraine or arthritis. For instance, migraine attacks may be lessened in severity or even prevented with timely IV therapy. IVs are also ideal for temporary conditions such as athletic recovery, hangovers, or dehydration from excessive sun or heat exposure.</div>
                                </div>
                            </div>
                            <!-- Inner panel End -->
                        </div>
                        <p class="contact_us">If you have additional questions about IV therapy, don't hesitate to <a href="#" data-target="model-1">contact us</a> today.</p>
                        <p>Expect a reply within 24 hours. Contact Mobile IV Nurses today and let our in-home IV treatments get you feeling better than ever.</p>
                        <div class="desc">
                            <h3>Payment Methods</h3> We accept cash and all major credit cards. Our services are also HSA (Health Savings Account) approved! <img style="max-width:90%" src="/wp-content/uploads/2021/07/accepted-cards.png" alt="all major cards accepted">
                        </div>
                    </div>
                </div>
            </div>`);

            jQuery('.mobile_redesign_test').append(`<div id="model_lightbox" class="modal-onload fade">
                <div class="modal-body">
                    <div class="modal-content">
                        <a href="javascript:;" class="model-close modal_close">X</a>
                        <div id="model-1" class="model-inner open">
                            <h3 class="model-title">How do you want to schedule?</h3>
                            <div class="modal-button-block">
                                <a href="/schedule-online/" class="Schedule_demo_button button modal-button">Schedule Online</a>
                                <a href="javascript:;" class="Schedule_by_phone button modal-button" data-target="model-2">Schedule by Phone</a>
                                <a href="javascript:;" class="Schedule_by_text button modal-button" data-target="model-3">Schedule by Text</a>
                            </div>
                        </div>
                        <div id="model-2" class="model-inner">
                            <h3 class="model-title">Choose your service location</h3>
                            <div class="modal-button-block">
                                <a href="tel:6026776058" class="phone_by_arizona button modal-button">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/home-page/Phone-Icon.png" width="20" alt="Phone">
                                    <span>Arizona</span>
                                </a>
                                <a href="tel:3054585118" class="phone_by_florida button modal-button">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/home-page/Phone-Icon.png" width="20" alt="Phone">
                                    <span>Florida</span>
                                </a>
                            </div>
                        </div>
                        <div id="model-3" class="model-inner">
                            <h3 class="model-title">Choose your service location</h3>
                            <div class="modal-button-block">
                                <a href="sms:6026776058" class="text_by_arizona button modal-button">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/home-page/Chat-Icon.png" width="20" alt="SMS">
                                    <span>Arizona</span>
                                </a>
                                <a href="sms:3054585118" class="text_by_florida button modal-button">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/home-page/Chat-Icon.png" width="20" alt="SMS">
                                    <span>Florida</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            // Model Open
            jQuery('.mobile_redesign_test .nav_cta a, .mobile_redesign_test .hero .hero_cta a, .mobile_redesign_test .iV_drip .hero_cta .hero_btn, .has_content .the_content_wrapper .contact_us a').click(function(){
                jQuery('#model_lightbox').css('display', 'block');
                jQuery('html').css('overflow', 'hidden');
                jQuery('body').css('overflow', 'hidden');
                jQuery('#model_lightbox').fadeIn();
                jQuery('#model_lightbox .model-inner').removeClass('open');
                var target = jQuery(this).attr('data-target');
                jQuery('#' + target).addClass('open');
                var modalInterval = setInterval(function () {
                    if (jQuery('#model_lightbox').length > 0) {
                        jQuery('#model_lightbox').addClass('in');
                        clearInterval(modalInterval);
                    }
                }, 200);
            });

            // Modal Close
            jQuery('#model_lightbox .model-close').click(function () {
                jQuery('html').css('overflow', '');
                jQuery('body').css('overflow', '');
                jQuery('#model_lightbox').css('display', '');
                jQuery('#model_lightbox').removeClass('in');
            });

            jQuery('.mobile_redesign_test').css('opacity','1');
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