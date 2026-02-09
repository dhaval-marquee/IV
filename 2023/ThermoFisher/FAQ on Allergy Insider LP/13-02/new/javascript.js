function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('faq_iv')) {
        bodyEle.classList.add('faq_iv');
        
        // Put your test code here
        $('.faq_iv #our-mission').closest('.cmp-container').after(`<div class="faq_wrapper">
            <h3>FAQs</h3>
            <div class="faq-wrap">
                <label>Who can develop an allergy?
                    <span class="fa fa-minus"></span>
                </label>
                <div class="content active">
                    <p>Anyone can be affected by allergies, but some people are more prone to them than others. For children, allergies can develop for the first time at any point during their youth. It’s even possible some adults will develop allergies later in life.</p>
                </div>
            </div>
            <div class="faq-wrap">
                <label>Is it possible to outgrow an allergy? <span class="fa fa-plus"></span></label>
                <div class="content">
                    <p>Because allergies change over time, many people may outgrow old allergies and develop new ones. Some children stop reacting to allergens, such as milk and eggs, as they grow, yet allergies to foods such as nuts and fish tend to remain.</p>
                </div>
            </div>
            <div class="faq-wrap">
                <label>Why don't allergy symptoms appear all the time? <span class="fa fa-plus"></span></label>
                <div class="content">
                    <p>Everyone has his or her own unique combination of allergic triggers, and not all of them are obvious. For some, symptoms may appear only when they encounter two or more substances they’re allergic to at the same time.</p>
                </div>
            </div>
            <div class="faq-wrap">
                <label>What is allergic asthma? <span class="fa fa-plus"></span></label>
                <div class="content">
                    <p>Allergic asthma, or allergy-induced asthma, is a type of asthma that is triggered or made worse by allergies. Many of the same substances that can cause an allergic reaction may also affect people with asthma. Common allergens that may trigger allergic asthma include: pet dander, dust mites, insects, pollen, and mold.</p>
                </div>
            </div>
        </div>`);
        
        $('.faq_iv .faq-wrap > label').click(function() {
            
            if($(this).next(".content").hasClass('active')){
                $(this).next(".content").removeClass('active').slideUp();
                $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
            }else{
                $(".faq-wrap .content").removeClass('active').slideUp();
                $('.faq-wrap label span').removeClass("fa-minus").addClass("fa-plus");
                $(this).next(".faq-wrap .content").addClass('active').slideDown();
                $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
         
            }
            
            return false;
        });
    }
}

loadTestCode();