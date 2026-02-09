function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-insurance')) {
        document.querySelector('body').classList.add('iv-insurance');

        const insuranceBar = `<div class="iv-insurance-bar" style="display: none">
            <a href="https://empirevein.com/en/book-online/">Not sure if you’re covered? Get a FREE consultation →</a>
        </div>`;

        document.querySelector('body').insertAdjacentHTML('beforeend', insuranceBar);

        window.addEventListener('scroll', function () {
            const heroSection = document.querySelector('.subpage-img');
            const insuranceBar = document.querySelector('.iv-insurance-bar');

            if (!heroSection || !insuranceBar) return;

            const heroBottom = heroSection.getBoundingClientRect().bottom;

            if (heroBottom <= 0) {
                insuranceBar.style.display = 'block';
            } else {
                insuranceBar.style.display = 'none';
            }
        });


    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
