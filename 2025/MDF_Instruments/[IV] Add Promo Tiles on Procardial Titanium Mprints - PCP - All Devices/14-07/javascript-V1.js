function loadTestCode() {
    if (!document.body.classList.contains('iv-promo-tiles-titanium')) {
        document.body.classList.add('iv-promo-tiles-titanium');
 
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
        const ivPromotilesContent = `<div class="iv-promo-tiles-box">
                                        <div class="iv-promo-heading">
                                            <strong>🎁 Free $83 value add-ons with ProCardial® Stethoscope Series</strong>
                                        </div>            
                                        <div class="iv-promo-content">
                                            <ul class="iv-promo-list">
                                                <li>Free Engraving ($14.95)</li>
                                                <li>Free Hip Holder ($29.99)</li>
                                                <li>Free Case ($27.99)</li>
                                                <li>Free Shipping ($9.99)</li>
                                            </ul>
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
            const existingPromos = productList.querySelectorAll('.iv-promo-tiles-box');
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
            promoNode1.classList.add('iv-promo-box-1');
            if (productCards.length > index1) {
                productCards[index1].after(promoNode1);
            } else {
                productCards[productCards.length - 1].after(promoNode1);
            }

            // Create second promo box 
            const promoWrapper2 = document.createElement('div');
            promoWrapper2.innerHTML = ivPromotilesContent;
            const promoNode2 = promoWrapper2.firstElementChild;
            promoNode2.classList.add('iv-promo-box-2');
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
 
if (document.querySelectorAll('body').length > 0 && window.location.pathname === '/collections/procardial-titanium-mprints') { 
    loadTestCode();
} 