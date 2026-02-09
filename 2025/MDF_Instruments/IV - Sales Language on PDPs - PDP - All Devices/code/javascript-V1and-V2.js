function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-dis-per')) {
        document.querySelector('body').classList.add('iv-dis-per');

        function calculateDiscount(originalPrice, salePrice) {
            const discount = ((originalPrice - salePrice) / originalPrice) * 100;
            return Math.round(discount);
        }

        function addDiscountLabel() {
            const salePriceElement = document.querySelector('.product-info .price-list > sale-price');
            const comparePriceElement = document.querySelector('.product-info .price-list > compare-at-price');

            if (document.body && salePriceElement && comparePriceElement) {
                const salePriceText = salePriceElement.textContent;
                const originalPriceText = comparePriceElement.textContent;

                const cleanedSalePriceText = salePriceText.replace(/[^\d.-]/g, '').trim();
                const cleanedOriginalPriceText = originalPriceText.replace(/[^\d.-]/g, '').trim();

                const salePrice = parseFloat(cleanedSalePriceText);
                const originalPrice = parseFloat(cleanedOriginalPriceText);

                if (!isNaN(salePrice) && !isNaN(originalPrice)) {
                    const discountPercentage = calculateDiscount(originalPrice, salePrice);

                    const discountSpan = document.createElement('span');
                    discountSpan.classList.add('iv-discount-percentage', 'text-on-sale', 'h5', 'text-subdued');
                    discountSpan.innerHTML = `<b>${discountPercentage}% OFF</b>`;

                    comparePriceElement.parentNode.insertBefore(discountSpan, comparePriceElement.nextSibling);
                }
            }
        }
        addDiscountLabel();
    }
}
loadTestCode();