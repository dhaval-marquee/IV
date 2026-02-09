if (!$('body').hasClass('iv_eshop_pdp')) {
    $('body').addClass('iv_eshop_pdp');

    // Slick Slide
    $('head').append('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" />');

    $('#breakout-wrapper').after('<div class="container" id="productHeaderWrapper"></div>');

    function getScrollbarWidth() {
        var div = jQuery('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
        jQuery('body').append(div);
        var w1 = jQuery('div', div).innerWidth();
        div.css('overflow-y', 'scroll');
        var w2 = jQuery('div', div).innerWidth();
        jQuery(div).remove();
        return (w1 - w2);
    }

    $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () {

        jQuery(window).on("resize", function () {

            var scrollWidth = getScrollbarWidth();
            var windowWidth = jQuery(window).width();
            windowWidthFull = windowWidth + scrollWidth;
        
         
            if (windowWidthFull > 767) {
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

                setTimeout(() => {
                    if($('#slide-thumbnails').hasClass('slick-initialized')) {
                        $('#slide-thumbnails').slick('unslick');
                    }
                }, 1500);
            }
        }).resize();
    });


    $('.pdp-grid__gallery').after('<div class="pdp-grid__info"></div>');
    $('.pdp-grid__info').append($('.pdp-cart__reviews')).append($('.pdp-grid__header,.pdp-grid__cart'));
    $('.pdp-grid__cart').append($('.pdp-floating-cart-toggle'));
    $('.pdp-floating-cart-toggle').after($('.pdp-cart__ships-link'));
    $('.pdp-description__title').text('Product Information');

    $('.iv_eshop_pdp #pdp-cart__btn-a').before(`<div class="select_wrapper">
        <div class="custom_selectBox">
            <label>Storage</label>
            <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                <option value=""> Select Size </option>
                <option value="https://eshop.macsales.com/item/OWC/ENVPK.2/"> 240GB </option>
                <option value="https://eshop.macsales.com/item/OWC/ENVPK.5/"> 480GB </option>
                <option value="https://eshop.macsales.com/item/OWC/ENVPK01/"> 1 TB </option>
                <option value="https://eshop.macsales.com/item/OWC/ENVPK02/"> 2 TB </option>
            </select>
        </div>
    </div>`);


    jQuery(window).on("resize", function () {

        var scrollWidth = getScrollbarWidth();
        var windowWidth = jQuery(window).width();
        windowWidthFull = windowWidth + scrollWidth;
     
        if (windowWidthFull < 768) {

            $('#productHeaderWrapper').prepend($('.pdp-grid__header'));
            $('#pdp-cart__price').append($('#pdp-cart__ships'));

        } else {
            if($('#productHeaderWrapper .pdp-grid__header').length > 0) {
                $('.pdp-cart__reviews').after($('#productHeaderWrapper .pdp-grid__header'));
            }
            $('.custom_selectBox').after($('#pdp-cart__ships'));
        }
    }).resize();

    var currentPage = window.location.pathname;
    console.log(currentPage)

    $('.custom_selectBox option').each(function(){
        if($(this).attr('value').indexOf(currentPage) > -1) {
            console.log(currentPage);
            $(this).attr('selected','selected');

            $('.custom_selectBox option[value=""]').remove();
        }
    });

    $('#highlights-list li').each(function () {
        var text = $(this).html().split(':')[0]
        $(this).html($(this).html().replace(text, '<b>' + text + '</b>'));
    });

    const queryParameters = window.location.href.split('?')[1]
    if (queryParameters != undefined) {
        $('.custom_selectBox select option').attr('value',)
    
        $('.custom_selectBox select option').each(function(){
            var linkValue = $(this).attr('value');
            $(this).attr('value', linkValue+ '?' +queryParameters)
        });
    }
}