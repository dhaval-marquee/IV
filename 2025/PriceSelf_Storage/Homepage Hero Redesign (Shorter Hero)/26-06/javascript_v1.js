function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        

        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable Storage";
        document.querySelector('.homepageIV .pss-hero h1').insertAdjacentHTML('afterend', '<div class="subtitle">Use our fast and easy online rental process</div>');

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').style.display = 'none';

        var getPrice = document.querySelector('.pss-row2 > div:nth-child(2)').innerText.trim().replace('%', '').trim();

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').insertAdjacentHTML('afterend', `<div class="pss-row2 pss-heroRow2">
            <div class="tag"><span>SAVE</span> UP TO</div>
            <div class="price">${getPrice} <span>%</span><a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Symbol for showing the disclaimer">
                <svg class="pss-footer__social-icon">
                    <use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use>
                </svg>
            </a></div>
            <div class="plan">ON MONTHLY <span>RENT</span></div>
        </div>`);

        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'Enter City or Zip');

    }
}

loadTestCode();