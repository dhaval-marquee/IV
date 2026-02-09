function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form')) {
        document.querySelector('body').classList.add('iv-form');

        // Function to observe DOM changes
        function observerElm(target, callbackFn) {
            const config = {
                childList: true,
                subtree: true,
            };
            const observer = new MutationObserver(callbackFn);
            observer.observe(target, config);
        }

        // Initialize observer on target element
        const targetElement = document.querySelector('#locationsTabNavigation') || document.querySelector('.pss-locations-leftbox__locations-list');
        if (targetElement) {
            observerElm(targetElement, () => updateLabels());
        } else {
            console.warn('No target element found for observing.');
        }

        // Update labels and set up tab functionality
        function updateLabels() {
            const sizeButtons = document.querySelectorAll('.pss-unit-list__item-col');

            // Clear existing event listeners to avoid duplication
            sizeButtons.forEach(sizeButton => {
                sizeButton.removeEventListener('click', onSizeButtonClick); // Remove any previously attached listeners
                sizeButton.addEventListener('click', onSizeButtonClick);    // Attach the new listener
            });
        }

        function onSizeButtonClick(event) {
            const sizeButton = event.currentTarget;
            const container = sizeButton.closest('.pss-unit-list__item').querySelector('.pss-unit-list__size-guide-mobile-container');
            const titleElement = container.querySelector('.pss-size-guide-mobile-title');

            // Prevent creating tabs multiple times
            if (container && !container.querySelector('.pss-tabs') && titleElement) {
                const tabsHTML = `
                    <div class="pss-tabs">
                        <span class="pss-tab active" data-tab="small">Small</span>
                        <span class="pss-tab" data-tab="medium">Medium</span>
                        <span class="pss-tab" data-tab="large">Large</span>
                    </div>
                    <div class="pss-tab-content" id="small"></div>
                    <div class="pss-tab-content" id="medium"></div>
                    <div class="pss-tab-content" id="large"></div>
                `;
                titleElement.insertAdjacentHTML('afterend', tabsHTML);
            }

            // Add relevant classes to elements
            container.querySelectorAll('.pss-size-guide-mobile-unit-main-container').forEach(el => {
                const spanText = el.querySelector('.pss-space-between > span')?.textContent.trim();
                if (spanText.includes('Locker') && !el.classList.contains('SMALL')) {
                    el.classList.add('SMALL');
                } else if (spanText.includes('SMALL') && !el.classList.contains('SMALL')) {
                    el.classList.add('SMALL');
                } else if (spanText.includes('MEDIUM') && !el.classList.contains('MEDIUM')) {
                    el.classList.add('MEDIUM');
                } else if (spanText.includes('LARGE') && !el.classList.contains('LARGE')) {
                    el.classList.add('LARGE');
                }
            });

            // Organize elements under corresponding tabs
            ['small', 'medium', 'large'].forEach(tabId => {
                const target = container.querySelector(`#${tabId}`);
                const elements = container.querySelectorAll(`.pss-size-guide-mobile-unit-main-container.${tabId.toUpperCase()}`);
                elements.forEach(el => {
                    if (!target.contains(el)) {
                        target.appendChild(el);
                    }
                });
            });

            // Function to switch tabs
            function showTab(tabId) {
                const tabs = container.querySelectorAll('.pss-tab');
                const tabContents = container.querySelectorAll('.pss-tab-content');

                tabs.forEach(tab => tab.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                const tabToActivate = container.querySelector(`.pss-tab[data-tab="${tabId}"]`);
                const contentToShow = container.querySelector(`#${tabId}`);

                if (tabToActivate) tabToActivate.classList.add('active');
                if (contentToShow) contentToShow.classList.add('active');
            }

            // Initialize with 'small' tab active
            showTab('small');

            // Handle tab clicks
            container.addEventListener('click', (event) => {
                if (event.target.classList.contains('pss-tab')) {
                    const tabId = event.target.getAttribute('data-tab');
                    showTab(tabId);
                }
            });
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
