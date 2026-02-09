function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-menu')) {
        document.querySelector('body').classList.add('iv-menu');

        // Desktop
        const pricingNew = `<a href="https://tutoring.k12.com/pricing/"><span class="menu-title-text">Pricing</span></a>`;
        const pricingMenu = document.querySelector('nav .sf-menu .sub-menu a[href*="/pricing/"]');
        if (pricingMenu) {
            const span = pricingMenu.querySelector('span');
            if (span) {
                span.innerText = 'Gift Cards';
            }
            pricingMenu.setAttribute('href', 'javascript:;');
        }
        const originGift = document.querySelector('nav .sf-menu li a[href*="https://book.tutoring.k12.com/gift-cards"]');
        if (pricingMenu && originGift) {
            originGift.insertAdjacentHTML('afterend', pricingNew);
            originGift.style.display = 'none';
            pricingMenu.addEventListener('click', function () {
                originGift.click();
            });
        }

        // Mobile
        function mobileMenu() {
            const mobileGift = document.querySelector('#slide-out-widget-area .menu li a[href="https://book.tutoring.k12.com/gift-cards"]');
            if(mobileGift){
                mobileGift.insertAdjacentHTML('afterend', pricingNew);
                mobileGift.style.display = 'none';
            }
            const mobilePricing = document.querySelector('#slide-out-widget-area .menu li .sub-menu li  a[href="https://tutoring.k12.com/pricing/"]');
            if(mobilePricing){
                mobilePricing.innerText = 'Gift Cards';
                mobilePricing.setAttribute('href', 'javascript:;');
                mobilePricing.addEventListener('click', function () {
                    originGift.click();
                });
            }
        }
        mobileMenu();
        document.querySelector('#ajax-content-wrap [href="#sidewidgetarea"]').addEventListener('click', function(){
            mobileMenu();
        });
       
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);