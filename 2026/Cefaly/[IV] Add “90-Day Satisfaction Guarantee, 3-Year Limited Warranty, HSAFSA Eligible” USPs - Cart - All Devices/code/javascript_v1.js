function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivCartPage')) {
        document.querySelector('body').classList.add('ivCartPage');

        document.querySelector('.ivCartPage form .item-container').insertAdjacentHTML('afterend',`<div class="guaranteeSection">
            <div class="guaranteeContainer">
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/moneyBackGuarantee.svg" alt="90-day money-back guarantee" class="guaranteeIcon">
                    <span>90-day money-back guarantee</span>
                    <span class="tooltipCartPage popover fade top in">
                        <span class="info-iconCartPage">i</span>
                        <div class="arrow" style="left: 50%;"></div>
                        <span class="tooltipBoxCartPage"><div class="popover-content">We stand behind the quality of CEFALY products, and hope you are happy with the device. If you are not satisfied with the product you may return it within 90 calendar days of your product delivery date for a refund. <a class="return-policy-link" href="/return-policy">Read full return policy</a></div></span>
                    </span>
                </div>
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/warrantyIcon.svg" alt="3-year limited warranty" class="guaranteeIcon">
                    <span>3-year limited warranty</span>
                </div>
                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/HSAFSAeligible.svg" alt="HSA/FSA eligible" class="guaranteeIcon">
                    <span>HSA/FSA eligible</span>
                </div>
            </div>
        </div>`);
        $('.tooltipCartPage .info-iconCartPage').on('click', function () {
            $(".tooltipCartPage").toggleClass('active');
        });
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);