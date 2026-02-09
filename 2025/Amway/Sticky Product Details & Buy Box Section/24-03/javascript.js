function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-product')) {
        document.querySelector('body').classList.add('iv-sticky-product');

        // Move the reviews section above Similar Products
        const similarProductSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot .amw-product-recomendation')?.closest('.productDetailsPageRightBottomSlot-component');
        const reviewSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot div[data-bv-show="reviews"]')?.closest('.productDetailsPageRightBottomSlot-component');

        if (similarProductSection && reviewSection) {
            reviewSection.after(similarProductSection);
        }

        const faqSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot .amw-accordion--brand');
        const ivFaqSection = `<div class="iv-faq-inner">
                                <div class="iv-faq-part"></div>
                                <div class="iv-product-info"></div>
                            </div>`;

        if (faqSection) {
            faqSection.insertAdjacentHTML('afterend', ivFaqSection);

            const faqPart = document.querySelector('.iv-faq-part');
            faqPart.appendChild(faqSection);


            // add new div inside main section
            const mainSection = document.querySelector(".iv-sticky-product .main-container .js-addto-product-component");
            const container = mainSection.querySelector(".productDetailsPageRightPanelSlot");

            if (mainSection && container) {
                // Create the new div
                const newDiv = document.createElement("div");
                newDiv.classList.add("iv-inside-section");

                // Select productDetailsPageTitleSlot and move it first
                const titleSlot = mainSection.querySelector(".productDetailsPageTitleSlot");
                if (titleSlot) {
                    newDiv.appendChild(titleSlot);
                }

                // Get all child divs excluding the last two
                const childDivs = Array.from(container.children);

                if (childDivs.length > 2) {
                    childDivs.slice(0, -2).forEach(div => {
                        if (div !== titleSlot) {
                            newDiv.appendChild(div);
                        }
                    });
                }

                // Append the new div to the container
                container.prepend(newDiv);
            }
            const ivProductDetail = document.querySelector('.iv-sticky-product .main-container .js-addto-product-component .iv-inside-section');
            const ivProductInfo = document.querySelector('.iv-product-info');

            if (ivProductDetail && ivProductInfo && container) {
                ivProductInfo.appendChild(ivProductDetail);
                ivProductDetail.setAttribute('data-original-parent', 'js-addto-product-component');
            }
            handleScroll(ivProductDetail, ivProductInfo, container);
            window.addEventListener('scroll', () => handleScroll(ivProductDetail, ivProductInfo, container));
            window.addEventListener('resize', () => handleScroll(ivProductDetail, ivProductInfo, container));
        }
    }
}

function handleScroll(ivProductDetail, ivProductInfo, container) {
    const mainContainer = document.querySelector('.amw-page-pdp .main-container.xss-pt-0');

    if (!mainContainer || !ivProductDetail || !ivProductInfo || !container) return;
    
    const rect = mainContainer.getBoundingClientRect();
    let loyaltyBannerHeight = document.querySelector('.iv-sticky-product .main-container .js-addto-product-component .productDetailsPageRightPanelSlot-component .amw-loyalty-banner').getBoundingClientRect().height;

    let headerHeight = document.querySelector('header').getBoundingClientRect().height;

    const triggerOffset = headerHeight + loyaltyBannerHeight;
    const windowHeight = window.innerHeight;
    if (rect.bottom <= triggerOffset + windowHeight * 0.05) {
        if (!ivProductInfo.contains(ivProductDetail)) {
            ivProductDetail.style.opacity = '0'; // Start hidden
            ivProductInfo.appendChild(ivProductDetail);
            const appendSection = document.querySelector('.iv-product-info > div');
            if (appendSection) {
                appendSection.style.top = headerHeight + 10 + 'px';
            }
            // Fade in effect
            setTimeout(() => {
                ivProductDetail.style.transition = 'opacity 0.5s ease-in-out';
                ivProductDetail.style.opacity = '1';
            }, 10); // Small delay to trigger animation
        }
    } else {
        if (!container.contains(ivProductDetail)) {
            ivProductDetail.style.opacity = '0'; // Start hidden
            container.prepend(ivProductDetail);

            setTimeout(() => {
                ivProductDetail.style.transition = 'opacity 0.5s ease-in-out';
                ivProductDetail.style.opacity = '1';
            }, 10); // Small delay to trigger animation
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