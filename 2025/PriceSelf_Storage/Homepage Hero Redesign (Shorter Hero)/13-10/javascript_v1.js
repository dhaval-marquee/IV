function loadTestCodeDesktop() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        document.querySelector('body').classList.add('desktop');
        
        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable Storage";
        document.querySelector('.homepageIV .pss-hero h1').insertAdjacentHTML('afterend', '<div class="subtitle">Use our fast and easy online rental process</div>');

        // Hide original row visually
        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').style.display = 'none';

        var getPrice = document.querySelector('.pss-row2 > div:nth-child(2)').innerText.trim().replace('%', '').trim();

        document.querySelector('.homepageIV .pss-hero .pss-hero__promotion-logo .pss-row2').insertAdjacentHTML('afterend', `
        <div class="pss-row2 pss-heroRow2" role="group" aria-label="Promotion Details">
            <div class="tag"><span>SAVE</span> UP TO</div>
            <div class="price">${getPrice} <span>%</span>
                <a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Show disclaimer details about this promotion">
                    <svg class="pss-footer__social-icon" aria-hidden="true"><use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use></svg>
                </a>
            </div>
            <div class="plan">ON MONTHLY <span>RENT</span></div>
        </div>`);

        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'Enter City or Zip');

    }
}

function loadTestCodeMobile() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        document.querySelector('body').classList.add('mobile');
        
        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable<br> Storage";
        
        const getText = document.querySelector(".homepageIV .pss-hero .pss-row2 a + div");
        getText.innerHTML = getText.innerHTML.replace("RENT", "<span>RENT</span>");
        
        var getPrice = document.querySelector('.pss-row2 > div:nth-child(2)').innerText.trim().replace('%', '').trim();
        
        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'Enter City or Zip');
        
        document.querySelector('.homepageIV .pss-hero .pss-row2').insertAdjacentHTML('afterend', `<div class="pss-row2 onlyDesktop">
        <div class="uptoText">SAVE UP TO</div>
            <div class="numberText">${getPrice}% OFF</div>
            <a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Symbol for showing the disclaimer">
                <svg class="pss-footer__social-icon" aria-hidden="true">
                    <use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use>
                </svg>
            </a>
            <div class="rentText">MONTHLY RENT</div>
        </div>`);

        
        function runCode() {
            document.querySelector('#homeFindStorageUnitWrapperID .pss-hero__wrapper').after(document.querySelector('#homeFindStorageUnitWrapperID  .pss-hero__search'));
        }
        runCode()
    }
}

// Load code for Desktop and Mobile  
if (window.matchMedia("(min-width: 768px)").matches) {
    loadTestCodeDesktop();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
        loadTestCodeMobile();
    }

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code for Desktop and Mobile over
