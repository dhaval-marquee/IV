var $ = jQuery;

if(!$('body').hasClass('iv_dehydration')) {
    $('body').addClass('iv_dehydration');

    $('.entry-content .section.mcb-section:first-of-type').before(`<div class="hero_section">
        <div class="container">
            <div class="hero_left">
                <img src="https://mobileivnurses.com/wp-content/uploads/2021/07/bigstock-Tired-athlete-runner-exhausted-131336933-768x512-1.jpg">
            </div>
            <div class="hero_right">
                <h2>IV Therapy for Dehydration</h2>
                <p><b>We need to be properly hydrated so we can function at our peak performance.</b></p>
                <p>When our fluid levels are low, it can trigger many symptoms that make us <b>feel run down</b> and take a toll on our health. Mild dehydration may be cured by drinking extra fluids, but more severe cases call for the <b>replenishment only IV therapy can provide!</b></p>
                <p><a href="https://mobileivnurses.com/about-mobile-iv-nurses/">Mobile IV Nurses specializes</a> in dehydration treatment with IVs. We use high-quality, medical-grade IVs that contain vitamins, minerals, and electrolytes. The electrolytes are especially important because the body needs these chemicals to maintain healthy muscle and nerve functions, repair tissues, and perform other important jobs. When we lose these fluids and become dehydrated—through illness, sweating, or other issues—we also lose valuable electrolytes. IV fluids for dehydration restore those electrolytes and help ease the symptoms we experience when we’re running low on fluids.</p>
            </div>
        </div>
    </div>`);

    $('.hero_section').next().next().next().addClass('dehydration_causes');

    $('.dehydration_causes h2').text('Dehydration Causes');
    $('.dehydration_causes ul:first-of-type li:first-child').html('<b>Sickness : </b> It\'s easy to get dehydrated if we can\'t replace the fluids we lose when we are ill from diarrhea and vomiting.');
    $('.dehydration_causes ul:first-of-type li:last-child').html('<b>Age : </b>Children or older adults are more susceptible to dehydration. Young kids tend to lose more fluids when they\'re sick, while older people have lower fluid levels to being with, so they may dehydrate faster compared to others.');

    $('.dehydration_causes .image_wrapper').closest('.mcb-wrap').prev().removeClass('one-second').next().remove();
    $('.dehydration_causes ul:first-of-type').after('<h2>Dehydration Symptoms</h2>')

    $('.dehydration_causes').after(`<div class="best_therapy">
        <div class="container">
            <h2>The Best Dehydration IV Therapy</h2>
            <div data-col="one" class="product_iv product_1">
                <div class="image_wrapper"><img class="scale-with-grid" src="/wp-content/uploads/2021/07/IMG950823.jpg" alt="IV Hydration Phoenix" title=""></div>
                <div style="" class="product_content">
                    <div class="content_left">
                        <h2 id="myers">MYERS' COCKTAIL - <span class="themecolor"><span style="font-size: 0.9em; vertical-align: top;">$</span><span style="font-size:1.5em">195</span></span></h2>
                        <h3>Our Best Selling Hydration Package</h3>
                        <ul>
                            <li>Features 6 of our highest-impact vitamins, minerals, antioxidants, and hyrdration, can help with skin health, and aid your weight loss regimen.</li>
                            <li>Supports your Immune System and can give you a burst of energy to stop you from feeling sluggish.</li>
                            <li>Recommended for everthing from hangovers to fatigue, the flu, recovery from an athletic event, or a chronic illness.</li>
                        </ul>
                        <div><a href="javascript:;" class="learn_more_link">Learn More</a>
                            <div></div>
                        </div>
                    </div>
                    <div class="content_right">
                        <ul class="list_mixed">
                            <li class="list_check">Normal Saline</li>
                            <li class="list_check">Vitamin B Complex</li>
                            <li class="list_check">Vitamin B12</li>
                            <li class="list_check"><a href="https://mobileivnurses.com/pricing-packages/iv-vitamins-add-ins/vitamin-c/">Vitamin C</a></li>
                            <li class="list_check"><a href="https://mobileivnurses.com/pricing-packages/iv-vitamins-add-ins/glutathione/">Glutathione</a></li>
                            <li class="list_check">Zinc</li>
                            <li class="list_check"><a href="https://mobileivnurses.com/pricing-packages/iv-vitamins-add-ins/magnesium/">Magnesium</a></li>
                        </ul>
                    </div>
                </div>
                <a class="button  has-icon button_right button_size_2 button_theme" href="/schedule-online/">
                    <span class="button_icon"><i class="icon-right-open-mini"></i></span>
                    <span class="button_label">Schedule Now</span>
                </a>
            </div>
            <div data-col="one" class="product_iv product_5">
                <div class="image_wrapper">
                    <img class="scale-with-grid" src="https://mobileivnurses.com/wp-content/uploads/2021/07/Performance-Plus-IV-from-Mobile-IV-Nurses-768x768-1.jpeg" alt="IV Hydration" title="" width="768" height="768">
                </div>
                <div style="" class="product_content">
                    <div class="content_left">
                        <h2 id="premium">THE PERFORMANCE PLUS - <span class="themecolor"><span style="font-size: 0.9em; vertical-align: top;">$</span><span style="font-size:1.5em">325</span></span></h2>
                        <h3>Our Pre- or Post- Workout Package</h3>
                        <ul>
                            <li>We recommend this IV if you are an athlete or will be highly active during the day.</li>
                            <li>The Mobile IV Nurses Formulation includes Saline, Vitamin B complex, B12, Taurine, and NAD+</li>
                            <li>Bring your performance to the highest level you never thought possible!</li>
                        </ul>
                        <div>
                            <a href="javascript:;" class="learn_more_link">Learn More</a>
                            <div></div>
                        </div>
                    </div>
                    <div class="content_right">
                        <ul class="list_mixed">
                            <li class="list_check">Vitamin B Complex</li>
                            <li class="list_check">2 Doses of B12</li>
                            <li class="list_check">Normal Saline</li>
                            <li class="list_check">Taurine</li>
                            <li class="list_check">100mg of NAD+</li>
                        </ul>
                    </div>
                </div>
                <a class="button  has-icon button_right button_size_2 button_theme" href="/schedule-online/">
                    <span class="button_icon"><i class="icon-right-open-mini"></i></span>
                    <span class="button_label">Schedule Now</span>
                </a>
            </div>
        </div>
    </div>`);

    $(document).on('click', 'a.learn_more_link', function(){
        $(this).hide();
        $(this).parent().parent().next().slideDown();
    });

	$('.iv_dehydration .sections_group .mfn-builder-content').append(`<div class="faq_section">
        <div class="container">
            <h2>FAQs</h2>
            <div class="faq_wrapper">
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>What is The Best Dehydration Therapy?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>We recommend the Myers’ Cocktail for dehydration caused by illness, food poisoning, hangovers, and other factors. This blend of vitamins and minerals replenishes the body while also increasing energy and alleviating fatigue.</p>
                        <p>The Myers’ Cocktail contains ingredients that ease symptoms of dehydration, including:</p>
                        <ul>
                            <li><b>B Complex vitamins:</b> promote red blood cell production, which increases energy levels</li>
                            <li><b>Vitamin C:</b> an antioxidant that fights free radicals, supports skin health, and supports the immune system</li>
                            <li><b>Magnesium:</b> supports muscle and nerve function, as well as energy production</li>
                            <li><b>Zinc:</b> helps support your immune system and metabolism</li>
                            <li><b>Glutathione:</b> an antioxidant that fights free radicals</li>
                        </ul>
                        <p>The Myers’ Cocktail provides fast-acting and effective rehydration because this invigorating IV is infused into the bloodstream, so it starts working right away.</p>
                        <p>Mobile IV Nurses saves you the trouble of traveling to an urgent care center or emergency room because we provide these IV fluids for dehydration at your home, office, or any other convenient location. All you need to do is sit back and relax while we take care of you.</p>
                        <p>Our IV packages are <a href="https://mobileivnurses.com/pricing-packages/">affordably priced</a>, and there are several <a href="https://mobileivnurses.com/does-insurance-cover-iv-therapy/">payment options</a> available. <a href="https://mobileivnurses.com/contact-page/">Contact Mobile IV Nurses</a> when you’re dehydrated and want rapid improvement.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Is IV hydration better than drinking water?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>We always recommend that patients drink water to stay hydrated and healthy. An IV shouldn’t replace your water-drinking habit; it should simply be another tool you use to improve your health!</p>
                        <p>That said, IVs do have a few benefits that make them more efficient than water. Firstly, they contain other ingredients that will improve your health. These include vitamins, minerals, and electrolytes, which your body needs to perform at its best. Your IV hydration therapy will replenish those nutrients in your system and help ensure that you are the healthiest you can be.</p> 
                        <p>Additionally, IV therapy floods your cells with fluids and nutrients. This leads to a faster response than simply drinking water because the fluids don’t have to pass through your digestive system. IVs can help you rehydrate instantly when you really need it — but you still should have a glass of water when you’re done.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>When Would I need an IV for dehydration?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Dehydration is a contributing factor to many ailments. Therefore, you can use IV therapy to rehydrate your body whenever you need it. If you’re feeling hungover, sick with the flu, or simply tired after a long and stressful week, the rapid rehydration from IV therapy can help you feel much better.</p>
                        <p>However, IV hydration therapy is particularly useful when you’re suffering from severe dehydration. Be aware of the signs and symptoms of this condition, and alert Mobile IV Nurses if you experience any of the following:</p>
                        <ul>
                            <li>Extreme thirst</li>
                            <li>No urination or very dark urine</li>
                            <li>Dry mouth, lips, and eyes</li>
                            <li>Fatigue or lightheadedness</li>
                        </ul>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>How long does an IV treatment last?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>A typical IV treatment gives you enough nutrients to remain healthy and hydrated for about two weeks. Once- or twice-monthly treatments are usually sufficient to improve your overall health and help you avoid dehydration.</p>
                        <p>However, if you are at risk for dehydration — for example, if you’re older, regularly engage in strenuous exercise, or have a condition like diabetes — you may benefit from getting IV hydration therapy more frequently. You can also get hydration treatments when you’re sick, even if you’ve recently had an infusion.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Can I add medicine to my IV?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Of course! Mobile IV Nurses offers several vitamins and medicines you can add to your treatments to enhance your IV hydration therapy.</p>
                        <p>For example, you can add the anti-nausea medication Zofran to your IV if you’re suffering from vomiting or queasiness (which is common with migraines, hangovers, and the flu). You can add Pepcid to your IV if you suffer from stomach ulcers. Or, if you simply want an additional energy boost, you can add an extra dose of vitamin B12 to your Myers’ Cocktail.</p>
                    </div>
                </div>
            </div>
            <p><b>The registered nurses and paramedics at Mobile IV Nurses have the skills and the experience to help you find the right cocktail for you. Talk to them about your health needs, and they’ll find the IV for dehydration that will make you feel your best.</b></p>
        </div>
    </div>`);
	$('body').on('click','.faq-item-heading',function(){   
	    $(this).parent('.faq-item').toggleClass('active').find('.faq-item-desc').slideToggle(); 
	});


    var useDynamicContent = $('.best_therapy').next().find('h2').nextAll();
    $('.faq_section .container').append(useDynamicContent);



    $('body').css('visibility','visible');
}

setTimeout(() => {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}, 3000);
    