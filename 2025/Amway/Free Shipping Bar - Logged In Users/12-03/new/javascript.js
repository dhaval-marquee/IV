function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-free-shipping')) {
        document.querySelector('body').classList.add('iv-free-shipping');

        // Observer
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var observer = new MutationObserver(() => {
                if (window.updateTimeout) clearTimeout(window.updateTimeout);
                window.updateTimeout = setTimeout(callbackFn, 200);
            });
            observer.observe(target, config);
            callbackFn();
        }

        const freeShipping = `
        <div class="iv-shipping-content">
            <strong>Only <span class="iv-shipping-away">$116</span> away from FREE shipping!</strong>
            <p>FREE Ground shipping on orders $139+.</p>
            <div class="iv-progress-mian">
                <div class="iv-progress-bar">
                    <div class="iv-progress-fill" style="width: 0%;"></div>
                </div>
                <div class="iv-progress-dots"></div>
            </div>

            <div class="iv-close-price">
                <p></p>
                <span>$139</span>
            </div>
        </div>`;

        let lastAmount = null;

        function updateShippingInfo() {

            if(!document.querySelector('.iv-shipping-content')){
                document.querySelector('.iv-free-shipping .order-summary [test-id="estimated-total"]').insertAdjacentHTML('beforebegin', freeShipping);
            }

            var totalAmountElem = document.querySelector('[test-id="subtotal"] dd.summary-price__value-row p.summary-price__value');

            var totalAmount = parseFloat(totalAmountElem.innerText.replace(/[^\d.-]/g, '')) || 0;

            lastAmount = totalAmount;


            var shippingContent = document.querySelector('.iv-shipping-content');
            var shippingAwayElem = document.querySelector('.iv-shipping-away');
            var progressFill = document.querySelector('.iv-progress-fill');

            var closePrice = document.querySelector('.iv-close-price > p');


            if (totalAmount >= 139) {

                shippingContent.style.display = 'none';

            } else {

                shippingContent.style.display = 'block';
                // let shippingAway = Math.round(139 - totalAmount);
                let shippingAway = (139 - totalAmount).toFixed(2);
                shippingAwayElem.innerText = `$${shippingAway}`;
                
                let progressPercentage = ((totalAmount / 139) * 100).toFixed(2);
                progressFill.style.width = `${progressPercentage}%`;


                // Update dynamic message based on total amount
                if (totalAmount >= 0.01 && totalAmount < 75) {
                    closePrice.innerText = "You're on your way!";
                } else if (totalAmount >= 75 && totalAmount < 139) {
                    closePrice.innerText = "You're so close!";
                } else {
                    closePrice.innerText = "";
                }

            }
        }

        const orderSummary = document.querySelector('.iv-free-shipping .order-summary [test-id="estimated-total"]');
        if (orderSummary) {

            var targetElement = document.querySelector('.amw-cart-page__body');
            observerElm(targetElement, updateShippingInfo);
            updateShippingInfo();

        }
    }
}

var checkBody = setInterval(function () {
    if (document.querySelector('body') && document.querySelector('.order-summary [test-id="estimated-total"]')) {
        clearInterval(checkBody);
        loadTestCode();
    }
}, 200);