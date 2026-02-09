function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('products_iv')) {
        bodyEle.classList.add('products_iv');

        var productSection = setInterval(function() {
            var productSectionContainer = document.querySelectorAll('.products_iv .product-section--container .shopify-app-block');

            if (productSectionContainer.length > 0) {
                clearInterval(productSection);

                var productTabs = document.querySelectorAll('.products_iv .product-section--container .shopify-app-block');
                productTabs.forEach(function(parentContainer) {
                    parentContainer.parentElement.classList.add('product__tabs');
                });

                var tabsHTML = `
                    <div class="product__tabs-link">
                        <a href="javascript:;" class="product__tab-link active" data-tab="features">Features</a>
                        <a href="javascript:;" class="product__tab-link" data-tab="reviews">Reviews</a>
                    </div>
                    <div class="product__tabs-content">
                        <div id="features" class="product__tab-content active"></div>
                        <div id="reviews" class="product__tab-content"></div>
                    </div>
                `;

                var productSectionContainer = document.querySelector('.products_iv .product-section--container');
                productSectionContainer.insertAdjacentHTML('beforeend', tabsHTML);

                var featuresTabContent = document.getElementById('features');
                if (featuresTabContent) {
                    var paragraphs = document.querySelectorAll('.product-description > p');
                    paragraphs = Array.from(paragraphs).slice(1);
                    paragraphs.forEach(function (paragraph) {
                        featuresTabContent.appendChild(paragraph);
                    });
                }

                document.querySelector('#reviews').appendChild(document.querySelector('.products_iv .product-section--container .shopify-app-block'));

                var current_pageurl = window.location.href.toLowerCase();
                if (current_pageurl.indexOf('/lectron-level-1-ev-charger-with-nema-5-15-plug-15-amp-j1772-electric-car-charger') >= 0) {
                    document.querySelector('#features').innerHTML = `
                        <ul>
                            <li><p><strong>PORTABLE LEVEL 1 EV CHARGER:</strong> Lectron's Level 1 EV Charger is the most cost-effective solution for charging your J1772 EV from any standard 110V outlet. It delivers 1.65 kW for charging your EV at home, outdoors, or anywhere with a compatible NEMA 5-15 outlet.</p></li>
                            <li><p><strong>J1772 COMPATIBILITY:</strong> This Level 1 EV charger is compatible with all J1772 EVs including BMW, Ford, Honda, Hyundai, Kia, Porsche, Nissan, Chevy, and beyond.</p></li>
                            <li><p><strong>AFFORDABLE OVERNIGHT CHARGE:</strong> Experience efficient Level 1 charging with the Lectron 15 Amp J1772 EV Charger. Gain up to 50 miles of charge overnight without breaking the bank.</p></li>
                            <li><p><strong>SAFE & BUILT TO LAST:</strong> Protected against overvoltage, overcurrent, and short circuits. IP65-rated for outdoor use. Rigorously tested for 10,000+ insertions and features IK10 drop protection. ETL, FCC, and Energy Star certified.</p></li>
                        </ul>
                    `;
                    var productTabLinks = document.querySelectorAll('.product__tab-link');
                    productTabLinks[0].insertAdjacentHTML('afterend', `
                        <a href="javascript:;" class="product__tab-link" data-tab="specs">Specs</a>
                        <a href="javascript:;" class="product__tab-link" data-tab="what_you_receive">What You Receive</a>
                    `);
                    document.querySelector('.product__tab-content').insertAdjacentHTML('afterend', `
                        <div id="specs" class="product__tab-content">
                            <dl class="dl-horizontal">
                                <dt>Compatibility:</dt>
                                <dd>SAE J1772</dd>
                                <dt>Power:</dt>
                                <dd>1.65 kW</dd>
                                <dt>Output:</dt>
                                <dd>110V</dd>
                                <dt>Current:</dt>
                                <dd>15A</dd>
                                <dt>Plug type:</dt>
                                <dd>NEMA 5-15</dd>
                                <dt>Cord length:</dt>
                                <dd>16 ft</dd>
                                <dt>Dimensions:</dt>
                                <dd>8.1 x 3.2 x 1.6 in</dd>
                                <dt>Weight:</dt>
                                <dd>5.3 lbs</dd>
                                <dt>Certifications:</dt>
                                <dd>ETL | FCC | ENERGY STAR | UL 2594</dd>
                            </dl>
                        </div>
                        <div id="what_you_receive" class="product__tab-content">
                            <ul>
                                <li>1 x Level 1 EV Charger</li>
                                <li>1 x Carry case </li>
                                <li>1 x User manual</li>
                            </ul>
                        </div>
                    `);
                } else if (current_pageurl.indexOf('/lectron-level-2-tesla-charger-240v-40-amp-nema-14-50-plug-16-ft-extension-cord-portable-electric-car-charger-for-tesla-compatible-with-all-tesla-models-x-y-3-s') >= 0) {
                    document.querySelector('#features').innerHTML = `
                        <ul>
                            <li><p><strong>PORTABLE LEVEL 2 TESLA FAST CHARGER:</strong> Experience rapid charging with up to 36 miles of range per hour, providing up to 9.6 kW / 40 Amp output through a NEMA 14-50 outlet.</p></li>
                            <li><p><strong>NATIVE TESLA COMPATIBILITY:</strong> This native Tesla charger is compatible with Tesla Models S/3/X/Y and EVs using the North American Charging Standard (NACS).</p></li>
                            <li><p><strong>PLUG & PLAY FAST CHARGE:</strong> No hardwiring necessary! This 40A EV charger uses a direct NEMA 14-50 plug for your 240V outlet. Compatible with all J1772-standard electric vehicles and plug-in hybrids.</p></li>
                            <li><p><strong>BUILT TO LAST:</strong> Protected against overvoltage, overcurrent, and short circuits. IP65-rated for outdoor use. Rigorously tested for 10,000+ insertions and features IK10 drop protection. FCC and Energy Star certified.</p></li>
                        </ul>
                    `;
                    var productTabLinks = document.querySelectorAll('.product__tab-link');
                    productTabLinks[0].insertAdjacentHTML('afterend', `
                        <a href="javascript:;" class="product__tab-link" data-tab="specs">Specs</a>
                        <a href="javascript:;" class="product__tab-link" data-tab="what_you_receive">What You Receive</a>
                    `);
                    document.querySelector('.product__tab-content').insertAdjacentHTML('afterend', `
                        <div id="specs" class="product__tab-content">
                            <dl class="dl-horizontal">
                                <dt>Compatibility:</dt>
                                <dd>XYZ</dd>
                                <dt>Rated power:</dt>
                                <dd>XYZ</dd>
                                <dt>Output:</dt>
                                <dd>XYZ</dd>
                                <dt>Current:</dt>
                                <dd>XYZ</dd>
                                <dt>Plug type:</dt>
                                <dd>XYZ</dd>
                                <dt>Cord length:</dt>
                                <dd>XYZ</dd>
                                <dt>Dimensions:</dt>
                                <dd>XYZ</dd>
                                <dt>Weight:</dt>
                                <dd>XYZ</dd>
                                <dt>Certifications:</dt>
                                <dd>XYZ</dd>
                            </dl>
                        </div>
                        <div id="what_you_receive" class="product__tab-content">
                            <ul>
                                <li>1 x Level 2 Tesla Charger</li>
                                <li>1 x XYZ</li>
                                <li>1 x XYZ</li>
                            </ul>
                        </div>
                    `);
                }
            }

            // Tabs click function
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
        }, 100);
    }
}
loadTestCode();