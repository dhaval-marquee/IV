function loadTestCode() {
    if (!document.querySelector('body').classList.contains('cart_iv')) {
        document.querySelector('body').classList.add('cart_iv');

        const aboutUs = document.querySelector('#sources');
        if (aboutUs) {
            aboutUs.style.display = "none";
        }

        const additionalNote = document.querySelector(`[for="checkout_attributes_additional"]`);
        if (additionalNote) {
            additionalNote.textContent += " (Optional)";
        }

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);