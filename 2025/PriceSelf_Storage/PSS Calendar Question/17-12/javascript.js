function loadTestCode() {
    if (document.body.classList.contains('iv-calendar')) return;
    document.body.classList.add('iv-calendar');

    function addCalendarContent() {
        const dates = document.querySelectorAll('#divMoveDate');
        if (dates.length === 0) return;

        dates.forEach((element) => {
            const dateInput = element.querySelector('.pss-move-in-date-input');

            // Correct visibility check for this element
            const isVisible = element.offsetParent !== null;

            // Disable / enable input
            if (isVisible) {
                dateInput.disabled = true;
            } else {
                dateInput.disabled = false;
            }
        });
        
    }

    addCalendarContent();

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) addCalendarContent();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Run after DOM is ready (safe for VWO)
(function waitForElements() {
    if (document.querySelector('#divMoveDate')) {
        loadTestCode();
    } else {
        setTimeout(waitForElements, 100);
    }
})();