function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('sidebox_iv')) {
        bodyEle.classList.add('sidebox_iv');

        $('#pdp-grid__options form').after('<div class="loadNewContent"></div>');




        var loadCode = "https://eshop.macsales.com/shop/ssd/owc/macbook-pro-retina-display/2013-2014-2015";

        $('.loadNewContent').load(loadCode + ' .product-family > .row:nth-child(2)', function() {

            // Convert table into Div
            $('.loadNewContent table').each(function(){
                $(this).replaceWith($(this).html()
                    .replace(/<tbody/gi, '<div id="table" ')
                    .replace(/<tr/gi, '<div')
                    .replace(/<\/tr>/gi, '</div>')
                    .replace(/<td/gi, '<span')
                    .replace(/<\/td>/gi, '</span>')
                    .replace(/<\/tbody/gi, '<\/div')
                );
            })

            $('.loadNewContent').find('.row').eq(0).addClass('dynamicContent').removeClass('row').unwrap();
            $('.dynamicContent').css("grid-column", "1 / span 12");
            $('.dynamicContent .table-responsive').addClass('pdp-options__button-container').removeClass('table-responsive').unwrap();
            $('.dynamicContent .product-item-table__capacity').attr('class', 'pdp-options__tooltip-block new_option').removeAttr('rowspan');

            $('.dynamicContent .pdp-options__button-container .product-family__flex-copy').each(function(i){
                $(this).closest('.pdp-options__button-container').before('<h4 class="pdp-options__sub-title" style="margin-bottom: 0">'+$(this).text()+'</h4>')
            });
            $('.pdp-options__button-container > .row.no-gutters').remove();

            $('.new_option').each(function(){
                var itemSize = $(this).find('a').text().trim();
                var ItemPrices = $(this).next('.product-item-table__price').find('a').text();

                $(this).append(`<div class="pdp-options__tooltip">
                    <span class="pdp-options__tooltip-caret">
                        <img alt="arrow up" src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16">
                    </span>
                    <span class="pdp-options__tooltip-top">`+itemSize+`</span>
                    <span class="pdp-options__tooltip-strike-price" style="visibility: hidden;">$144.99</span>
                    <span class="pdp-options__tooltip-price">`+ItemPrices+`</span>
                    <span class="pdp-options__tooltip-copy" style="visibility: hidden;">
                        <img src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock" class="pdp-options__tooltip-icon">
                        <span class="pdp-cart__ships-green">In Stock: Ships Same Day!</span>
                    </span>
                </div>`);

                $(this).find('a').addClass('pdp-options__button');
                $(this).nextAll().remove();
                $(this).unwrap().unwrap();
            });

            var currentProduct = $('.pdp-options__button.pdp-options__button-active').attr('href');
            $('.pdp-options__button:not(.pdp-options__button-active)').each(function () {
                var buttonHref = $(this).attr('href');
                if (currentProduct.indexOf(buttonHref) !== -1) {
                    console.log('dffdddddddddddd')
                    $(this).closest('.pdp-options__button-container').prev('h4').remove();
                    $(this).closest('.pdp-options__button-container').remove();
                }
            });
        });
    }
}
loadTestCode();