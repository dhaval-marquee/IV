function SPZTestCode() {
    if (!jQuery('body').hasClass('pricing_packages')) {
        jQuery('body').addClass('pricing_packages');
        
        // Put your test code here


        jQuery('.sections_group .section_wrapper.mcb-section-inner').addClass('product_wrapper').before('<div class="hero_wrapper">\
            <div class="container">\
                <h1><b>IV Drip Menu</b></h1>\
                <h3>Increase the effectiveness or target a specific symptom by upgrading your IV with an Add-In or Intramuscular&nbsp;Injection</h3>\
            </div>\
        </div>');

        jQuery('.product_wrapper > div').each(function(n) {
            jQuery(this).removeAttr('class').removeAttr('style');
            jQuery(this).addClass('product_iv product_'+(n+1));
        });

        jQuery('.product_iv .image_frame .image_wrapper').each(function() {
            jQuery(this).closest('.product_iv').prepend(jQuery(this));
        });

        jQuery('.product_iv .mcb-wrap-inner > div:last-child .column_attr').each(function(){
            jQuery(this).parent().parent().before(jQuery(this))
        });
        
        jQuery('.product_iv .column_attr + .mcb-wrap-inner').remove();
        jQuery('.product_iv .column_attr').removeAttr('class').addClass('product_content');

        jQuery('.product_wrapper .product_iv .product_content').each(function(){
            jQuery(this).find('h2').wrap('<div class="content_left"></div>');
        });

        jQuery('.content_left').after('<div class="content_right"></div>');


        jQuery('.product_wrapper .product_iv .product_content ul').each(function(){
            jQuery(this).appendTo(jQuery(this).closest('.product_content').find('.content_right'));
        });

        jQuery('.product_wrapper .product_iv .button').each(function(){
            jQuery(this).appendTo(jQuery(this).closest('.product_content').find('.content_right'));
        });

        jQuery('.content_right').nextAll().remove();

        jQuery('.product_wrapper .product_13').wrap('<div class="three_column"></div>');
        jQuery('.product_wrapper .product_13').after(jQuery('.product_wrapper .product_15'));
        jQuery('.product_wrapper .product_13').after(jQuery('.product_wrapper .product_14'));

        jQuery('.product_wrapper > .three_column').append('<div class="product_iv"><a class="button  has-icon button_right button_size_2 button_theme" href="/schedule-online/"><span class="button_icon"><i class="icon-right-open-mini"></i></span><span class="button_label">Schedule Now</span></a></div>');

        jQuery('.product_wrapper .product_9 .product_content h2').html(jQuery('.product_wrapper .product_9 .product_content h2').html().replace('Purely Saline','The Purely Saline Package'));
        jQuery('.product_wrapper .product_10 .product_content h2').html(jQuery('.product_wrapper .product_10 .product_content h2').html().replace('NAD+','NAD+ Package'));
        jQuery('.product_wrapper .product_11 .product_content h2').html(jQuery('.product_wrapper .product_11 .product_content h2').html().replace('and, Nails ','<span class="text_lowercase">and</span> Nails - '));
        jQuery('.product_wrapper .product_12 .product_content h2').html(jQuery('.product_wrapper .product_12 .product_content h2').html().replace('Restore ','Restore - '));

        jQuery('.product_wrapper .product_4 .product_content ul.list_mixed li.list_check:nth-child(2)').after('<li class="list_check"><a href="https://mobileivnurses.com/pricing-packages/iv-vitamins-add-ins/vitamin-c/">Vitamin C</a></li>');


        jQuery('.product_wrapper .product_iv.product_2 .content_left').append('<h3>Our Premium Package</h3>\
        <ul>\
            <li>5000 mg of Vitamin C and 1000 mg of Glutathion</li>\
            <li>Antioxidant-rich package will knock out the toughest flu or hangover symptoms</li>\
            <li>Increase overall energy and alertness.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_1 .content_left').append('<h3>Our Best Selling Hydration Package</h3>\
        <ul>\
            <li>Features 6 of our highest-impact vitamins, minerals, antioxidants, and hyrdration, can help with skin health, and aid your weight loss regimen.</li>\
            <li>Supports your Immune System and can give you a burst of energy to stop you from feeling sluggish.</li>\
            <li>Recommended for everthing from hangovers to fatigue, the flu, recovery from an athletic event, or a chronic illness.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_4 .content_left').append('<h3>Feel Better Today</h3>\
        <ul>\
            <li>We use Vitamin C, Vitamin D, and Zinc to help your body feel better when you\'re ill and need symptom relief.</li>\
            <li>This IV give you high-quality hydration, which is key for your body to fight and overcome any type of sickness.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_5 .content_left').append('<h3>Our Pre- or Post- Workout Package</h3>\
        <ul>\
            <li>We recommend this IV if you are an athlete or will be highly active during the day.</li>\
            <li>The Mobile IV Nurses Formulation includes Saline, Vitamin B complex, B12, Taurine, and NAD+</li>\
            <li>Bring your performance to the highest level you never thought possible!</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_10 .content_left').append('<h3>Energize your Metabolism</h3>\
        <ul>\
            <li> NAD+ can help you overcome fatigue, aid with cell regeneration, and maximize brain function.</li>\
            <li>NAD+ is known for its potential anti-aging and addiction treatment benefits.</li>\
            <li>NAD+ is used to fuel metabolic reactions by enabling your mitochondria, your cells\' power stations, convert food to energy.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_3 .content_left').append('<h3>Raise your Spirits and Feel Better Fast</h3>\
        <ul>\
            <li>Rapid Rehydration, hangover, cyclic vomiting syndrome, food poisoning, and more</li>\
            <li>Vitamin C and Glutathione provide antioxidants to help with physical and mental recovery.</li>\
            <li>Iv therapy for chronic fatigue syndrome symptoms.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_6 .content_left').append('<h3>Choose 2 Customer Package</h3>\
        <ul>\
            <li>Comes standard with B Vitamins and Saline, great for wellness and rehydration</li>\
            <li>Choose any additional 2 vitamins, antioxidants, or medicines we offer on the bottom of this page in the "Vitamin Add-Ins" section.</li>\
            <li>Our team of trained medical professionals can help you determine what add-ins you should choose.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_7 .content_left').append('<h3>Choose 1 Customer Package</h3>\
        <ul>\
            <li>Comes standard with B Vitamins and Saline, great for wellness and rehydration</li>\
            <li>Choose any additional 1 vitamin, antioxidant, or medicine we offer on the bottom of this page in the "Vitamin Add-Ins" section.</li>\
            <li>Our team of trained medical professionals can help you determine what add-ins you should choose.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_8 .content_left').append('<h3>Affordable Relief</h3>\
        <ul>\
            <li>Comes standard with B Vitamins and Saline, great for wellness and rehydration</li>\
            <li>An extra boost of energy and hydration for an upcoming athletic event, a day in the sun, a bachelor party, moving to a new home, or even a bad nights sleep.</li>\
            <li>This is the most affordable IV package we offer, and is customizable with any of our "Add-ins" at the bottom of this page.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_9 .content_left').append('<h3>Pure Hydration</h3>\
        <ul>\
            <li> Pure fluids for hydration and nothing else, this package is designed for you.</li>\
            <li>Designed for patients who need to get hydrated but do not want additional vitamins of medicines.</li>\
            <li>IV therapy for those with conditional allergies or medical conditions.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_11 .content_left').append('<h3>Restore Your Youth</h3>\
        <ul>\
            <li>Designed to deliver ingredients that help promote healthy hair and nail growth, while also combating oxidative stress caused by free radical to give your skin a youthful glow.</li>\
        </ul>');
        jQuery('.product_wrapper .product_iv.product_12 .content_left').append('<h3>Restore Your Body</h3>\
        <ul>\
            <li>Designed to aid the body through increased energy and oxidation of fat, all while minimizing muscle loss, supporting exercise performance and aiding in the reduction of post workout recovery times.</li>\
        </ul>');



        jQuery('.product_wrapper .product_iv.product_13 .content_left').append('<h3><span class="price_symbole">$</span>25</h3>');
        jQuery('.product_wrapper .product_iv.product_14 .content_left').append('<h3><span class="price_symbole">$</span>35 <small>per injection</small></h3>');
        jQuery('.product_wrapper .product_iv.product_15 .content_left').append('<h3><span class="price_symbole">$</span>50</h3>');

        jQuery('.product_wrapper .product_iv.product_11 .content_right, .product_wrapper .product_iv.product_12 .content_right').append('<a class="button  has-icon button_right button_size_2 button_theme" href="/schedule-online/"><span class="button_icon"><i class="icon-right-open-mini"></i></span><span class="button_label">Schedule Now</span></a>');

        jQuery('.product_wrapper .product_iv.product_11 .content_right ul, .product_wrapper .product_iv.product_12 .content_right ul').addClass('list_mixed');
        jQuery('.product_wrapper .product_iv.product_11 .content_right ul li, .product_wrapper .product_iv.product_12 .content_right ul li').addClass('list_check');





        jQuery('.product_wrapper .product_iv .product_content ul.list_mixed li').each(function () {
            jQuery(this).html(jQuery(this).html().replace('1000cc', ''));
        });

        jQuery('.product_wrapper .product_11 .product_content ul.list_mixed li, .product_wrapper .product_12 .product_content ul.list_mixed li').each(function(){
            var newText = jQuery(this).text().split(' -')[0];
            jQuery(this).text(newText)
        });

        





        jQuery('.product_wrapper').after(`<div class="benefit_section">
            <div class="container">
                <h2>Benefits of IV Therapy</h2>
                <ul>
                    <li>
                        <div class="img_wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1660289261/mobileIVnurses/Pricing_and_Packages_Test/IV_Icon.png" alt="Mobile IV bag">
                        </div>
                        <h3>Fast</h3>
                        <p>IVs are highly efficient with an immediate effect</p>
                    </li>
                    <li>
                        <div class="img_wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1660289261/mobileIVnurses/Pricing_and_Packages_Test/IV_Icon.png" alt="Mobile IV bag">
                        </div>
                        <h3>Affordable</h3>
                        <p>Mobile IV services cost less than a hospital visit</p>
                    </li>
                    <li>
                        <div class="img_wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1660289261/mobileIVnurses/Pricing_and_Packages_Test/IV_Icon.png" alt="Mobile IV bag">
                        </div>
                        <h3>Effective</h3>
                        <p>IVs deliver nutrients right where they can do the most good</p>
                    </li>
                    <li>
                        <div class="img_wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1660289261/mobileIVnurses/Pricing_and_Packages_Test/IV_Icon.png" alt="Mobile IV bag">
                        </div>
                        <h3>Convenient</h3>
                        <p>Save time by avoiding the hospital waiting room.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="faq_section">
            <div class="container">
                <h2>FAQs</h2>
                <div class="faq_wrapper">
                    <div class="faq_column">
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>What Are My Payment Options?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>Payment is accepted at the time of service. We take cash, check, debit, credit, HSA, and FSA.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>Do You Accept HSA?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>We do! We can also provide you with a detailed receipt should you require one.</p>
                            </div>
                        </div>
                    </div>

                    <div class="faq_column">
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>Do You Charge Travel Fees?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>We do not charge a travel fee for service within our <a href="https://mobileivnurses.com/areas-we-serve/">standard service area</a>. We are happy to accommodate any special requests, give us a call!</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>Do You Travel After Hours?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>Yes, we can, subject to availability and your location. After-hours vitamin IV therapy may incur additional fees.</p>
                            </div>
                        </div>
                    </div>

                    <div class="faq_column">
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>Do You Accept insurance?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>We do not accept insurance for treatment. However, we do take cash, check, debit, credit, HSA, and FSA. We can provide you with a detailed receipt.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-item-heading">
                                <h3>Do You Have a Minimum Order?</h3>
                                <div class="faq-icon"></div>
                            </div>
                            <div class="faq-item-desc" style="display: none">
                                <p>Our Purely Saline Package starts at $100. You may add or remove injections to your order at any point during your visit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);


        jQuery(document).on('click', '.faq-item-heading', function(){
            var $this = jQuery(this);
            $this.toggleClass('active');
            $this.next().slideToggle();
        });










        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'pricing_packages_Cookie';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    SPZTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}