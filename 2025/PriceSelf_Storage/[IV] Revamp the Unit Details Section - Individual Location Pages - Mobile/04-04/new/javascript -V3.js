function loadTestCode() {
    if (!jQuery('body').hasClass('iv-locationPage iv-locationChecklist')) {
        jQuery('body').addClass('iv-locationPage iv-locationChecklist');

        // Observer function (unchanged)
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }

        function testUpdates() {

            const rightBoxes = document.querySelectorAll('.pss-unit-list__collapse-container-right-side-form');
            rightBoxes.forEach(function(eachBox) {
                if (!eachBox.querySelector('.iv-details')) {
                    // Get the title from .pss-collapse-right-row2
                    let boxTitle = eachBox.querySelector('.pss-collapse-right-row2')?.innerText.trim() || 'Default Title';

                    // Get the floor data from .pss-collapse-right-row3
                    let floorData = eachBox.querySelector('.pss-collapse-right-row3')?.innerText.trim() || 'No Floor Data';

                    // Get the price data from ".pss-collapse-right-row6 span"
                    let priceData = eachBox.querySelector('.pss-collapse-right-row6 span')?.innerText.trim() || 'No Price';

                    // Get the rent price data from ".pss-collapse-right-row7"
                    let rentPriceData = eachBox.querySelector('.pss-collapse-right-row7')?.innerText.trim() || 'No Rent Price';

                    const newBoxs = `<div class="iv-details">
                        <div class="iv-details-inner">
                            <div class="iv-data-box">
                                <div class="iv-data-box-left">
                                    <h5 class="iv-box-title">${boxTitle}</h5>
                                    <span class="iv-floor-data">${floorData}</span>
                                </div>
                                <div class="iv-data-box-right">
                                    <span class="iv-box-price">${priceData}</span>
                                    <span class="iv-rent-price" style="${rentPriceData === 'No Rent Price' ? 'display: none;' : ''}">${rentPriceData}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;

                   eachBox.insertAdjacentHTML('afterbegin', newBoxs);
                }

                const promoHeadings = document.querySelectorAll('.pss-unit-list__collapse-container-promo-box-main > .pss-promo-row1');
                promoHeadings.forEach(function(promoHeading) {
                    if (promoHeading.innerText === "LOCK IN TODAY'S DEAL.") {
                        promoHeading.innerText = 'Reserve Now For Free!';
                    }
                });

                const pricingDetail = eachBox.querySelector('.princingDetails .pss-collapse-right-row9 > div:last-child span:first-child span');
                if (pricingDetail && !pricingDetail.classList.contains('iv-updated')) {
                    pricingDetail.textContent = 'Estimated Move In Cost:';
                    pricingDetail.classList.add('iv-updated');
                }

                document.querySelectorAll('.pss-unit-list__collapse-container-promo-box-main').forEach(function(promoRow) {
                    const targetButton = promoRow.closest('.pss-unit-list__collapse-container').querySelector('.pss-unit-list__collapse-container-left-side-form .pss-button--red');
                    
                    if (targetButton && !promoRow.classList.contains('cloned')) {
                        const existingClone = targetButton.nextElementSibling?.classList.contains('cloned');
                        
                        if (!existingClone) {
                            const clonedPromoRow = promoRow.cloneNode(true);
                            targetButton.insertAdjacentElement('beforebegin', clonedPromoRow);
                            clonedPromoRow.classList.add('cloned'); 
                        }
                        
                        promoRow.classList.add('cloned');
                    }
                });

            });
        }

        testUpdates();

        observerElm(document.body, function(mutationsList, observer) {
            mutationsList.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) {
                        if (node.matches('.pss-unit-list__collapse-container-right-side-form') || 
                            node.querySelector('.pss-unit-list__collapse-container-right-side-form')) {
                            testUpdates();
                        }
                    }
                });
            });
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over
