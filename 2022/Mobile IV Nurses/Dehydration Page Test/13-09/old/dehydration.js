var $ = jQuery;

if(!$('body').hasClass('iv_dehydration')) {
    $('body').addClass('iv_dehydration');
    
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
                        <li>B Complex vitamins: promote red blood cell production, which increases energy levels</li>
                        <li>Vitamin C: an antioxidant that fights free radicals, supports skin health, and supports the immune system</li>
                        <li>Magnesium: supports muscle and nerve function, as well as energy production</li>
                        <li>Zinc: helps support your immune system and metabolism</li>
                        <li>Glutathione: an antioxidant that fights free radicals</li>
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
    </div>
</div>
`);
	$('body').on('click','.faq-item-heading',function(){   
	    $(this).parent('.faq-item').toggleClass('active').find('.faq-item-desc').slideToggle(); 
	});
}