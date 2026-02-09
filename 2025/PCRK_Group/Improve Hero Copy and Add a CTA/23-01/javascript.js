function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-hero')) {
        document.querySelector('body').classList.add('iv-hero');

        const heroTitle = document.querySelector('.inside-article h1');
        if(heroTitle) {
            heroTitle.innerText = 'Join a Growing Wellness Leader';
            const heroContent = `<p>Build a Rewarding Career in Massage, Skincare, and Wellness Services</p> <a href="https://apply.workable.com/pcrk-group/?lng=en" class="iv-hero-btn">View Open Positions</a>`
            heroTitle.insertAdjacentHTML('afterend', heroContent);

            heroTitle.closest('.wp-block-group').classList.remove('mw-600');
            heroTitle.closest('.wp-block-group').classList.add('text-center', 'iv-hero-content');
        }

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);