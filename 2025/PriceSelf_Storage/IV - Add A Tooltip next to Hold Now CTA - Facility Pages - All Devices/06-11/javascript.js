function loadTestCode() {
    if (document.body.classList.contains('iv-Tooltip')) return;
    document.body.classList.add('iv-Tooltip');

    function addFulfillmentContent() {
        const buttons = document.querySelectorAll('#divMoveDate + .pss-button');
        if (buttons.length === 0) return;

        buttons.forEach((element) => {
            if (!element.parentNode.classList.contains('holdNowButtonWrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'holdNowButtonWrapper';
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
            }

            if (!element.parentNode.querySelector('.fulfillment-wrap')) {
                element.insertAdjacentHTML('afterend', `
                    <div class="fulfillment-wrap">
                        <span class="tooltip">
                            <span class="info-icon">?</span>
                            <span class="tooltip-box">
                                No credit card needed to lock in your rate and hold your space.
                                After reserving, you will have the option to finish your rental
                                online, over the phone, or in person.
                            </span>
                        </span>
                    </div>
                `);
            }
        });
    }

    addFulfillmentContent();

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) addFulfillmentContent();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log('Fulfillment observer active.');
}

// Run after DOM is ready (safe for VWO)
(function waitForElements() {
    if (document.querySelector('#divMoveDate + .pss-button')) {
        loadTestCode();
    } else {
        setTimeout(waitForElements, 100);
    }
})();
