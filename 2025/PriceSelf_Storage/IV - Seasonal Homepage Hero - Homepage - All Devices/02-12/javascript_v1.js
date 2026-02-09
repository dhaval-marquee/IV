function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        
        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "BLACK FRIDAY SALE!";
        
        const getText = document.querySelector(".homepageIV .pss-hero .pss-row2 a + div");
        getText.innerHTML = getText.innerHTML.replace("RENT", "<span>RENT</span>");
        
        var getPrice = document.querySelector('.pss-row2 > div:nth-child(2)').innerText.trim().replace('%', '').trim();
        
        document.querySelector('.homepageIV .pss-hero__search input#txtHomeSearch').setAttribute('placeholder','Enter City or Zip');
        
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
        
        // Load code just for mobile 
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            runCode();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for mobile over
    }
}

loadTestCode();