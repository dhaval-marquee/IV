function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-insurance')) {
        document.querySelector('body').classList.add('iv-insurance');

        const ivDesktopText = `Not sure if you’re covered? Click here to get a FREE consultation`;
        const ivMobileText = `Not sure if you’re covered? Get a FREE consultation`;

        const insuranceBar = `
            <a href="https://empirevein.com/en/book-online/" class="iv-insurance-bar">
                <span class="iv-desktop-text">${ivDesktopText}</span>
                <span class="iv-mobile-text">${ivMobileText}</span>    
            </a>`;
        document.querySelector('body').insertAdjacentHTML('beforeend', insuranceBar);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);