/* CUSTOM CODE */
function loadTestCode() {
    if (!$('body').hasClass('product_dropdown')) {
        $('body').addClass('product_dropdown');
        var getTitle = setInterval(() => {
            if($('.js-recommendation-container-title').length) {
                clearInterval(getTitle);
                $('.js-recommendation-container-title').closest('.amw-product-recomendation__wrapper').attr('class','amw-product-recomendation__wrapper panel amw-accordion__panel amw-accordion--brand toggleIV');
                $('.toggleIV').find('.amw-full-width-title').attr('id','similarProduct');
                $('.toggleIV').find('#similarProduct').attr('class','amw-accordion__heading');

                $('.toggleIV').find('.js-recommendation-container-title').parent().html(`<a class="amw-accordion__toggle-row collapsed" data-toggle="collapse" href="#similarProductToggle" aria-expanded="false" aria-controls="similarProductToggle" role="link">
                    <span class="amw-heading2 amw-heading2--text-unset amw-text amw-text--x-huge amw-text--x-huge-tablet amw-text--x-huge-mobile js-recommendation-container-title">Similar Products</span>
                    <span class="amw-accordion__toggle-col amw-accordion__icon amw-accordion__icon--toggle" aria-hidden="true">
                        <span class="amw-accordion__icon-noncollapsed icon-chevron-up-brand"></span>
                        <span class="amw-accordion__icon-collapsed icon-chevron-down-brand"></span>
                    </span>
                </a>`);
                $('.toggleIV').find('.js-add-to-dropdown-template-wrapper').wrapInner('<div class="amw-accordion__body">');
                $('.toggleIV').find('.js-add-to-dropdown-template-wrapper').wrapInner('<div id="similarProductToggle" class="amw-accordion__collapse collapse" aria-labelledby="similarProduct">');
                $(document).on('click', function(event) {
                    if ($(event.target).closest('#similarProduct').length && $('.js-slick-carousel-recommendation.slick-initialized')) {
                        $(window).resize();
                        $('.js-slick-carousel-recommendation.slick-initialized')[0].slick.refresh();                
                    }
                });
            }
        }, 100);
    }
}
loadTestCode();