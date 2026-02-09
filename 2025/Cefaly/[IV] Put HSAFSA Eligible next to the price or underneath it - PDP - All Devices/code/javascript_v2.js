function loadTestCode() {
    if (!document.body.classList.contains('iv-eligible')) {
        document.body.classList.add('iv-eligible');

        const eligibleText = `<span class="iv-eligible-text iv-red-text">HSA/FSA Eligible</span>`;

        const productPrice = document.querySelectorAll('.product-price');

        productPrice.forEach(function(price){
            price.insertAdjacentHTML('afterend', eligibleText)
        });

    }
}

loadTestCode();
