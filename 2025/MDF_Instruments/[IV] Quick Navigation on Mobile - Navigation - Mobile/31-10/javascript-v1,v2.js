function loadTestCode() {
    if (!document.body.classList.contains('iv-navigation')) {
        document.body.classList.add('iv-navigation');

        // Target element (header height observer)
        var headerElement = document.querySelector('header height-observer');
        if (!headerElement) return;

        // Insert navigation after header height observer
        headerElement.insertAdjacentHTML('afterend', `
            <nav class="nav-links">
                <ul>
                    <li><a href="https://mdfinstruments.com/collections/best-selling-stethoscopes">Best Selling</a></li>
                    <li><a href="https://mdfinstruments.com/collections/mdf-instruments-top-rated-products">Top Rated</a></li>
                    <li><a href="https://mdfinstruments.com/collections/new-arrivals">New Arrivals</a></li>
                </ul>
            </nav>
        `);

        var pageHeader = document.querySelector('header height-observer');
        var navContainer = document.querySelector('header .nav-links');

        // Function to update margin
        function setHeaderHeight() {
            var headerHeight = pageHeader?.offsetHeight || 0;
            navContainer?.setAttribute('style', `margin-top: ${headerHeight}px`);
        }

        setHeaderHeight();
        window.addEventListener('scroll', setHeaderHeight);

        // Add Resize + Intersection Observer
        var resizeObserver = new ResizeObserver(() => {
            setHeaderHeight();
        });

        resizeObserver.observe(pageHeader);

        // Optional: If you also want to react to intersection changes (visibility)
        var intersectionObserver = new IntersectionObserver(() => {
            setHeaderHeight();
        });
        intersectionObserver.observe(pageHeader);
    }
}

// Load code just for mobile
if (window.matchMedia("(max-width: 767.98px)").matches) {
    loadTestCode();

    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function () {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
