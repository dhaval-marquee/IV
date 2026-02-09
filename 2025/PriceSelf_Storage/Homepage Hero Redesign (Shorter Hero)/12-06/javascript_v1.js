function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        

        document.querySelector('.homepageIV .pss-hero h1').innerHTML = "Find Affordable Storage";
        document.querySelector('.homepageIV .pss-hero h1').insertAdjacentHTML('afterend', '<div class="subtitle">Use our fast and easy online rental process</div>');

        const getText = document.querySelector(".homepageIV .pss-hero .pss-row2 a + div");
        getText.innerHTML = getText.innerHTML.replace("RENT", "<span>RENT</span>");

        document.querySelectorAll('.homepageIV .pss-hero .pss-hero__search > div')[0]?.remove();


        jQuery('.homepageIV .pss-hero__search input#txtHomeSearch').attr('placeholder', 'enter city, state or zip');

        function runCode() {
        const header = document.querySelector('#nav');
        const wrapper = document.querySelector('#homeFindStorageUnitWrapperID .pss-hero__wrapper');
        if (header && wrapper) {
            wrapper.style.setProperty('padding-top', header.offsetHeight + 38 + 'px', 'important');
        }

        const search = document.querySelector('.homepageIV .pss-hero__search .pss-search');
        if (search && !document.querySelector('.pss-row2.only-mobile')) {
            search.insertAdjacentHTML('afterend', `
            <div class="pss-row2 only-mobile">
                <div>SAVE UP TO</div>
                <div>50 %</div>
                <a href="javascript:;" class="pss-hero__promotion-disclaimer-internal-pages" id="toggle-disclaimer-symbol" role="button" onclick="toggleDisclaimer(event)" aria-label="Symbol for showing the disclaimer">
                <svg class="pss-footer__social-icon">
                    <use href="/Assets/sprite/icons.svg#disclaimer-icon-no-circle"></use>
                </svg>
                </a>
                <div>ON MONTHLY <span>RENT</span></div>
            </div>
            `);
        }
        }

        function handleResize() {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            runCode();
        } else {
            // Optional: Clean up if needed
            document.querySelector('.pss-row2.only-mobile')?.remove();
            document.querySelector('#homeFindStorageUnitWrapperID .pss-hero__wrapper')?.style.removeProperty('padding-top');
        }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

    }
}

loadTestCode();