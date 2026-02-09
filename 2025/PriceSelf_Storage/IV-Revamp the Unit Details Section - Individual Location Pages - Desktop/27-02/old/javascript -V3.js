function loadTestCode() {
    if (!jQuery('body').hasClass('iv-locationPage iv-locationPageV3')) {
        jQuery('body').addClass('iv-locationPage iv-locationPageV3');

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
                                    <span class="iv-rent-price">${rentPriceData}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;

                   eachBox.insertAdjacentHTML('afterbegin', newBoxs);
                }

                const ivEstimatedCost =  document.querySelector('.iv-locationPage .pss-unit-list__collapse-container-right-side-form .pss-collapse-right-row9>div:last-child>span:first-child span');
                if (ivEstimatedCost) {
                    ivEstimatedCost.innerText = 'Estimated Move In Cost';
                }

                const ivHeading = document.querySelector('.iv-locationPage .pss-unit-list__item .pss-promo-row1');
                if (ivHeading && ivHeading.innerText === 'LOCK IN TODAY\'S DEAL!') {
                    ivHeading.innerText = 'Reserve Now For Free!';   
                }

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

// Load code just for desktop (above 991px)
if (window.matchMedia("(min-width: 992px)").matches) {
    
    loadTestCode();

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
