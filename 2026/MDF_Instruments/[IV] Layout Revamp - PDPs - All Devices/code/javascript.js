function runIVTests() {
    if (!document.body.classList.contains('iv-pdp-revamp')) {
        document.body.classList.add('iv-pdp-revamp');

        // Open defult accordion on load
        document.querySelectorAll('#product-extra-information details summary').forEach(function (summary) {
            summary.click();
        });

        // Move Description Info as last child
        (() => {
            const container = document.querySelector('#product-extra-information');
            if (!container) return;

            const disclosures = Array.from(
                container.querySelectorAll('accordion-disclosure')
            );

            const descriptionAccordion = disclosures.find(disclosure => {
                const title = disclosure.querySelector(
                    '.accordion__toggle span:first-child'
                );
                return title && title.textContent.trim() === 'Description';
            });

            if (descriptionAccordion) {
                descriptionAccordion.classList.add('iv-description');
                container.appendChild(descriptionAccordion);
            }
        })();

        // Move Badge after price
        const badgeList = document.querySelector('.product-info .feature-badge-list');
        const priceBlock = document.querySelector('.product-info [data-block-id="price"]');

        if (badgeList && priceBlock) {
            const clonedBadgeList = badgeList.cloneNode(true);
            clonedBadgeList.classList.add('iv-feature-badge-list');
            priceBlock.insertAdjacentElement('afterend', clonedBadgeList);
        }

        const interval = setInterval(() => {
            const productInfo = document.querySelector('#product-extra-information');
            const fbtElement = document.querySelector('#rbr-container-element-fbt');

            if (!productInfo || !fbtElement) return;

            productInfo.after(fbtElement);
            clearInterval(interval);
        }, 1000);

        document.querySelector('div[data-block-type="buy-buttons"]').insertAdjacentHTML('afterend',`<a href="javascript:;" class="stethoscopeBtn">Bundle this stethoscope</a>`);

        // Scroll function on click
        document.querySelector('.stethoscopeBtn').addEventListener('click', function() {
            const formSection = document.querySelector('#rbr-container-element-fbt');
            if (formSection) {
                const headerHeight = document.querySelector('header').getBoundingClientRect().height; 
                const sectionTop = formSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        });

    }
}

runIVTests();
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runIVTests);
} else {
    runIVTests();
}