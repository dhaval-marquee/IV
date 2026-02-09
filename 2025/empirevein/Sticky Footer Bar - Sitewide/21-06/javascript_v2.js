function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-bar')) {
        document.querySelector('body').classList.add('iv-sticky-bar');

        let footerButton;

        if (document.querySelector('html[lang="es-MX"]')) {
            footerButton = `<a class="iv-footer-bar" href="https://empirevein.com/es/libro-en-linea/">Haga clic aquí para reservar una consulta gratuita o simplemente obtener más información</a>`;
        } else {
            footerButton = `<a class="iv-footer-bar" href="https://empirevein.com/en/book-online/">Click Here to Book a Free Consult <span>or Just Learn More</span></a>`;
        }

        document.body.insertAdjacentHTML('beforeend', footerButton);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);