function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-security-banner')) {
        document.querySelector('body').classList.add('iv-security-banner');

        const bannerHTML = `
        <section class="iv-security-banner-section" role="region" aria-label="Security Features Banner">
            <div class="iv-security-banner-inner">
                <figure class="iv-banner-img">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1744022938/PriceSelfStorage/DarkBlue.png" 
                        alt="Illustration of secure storage facility with gated access and security cameras">
                </figure>
                <div class="iv-banner-content">
                    <span class="iv-banner-label">Price Self Storage</span>
                    <h6 class="iv-banner-heading">Gated Access with Electronic Keypads, Digitally Recorded Security Cameras and Well-Lit Facilities & Drive Aisles</h6>
                    <p class="iv-banner-desc">At Price Self Storage, we take <br> securing your belongings seriously.</p>
                </div>  
            </div>
        </section>`;


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
