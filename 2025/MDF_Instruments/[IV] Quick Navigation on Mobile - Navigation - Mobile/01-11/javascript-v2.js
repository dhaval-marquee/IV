function loadTestCode() {
    if (!document.body.classList.contains('iv-navigation')) {
        document.body.classList.add('iv-navigation');

        document.querySelector('header height-observer').insertAdjacentHTML('afterend',`<nav class="nav-links">
            <ul>
                <li><a href="https://mdfinstruments.com/collections/procardial-stethoscope-series">ProCardial</a></li>
                <li><a href="https://mdfinstruments.com/collections/md-one-stethoscope">MD One</a></li>
                <li><a href="https://mdfinstruments.com/collections/the-mprints-collection">MPrints</a></li>
            </ul>
        </nav>`);

        var pageHeader = document.querySelector('header height-observer');
        var zipCodeContainer = document.querySelector('header .nav-links');

        function setHeaderHeight() {
            var headerHeight = pageHeader?.offsetHeight;
            zipCodeContainer?.setAttribute('style', `margin-top: ${headerHeight}px`);
        }

        setHeaderHeight();
        window.addEventListener('scroll', setHeaderHeight);

    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over
