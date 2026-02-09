console.log('V2');

function loadTestCode() {
    if (document.body.classList.contains('iv-build-your-own-stethoscope-on-navigation')) return;
    document.body.classList.add('iv-build-your-own-stethoscope-on-navigation');

    const imgURL = `https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/MDF_Instruments/Stethoscope_Text.png`;

    const megaPromo = document.querySelector('.mega-menu__promo > a');
    if (megaPromo) {
        megaPromo.href = '/pages/design-your-custom-stethoscope';

        const megaPromoImg = megaPromo.querySelector('img');

        megaPromoImg.src = imgURL;

        megaPromoImg.srcset = imgURL;

        megaPromo.querySelector('.v-stack .h6').innerText = 'Build Your Own Stethoscope';
    }
    const customSection = `
        <a href="/pages/design-your-custom-stethoscope" class="custom-stetho-section">
            <img src="${imgURL}" 
                alt="Build Your Own Stethoscope" 
                style="max-width:100%; margin-bottom:10px;">
            <p class="h6">Build Your Own Stethoscope</p>
        </a> `;

    document.querySelector('.header-sidebar__main-panel .header-sidebar__linklist').insertAdjacentHTML('afterend', customSection);

}

// Run after body is ready
const checkCondition = setInterval(() => {
    if (document.body && document.querySelector('.mega-menu__promo > a')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);