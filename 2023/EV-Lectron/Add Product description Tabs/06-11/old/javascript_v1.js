function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('products_iv')) {
        bodyEle.classList.add('products_iv');
        // Tabs click function
        function productTabs() {
            var tabLink = document.querySelectorAll('.product__tab-link');
            var tabContent = document.querySelectorAll('.product__tab-content');
            tabLink.forEach(function(el) {
                el.addEventListener('click', openTabs);
            });
            function openTabs(el) {
                var btnTarget = el.currentTarget;
                var tab = btnTarget.dataset.tab;
                tabContent.forEach(function(el) {
                    el.classList.remove('active');
                });
                tabLink.forEach(function(el) {
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
                var featuresTabContent = document.getElementById('features');
                var paragraphs = document.querySelectorAll('.product-description > p:not(:first-child)');
                paragraphs.forEach(function(paragraph) {
                    featuresTabContent.appendChild(paragraph);
                });
                // Reviews tab content (window resize event)
                function handleResize() {
                    var windowWidth = window.innerWidth + window.innerWidth - document.documentElement.clientWidth;
                    var reviewsTabLink = document.querySelector('.product__tab-link[data-tab="reviews"]');
                    if (windowWidth < 720) {
                        if (!reviewsTabLink) {
                            document.querySelector('.product__tabs-link').insertAdjacentHTML('beforeend', '<a href="javascript:;" class="product__tab-link" data-tab="reviews">Reviews</a>');
                            document.querySelector('.product__tabs-content').insertAdjacentHTML('beforeend', '<div id="reviews" class="product__tab-content"></div>');
                            var reviewsTabContent = document.getElementById('reviews');
                            var reviews = document.querySelectorAll('.product-section--container > .shopify-app-block > div[data-bv-show="reviews"]');
                            reviews.forEach(function(review) {
                                reviewsTabContent.appendChild(review);
                            });
                            productTabs();
                        }
                    } else {
                        if (reviewsTabLink) {
                            var productSectionContainer = document.querySelector('.product-section--container > .shopify-app-block');
                            var reviewsTabContent = document.getElementById('reviews');
                            var reviews = reviewsTabContent.querySelectorAll('div[data-bv-show="reviews"]');
                            reviews.forEach(function(review) {
                                productSectionContainer.appendChild(review);
                            });
                            reviewsTabLink.remove();
                            reviewsTabContent.remove();
                        }
                        var tabLink = document.querySelectorAll('.product__tab-link');
                        var tabContent = document.querySelectorAll('.product__tab-content');
                        tabLink.forEach(function (el) {
                            el.classList.remove('active');
                        });
                        tabContent.forEach(function (el) {
                            el.classList.remove('active');
                        });
                        tabLink[0].classList.add('active');
                        tabContent[0].classList.add('active');
                    }
                }
                window.addEventListener('resize', handleResize);
                handleResize();
                // JSON tab content
                var jsonUrl = '//res.cloudinary.com/ignite-visibility/raw/upload/EV_Lectron/Add_Product_Description_Tabs/productTabs.json';
                fetch(jsonUrl)
                    .then(function (response) {
                        if (response.status !== 200) {
                            console.log('Error: ' + response.status);
                            return;
                        }
                        response.json().then(function (data) {
                            var productLink = '';
                            var productContent = '';
                            var productFeaturesList = '';
                            var ele = data[window.location.pathname];
                            if (ele) {
                                if (ele.productFeatures) {
                                    productFeaturesList += `
                                        <ul>${ele.productFeatures.map(feature => `<li><p><strong>${feature.label}</strong> ${feature.content}</p></li>`).join('')}</ul>
                                    `;
                                }
                                if (ele.productSpecs) {
                                    productLink += '<a href="javascript:;" class="product__tab-link" data-tab="specs">Specs</a>';
                                    productContent += '<div id="specs" class="product__tab-content"><dl class="dl-horizontal">';
                                    function addIfNotEmpty(key, value) {
                                        if (value) {
                                            productContent += `<dt>${key}:</dt><dd>${value}</dd>`;
                                        }
                                    }
                                    addIfNotEmpty('Compatibility', ele.productSpecs.compatibility);
                                    addIfNotEmpty('Power', ele.productSpecs.power);
                                    addIfNotEmpty('Input', ele.productSpecs.input);
                                    addIfNotEmpty('Current', ele.productSpecs.current);
                                    addIfNotEmpty('Charging port', ele.productSpecs.charging_port);
                                    addIfNotEmpty('Connector port', ele.productSpecs.connector_port);
                                    addIfNotEmpty('Max input /output', ele.productSpecs.max_input_output);
                                    addIfNotEmpty('Max current', ele.productSpecs.max_current);
                                    addIfNotEmpty('Plug type', ele.productSpecs.plug_type);
                                    addIfNotEmpty('Cable length', ele.productSpecs.cable_length);
                                    addIfNotEmpty('Certification', ele.productSpecs.certification);
                                    addIfNotEmpty('IP Rating', ele.productSpecs.ip_rating);
                                    productContent += '</dl></div>';
                                }
                                if (ele.productInTheBox) {
                                    productLink += '<a href="javascript:;" class="product__tab-link" data-tab="in_the_box">In the Box</a>';
                                    productContent += `
                                        <div id="in_the_box" class="product__tab-content">
                                            <ul>${ele.productInTheBox.map(boxItem => `<li>${boxItem.list}</li>`).join('')}</ul>
                                        </div>
                                    `;
                                }
                            }
                            if (productFeaturesList.length > 0) {
                                featuresTabContent.innerHTML = productFeaturesList;
                            }
                            document.querySelector('.product__tabs-link').insertAdjacentHTML('beforeend', productLink);
                            document.querySelector('.product__tabs-content').insertAdjacentHTML('beforeend', productContent);
                            productTabs();
                        });
                    })
                    .catch(function (error) {
                        console.log('Fetch error: ' + error);
                    });
            }
        }, 100);
    }
}
loadTestCode();
