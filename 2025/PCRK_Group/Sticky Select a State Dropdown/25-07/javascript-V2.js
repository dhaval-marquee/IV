function loadTestCode() {
    if (document.body.classList.contains('iv-sticky-select')) return;

    document.body.classList.add('iv-sticky-select');

    const stateSelector = document.querySelector('#state-selector');
    if (!stateSelector) return;

    const originalParent = stateSelector.parentNode;
    const originalNextSibling = stateSelector.nextSibling;

    var innerHieight = stateSelector.clientHeight;

    // Get static offset once — won't change on DOM move
    const originalOffsetTop = stateSelector.getBoundingClientRect().top + window.scrollY + innerHieight - 2;

    // Create sticky wrapper
    const stickyWrapper = document.createElement('div');
    stickyWrapper.className = 'iv-sticky-top-section';
    stickyWrapper.style.display = 'none';
    document.body.appendChild(stickyWrapper);

    const label = document.createElement('span');
    label.textContent = 'Select a state';
    stickyWrapper.appendChild(label);

    let isSticky = false;

    function toggleSticky() {
        const scrollTop = window.scrollY;

        if (!isSticky && scrollTop >= originalOffsetTop - 70) {
            // Move to sticky
            stickyWrapper.appendChild(stateSelector);
            stickyWrapper.style.display = 'flex';
            document.body.classList.add('iv-sticky-active');
            isSticky = true;

            // Hide 'Select a state' option and disable it
            placeholderOption = Array.from(stateSelector.options).find(opt =>
                opt.text.trim().toLowerCase() === 'select a state'
            );
            if (placeholderOption) {
                placeholderOption.dataset.originalText = placeholderOption.text;
                placeholderOption.text = '';
                placeholderOption.disabled = true;
            }

        } else if (isSticky && scrollTop < originalOffsetTop - 70) {
            // Move back to original place
            if (originalNextSibling) {
                originalParent.insertBefore(stateSelector, originalNextSibling);
            } else {
                originalParent.appendChild(stateSelector);
            }
            stickyWrapper.style.display = 'none';
            document.body.classList.remove('iv-sticky-active');
            isSticky = false;

            // Restore 'Select a state' option
            if (placeholderOption) {
                placeholderOption.text = placeholderOption.dataset.originalText || 'Select a state';
                placeholderOption.disabled = false;
            }
        }
    }

    function handleStickyVisibility() {
        const container = document.querySelector('.site.grid-container');
        if (!container || !stickyWrapper) return;

        const stickyHeight = stickyWrapper.offsetHeight;
        const containerRect = container.getBoundingClientRect();

        if (containerRect.bottom <= window.innerHeight + stickyHeight) {
            stickyWrapper.style.opacity = '0';
            stickyWrapper.style.pointerEvents = 'none';
        } else {
            stickyWrapper.style.opacity = '1';
            stickyWrapper.style.pointerEvents = 'auto';
        }
    }

    // Attach listeners
    window.addEventListener('scroll', () => {
        toggleSticky();
        handleStickyVisibility();
    });

    window.addEventListener('resize', handleStickyVisibility);

    // Trigger once after load
    setTimeout(() => {
        toggleSticky();
        handleStickyVisibility();
    }, 300);
}
loadTestCode();