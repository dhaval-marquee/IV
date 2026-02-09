var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadcode();
    } else {
        // DOM: Create the script element
        var jsElm = document.createElement("script");
        // set the type attribute
        jsElm.type = "application/javascript";
        // make the script element load file
        jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
        // finally insert the element to the body element in order to load the script
        document.body.appendChild(jsElm);
        clearInterval(jQisLoaded);
        var jqueryInterval = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jqueryInterval);
                loadcode();
            }
        }, 100);
    }
}, 100);

function loadcode() {
    
    var $ = jQuery;
    if(!$('body').hasClass('iv_prodemand')) {
        $('body').addClass('iv_prodemand');

        // Slick Css
        $('head').append("<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css' />");

        // Get browser
        $.each($.browser, function(i) {
            $('body').addClass(i);
            return false;  
        });
        // Get OS
        var os = [
            'iphone',
            'ipad',
            'windows',
            'mac',
            'linux'
        ];
        var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
        if (match) {
            $('body').addClass(match[0]);
        };

        // hsforms
        $.getScript('//js.hsforms.net/forms/v2.js', function(){
            hbspt.forms.create({
                region: "na1",
                portalId: "7934115",
                formId: "b504f7ad-0108-4f69-8a4e-9cb4976680f8"
            });
        });

        // Modal Add
        $('.iv_prodemand #page').after('<div class="iv-modal">'+
            '<div class="iv-modal-overlay"></div>'+
            '<div class="iv-modal-content">'+
                '<div class="demoform">'+
                    '<span class="smallprint">* Limited time offer. Applies to most Mitchell 1 products with a 27-month subscription. Mitchell1 will never rent or sell your personal information.</span>'+
                '</div>'+
            '</div>'+
        '</div>');
        var hsformsInterval = setInterval(function () {
            if ($('.iv_prodemand .hbspt-form').length > 0) {
                clearInterval(hsformsInterval);
                $('.iv_prodemand .iv-modal-content .demoform').append($('.iv_prodemand .hbspt-form'));
            }
        }, 200);

        var freeDemoHtml = '<a class="btn btn-yellow iv-free-demo" href="javascript:void(0);">Book Your Free Demo</a>';
        var buttonInterval = setInterval(function () {
            if ($('.iv_prodemand #g1-preheader__switch').length > 0) {
                clearInterval(buttonInterval);
                $('.iv_prodemand #g1-header').before($('.iv_prodemand #g1-preheader'));
                $('.iv_prodemand #g1-preheader__switch').before(freeDemoHtml);
                $('.iv_prodemand #g1-preheader-bar > .btn').addClass('pull-right');
                $('.iv_prodemand .iv-free-demo').on('click', function(){
                    $('.iv_prodemand .iv-modal').addClass('open');
                });
                $('.iv_prodemand .iv-modal-overlay').on('click', function(){
                    $('.iv_prodemand .iv-modal').removeClass('open');
                });
            }
        }, 200);
        $('.iv_prodemand #g1-precontent-shortcode').html('<div class="hero-section">'+
            '<div class="inner-content">'+
                '<h1>ProDemand</h1>'+
                '<h2>Get to the Fix Faster</h2>'+
                '<h2 class="text_yellow">Gain the Competitive Edge</h2>'+
                '<p>ProDemand helps you diagnose problems, write accurate estimates, and make repairs quicker and easier than ever before.</p>'+
                '<div>'+freeDemoHtml+'</div>'+
            '</div>'+
        '</div>');
        var cloudinary = '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mitchell1/prodemand/';
        var informationContentOne = '<ul>'+
            '<li>Obtain accurate OEM and real-world information seamlessly in single lookup</li>'+
            '<li>Get full visibility into all aspects of your business with automated reporting</li>'+
            '<li>Save time and keep connected with our fully-loaded mobile information suite</li>'+
        '</ul>';
        var informationContentTwo = '<ul>'+
            '<li>Our friendly and knowledgeable Client Services teams are available to help you fix any issue that may arise</li>'+
            '<li>Each product line has its own ever-growing library of resources that quickly and easily explain processes and features</li>'+
            '<li>Get up and running quickly by scheduling a one-on-one training session and quickly master any of our products and software</li>'+
        '</ul>';
        $('.iv_prodemand #g1-content-area').after($('.iv_prodemand #sec_container'));
        $('.iv_prodemand #g1-content-area').html('<div class="repair_info_section">'+
            '<div class="cs-container">'+
                '<div class="top_part">'+
                    '<h3>Vehicle Repair Information <span class="text-grey">Made Smarter</span></h3>'+
                    '<p>Our award-winning ProDemand software was designed with your needs in mind, based on actual experiences from automotive and commercial vehicle technicians. ProDemand is easy and intuitive to use – delivering highly accurate diagnostic, estimating and OEM repair information in a single lookup.</p>'+
                '</div>'+
                '<div class="repair_text">'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'diagnostics-dtc.png" alt="diagnostics">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>Diagnostics</h3>'+
                            '<p>OEM and real-world repair information together in a single lookup, powered by SureTrack</p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/diagnostics/">Learn More</a></div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'wiring-diagrams.png" alt="wiring diagrams">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>Wiring Diagrams</h3>'+
                            '<p>Industry-leading Advanced Interactive Wiring Diagrams with consistent formatting across all OEMs</p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/repair-information/wiring-diagrams/">Learn More</a></div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'suretrack.png" alt="SureTrack Real Fixes">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>SureTrack Real Fixes</h3>'+
                            '<p>SureTrack Community gives you access to other expert technicians to help solve tricky diagnostic issues</p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/community/">Learn More</a></div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'adas-repair.png" alt="ADAS Repair Information">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>ADAS Repair Information</h3>'+
                            '<p>Get instant access to all the vehicle-specific Driver Assist (ADAS) information in single location </p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/repair-information/advanced-driver-assistance-systems/">Learn More</a></div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'estimate-labor.png" alt="Estimate Guide">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>Estimate Guide</h3>'+
                            '<p>Fast, accurate estimates for labor times, OEM pricing and parts diagrams displayed on a single page</p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/estimating/">Learn More</a></div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'maintenance-task-icon.png" alt="Maintenance Tasks">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>Maintenance Tasks</h3>'+
                            '<p>Quickly see all tasks relevant to your specific vehicle and create/print a maintenance checklist.</p>'+
                        '</div>'+
                        '<div class="repair_link"><a href="/prodemand/maintenance/">Learn More</a></div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="review">'+
            '<div class="cs-container">'+
                '<div class="review-inner">'+
                    '<h2>Our Users Love Us!</h2>'+
                    '<div class="rating">'+
                        '<div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div>'+
                        '<h3>4.7<span class="desktop_hide">/5</span></h3>'+
                        '<span>(1316 ratings)</span>'+
                    '</div>'+
                    '<div class="featured">'+
                        '<img src="'+cloudinary+'featuredcustomers-logo-white.png" alt="Featured Customer">'+
                        '<span>(1316 ratings)</span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="information bg-grey">'+
            '<div class="cs-container">'+
                '<div class="inner-information">'+
                    '<div class="info-text">'+
                        '<h3>Detailed Information:</h3>'+
                        '<h3>Easy to Find. <span class="text-grey">Easy To Use.</span></h3>'+
                        informationContentOne+
                    '</div>'+
                    '<div class="img-box">'+
                        '<a href="/prodemand/repair-information/wiring-diagrams/"><img src="'+cloudinary+'detailed.png" alt="Detailed Information"></a>'+
                    '</div>'+
                    '<div class="for-mobile">'+informationContentOne+'</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="information">'+
            '<div class="cs-container">'+
                '<div class="inner-information reverse">'+
                    '<div class="info-text">'+
                        '<h3>World-Class Support</h3>'+
                        informationContentTwo+
                    '</div>'+
                    '<div class="img-box">'+
                        '<img src="'+cloudinary+'world-class-support.jpg" alt="world class support">'+
                    '</div>'+
                    '<div class="for-mobile">'+informationContentTwo+'</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="testimonial-section">'+
            '<div class="cs-container">'+
                '<h2>Hear From Our Customers</h2>'+
                '<div class="testimonial-slider">'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “ProDemand saves me a lot of time and effort — it’s awesome. I can quickly find the information I need to write my estimates, with accurate labor times and parts pricing.” </p>'+
                        '<h3 class="person-name">— Chuck Cercone</h3>'+
                        '<span class="person-post">Co-Owner, Fox’s Automotive Service & Repair</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “The best thing about the Manager SE System is how easy it is to use … it definitely helps me run my business more efficiently.”</p>'+
                        '<h3 class="person-name">— Daniel Tieken</h3>'+
                        '<span class="person-post">Owner, Tinken Auto Service</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                    '<p class="testimonial-text"> “With TruckSeries I like being able to type in the VIN number and easily scroll through the options it gives me .. I believe it’s the only system out there that’s reliable, and has everything I need in it. I wouldn’t trust anything else.”</p>'+
                        '<h3 class="person-name">— Quince Graveen</h3>'+
                        '<span class="person-post">Diesel Mechanic, American Diesel, Murrieta, CA</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “Since we implemented the SocialCRM service, we’ve gotten more than 140 positive reviews in less than a year! We love the SureCritic review system and seeing all the nice things people have to say about us.”</p>'+
                        '<h3 class="person-name">— Pilar Walton</h3>'+
                        '<span class="person-post">Office Manager, Dave’s Garage, South Bend IN</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “ProDemand cuts the time we spend searching drastically. My techs find information faster and are more productive.” </p>'+
                        '<h3 class="person-name">— Eldon Dunn</h3>'+
                        '<span class="person-post">Poway Transmissions, CA</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “I loved that the teachers were actually programmers involved in developing the software so they knew the program intimately, yet they still had the business experience to know how to make it all relevant to us.”</p>'+
                        '<h3 class="person-name">— Daina Kringlen</h3>'+
                        '<span class="person-post">Owner/Office Manager, OK Wheel & Brake</span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="search_zipcode_section"></div>');
        $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){
            $('.testimonial-slider').slick({
                dots: false,
                arrow: true,
                autoplay: true,
                autoplaySpeed: 8000,
                infinite: true,
                speed: 500,
                cssEase: 'linear'
            });
        });

        // Zip Code Add
        var homeUrl = "//mitchell1.com/";
        $('.iv_prodemand .search_zipcode_section').load(homeUrl + ' #sec_container');

        var zipInterval = setInterval(function () {
            if ($('.iv_prodemand #sec_container').length > 0) {
                clearInterval(zipInterval);

                var zipcodehtml = $('.iv_prodemand li#sec_container').html();
                $('.iv_prodemand li#sec_container').replaceWith('<div id="sec_container" class="search_zipcode"><div class="zip-container"><div class="zip_inner"><div class="zip_left">' + zipcodehtml + '</div></div></div></div>');

                $('.iv_prodemand .search_zipcode .zip_inner').append('<div class="zip_right">'+
                    '<img src="'+cloudinary+'find-my-local-rep.jpg" alt="find in your local area">'+
                '</div>');

                $('body.iv_prodemand').css('visibility','visible');
            }
        }, 200);

        $('.iv_prodemand #g1-footer-nav').after('<div class="g1-social-icons g1-social-icons--list-horizontal g1-social-icons--24 g1-social-icons--icon">' + $('.iv_prodemand #g1-social-icons-1').html() + '</div>');
    }

}