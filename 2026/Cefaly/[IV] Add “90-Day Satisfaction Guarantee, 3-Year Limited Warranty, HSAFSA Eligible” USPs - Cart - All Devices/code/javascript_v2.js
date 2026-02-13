function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivCartPage')) {
        document.querySelector('body').classList.add('ivCartPage');
        document.querySelector('body').classList.add('ivCartPage_v2');

        const template = `
        <div class="guaranteeSection">
            <div class="guaranteeContainer">

                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/warrantyIcon.svg" class="guaranteeIcon">
                    <span>3-year limited warranty</span>
                </div>

                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/HSAFSAeligible.svg" class="guaranteeIcon">
                    <span>HSA/FSA eligible</span>
                </div>

                <div class="guaranteeItem">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770795641/Cefaly/USPsCart/moneyBackGuarantee.svg" class="guaranteeIcon">
                    <span>90-day money-back guarantee</span>

                    <span class="tooltipCartPage">
                        <span class="info-iconCartPage">i</span>
                        <span class="tooltipBoxCartPage">
                            We stand behind the quality of CEFALY products, and hope you are happy with the device.
                            If you are not satisfied with the product you may return it within 90 calendar days
                            of your product delivery date for a refund.
                            <a href="/return-policy">Read full return policy</a>
                        </span>
                    </span>
                </div>

            </div>
        </div>`;

        function insertSection() {

            // remove existing first (prevents duplicates)
            document.querySelectorAll('.guaranteeSection').forEach(el => el.remove());

            let target;

            if (window.innerWidth >= 992) {
                target = document.querySelector('.ivCartPage form .cart-totals');
            } else {
                target = document.querySelector('.ivCartPage form .item-container');
            }

            if (target) target.insertAdjacentHTML('afterend', template);
        }

        // run once
        insertSection();

        // run on resize (debounced for performance)
        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(insertSection, 250);
        });


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