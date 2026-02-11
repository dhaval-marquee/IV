function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-insurance')) {
        document.querySelector('body').classList.add('iv-insurance');

        const ivDesktoptext = `Not sure if you’re covered? Click here to get a FREE consultation`;
        const ivMobiletext = `Not sure if you’re covered? Get a FREE consultation`;

        const insuranceBar = `<div class="iv-insurance-bar">
            <a href="https://empirevein.com/en/book-online/">
                <span class="iv-desktop-text">${ivDesktoptext}</span>
                <span class="iv-mobile-text">${ivMobiletext}</span>    
            </a>
        </div>`;
        document.querySelector('body').insertAdjacentHTML('beforeend', insuranceBar);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);