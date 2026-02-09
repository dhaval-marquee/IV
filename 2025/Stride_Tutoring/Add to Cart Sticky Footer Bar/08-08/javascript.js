function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-footer-bar')) {
        document.querySelector('body').classList.add('iv-footer-bar');

        const ivStickyFooterBar = `<a href="javascript:;" class="iv-sticky-footer-bar iv-sticky-footer-hidden text-xl addToCartButton">Add to Cart</a>`;

        document.body.insertAdjacentHTML('beforeend', ivStickyFooterBar);
        
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("addToCartButton")) {
                e.preventDefault(); // Always prevent default to control behavior

                const targetButton = document.querySelector('#book + div > div > button:first-child');
                const formContainer = document.querySelector(".flex-grow");

                if (targetButton?.disabled || targetButton?.hasAttribute('disabled')) {
                    // Button is disabled → Scroll to form
                    if (formContainer) {
                        const offset = formContainer.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').getBoundingClientRect().height - 80;
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }
                } else if (targetButton) {
                    targetButton.click();
                }
            }
        });

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);