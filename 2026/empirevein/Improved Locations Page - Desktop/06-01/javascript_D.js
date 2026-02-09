function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-locationsPage')) {
        document.querySelector('body').classList.add('iv-locationsPage');

        var freeLink = document.querySelector('header .desktop-mainnav-wrapper .menu-item-object-locations > .nav-link');
        if (freeLink) {
            freeLink.innerHTML = 'Free Consult';
            freeLink.setAttribute('href','/en/book-online/');
        }

        var findLink = document.querySelector('header div > .bookfree-link > .nav-link');
        if (findLink) {
            findLink.innerHTML = 'Find A Location';
            findLink.setAttribute('href','/en/locations/');
        }

        document.querySelectorAll('.iv-locationsPage #maincontainer ul.locations_list li .__btn a.btn-screen').forEach(function(btn) {
            btn.insertAdjacentHTML('afterend', '<a href="/en/book-online/" class="btn btn-LearnMore">Learn More</a>');
        });

    }
}

// Load code just for desktop 
if (window.matchMedia("(min-width: 768px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for desktop over
