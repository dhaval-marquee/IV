function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('product_iv')) {
        bodyEle.classList.add('product_iv');

        document.querySelector('.product__media').insertAdjacentElement('beforebegin', document.querySelector('.product-meta__title'));
        document.querySelector('.product-meta__price-list-container').insertAdjacentElement('beforebegin', document.querySelector('.product-form .stamped-product-reviews-badge').parentElement);
    }
}

if (window.matchMedia("(max-width: 740.98px)").matches) {
    loadTestCode();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 741px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 740.98px)").matches) {
            location.reload();
        }
    }, true);
}