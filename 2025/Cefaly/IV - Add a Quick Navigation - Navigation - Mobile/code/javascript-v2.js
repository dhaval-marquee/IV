function loadTestCode() {
    if (!document.body.classList.contains('iv-navigation')) {
        document.body.classList.add('iv-navigation');
        document.body.classList.add('iv-navigation-v2');

        document.querySelector('header .nav-bar').insertAdjacentHTML('afterend',`<nav class="nav-links">
            <ul>
                <li><a href="https://www.cefaly.com/product/cefaly-connected">Cefaly<br> Connected</a></li>
                <li><a href="https://www.cefaly.com/product/standard-electrodes">Electrodes</a></li>
                <li><a href="https://www.cefaly.com/product/cefaly-connected-bundle">Cefaly Bundle</a></li>
            </ul>
        </nav>`);

        // Get margin-top with jQuery
        var marginTop = jQuery('.page-wrapper .page-content').css('margin-top');
        var marginTopValue = parseInt(marginTop, 10);
        var newMarginTop = (marginTopValue + 60) + 'px';
        console.log('margin-top:', newMarginTop);
        jQuery('.page-wrapper .page-content').css('margin-top' , newMarginTop);

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
