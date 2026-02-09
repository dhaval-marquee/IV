function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-web-rollout-question')) {
        document.querySelector('body').classList.add('iv-web-rollout-question');

        document.querySelectorAll("#locationsTab .nav-link").forEach(function(el) {
            el.click();
        });

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
            return (headerSearch?.offsetHeight || 0) +
                (pssNavbar?.offsetHeight || 0) +
                (bottomHeaderNav?.offsetHeight || 0);
        }

        // Function to update active link based on scroll
        function updateActiveLink() {
            const allHeaderHeight = getAllHeaderHeight();
            let current = null;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop <= allHeaderHeight && sectionTop >= -section.offsetHeight + allHeaderHeight) {
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
                }
            });
        });

        // Run on scroll
        window.addEventListener("scroll", updateActiveLink);
        // Run once on load
        window.addEventListener("load", updateActiveLink);
    }
}

if (document.querySelectorAll('body').length > 0) {
    loadTestCode();
}
