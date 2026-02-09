function loadTestCode() {
    // Dynamically load CSS for Slick Slider
    jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css">');
    jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css">');
    if (!jQuery('body').hasClass('howItWorkIV')) {
        jQuery('body').addClass('howItWorkIV');
        // Put your test code here
        jQuery('#form').after(`<section class="howItWorkSection" id="howItWorkSection">
            <div class="howItWorkSection-content">
                <h2 class="how-it-work-title" id="workTitle">How It <em class="title-italic">Works</em></h2>
                <p class="how-it-work-desc">Getting started is simple! In just four easy steps, you'll be on your way to clearer, more confident conversations with the people who matter most.</p>
                <div class="container">
                    <div class="accordion">
                        <div class="accordion-item active">
                            <div class="accordion-header">
                                <div class="accordion-header-img">    
                                    <img src="https://clearcaptions.com/wp-content/uploads/2023/11/Accountability.svg" width="50" alt="Complete our form">
                                </div>
                                <h3>1. Complete our form or call <em class="title-italic" id="dynamicNumber"></em></h3>
                                <span class="accordion-arrow"></span>
                            </div>
                            <div class="accordion-body" style="display: block;">
                                <p>Choose what works best for you - fill out our simple online form or call to speak with a friendly specialist who will guide you through enrollment.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <div class="accordion-header-img">    
                                    <img src="https://clearcaptions.com/wp-content/uploads/2023/10/icon-person-wave.svg" width="60" alt="Determine your eligibility">
                                </div>
                                <h3>2. Determine your <em class="title-italic">eligibility</em></h3>
                                <span class="accordion-arrow"></span>
                            </div>
                            <div class="accordion-body" style="display: none;">
                                <p>ClearCaptions verifies your eligibility for our service based on hearing loss, U.S. residency, and internet access through a few simple questions.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <div class="accordion-header-img">    
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736233199/ClearCaptions/Training.svg" width="55" alt="Receive training & free installation">
                                </div>
                                <h3>3. Receive training & <em class="title-italic">free installation</em></h3>
                                <span class="accordion-arrow"></span>
                            </div>
                            <div class="accordion-body" style="display: none;">
                                <p>Relax while an expert installs your new phone at no cost, then receive personalized training until you feel completely confident using the captioning service.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <div class="accordion-header-img">    
                                    <img src="https://clearcaptions.com/wp-content/uploads/2023/10/icon-phone.svg" width="48" alt="Enjoy communicating independently once again">
                                </div>
                                <h3 class="accordion-item_h3">4. Enjoy communicating <em class="title-italic">independently once again</em></h3>
                                <span class="accordion-arrow"></span>
                            </div>
                            <div class="accordion-body" style="display: none;">
                                <p>Reconnect with confidence- enjoy clear, real-time captions that let you communicate easily and stay connected with loved ones.</p>
                            </div>
                        </div>
                    </div>
                    <div class="video-container" id="dynamicVideo"></div>
                </div>
            </div>
        </section>`);
        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery.ajax({
            url: contentPage,
            method: 'GET',
            success: function (response) {
                const parentContent = jQuery(response).find('.icon-video-lg').closest('.fusion-layout-column');
                const NumberforDesktop = jQuery(response).find('header .header-nav-call-now span');
                const NumberforMobile = jQuery(response).find('header .header-nav-mobile-menu-phone a');
                if (parentContent.length) {
                    const fullParentHTML = parentContent.prop('outerHTML');
                    jQuery('#dynamicVideo').html(fullParentHTML);
                } else {
                    console.warn("No matching parent element found.");
                }
                var text = jQuery('h4.fusion-title-heading').text();
                var contactNumber = text.match(/\d{3}-\d{3}-\d{4}/)[0];
                console.log(contactNumber); // Output: 866-949-4749
                jQuery('#dynamicNumber').eq(0).append(
                    `<span class="for-desktop">${contactNumber}</span><span class="for-mobile">${contactNumber}</span>`
                );
            },
            error: function (xhr, status, error) {
                console.error("Failed to fetch content:", status, error);
            }
        });
        jQuery(document).on('click', function(e) {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                if (jQuery(e.target).closest('.accordion-item').length) {
                    var $accordionItem = jQuery(e.target).closest('.accordion-item');
                    if (!$accordionItem.hasClass('active')) {
                        jQuery('.accordion-item').removeClass('active');
                        jQuery('.accordion-body').slideUp();
                        $accordionItem.addClass('active');
                        $accordionItem.find('.accordion-body').slideDown();
                    }
                }
            }
        });
        jQuery(document).ready(function () {
            // Dynamically load Slick Slider JS
            $.getScript('https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js', function () {
                // Initialize Slick Slider when JS is loaded
                function initSlick() {
                    if (jQuery(window).width() < 1024) { // Mobile screen condition
                        if (!jQuery('.accordion').hasClass('slick-initialized')) {
                            jQuery('.accordion').slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: true,
                                arrows: true
                            });
                        }
                    } else {
                        if (jQuery('.accordion').hasClass('slick-initialized')) {
                            jQuery('.accordion').slick('unslick');
                        }
                    }
                }
                // Initialize Slick and setup for resizing
                initSlick();
                jQuery(window).on('resize', initSlick);
            });
        });
        jQuery('#menu-item-4033 a').attr('href', 'javascript:;').attr('id', 'scrollToSection');
        jQuery(document).on('click', '#scrollToSection', function(e) {
            var headerHeight = jQuery('#boxed-wrapper .fusion-tb-header').height();
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: jQuery('#howItWorkSection').offset().top - headerHeight
            }, 250);
        });
    }
}
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
