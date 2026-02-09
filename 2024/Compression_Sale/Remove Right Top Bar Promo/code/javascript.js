function loadTestCode() {
    if (!document.querySelector('body').classList.contains('promo-iv')) {
        document.querySelector('body').classList.add('promo-iv');

        document.querySelector('.promo-iv .small-promo').innerHTML = `<div class="small-promo-content">
            <span class="small-promo-heading">Shop Our Fall Sale</span>
            <p>10% Off All Orders <strong>FALL 10</strong></p>
        </div>`;
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);