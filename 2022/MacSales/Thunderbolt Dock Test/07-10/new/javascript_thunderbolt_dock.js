function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('thunderbolt_dock_iv')) {
        bodyEle.classList.add('thunderbolt_dock_iv');
        
        // Put your test code here
        $('.prod-hero__block-copy p').after('<div class="text-center"><a href="https://eshop.macsales.com/item/OWC/TB3DKPRO/" class="owc-button product-info-block__buy-now" style="position: relative;z-index: 1">BUY NOW</a></div>');
        $('.product-info-block').parent().removeAttr('class').html('<br><br><br>');


        const queryParameters = window.location.href.split('?')[1]
        if (queryParameters != undefined) {
            var currentURL = $('.thunderbolt_dock_iv .prod-hero__block-copy a').attr('href');
            $('.thunderbolt_dock_iv .prod-hero__block-copy a').attr('href',currentURL+'?'+queryParameters);
        }
    }
}
loadTestCode();