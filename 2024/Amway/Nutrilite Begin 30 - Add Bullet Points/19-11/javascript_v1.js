function loadTestCode() {
    if (!document.querySelector('body').classList.contains('checkPoints_iv')) {
        document.querySelector('body').classList.add('checkPoints_iv');
    
        document.querySelectorAll('#addToCartForm')[0].closest('.productDetailsPageRightPanelSlot-component').classList.add('cartButton_iv');
        document.querySelector('.cartButton_iv').insertAdjacentHTML('afterend',`<ul class="checkList_iv">
            <li>Complete Wellness Solution</li>
            <li>Balances Gut Microbiome</li>
            <li>Promotes Energy & Vitality</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
