function loadTestCode() {
    if (!document.querySelector('body').classList.contains('paypal_iv')) {
        document.querySelector('body').classList.add('paypal_iv');

        var variantSelector = document.querySelector('.js-variant-selector-component').closest('.yCmsComponent');
        var paypalMessageParent = document.querySelector('.amw-page-pdp__paypal-message').parentElement;
        variantSelector.parentNode.insertBefore(paypalMessageParent, variantSelector);

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);