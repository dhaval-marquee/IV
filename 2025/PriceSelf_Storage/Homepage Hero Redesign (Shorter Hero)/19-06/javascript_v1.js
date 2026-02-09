function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        

        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable Storage";
        document.querySelector('.homepageIV .pss-hero h1').insertAdjacentHTML('afterend', '<div class="subtitle">Use our fast and easy online rental process</div>');

        document.querySelectorAll('.homepageIV .pss-hero .pss-hero__search > div')[0]?.remove();

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').style.display = 'none';

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').insertAdjacentHTML('afterend', `<div class="pss-row2 pss-heroRow2">
            <div class="tag"><span>SAVE</span> UP TO</div>
            <div class="price">50 <span>%</span><a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Symbol for showing the disclaimer">
                <svg class="pss-footer__social-icon">
                    <use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use>
                </svg>
            </a></div>
            <div class="plan">ON MONTHLY <span>RENT</span></div>
        </div>`);

        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'enter city, state or zip');

    }
}

loadTestCode();