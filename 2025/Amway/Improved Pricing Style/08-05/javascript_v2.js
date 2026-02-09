function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-pricing')) {
        document.querySelector('body').classList.add('iv-pricing');

        var checkForProductListing = setInterval(function () {
            var targetElement = document.querySelector('.product__listing');
            if (targetElement) {
                clearInterval(checkForProductListing);
                observerElm(targetElement, handleMutations);
            }
        }, 100);
    }
}

function handleMutations(mutationsList, observer) {
    var items = document.querySelectorAll('.amw-plp-item');
    if (items.length === 0) return;

    items.forEach(function(item) {
        var priceElm = item.querySelector('[test-id=retail-price-value] .amw-text');
        var productPrice = priceElm ? priceElm.textContent.trim() : '';

        var addToCartBtn = item.querySelector('[test-id=add-to-cart-button]');
        if (addToCartBtn && !addToCartBtn.hasAttribute('data-price')) {
            addToCartBtn.setAttribute('data-price', productPrice);
        }
    });
}

function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        subtree: true
    };
    var observer = new MutationObserver(callbackFn);
    observer.observe(target, config);
}

loadTestCode();