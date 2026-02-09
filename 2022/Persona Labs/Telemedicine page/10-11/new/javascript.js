function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('telemedicine_test')) {
        bodyEle.classList.add('telemedicine_test');
        
        jQuery('.telemedicine_test section[data-id="57940e"]').addClass('hero_section')
        jQuery('.telemedicine_test .elementor-element.elementor-element-67a2e222 > .elementor-widget-container').html('<h1>Personalized, High-Quality, & Affordable Health Care From the Comfort of Your Home</h1>');
        jQuery('.telemedicine_test .subtitle-text p').html('Our board-certified network of doctors can provide you with medical advice and provide the appropriate treatment through virtual doctor visits - no insurance required');

        jQuery('.telemedicine_test .elementor-element.elementor-element-6023d608 .elementor-heading-title').html('<h1>Personalized, High-Quality, & Affordable Health Care From the Comfort of Your Home</h1>');
        jQuery('.telemedicine_test .elementor-element.elementor-element-993c22f > .elementor-widget-container div').html('Our board-certified network of doctors can provide you with medical advice and provide the appropriate treatment through virtual doctor visits - no insurance required');
        jQuery('a[href="#sessions"] .elementor-button-text').html('Get Started');

        jQuery('a[href="#products"] .elementor-button-text').html('Get Started');
        jQuery("a[href='#sessions']").click(function (e) {
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: jQuery("#products").offset().top
            }, 500);
        });
        jQuery('.telemedicine_test .hero_section').after(`<section class="works_section">
          <h2 class="elementor-align-center">How it Works</h2>
            <div class="works_inner">
                <div class="elementor-row">
                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-943e3da" data-id="943e3da" data-element_type="column">
                        <div class="works_item">
                            <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667022351/Persona_Labs/Telemedicine_page/Account_icon.png">
                            <span class="works_span"> 
                                <span class="list-bold">Create Your Account</span>Sign up in seconds, no credit card required
                            </span>
                        </div>
                    </div>
                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5d519722" data-id="5d519722" data-element_type="column">
                        <div class="works_item">
                        <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667210753/Persona_Labs/Telemedicine_page/doctor_icon_2x.svg">
                            <span class="works_span"> 
                              <span class="list-bold">Choose Your Doctor</span>Select one of our board-certified doctors to meet with
                            </span>
                        </div>
                    </div>
                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2c8659e0" data-id="2c8659e0" data-element_type="column">
                        <div class="works_item">
                        <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667210753/Persona_Labs/Telemedicine_page/calendar_icon_2x.svg">
                            <span class="works_span"> 
                              <span class="list-bold">Pick a Date & Time
                                </span>Schedule your virtual consultation for a time that is convenient for you
                              </span>
                        </div>
                    </div>
                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3104bab3" data-id="3104bab3" data-element_type="column">
                        <div class="works_item">
                        <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667210753/Persona_Labs/Telemedicine_page/device_icon_2x.svg">
                            <span class="works_span"> 
                              <span class="list-bold">Connect With Your Doctor </span>Join quickly and easily from your smart phone, PC, laptop, or tablet
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    
    <section class="offer_section">
    <div class="offer_inner">
        <div class="offer_item">
            <div class="offer_itemInner">
                <h2>What We Offer</h2>
            </div>
        </div>
        <div class="offer_item">
            <p>Consult with one of our doctors for treatment and prescription medication for these conditions and more:</p>
            <div class="ul_wrapper">     
                <ul>
                    <li>Flu</li>
                    <li>Minor rashes</li>
                    <li>Tooth pain</li>
                    <li>Pink Eye</li>
                    <li>Allergies</li>
                </ul>
                <ul>
                    <li>Cold & Fever</li>
                    <li>Sore throat</li>
                    <li>Skin infections</li>
                    <li>Headache</li>
                    <li>Diarrhea</li>
                </ul>
            </div>
        </div>
        <div class="offer_item">
            <p><span class="span">$89</span><span class="span_inner">per visit</span></p>
          <div class="btn_wrap">
            <a href="#products" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-text">Get Started</span>
                </span>
            </a>
          </div>
        </div>
    </div>
</section>`);
    }
}
loadTestCode() 
