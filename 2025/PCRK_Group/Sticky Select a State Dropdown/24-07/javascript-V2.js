function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-select')) {
        document.querySelector('body').classList.add('iv-sticky-select');

        const stateSelector = document.querySelector('#state-selector');

        if (stateSelector) {
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'iv-sticky-top-section'

            const labelSpan = document.createElement('span');
            labelSpan.textContent = 'Select this state';
            labelSpan.style.display = 'block';

            stateSelector.parentNode.insertBefore(wrapperDiv, stateSelector);

            wrapperDiv.appendChild(labelSpan);
            wrapperDiv.appendChild(stateSelector);
        }

        function handleStickyVisibility() {
            const sticky = document.querySelector('.iv-sticky-top-section');
            const container = document.querySelector('.site.grid-container');

            if (!sticky || !container) return;

            const stickyHeight = sticky.offsetHeight;
            const containerRect = container.getBoundingClientRect();

            // If the bottom of the container is at or above the viewport height (i.e. sticky touches it), hide sticky
            if (containerRect.bottom <= window.innerHeight + stickyHeight) {
                sticky.style.opacity = '0';
                sticky.style.pointerEvents = 'none';
            } else {
                sticky.style.opacity = '1';
                sticky.style.pointerEvents = 'auto';
            }
        }

        // Call on scroll and resize
        window.addEventListener('scroll', handleStickyVisibility);
        window.addEventListener('resize', handleStickyVisibility);

        // Optional: Call once immediately
        setTimeout(handleStickyVisibility, 300);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);