function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-navigation')) {
        document.querySelector('body').classList.add('iv-navigation');

        document.querySelectorAll('#sidebarWrapper ul li')[0].after(document.querySelector('#sidebarWrapper ul > li:has(a[href="/products"])'))
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