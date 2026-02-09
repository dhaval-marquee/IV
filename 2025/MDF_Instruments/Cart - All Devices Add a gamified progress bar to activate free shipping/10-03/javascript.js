function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-free-shipping')) {
        document.querySelector('body').classList.add('iv-free-shipping');

        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: #FC26BF;fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                    <polygon points="35.86,69.67 17.5,51.31 26.66,42.15 35.86,51.34 63.34,23.87 72.5,33.03 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                </g>
                </svg>`;

        const progressBar = `<div class="iv-progress-bar-main">
                                <div class="iv-progress-title">
                                <p>
                                    <span class="free-shipping">${svgIcon} Add $<span class="free-shipping-price"></span> more to get <b>FREE SHIPPING</b></span>
                                    <span class="spend-for-free">${svgIcon} Great! You're qualified for <b>FREE SHIPPING</b><br></span>
                                    <span class="up-to-free">Add $<span class="pink-free">55</span> more to get a <span class="text-pink">FREE PINK ACOUSTICA STETHOSCOPE!</span> </span>
                                    <span class="dwon-to-free">and a <span class="text-pink">FREE PINK ACOUSTICA STETHOSCOPE!</span></span>
                                </p>
                                <div class="select-pink-acoustica-cta">
                                    <a href="/collections/pink-acoustica-stethoscopes" class="select-cta">CLICK TO SELECT YOUR FREE PINK ACOUSTICA!</a>
                                    <i>*Promotion will be reflected once item is added to cart</i>
                                </div>
                                </div>
                                <div class="iv-progress-bar">
                                    <div class="iv-progress-fill">
                                        <div class="fill-bar">
                                            <div class="progress-bg"></div>
                                            <div class="progress-fill-bar"></div>
                                            <div class="progress-bg-dot progress-dots">
                                                <div class="progress-fill-dot progress-dots"></div>
                                            </div>
                                        </div>
                                        <div class="fill-text">FREE SHIPPING</div>
                                    </div>
                                    <div class="iv-progress-fill">
                                        <div class="fill-bar">
                                            <div class="progress-bg"></div>
                                            <div class="progress-fill-bar"></div>
                                            <div class="progress-bg-dot progress-dots">
                                                <div class="progress-fill-dot progress-dots"></div>
                                            </div>
                                        </div>
                                        <div class="fill-text">FREE PINK ACOUSTICA</div>
                                    </div>
                                </div>
                            </div>`;

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

        var targetElement = document.querySelector('body');


        let progressDone = false;

        observerElm(targetElement, function(mutationsList, observer) {

            if (!document.querySelector('.iv-progress-bar-main') && document.querySelector('.free-shipping-bar')) {
                document.querySelector('.free-shipping-bar').insertAdjacentHTML('beforeend', progressBar);
            }
            if (document.querySelector('.free-shipping-bar')) {
                var checkoutAmount = document.querySelector('.button-group .cart-drawer__button-price').innerText;
                var amount = parseFloat(checkoutAmount.replace(/[^0-9.]/g, ''));

                document.querySelectorAll('.cart-drawer__items .line-item').forEach((lineItem) => {
                    var itemPriceElement = lineItem.querySelector('price-list sale-price');
                    if (itemPriceElement) {
                        var itemPriceElement = lineItem.querySelector('price-list sale-price');

                        var itemPriceText = itemPriceElement.innerText;
                        var itemAmount = parseFloat(itemPriceText.replace(/[^0-9.]/g, ''));

                        function checkAmount() {
                            if (amount >= 199) {
                                const firstBar = document.querySelector('.iv-progress-bar .iv-progress-fill:first-child');
                                if (firstBar && !firstBar.classList.contains('iv-progress-free-unlock')) {
                                    firstBar.classList.add('iv-progress-free-unlock', 'fill-active');
                                }
                            }
                        }
                        checkAmount();
                        if (itemAmount === 0) {
                            amount = amount + 49.99;
                            checkAmount();
                        }
                        var remain = 199 - amount;
                        const freePinkDisplay = document.querySelector('.pink-free');

                        if (freePinkDisplay && (freePinkDisplay.innerText != remain.toFixed(2))) {
                            freePinkDisplay.innerText = remain.toFixed(2);
                        }

                        var upFree = document.querySelector('.up-to-free');
                        var dwonFree = document.querySelector('.dwon-to-free');
                        var selectButton = document.querySelector('.select-pink-acoustica-cta')

                        if (remain < 0) {
                            if (upFree.style.display != 'none') {
                                upFree.style.display = 'none';
                            }
                            if (selectButton.style.display != 'block') {
                                selectButton.style.display = 'block';
                            }
                            if (dwonFree.style.display != 'block') {
                                dwonFree.style.display = 'block';
                            }
                        } else {
                            if (upFree.style.display != 'block') {
                                upFree.style.display = 'block';
                            }
                            if (dwonFree.style.display != 'none') {
                                dwonFree.style.display = 'none';
                            }
                            if (selectButton.style.display != 'none') {
                                selectButton.style.display = 'none';
                            }
                        }
                    }
                });

                if (amount > 50) {
                    const firstBar = document.querySelector('.iv-progress-bar .iv-progress-fill:first-child');
                    const lastBar = document.querySelector('.iv-progress-bar .iv-progress-fill:last-child');

                    if (firstBar && firstBar.classList.contains('first-fill')) {
                        firstBar.classList.remove('first-fill');
                    }
                    function lastActive(){
                        let progressWidth = Math.min(amount * 100 / 199, 100);
                        lastBar.querySelector('.progress-fill-bar').style.width = progressWidth + '%';
                        if (progressWidth >= 100) {
                            lastBar.querySelector('.progress-fill-dot').style.opacity = '1';
                            lastBar.querySelector('.progress-fill-dot').style.backgroundColor = '#FC26BF';
                        } else {
                            lastBar.querySelector('.progress-fill-dot').style.opacity = '0';
                            firstBar.querySelector('.progress-fill-dot').style.opacity = '1';
                            firstBar.querySelector('.progress-fill-dot').style.backgroundColor = '#FC26BF';
                        }
                    }
                    if (lastBar && !lastBar.classList.contains('iv-progress-free-unlock')) {
                        lastBar.classList.add('iv-progress-free-unlock', 'fill-active');
                        lastActive();
                    }
                    if (lastBar.classList.contains('iv-progress-free-unlock')) {
                        lastActive();
                    }
                    const freeShippingText = document.querySelector('.free-shipping');
                    const spendFreeElement = document.querySelector('.spend-for-free');

                    if (freeShippingText.style.display != 'none') freeShippingText.style.display = 'none';
                    if (spendFreeElement.style.display != 'block') spendFreeElement.style.display = 'block';

                    if (firstBar && !firstBar.classList.contains('iv-progress-free-unlock')) {

                        firstBar.classList.add('iv-progress-free-unlock', 'fill-active');

                        if (!progressDone) {
                            var counter = 0;
                            var interval = window.setInterval(function() {
                                counter++;
                                firstBar.querySelector('.progress-fill-bar').style.width = 100 + '%';
                                if (counter >= 100) {
                                    clearInterval(interval);
                                    var counterDots = 0;
                                    var intervalDots = window.setInterval(function() {
                                        counterDots++;
                                        firstBar.querySelector('.progress-fill-dot').style.opacity = '1';
                                    }, 0);
                                    if (counterDots >= 1) {
                                        clearInterval(intervalDots);
                                    }
                                    progressDone = true;
                                }
                            }, 0);
                        }
                    }
                } else {
                    let lessAmount = 50 - amount;
                    const freeShippingText = document.querySelector('.free-shipping');
                    const spendFreeElement = document.querySelector('.spend-for-free');
                    const freeShippingPrice = freeShippingText.querySelector('.free-shipping-price');
                    if (lessAmount < 50) {
                        const firstBar = document.querySelector('.iv-progress-bar .iv-progress-fill:first-child');
                        const lastBar = document.querySelector('.iv-progress-bar .iv-progress-fill:last-child');
                        if (lastBar && lastBar.classList.contains('iv-progress-free-unlock')) {
                            lastBar.classList.remove('iv-progress-free-unlock', 'fill-active');
                        }
                        function firstActive() {
                            let progressWidth = Math.min(amount * 100 / 50, 100);
                            firstBar.querySelector('.progress-fill-bar').style.width = progressWidth + '%';
                            if (progressWidth >= 100) {
                                firstBar.querySelector('.progress-fill-dot').style.opacity = '1';
                                firstBar.querySelector('.progress-fill-dot').style.backgroundColor = '#FC26BF';
                            } else {
                                firstBar.querySelector('.progress-fill-dot').style.opacity = '0';
                            }
                        }
                        if (firstBar && !firstBar.classList.contains('first-fill')) {
                            firstBar.classList.add('iv-progress-free-unlock', 'fill-active', 'first-fill');
                            firstActive();
                        }
                        if (firstBar.classList.contains('iv-progress-free-unlock')) {
                            firstActive();
                        }
                        if (freeShippingPrice.innerText != lessAmount.toFixed(2)) {
                            freeShippingPrice.innerText = lessAmount.toFixed(2);
                        }
                        if (freeShippingText.style.display != 'block') freeShippingText.style.display = 'block';
                        if (spendFreeElement.style.display != 'none') spendFreeElement.style.display = 'none';
                    }
                }
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);