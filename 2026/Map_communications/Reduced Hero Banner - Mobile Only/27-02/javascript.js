function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivHeroBanner')) {
        document.querySelector('body').classList.add('ivHeroBanner');
        document.querySelectorAll('body main .home-banner picture > source')[0].setAttribute('srcset','https://www.mapcommunications.com/wp-content/uploads/2025/07/home-banner.webp');
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);