function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivCartPage')) {
        document.querySelector('body').classList.add('ivCartPage');
        document.querySelector('body').classList.add('ivCartPage_v2');

        document.querySelector('.ivCartPage form .cart-totals').insertAdjacentHTML('afterend',`<div class="guaranteeSection">
            <div class="guaranteeContainer">
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/warrantyIcon.svg" alt="3-year limited warranty" class="guaranteeIcon">
                    <span>3-year limited warranty</span>
                </div>
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/HSAFSAeligible.svg" alt="HSA/FSA eligible" class="guaranteeIcon">
                    <span>HSA/FSA eligible</span>
                </div>
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/moneyBackGuarantee.svg" alt="90-day money-back guarantee" class="guaranteeIcon">
                    <span>90-day money-back guarantee</span>
                    <span class="tooltipCartPage">
                        <span class="info-iconCartPage">i</span>
                        <span class="tooltipBoxCartPage"></span>
                    </span>
                </div>
            </div>
        </div>`);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);