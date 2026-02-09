function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sellingSupportTab')) {
        document.querySelector('body').classList.add('iv-sellingSupportTab');

        document.querySelector('#sellingSupport span.amw-accordion__title').insertAdjacentHTML('afterend',`<span class="supportTabText">Estimated Reading Time: 3 min</span>`);
    }
}

// Run script when body exists
var checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);