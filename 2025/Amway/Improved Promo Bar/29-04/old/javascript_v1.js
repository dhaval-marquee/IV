function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-promobar')) {
        document.querySelector('body').classList.add('iv-promobar');

        const ivPromobartext = document.querySelector('.iv-promobar #skip-to-content .print-hide .amw-full-width-rich-text__banner > div > span p:first-child');
        const ivPromobarBtn = document.querySelector('.iv-promobar #skip-to-content .print-hide .amw-full-width-rich-text__banner > div > span p span a');

        if (ivPromobartext) {
            ivPromobartext.innerText = 'Save $75 when you shop consistently!';
        }
        if(ivPromobarBtn) {
            ivPromobarBtn.classList.add('iv-promobar-btn');
            ivPromobarBtn.innerText = 'Learn More';
        }

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);