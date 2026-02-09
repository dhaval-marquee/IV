function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-cart-opne')) {
        document.querySelector('body').classList.add('iv-cart-opne');

        const bundleButtons = document.querySelectorAll('main > div > div > div> div > button');

        if (bundleButtons) {
            const navButton = document.querySelector('nav[role="navigation"][aria-label="Header Buttons"] button');
            if (navButton) {
                bundleButtons.forEach(btn => {
                    btn.addEventListener("click", function () {
                        navButton.click();
                    });
                });
            }
        }


        let styleTag = document.createElement("style");
        styleTag.innerHTML = `
            .iv-cart-opne section[aria-label="Notifications alt+T"] {
                display: none;
            }
        `;
        document.head.appendChild(styleTag);
        

    }
}

var checkCondition = setInterval(function() {
    if (document.body && document.querySelector('main > div > div > div> div > button')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 2300);
