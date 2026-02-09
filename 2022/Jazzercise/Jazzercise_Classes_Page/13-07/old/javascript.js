if (!$('body').hasClass('iv_jazzercise')) {
    $('body').addClass('iv_jazzercise');
    $('.iv_jazzercise .parent-position .vide-details-txt').after('<div class="hero_location"><h3>Find a Class Near You Today!</h3><img class="map_icon" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jazzercise/map-icon.png" alt="map"></div>');
    $('.iv_jazzercise .parent-position .jazz-hp-embed-container-video-overlay .vide-details-txt h3').text('Let’s Get This Party Started');
    $('.iv_jazzercise .parent-position .jazz-hp-embed-container-video-overlay .vide-details-txt p').text('Each Jazzercise class is a total-body workout designed to combine fitness and fun, no matter your age or fitness level. Our certified instructors guide you through cardio and strength routines that leave you glowing and coming back for more.');
    $('#content-wrapper .container').first().addClass('look_better_section').nextAll('.container').remove();

    function updateSearchBar(){
        var windowScroll = jQuery(window).scrollTop();
        var videoSectionHeight = $('#showVideo').height() / 2 
        var textHeight = $('.iv_jazzercise .parent-position .jazz-hp-embed-container-video-overlay').height();
        var sectionHeight = videoSectionHeight + textHeight + 200

        if(windowScroll < sectionHeight){
            if($('.iv_jazzercise .parent-position .hero_location .footerFindClass').length == 0){
                $('.iv_jazzercise .parent-position .hero_location').append($('.iv_jazzercise .footerFindClass'));
                $('.iv_jazzercise .parent-position .hero_location .footerFindClass input').attr('placeholder','Enter City, State, or Zip');
            }
        }else{
            if($('.iv_jazzercise #forceHide').parent().find('.footerFindClass').length == 0){
                $('.iv_jazzercise #forceHide').after($('.iv_jazzercise .parent-position .hero_location .footerFindClass'));
                $('.iv_jazzercise .footerFindClass input').attr('placeholder','Enter a Location');
            }
        }    
    }

    jQuery(window).scroll(function(){
        updateSearchBar();
    });
    
    updateSearchBar();

    function heroMargin() {
        var headerHeight = $('.iv_jazzercise .navbar-fixedw-top').height()
        $('.iv_jazzercise .siteWrapper #content-wrapper').css('margin-top', headerHeight);
    }
    heroMargin();

    $(window).resize(function() {
        heroMargin();
    });
    
    $('#content-wrapper .look_better_section').before(`<div class="container">
        <div class="our_class">
            <h2 class="class_title">Our Classes</h2>
            <div class="class_inner_content">
                <div class="class_box">
                    <h3>Dance Mixx</h3>
                    <p>You’ll leave lighter and happier after 40 minutes of high-intensity, dance-based cardio and 20 minutes of strength training and stretching.</p>
                </div>
                <div class="class_box">
                    <h3>Core</h3>
                    <p>Tone those abs, improve posture and help prevent injury in this core-based dance cardio that integrates effective, targeted strength work.</p>
                </div>
                <div class="class_box">
                    <h3>Express</h3>
                    <p>Dance away excuses in this 30-minute power-packed class. A quick blast of dance-based cardio followed with resistance training will maximize your time and define those muscles.</p>
                </div>
                <div class="class_box">
                    <h3>Flip Fusion</h3>
                    <p>Shed calories with this format that alternates strength training and quick bursts of cardio for a truly toned physique.</p>
                </div>
                <div class="class_box">
                    <h3>Fusion</h3>
                    <p>Results start here. Calories burn long after the sweat is dry in this class that alternates between blasts of high-intensity cardio and strength intervals for maximum EPOC (Excess Post-exercise Oxygen Consumption).</p>
                </div>
                <div class="class_box">
                    <h3>LO</h3>
                    <p>Protect your joints and maximize results without losing the sweaty fun. Use muscle, not momentum to carve muscle and burn calories.</p>
                </div>
                <div class="class_box collapse">
                    <h3>Interval Dance Mixx</h3>
                    <p>Promote longevity as you alternate between high- and low-intensity dance-based cardio intervals (HIIT) and strength training.</p>
                </div>
                <div class="class_box collapse">
                    <h3>Interval Fusion</h3>
                    <p>Fire up your metabolism in this HIIT class that alternates between high- and low-intensity dance-based cardio with strength work sprinkled throughout. Finish with concentrated strength training.</p>
                </div>
                <div class="class_box collapse">
                    <h3>Strike</h3>
                    <p>Kick, punch, hook and jab away the stress throughout this high-intensity class. Kickboxing-based cardio routines combine with strength training for the ultimate sweat sesh.</p>
                </div>
                <div class="class_box collapse">
                    <h3>Strength 35/45/60</h3>
                    <p>Build lean muscle in this 30-, 45- or 60-minute strength training class. You’ll squat, push-up and plank your way through with routines selected to work every muscle in your body.</p>
                </div>
            </div>
            <div class="show_more_cta">
                <a href="javascript:void(0);">See All Classes</a>
            </div>
        </div>
    </div>
    <div class="class_format text-center">
        <div class="container">
            <h2 class="class_title">Where to Find Us</h2>

            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h3>In Person</h3>
                    <img src="https://www.jazzercise.com/getattachment/9b40de93-5ce5-407e-ad86-efe6046bc7aa/Amy.aspx" alt="">
                    <p>Nothing beats the energy of an in-person dance party! Get the classic Jazzercise experience with certified instructors and a warm, welcoming community.</p>
                    <a href="https://www.jazzercise.com/find-a-location" class="btn btn-warning">Find a Class Near You</a>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h3>On Demand</h3>
                    <img src="https://www.jazzercise.com/getattachment/9b40de93-5ce5-407e-ad86-efe6046bc7aa/Amy.aspx" alt="">
                    <p>On demand classes are available 24/7 to help you get fit anytime, anywhere. These 10- to 50-minutes classes are designed to get max results on your schedule.</p>
                    <a href="https://ondemand.jazzercise.com/" class="btn btn-warning">Get a 2-Week FREE Trial</a>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h3>Livestream</h3>
                    <img src="https://www.jazzercise.com/getattachment/9b40de93-5ce5-407e-ad86-efe6046bc7aa/Amy.aspx" alt="">
                    <p>Join our FitPros LIVE during our high-energy livestream classes. Dance to in-class music from your living room with the community feeling you’ll love.</p>
                    <a href="https://www.jazzercise.com/find-a-location" class="btn btn-warning">Dance With Us Live</a>
                </div>
            </div>
        </div>
    </div>
    <div class="faq_section text-center">
        <div class="container">
            <h2 class="class_title">Frequently Asked Questions</h2>

            <ul class="accordion_wrapper">
                <li>
                    <a href="#faq1" class="faq_title collapsed" data-toggle="collapse">What should I wear to class?</a>
                    <div id="faq1" class="faq_content collapse">Wear what’s comfortable for you – fitted, flexible fabrics are always a solid start. Supportive cross-trainers are great, but any athletic shoe will work.</div>
                </li>
                
                <li>
                    <a href="#faq2" class="faq_title collapsed" data-toggle="collapse">What should I bring to class?</a>
                    <div id="faq2" class="faq_content collapse">Your Jazzercise studio is likely to have most equipment needed for the class available, but a mat or towel can be helpful. And of course, water!</div>
                </li>
            </ul>
        </div>
    </div>`);

    $(document).on('click', '.show_more_cta a', function(){
        console.log('Click working');
        $('.iv_jazzercise .our_class .class_inner_content .class_box.collapse').slideDown();
        $(this).parent().hide();
    });
    

    $('.iv_jazzercise').css('visibility', 'visible');
}