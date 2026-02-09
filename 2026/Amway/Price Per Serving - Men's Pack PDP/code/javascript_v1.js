function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-men-serving')) {
        document.querySelector('body').classList.add('iv-men-serving');

        const priceText = document.querySelector('.productDetailsPageRightPanelSlot-component .auto-pdp-price span');
        if (priceText) {
            priceText.insertAdjacentHTML('afterend', `<span class="iv-serving-text">That's about <span class="iv-highlight">$2.47 per serving!</span></span>`)
        }
    }
}
loadTestCode();