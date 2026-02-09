function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('products_iv')) {
        bodyEle.classList.add('products_iv');

        // Tabs click function
        function productTab() {
            var tabLinks = document.querySelectorAll('.product__tab-link');
            var tabContent = document.querySelectorAll('.product__tab-content');

            tabLinks.forEach(function(el) {
                el.addEventListener('click', openTabs);
            });

            function openTabs(el) {
                var btnTarget = el.currentTarget;
                var tab = btnTarget.dataset.tab;

                tabContent.forEach(function(el) {
                    el.classList.remove('active');
                });

                tabLinks.forEach(function(el) {
                    el.classList.remove('active');
                });

                document.querySelector('#' + tab).classList.add('active');

                btnTarget.classList.add('active');
            }
        }

        var productSection = setInterval(function () {
            var productDetails = document.querySelectorAll('.products_iv .product-details');
            if (productDetails.length > 0) {
                clearInterval(productSection);

                // Create product tabs html
                var productTabsHTML = `
                <div class="product__tabs">
                    <div class="product__tabs-link">
                        <a href="javascript:;" class="product__tab-link active" data-tab="features">Features</a>
                    </div>
                    <div class="product__tabs-content">
                        <div id="features" class="product__tab-content active"></div>
                    </div>
                </div>
                `;
                productDetails[0].insertAdjacentHTML('beforeend', productTabsHTML);

                // Features tab content
                var featuresTabContent = document.querySelector('#features');
                var paragraphs = document.querySelectorAll('.product-description > p:not(:first-child)');
                paragraphs.forEach(function(paragraph) {
                    featuresTabContent.appendChild(paragraph);
                });

                // Handle the window resize event
                function handleResize() {
                    var windowWidth = window.innerWidth + window.innerWidth - document.documentElement.clientWidth;
                    if (windowWidth < 720) {
                        var reviewsTabLink = document.querySelector('.product__tab-link[data-tab="reviews"]');
                        if (!reviewsTabLink) {
                            document.querySelector('.product__tabs-link').insertAdjacentHTML('beforeend', '<a href="javascript:;" class="product__tab-link" data-tab="reviews">Reviews</a>');
                            document.querySelector('.product__tabs-content').insertAdjacentHTML('beforeend', '<div id="reviews" class="product__tab-content"></div>');
                            var reviewsTabContent = document.querySelector('#reviews');
                            var reviews = document.querySelectorAll('.product-section--container > .shopify-app-block > div[data-bv-show="reviews"]');
                            reviews.forEach(function(review) {
                                reviewsTabContent.appendChild(review);
                            });

                            productTab();
                        }
                    } else {
                        var reviewsTabLink = document.querySelector('.product__tab-link[data-tab="reviews"]');
                        if (reviewsTabLink) {
                            var productSectionContainer = document.querySelector('.product-section--container .shopify-app-block');
                            var reviewsTabContent = document.querySelector('#reviews');
                            var reviews = reviewsTabContent.querySelectorAll('div[data-bv-show="reviews"]');
                            reviews.forEach(function(review) {
                                productSectionContainer.appendChild(review);
                            });

                            reviewsTabLink.remove();
                            reviewsTabContent.remove();

                            var productTabLinks = document.querySelectorAll('.product__tab-link');
                            productTabLinks[0].classList.add('active');
                            var productTabContent = document.querySelectorAll('.product__tab-content');
                            productTabContent[0].classList.add('active');
                        }
                    }
                }
                window.addEventListener('resize', handleResize);
                handleResize();

                const jsonData = {
                    '/products/lectron-level-1-ev-charger-with-nema-5-15-plug-15-amp-j1772-electric-car-charger': {
                        productFeatures: [
                            {
                                label: "PORTABLE LEVEL 1 EV CHARGER:",
                                content: "Lectron's Level 1 EV Charger is the most cost-effective solution for charging your J1772 EV from any standard 110V outlet. It delivers 1.65 kW for charging your EV at home, outdoors, or anywhere with a compatible NEMA 5-15 outlet.",
                            },
                            {
                                label: "J1772 COMPATIBILITY:",
                                content: "This Level 1 EV charger is compatible with all J1772 EVs including BMW, Ford, Honda, Hyundai, Kia, Porsche, Nissan, Chevy, and beyond.",
                            },
                            {
                                label: "AFFORDABLE OVERNIGHT CHARGE:",
                                content: "Experience efficient Level 1 charging with the Lectron 15 Amp J1772 EV Charger. Gain up to 50 miles of charge overnight without breaking the bank.",
                            },
                            {
                                label: "SAFE & BUILT TO LAST:",
                                content: "Protected against overvoltage, overcurrent, and short circuits. IP65-rated for outdoor use. Rigorously tested for 10,000+ insertions and features IK10 drop protection. ETL, FCC, and Energy Star certified.",
                            },
                        ],
                        productSpecs: {
                            compatibility: 'SAE J1772',
                            power: '1.65 kW',
                            output: '110V',
                            current: '15A',
                            plug_type: 'NEMA 5-15',
                            cord_length: '16 ft',
                            dimensions: '8.1 x 3.2 x 1.6 in',
                            weight: '5.3 lbs',
                            certifications: 'ETL | FCC | ENERGY STAR | UL 2594',
                        },
                        productInTheBox: [
                            { list: '1 x Level 1 EV Charger' },
                            { list: '1 x Carry case' },
                            { list: '1 x User manual' },
                        ],
                    },
                    '/products/lectron-level-2-tesla-charger-240v-40-amp-nema-14-50-plug-16-ft-extension-cord-portable-electric-car-charger-for-tesla-compatible-with-all-tesla-models-x-y-3-s': {
                        productFeatures: [
                            {
                                label: "PORTABLE LEVEL 2 TESLA FAST CHARGER:",
                                content: "Experience rapid charging with up to 36 miles of range per hour, providing up to 9.6 kW / 40 Amp output through a NEMA 14-50 outlet.",
                            },
                            {
                                label: "NATIVE TESLA COMPATIBILITY:",
                                content: "This native Tesla charger is compatible with Tesla Models S/3/X/Y and EVs using the North American Charging Standard (NACS).",
                            },
                            {
                                label: "PLUG & PLAY FAST CHARGE:",
                                content: "No hardwiring necessary! This 40A EV charger uses a direct NEMA 14-50 plug for your 240V outlet. Compatible with all J1772-standard electric vehicles and plug-in hybrids.",
                            },
                            {
                                label: "BUILT TO LAST:",
                                content: "Protected against overvoltage, overcurrent, and short circuits. IP65-rated for outdoor use. Rigorously tested for 10,000+ insertions and features IK10 drop protection. FCC and Energy Star certified.",
                            },
                        ],
                        productSpecs: {
                            compatibility: 'XYZ',
                            power: 'XYZ',
                            output: 'XYZ',
                            current: 'XYZ',
                            plug_type: 'XYZ',
                            cord_length: 'XYZ',
                            dimensions: 'XYZ',
                            weight: 'XYZ',
                            certifications: 'XYZ',
                        },
                        productInTheBox: [
                            { list: '1 x Level 2 Tesla Charger' },
                            { list: '1 x XYZ' },
                            { list: '1 x XYZ' },
                        ],
                    },
                };

                var productLink = '';
                var productContent = '';
                var productFeaturesList = '';
                var ele = jsonData[window.location.pathname];
                Object.keys(ele).forEach(key => {
                    const productFeatures = ele.productFeatures;
                    const productSpecs = ele.productSpecs;
                    const productInTheBox = ele.productInTheBox;
                    if (key === 'productFeatures') {
                        productFeaturesList += productFeatures.map(item => `<p><strong>${item.label}</strong> ${item.content}</p>`).join('')
                    } else if (key === 'productSpecs') {
                        productLink += '<a href="javascript:;" class="product__tab-link" data-tab="specs">Specs</a>';
                        productContent += `
                            <div id="specs" class="product__tab-content">
                                <dl class="dl-horizontal">
                                    <dt>Compatibility:</dt><dd>${productSpecs.compatibility}</dd>
                                    <dt>Power:</dt><dd>${productSpecs.power}</dd>
                                    <dt>Output:</dt><dd>${productSpecs.output}</dd>
                                    <dt>Current:</dt><dd>${productSpecs.current}</dd>
                                    <dt>Plug type:</dt><dd>${productSpecs.plug_type}</dd>
                                    <dt>Cord length:</dt><dd>${productSpecs.cord_length}</dd>
                                    <dt>Dimensions:</dt><dd>${productSpecs.dimensions}</dd>
                                    <dt>Weight:</dt><dd>${productSpecs.weight}</dd>
                                    <dt>Certifications:</dt><dd>${productSpecs.certifications}</dd>
                                </dl>
                            </div>
                        `;
                    } else if (key === 'productInTheBox') {
                        productLink += '<a href="javascript:;" class="product__tab-link" data-tab="in_the_box">In the Box</a>';
                        productContent += `
                            <div id="in_the_box" class="product__tab-content">
                                <ul>${productInTheBox.map(item => `<li>${item.list}</li>`).join('')}</ul>
                            </div>
                        `;
                    }
                });

                if (productFeaturesList.length > 0) {
                    featuresTabContent.innerHTML = productFeaturesList;
                }

                document.querySelector('.product__tabs-link').insertAdjacentHTML('beforeend', productLink);
                document.querySelector('.product__tabs-content').insertAdjacentHTML('beforeend', productContent);

                productTab();
            }
        }, 100);
    }
}

loadTestCode();