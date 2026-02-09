function loadTestCode() {
    const tag = 'mobile-menu';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        document.querySelector(".menu-content #menu-mobile-menu").style.display = "none"
        const menuArrow = ` <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7069 11.2128C12.0964 10.8188 12.0964 10.1822 11.7069 9.78722L2.46189 0.427512C1.89956 -0.142504 0.984649 -0.142504 0.42132 0.427512C-0.14101 0.997527 -0.14101 1.92265 0.42132 2.49267L8.3299 10.5005L0.42132 18.5063C-0.14101 19.0774 -0.14101 20.0025 0.42132 20.5725C0.984649 21.1425 1.89956 21.1425 2.46189 20.5725L11.7069 11.2128Z" fill="black"/>
                        </svg>`
        const menu = `<nav>
            <ul id="mainMenu" class="menu">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about/" class="submenu-trigger" data-submenu="aboutSubMenu">About</a>
                    <a href="javascript:;" class="arrow">${menuArrow}</a>
                </li>
                <li>
                    <a href="/coaches/">Coaches</a>
                </li>
                <li>
                    <a href="/services/" class="submenu-trigger" data-submenu="servicesSubMenu">Services</a>
                    <a href="javascript:;" class="arrow">${menuArrow}</a>
                </li>
                <li>
                    <a href="/results/">Results</a>
                </li>
                <li>
                    <a href="/blog/">Blog</a>
                </li>
                <li>
                    <a href="/contact/" class="submenu-trigger" data-submenu="contactSubMenu">Contact</a>
                    <a href="javascript:;" class="arrow">${menuArrow}</a>
                </li>
            </ul>

            <ul id="aboutSubMenu" class="menu sub-menu">
                <li>
                    <a href="#" class="back-trigger" data-mainmenu="mainMenu"><span class="arrow">${menuArrow}</span> <span class="back">Back</span></a>
                </li>
                <li><a href="/our-story/">Our Story</a></li>
                <li><a href="/our-facility/">Our Facility</a></li>
                <li><a href="/our-partnerships/">Our Partnerships</a></li>
            </ul>

            <ul id="servicesSubMenu" class="menu sub-menu">
                <li>
                    <a href="#" class="back-trigger" data-mainmenu="mainMenu"><span class="arrow">${menuArrow}</span> <span class="back">Back</span></a>
                </li>
                <li><a href="/custom/">Custom</a></li>
                <li><a href="/online-partnership/">Online Training</a></li>
                <li><a href="/gym-access/">24/7 Gym Access</a></li>
                <li><a href="/personal-training/">Personal Training</a></li>
                <li><a href="/classes/">Small Group Classes</a></li>
                <li><a href="/nutritional-counseling/">Nutritional Counseling</a></li>
            </ul>

            <ul id="contactSubMenu" class="menu sub-menu">
                <li>
                    <a href="#" class="back-trigger" data-mainmenu="mainMenu"><span class="arrow">${menuArrow}</span> <span class="back">Back</span></a>
                </li>
                <li><a href="/join-our-team/">Join Our Team</a></li>
                <li><a href="/contact/">Contact</a></li>
                <li><a href="/apply/">apply</a></li>
            </ul>
        </nav>`;

        document.querySelector(".menu-content .center").insertAdjacentHTML("beforeend", menu);

        document.querySelectorAll('.arrow').forEach(function(arrow) {
            arrow.addEventListener('click', function(event) {
                // Find the parent li element
                var parentLi = this.closest('li');
                if (parentLi) {
                    var submenuId = parentLi.querySelector('.submenu-trigger').getAttribute('data-submenu');
                    if (submenuId) {
                        showSubMenu(event, submenuId);
                    }
                }
            });
        });
        const currentURL = window.location.pathname;
        const menuItems = document.querySelectorAll('.mobile-menu nav a');
    
        menuItems.forEach(item => {
            if (item.getAttribute('href') === currentURL) {
                item.classList.add('active');
            }
        });
          

        document.querySelectorAll('.back-trigger').forEach(function(item) {
            item.addEventListener('click', function(event) {
                showMainMenu(event, this.getAttribute('data-mainmenu'));
            });
        });

        function showSubMenu(event, subMenuId) {
            event.preventDefault();
            document.querySelector('.menu#mainMenu').style.display = 'none';
            document.querySelector('.menu#' + subMenuId).style.display = 'block';
        }

        function showMainMenu(event, mainMenuId) {
            event.preventDefault();
            document.querySelectorAll('.menu.sub-menu').forEach(function(subMenu) {
                subMenu.style.display = 'none';
            });
            document.querySelector('.menu#' + mainMenuId).style.display = 'block';
        }

    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 750.98px)").matches) {
    var waitForHeader = setInterval(() => {
        if (document.querySelector('header')) {
            clearInterval(waitForHeader);
            loadTestCode();
        }
    }, 200);
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 751px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 750.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over