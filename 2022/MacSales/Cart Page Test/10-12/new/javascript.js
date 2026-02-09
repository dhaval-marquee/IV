if (!$('body').hasClass('eshop_test')) {
  $('body').addClass('eshop_test');
  if ($('.eshop_test .c-cart__item-rebate').length > 0) {
    $(".eshop_test .c-cart__item-rebate").each(function () {
      $(this).find('.c-cart__item-rebate-grid__heading').text('Special Offer');

      var $this = $(this).find('.c-cart__item-rebate-grid__item');
      $this.find('.c-cart__item-rebate-grid__item__price-strike').wrap('<div class="price-box"></div>');
    });

    $('.c-cart__item-rebate-grid__item').each(function () {
      var discountedPrice = $(this).find('.c-cart__item-rebate-grid__item__price');
      $(discountedPrice).appendTo(discountedPrice.prev());
      $(this).find('.c-cart__item-rebate-grid__item__cta').wrap('<div class="card-box"></div>')

      var getImages = $(this).find($('.c-cart__item-rebate-grid__item__img'));
      getImages.prependTo($(this).find($('.cart_match_height_2')));
    });

  }
  $('.eshop_test #c-cart__xsell_results').addClass('sell-box');
  $('.eshop_test .icon-group').insertAfter('.eshop_test .c-cart__item-hr:last-of-type');

  $('.c-cart__header-mobile-heading #c_cart_mobile_checkout-btn').parent().parent().html($('.eshop_test .icon-group').clone());

  $('.c-cart__header-mobile-heading .icon-group img[alt="guarantee icon"]').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/v1670572544/macsales/icon-30-circle.svg');
  $('.c-cart__header-mobile-heading .icon-group img[alt="shield icon"]').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/v1670572544/macsales/icon-shield.svg');
  $('.c-cart__header-mobile-heading .icon-group img[alt="ribbon icon"]').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/v1670572544/macsales/icon-ribbon.svg');

}