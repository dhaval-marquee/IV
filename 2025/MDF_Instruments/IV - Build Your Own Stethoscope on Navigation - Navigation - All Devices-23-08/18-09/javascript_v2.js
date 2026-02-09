console.log('V2');

function loadTestCode() {
    if (document.querySelector('body').classList.contains('iv-build-your-own-stethoscope-on-navigation'));
    document.querySelector('body').classList.add('iv-build-your-own-stethoscope-on-navigation');

    const imgURL = `https://res.cloudinary.com/ignite-visibility/image/upload/v1756904745/MDF_Instruments/StethoscopesMobileV2.jpg`;

    const megaPromo = document.querySelector('.mega-menu__promo > a');
    if (megaPromo) {
        megaPromo.href = '/pages/design-your-custom-stethoscope';

        const megaPromoImg = megaPromo.querySelector('img');

        megaPromoImg.src = imgURL;

        megaPromoImg.srcset = imgURL;

        // megaPromo.querySelector('.v-stack .h6').innerText = 'Build Your Own Stethoscope';
        megaPromo.querySelector('.v-stack .h6').insertAdjacentHTML('afterend', `<a href="https://mdfinstruments.com/pages/design-your-custom-stethoscope" class="h6 dark-button button">Build Your Own Stethoscope</a>`);
    }
    const customSection = `
        <a href="/pages/design-your-custom-stethoscope" class="custom-stetho-section">
            <img src="${imgURL}" 
                alt="Build Your Own Stethoscope" 
                style="max-width:100%; margin-bottom:10px;">
        </a> 
        <a href="https://mdfinstruments.com/pages/design-your-custom-stethoscope" class="h6 dark-button button">Build Your Own Stethoscope</a>`;

    document.querySelector('.header-sidebar__main-panel .header-sidebar__linklist').insertAdjacentHTML('afterend', customSection);

}

// Run after body is ready
document.addEventListener("DOMContentLoaded", function () {
   loadTestCode();
});
