function loadTestCode() {
    if (!document.body.classList.contains('iv-improved-packages')) {
        document.body.classList.add('iv-improved-packages');

        const ivCategorySection = document.querySelector('.home-collection-two .row');

        const categories = [
            { name: 'hangover', dataAttr: 'data-hangover', selector: '.home-collection-two .data-hangover' },
            { name: 'wellness', dataAttr: 'data-wellness', selector: '.home-collection-two .data-wellness' },
            { name: 'feel well', dataAttr: 'data-feeling-sick', selector: '.home-collection-two .data-feeling-sick' },
            { name: 'athletic', dataAttr: 'data-athletic', selector: '.home-collection-two .data-athletic' },
            { name: 'beauty', dataAttr: 'data-beauty', selector: '.home-collection-two .data-beauty' }
        ];

        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'col-12 iv-category-section';

        categories.forEach(category => {
            const categoryBlock = document.createElement('div');
            const categoryClassName = `row iv-category-${category.name.replace(/\s+/g, '-').toLowerCase()}`;
            categoryBlock.classList.add('iv-category-block');
            categoryBlock.setAttribute(category.dataAttr, 'true');

            // Header
            const headerDiv = document.createElement('div');
            const headerCategoryClass = `iv-${category.name.replace(/\s+/g, '-').toLowerCase()}-section`;
            headerDiv.classList.add('iv-category-header', headerCategoryClass);

            const ivCategoryTitle = document.createElement('span');
            ivCategoryTitle.className = 'iv-category-title';
            ivCategoryTitle.textContent = category.name;

            // Button and span wrapper
            const toggleButton = document.createElement('button');
            toggleButton.className = 'iv-category-button';

            const buttonTextSpan = document.createElement('span');
            buttonTextSpan.innerHTML = `View Packages <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#232729" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.146 12.354a.5.5 0 0 1 0-.708L12.293 8.5H1.5a.5.5 0 0 1 0-1h10.793L9.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/></svg>`;
            toggleButton.appendChild(buttonTextSpan);

            headerDiv.appendChild(ivCategoryTitle);
            headerDiv.appendChild(toggleButton);

            const categoryContentWrapper = document.createElement('div');
            categoryContentWrapper.className = categoryClassName;

            const elements = document.querySelectorAll(category.selector);
            elements.forEach(el => {
                el.style.display = 'none';
                categoryContentWrapper.appendChild(el);
            });

            categoryBlock.appendChild(headerDiv);
            categoryBlock.appendChild(categoryContentWrapper);
            wrapperDiv.appendChild(categoryBlock);

            // Store references for later
            category.button = toggleButton;
            category.titleElement = ivCategoryTitle;
            category.contentElements = elements;
            category.buttonTextSpan = buttonTextSpan;
            category.visible = false;
            
            toggleButton.addEventListener('click', () => {
                categories.forEach(cat => {
                    const isCurrent = cat === category;
                    
                    cat.contentElements.forEach(el => {
                        el.style.display = isCurrent && !cat.visible ? 'block' : 'none';
                    });
                    
                    cat.buttonTextSpan.innerHTML = isCurrent && !cat.visible
                    ? 'Hide Packages'
                    : `View Packages <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#232729" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.146 12.354a.5.5 0 0 1 0-.708L12.293 8.5H1.5a.5.5 0 0 1 0-1h10.793L9.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/></svg>`;
                    
                    cat.titleElement.classList.toggle('iv-active-category', isCurrent && !cat.visible);
                    cat.visible = isCurrent ? !cat.visible : false;
                    
                    // Scroll to current category when showing
                    if (isCurrent && cat.visible) {
                        const headerMobile = document.querySelector('#header-mobile');
                        const headerContent = document.querySelector('#header-content');
                        let headerHeight = 0;
                        if (headerMobile && getComputedStyle(headerMobile).display !== 'none') {
                            headerHeight = headerMobile.offsetHeight;
                        } else if (headerContent && getComputedStyle(headerContent).display !== 'none') {
                            headerHeight = headerContent.offsetHeight;
                        }

                        const topPos = categoryBlock.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        window.scrollTo({ top: topPos, behavior: 'smooth' });
                    }
                });
            });

        });

        ivCategorySection.prepend(wrapperDiv);
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);