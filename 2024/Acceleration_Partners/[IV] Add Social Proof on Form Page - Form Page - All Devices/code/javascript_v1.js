function loadTestCode() {
    if (!jQuery('body').hasClass('formIV')) {
        jQuery('body').addClass('formIV');
        
        // Put your test code here
        jQuery('.main-content-wrap').prepend('<h6 class="eyeBroText">Request more information</h6>');

        const formInterval = setInterval(function(){
            if(typeof MktoForms2 !== 'undefined'){
                clearInterval(formInterval);
                MktoForms2.whenReady(function (form) {
                    jQuery('#Request_Type__c').closest('.mktoFormRow').next().addClass('stopHere');
                    jQuery('form#mktoForm_1438').prepend('<div class="formLeft"></div><div class="formRight"></div>');

                    var stopElement = jQuery('form#mktoForm_1438 .stopHere');
                    var foundStop = false;

                    jQuery('form#mktoForm_1438 .mktoFormRow, form#mktoForm_1438 .mktoButtonRow').each(function() {
                        if (foundStop) {
                            jQuery('.formRight').append(jQuery(this));
                        } else {
                            if (jQuery(this).is(stopElement)) {
                                foundStop = true;
                                jQuery('.formRight').append(jQuery(this));
                            } else {
                                jQuery('.formLeft').append(jQuery(this));
                            }
                        }
                    });
                });
            }
        });

        jQuery('section.cta-sm-section').after(`<section class="logoSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Our results speak for itself</h5>
                        <ul class="clientLogoWrap">
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Partnership-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>US Partnership Awards</strong>
                                    <i>Best Affiliate & Partner Marketing Agency - Large</i> <br> 2024
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944131/Acceleration_Partners/add-social-proof/Performance-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>PMA</strong>
                                    <i>Best Affiliate or Partnership Marketing Agency</i> <br> 2023, 2022, 2021
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-performance-logo.png" alt="">
                                </div>
                                <p>
                                    <strong>GPMA</strong>
                                    <i>Best Agency</i> <br> 2022, 2021, 2020, 2019, 2018, 2017
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-Influencer.png" alt="">
                                </div>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Inc-Best-logo.png" alt="">
                                </div>
                                <p>
                                    <strong>Inc. Magazine</strong>
                                    <i>Best Workplaces</i> <br> 2020, 2019, 2017
                                </p>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonial">
            <div class="container">
                <div class="testimonialRow">
                    <div class="testimonialWrap">
                        <div>
                            <h4>"We've worked with AP for years. They are always super helpful and efficient in their responses to our many questions and are just a great team to work with."</h4>
                            <h3>Cricut</h3>
                            <p>Enterprise</p>
                        </div>
                        <div>
                            <h4>"I love that we never have to ask our AP team for ways to improve our campaign. They are always prepared with news tactics and set the bar high when dealing with our other partners."</h4>
                            <h3>Easy Closets</h3>
                            <p>Enterprise</p>
                        </div>
                        <div>
                            <h4>"We are so moved and taken aback by how committed our Acceleration Partners team has been to our program. Their devotion and proactive hustle has not wavered and we could not be more grateful to work with this exceptional team."</h4>
                            <h3>Framebridge</h3>
                            <p>Enterprise</p>
                        </div>
                        <div>
                            <h4>"Acceleration Partners always delivers over and above my expectations. I highly recommend them to any company looking for high-value performance marketing services."</h4>
                            <h3>Identity Guard</h3>
                            <p>Enterprise</p>
                        </div>
                    </div>
                    <div class="testimonialLogoWrapper">
                        <h6>Over <b>2,871 businesses of all sizes</b> trust&nbsp;us</h6>
                        <div class="testimonialLogoWrap">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945430/Acceleration_Partners/add-social-proof/Scrubs_beyond.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945431/Acceleration_Partners/add-social-proof/Sorel.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945429/Acceleration_Partners/add-social-proof/Target.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945430/Acceleration_Partners/add-social-proof/Universal.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945430/Acceleration_Partners/add-social-proof/Vyond.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945429/Acceleration_Partners/add-social-proof/Wacoal.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945429/Acceleration_Partners/add-social-proof/Allbirds.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945429/Acceleration_Partners/add-social-proof/Blenders.png" alt="">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722945430/Acceleration_Partners/add-social-proof/Bonafide.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>`);

        // Slick Slide
        jQuery.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
            jQuery('.testimonialWrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                dots: true,
                arrows: false
            });
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);