if (!$('body').hasClass('eshop_test')) {
  $('body').addClass('eshop_test');
  if ($('.eshop_test .c-cart__item-rebate').length > 0) {
    $(".eshop_test .c-cart__item-rebate").each(function() {
      $(this).find('.c-cart__item-rebate-grid__heading').text('Special Offer');

      var $this = $(this).find('.c-cart__item-rebate-grid__item');
      $this.find('.c-cart__item-rebate-grid__item__price-strike').wrap('<div class="price-box"></div>');
    });
    $('.c-cart__item-rebate-grid__item').each(function() {
      var discountedPrice = $(this).find('.c-cart__item-rebate-grid__item__price');
      $(discountedPrice).appendTo(discountedPrice.prev());
      $(this).find('.c-cart__item-rebate-grid__item__cta').wrap('<div class="card-box"></div>')
    })
  }
  $('.eshop_test #c-cart__xsell_results').addClass('sell-box');
  $('.eshop_test .icon-group').insertAfter('.eshop_test .c-cart__item-hr:last-of-type');
}