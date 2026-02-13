function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-pricing-required')) {
        document.querySelector('body').classList.add('iv-pricing-required');
        
        const creditCard = `<div class="iv-pricing-cta"><a href="https://www.mapcommunications.com/contact-us/request-free-trial/" target="" class="map-fill-btn">No Credit Card Required To Get Started!</a></div>`;

        document.querySelector('.pricing-row').insertAdjacentHTML('afterbegin', creditCard);

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);