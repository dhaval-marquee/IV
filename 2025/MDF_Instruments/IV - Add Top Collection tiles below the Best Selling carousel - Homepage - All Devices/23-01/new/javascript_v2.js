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
                            <a href="https://mdfinstruments.com/collections/the-mprints-collection">
                                <img src="https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-snow-leopardrose-gold-1.jpg?v=1645560595&width=600" alt="Mprint Stethoscope">
                                <h3>Mprint Stethoscope</h3>
                            </a>
                        </div>
                        <div class="slide">
                            <a href="https://mdfinstruments.com/collections/procardial-titanium">
                                <img src="https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-mermaid-kaleidoscope-main.jpg?v=1737382973&width=600" alt="ProCardial® Titanium">
                                <h3>ProCardial® Titanium</h3>
                            </a>
                        </div>
                        <div class="slide">
                            <a href="https://mdfinstruments.com/collections/pink-acoustica-stethoscopes">
                                <img src="https://mdfinstruments.com/cdn/shop/files/pink-stethoscope-mdf-instruments-acoustica-pinkalloy-cosmo.jpg?v=1692984826&width=600" alt="Pink Acoustica">
                                <h3>Pink Acoustica</h3>
                            </a>
                        </div>
                        <div class="slide">
                            <a href="https://mdfinstruments.com/collections/md-one-stethoscope">
                                <img src="https://mdfinstruments.com/cdn/shop/products/MDF777RG29-mdf-instruments-stethoscope-rose-gold-white-md-one-dual-head-adult.jpg?v=1675422314&width=600" alt="Shop MD One Stainless">
                                <h3>Shop MD One Stainless</h3>
                            </a>
                        </div>
                        <div class="slide">
                            <a href="https://mdfinstruments.com/collections/the-epoch-series">
                                <img src="https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-monet-kaleidoscope-main.jpg?v=1737456120&width=600" alt="MD One® Epoch Titanium">
                                <h3>MD One® Epoch Titanium</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="justify-self-center btn-wrapper">
                    <a class="button" href="https://mdfinstruments.com/collections/stethoscope">VIEW ALL COLLECTIONS</a>
                </div>
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