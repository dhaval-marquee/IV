function loadTestCode() {
    if (!document.querySelector('body').classList.contains('hero_iv')) {
        document.querySelector('body').classList.add('hero_iv');

        document.querySelector('.productDetailsPageLeftPanelSlot .js-image-gallery-wrapper > div:nth-child(1) .amw-gallery-carousel__inner [data-slick-index="0"]').after(document.querySelector('.productDetailsPageLeftPanelSlot .js-image-gallery-wrapper > div:nth-child(1) .amw-gallery-carousel__inner [data-slick-index="4"]'));

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);