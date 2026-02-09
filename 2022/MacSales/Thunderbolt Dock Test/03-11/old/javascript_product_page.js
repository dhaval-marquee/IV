if (!$('body').hasClass('iv_eshop_pdp')) {
    $('body').addClass('iv_eshop_pdp');

    // Slick Slide
    $('head').append('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" />');

    $('#breakout-wrapper').after('<div class="container" id="productHeaderWrapper"></div>');
    $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () {

        jQuery(window).on("resize", function () {
         
            if (jQuery(window).width() > 767) {
                $('#slide-thumbnails').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<span class="slick-prev"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663227429/macsales/Ministack%29STX_Product_Page_Test/slider-arrow.png" alt="Arrow Prev"></div>',
                    nextArrow: '<span class="slick-next"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663227429/macsales/Ministack%29STX_Product_Page_Test/slider-arrow.png" alt="Arrow Next"></div>',
                    responsive: [
                        {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3
                        }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                            slidesToShow: 2
                            }
                        }
                    ]
                });
            } else {
                $('#slide-thumbnails').slick('unslick');
            }
        }).resize();
    });


    $('.pdp-grid__gallery').after('<div class="pdp-grid__info"></div>');
    $('.pdp-grid__info').append($('.pdp-cart__reviews')).append($('.pdp-grid__header,.pdp-grid__cart'));
    $('.pdp-grid__cart').append($('.pdp-floating-cart-toggle'));
    $('.pdp-floating-cart-toggle').after($('.pdp-cart__ships-link'));
    $('.pdp-description__title').text('Product Information');

    $('.pdp-floating-cart-toggle').before($('#pdp-cart__ships'));

    jQuery(window).on("resize", function () {
     
        if (jQuery(window).width() < 768) {

            $('#productHeaderWrapper').prepend($('.pdp-grid__header'));
            $('#pdp-cart__price').append($('#pdp-cart__ships'));

        } else {
            if($('#productHeaderWrapper .pdp-grid__header').length > 0) {
                $('.pdp-cart__reviews').after($('#productHeaderWrapper .pdp-grid__header'));
            }
            $('.custom_selectBox').after($('#pdp-cart__ships'));
        }
    }).resize();

    $('#highlights-list li').each(function () {
        var text = $(this).html().split(':')[0]
        $(this).html($(this).html().replace(text, '<b>' + text + '</b>'));
    });
}