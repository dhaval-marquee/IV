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
                </svg>`

        const progressBar = `<div class="iv-progress-bar-main">
                                <div class="iv-progress-title">
                                <p> ${svgIcon} Great! You're qualified  for <b>FREE SHIPPING</b><br>Add $55 more to get a <span>FREE PINK ACOUSTICA STETHOSCOPE!</span> </p>
                                </div>
                                <div class="iv-progress-bar">
                                    <div class="iv-progress-fill fill-active">
                                        <div class="fill-bar">
                                            <div class="progress-bg"></div>
                                            <div class="progress-fill-bar"></div>
                                            <div class="progress-fill-dot"></div>
                                        </div>
                                        <div class="fill-text">FREE SHIPPING</div>
                                    </div>
                                    <div class="iv-progress-fill iv-progress-free-unlock">
                                        <div class="fill-bar">
                                            <div class="progress-bg"></div>
                                            <div class="progress-fill-bar"></div>
                                            <div class="progress-fill-dot"></div>
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


        let lastAmount = null;

        observerElm(targetElement, function(mutationsList, observer) {

            if (!document.querySelector('.iv-progress-bar-main')) {
                document.querySelector('.free-shipping-bar').insertAdjacentHTML('beforeend', progressBar);
            }

            var checkoutAmount = document.querySelector('.button-group .cart-drawer__button-price').innerText;
            var amount = parseFloat(checkoutAmount.replace(/[^0-9.]/g, ''));

            const pgressBarMain = document.querySelector('.iv-progress-bar-main');
            const pgressBarActive = pgressBarMain.querySelector('.iv-progress-free-unlock');


            if (amount >= 199) {
                pgressBarMain.style.display = 'block';
                if(document.querySelector('.free-shipping-bar .text-subdued')){
                    document.querySelector('.free-shipping-bar .text-subdued').style.display="none";
                }
            } else {
                pgressBarMain.style.display = 'none';
                if(document.querySelector('.free-shipping-bar .text-subdued')){
                    document.querySelector('.free-shipping-bar .text-subdued').style.display="block";
                }
            }


            document.querySelectorAll('.cart-drawer__items .line-item').forEach((lineItem) => {
                var itemPriceElement = lineItem.querySelector('price-list sale-price');
                if (itemPriceElement) {
                    var itemPriceText = itemPriceElement.innerText;
                    var itemAmount = parseFloat(itemPriceText.replace(/[^0-9.]/g, ''));
                    if (itemAmount === 0) {
                        if (pgressBarMain && !pgressBarActive.classList.contains('fill-active')) {
                            pgressBarActive.classList.add('fill-active');
                        }
                    }
                }
            });

            


        });


    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);