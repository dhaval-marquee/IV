function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-security-banner')) {
        document.querySelector('body').classList.add('iv-security-banner');

        const bannerHTML = `
        <div class="iv-security-banner-section">
            <div class="iv-security-banner-inner">
                <div class="iv-banner-img">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/Scheduleblue.png" alt="Schedule blue image">
                </div>
                <div class="iv-banner-content">
                    <span class="iv-banner-label">Price Self Storage</span>
                    <h6 class="iv-banner-heading">Reserve Today For Free!</h6>
                    <ul>
                        <li>No obligation to rent</li>
                        <li>Monthly rentals</li>
                        <li>Lock in this rate</li>
                        <li>No credit card required</li>
                    </ul>
                </div>  
            </div>
        </div>`;


        const desktopTarget = document.querySelectorAll('#locationsTabNavigation .pss-unit-list__container > div > .pss-unit-list__item')[1];
        if (desktopTarget) desktopTarget.insertAdjacentHTML('afterend', bannerHTML);

        const mobileTarget = document.querySelectorAll('#locationsTabNavigation #repDataMobile_0 > div')[2];
        if (mobileTarget) mobileTarget.insertAdjacentHTML('afterend', bannerHTML);

    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
