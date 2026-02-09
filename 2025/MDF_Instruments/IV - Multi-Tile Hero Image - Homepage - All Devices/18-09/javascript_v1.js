function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        jQuery('body').addClass('homepage_iv_v1');

        // Put your test code here
        jQuery('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
        jQuery('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.1/css/OverlayScrollbars.css"/>').appendTo('head');

        jQuery('main > section').eq(0).after(`<section class="slider_section collectionSlider">
            <div class="imgWrapper onlyDesk">
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1755063383/image.png" alt="MultiTile Hero Bg">
            </div>
            <div class="sliderWrapper onlyMobile">
                <div class="slider">
                    <div class="slide">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1753947165/MDF_Instruments/StethoscopesPink.png" alt="Stethoscopes">
                        <div class="slideshow__slide-content place-self-center text-center sm:place-self-center sm:text-center sectionContent" style="--text-color: 255 255 255; color: rgb(var(--text-color));--border-color: var(--text-color) / 0.15;">
                            <div class="contentWrapper">
                                <div class="prose">
                                    <p class="h1"><strong>$20 off + Free Gifts Worth $80</strong></p>
                                    <div class="button-group justify-center sm:justify-center">
                                        <a class="button button--outline" style="--button-background: 255 255 255;--button-outline-color: 255 255 255;--button-text-color: 255 255 255;" href="https://mdfinstruments.com/collections/procardial-titanium-mprints">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1753947164/MDF_Instruments/Stethoscopes_img2.jpg" alt="Stethoscopes Girl">
                                <div class="slideshow__slide-content place-self-center text-center sm:place-self-center sm:text-center sectionContent" style="--text-color: 255 255 255; color: rgb(var(--text-color));--border-color: var(--text-color) / 0.15;">
                            <div class="contentWrapper">
                                <div class="prose">
                                    <p class="h1"><strong>OLIVE US APPAREL</strong></p>
                                    <div class="button-group justify-center sm:justify-center">
                                        <a class="button button--outline" style="--button-background: 255 255 255;--button-outline-color: 255 255 255;--button-text-color: 255 255 255;" href="https://mdfinstruments.com/collections/scrubs-and-medical-apparel">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="onlyDesk slideshow__slide-content place-self-center text-center sm:place-self-center sm:text-center sectionContent" style="--text-color: 255 255 255; color: rgb(var(--text-color));--border-color: var(--text-color) / 0.15;">
                <div class="contentWrapper">
                    <div class="prose rightPart">
                        <p class="h1"><strong>$20 off + Free Gifts Worth $80</strong></p>
                        <div class="button-group justify-center sm:justify-center">
                            <a class="button button--outline" style="--button-background: 255 255 255;--button-outline-color: 255 255 255;--button-text-color: 255 255 255;" href="https://mdfinstruments.com/collections/procardial-titanium-mprints">SHOP NOW</a>
                        </div>
                    </div>
                    <div class="prose leftPart">
                        <p class="h1"><strong>OLIVE US APPAREL</strong></p>
                        <div class="button-group justify-center sm:justify-center">
                            <a class="button button--outline" style="--button-background: 255 255 255;--button-outline-color: 255 255 255;--button-text-color: 255 255 255;" href="https://mdfinstruments.com/collections/scrubs-and-medical-apparel">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);

        // Slick Slide
        $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {

        function initMobileSlider() {
            if (window.innerWidth <= 699) {
                if (!$('.slider').hasClass('slick-initialized')) {
                    $('.slider').slick({
                        infinite: true,
                        autoplay: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    });
                }
            } else {
            // Destroy slider if screen is larger than mobile
            if ($('.slider').hasClass('slick-initialized')) {
                $('.slider').slick('unslick');
            }
        }
        }

        // Run on page load
        $(document).ready(function () {
            initMobileSlider();
        });

        // Optional: Re-run on window resize
        $(window).on('resize', function () {
            initMobileSlider();
        });

            $('.slider_section').css('opacity','1');
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);