function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-product-finder')) {
        document.querySelector('body').classList.add('iv-product-finder');

        document.querySelectorAll('.iv-product-finder .html--section .add-black h2 span').forEach(function(text) {
            if (text.innerText.trim() === 'BROWSE OUR CLEARANCE SECTION AND SEE WHAT\'S ON SALE!') {
                text.closest('section').style.display = 'none';
            }
        });

        const productFinder = document.querySelector('.iv-product-finder #productfinder');
        const highlightSection = document.querySelector('.iv-product-finder .highlights-banners--section');

        if (productFinder && highlightSection) {
            productFinder.style.display = 'block';
            highlightSection.after(productFinder);            
        }

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);