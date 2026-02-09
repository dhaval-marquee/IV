function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('productDetails_iv')) {
        bodyEle.classList.add('productDetails_iv');
        var additionalShipping = document.querySelector('.productDetails_iv .js-add-to-cart-actions-wrapper > .amw-panel:first-child');
        if (additionalShipping) {
            additionalShipping.classList.remove('amw-panel--border-bottom');
            additionalShipping.insertAdjacentHTML('afterend',`<div class="amw-panel--border-bottom">
                <p>Shipping calculated in cart.</p>
                <p>Free Shipping for AmPerks members for orders $99 or more - Join AmPerks for free during checkout!</p>
            </div>`);
        }
    }
}
loadTest();