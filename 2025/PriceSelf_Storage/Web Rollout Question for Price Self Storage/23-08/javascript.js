function defultClick() {
    document.querySelectorAll("#locationsTab .nav-link").forEach(function(el) {
        el.click();
    });
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-web-rollout-question')) {
        document.querySelector('body').classList.add('iv-web-rollout-question');

        // Create bottom header navigation dynamically
        const bottomHeaderNav = `
            <nav class="bottom-header-nav">
                <div class="main-heading">Facility Details:</div>
                <ul>
                    <li><a href="#units" class="active">Units</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#video">Video Tour</a></li>
                    <li><a href="#areas">Areas Served</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                </ul>
            </nav>
        `;

        // Inject into #plnNavBar
        document.querySelector("#plnNavBar").insertAdjacentHTML("beforeend", bottomHeaderNav);

        const navLinks = document.querySelectorAll(".bottom-header-nav a");
        const sections = Array.from(navLinks).map(link => {
            const id = link.getAttribute("href");
            return document.querySelector(id);
        });

        // Function to calculate total header height
        function getAllHeaderHeight() {
            const header = document.querySelector("#plnNavBar");
            const headerSearch = header?.querySelector('.pss-navbar-with-search');
            const pssNavbar = header?.querySelector('.pss-navbar');
            const bottomHeaderNav = header?.querySelector('.bottom-header-nav');

            let height = 0;

            if (window.innerWidth <= 1199) {
                // For <=1199px: skip headerSearch
                height += (pssNavbar?.offsetHeight || 0) +
                    (bottomHeaderNav?.offsetHeight || 0);
            } else {
                // For >1199px: use pssNavbar + bottomHeaderNav
                height += (headerSearch?.offsetHeight || 0) +
                    (bottomHeaderNav?.offsetHeight || 0);
            }

            return height;
        }


        // Function to update active link based on scroll
        function updateActiveLink() {
            const allHeaderHeight = getAllHeaderHeight();
            const targetEl = document.querySelector('.iv-web-rollout-question .pss-facility__content-info');
            if (targetEl) {
                targetEl.style.top = `${allHeaderHeight + 10}px`;
            }

            let current = null;
            const scrollPos = window.scrollY + allHeaderHeight + 1; // +1 avoids overlap glitches

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        current = navLinks[index];
                    }
                }
            });

            if (current) {
                navLinks.forEach(link => link.classList.remove("active"));
                current.classList.add("active");
            }
        }


        // Smooth scroll on click with header offset
        navLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                const allHeaderHeight = getAllHeaderHeight();

                if (targetSection) {
                    const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: sectionTop - allHeaderHeight,
                        behavior: "smooth"
                    });

                    // ✅ Immediately update active link
                    navLinks.forEach(l => l.classList.remove("active"));
                    this.classList.add("active");
                }
            });
        });


        // Run on scroll
        window.addEventListener("scroll", updateActiveLink);
        // Run once on load
        window.addEventListener("load", updateActiveLink);
        // Recheck on resize
        window.addEventListener("resize", updateActiveLink);

        (function waitUntilReady() {
            const selectors = [
                ['#features > .facilities-features', 'Features'],
                ['#video > .video-wrapper', 'Video Tour'],
                ['#areas > .facilities-areas-served', 'Areas Served'],
                ['#reviews > div', 'Reviews']
            ];

            // Check if all selectors exist
            if (selectors.every(([sel]) => document.querySelector(sel))) {
                selectors.forEach(([selector, title]) => {
                    document.querySelectorAll(selector).forEach(el =>
                        el.insertAdjacentHTML('beforebegin', `<h3 class="section-title">${title}</h3>`)
                    );
                });
            } else {
                // Retry until they load
                setTimeout(waitUntilReady, 100);
            }
        })();

        const fc = document.querySelector('.pss-facility__content');
        if (!fc) return;

        const firstRow = fc.querySelector(':scope > .row:first-child');
        const lastRow = fc.querySelector(':scope > .row:last-child');
        const nearby = document.querySelector('#MainContent_pnlNearbyLocations');
        const loc = document.querySelector('.locationContent');

        if (firstRow && lastRow && nearby && loc) {
            const wrap = document.createElement('div');
            wrap.className = 'custom-wrapper pss-navigation-tabs';

            // direct children only: .locationContent > div
            const directDivs = loc.querySelectorAll(':scope > div');

            // build in order: nearby -> lastRow -> all divs except the first
            wrap.append(nearby, lastRow, ...Array.from(directDivs).slice(1));

            // insert after the first row
            firstRow.after(wrap);
        }
    }
}

if (document.querySelectorAll('body').length > 0) {
    loadTestCode();
    defultClick()
}
defultClick();