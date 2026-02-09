function runIVTests() {

    /* ---------- LOAD SLICK CSS ---------- */
    function loadSlickCSS() {
        if (document.getElementById('iv-slick-css')) return;

        var slickCSS = document.createElement('link');
        slickCSS.id = 'iv-slick-css';
        slickCSS.rel = 'stylesheet';
        slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css';

        document.head.appendChild(slickCSS);
    }

    /* ---------- LOAD SLICK JS ---------- */
    function loadSlickJS(callback) {
        if (typeof jQuery.fn.slick !== 'undefined') { callback(); return; }
        jQuery.getScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () { callback(); });
    }

    /* ---------- HERO HTML INJECTION ---------- */
    function loadTestCode() {
        if (document.body.classList.contains('iv-hero-image')) return;
        document.body.classList.add('iv-hero-image');

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
            initHeroSlider();
        }
    }

    /* ---------- SLICK INIT / DESTROY ---------- */
    function initHeroSlider() {
        var $wrapper = jQuery('.iv-hero-wrapper--js');
        if (!$wrapper.length) return;

        var isMobile = window.innerWidth <= 767;

        if (isMobile) {
            if (!$wrapper.hasClass('slick-initialized')) {
                $wrapper.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true,
                    infinite: false
                });
            }
        } else {
            if ($wrapper.hasClass('slick-initialized')) {
                $wrapper.slick('unslick');
            }
        }
    }

    /* ---------- INIT ---------- */
    var waitForjQuery = setInterval(function () {
        if (typeof jQuery !== 'undefined') {
            clearInterval(waitForjQuery);

            loadSlickCSS();
            loadSlickJS(function () {
                loadTestCode();

                jQuery(window).on('resize', function () {
                    clearTimeout(window.__ivHeroResizeTimer);
                    window.__ivHeroResizeTimer = setTimeout(function () {
                        initHeroSlider();
                    }, 200);
                });
            });
        }
    }, 100);

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runIVTests);
} else {
    runIVTests();
}