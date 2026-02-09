function loadTestCode() {
    if (!document.querySelector('body').classList.contains('banner_iv')) {
        document.querySelector('body').classList.add('banner_iv');

        // Storage box section
        document.querySelector('#MainContent_PromoBannerControl_pnlPromo').insertAdjacentHTML('beforeend', `<div class="solidarityBanner">
            <p>Our hearts are with the resilient community of Los Angeles during this challenging time, and we extend our deepest gratitude to the brave first responders who are tirelessly working to protect lives and&nbsp;property.</p>
        </div>`);
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);