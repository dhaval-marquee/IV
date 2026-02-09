function loadTestCode() {
    // Dynamically load CSS for Slick Slider
    jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css">');
    jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css">');
    if (!jQuery('body').hasClass('iv-howItWork')) {
        jQuery('body').addClass('iv-howItWork');


        // get Dynamic Number code
        var DesktopNumber = jQuery('#hidden-phone-numbers .fusion-no-small-visibility .fusion-button-text').text().trim();
        var MobileNumber = jQuery('#hidden-phone-numbers .fusion-no-large-visibility .fusion-button-text').text().trim();

        var DesktopDigits = DesktopNumber.replace(/\D/g, ""); // ✅ only digits
        var phoneNumberD = DesktopDigits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

        var MobileDigits = MobileNumber.replace(/\D/g, "");
        var phoneNumberM = MobileDigits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

        var i = 0;
        var getNumberInterval = setInterval(function () {

            if (DesktopNumber) {
                jQuery('.header-menu .call-menu .phone-number span').html(
                    `Call now <a href="tel:+1${DesktopDigits}">${phoneNumberD}</a>`
                );
                jQuery('.page-section a.fusion-no-small-visibility').attr('href', `tel:+1${DesktopDigits}`);
                jQuery('.page-section a.fusion-no-small-visibility span').html(`Call ${phoneNumberD}`);
            }
            if (MobileNumber) {

                jQuery(".for-mobile").text(phoneNumberM);
                jQuery('.header-menu .phone-number a').eq(0).attr('href', `tel:+1${MobileDigits}`);

                jQuery('.page-section a.fusion-no-large-visibility').attr('href', `tel:+${MobileDigits}`);
                jQuery('.page-section a.fusion-no-large-visibility span').html(`Call ${phoneNumberM}`);

                jQuery('div#form>div .fusion-builder-row>div a.fusion-no-large-visibility').attr('href', `tel:+${MobileDigits}`);
                jQuery('div#form>div .fusion-builder-row>div a.fusion-no-large-visibility span').html(`CALL NOW! ${phoneNumberM}`);
            }

            // Add only once (with clean numbers)
            if (jQuery('#dynamicNumber .for-desktop').length === 0 && jQuery('#dynamicNumber .for-mobile').length === 0) {
                jQuery('#dynamicNumber').append(
                    `<span class="for-desktop">${phoneNumberD}</span><span class="for-mobile">${phoneNumberM}</span>`
                );
            }
            if (jQuery('#bannerDynamicNumber .onlyDesktop').length === 0 && jQuery('#bannerDynamicNumber .onlyMobile').length === 0) {
                jQuery('#bannerDynamicNumber').append(
                    `<span class="onlyDesktop">Click to Call: <a href="tel:+${DesktopDigits}">${phoneNumberD}</a></span>
                    <span class="onlyMobile">Click to Call: <a href="tel:+${MobileDigits}">${phoneNumberM}</a></span>`
                );
            }
            if (i == 5) {
                clearInterval(getNumberInterval);
            }
            i++;
        }, 1000);

        jQuery('#form').after(`<div class="supportBanner">
            <div class="content">
                <div class="iconWrapper">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/ClearCaptions/icon-service.svg" alt="Service icon">
                    <p>Need help? Contact a support expert:</p>
                </div>
                <div class="phoneNumber" id="bannerDynamicNumber">
                    <span class="onlyDesktop">Click to Call: <a href="tel:+18662690372">866-269-0372</a></span>
                    <span class="onlyMobile">Click to Call: <a href="tel:+18662691352">866-269-1352</a></span>
                </div>
            </div>
        </div>
        <section class="howItWorkSection" id="howItWorkSection">
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
                                <h3>1. Complete our form or call <em class="title-italic" id="dynamicNumber">
                                <span class="for-desktop">866-269-0372</span><span class="for-mobile">866-269-1352</span></em></h3>
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

        var $target = jQuery('#howItWorkSection + #howItWorkSection #dynamicVideo > div');

        if ($target.length > 0) {
            jQuery('#dynamicVideo').append($target);
        }

        // get video code
        var contentPage = "https://clearcaptions.com/how-it-works/";
        jQuery.ajax({
            url: contentPage,
            method: 'GET',
            success: function (response) {
                const parentContent = jQuery(response).find('.icon-video-lg').closest('.fusion-layout-column');
                if (parentContent.length) {
                    const fullParentHTML = parentContent.prop('outerHTML');
                    jQuery('#dynamicVideo').html(fullParentHTML);
                } else {
                    console.warn("No matching parent element found.");
                }
            },
            error: function (xhr, status, error) {
                console.error("Failed to fetch content:", status, error);
            }
        });

        // accordion code
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

        // slider code
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
        
        // scroll To Section event
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
loadTestCode();