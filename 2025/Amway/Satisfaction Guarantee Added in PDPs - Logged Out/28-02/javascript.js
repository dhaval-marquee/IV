function loadTestCode() {
    if (!document.body.classList.contains('iv-popup')) {
        document.body.classList.add('iv-popup');

        const learnMoreContent = `<div class="iv-learn-content">
            <p>Buy with confidence of our <br/><strong>Satisfaction Guarantee</strong></p>
            <a class="guarantee-cta" href="javascript:void(0);">Learn More</a>
        </div>`;

        if (!document.querySelector('.iv-learn-content')) {
            const targetElement = document.querySelector('.iv-popup .js-product-wrapper .amw-panel .AddToCart-ShareAction');
            if (targetElement) {
                targetElement.insertAdjacentHTML('afterend', learnMoreContent);
            }
        }

        // For popup
        const popUp = `<div class="guarantee-popup" style="display: none;">
            <div class="guarantee-popup-inner">
                <div class="guarantee-popup-container">
                    <div class="guarantee-popup-content">
                        <div class="guarantee-popup-title">
                            <a class="guarantee-popup-closed" href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 6.083L6.16 26L4 23.917L23.84 4L26 6.083Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.083L23.84 26L26 23.917L6.16 4L4 6.083Z" fill="black"/>
                                </svg>
                            </a>
                            <h2>Satisfaction Guarantee Customers and Guests</h2>
                            <strong>If for any reason you are not completely satisfied with our products, you may return them within 180 days of purchase for an exchange or refund of the product price and applicable tax.</strong>
                            <ul>
                                <li>Specific limited guarantees apply to designated products. Atmosphere™, iCook™ and eSpring™ products must be returned within 120 days.</li>
                                <li>Some items such as consumable food and beverage items are non-returnable unless defective upon receipt.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        if (!document.querySelector('.guarantee-popup')) {
            document.body.insertAdjacentHTML('afterbegin', popUp);
        }
    }
}

// Attach event listeners via event delegation
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('guarantee-cta')) {
        document.querySelector('.guarantee-popup').style.display = 'block';
    } else if (event.target.closest('.guarantee-popup-closed')) {
        document.querySelector('.guarantee-popup').style.display = 'none';
    }
});

// Run script when body exists
var checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
