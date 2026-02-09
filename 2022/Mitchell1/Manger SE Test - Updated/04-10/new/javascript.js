function getWindowWidth() {
    if (typeof window.innerWidth !== 'undefined') {
        return window.innerWidth;
    }
    return jQuery(window).width();
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        ivCode();
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
                ivCode();
            }
        }, 100);
    }
}, 100);

function ivCode() {
    if(!jQuery('body').hasClass('iv_home')) {
        jQuery('body').addClass('iv_home');
        // Get browser
        jQuery.each(jQuery.browser, function(i) {
            jQuery('body').addClass(i);
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
            jQuery('body').addClass(match[0]);
        };

        jQuery('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css' />");
        jQuery('.iv_home > header, .iv_home > section, .iv_home > footer').hide();


        var pageInterval = setInterval(function () {
            if (jQuery('.iv_home #page').length > 0) {
                clearInterval(pageInterval);
                jQuery('body.iv_home').css('visibility','visible');
                var freeDemoHtml = '<a class="btn btn-yellow iv-free-demo" href="javascript:void(0);">Book Your Free Demo</a>';
                var buttonInterval = setInterval(function () {
                    if (jQuery('.iv_home #g1-preheader__switch').length > 0) {
                        clearInterval(buttonInterval);
                        jQuery('.iv_home #g1-header').before(jQuery('.iv_home #g1-preheader'));
                        jQuery('.iv_home #g1-preheader__switch').before(freeDemoHtml);
                        jQuery('.iv_home #g1-preheader-bar > .btn').addClass('pull-right');
                        //faq
                        jQuery('#g1-section-2.g1-section').insertAfter('div#g1-content-area');
                        jQuery('div#g1-content-area').hide();
                        jQuery('.iv_home #g1-section-2.g1-section').wrap('<div class="faq-box"><div class="faq-container"></div></div>');

                    }
                }, 200);
                jQuery(window).on('resize',function() {
                    var jQuerysecondaryNav = jQuery('.iv_home #g1-secondary-nav');
                    if (getWindowWidth() > 1024) {
                        jQuerysecondaryNav.removeClass('g1-nav--mobile');
                    } else {
                        jQuerysecondaryNav.addClass('g1-nav--mobile');
                    }
                }).trigger('resize');
                jQuery('#g1-precontent').html('<figure id="g1-primary-slider"><div class="hero-section">'+
                    '<div class="inner-content">'+
                        '<h2>Manager SE</h2>'+
                        '<h1>Auto Shop Management Software</h1>'+
                        '<ul>'+
                            '<li>CRM</li>'+
                            '<li>Time Management</li>'+
                            '<li>Vehicle Service History</li>'+
                            '<li> all in one package</li>'+
                        '</ul>'+
                        '<div class="center-btn">'+freeDemoHtml+'</div>'+
                    '</div>'+
                '</div></figure>');
                var cloudinary = '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mitchell1/homepage-redesign/';
                var informationContentTwo = '<ul>'+
                    '<li>Time Management</li>'+
                    '<li>Plate to Vin Decoding</li>'+
                    '<li>Service Writer Tools & CRM</li>'+
                    '<li>Fast and Accurate Estimating</li>'+
                    '<li>ProDemand Integration</li>'+
                    '<li>Off Site Data Protection</li>'+
                    '<li>Electronic Parts Catalog</li>'+
                '</ul>';
                var informationContentThree = '<ul>'+
                    '<li>In 1918, we published the first-ever manual featuring specs & diagrams of auto electrical systems, followed by the first in-depth collision estimate guide.</li>'+
                    '<li>In 1989, we launched the first-ever PC-based auto repair information guide, and in 1995, unveiled the first Windows-based management system.</li>'+
                    '<li>Today, we\'re still innovating to help clients maximize efficiency & profitability.</li>'+
                '</ul>';
                jQuery('.iv_home #g1-content-area').after(jQuery('.iv_home #sec_container'));
                jQuery('.iv_home #g1-content-area').before('<div class="logo-section">'+
                    '<div class="cs-container">'+
                        '<h2>AN INDUSTRY LEADER FOR 100+ YEARS</h2>'+
                        '<div class="logos">'+
                            '<div class="logo-item"><img src="/press/wp-content/uploads/sites/15/2019/05/tools-19.jpg" alt="Tools 2019"></div>'+
                            '<div class="logo-item"><img src="/press/wp-content/uploads/sites/15/2020/10/PTEN_2020PeoplesChoice_logo_AwardWinner_final.png" alt="People\'s Choice 2020"></div>'+
                            '<div class="logo-item"><img src="/press/wp-content/uploads/sites/15/2022/03/PTEN_2021PC_logo_final.611d6d7caa53d.png" alt="People\'s Choice 2021"></div>'+
                            '<div class="logo-item"><img src="/press/wp-content/uploads/sites/15/2021/07/PTEN_2021IA_WinnerLogo_final.png" alt="Innovation Awards 2021"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="keys">'+
                    '<div class="cs-container">'+
                        '<h2>Key Solutions:<span class="text-grey">Software to Drive Your Business</span></h2>'+
                        '<div class="feature-boxes">'+
                            '<div class="single-box">'+
                                '<img src="/wp-content/uploads/2022/03/large-Auto-Repair.png" alt="Auto Repair">'+
                                '<h4>Time Management</h4>'+
                                '<p>The time management and tracking features give you full visibility to technician labor times and employee shifts (optional), all presented in a secure, intuitive dashboard.</p>'+
                                '<a href="/prodemand/" class="box-btn btn-yellow">Learn More</a>'+
                            '</div>'+
                            '<div class="single-box">'+
                                '<img src="/wp-content/uploads/2022/03/large-Shop-Management.png" alt="Shop Management">'+
                                '<h4>Plate to VIN Decoding</h4>'+
                                '<p>Get vital vehicle information fast by entering a client’s license plate number into Manager SE, which decodes the VIN for you and gives you important information, including engine type, service history, and customer account details.</p>'+
                                '<a href="/manager-se/" class="box-btn btn-yellow">Learn More</a>'+
                            '</div>'+
                            '<div class="single-box">'+
                                '<img src="/wp-content/uploads/2022/03/large-Truck-Repair.png" alt="Truck Repair">'+
                                '<h4>CRM Software</h4>'+
                                '<p>Maintain and grow relationships with Customer Engagement Tools, Fast and Accurate estimates, and point-and-click appointment scheduling.</p>'+
                                '<a href="/truckseries/" class="box-btn btn-yellow">Learn More</a>'+
                            '</div>'+
                            '<div class="single-box">'+
                                '<img src="/wp-content/uploads/2022/03/large-Shop-Marketing.png" alt="Shop Marketing">'+
                                '<h4>Data Protection</h4>'+
                                '<p>Don’t worry about losing important information if a computer fails. Manager SE automatically backs up all of your data to a secure remote location. In the event of a disaster, we can have you back in business the same day.</p>'+
                                '<a href="/scrmlibrary/" class="box-btn btn-yellow">Learn More</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="review">'+
                    '<div class="cs-container">'+
                        '<div class="review-inner">'+
                            '<h2>Our Users Love Us! Bar</h2>'+
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
                                '<h3>Shop Management Software</h3>'+
                                '<p>Managing all the moving parts at your auto repair shop can be time-consuming and difficult without the right tools. Manager™ SE shop management software from Mitchell 1 is a comprehensive solution to simplify and organize your shop management tasks. This includes everything from writing accurate estimates and ordering parts to tracking business results with integrated reports. Streamline your back office management tasks with Accounting Link, and process credit card payments directly through your management software system with XCharge or 1st Mile.</p>'+
                            '</div>'+
                            '<div class="img-box">'+
                                '<a href="/prodemand/repair-information/wiring-diagrams/"><img src="'+cloudinary+'detailed.png" alt="Detailed Information"></a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="for-mobile"><p>Managing all the moving parts at your auto repair shop can be time-consuming and difficult without the right tools. Manager™ SE shop management software from Mitchell 1 is a comprehensive solution to simplify and organize your shop management tasks. This includes everything from writing accurate estimates and ordering parts to tracking business results with integrated reports. Streamline your back office management tasks with Accounting Link, and process credit card payments directly through your management software system with XCharge or 1st Mile.</p></div>'+
                    '</div>'+
                '</div>'+
                '<div class="information mh-grey">'+
                    '<div class="cs-container">'+
                        '<div class="inner-information reverse">'+
                            '<div class="info-text">'+
                                '<h3>Included Benefits of Mitchell 1 Manager SE</h3>'+
                                informationContentTwo+
                            '</div>'+
                            '<div class="img-box">'+
                            '<iframe width="560" height="315" src="https://www.youtube.com/embed/3COspKhkebc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
                            '</div>'+
                        '</div>'+
                        '<div class="for-mobile">'+informationContentTwo+'</div>'+
                    '</div>'+
                '</div>'+
                '<div class="information bg-grey">'+
                '<div class="cs-container">'+
                    '<div class="inner-information">'+
                        '<div class="info-text">'+
                            '<h3> A Century of Innovation and Still Accelerating</h3>'+
                            '<p>Mitchell 1 has been accelerating the vehicle repair process for over 100 years:</p>'+
                            informationContentThree+
                        '</div>'+
                        '<div class="img-box">'+
                            '<a href="/prodemand/repair-information/wiring-diagrams/"><img src="https://mitchell1.com/alt-home/assets/images/100-y-M1-logo.jpg" alt="Detailed Information"></a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="for-mobile">'+informationContentThree+'</div>'+
                '</div>'+
            '</div>'+
                '</div>');
                jQuery.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){
                    function touchslider() {
                        var jQuerytouchslider = jQuery('.logos');
                        if (getWindowWidth() < 768) {
                            if(jQuerytouchslider.hasClass('slick-initialized')) {
                                jQuerytouchslider.slick('unslick');
                            }
                            jQuerytouchslider.slick({
                                infinite: true,
                                autoplay: true,
                                autoplaySpeed: 2000,
                                arrows: false,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                cssEase: 'linear'
                            });
                        } else {
                            if(jQuerytouchslider.hasClass('slick-initialized')) {
                                jQuerytouchslider.slick('unslick');
                            }
                        }
                    }
                    touchslider();
                    jQuery(window).resize(function () {
                        touchslider();
                    });
                });

                //footre
                jQuery('ul#g1-footer-nav-menu').after('<div class="g1-social-icons g1-social-icons--list-horizontal g1-social-icons--24 g1-social-icons--icon">'+
                '<ul>'+
                    '<li>'+
                        '<a class="g1-new-window " href="https://www.facebook.com/mitchell1shopsolutions/" target="_blank">'+
                            '<span class="g1-social-icon g1-social-icon--facebook">'+
                                '<img src="https://mitchell1.com/wp-content/plugins/g1-social-icons/images/facebook/facebook-48.png" alt="facebook" width="24" height="24">'+
                            '</span>'+
                        '</a>'+
                    '</li>'+
                     '<li>'+
                        '<a class="g1-new-window " href="https://www.instagram.com/mitchell1shopsolutions/" target="_blank">'+
                            '<span class="g1-social-icon g1-social-icon--instagram">'+
                                '<img src="https://mitchell1.com/wp-content/plugins/g1-social-icons/images/instagram/instagram-48.png" alt="instagram" width="24" height="24">'+
                            '</span>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="g1-new-window " href="https://www.linkedin.com/company/mitchell1/" target="_blank">'+
                            '<span class="g1-social-icon g1-social-icon--linkedin">'+
                                '<img src="https://mitchell1.com/wp-content/plugins/g1-social-icons/images/linkedin/linkedin-48.png" alt="linkedin" width="24" height="24">'+
                            '</span>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="g1-new-window " href="https://twitter.com/Mitchell1" target="_blank">'+
                            '<span class="g1-social-icon g1-social-icon--twitter">'+
                                '<img src="https://mitchell1.com/wp-content/plugins/g1-social-icons/images/twitter/twitter-48.png" alt="twitter" width="24" height="24">'+
                            '</span>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a class="g1-new-window " href="https://www.youtube.com/user/Mitchell1Rocks" target="_blank">'+
                            '<span class="g1-social-icon g1-social-icon--youtube">'+
                                '<img src="https://mitchell1.com/wp-content/plugins/g1-social-icons/images/youtube/youtube-48.png" alt="youtube" width="24" height="24">'+
                            '</span>'+
                        '</a>'+
                    '</li>'+
                '</ul>'+
                '</div>');

                jQuery('.iv_home .g1-section .g1-layout-inner').append(`<div id="g1-toggle-counter-5" class="g1-toggle g1-toggle--off g1-toggle--simple g1-toggle--noicon faqfootertogl g1-toggle-v1">
                    <div class="g1-toggle__title"><span class="g1-toggle__switch"></span>Hardware Requirements</div>
                    <div class="g1-toggle__content" style="display: none;">
                        <div class="g1-block">
                            <br>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="whiteRow"><b>Manager SE (8.x)</b></td>
                                        <td class="whiteRow"></td>
                                        <td class="whiteRow"></td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow"><b>Component</b></td>
                                        <td class="grayRow"><b>Minimum System Requirements</b></td>
                                        <td class="grayRow"><b>Recommended</b></td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">CPU</td>
                                        <td class="whiteRow">Intel Core i3 6100 or AMD Ryzen 3 1200</td>
                                        <td class="whiteRow">Intel Core i5 8400 or AMD Ryzen 5 3000 Series</td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow">Operating System*</td>
                                        <td class="grayRow">Windows 10 64-bit</td>
                                        <td class="grayRow">Windows 10 64-bit, Windows 11 64-bit</td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">Memory (RAM)</td>
                                        <td class="whiteRow">8 GB for Host; 4 GB for Workstation</td>
                                        <td class="whiteRow">16 GB of RAM</td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow">Hard Drive</td>
                                        <td class="grayRow">40 GB of available hard disk drive space</td>
                                        <td class="grayRow">80 GB / Solid State Drive or NVMe Drive</td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">Optical Drive</td>
                                        <td class="whiteRow" colspan="2">DVD Drive</td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow">Network<sup>1</sup></td>
                                        <td class="grayRow" colspan="2">Wireless connections OK;&nbsp;Peer-to-peer&nbsp;Workgroups OK; Domains not
                                            supported</td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">Input Device</td>
                                        <td class="whiteRow" colspan="2">Keyboard and Mouse</td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow">Monitor</td>
                                        <td class="grayRow">17″ Monitor @ Minimum Resolution 1280 x 960</td>
                                        <td class="grayRow">22″ Monitor @ min. res. 1920 x 1080</td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">Printer</td>
                                        <td class="whiteRow">Inkjet or Laser Printer. All latest drivers installed</td>
                                        <td class="whiteRow">Color Inkjet or Laser Printer</td>
                                    </tr>
                                    <tr>
                                        <td class="grayRow">Backup</td>
                                        <td class="grayRow">16GB backup device, Manager SE Connection</td>
                                        <td class="grayRow">2 x 16GB Flash Drives used in rotation</td>
                                    </tr>
                                    <tr>
                                        <td class="whiteRow">Internet</td>
                                        <td class="whiteRow" colspan="2">Broadband*** Internet Connection Required</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`);

                jQuery('.g1-toggle-v1').each( function(){
                    var $this = jQuery(this);
                    var $title = $this.find('.g1-toggle__title');
                    var $helper = jQuery('<span class="g1-toggle__switch"></span>');
                    $helper.prepend($title.find('i[class*="fa-"]'));
                    $title.prepend($helper);
                
                    var $content = $this.find('.g1-toggle__content');
                
                    if ( $this.hasClass( 'g1-toggle--off' ) ) {
                        $content.hide();
                    }
                
                    $title.click(function() {
                        // Switch toggle (from 'off' to 'on' or from 'on' to 'off' ) on mouseclick
                        $this.toggleClass('g1-toggle--on g1-toggle--off');
                        // Show or hide content
                        $content.slideToggle();
                    });
                });

            }
        }, 200);
    }
}