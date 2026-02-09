function SPZTestCode() {
    if (!$('body').hasClass('location_iv')) {
        $('body').addClass('location_iv');
        
        // Put your test code here
        $('.location_iv #content-wrapper').prepend(`<div class="hero_section">
            <div class="container facility">
                <div class="hero_left top-text">

                    <div class="desktop_hide">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659418432/jazzercise/Location_Pages_Test/Brand_Shoot_Ocean_side.jpg" alt="Fitness Training" width="550">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663090430/jazzercise/Location_Pages_Test/hero_title_image.jpg" alt="2 weeks for this price" width="100%">
                    </div>
                    <h2>About the Studio</h2>
                    <p>We love our community! Join us in group fitness classes for all levels and feel ahhh-mazing while you sculpt lean muscle and shake off stress. Our certified instructors will guide you every step of the way on your wellness journey.</p>

                    <h2>About Jazzercise</h2>
                    <p>Dance cardio meets muscle sculpting in 55-minute, full-body workouts designed to boost your mood and develop strong, lean muscle while you burn up to 800 calories per class! Whether you’re looking for physical results or simply to FEEL your best, Jazzercise is the most fun you can have getting fit.</p>

                    <div class="facility"></div>
                </div>
                <div class="hero_right desktop_show">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659418434/jazzercise/Location_Pages_Test/BrandShootOceanside_Classshot.jpg" alt="Fitness Training" width="100%">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663090430/jazzercise/Location_Pages_Test/hero_title_image.jpg" alt="2 weeks for this price" width="100%">
                </div>
            </div>
        </div>`);


        $('.location_iv .facility .top-text h1').prependTo($('.location_iv .hero_left'));
        $('.location_iv .hero_section h1').after($('.location_iv .facility .contact-details .contact-details-wrap'));
        $('.location_iv .hero_section .hero_left .contact-details-wrap').after($('.location_iv .facility .top-text .service-icons'));
        // $('.location_iv .hero_section .hero_left h2:nth-of-type(1) + p').text($('.location_iv .facility .top-text .sub-text').text());
        $('.location_iv .facility ul.social-links').appendTo($('.location_iv .hero_section .hero_left .facility'));
        $('.location_iv .facility .top-text .service-icons li:first-child button').append('<a href="javascript:;">Premier Center</a>');
        $('.location_iv .facility .top-text .service-icons li:last-child:not(:first-child) button').append('<a href="javascript:;">Child Care Available</a>');


        $('.location_iv h3#pricing').text('Memberships');
        $('.location_iv .facility .pricing-menu .card-promo').parent().next().find('.card-deck').prepend($('.location_iv .facility .pricing-menu .card-promo'));
        $('.location_iv .facility .pricing-menu .card-promo-multi .card-deck .card').unwrap();
        $('.location_iv .facility .pricing-menu .card .card-body .p-type-2 .p-description').html('GET <strong>2 WEEKS</strong> OF UNLIMITED IN&nbsp;-&nbsp;STUDIO CLASSES');

        $('.location_iv .facility .pricing-menu .card-deck > .card:nth-child(2) .cardHeading').prepend('<span class="card_offer"><b>MOST POPULAR</b></span>');

        $('.location_iv .facility .price-container .pricing-menu .card .card').siblings().remove();
        $('.location_iv .facility .price-container .pricing-menu .card .card').unwrap();
        $('.location_iv .facility .price-container .pricing-menu .card:first-child .card-body').before('<span class="card_offer"><b>NEW MEMBER OFFER!</b></span>');

        
    
        $('.location_iv .facility .price-container .pricing-menu .card .card-body').append(`
            <div class="toggle_wrapper">
                <a href="javascript:;" class="card_learn_more">Learn More</a>
            </div>
        `);

        $('.location_iv .facility .price-container .pricing-menu .card').each(function(){
            $(this).removeClass('mb-4');
            $(this).wrapInner('<div class="card_inner"></div>');
            $(this).addClass('card_'+(1+$(this).index()));
        });
        
        $('.location_iv .facility .price-container .pricing-menu .card_2 .card-text').before(`<ul>
            <li><strong>Unlimited</strong> In-Studio Workouts</li>
            <li><strong>Unlimited</strong> Livestream Access</li>
            <li><strong>Unlimited</strong> Access to our On Demand Workouts</li>
        </ul>`);

        $('.location_iv .facility .price-container .pricing-menu .card_3 .card-text').before(`<ul>
            <li><strong>Unlimited</strong> In-Studio Workouts</li>
        </ul>`);

        $('.location_iv .facility .price-container .pricing-menu .card-deck > .card:last-child .card-text').before(`<ul>
            <li><strong> 1 In-Studio</strong> Workout</li>
        </ul>`);

        $('.location_iv .facility .price-container .pricing-menu .card_2 .card-footer a').text('GET ALL ACCESS');
        $('.location_iv .facility .price-container .pricing-menu .card_3 .card-footer a').text('GET UNLIMITED CLASSES');
        $('.location_iv .facility .price-container .pricing-menu .card-deck > .card:last-child .card-footer a').text('GET A SINGLE CLASS');

        $('.location_iv .facility .price-container .pricing-menu .card_2 .text-muted, .location_iv .facility .price-container .pricing-menu .card_3 .text-muted').after('<span style="font-size: 12px;white-space: nowrap">(cancel anytime)</span>');


        $('.location_iv .facility .price-container .pricing-menu .card_1 .card_learn_more').after(`
            <ul style="display:none" class="text-left">
                <li>14 days of unlimited in-studio classes, community support and endorphin-boosting fun - no strings attached.</li>
                <li>New Members only. Good for 14 consecutive days - starting the day of purchase.</li>
            </ul>
        `);

        $('.location_iv .facility .price-container .pricing-menu .card_2 .card_learn_more').after(`
            <ul style="display:none">
                <li class="no_list"><b>Get the full Jazzercise experience!</b></li>
                <li><b>In-Studio:</b> Enjoy as many in-person workouts as you want, with certified instructors and a welcoming community.</li>
                <li><b>On Demand:</b> Get access to hundreds of workouts to help you feel fit anywhere, anytime!</li>
                <li><b>Livestream:</b> When you can’t make it to class, join our FitPros and global community for high-energy LIVE workouts.</li>
            </ul>
        `);

        $('.location_iv .facility .price-container .pricing-menu .card_3 .card_learn_more').after(`
            <ul style="display:none">
                <li>Because one class will never be enough! Dance in-studio as much as you’d like (trust us, you’ll be back for more) with the freedom to cancel anytime.</li>
            </ul>
        `);

        $('.location_iv .facility .price-container .pricing-menu .card-deck > .card:last-child .card_learn_more').after(`
            <ul style="display:none">
                <li>Single in-studio class option, great for those who want to give us a try or have unpredictable schedules</li>
            </ul>
        `);

        if ($('.location_iv .facility .price-container .pricing-menu .card').length == 5) {

            $('.location_iv .facility .price-container .pricing-menu .card-deck').closest('.card-deck').addClass('more_cards');

            $('.location_iv .facility .price-container .pricing-menu .card_4 .card-text').before(`<ul>
                <li><strong>Bundle</strong> of 10 In-Studio Workouts</li>
            </ul>`);
            $('.location_iv .facility .price-container .pricing-menu .card_4 .card-footer a').text('GET 10 CLASSES');

            $('.location_iv .facility .price-container .pricing-menu .card_4 .card_learn_more').after(`<ul style="display:none">
                <li>Boost your fitness routine with this no commitment, pay-as-you-go class bundle.</li>
            </ul>`);
        }


        $(document).on('click', '.location_iv .facility .pricing-menu .card .card-body .card_learn_more', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });

    }
}


try {
    // PG Cookies Add
    var cookieName = 'location_iv';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    SPZTestCode();

} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}