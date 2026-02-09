function loadTestCode() {
    if (!document.body.classList.contains('iv-dropdown')) {
        document.body.classList.add('iv-dropdown');

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

            // Add unique class if it's Flying Insect Traps
            const extraClass = item.label === 'Flying Insect Traps' ? ' iv-flying-menu' : '';

            rodentMenuHTML += `
                <li class="iv-menu${extraClass}">
                    <div class="iv-main-menu">
                        <summary id="HeaderMenu-${item.label.replace(/\s+/g, '-').toLowerCase()}" href="javascript:;" class="header__menu-item list-menu__item link link--text focus-inset">
                            <span>${item.label}</span>
                        </summary>
                    </div>
                    <div class="iv-mega-menu mega-menu__content color-background-1 gradient motion-reduce global-settings-popup">
                        <ul class="mega-menu__list page-width" role="list">
                            ${shopContent}
                        </ul>
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
            const megaMenu = flyingMenu.querySelector('.iv-mega-menu');

            if (fourthItem && megaMenu) {
                const firstUL = megaMenu.querySelector('.mega-menu__list.page-width');

                if (firstUL) {
                    const wrapperDiv = document.createElement('div');
                    wrapperDiv.className = 'iv-mega-wrapper';
                    wrapperDiv.appendChild(firstUL);

                    const newUL = document.createElement('ul');
                    newUL.className = 'mega-menu__list page-width';
                    newUL.setAttribute('role', 'list');
                    newUL.innerHTML = fourthItem.innerHTML;
                    wrapperDiv.appendChild(newUL);
                    megaMenu.appendChild(wrapperDiv);
                }
            }
        }

        // ************** Mobile ************** //
        (function loadSplide() {
            const splideCSS = document.createElement("link");
            splideCSS.rel = "stylesheet";
            splideCSS.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
            document.head.appendChild(splideCSS);

            const splideJS = document.createElement("script");
            splideJS.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";
            document.head.appendChild(splideJS);
        })();

        const menuDrawer = document.querySelector('header #menu-drawer .menu-drawer__navigation');

        const menuData = [{
                title: "Shop",
                active: true,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1761369646/Catchmaster/NavLayoutTest/NavLayoutTest.png",
                        link: "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent",
                        text: 'SHOP MAX-CATCH GLUE TRAPS'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758932388/DefiANT_v2.jpg",
                        link: "https://www.catchmaster.com/collections/ant-control-solutions",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                        title: "Products",
                        children: [{
                                name: "Products",
                                link: "/collections/shop"
                            },
                            {
                                name: "Shop All",
                                link: "/collections/shop"
                            },
                            {
                                name: "Glue Trap & Bait Refills",
                                link: "/collections/refills"
                            },
                            {
                                name: "New arrivals",
                                link: "/collections/new-arrivals"
                            },
                        ]
                    },
                    {
                        title: "Rodent Traps",
                        children: [{
                                name: "Rodent Traps",
                                link: "/collections/rats-mice"
                            },
                            {
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
                            },
                        ]
                    },
                    {
                        title: "Flying Insect Traps",
                        children: [{
                                name: "Flying Insect Traps",
                                link: "/collections/flying-insects"
                            },
                            {
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
                            },
                        ]
                    },
                    {
                        title: "Moth Traps",
                        children: [{
                                name: "Moth Traps",
                                link: "/collections/moth-traps"
                            },
                            {
                                name: "Clothes Moth Traps",
                                link: "/collections/clothes-moth-traps"
                            },
                            {
                                name: "Pantry Moth Traps",
                                link: "/collections/pantry-moth-traps"
                            }
                        ]
                    },
                    {
                        title: "Crawling Insect Traps",
                        children: [{
                                name: "Crawling Insect Traps",
                                link: "/collections/crawling-insects-arachnids"
                            },
                            {
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
                            },
                        ]
                    },
                ]
            },
            {
                title: "Best Sellers",
                active: false,
                slider: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758932388/mobile_menu_image_2.jpg",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR RODENT SOLUTIONS'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758932388/DefiANT_v2.jpg",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                        title: "Shop All Best Sellers",
                        children: [{
                            name: "Shop All Best Sellers",
                            link: "/pages/best-seller"
                        }]
                    },
                    {
                        title: "Rodent",
                        children: [{
                                name: "Rodent",
                                link: "/pages/best-seller"
                            },
                            {
                                name: "Mouse Traps",
                                link: "/pages/best-mouse-traps"
                            },
                            {
                                name: "Rat Traps",
                                link: "/pages/best-rat-traps"
                            }
                        ]
                    },
                    {
                        title: "Flying Insect",
                        children: [{
                                name: "Flying Insect",
                                link: "/pages/best-seller"
                            },
                            {
                                name: "Mosquito Traps",
                                link: "/pages/best-mosquito-traps"
                            },
                            {
                                name: "Moth Traps",
                                link: "/pages/best-moth-traps"
                            },
                        ]
                    },
                    {
                        title: "Crawling Insect",
                        children: [{
                                name: "Crawling Insect",
                                link: "/pages/best-seller"
                            },
                            {
                                name: "Ant Traps",
                                link: "/pages/best-ant-traps"
                            },
                            {
                                name: "Spider Traps",
                                link: "/pages/best-spider-traps"
                            },
                        ]
                    },
                ]
            },
            {
                title: "Support",
                active: false,
                slider: [{
                         img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758932388/mobile_menu_image_2.jpg",
                        link: "https://www.catchmaster.com/collections/rats-mice",
                        text: 'DISCOVER OUR RODENT SOLUTIONS'
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758932388/DefiANT_v2.jpg",
                        link: "https://www.catchmaster.com/collections/new-arrivals",
                        text: 'DISCOVER OUR NEW LAUNCHES'
                    },
                ],
                submenus: [{
                        title: "Pest Control Tips",
                        children: [{
                            name: "Pest Control Tips",
                            link: "/blogs/news"
                        }]
                    },
                    {
                        title: "About",
                        children: [{
                                name: "About",
                                link: "/pages/about"
                            },
                            {
                                name: "Company History",
                                link: "/pages/about"
                            },
                            {
                                name: "GLUE Co. Values",
                                link: "/pages/glue-co-values"
                            },
                            {
                                name: "Careers",
                                link: "/pages/careers"
                            },
                            {
                                name: "Satisfaction Guarantee",
                                link: "/pages/satisfaction-guarantee"
                            },
                        ]
                    },
                    {
                        title: "Contact Us",
                        children: [{
                            name: "Contact Us",
                            link: "/pages/contact"
                        }]
                    },
                    {
                        title: "Retail Partners",
                        children: [{
                                name: "Retail Partners",
                                link: "/pages/where-to-buy"
                            },
                            {
                                name: "Where to Buy",
                                link: "/pages/where-to-buy"
                            },
                        ]
                    },
                    {
                        title: "Meet Our Brands",
                        children: [{
                                name: "Meet Our Brands",
                                link: "/"
                            },
                            {
                                name: "CatchmasterGRO",
                                link: "https://www.catchmastergro.com/"
                            },
                            {
                                name: "Vector®",
                                link: "/pages/landing-page-apr-26-15-43-04"
                            },
                        ]

                    },
                ]
            },
            {
                title: "Are you a Pro?",
                active: false,
                link: "https://catchmasterpro.com/"
            }
        ];

        // Build menu HTML
        let downArrow = `<svg width="16px" height="16px" viewBox="0 0 75.80 75.80" xmlns="http://www.w3.org/2000/svg" fill="#a8a8a8" stroke="#a8a8a8" stroke-width="4.54824"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_67" data-name="Group 67" transform="translate(-798.203 -587.815)"> <path id="Path_59" data-name="Path 59" d="M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z" fill="#a8a8a8"></path> </g> </g></svg>`;

        let upArrow = `<svg width="16px" height="16px" viewBox="0 -19.04 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#a8a8a8" stroke="#a8a8a8" stroke-width="4.54818"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="7.428694"></g><g id="SVGRepo_iconCarrier"> <g id="Group_66" data-name="Group 66" transform="translate(-619.375 -560.018)"> <path id="Path_58" data-name="Path 58" d="M695.178,596.248a1.5,1.5,0,0,1-2.561,1.061l-33.56-33.557a2.53,2.53,0,0,0-3.564,0l-33.558,33.557a1.5,1.5,0,0,1-2.121-2.121l33.557-33.557a5.531,5.531,0,0,1,7.808,0l33.559,33.557A1.494,1.494,0,0,1,695.178,596.248Z" fill="a8a8a8"></path> </g> </g></svg>`;

        if (menuDrawer) {
            const html = `
            <div class="iv-menu-content">
            ${menuData.map((m, i) => `
                <div class="iv-tab-panel ${m.active ? "iv-show" : ""}" data-content="${i}">
                ${m.slider ? `
                    <div class="iv-slider-container">
                    <div class="splide iv-slider iv-slider-${i}">
                        <div class="splide__track">
                        <ul class="splide__list">
                            ${m.slider.map(s => `<li class="splide__slide"><a href="${s.link}"><img src="${s.img}" alt=""><span>${s.text}</span></a></li>`).join("")}
                        </ul>
                        </div>
                    </div>
                    <div class="iv-menu-tabs">
                        ${menuData.map((m, i) =>
                            m.title === "Are you a Pro?"
                            ? `<a href="${m.link}" class="iv-tab iv-direct-link">${m.title}</a>`
                            : `<button class="iv-tab ${m.active ? "iv-active" : ""}" data-tab="${i}">${m.title}</button>`
                        ).join("")}
                    </div>
                    <div class="iv-submenus">
                        ${m.submenus.map(sub => `
                        <div class="iv-submenu">
                            <button class="iv-submenu-toggle">${sub.title} <span class="iv-arrow">${downArrow}</span></button>
                            <div class="iv-submenu-content">
                            <ul>
                                ${sub.children.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join("")}
                            </ul>
                            </div>
                        </div>`).join("")}
                    </div>
                    </div>
                ` : (m.title === "Are you a Pro?" ? "" : `<a href="${m.link}" class="iv-direct-link">${m.title}</a>`)}
                </div>
            `).join("")}
            </div>
        `;
            menuDrawer.innerHTML = html;
        }

        // Wait for Splide script to load before initializing sliders
        const initSplides = () => {
            if (typeof Splide === "undefined") {
                setTimeout(initSplides, 100);
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

        // Tab switching
        document.addEventListener("click", e => {
            if (e.target.classList.contains("iv-tab")) {
                if (e.target.classList.contains("iv-direct-link")) return;
                document.querySelectorAll(".iv-tab").forEach(t => t.classList.remove("iv-active"));
                e.target.classList.add("iv-active");

                const idx = e.target.dataset.tab;
                document.querySelectorAll(".iv-tab-panel").forEach(p => p.classList.remove("iv-show"));
                document.querySelector(`.iv-tab-panel[data-content="${idx}"]`).classList.add("iv-show");
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
