// Time difference calculation
let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);


function runIVTests() {
    if (document.querySelector("body").classList.contains('iv-hero-image')) return;
    document.querySelector("body").classList.add('iv-hero-image');

    const slideHtml = `
    <div class="iv-hero-wrapper iv-hero-wrapper--js">
        <div class="iv-hero-slider iv-hero-left">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1769062237/MDF_Instruments/MultiTileHeroImage2/up-to-30-percent-off.jpg" alt="UP TO 30% OFF">
            <div class="iv-hero-content">
                <span class="iv-eyebrow">FOR A LIMITED TIME</span>
                <h2>UP TO 30% OFF</h2>
                <a class="button" href="https://mdfinstruments.com/collections/deals">SHOP SALE</a>
            </div>
        </div>

        <div class="iv-hero-slider iv-hero-right-top">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1769062243/MDF_Instruments/MultiTileHeroImage2/scrubs-and-apparel.jpg" alt="SCRUBS & APPAREL">
            <div class="iv-hero-content">
                <span class="iv-eyebrow">NEW SCRUBS FROM YOUR FAV BRANDS</span>
                <h2>SCRUBS & APPAREL</h2>
                <a class="button" href="https://mdfinstruments.com/collections/scrubs-and-medical-apparel">SHOP ALL APPAREL</a>
            </div>
        </div>

        <div class="iv-hero-slider iv-hero-right-bottom">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1769062247/MDF_Instruments/MultiTileHeroImage2/mprint-stethoscope-collection.jpg" alt="MPRINTS COLLECTION">
            <div class="iv-hero-content">
                <span class="iv-eyebrow">SHOW YOUR WILD SIDE WITH OUR MPRINTS COLLECTION!</span>
                <h2>MPRINTS COLLECTION</h2>
                <a class="button" href="https://mdfinstruments.com/collections/the-mprints-collection">SHOP MPRINTS</a>
            </div>
        </div>
    </div>`;

    const controlSlider = document.querySelector('section.shopify-section--slideshow:first-child slideshow-carousel');
    if (controlSlider) {
        controlSlider.insertAdjacentHTML('afterend', slideHtml);

        let Time2 = new Date().getTime()/1000;
        console.log('Time 2 > ' + Time2);

        let timeDifference = Time2 - Time1;
        console.log('Time difference > ' + timeDifference + ' seconds');
        // Time difference calculation over

        var waitForjQuery = setInterval(function () {
            if (typeof jQuery !== 'undefined') {
                clearInterval(waitForjQuery);
                $.getScript('https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js', function () {
                    // Initialize Slick Slider when JS is loaded
                    function initSlick() {
                        if (jQuery(window).width() < 768) { // Mobile screen condition

                            if (!jQuery('.iv-hero-wrapper--js').hasClass('slick-initialized')) {
                                jQuery('.iv-hero-wrapper--js').slick({
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    arrows: false,
                                    adaptiveHeight: true,
                                    infinite: false
                                });
                            }
                        } else {
                            if (jQuery('.iv-hero-wrapper--js').hasClass('slick-initialized')) {
                                jQuery('.iv-hero-wrapper--js').slick('unslick');
                            }
                        }
                    }

                    // Initialize Slick and setup for resizing
                    initSlick();
                    jQuery(window).on('resize', initSlick);
                });
            }
        }, 100);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runIVTests);
} else {
    runIVTests();
}