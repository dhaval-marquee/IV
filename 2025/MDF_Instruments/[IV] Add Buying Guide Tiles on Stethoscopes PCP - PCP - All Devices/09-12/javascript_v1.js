function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-guide-tiles')) {
        document.querySelector('body').classList.add('iv-guide-tiles');

        // observer
        function observerElm(target, callbackFn) {
            const config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            const observer = new MutationObserver(callbackFn);
            observer.observe(target, config);
        }
        
        const targetElement = document.querySelector('body');
        observerElm(targetElement, function () {
            updateCode();
        });

        // Promo box HTML
        const ivPromotilesContent = `<div class="iv-guide-tiles-box">
                                        <div class="iv-guide-bg">
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/MDF_Instruments/mdf_Tool_KitFull.png" alt="MDF Tool Kit">
                                        </div>            
                                        <div class="iv-guide-content">
                                            <div class="iv-guide-inner">Save when you buy our bundle this holiday season!</div>
                                            <a class="iv-guide-cta" href="/collections/stethoscope-sets">Grab Your Savings Now</a>
                                        </div>
                                    </div>`;

        let lastLayout = '';

        // Always remove and re-insert promo tile
        function updateCode() {
            const productList = document.querySelector('.collection__main .product-list');
            if (!productList) return;

            const productCards = productList.querySelectorAll('.product-card');
            if (productCards.length === 0) return;

            const layout = productList.getAttribute('collection-desktop-layout') || '';

            // Avoid re-inserting if already added with correct layout
            const existingPromos = productList.querySelectorAll('.iv-guide-tiles-box');
            if (layout === lastLayout && existingPromos.length >= 2) {
                return;
            }

            // Remove all existing promo boxes
            existingPromos.forEach(el => el.remove());

            // Define both positions based on layout
            const index1 = layout === 'large' ? 1 : layout === 'compact' ? 4 : 2;
            const index2 = layout === 'large' ? 0 : layout === 'compact' ? 2 : 1;

            // Create first promo box 
            const promoWrapper1 = document.createElement('div');
            promoWrapper1.innerHTML = ivPromotilesContent;
            const promoNode1 = promoWrapper1.firstElementChild;
            promoNode1.classList.add('iv-guide-box-1');
            if (productCards.length > index1) {
                productCards[index1].after(promoNode1);
            } else {
                productCards[productCards.length - 1].after(promoNode1);
            }

            // Create second promo box  
            const promoWrapper2 = document.createElement('div');
            promoWrapper2.innerHTML = ivPromotilesContent;
            const promoNode2 = promoWrapper2.firstElementChild;
            promoNode2.classList.add('iv-guide-box-2');
            if (productCards.length > index2) {
                productCards[index2].after(promoNode2);
            } else {
                productCards[productCards.length - 1].after(promoNode2);
            }

            lastLayout = layout;
        } 

        updateCode();
    }
}

if (document.querySelectorAll('body').length > 0 && window.location.pathname === '/collections/stethoscope') { 
    loadTestCode();
} 