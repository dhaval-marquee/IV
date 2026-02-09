function loadTestCode() {
    if (!document.body.classList.contains('iv-improved-packages')) {
        document.body.classList.add('iv-improved-packages');

        const ivCategorySection = document.querySelector('.home-collection-two .row');

        const categories = [{
                name: 'hangover',
                dataAttr: 'data-hangover',
                selector: '.home-collection-two .data-hangover'
            },
            {
                name: 'wellness',
                dataAttr: 'data-wellness',
                selector: '.home-collection-two .data-wellness'
            },
            {
                name: 'feel well',
                dataAttr: 'data-feeling-sick',
                selector: '.home-collection-two .data-feeling-sick'
            },
            {
                name: 'athletic',
                dataAttr: 'data-athletic',
                selector: '.home-collection-two .data-athletic'
            },
            {
                name: 'beauty',
                dataAttr: 'data-beauty',
                selector: '.home-collection-two .data-beauty'
            }
        ];

        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'col-12 iv-category-section';
        categories.forEach(category => {
            const categoryBlock = document.createElement('div');
            const categoryClassName = `row iv-category-${category.name.replace(/\s+/g, '-').toLowerCase()}`;
            categoryBlock.classList.add('iv-category-block');
            categoryBlock.setAttribute(category.dataAttr, 'true');

            const headerDiv = document.createElement('div');
            const headerCategoryClass = `iv-${category.name.replace(/\s+/g, '-').toLowerCase()}-section`;
            headerDiv.classList.add('iv-category-header', headerCategoryClass);

            const ivCategoryTitle = document.createElement('span');
            ivCategoryTitle.className = 'iv-category-title';
            ivCategoryTitle.textContent = category.name;

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

            // Store references
            category.button = toggleButton;
            category.titleElement = ivCategoryTitle;
            category.headerElement = headerDiv;
            category.contentElements = elements;
            category.blockElement = categoryBlock;
            category.visible = false;
            category.buttonTextSpan = buttonTextSpan;

            toggleButton.addEventListener('click', () => {
                categories.forEach(cat => {
                    if (cat !== category) {
                        cat.contentElements.forEach(el => el.style.display = 'none');
                        cat.headerElement.classList.remove('iv-sticky-header');
                        cat.visible = false;
                        cat.titleElement.classList.remove('iv-active-category');
                        cat.buttonTextSpan.innerHTML = `View Packages <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#232729" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.146 12.354a.5.5 0 0 1 0-.708L12.293 8.5H1.5a.5.5 0 0 1 0-1h10.793L9.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/></svg>`;
                    }
                });

                const isShowing = !category.visible;

                category.contentElements.forEach(el => el.style.display = isShowing ? 'block' : 'none');
                category.titleElement.classList.toggle('iv-active-category', isShowing);
                category.visible = isShowing;

                const headerMobile = document.querySelector('#header-mobile');
                const headerContent = document.querySelector('#header-content');
                let headerHeight = 0;
                if (headerMobile && getComputedStyle(headerMobile).display !== 'none') {
                    headerHeight = headerMobile.offsetHeight;
                } else if (headerContent && getComputedStyle(headerContent).display !== 'none') {
                    headerHeight = headerContent.offsetHeight;
                }

                category.headerOffset = headerHeight;

                if (isShowing) {
                    category.headerElement.classList.add('iv-sticky-header');
                    category.headerElement.style.top = `${headerHeight}px`;
                    category.buttonTextSpan.innerHTML = 'Hide Packages';

                    const topPos = category.blockElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: topPos,
                        behavior: 'smooth'
                    });
                } else {
                    category.headerElement.classList.remove('iv-sticky-header');
                    category.headerElement.style.top = '';
                    category.buttonTextSpan.innerHTML = `View Packages <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#232729" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.146 12.354a.5.5 0 0 1 0-.708L12.293 8.5H1.5a.5.5 0 0 1 0-1h10.793L9.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/></svg>`;

                    const categorySectionTop = document.querySelector('.iv-category-section')?.getBoundingClientRect().top + window.pageYOffset - category.headerOffset - 40;
                    window.scrollTo({
                        top: categorySectionTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        ivCategorySection?.prepend(wrapperDiv);


        window.addEventListener('scroll', () => {
            categories.forEach(category => {
                if (!category.visible) return;
                const blockRect = category.blockElement.getBoundingClientRect();
                const header = category.headerElement;
                const headerHeight = category.headerOffset || 0;
                const blockTop = blockRect.top;
                const blockBottom = blockRect.bottom;

                // Remove sticky if:
                // - Bottom of block is above sticky threshold
                // - OR top of block is below viewport (when scrolling up)
                if (blockBottom <= headerHeight || blockTop >= headerHeight) {
                    header.classList.remove('iv-sticky-header');
                    header.style.top = '';
                } else {
                    // Ensure sticky stays while within range
                    if (!header.classList.contains('iv-sticky-header')) {
                        header.classList.add('iv-sticky-header');
                    }
                }
            });
        });


    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 1000);