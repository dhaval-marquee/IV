function loadTestCode() {
    if (!document.body.classList.contains('iv-sticky-select')) {
        document.body.classList.add('iv-sticky-select');

        const stateSelector = document.querySelector('#state-selector');
        if (!stateSelector) return;

        const originalParent = stateSelector.parentNode;
        const originalNextSibling = stateSelector.nextSibling;

        const innerHeight = stateSelector.clientHeight;
        const originalOffsetBottom = stateSelector.getBoundingClientRect().top + window.scrollY + innerHeight;

        const stickyWrapper = document.createElement('div');
        stickyWrapper.className = 'iv-sticky-top-section';
        stickyWrapper.style.display = 'none';
        document.body.appendChild(stickyWrapper);

        const label = document.createElement('span');
        label.textContent = 'Select a state';
        stickyWrapper.appendChild(label);

        let isSticky = false;
        let placeholderOption = null;

        const footer = document.querySelector('.site-footer');

        window.addEventListener('scroll', function () {
            const scrollTop = window.scrollY;
            const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;

            const shouldUnstick = scrollTop < originalOffsetBottom - 70 || (footerTop <= 110);

            if (!isSticky && scrollTop >= originalOffsetBottom - 70 && footerTop > 110) {
                // Activate sticky
                stickyWrapper.appendChild(stateSelector);
                stickyWrapper.style.display = 'flex';
                document.body.classList.add('iv-sticky-active');
                isSticky = true;

                placeholderOption = Array.from(stateSelector.options).find(opt =>
                    opt.text.trim().toLowerCase() === 'select a state'
                );
                if (placeholderOption) {
                    placeholderOption.dataset.originalText = placeholderOption.text;
                    placeholderOption.text = '';
                    placeholderOption.disabled = true;
                }

            } else if (isSticky && shouldUnstick) {
                // Deactivate sticky
                if (originalNextSibling) {
                    originalParent.insertBefore(stateSelector, originalNextSibling);
                } else {
                    originalParent.appendChild(stateSelector);
                }
                stickyWrapper.style.display = 'none';
                document.body.classList.remove('iv-sticky-active');
                isSticky = false;

                if (placeholderOption) {
                    placeholderOption.text = placeholderOption.dataset.originalText || 'Select a state';
                    placeholderOption.disabled = false;
                }
            }
        });
    }
}

loadTestCode();