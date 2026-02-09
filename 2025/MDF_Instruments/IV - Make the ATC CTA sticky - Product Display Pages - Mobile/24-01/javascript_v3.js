function loadTestCode() {
    if (!document.querySelector('body').classList.contains('stickyBar_iv')) {
        document.querySelector('body').classList.add('stickyBar_iv');
        
         // Put your test code here
        
        var header = document.querySelector('h1.product-title').textContent;
        var imageElement = document.querySelector('.product-gallery[allow-zoom] .product-gallery__media:first-child img');


        var ProductImage = imageElement ? imageElement.src : null;
        var ProductAlt = imageElement ? imageElement.alt : '';

        jQuery('body').append(`<div class="sticky stickyBar"> 
            <div class="container">
                <div class="content">
                    <div class="iv-sec-left">
                        <img src="${ProductImage}" alt="${ProductAlt}">
                        <h1>${header}</h1>
                    </div>
                    <div class="iv-sec-right iv-prod-btn">
                        <a href="javascript:;">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>`);
        function toggleHighlightBottomBar() {
            const highlightBottomBar = document.querySelector('body');

            if (!highlightBottomBar) return;

            if (window.scrollY > 200) {
                highlightBottomBar.classList.remove('iv-bar-hide');
                highlightBottomBar.classList.add('scroll');
            } else {
                highlightBottomBar.classList.add('iv-bar-hide');
                highlightBottomBar.classList.remove('scroll');
            }
        }

        // Add event listener for scroll
        window.addEventListener('scroll', toggleHighlightBottomBar);
        // Initialize on page load
        toggleHighlightBottomBar();
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);