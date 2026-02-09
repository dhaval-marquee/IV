function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-promobar', 'iv-promobar-v2')) {
        document.querySelector('body').classList.add('iv-promobar', 'iv-promobar-v2');

        const ivPromobartext = document.querySelector('.iv-promobar #skip-to-content .js-value-proposition-banner-container .amw-full-width-rich-text__banner > div > span p:first-child');
        const ivPromobarBtn = document.querySelector('.iv-promobar #skip-to-content .js-value-proposition-banner-container .amw-full-width-rich-text__banner > div > span p span a');

        if (ivPromobartext) {
            ivPromobartext.innerText = 'Save $75 when you shop consistently!';
        }
        if(ivPromobarBtn) {
            ivPromobarBtn.classList.add('iv-promobar-btn');
            ivPromobarBtn.innerText = 'Learn More';
        }

        function setBannerTopOffset() {
            var header = document.querySelector('#mainHeader');
            var banner = document.querySelector('.js-value-proposition-banner-container');
          
            if (header && banner) {
              var headerHeight = header.clientHeight;
              banner.style.top = headerHeight + 'px';
            }
          }
          window.addEventListener('load', setBannerTopOffset);
          window.addEventListener('resize', setBannerTopOffset);

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);