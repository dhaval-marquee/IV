if (!$('body').hasClass('eshop_test')) {
  $('body').addClass('eshop_test');
  

  if ($('.eshop_test .c-cart__item-rebate').length > 0) {
    //Special Offer
    $(".eshop_test .c-cart__item-rebate .row > div").each(function (index) {
      $(this).addClass("colbox-" + index);
    });
    $('.eshop_test .c-cart__item-rebate .colbox-1').removeClass('col-9 col-lg-10').addClass('col-12 col-lg-12');
    $('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__heading').text('Special Offer');
    $('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__item__copy .c-cart__item-rebate-grid__item__title').text('Parallels Desktop Pro Edition for Mac - 1 Year License');
    $('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__item__price-strike').wrap('<div class="price-box"></div>');
    $('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__item__price').insertAfter('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__item__price-strike');
    $('.c-cart__item-rebate-grid__item__cta').wrap('<div class="card-box"></div>')
    $('.eshop_test .c-cart__item-rebate .colbox-1 .c-cart__item-rebate-grid__item__qualifier').insertAfter('.card-box .c-cart__item-rebate-grid__item__cta');

    //icon move
    $('.eshop_test .icon-group').insertAfter('.eshop_test .c-cart__item-hr:last-of-type');
    //sell box
    $('.eshop_test #c-cart__xsell_results').addClass('sell-box')

  }

}