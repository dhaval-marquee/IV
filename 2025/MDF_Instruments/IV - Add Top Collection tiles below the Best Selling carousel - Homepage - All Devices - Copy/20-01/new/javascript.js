function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here
        jQuery('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
        jQuery('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.1/css/OverlayScrollbars.css"/>').appendTo('head');

        jQuery('.shopify-section--featured-collections+.shopify-section--video').before(`<section class="slider_section collectionSlider">
            <div class="container">
                <div class="v-stack justify-self-center gap-4 text-center sm:gap-5"><h2 class="h2">TOP COLLECTIONS</h2></div>
                <div class="sliderWrapper">
                    <div class="slider">
                        <div class="slide">
                            <img src="https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-snow-leopardrose-gold-1.jpg?v=1645560595&width=1000" alt="">
                            <h3>ProCardial® COLLECTION</h3>
                        </div>
                        <div class="slide">
                            <img src="https://mdfinstruments.com/cdn/shop/files/stethoscope-mdf-instruments-md-one-epoch-titanium-flower-print-monet-kaleidoscope.jpg?v=1698419577&width=1000" alt="">
                            <h3>MD One® Epoch COLLECTION</h3>
                        </div>
                        <div class="slide">
                            <img src="https://mdfinstruments.com/cdn/shop/products/MDF777RG29-mdf-instruments-stethoscope-rose-gold-white-md-one-dual-head-adult.jpg?v=1675422314&width=1000" alt="">
                            <h3>MD One® COLLECTION</h3>
                        </div>
                        <div class="slide">
                            <img src="https://mdfinstruments.com/cdn/shop/files/Acoustica_Stethoscope_-_Black_BlackOut_747xp_BO11_Main.jpg?v=1729604891&width=1000" alt="">
                            <h3>Acoustica® COLLECTION</h3>
                        </div>
                        <div class="slide">
                            <img src="https://mdfinstruments.com/cdn/shop/files/mermaid-print-stethoscope-mdf-instruments-procardial-titanium-kaleidoscope.jpg?v=1697817023&width=1000" alt="">
                            <h3>MPRINTS COLLECTION</h3>
                        </div>
                    </div>
                </div>
                <div class="justify-self-center btn-wrapper">
                    <a class="button" href="https://mdfinstruments.com/collections/best-selling-stethoscopes">VIEW ALL COLLECTIONS</a></div>
            </div>
        </section>`);
        // Slick Slide

        $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
            $('.slider').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
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