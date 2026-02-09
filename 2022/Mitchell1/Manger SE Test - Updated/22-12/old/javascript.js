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
                formId: "bfbd6a3e-4113-46a8-950a-fbd5aa6e4452",
                version: "V2_PRERELEASE"
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
                $('.hbspt-form').after('<p style="text-align: center;font-family: Arial, Helvetica, sans-serif;font-size: 30px;color:#33475b;">Find out if our Vehicle Repair Information is right for you and get 3 MONTHS FREE!*</p><h1 style="font-family: Arial, Helvetica, sans-serif;text-align: center;font-size: 35px;font-weight: bold;color:#33475b;margin: 25px auto;">BOOK A FREE DEMO TODAY!</h1>');
            }
        }, 200);

        var freeDemoHtml = '<a class="btn btn-yellow iv-free-demo" href="javascript:void(0);">Book Free Demo</a>';
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
                '<h1>MANAGER SE</h1>'+
                '<h2 class="text_yellow">Supercharge Productivity</h2>'+
                '<h2>Increase Profit Margins</h2>'+
                '<p>Manager SE helps you manage your business, repairs and customer service more efficiently and profitably.</p>'+
                '<div>'+freeDemoHtml+'</div>'+
            '</div>'+
        '</div>');
        var cloudinary = '//res.cloudinary.com/ignite-visibility/image/upload/v1671603478/mitchell1/Manger%20SE%20Test%20-%20Updated/';
        var informationContentOne = '<ul>'+
            '<li><strong>ProDemand Repair Information:</strong> Delivers complete OEM repair information, combined with SureTrack® expert fixes, to repair vehicles quickly and efficiently.</li>'+
            '<li><strong>Manager SE Truck Edition:</strong> An industry-first, providing shops that service Class 4-8 trucks with integrated repair, labor estimating and management tools.</li>'+
            '<li><strong>SocialCRM Shop Marketing:</strong> Grow your business with automated campaigns, verified customer reviews, social media content, professional websites and more.</li>'+
        '</ul>';
        var informationContentTwo = '<ul>'+
            '<li><strong>ProSpect:</strong> Use your mobile phone to complete the check-in and vehicle ID process and begin performing inspections on the spot.</li>'+
            '<li><strong>MessageCenter:</strong> Adds seamless two-way texting inside Manager SE, so  you never have to leave the program screen to send or receive a customer text.</li>'+
            '<li><strong>Integrated Payment Processing:</strong> Supercharge your point-of-sale system with XCharge and/or 1st Mile for a secure, efficient way to process credit card payments and more.</li>'+
        '</ul>';
        $('.iv_prodemand #g1-content-area').after($('.iv_prodemand #sec_container'));
        $('.iv_prodemand #g1-content-area').html('<div class="repair_info_section">'+
            '<div class="cs-container">'+
                '<div class="top_part">'+
                    '<h3>The #1 Shop Management Software <span class="text-grey">You Can Trust</span></h3>'+
                    '<p>Manager SE is the industry standard shop management software that generations of shop owners trust to run their businesses. Eliminate paperwork with automated tools that streamline workflow – from estimate to invoice - and get complete visibility of all shop activities, so you can run a more efficient and profitable business.</p>'+
                '</div>'+
                '<div class="repair_text">'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'PartsCatalog.jpg" alt="PartsCatalog">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>DIGITAL PARTS CATALOGS</h3>'+
                            "<p>With the industry's largest selection of electronic parts catalogs - including two new multi-vendor catalogs - Manager SE makes it fast and easy to order all your parts online.</p>"+
                        '</div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'Reporting.jpg" alt="Reportings">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>POWERFUL REPORTING</h3>'+
                            '<p>Manager SE includes 180+ integrated reports that provide full visibility into all facets of your business, so you can instantly track revenue, sales trends, and customer/vehicle history.</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'Contactless.jpg" alt="Contactless">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>CONTACTLESS PAYMENT</h3>'+
                            '<p>Get customers on the road faster with quick and easy text-to-pay options, estimate approval by text, and invoice sharing via the Manager SE MessageCenter App.</p>'+
                        '</div>'+             
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'TimeManager.jpg" alt="TimeManager">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>PRODUCTIVITY TRACKING</h3>'+
                            "<p>Automatically track and measure your technicians' productivity, along with employee hours, with Time Management tools that increase shop efficiency and profits.</p>"+
                        '</div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'marketing_icons.png" alt="Marketing icons">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>MOBILE DIGITAL INSPECTIONS</h3>'+
                            '<p>Enjoy the speed and accuracy of plate-to-VIN decoding to ID current customer vehicles or quickly onboard them as new. Use your tablet/phone camera to begin multi-point vehicle inspections.</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="repair_item">'+
                        '<div class="repair_icon">'+
                            '<img src="'+cloudinary+'schedule.jpg" alt="Schedule">'+
                        '</div>'+
                        '<div class="repair_content">'+
                            '<h3>SIMPLIFIED SCHEDULING</h3>'+
                            '<p>With drag-and-drop features, our Scheduler makes it easy to set customer appointments and manage technician assignments with required equipment and resources.</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="repair_info_btn">'+freeDemoHtml+'</div>'+
            '</div>'+
        '</div>'+
        '<div class="testimonial-section">'+
            '<div class="cs-container">'+
                '<h2>Hear From Our Customers</h2>'+
                '<div class="testimonial-slider">'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text"> “With Manager, I have my thumb on the pulse of the repair from beginning to end. Being able to order parts online is a huge timesaver, and managing parts so much more efficiently helps us be more profitable.”</p>'+
                        '<h3 class="person-name">–  Ric Morin, Owner</h3>'+
                        '<span class="person-post">Motorcar Alternatives | Hooksett, NH</span>'+
                    '</div>'+
                    '<div class="testimonial-item">'+
                        '<p class="testimonial-text">“There are many features of the Mitchell 1 Manager software that stand out. The creation of canned jobs and building parts kits make completing an estimate or repair order a breeze.. We have also found that the reports are extremely useful in giving a clear picture of the business — where the profits are highest and where adjustments need to be made. Mitchell 1 software has enabled us to stay ahead of the quickly changing auto repair business.”</p>'+
                        '<h3 class="person-name">– Samuel W. Concelman, Jr., Owner</h3>'+
                        '<span class="person-post">Glenshaw Auto Service | Glenshaw, PA</span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
       '<div class="information management_Simplified">'+
        '<div class="cs-container">'+
            '<div class="inner-information reverse">'+
                '<div class="info-text">'+
                    '<h3>Business Management <span class="text-grey">Simplified</span></h3>'+
                    '<p>Manager SE gives you real-time insights on your shop’s business operations on a secure, intuitive user interface. With one click, you can track your sales, inventory and employee performance; and connect with peers in our shop management forum.</p>'+
                    '<div class="repair_link"><a href="/prodemand/maintenance/">LEARN MORE</a></div>'+
                '</div>'+
                '<div class="img-box">'+
                    '<img src="//res.cloudinary.com/ignite-visibility/image/upload/v1671603479/mitchell1/Manger%20SE%20Test%20-%20Updated/ManagerSE.jpg" alt="ManagerSE">'+
                    '</div>'+
                '<div class="for-mobile">'+
                    '<p>Manager SE gives you real-time insights on your shop’s business operations on a secure, intuitive user interface. With one click, you can track your sales, inventory and employee performance; and connect with peers in our shop management forum.</p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="information service_Writer">'+
        '<div class="cs-container">'+
            '<div class="inner-information reverse">'+
                '<div class="img-box">'+
                    '<img src="//res.cloudinary.com/ignite-visibility/image/upload/v1671603479/mitchell1/Manger%20SE%20Test%20-%20Updated/Manager.jpg" alt="ManagerSE">'+
                '</div>'+
                '<div class="info-text">'+
                    '<h3>Service Writer Tools <span class="text-grey">that Connect</span></h3>'+
                    '<p>Service your customers’ vehicles faster and more efficiently with modern service writing tools including plate-to-VIN decoding, multi-point digital inspections, vehicle history reports, integrated texting (option) to facilitate fast customer communications.</p>'+
                    '<div class="repair_link"><a href="/prodemand/maintenance/">LEARN MORE</a></div>'+
                '</div>'+
                '<div class="for-mobile">'+
                    '<p>Service your customers’ vehicles faster and more efficiently with modern service writing tools including plate-to-VIN decoding, multi-point digital  inspections, vehicle history reports, integrated texting (option) to facilitate fast customer communications.</p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="information dependable_Estimating">'+
        '<div class="cs-container">'+
            '<div class="inner-information reverse">'+
                '<div class="info-text">'+
                    '<h3>Accurate, <span class="text-grey">Dependable Estimating</span></h3>'+
                    '<p>Quickly build accurate, profitable estimates with confidence. Manager SE is tightly integrated with ProDemand providing instant access to our industry standard labor guide, OEM parts, maintenance (with labor times), Technical Service Bulletins (TSBs) recalls and fluid types & capacities</p>'+
                    '<div class="repair_link"><a href="/prodemand/maintenance/">LEARN MORE</a></div>'+
                '</div>'+
                '<div class="img-box">'+
                    '<img src="//res.cloudinary.com/ignite-visibility/image/upload/v1671603480/mitchell1/Manger%20SE%20Test%20-%20Updated/Manager_office_2x.jpg" alt="Manager_office">'+
                    '</div>'+
                '<div class="for-mobile">'+
                    '<p>Quickly build accurate, profitable estimates with confidence. Manager SE is tightly integrated with ProDemand providing instant access to our industry standard labor guide, OEM parts, maintenance (with labor times), Technical Service Bulletins (TSBs) recalls and fluid types & capacities</p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="hear_Customers">'+
    '<div class="cs-container">'+
        '<h2>Hear From Our Customers</h2>'+
        '<div class="hear_Customers_item">'+
            '<p class="hear_Customers_text"> “With Manager, I have my thumb on the pulse of the repair from beginning to end. Being able to order parts online is a huge timesaver, and managing parts so much more efficiently helps us be more profitable.”</p>'+
            '<h3 class="person-name">– Ric Morin, Owner</h3><span class="person-post">Motorcar Alternatives | Hooksett, NH</span>'+
        '</div>'+
    '</div>'+
'</div>'+
    '<div class="information">'+
        '<div class="cs-container">'+
            '<div class="inner-information">'+
                '<div class="info-text">'+
                    '<h3>Seamless Product <span class="text-grey">Integration</span></h3>'+
                    informationContentOne+
                '</div>'+
                '<div class="img-box">'+
                    '<a href="/prodemand/repair-information/wiring-diagrams/"><img src="'+cloudinary+'David.jpg" alt="David"></a>'+
                '</div>'+
                '<div class="for-mobile">'+informationContentOne+'</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="information powerful_option">'+
        '<div class="cs-container">'+
            '<div class="inner-information reverse">'+
                '<div class="info-text">'+
                '<h3>POWERFUL <span class="text-grey">OPTIONS</span></h3>'+
                    informationContentTwo+
                    '<div class="repair_link"><a href="/prodemand/maintenance/">SEE MORE OPTIONS</a></div>'+
                '</div>'+
                '<div class="img-box">'+
                    '<img src="'+cloudinary+'Fair_Auto_Manager.jpg" alt="Fair Auto Manager">'+
                '</div>'+
                '<div class="for-mobile">'+informationContentTwo+'</div>'+
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
                    '<img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mitchell1/prodemand/find-my-local-rep.jpg" alt="find in your local area">'+
                '</div>');

                $('body.iv_prodemand').css('visibility','visible');
            }
        }, 200);

        $('.iv_prodemand #g1-footer-nav ul').after('<div class="g1-social-icons g1-social-icons--list-horizontal g1-social-icons--24 g1-social-icons--icon">' + $('.iv_prodemand #g1-social-icons-1').html() + '</div>');
    }

}   