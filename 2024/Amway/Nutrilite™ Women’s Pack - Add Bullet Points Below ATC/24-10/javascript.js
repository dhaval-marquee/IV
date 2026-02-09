function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-check-points')) {
        document.querySelector('body').classList.add('iv-check-points');

        if(!document.querySelector('.iv-crat-button')){
            document.querySelector('.AddToCart-AddToCartAction').closest('[class*="productDetailsPageRightPanelSlot"]').classList.add('iv-crat-button')
        }
        document.querySelector('.iv-crat-button').insertAdjacentHTML('afterend',`<ul class="iv-check-list">
            <li>Supports strong bone health</li>
            <li>Promotes hair, skin & nail health</li>
            <li>No artificial flavor, color, and preservatives</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
