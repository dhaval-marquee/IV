function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-improved-local')) {
        document.querySelector('body').classList.add('iv-improved-local');

        // Update CTA button text
        const ctaBtnSpan = document.querySelector('.shell aside .quick-form [name="quick-form-agent-profile"] button span');
        if (ctaBtnSpan) {
            ctaBtnSpan.textContent = 'CONTINUE';
        }
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);