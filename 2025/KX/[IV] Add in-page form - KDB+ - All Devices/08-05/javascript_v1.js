function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-hero-section')) {
        document.querySelector('body').classList.add('iv-hero-section');

        document.querySelector('header h1').innerText = "Get to know the world's fastest time series database and analytics platform.";
        document.querySelector('header h1 + p').innerHTML = `KDB+ powers kdb Insights portfolio and KDB.AI, together delivering time-oriented data insights and generative AI capabilities to the world’s leading enterprise organizations.`;

        const source = document.querySelector('.rich-content + .encapsulated-rich-content');
        const thumbnail = document.querySelector('.iv-hero-section header.page-banner .thumbnail');
        const originalParent = source?.parentElement;

        let placeholder = null;
        let moved = false;
        const movingClass = 'moved-to-thumbnail';

        // Helper: Add placeholder from label text
        function syncLabelToPlaceholder(container) {
            const labels = container.querySelectorAll('label[for]');
            labels.forEach(label => {
                const inputId = label.getAttribute('for');
                const input = container.querySelector(`#${inputId}`);
                if (input && !input.placeholder) {
                    input.placeholder = label.textContent.trim();
                }
            });
        }

        // Helper: Remove all placeholder attributes from inputs inside container
        function removePlaceholders(container) {
            const inputs = container.querySelectorAll('input[placeholder]');
            inputs.forEach(input => input.removeAttribute('placeholder'));
        }

        if (source && thumbnail && originalParent) {
            // Create placeholder to return it later
            placeholder = document.createElement('div');
            placeholder.style.display = 'none';
            originalParent.insertBefore(placeholder, source.nextSibling);

            document.querySelector('#input_1_15').value = 'Variant 1 demo';

            // Initial move to thumbnail
            thumbnail.appendChild(source);
            source.classList.add(movingClass);
            syncLabelToPlaceholder(source);
            moved = true;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting && moved) {
                        // Header is offscreen, move back
                        placeholder.parentNode.insertBefore(source, placeholder);
                        source.classList.remove(movingClass);
                        removePlaceholders(source);
                        document.querySelector('#input_1_15').value = 'demo';
                        moved = false;
                    } else if (entry.isIntersecting && !moved) {
                        // Header is visible again, move to thumbnail
                        thumbnail.appendChild(source);
                        source.classList.add(movingClass);
                        syncLabelToPlaceholder(source);
                        document.querySelector('#input_1_15').value = 'Variant 1 demo';
                        moved = true;
                    }
                }, {
                    root: null,
                    threshold: 0,
                }
            );

            const header = document.querySelector('.iv-hero-section header.page-banner');
            if (header) {
                observer.observe(header);
            } else {
                console.error('Header not found.');
            }
        } else {
            console.error('Required elements not found.');
        }
    }
}
var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);