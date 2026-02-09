function loadTestCode() {
    document.body.classList.add('iv-cart-sticky');

    if (!document.querySelector('.sticky-footer-bar')) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div class="sticky-footer-bar">
                <a href="/checkout" class="sticky-footer-bar--container button-primary">
                    <svg class="onlyDesktop" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 11.1667C2.5 10.0622 3.39543 9.16675 4.5 9.16675H15.5C16.6046 9.16675 17.5 10.0622 17.5 11.1667V16.3334C17.5 17.438 16.6046 18.3334 15.5 18.3334H4.5C3.39543 18.3334 2.5 17.438 2.5 16.3334V11.1667Z" fill="currentColor"></path>
                    <path d="M5.83337 9.16675V5.83341C5.83337 3.53223 7.69885 1.66675 10 1.66675C12.3012 1.66675 14.1667 3.53223 14.1667 5.83341V9.16675" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p>Almost Done - Click Here to Continue <br>to the Secure Checkout <svg class="onlyMobile" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 11.1667C2.5 10.0622 3.39543 9.16675 4.5 9.16675H15.5C16.6046 9.16675 17.5 10.0622 17.5 11.1667V16.3334C17.5 17.438 16.6046 18.3334 15.5 18.3334H4.5C3.39543 18.3334 2.5 17.438 2.5 16.3334V11.1667Z" fill="currentColor"></path>
                    <path d="M5.83337 9.16675V5.83341C5.83337 3.53223 7.69885 1.66675 10 1.66675C12.3012 1.66675 14.1667 3.53223 14.1667 5.83341V9.16675" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></p>
                    </svg>
                </a>
            </div>`
        );
    }
}

// Wait for jQuery and body to be available
const checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && document.body && document.querySelectorAll('.cart-checkout').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
