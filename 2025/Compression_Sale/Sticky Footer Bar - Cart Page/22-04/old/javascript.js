function loadTestCode() {
    document.body.classList.add('iv-cart-sticky');

    if (!document.querySelector('.sticky-footer-bar')) {
        document.body.insertAdjacentHTML(
            'beforeend',
            '<div class="sticky-footer-bar"><div class="sticky-footer-bar--container"></div></div>'
        );
    }

    const highlightsBanner = document.querySelector('.highlights-banners-container');
    const checkoutBtn = document.querySelector('#checkout---btn_second');
    const footerBar = document.querySelector('.sticky-footer-bar--container');

    if (footerBar) {
        if (highlightsBanner) {
            const bannerClone = highlightsBanner.cloneNode(true);
            footerBar.appendChild(bannerClone);
        }
        if (checkoutBtn) {
            const btnClone = checkoutBtn.cloneNode(true);
            btnClone.removeAttribute('id');
            footerBar.appendChild(btnClone);
        }
    }
}

// Wait for jQuery and body to be available
const checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
