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
            rodentMenuHTML += `
                <li class="iv-menu">
                    <div class="iv-main-menu">
                        <summary id="HeaderMenu-rodent-traps" href="javascript:;" class="header__menu-item list-menu__item link link--text focus-inset">
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

            ivMenu.addEventListener('mouseenter', () => {
                ivMenus.forEach(menu => {
                    if (menu !== ivMenu) menu.removeAttribute('open');
                });
                ivMenu.setAttribute('open', 'true');
            });

            ivMenu.addEventListener('mouseleave', () => {
                ivMenu.removeAttribute('open');
            });

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

        document.addEventListener('click', (e) => {
            ivMenus.forEach(menu => {
                if (!menu.contains(e.target)) {
                    menu.removeAttribute('open');
                }
            });
        });


        // Submenu Top
        let isInitialLoad = true;

        function updateMegaMenuPosition() {
            const header = document.querySelector('header.header');
            const megaMenus = document.querySelectorAll('.iv-dropdown .iv-mega-menu');

            if (header) {
                const offset = isInitialLoad ? 28 : 20;
                const topPosition = (header.offsetHeight - offset) + 'px';

                megaMenus.forEach(menu => {
                    menu.style.top = topPosition;
                });

                isInitialLoad = false;
            }
        }

        window.addEventListener('resize', updateMegaMenuPosition);
        window.addEventListener('scroll', updateMegaMenuPosition);
        document.addEventListener('DOMContentLoaded', updateMegaMenuPosition);




        // ************** Mobile ************** //

        const rightArrow = `<svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
        </svg>`;

        // Define menu items with their content
        const menuDrawerItems = [
            { title: "Rodent Traps", content: document.querySelector('.menu-drawer #childlink-rodent-traps').innerHTML },
            { title: "Flying Insect Traps", content: document.querySelector('.menu-drawer #childlink-flying-insect-traps').innerHTML },
            { title: "Crawling Insect Traps", content: document.querySelector('.menu-drawer #childlink-crawling-insect-traps').innerHTML },
        ];

        // Generate HTML dynamically
        let ivMenudrawer = '';
        menuDrawerItems.forEach((item, index) => {
            ivMenudrawer += `
            <li class="iv-menu-drawer">
                <details id="Details-menu-drawer-menu-item-${index + 2}">
                    <summary id="HeaderDrawer-shop-${index + 1}" class="menu-drawer__menu-item list-menu__item link link--text focus-inset" role="button" aria-expanded="false" aria-controls="link-shop-${index + 1}">
                        ${item.title}
                        ${rightArrow}
                    </summary>
                    <div id="link-shop-${index + 1}" class="menu-drawer__submenu has-submenu gradient motion-reduce" tabindex="-1">
                        <div class="menu-drawer__inner-submenu">
                            ${item.content}
                        </div>
                    </div>
                </details>
            </li>`;
        });
        document.querySelector('.menu-drawer__navigation > .menu-drawer__menu > li:nth-child(2)').insertAdjacentHTML('afterend', ivMenudrawer);


        // Add "submenu-open" and "menu-opening" on clicking 
        document.querySelectorAll('.iv-menu-drawer details > summary').forEach(summary => {
            summary.addEventListener('click', (e) => {
                e.preventDefault();

                const menuDrawerMenu = document.querySelector('.menu-drawer__menu');
                const details = summary.closest('details');

                const isOpen = details.hasAttribute('open');

                // Toggle manually
                if (isOpen) {
                    details.removeAttribute('open');
                    details.classList.remove('menu-opening');
                    if (menuDrawerMenu) menuDrawerMenu.classList.remove('submenu-open');
                } else {
                    details.setAttribute('open', '');
                    details.classList.add('menu-opening');
                    if (menuDrawerMenu) menuDrawerMenu.classList.add('submenu-open');
                }
            });
        });

        // Close button logic
        document.querySelectorAll('.menu-drawer__close-button').forEach(closeButton => {
            closeButton.addEventListener('click', () => {
                const menuDrawerMenu = document.querySelector('.menu-drawer__menu');
                const openDetails = document.querySelector('.iv-menu-drawer details.menu-opening');
                const submenu = openDetails?.querySelector('.menu-drawer__submenu');

                if (menuDrawerMenu) menuDrawerMenu.classList.remove('submenu-open');

                if (openDetails && submenu) {
                    submenu.style.transform = 'translateX(87.4025%)';
                    submenu.style.visibility = 'visible';

                    const handleTransitionEnd = () => {
                        submenu.style.transform = '';
                        submenu.style.visibility = '';
                        openDetails.classList.remove('menu-opening');
                        openDetails.removeAttribute('open');

                        submenu.removeEventListener('transitionend', handleTransitionEnd);
                    };

                    submenu.addEventListener('transitionend', handleTransitionEnd);
                } else {
                    if (openDetails) {
                        openDetails.classList.remove('menu-opening');
                        openDetails.removeAttribute('open');
                    }
                }
            });
        });
    }
}

loadTestCode();