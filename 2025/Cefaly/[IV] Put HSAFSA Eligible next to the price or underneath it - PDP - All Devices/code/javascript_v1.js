function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-eligible')) {
        document.querySelector('body').classList.add('iv-eligible');

        var eligibleText = `<span class="iv-eligible-text">HSA/FSA Eligible</span>`;

        var productPrice = document.querySelectorAll('.product-price');

        productPrice.forEach(function(price){
            price.insertAdjacentHTML('afterend', eligibleText)
        });

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);