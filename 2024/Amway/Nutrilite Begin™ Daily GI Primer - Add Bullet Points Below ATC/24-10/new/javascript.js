function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-check-points')) {
        document.querySelector('body').classList.add('iv-check-points');

        if(!document.querySelector('.iv-crat-button')){
            document.querySelector('.AddToCart-AddToCartAction').closest('[class*="productDetailsPageRightPanelSlot"]').classList.add('iv-crat-button')
        }
        document.querySelector('.iv-crat-button').insertAdjacentHTML('afterend',`<ul class="iv-check-list">
            <li>Probiotic blend for gut balance</li>
            <li>Supports overall health & well-being</li>
            <li>No artificial additives</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
