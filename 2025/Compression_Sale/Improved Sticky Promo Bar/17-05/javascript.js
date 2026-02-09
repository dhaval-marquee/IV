function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-Promo-Bar')) {
        document.querySelector('body').classList.add('iv-sticky-Promo-Bar');


        const host = document.getElementById('yeps');
        const shadow = host.shadowRoot;
        const style = document.createElement('style');
        style.textContent = `
            .yeps-frame  {
                display: none;
            }
        `;

        shadow.appendChild(style);

        
        // Function to update the top position of the sticky header
        function updateHeaderOffset() {
            const promoBar = document.querySelector('.iv-sticky-Promo-Bar .site-announcement');
            const stickyHeader = document.querySelector('.iv-sticky-Promo-Bar.site-header-sticky .site-header');

            if (promoBar && stickyHeader) {
                const promoHeight = promoBar.offsetHeight;

                if (window.scrollY > 0) {
                    stickyHeader.style.setProperty('top', promoHeight + 'px', 'important');
                    stickyHeader.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    if(!document.body.classList.contains('iv-sticky-top')){
                        document.body.classList.add('iv-sticky-top');
                    }
                } else {
                    stickyHeader.style.top = '';
                    document.body.classList.remove('iv-sticky-top');
                    stickyHeader.style.boxShadow = 'none';
                }
            }
        }

        // Listen for scroll events
        if(!location.pathname.includes('/cart')) {
            updateHeaderOffset()
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(updateHeaderOffset, 20);
            });
        } else {
            window.addEventListener('scroll', () => {
                const stickyHeader = document.querySelector('.iv-sticky-Promo-Bar.site-header-sticky .site-header');
                if (window.scrollY > 0) {
                    stickyHeader.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    if(!document.body.classList.contains('iv-sticky-top')){
                        document.body.classList.add('iv-sticky-top');
                    }
                } else {
                    document.body.classList.remove('iv-sticky-top');
                    stickyHeader.style.boxShadow = 'none';
                }
            })
        }

        const cartContainer = document.querySelector('.site-header-cart');

        function addButton() {
            // Run only if screen width is 1023px or less
            const liveSearch = document.querySelector('.iv-sticky-Promo-Bar .live-search');
            if (window.innerWidth <= 1023 && cartContainer) {
                let button = document.querySelector('.search-button');
        
                // If button doesn't exist, create and append it
                if (!button) {
                    button = document.createElement('button');
                    button.setAttribute('class', 'site-header-cart--button search-button');
                    button.setAttribute('aria-label', 'Search');
        
                    button.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_37_5)">
                                <path d="M22 22L16.8276 16.8276M2 10.6207C2 5.85961 5.85961 2 
                                        10.6207 2C15.3818 2 19.2414 5.85961 19.2414 10.6207C19.2414 
                                        15.3818 15.3818 19.2414 10.6207 19.2414C5.85961 19.2414 2 
                                        15.3818 2 10.6207Z"
                                    stroke="#03448E" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_37_5">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>`;
        
                    cartContainer.appendChild(button);
        
                    // Add click event listener only once
                    button.addEventListener('click', () => {
                        const liveSearch = document.querySelector('.iv-sticky-Promo-Bar .live-search');
                        if (liveSearch) {
                            const isVisible = liveSearch.style.height === '4rem' && liveSearch.style.opacity === '1';
                            liveSearch.style.height = isVisible ? '0' : '4rem';
                            liveSearch.style.opacity = isVisible ? '0' : '1';
                        }
                    });
                }
        
                const liveSearch = document.querySelector('.iv-sticky-Promo-Bar .live-search');
        
                if (window.scrollY > 0) {
                    if (liveSearch && !liveSearch.classList.contains('iv-live-search')) {
                        liveSearch.classList.add('iv-live-search');
                        liveSearch.style.height = '0';
                        liveSearch.style.opacity = '0';
                    }
                } else {
                    if (button) button.remove();
                    if (liveSearch && liveSearch.classList.contains('iv-live-search')) {
                        liveSearch.classList.remove('iv-live-search');
                        liveSearch.style.height = '4rem';
                        liveSearch.style.opacity = '1';
                    }
                }
            } else {
                if (liveSearch && liveSearch.classList.contains('iv-live-search')) {
                    liveSearch.classList.remove('iv-live-search');
                    liveSearch.style.height = '4rem';
                    liveSearch.style.opacity = '1';
                }
            }
        }
        
        // Attach scroll listener only on screens <= 1023px

        window.addEventListener('scroll', addButton);   

        const originalDiv = document.querySelector('#shopify-section-static-announcement');
        if (originalDiv && !document.querySelector('.iv-cloned-promo-bar')) {
            const clonedDiv = originalDiv.cloneNode(true);
            clonedDiv.classList.add('iv-cloned-promo-bar');
            clonedDiv.classList.remove('site-announcement');
            originalDiv.parentNode.insertBefore(clonedDiv, originalDiv);

            setTimeout(() => {
                updateHeaderOffset
            }, 100);
        }
        
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && document.querySelector('.site-header')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);