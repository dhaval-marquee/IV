function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageIV')) {
        document.querySelector('body').classList.add('homepageIV');
        
        document.querySelector('.homepageIV .pss-hero .pss-row2').insertAdjacentHTML('afterbegin', '<div class="labor-day-sale-title">LABOR DAY SALE!</div>');
    }
}

loadTestCode();
