if (!$('body').hasClass('iv_eshop_pdp')) {
    $('body').addClass('iv_eshop_pdp');

    // Slick Slide
    $('head').append('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" />');
    $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () {
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
                <option value="https://eshop.macsales.com/item/OWC/T4MS6000/"> 0TB (DIY Enclosure) </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H02N00/"> 2TB HDD </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H08N00/"> 8TB HDD </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H14N00/"> 14 TB HDD </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H00N02/"> 2TB SSD </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H04N02/"> 6TB (4TB HDD + 2TB SSD </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H08N02/"> 10 TB (8TB HDD + 2TB SSD) </option>
                <option value="https://eshop.macsales.com/item/OWC/T4MS6H14N04/"> 18TB (14TB HDD + 4TB SSD) </option>
            </select>
        </div>
    </div>`);

    $('.custom_selectBox').after($('#pdp-cart__ships'));

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