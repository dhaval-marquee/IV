function SPZTestCode() {
    if (!$('body').hasClass('location_iv')) {
        $('body').addClass('location_iv');
        
        // Put your test code here
        $('.location_iv #content-wrapper').prepend(`<div class="hero_section">
            <div class="container facility">
                <div class="hero_left top-text">
                    <h2>About the Studio</h2>
                    <p></p>

                    <h2>About Jazzercise</h2>
                    <p>Jazzercise is a pulse-pounding, beat-pumping, body-blasting fitness program that gets you results fast! It's a high intensity dance party that fuses cardio, strength, Pilates, hip hop, yoga and kickboxing. Burn up to 800 calories per hour in any of our 60 minute classes.</p>

                    <div class="facility"></div>
                </div>
                <div class="hero_right">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659418434/jazzercise/Location_Pages_Test/BrandShootOceanside_Classshot.jpg" alt="Fitness Training" width="100%">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659421125/jazzercise/Location_Pages_Test/title_image.jpg" alt="2 weeks for this price" width="100%">
                </div>
            </div>
        </div>`);


        $('.location_iv .facility .top-text h1').prependTo($('.location_iv .hero_left'));
        $('.location_iv .hero_section h1').after($('.location_iv .facility .contact-details .contact-details-wrap'));
        $('.location_iv .hero_section .hero_left .contact-details-wrap').after($('.location_iv .facility .top-text .service-icons'));
        $('.location_iv .hero_section .hero_left h2:nth-of-type(1) + p').text($('.location_iv .facility .top-text .sub-text').text())
        $('.location_iv .facility ul.social-links').appendTo($('.location_iv .hero_section .hero_left .facility'));
        $('.location_iv .facility .top-text .service-icons li:first-child button').append('<a href="javascript:;">Premier Center</a>');
        $('.location_iv .facility .top-text .service-icons li:last-child button').append('<a href="javascript:;">Child Care Available</a>');





        $('.location_iv h3#pricing').text('Memberships');
        $('.location_iv .facility .pricing-menu .card-promo').parent().next().find('.card-deck').prepend($('.location_iv .facility .pricing-menu .card-promo'));
        $('.location_iv .facility .pricing-menu .card-promo-multi .card-deck .card').unwrap();
        $('.location_iv .facility .pricing-menu .card .card-body .p-type-2 .p-description').html('GET <strong>2 WEEKS</strong> OF UNLIMITED IN&nbsp;-&nbsp;STUDIO CLASSES');
        $('.location_iv .facility .price-container .pricing-menu .card .disclaimer-text').text('New Members only. Good for 14 consecutive days - starting the day of purchase.');


        $('.location_iv .facility .price-container .pricing-menu .card .card .card-body').prepend(`<span class="card_offer"><b>NEW MEMBER OFFER!</b></span>`);
        $('.location_iv .facility .pricing-menu .card-deck > .card:nth-child(3) .cardHeading').prepend('<span class="card_offer">Most Popular</span>');



        var descText = $('.location_iv .facility .price-container .pricing-menu .card .disclaimer-text');
        $('.location_iv .facility .price-container .pricing-menu .card .card .card-footer').append(descText);

        $('.location_iv .facility .price-container .pricing-menu .card .card').siblings().remove();
        $('.location_iv .facility .price-container .pricing-menu .card .card').unwrap();

        $('.location_iv .facility .price-container .pricing-menu .card').removeClass('mb-4');

        $('.location_iv .facility .price-container .pricing-menu .card').each(function(){
            $(this).wrapInner('<div class="card_inner"></div>')
        });

        $('.location_iv .facility .price-container .pricing-menu .card').each(function(){
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

        $('.location_iv .facility .price-container .pricing-menu .card_4 .card-text').before(`<ul>
            <li><strong> 1 In-Studio Workout</strong></li>
        </ul>`);

        $('.location_iv .facility .price-container .pricing-menu .card .card-body').append('<a href="javascript:;" class="card_learn_more">Learn More</a>');





    }
}


try {
    // PG Cookies Add
    var cookieName = 'SPZ_Cookie';
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