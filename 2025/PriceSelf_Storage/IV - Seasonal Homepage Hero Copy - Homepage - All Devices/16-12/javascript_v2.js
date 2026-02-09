function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');

        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "WINTER HOLIDAY SALE!";
        document.querySelector('.homepageIV .pss-hero h1').insertAdjacentHTML('afterend', '<div class="subtitle">Use our fast and easy online rental process</div>');

        // Hide original row visually
        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').style.display = 'none';

        var getPrice = document.querySelector('.pss-row2 > div:nth-child(2)').innerText.trim().replace('%', '').trim();

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').insertAdjacentHTML('afterend', `
        <div class="pss-row2 pss-heroRow2" role="group" aria-label="Promotion Details">
            <div class="tag"><span>SAVE</span> UP TO</div>
            <div class="price">${getPrice} <span class="percentage">%</span>
                <a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Show disclaimer details about this promotion">
                    <svg class="pss-footer__social-icon" aria-hidden="true"><use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use></svg>
                </a>
                <span class="d-md-none">OFF</span>
            </div>
            <div class="plan">
                <span class="d-none d-md-block">ON MONTHLY <span class="rent">RENT</span></span>
                <span class="d-md-none">MONTHLY RENT</span>
            </div>
        </div>`);

        document.querySelector('.homepageIV .pss-hero__search input#txtHomeSearch').placeholder = 'Enter City or Zip';
    }
}

loadTestCode();
