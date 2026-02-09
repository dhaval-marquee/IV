function loadTestCode() {
    document.querySelector('body').classList.add('iv-cart-sticky');

    document.querySelector('.iv-cart-sticky').insertAdjacentHTML('beforeend', '<div class="sticky-footer-bar"><div class="sticky-footer-bar--container"></div></div>');

    var highlightsBanner = document.querySelector('.highlights-banners-container');
    var checkoutBtn = document.querySelector('#checkout---btn_second');
    var footerBar = document.querySelector('.sticky-footer-bar--container');

    if (footerBar) {
        if (highlightsBanner) {
            var bannerClone = highlightsBanner.cloneNode(true);
            footerBar.appendChild(bannerClone);
        }
        if (checkoutBtn) {
            var btnClone = checkoutBtn.cloneNode(true);
            btnClone.removeAttribute('id');
            footerBar.appendChild(btnClone);
        }
    }

    const isElementOutOfView = (element) => {
    if (!element) return true;
        const rect = element.getBoundingClientRect();
        return rect.bottom < 0 || rect.top > window.innerHeight;
    };

    const handleVisibilityCheck = () => {
        const banner = document.querySelector('.cartitems > .highlights-banners-container');
        const btn = document.querySelector('#checkout---btn_second');
        const stickyFooter = document.querySelector('.sticky-footer-bar');
        const chatWidget = document.querySelector('#gorgias-chat-container');

        const bannerOutOfView = isElementOutOfView(banner);
        const btnOutOfView = isElementOutOfView(btn);

        if (stickyFooter) {
            if (bannerOutOfView && btnOutOfView) {
                stickyFooter.style.display = "block";
                if (chatWidget) chatWidget.style.display = "none";
            } else {
                stickyFooter.style.display = "none";
                if (chatWidget) chatWidget.style.display = "block";
            }
        }
    };
    window.addEventListener('scroll', handleVisibilityCheck);
    window.addEventListener('resize', handleVisibilityCheck);
    window.addEventListener('load', handleVisibilityCheck);
    handleVisibilityCheck();
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}