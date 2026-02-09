function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');
        
        // Put your test code here
        $('.prod-hero__block-copy .prod-hero__copy').after('<p>Available in 240GB, 480GB, 1TB, and 2TB</p>\
        <div class="text-center"><a href="https://eshop.macsales.com/item/OWC/ENVPK.2/" class="owc-button product-info-block__buy-now" style="position: relative;z-index: 1">BUY NOW</a></div>');
        $('.product-info-block').parent().removeAttr('class').html('<br><br><br>')

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

setTimeout(() => {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}, 3000);


loadTestCode();