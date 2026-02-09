function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Homepage')) {
        document.querySelector('body').classList.add('iv-Homepage');

        document.querySelector('.iv-Homepage main .hero-slide').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1761810574/Cefaly/RevampHomepageHero/desktop_BFCM_B.png);');

        document.querySelector('.iv-Homepage main .hero-slide .tablet-bg-container').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1761810573/Cefaly/RevampHomepageHero/tablet_BFCM_B.png);');

        document.querySelector('.iv-Homepage main .hero-slide .mobile-bg-container').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1761810573/Cefaly/RevampHomepageHero/mobile_BFCM_B.png);');
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);