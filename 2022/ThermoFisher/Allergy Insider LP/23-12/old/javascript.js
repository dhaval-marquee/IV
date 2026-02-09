function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('home_iv')) {
        bodyEle.classList.add('home_iv');
        
        // Put your test code here
        $('.home_iv .carouselWrapper .slick-initialized').slick('unslick');

        $('.home_iv .carouselWrapper .aem-Grid .cmp-well:first-child h2 span:first-child').text('Your Trusted');
        $('.home_iv .carouselWrapper .aem-Grid .cmp-well:first-child h2 span:last-child').text('Resource in Allergy Education and Testing');
        
        $('.aem-Grid>.aem-GridColumn.aem-GridColumn--default--hide+div h1+p').before('<p>We offer educational information about allergy conditions to help you make more empowered  health decisions. All of our content is:</p>')

        $('.home_iv #our-mission').closest('.cmp-container').after(`<div class="faq_wrapper">
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
        
        // $('.faq-wrap > .content').hide();
        
        $('.home_iv .faq-wrap > label').click(function() {
            
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

        $('.faq_wrapper').closest('.cmp-container').prevAll('.cmp-button-card').addClass('card_section')
        $('.cmp-image-card').eq(2).after($('.faq_wrapper').closest('.cmp-container').next().addClass('moved_section'))

    }
}


if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

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