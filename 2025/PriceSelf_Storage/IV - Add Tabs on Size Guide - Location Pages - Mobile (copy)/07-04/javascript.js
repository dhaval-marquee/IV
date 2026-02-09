function loadTestCode() {
    if (!document.body.classList.contains('iv-form')) {
        document.body.classList.add('iv-form');

        document.addEventListener('click', function (event) {
            const sizeButton = event.target.closest('.size-guide-mobile');
            if (sizeButton) {
                handleSizeGuideClick(sizeButton);
            }
        });
    }

    function handleSizeGuideClick(sizeButton) {
        const card = sizeButton.closest('.pss-unit-list__item-card');

        // const waitContainer = setInterval(() => {
            const container = card.querySelector('.pss-unit-list__size-guide-mobile-container');
            if (container) {
                // clearInterval(waitContainer);

                // const waitTitle = setInterval(() => {
                    const titleElement = container.querySelector('.pss-size-guide-mobile-title');
                    if (titleElement) {
                        // clearInterval(waitTitle);

                        // Remove existing tabs and close button to reinitialize
                        container.querySelectorAll('.pss-tabs, .pss-tab-content, .size-guide-x').forEach(el => el.remove());

                        // Detect active size from title
                        let activeSize = 'small';
                        const titleText = card.querySelector('.pss-item-card-holder-left-title')?.textContent.toLowerCase() || '';
                        if (titleText.includes('medium')) activeSize = 'medium';
                        else if (titleText.includes('large')) activeSize = 'large';

                        // Insert tabs and containers
                        const tabsHTML = `
                            <div class="pss-tabs">
                                <span class="pss-tab" data-tab="small">Small</span>
                                <span class="pss-tab" data-tab="medium">Medium</span>
                                <span class="pss-tab" data-tab="large">Large</span>
                            </div>
                            <div class="pss-tab-content" id="small"></div>
                            <div class="pss-tab-content" id="medium"></div>
                            <div class="pss-tab-content" id="large"></div>
                        `;
                        titleElement.insertAdjacentHTML('afterend', tabsHTML);
                        titleElement.insertAdjacentHTML('beforebegin', '<a class="size-guide-x" href="javascript:;">x</a>');

                        // Close button
                        const closeButton = container.querySelector('.size-guide-x');
                        if (closeButton) {
                            closeButton.addEventListener('click', () => sizeButton.click());
                        }

                        // Classify unit containers
                        container.querySelectorAll('.pss-size-guide-mobile-unit-main-container').forEach(el => {
                            const label = el.querySelector('.pss-space-between > span')?.textContent.toLowerCase();
                            el.classList.remove('SMALL', 'MEDIUM', 'LARGE'); // reset first
                            if (label?.includes('locker') || label?.includes('small')) el.classList.add('SMALL');
                            else if (label?.includes('medium')) el.classList.add('MEDIUM');
                            else if (label?.includes('large')) el.classList.add('LARGE');
                        });

                        // Move elements to respective tab containers
                        ['small', 'medium', 'large'].forEach(tab => {
                            const tabDiv = container.querySelector(`#${tab}`);
                            const items = container.querySelectorAll(`.pss-size-guide-mobile-unit-main-container.${tab.toUpperCase()}`);
                            items.forEach(item => tabDiv.appendChild(item));
                        });

                        // Tab switch handler
                        function showTab(tabId) {
                            container.querySelectorAll('.pss-tab').forEach(t => t.classList.remove('active'));
                            container.querySelectorAll('.pss-tab-content').forEach(tc => tc.classList.remove('active'));

                            container.querySelector(`.pss-tab[data-tab="${tabId}"]`)?.classList.add('active');
                            container.querySelector(`#${tabId}`)?.classList.add('active');
                        }

                        // Initial tab
                        showTab(activeSize);

                        // Tab click events
                        container.querySelectorAll('.pss-tab').forEach(tab => {
                            tab.addEventListener('click', () => {
                                const tabId = tab.getAttribute('data-tab');
                                showTab(tabId);
                            });
                        });
                    }
                // }, 200);
            }
        // }, 300);
    }
}

// Init once DOM is ready
const waitForBody = setInterval(() => {
    if (document.body && document.querySelectorAll('.size-guide-mobile').length > 0) {
        clearInterval(waitForBody);
        loadTestCode();
    }
}, 100);
