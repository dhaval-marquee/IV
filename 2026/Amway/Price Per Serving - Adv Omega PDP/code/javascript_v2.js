function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-serving')) {
        document.querySelector('body').classList.add('iv-serving');

        const priceText = document.querySelector('.productDetailsPageRightPanelSlot-component .auto-pdp-price span');
        if (priceText) {
            priceText.insertAdjacentHTML('afterend', `<span class="iv-serving-text">That's only <span class="iv-highlight">$1.33 per serving!</span></span>`)
        }
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelector('body') && document.querySelector('.productDetailsPageRightPanelSlot-component .auto-pdp-price span')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);