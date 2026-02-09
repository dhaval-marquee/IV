function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-navigation')) {
        document.querySelector('body').classList.add('iv-navigation');

        document.querySelector('header height-observer').insertAdjacentHTML('afterend', `<nav class="nav-links">
            <ul>
                <li><a href="https://mdfinstruments.com/collections/best-selling-stethoscopes">Best Selling</a></li>
                <li><a href="https://mdfinstruments.com/collections/mdf-instruments-top-rated-products">Top Rated</a></li>
                <li><a href="https://mdfinstruments.com/collections/gift-guide">Gift Shop</a></li>
            </ul>
        </nav>`);

        function updateTop() {
            const header = document.querySelector('.shopify-section--header');
            const toolbar = document.querySelector('[variable="collection-toolbar"]');

            if (header && toolbar) {
                toolbar.style.top = header.getBoundingClientRect().height + "px";
            }
        }

        updateTop();
        window.addEventListener("scroll", updateTop);
        window.addEventListener("resize", updateTop);
    }
}
// Load code just for mobile
if (window.matchMedia("(max-width: 767.98px)").matches) {
    var checkBody = setInterval(() => {
        if(document.querySelectorAll('header height-observer').length) {
            clearInterval(checkBody);
            loadTestCode();
        }
    }, 100);

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
