function loadTestCode() {
    if (!document.body.classList.contains('iv-CartPage')) {
        document.body.classList.add('iv-CartPage');


        function runCode() {
            var waitForElements = setInterval(function () {
                var cartContent = jQuery('.amw-cart-page__content');
                var recBox = jQuery('.amw-product-recommendations');
    
                if (cartContent.length && recBox.length) {
                    cartContent.append(recBox);
                    clearInterval(waitForElements);
                }
    
            }, 200);
        }
        // Load code just for Desktop 
        if (window.matchMedia("(min-width: 768px)").matches) {
            runCode();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    location.reload();
                }
            }, true);
        }
    }
}
loadTestCode();