function loadTestCode() {
    if (document.body.classList.contains('iv-Tooltip'));
    document.body.classList.add('iv-Tooltip');

    function addFulfillmentContent() {
        const buttons = document.querySelectorAll('#divMoveDate + .pss-button');

        if (buttons.length === 0);

        buttons.forEach((element) => {
            // Wrap each button if not already wrapped
            if (!element.parentNode.classList.contains('holdNowButtonWrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'holdNowButtonWrapper';
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
            }

            // Add tooltip if not already added
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

    // Run once initially
    addFulfillmentContent();

    // Observe DOM changes (new elements added)
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                // Run our logic again when something new is added
                addFulfillmentContent();
            }
        }
    });

    // Start observing the entire document body for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Fulfillment observer active.');
}

loadTestCode();
