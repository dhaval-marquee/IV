function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        // attributes: true,
        subtree: true,
    };
    var observer = new MutationObserver(function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    });
    observer.observe(target, config);
}

function loadTestCode() {
    if (!document.body.classList.contains('iv-PCP')) {
        document.body.classList.add('iv-PCP');

        // ################# Header #######################

        [{
                selector: 'nav.header__inline-menu ul.list-menu',
                isMobile: false,
                bestSellersId: 'HeaderMenu-best-sellers',
                blogId: 'HeaderMenu-blog',
                linkClass: 'header__menu-item list-menu__item link link--text focus-inset'
            },
            {
                selector: '.menu-drawer__inner-container nav > ul.menu-drawer__menu',
                isMobile: true,
                bestSellersId: 'HeaderDrawer-best-sellers',
                blogId: 'HeaderDrawer-blog',
                linkClass: 'menu-drawer__menu-item list-menu__item link link--text focus-inset'
            }
        ].forEach(menu => {
            const nav = document.querySelector(menu.selector);
            if (!nav) return;

            // Keep only Shop & Support
            [...nav.children].forEach(li => {
                const label = li.querySelector('summary')?.textContent.trim();
                li.style.display = (label === 'Shop' || label === 'Support') ? '' : 'none';
            });

            // Helper to add <li>
            const addItem = (after, id, text, href) => {
                after?.insertAdjacentHTML('afterend', `
                <li>
                    <a id="${id}" href="${href}" class="${menu.linkClass}">
                    <span>${text}</span>
                    </a>
                </li>
                `);
            };

            const findItem = txt => [...nav.children].find(li =>
                li.querySelector('summary')?.textContent.trim() === txt
            );

            addItem(findItem('Shop'), menu.bestSellersId, 'Best Sellers', '/pages/best-seller');
            addItem(findItem('Support'), menu.blogId, 'Blog', '/blogs/news');
        });

        function updateFacetPositions() {
            const header = document.querySelector('.iv-PCP sticky-header');
            const facetsForm = document.querySelector('.iv-PCP #MainContent > div > div > facet-filters-form.facets');
            const facetsContainer = document.querySelector('.iv-PCP #main-collection-filters .facets-container');

            if (!header) return;

            const headerH = header.getBoundingClientRect().height;
            let facetsFormH = 0;

            if (facetsForm) {
                facetsFormH = facetsForm.getBoundingClientRect().height;
                facetsForm.style.top = headerH + 'px';
            }

            if (facetsContainer) {
                facetsContainer.style.top = (headerH + facetsFormH) + 'px';
            }
        }

        updateFacetPositions();
        window.addEventListener('scroll', updateFacetPositions);
        window.addEventListener('resize', updateFacetPositions);



        // ############################ Read more #########################
        const heroDescription = document.querySelector('.collection-hero .collection-hero__description');

        if (heroDescription) {

            heroDescription.classList.add('iv-read-more-active');

            if (!document.querySelector('.iv-readmore')) {

                const span = document.querySelector('.collection-hero .collection-hero__description > span');
                const p = document.querySelector('.collection-hero .collection-hero__description > p');

                const target = span || p;

                if (target) {
                    target.insertAdjacentHTML(
                        'afterend',
                        `
                        <span class="iv-readmore">Read More</span>
                        <span class="iv-readless" style="cursor:pointer; display:none;">Read Less</span>
                        `
                    );
                }
            }

            const readMore = heroDescription.querySelector('.iv-readmore');
            const readLess = heroDescription.querySelector('.iv-readless');

            if (readMore && readLess) {

                readMore.addEventListener('click', () => {
                    heroDescription.classList.remove('iv-read-more-active');
                    readMore.style.display = 'none';
                    readLess.style.display = 'inline';
                });

                readLess.addEventListener('click', () => {
                    heroDescription.classList.add('iv-read-more-active');
                    readLess.style.display = 'none';
                    readMore.style.display = 'inline';
                });
            }
        }

        function initSortFilter() {

            // Prevent running again if already initialized
            if (document.querySelector(".iv-custom-sort-wrapper")) {
                return;
            }

            const sortFilters = document.querySelector('.facets-vertical-sort .facet-filters');
            const activeDesktop = document.querySelector('#FacetFiltersForm .active-facets-desktop');

            if (sortFilters && activeDesktop) {
                activeDesktop.insertAdjacentElement('afterend', sortFilters);
            }

            const verticalTitle = document.querySelector('#FacetFiltersForm #verticalTitle');
            if (verticalTitle) verticalTitle.innerText = 'FILTER & SORT';

            const removeAll = document.querySelector('#FacetsWrapperDesktop .active-facets__button-remove');
            if (removeAll) removeAll.innerText = 'Clear All';

            const selectBox = document.querySelector("#FacetsWrapperDesktop #SortBy");
            if (!selectBox) return;

            // Hide Shopify select box
            selectBox.style.display = "none";

            // MAP for renaming Shopify option labels
            const renameMap = {
                "Best selling": "Top Seller",
                "Alphabetically, A-Z": "A-Z",
                "Alphabetically, Z-A": "Z-A"
            };

            // REQUIRED DISPLAY ORDER
            const displayOrder = [
                "Top Seller",
                "A-Z",
                "Z-A",
                "Price, low to high",
                "Price, high to low",
                "Date, old to new",
                "Date, new to old",
                "Featured"
            ];

            // Convert Shopify options → standardized formatted array
            let formattedOptions = [];

            Array.from(selectBox.options).forEach(option => {
                let originalText = option.textContent.trim();
                let renamed = renameMap[originalText] ?? originalText;

                // If renameMap returned null → this option should be hidden
                if (renamed === null) return;

                formattedOptions.push({
                    label: renamed,
                    value: option.value,
                    selected: option.selected
                });
            });

            // Sort by custom order
            formattedOptions.sort((a, b) => {
                return displayOrder.indexOf(a.label) - displayOrder.indexOf(b.label);
            });

            // Build HTML
            let optionsHTML = "";
            formattedOptions.forEach(opt => {
                optionsHTML += `
                    <label class="iv-sort-option">
                        <input type="radio" name="iv-sort-radio" value="${opt.value}" ${opt.selected ? "checked" : ""}>
                        <span>${opt.label}</span>
                    </label>`;
            });

            const html = `
                <div class="iv-custom-sort-wrapper">
                    <div class="iv-sort-header">
                        <strong class="iv-sort-title">SORT BY</strong>
                        <span class="iv-sort-arrow">
                            <svg aria-hidden="true" focusable="false" class="iv-caret-icon" viewBox="0 0 10 6">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                    </div>

                    <div class="iv-custom-sort-options">
                        ${optionsHTML}
                    </div>
                </div>`;

            selectBox.insertAdjacentHTML("afterend", html);

            // RADIO CHANGE
            document.querySelectorAll("input[name='iv-sort-radio']").forEach(radio => {
                radio.addEventListener("change", function() {
                    selectBox.value = this.value;
                    selectBox.form?.submit();
                });
            });

            // COLLAPSE LOGIC
            const header = document.querySelector(".iv-sort-header");
            const list = document.querySelector(".iv-custom-sort-options");
            const arrow = document.querySelector(".iv-caret-icon");

            list.style.display = "flex"; // default open
            arrow.classList.add("iv-rotate");

            header.addEventListener("click", () => {
                const isOpen = list.style.display === "flex";
                list.style.display = isOpen ? "none" : "flex";
                arrow.classList.toggle("iv-rotate", !isOpen);
            });
        }

        initSortFilter();

        observerElm(document.body, function() {
            // Run only when SortBy becomes available AND not initialized
            if (document.querySelector("#SortBy") && !document.querySelector(".iv-custom-sort-wrapper")) {
                initSortFilter();
            }
        });

        // ################### Main Title ######################## 
        const titleMap = {
            "/collections/fly-traps": "Flying Insect Traps",
            "/collections/mouse-traps": "Rodent Traps",
            "/collections/spider": "Crawling Insect Traps",
            "/collections/cricket-cockroach-centipede": "Crawling Insect Traps",
            "/collections/vector-the-fly-light-trap-at-the-end-of-your-fly-problem": "Flying Insect Traps"
        };

        const currentPath = window.location.pathname;

        const newTitle = titleMap[currentPath];

        if (newTitle) {
            const heroTitle = document.querySelector(".collection-hero__title");

            if (heroTitle) {
                const mainTitleDiv = document.createElement("div");
                mainTitleDiv.className = "iv-main-title";
                mainTitleDiv.textContent = newTitle;
                heroTitle.insertAdjacentElement("beforebegin", mainTitleDiv);
            }
        }


        // ################### Expert Advice #####################
        const verticalForm = document.querySelector('.facets-vertical-form');
        if (verticalForm) {
            verticalForm.classList.add('iv-tabs')
            verticalForm.insertAdjacentHTML('beforeend', `<div class="iv-expert-advice-tab">Expert Advice</div>`)
        }

        const productGridSec = document.querySelector('.facets-vertical #ProductGridContainer');

        if (productGridSec) {
            productGridSec.insertAdjacentHTML('afterend', `<div class="iv-expert-advice-sec"><div class="iv-blogs-wrap"></div></div>`)
        }

        function initVerticalTabs() {

            const productTab = document.querySelector('.product-count-vertical');
            const expertTab = document.querySelector('.iv-expert-advice-tab');

            const productGrid = document.querySelector('.facets-vertical #ProductGridContainer');
            const expertSec = document.querySelector('.facets-vertical .iv-expert-advice-sec');

            if (!productTab || !expertTab || !productGrid || !expertSec) return;

            // Default: product tab active
            productTab.classList.add('iv-tab-active');
            productGrid.style.display = "block";
            expertSec.style.display = "none";

            // ---------------- product TAB CLICK ----------------
            productTab.addEventListener('click', () => {

                productTab.classList.add('iv-tab-active');
                expertTab.classList.remove('iv-tab-active');

                productGrid.style.display = "block";
                expertSec.style.display = "none";
            });

            // ---------------- expert TAB CLICK ----------------
            expertTab.addEventListener('click', () => {

                expertTab.classList.add('iv-tab-active');
                productTab.classList.remove('iv-tab-active');

                productGrid.style.display = "none";
                expertSec.style.display = "block";
            });

        }

        setTimeout(initVerticalTabs, 100);

        const page = window.location.pathname;

        // ---------------- CATEGORY MAPPING ----------------
        const categoryMap = {
            "/collections/rats-mice": [
                "mouse control tips",
                "rat control tips",
                "rodent control tips"
            ],
            "/collections/flying-insects": [
                "fly control tips",
                "mosquito control tips",
                "moth control tips"
            ],
            "/collections/fly-traps": [
                "fly control tips",
                "mosquito control tips",
                "moth control tips"
            ],
            "/collections/mouse-traps": [
                "mouse control tips",
                "rodent control tips"
            ],
            "/collections/all": [
                "mouse control tips", "rat control tips", "rodent control tips",
                "ant control tips", "seasonal pest control tips",
                "spider control tips", "fly control tips", "moth control tips",
                "mosquito control tips", "other pest control tips"
            ],
            "/collections/spider": [
                "spider control tips"
            ],
            "/collections/cricket-cockroach-centipede": [
                "other pest control tips"
            ],
            "/collections/shop": [
                "mouse control tips", "rat control tips", "rodent control tips",
                "ant control tips", "seasonal pest control tips", "spider control tips",
                "fly control tips", "moth control tips", "mosquito control tips",
                "other pest control tips"
            ],
            "/collections/vector-the-fly-light-trap-at-the-end-of-your-fly-problem": [
                "fly control tips"
            ],
            "/collections/moth-traps": [
                "moth control tips"
            ]
        };

        const allowedCategories = categoryMap[page] || [];

        // ---------------- FETCH BLOG PAGE ----------------

        fetch("https://www.catchmaster.com/blogs/news")
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                const allCards = [...doc.querySelectorAll('.all-articles-wrapper .articles-grid .article-card')];
                const matchedCards = allCards.filter(card => {
                    const categorySpan = card.querySelector(".article-content > span");
                    if (!categorySpan) return false;

                    const categoryText = categorySpan.innerText.trim();
                    return allowedCategories.some(cat => cat.toLowerCase() === categoryText.toLowerCase());
                });

                const wrap = document.querySelector(".iv-expert-advice-sec .iv-blogs-wrap");

                matchedCards.forEach(card => {
                    wrap.appendChild(card);
                });

                 // add target _blank AFTER adding cards to DOM
                wrap.querySelectorAll('.article-card a').forEach(link => {
                    link.setAttribute('target', '_blank');
                });

                // Optional: if no cards found, hide section
                if (matchedCards.length === 0) {
                    document.querySelector(".iv-expert-advice-sec").style.display = "none";
                }
            })
            .catch(err => console.error("Blog fetch error:", err));

        // ################## Product counter - 32 products (32) #################
        function updateProductCount() {
            const el = document.querySelector('#ProductCountDesktop');
            if (!el) return;

            let text = el.textContent.trim();
            let match;

            // Case 1: "XX products"
            // Example: "21 products"
            if (/^\d+\s+products$/i.test(text)) {
                match = text.match(/(\d+)/); // total = 21
                if (match) {
                    let total = match[1];
                    el.textContent = `${total} products (${total})`;
                }
                return;
            }

            // Case 2: "XX of XX products"
            // Example: "10 of 21 products"
            match = text.match(/(\d+)\s+of\s+(\d+)\s+products/i);
            if (match) {
                let current = match[1]; // 10
                let total = match[2]; // 21
                el.textContent = `${current} products (${total})`;
            }
        }

        // Run on load
        updateProductCount();

        // Optional: If your site uses AJAX filters, observe changes
        const target = document.querySelector('#ProductCountDesktop');
        if (target) {
            const observer = new MutationObserver(updateProductCount);
            observer.observe(target, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }

        if(location.href.includes('/collections/rats-mice')){
            const targetSection = document.querySelector('.iv-PCP .section-collection-list + section + section');
            const productGrids = document.querySelector('.iv-PCP main#MainContent #ProductGridContainer .collection');
    
            if (targetSection && productGrids) {
                productGrids.insertBefore(targetSection, productGrids.firstChild);
            }            
        }

        // ############# mobile grid and single #####################

        const mobileGrid = `<div class="iv-toggle-view">
                                <button class="iv-toggle-btn iv-active" data-view="grid">
                                    <span class="iv-icon-grid">
                                        <span class="iv-mini-boxs">
                                            <span></span>
                                            <span></span>
                                        </span>
                                        <span class="iv-mini-boxs">
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </span>
                                </button>
                                <button class="iv-toggle-btn" data-view="single">
                                    <span class="iv-icon-single">
                                        <span class="iv-mini-boxs iv-single-box">
                                            <span></span>
                                        </span>
                                    </span>
                                </button>
                            </div>`;

        document.querySelector('.facets-wrapper').insertAdjacentHTML('beforeend', mobileGrid);

        const toggleButtons = document.querySelectorAll('.iv-toggle-btn');
        const productGrid = document.querySelector('.product-grid-container');
        const expertAdvice = document.querySelector('.iv-expert-advice-sec');

        toggleButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // remove active class from both buttons
                toggleButtons.forEach(b => b.classList.remove('iv-active'));

                // add active class to clicked one
                this.classList.add('iv-active');

                const view = this.getAttribute('data-view');

                if (view === "single") {
                    productGrid.classList.add('iv-single-products');
                    expertAdvice.classList.add('iv-single-products');
                } else {
                    productGrid.classList.remove('iv-single-products');
                    expertAdvice.classList.remove('iv-single-products');
                }
            });
        });

        document.querySelectorAll('#FacetFiltersForm #FacetsWrapperDesktop details')
            .forEach((formDetails) => {
                if (formDetails.hasAttribute('open')) {
                    formDetails.removeAttribute('open');
                }
            });


        const mobileFacets = document.querySelector('.facets-container menu-drawer.mobile-facets__wrapper');
        if (mobileFacets) {
            mobileFacets.insertAdjacentHTML('afterend', `
                <span class="mobile-facets__open iv-mobile-filter">
                    <svg class="icon icon-filter" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
                        </svg>

                    <span class="mobile-facets__open-label button-label medium-hide large-up-hide">Filter and sort
                    </span>
                </span>`);

            const facetsForm = document.querySelector('.facets-container .facets #FacetFiltersForm');

            if (facetsForm) {
                facetsForm.insertAdjacentHTML('beforebegin', `<button type="button" class="iv-mobile-filter-close quick-add-modal__toggle" aria-label="Close">
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-close" fill="none" viewBox="0 0 18 17">
  <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
</path></svg></button><div class="iv-mobile-filter-header"> FILTER & SORT </div>`);
            }


            const mobileFilter = document.querySelector('.iv-mobile-filter');

            mobileFilter.addEventListener('click', () => {
                const facets = document.querySelector('.facets-container .facets');
                if (facets) facets.classList.add('iv-open-filters');

                document.body.classList.add('iv-mobile-open');
            });

            const mobileFilterClose = document.querySelector('.iv-mobile-filter-close');

            mobileFilterClose.addEventListener('click', () => {
                const facets = document.querySelector('.facets-container .facets');
                if (facets) facets.classList.remove('iv-open-filters');

                document.body.classList.remove('iv-mobile-open');
            });
        }

        // ############# Main products #####################
        document.querySelectorAll('.iv-PCP .quick-add-variants').forEach(box => {
            box.querySelectorAll('form button').forEach(btn => {
                const img = document.createElement('img');
                img.src = 'https://res.cloudinary.com/ignite-visibility/image/upload/v1763623380/Catchmaster/cart-icon.png';
                img.alt = 'Cart Icon';
                btn.appendChild(img);
            });
        });

        document.querySelectorAll('.iv-PCP .variant-add-to-cart-form > button').forEach(addBox => {
            if (addBox.querySelector('img')) return;
            const img = document.createElement('img');
            img.src = 'https://res.cloudinary.com/ignite-visibility/image/upload/v1763623380/Catchmaster/cart-icon.png';
            img.alt = 'Cart Icon';
            addBox.appendChild(img);
        });


        document.querySelectorAll('.iv-PCP #ProductGridContainer .variant-add-to-cart-form').forEach(form => {
            const btn = form.querySelector('button[disabled]');
            if (btn) {
                form.style.display = 'none';
            }
        });

        document.querySelectorAll('.iv-PCP #ProductGridContainer .collection > ul > li').forEach(item => {
            const badge = item.querySelector('.card__badge.right span');
            if (badge && badge.textContent.trim().toLowerCase() === 'sold out') {
                item.remove();
            }
        });

        // ############# On Monile Quick Add #####################
        document.querySelectorAll('modal-opener').forEach(opener => {
            const btn = opener.querySelector('button');
            const modalSelector = opener.getAttribute('data-modal'); 
            const modal = document.querySelector(modalSelector);

            if (!btn || !modal) return;

            btn.addEventListener('click', () => {
                modal.setAttribute('open', '');
            });
        });

        document.querySelectorAll('.quick-add-modal').forEach(modal => {
            const closeBtn = modal.querySelector('.quick-add-modal__toggle[aria-label="Close"]');
            if (!closeBtn) return;

            closeBtn.addEventListener('click', () => {
                modal.removeAttribute('open');
            });
        });

        document.addEventListener('click', (e) => {
            const atcBtn = e.target.closest('#croATC');
            if (!atcBtn) return;

            e.preventDefault();
            e.stopPropagation();

            const modal = atcBtn.closest('.cro-modal[open]');
            const activeModal = modal || document.querySelector('.cro-modal[open]');
            if (!activeModal) return;

            const addButtons = activeModal.querySelectorAll('.qa-qty-row .qa-add-btn');
            addButtons.forEach(btn => btn.click());

            activeModal.removeAttribute('open');
        });

    }
}

loadTestCode();