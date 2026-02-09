function loadTestCode() {
    if (!document.body.classList.contains('iv-popup-info')) {
        document.body.classList.add('iv-popup-info');

        // For popup
        const popUp = `<div class="guarantee-popup" style="display: none;">
            <div class="guarantee-popup-inner">
                <div class="guarantee-popup-container">
                    <div class="guarantee-popup-content">
                        <div class="guarantee-popup-title">
                            <a class="guarantee-popup-closed" href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 6.083L6.16 26L4 23.917L23.84 4L26 6.083Z" fill="black"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.083L23.84 26L26 23.917L6.16 4L4 6.083Z" fill="black"></path>
                                </svg>
                            </a>
                            <h2>Satisfaction Guarantee Customers and Guests</h2>
                            <strong></strong>
                            <ul></ul>
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
    const li = event.target.closest('.amw-page-pdp__tab-details ul li');

    if (li) {
        const spanText = li.querySelector('span')?.innerText.trim();
        const popupTitle = document.querySelector('.guarantee-popup h2');
        const popupStrong = document.querySelector('.guarantee-popup strong');
        const popupList = document.querySelector('.guarantee-popup ul');

        if (popupTitle && popupStrong) {
            if (spanText === 'Amway Promise™') {
                popupTitle.innerText = 'Satisfaction Guarantee Customers and Guests';
                popupStrong.innerText = `If for any reason you are not completely satisfied with our products, you may return them within 180 days of purchase for an exchange or refund of the product price and applicable tax.`
                popupList.innerHTML = `<li>Specific limited guarantees apply to designated products. Atmosphere™, iCook™ and eSpring™ products must be returned within 120 days.</li>
                                        <li>Some items such as consumable food and beverage items are non-returnable unless defective upon receipt.</li>`
            } else if (spanText === 'Dairy Free') {
                popupTitle.innerText = 'This energy drink contains no dairy.';
                popupStrong.innerText = ``;
                popupList.innerHTML = ``;
            } else if (spanText === 'Lactose Free') {
                popupTitle.innerText = 'This energy drink contains no lactose.';
                popupStrong.innerText = ``;
                popupList.innerHTML = ``;
            }
        }

        document.querySelector('.guarantee-popup').style.display = 'block';

        const popup = document.querySelector('.guarantee-popup');

        if (popup && spanText) {
            popup.className = 'guarantee-popup';

            const spanClass = spanText
                .toLowerCase()
                .replace(/™/g, '')
                .replace(/\s+/g, '-');

            popup.classList.add(`iv-popup-${spanClass}`);
        }

    }
    else if (event.target.closest('.guarantee-popup-closed')) {
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
