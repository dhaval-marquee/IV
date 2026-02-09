function loadTestCode() {
    if (!document.body.classList.contains('iv-dropdown')) {
        document.body.classList.add('iv-dropdown');
        document.body.classList.add('iv-dropdown-v2');

        // ************** Desktop ************** //

        // Arrow SVG
        const arrowCode = `<svg aria-hidden="true" focusable="false" class="icon icon-caret" viewBox="0 0 10 6">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor"></path>
        </svg>`;

        // Define menu items with selectors and labels
        const menuItems = [{
                label: 'Rodent Traps',
                selector: 'li:nth-child(2)'
            },
            {
                label: 'Flying Insect Traps',
                selector: 'li:nth-child(3)'
            },
            {
                label: 'Crawling Insect Traps',
                selector: 'li:nth-child(5)'
            },
        ];

        let rodentMenuHTML = '';
        menuItems.forEach(item => {
            const shopContent = document.querySelector(`#MegaMenu-Content-1 .mega-menu__list > ${item.selector}`).innerHTML;
            const extraClass = item.label === 'Flying Insect Traps' ? ' iv-flying-menu' : '';

            rodentMenuHTML += `
                <li class="iv-menu${extraClass}">
                    <div class="iv-main-menu">
                        <summary id="HeaderMenu-${item.label.replace(/\s+/g, '-').toLowerCase()}" href="javascript:;" class="header__menu-item list-menu__item link link--text focus-inset">
                            <span>${item.label}</span>
                        </summary>
                    </div>
                    <div class="iv-mega-menu mega-menu__content color-background-1 gradient motion-reduce global-settings-popup">
                        <div class="mega-menu__list page-width iv-mega-product">
                            <ul class="" role="list">
                                ${shopContent}
                            </ul>
                        </div>
                    </div>
                </li>`;
        });

        // Insert generated menus after the second li
        const listItemsMenu = document.querySelectorAll('nav.header__inline-menu .list-menu > li');
        if (listItemsMenu.length >= 2) {
            listItemsMenu[1].insertAdjacentHTML('afterend', rodentMenuHTML);
        }

        // Insert arrow inside each new menu
        document.querySelectorAll('.iv-menu > .iv-main-menu').forEach(arrow => {
            arrow.insertAdjacentHTML('afterbegin', arrowCode);
        });

        // Add hover and click behavior ensuring only one menu is open
        const ivMenus = document.querySelectorAll('.iv-menu');

        ivMenus.forEach(ivMenu => {
            // Hover behavior
            ivMenu.addEventListener('mouseenter', () => {
                ivMenus.forEach(menu => {
                    if (menu !== ivMenu) menu.removeAttribute('open');
                });
                ivMenu.setAttribute('open', 'true');
            });

            ivMenu.addEventListener('mouseleave', () => {
                ivMenu.removeAttribute('open');
            });

            // Click behavior
            const mainMenu = ivMenu.querySelector('.iv-main-menu');
            if (mainMenu) {
                mainMenu.addEventListener('click', (e) => {
                    e.stopPropagation();
                    ivMenus.forEach(menu => {
                        if (menu !== ivMenu) menu.removeAttribute('open');
                    });

                    const isOpen = ivMenu.hasAttribute('open');
                    if (isOpen) {
                        ivMenu.removeAttribute('open');
                    } else {
                        ivMenu.setAttribute('open', 'true');
                    }
                });
            }
        });

        // Optional: close menus if clicked outside
        document.addEventListener('click', () => {
            ivMenus.forEach(menu => menu.removeAttribute('open'));
        });

        // Submenu Top
        function updateMegaMenuPosition() {
            const header = document.querySelector('header.header');
            const megaMenus = document.querySelectorAll('.iv-dropdown .iv-mega-menu');

            if (header) {
                const headerHeight = header.offsetHeight;
                const topPosition = headerHeight + 'px';

                megaMenus.forEach(menu => {
                    menu.style.top = topPosition;
                });
            }
        }

        window.addEventListener('resize', updateMegaMenuPosition);
        window.addEventListener('scroll', updateMegaMenuPosition);
        updateMegaMenuPosition();

        // for Flying Insect Traps (li:nth-child(4))
        const flyingMenu = Array.from(document.querySelectorAll('.iv-menu')).find(menu =>
            menu.querySelector('summary span')?.textContent.trim() === 'Flying Insect Traps'
        );

        if (flyingMenu) {
            const fourthItem = document.querySelector('#MegaMenu-Content-1 .mega-menu__list > li:nth-child(4)');
            const megaMenuList = flyingMenu.querySelector('.iv-mega-menu > .mega-menu__list');

            if (fourthItem && megaMenuList) {
                const newUL = document.createElement('ul');
                newUL.setAttribute('role', 'list');
                newUL.innerHTML = fourthItem.innerHTML;

                const existingUL = megaMenuList.querySelector('ul');

                if (existingUL) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'iv-mega-wrapper';
                    wrapper.appendChild(existingUL);
                    wrapper.appendChild(newUL);
                    megaMenuList.innerHTML = '';
                    megaMenuList.appendChild(wrapper);
                }
            }
        }



        // ================================
        // Append Best Sellers into each mega menu
        // ================================
        const bestSellers = {
            "Rodent Traps": [{
                    url: "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent",
                    title: "Max-Catch Non-Toxic Scented Glue Traps",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-36MAX-scented-Mouse-Trap-2600x2600.jpg",
                    price: "From $23.49 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/rat-mouse-snake-insect-sticky-glue-trays-indoors",
                    title: "Rat, Mouse & Insect Glue Traps",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-402-AM-3_402_6-Pack.jpg?v=1757689233&width=990",
                    price: "From $15.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/jumbo-glue-trays-for-larger-rats",
                    title: "Jumbo Glue Traps for Large Rodents and Other Pests",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-1_7b915c8f-8672-4cee-92ae-211f7b99df01.jpg?v=1757690813&width=990",
                    price: "From $41.49 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/pro-series-multi-catch-mouse-trap-glue-board",
                    title: "Pro Series Multi-Catch Mouse Trap & Glue Board Traps",
                    img: "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-multicatch_hero_606-AM-3E.webp?v=1702323157&width=990",
                    price: "From $31.99 USD"
                }
            ],
            "Flying Insect Traps": [{
                    url: "https://www.catchmaster.com/products/fly-window-traps",
                    title: "Fly Window Strip Traps",
                    img: "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B001QBPP66_1.webp?v=1746123575&width=990",
                    price: "From $10.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/pro-series-bulk-disposable-fly-bag-trap",
                    title: "PRO Series Outdoor Fly Bag Trap With Food-Based Lure",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-Fly_Bag_New_Branding_1_2pack.jpg?v=1750181905&width=990",
                    price: "From $12.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/scented-bug-fly-ribbon",
                    title: "Scented Fly & Bug Ribbon Traps",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-9144-AM-20E-PDP-Image-ONLY-20250716.jpg?v=1753481603&width=990",
                    price: "From $12.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/double-sided-yellow-sticky-card-insect-trap",
                    title: `3"x5" Double-Sided Yellow Sticky Card Insect Trap`,
                    img: "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-980-Y_1.jpg?v=1730903922&width=990",
                    price: "From $31.99 USD"
                }
            ],
            "Crawling Insect Traps": [{
                    url: "https://www.catchmaster.com/products/catchmaster-brown-recluse-spider-trap",
                    title: "Brown Recluse Spider Glue Traps",
                    img: "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B0B2C4DXW2_1.webp?v=1702323677&width=990",
                    price: "From $14.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/spider-glue-trap",
                    title: "Spider-Patterned Glue Traps",
                    img: "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B08PC9R71X_1.webp?v=1702323719&width=990",
                    price: "From $11.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/sticky-mouse-traps-indoor-home-bulk-75",
                    title: "Mouse & Insect Glue Board Traps",
                    img: "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-PDP-75M-AM-75-Hero_Image-PDP_ONLY-Image-20250723_0a8ef1c3-7338-4321-b69d-95e73c12acf7.jpg",
                    price: "From $31.99 USD"
                },
                {
                    url: "https://www.catchmaster.com/products/catchmaster-xl-giant-crawling-insect-glue-traps",
                    title: "XL Giant Centipede, Cockroach & Cricket Insect Glue Traps",
                    img: "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-723-am-20e_1.jpg",
                    price: "From $30.99 USD"
                }
            ]
        };

        document.querySelectorAll('.iv-menu').forEach(menu => {
            const label = menu.querySelector('.iv-main-menu span')?.textContent.trim();
            const megaMenu = menu.querySelector('.iv-mega-product');

            if (label && megaMenu && bestSellers[label]) {
                const bestSellerHTML = `
                <div class="iv-best-sellers">
                    <h4>Best Sellers</h4>
                    <div class="iv-products">
                        ${bestSellers[label]
                            .map(
                                p => `
                                <a href="${p.url}" class="iv-product" target="_blank">
                                    <div class="iv-product-thumb">
                                        <img src="${p.img}" alt="${p.title}">
                                    </div>
                                    <h5 class="iv-title">${p.title}</h5>
                                    <span class="iv-price">${p.price}</span>
                                </a>`
                            )
                            .join("")}
                    </div>
                </div>
                `;
                megaMenu.insertAdjacentHTML("beforeend", bestSellerHTML);
            }
        });

        // ************** Mobile ************** //
        const menuDrawer = document.querySelector('header #menu-drawer .menu-drawer__navigation');

        const menuData = [{
                title: "Rodent",
                active: true,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image1.png",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image2.png",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                    children: [{
                            name: "Mouse Traps",
                            link: "/collections/mouse-traps"
                        },
                        {
                            name: "Rat Traps",
                            link: "/collections/rat-traps"
                        },
                        {
                            name: "Rodent Snap Traps",
                            link: "/collections/instant-kill-snap-traps"
                        }
                    ]
                }]
            },
            {
                title: "Flying Insect",
                active: false,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image1.png",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image2.png",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                    children: [{
                            name: "Fly Traps",
                            link: "/collections/fly-traps"
                        },
                        {
                            name: "Gnat Traps",
                            link: "/collections/gnat-traps"
                        },
                        {
                            name: "Mosquito Traps",
                            link: "/collections/mosquito"
                        },
                        {
                            name: "Yellow Jacket & Wasp Traps",
                            link: "/collections/yellow-jacket"
                        },
                        {
                            name: "Vector™ Fly Light Traps",
                            link: "/collections/vector-the-fly-light-trap-at-the-end-of-your-fly-problem"
                        },
                        {
                            name: "Tree Insect Traps",
                            link: "/collections/tree-insects"
                        },
                        {
                            name: "Crop Insect Traps",
                            link: "/collections/crop-insects"
                        },
                        {
                            name: "Japanese Beetle Traps",
                            link: "/collections/japanese-beetle"
                        }
                    ]
                }]
            },
            {
                title: "Moth",
                active: false,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image1.png",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image2.png",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                    children: [{
                            name: "Clothes Moth Traps",
                            link: "/collections/clothes-moth-traps"
                        },
                        {
                            name: "Pantry Moth Traps",
                            link: "/collections/pantry-moth-traps"
                        }
                    ]
                }]
            },
            {
                title: "Crawling Insect",
                active: false,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image1.png",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758881747/Catchmaster/RevampNavigation/large-image2.png",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                    children: [{
                            name: "Ant Traps",
                            link: "/collections/ant-control-solutions"
                        },
                        {
                            name: "Cockroach Traps",
                            link: "/collections/cricket-cockroach-centipede"
                        },
                        {
                            name: "Centipede Traps",
                            link: "/collections/centipede-traps"
                        },
                        {
                            name: "Cricket Traps",
                            link: "/collections/best-glue-traps-for-crickets"
                        },
                        {
                            name: "Spider Traps",
                            link: "/collections/spider"
                        },
                        {
                            name: "Scorpion Traps",
                            link: "/collections/scorpion"
                        }
                    ]
                }]
            }
        ];

        let downArrow = `<svg width="16px" height="16px" viewBox="0 0 75.80 75.80" xmlns="http://www.w3.org/2000/svg" fill="#a8a8a8" stroke="#a8a8a8" stroke-width="4.54824"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_67" data-name="Group 67" transform="translate(-798.203 -587.815)"> <path id="Path_59" data-name="Path 59" d="M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z" fill="#a8a8a8"></path> </g> </g></svg>`;

        let upArrow = `<svg width="16px" height="16px" viewBox="0 -19.04 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#a8a8a8" stroke="#a8a8a8" stroke-width="4.54818"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="7.428694"></g><g id="SVGRepo_iconCarrier"> <g id="Group_66" data-name="Group 66" transform="translate(-619.375 -560.018)"> <path id="Path_58" data-name="Path 58" d="M695.178,596.248a1.5,1.5,0,0,1-2.561,1.061l-33.56-33.557a2.53,2.53,0,0,0-3.564,0l-33.558,33.557a1.5,1.5,0,0,1-2.121-2.121l33.557-33.557a5.531,5.531,0,0,1,7.808,0l33.559,33.557A1.494,1.494,0,0,1,695.178,596.248Z" fill="a8a8a8"></path> </g> </g></svg>`;

        // Static sections
        const staticSections = `
        <div class="iv-submenus">
            <div class="iv-submenu">
                <button class="iv-submenu-toggle">Best Sellers <span class="iv-arrow">${downArrow}</span></button>
                <div class="iv-submenu-content iv-static-section">
                    <ul>
                        <li>
                            <a href="/pages/best-seller">Shop All Best Sellers</a>
                        </li>
                        <li>
                            <a href="/pages/best-seller">Rodent</a>
                            <ul>
                                <li><a href="/pages/best-mouse-traps">Mouse Traps</a></li>
                                <li><a href="/pages/best-rat-traps">Rat Traps</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/pages/best-seller">Flying Insect</a>
                            <ul>
                                <li><a href="/pages/best-mosquito-traps">Mosquito Traps</a></li>
                                <li><a href="/pages/best-moth-traps">Moth Traps</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/pages/best-seller">Crawling Insect</a>
                            <ul>
                                <li><a href="/pages/best-ant-traps">Ant Traps</a></li>
                                <li><a href="/pages/best-spider-traps">Spider Traps</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="iv-submenu">
                <button class="iv-submenu-toggle">Support <span class="iv-arrow">${downArrow}</span></button>
                <div class="iv-submenu-content iv-static-section">
                    <ul>
                        <li><a href="/blogs/news">Pest Control Tips</a></li>
                        <li>
                            <a href="/pages/about">About</a>
                            <ul>
                                <li><a href="/pages/about">Company History</a></li>
                                <li><a href="/pages/glue-co-values">GLUE Co. Values</a></li>
                                <li><a href="/pages/careers">Careers</a></li>
                                <li><a href="/pages/satisfaction-guarantee">Satisfaction Guarantee</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="/pages/contact">Contact Us</a></li>
                        <li>
                            <a href="/pages/where-to-buy">Retail Partners</a>
                            <ul>
                                <li><a href="/pages/where-to-buy">Where to Buy</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">Meet Our Brands</a>
                            <ul>
                            <li><a href="https://www.catchmastergro.com/">CatchmasterGRO</a></li>
                            <li><a href="/pages/landing-page-apr-26-15-43-04">Vector®</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="https://catchmasterpro.com/" class="iv-direct-link iv-submenu-toggle">Are you a Pro?</a>
        </div>`;

        if (menuDrawer) {
            let html = `
        <div class="iv-menu-tabs">
            ${menuData.map((m, i) =>
                `<button class="iv-tab ${m.active ? "iv-active" : ""}" data-tab="${i}">${m.title}</button>`
            ).join("")}
        </div>
        <div class="iv-menu-content">
            ${menuData.map((m, i) => `
                <div class="iv-tab-panel ${m.active ? "iv-show" : ""}" data-content="${i}">
                    <div class="iv-slider-container">
                        <div class="splide iv-slider iv-slider-${i}">
                            <div class="splide__track">
                                <ul class="splide__list">
                                    ${m.slider.map(s => `<li class="splide__slide"><a href="${s.link}"><img src="${s.img}" alt=""><span>${s.text}</span></a></li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="iv-submenus">
                        ${m.submenus.map(sub => `
                            <div class="iv-submenu">
                                <div class="iv-submenu-content iv-open">
                                    <ul>
                                        ${sub.children.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join("")}
                                    </ul>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                    ${staticSections}
                </div>
            `).join("")}
        </div>`;
            menuDrawer.innerHTML = html;
        }

        // Load Splide dynamically
        (function loadSplide() {
            const splideCSS = document.createElement("link");
            splideCSS.rel = "stylesheet";
            splideCSS.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
            document.head.appendChild(splideCSS);

            const splideJS = document.createElement("script");
            splideJS.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";
            document.head.appendChild(splideJS);
        })();

        // Initialize all sliders once Splide is ready
        const initSplides = () => {
            if (typeof Splide === "undefined") {
                setTimeout(initSplides, 100); // Retry until Splide is loaded
                return;
            }
            document.querySelectorAll(".iv-slider").forEach(slider => {
                new Splide(slider, {
                    perPage: 1,
                    pagination: false,
                    padding: {
                        left: 0,
                        right: 10
                    },
                    arrows: false
                }).mount();
            });
        };
        initSplides();

        // Tab + dropdown toggle stays same
        document.addEventListener("click", e => {
            if (e.target.classList.contains("iv-tab")) {
                document.querySelectorAll(".iv-tab").forEach(t => t.classList.remove("iv-active"));
                e.target.classList.add("iv-active");
                const idx = e.target.dataset.tab;
                document.querySelectorAll(".iv-tab-panel").forEach(p => p.classList.remove("iv-show"));
                const panel = document.querySelector(`.iv-tab-panel[data-content="${idx}"]`);
                panel.classList.add("iv-show");
            }

            if (e.target.classList.contains("iv-submenu-toggle")) {
                const content = e.target.nextElementSibling;
                const arrow = e.target.querySelector(".iv-arrow");
                content.classList.toggle("iv-open");
                arrow.innerHTML = content.classList.contains("iv-open") ? upArrow : downArrow;
            }
        });

    }
}

loadTestCode();