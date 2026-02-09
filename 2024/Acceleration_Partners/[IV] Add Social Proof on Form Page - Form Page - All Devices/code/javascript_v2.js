function loadTestCode() {
    if (!jQuery('body').hasClass('formIV')) {
        jQuery('body').addClass('formIV');
        
        // Put your test code here
        jQuery('.cta-sm-section .row .content').addClass('rightContent').removeClass('content').unwrap().before(`<div class="leftContent">
            <h6 class="eyeBroText">Request more information</h6>
            <h3 class="pageTitle">` + jQuery('section.cta-sm-section h3').html() + `</h3>
            <h5>Acceleration Partners specializes in helping brands scale and finding innovative solutions to accelerate their performance.</h5>
            <ul class="heroList">
                <li>256 International Brand Clients</li>
                <li>Performance Partnership Marketing, Not Paid Channel Marketing</li>
                <li>2 billion USD increase in revenue</li>
            </ul>
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
                <h6>Results-driven organizations trust Acceleration Partners for their biggest marketing&nbsp;campaigns</h6>
                <div class="testimonialLogoWrap">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/saje-logo_400x151.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/target-logo.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/sorel-logo.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701305/Acceleration_Partners/add-social-proof/TheHomeDepot.png" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701943/Acceleration_Partners/add-social-proof/Amazon_Music.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701943/Acceleration_Partners/add-social-proof/BurBerry.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701304/Acceleration_Partners/add-social-proof/TikTok.png" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/scrubs-beyond-logo.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/renogy-logo.svg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701304/Acceleration_Partners/add-social-proof/AG1.png" alt="">
                </div>
            </div>
        </div>`);

        jQuery('.cta-sm-section').after(`<section class="logoSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h5>A verified industry leader in scaling partnership campaigns</h5>
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
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-performance-logo.png" alt="">
                                </div>
                                <p>
                                    <strong>GPMA</strong>
                                    <i>Best Agency</i> <br> 2022, 2021, 2020, 2019, 2018, 2017
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
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944131/Acceleration_Partners/add-social-proof/Performance-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>Inc. Magazine</strong>
                                    <i>Best Team in Performance Marketing - AP Client Services Team</i> <br> 2023, 2020
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-Influencer.png" alt="">
                                </div>
                            </li>
                        </ul>    
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

        jQuery(window).on("resize", function () {
            if (window.matchMedia("(min-width: 1025px)").matches) {
                jQuery('.leftContent').after(jQuery('.rightContent'));
            } else {
                jQuery('.heroList').after(jQuery('.rightContent'));
            }
        }).resize();
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);