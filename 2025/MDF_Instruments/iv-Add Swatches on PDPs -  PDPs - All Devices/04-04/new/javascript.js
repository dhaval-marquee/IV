function loadTestCode() {
    if (!jQuery('body').hasClass('swatches_iv')) {
        jQuery('body').addClass('swatches_iv');

        jQuery('.swatches_iv div[data-block-id="variant_picker"]').before(`<div class="product-swatches">
            <div class="imagesWrapper">
                <a href="/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-snow-leopard-uncaged">
                    <img src="https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-snow-leopardrose-gold-1.jpg?v=1645560595&width=600" alt="Rose Gold Stethoscope MDF Instruments ProCardial Titanium Cardiology Snow Leopard">
                </a>
                <a href="/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-mermaid-unreal">
                    <img src="https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-mermaid-kaleidoscope-main.jpg?v=1737382973&width=600" alt="Stethoscope MDF Instruments ProCardial Titanium Cardiology Mermaid Kaleidoscope">
                </a>
                <a href="/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-monet">
                    <img src="https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-monet-kaleidoscope-main.jpg?v=1737456120&width=600" alt="Stethoscope MDF Instruments MD One Epoch Titanium Flower Print Monet and Kaleidoscope">
                </a>
            </div>
        </div>`);

        jQuery(".product-swatches .imagesWrapper a").each(function () {
            if (window.location.pathname === new URL(this.href).pathname) {
                jQuery(this).addClass("active");
            }
        });

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);