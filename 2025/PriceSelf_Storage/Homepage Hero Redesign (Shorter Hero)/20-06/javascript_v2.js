function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        

        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable<br> Storage";
        
        const getText = document.querySelector(".homepageIV .pss-hero .pss-row2 a + div");
        getText.innerHTML = getText.innerHTML.replace("RENT", "<span>RENT</span>");
        
        document.querySelectorAll('.homepageIV .pss-hero .pss-hero__search > div')[0]?.remove();
        
        
        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'enter city, state or zip');
        
        document.querySelector('.homepageIV .pss-hero .pss-row2').insertAdjacentHTML('afterend', `<div class="pss-row2 onlyDesktop">
        <div class="uptoText">UP TO</div>
            <div class="numberText">50% OFF</div>
            <a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Symbol for showing the disclaimer">
                <svg class="pss-footer__social-icon">
                    <use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use>
                </svg>
            </a>
            <div class="rentText">MONTHLY RENT</div>
        </div>`);

        document.querySelector('.homepageIV .pss-hero .pss-hero__search .pss-search').insertAdjacentHTML('afterend', '<div class="iIconText"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1749463673/PriceSelfStorage/i_icon.svg"> <p>New customers only. Restrictions and fees apply.</p></div>');

        
        function runCode() {
            document.querySelector('#homeFindStorageUnitWrapperID .pss-hero__wrapper').after(document.querySelector('#homeFindStorageUnitWrapperID  .pss-hero__search'));
            document.querySelector('.homepageIV .pss-hero .pss-row2.onlyDesktop').insertAdjacentHTML('afterend', '<div class="iIconText"><p><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1749463673/PriceSelfStorage/i_icon.svg">New customers only. &nbsp;Restrictions and fees&nbsp;apply.</p></div>');

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