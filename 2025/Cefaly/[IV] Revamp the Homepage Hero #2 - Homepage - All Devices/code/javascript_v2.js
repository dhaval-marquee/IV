function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Homepage')) {
        document.querySelector('body').classList.add('iv-Homepage');

        document.querySelector('.iv-Homepage main .hero-slide').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1765262448/Cefaly/RevampHomepage2/Dpost-bf_A2_v2.jpg);');

        document.querySelector('.iv-Homepage main .hero-slide .tablet-bg-container').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1765262449/Cefaly/RevampHomepage2/Tpost-bf_A2_v2.jpg);');

        document.querySelector('.iv-Homepage main .hero-slide .mobile-bg-container').setAttribute('style','background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1765262449/Cefaly/RevampHomepage2/Mpost-bf_A2_v2.jpg);');
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);