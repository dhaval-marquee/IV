function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-product')) {
        document.querySelector('body').classList.add('iv-sticky-product');

        // Move the reviews section above Similar Products
        const similarProductSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot .amw-product-recomendation').closest('.productDetailsPageRightBottomSlot-component');
        const reviewSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot div[data-bv-show="reviews"]').closest('.productDetailsPageRightBottomSlot-component');

        if (similarProductSection && reviewSection) {
            reviewSection.after(similarProductSection);
        }

        const productDetailImgae = document.querySelector('.iv-sticky-product .productDetailsPageLeftPanelSlot');
        const faqSection = document.querySelector('.iv-sticky-product #productPageAccordion');

        if (productDetailImgae && faqSection) {
            productDetailImgae.after(faqSection);
        }

        const productDetail = document.querySelector('.iv-sticky-product .main-container .row .js-addto-product-component');
        productDetailImgae.parentElement.classList.add('iv-product-detail-image');

        // Check if the element exists
        if (productDetail) {
            function checkStickyClass() {
                if (window.scrollY > 0) { 
                    productDetail.classList.add('iv-sticky-product-detail');
                } else {
                    productDetail.classList.remove('iv-sticky-product-detail');
                }
                
                const productDetailDiv = document.querySelector('.iv-sticky-product .main-container .row .js-addto-product-component > div');
                if (productDetailDiv) {
                    const productDetailDivHeight = productDetailDiv.offsetHeight;
                    if (productDetailImgae) {
                        productDetailImgae.style.minHeight = `${productDetailDivHeight}px`;
                    }
                }
            }

            window.addEventListener('scroll', checkStickyClass);
            window.addEventListener('resize', checkStickyClass);

            checkStickyClass();
        }
    }
}

// Load code just for desktop (above 991px)
if (window.matchMedia("(min-width: 992px)").matches) {
    
    var checkCondition = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for desktop over
