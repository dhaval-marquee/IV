function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-navigation-cta')) {
        document.querySelector('body').classList.add('iv-navigation-cta');
        
        const ctaCopy = `Sign up for free`;
        
        document.querySelector('.iv-navigation-cta .header-nav-sign-up a').innerText = ctaCopy;
        document.querySelector('.iv-navigation-cta .header-nav-mobile-menu-sign-up a').innerText = ctaCopy;
        document.querySelector('.post-content h1').closest('.fusion-column-wrapper').classList.add('hero-section');

        document.querySelectorAll('.hero-section a').forEach(function(cta) {
            if (cta.querySelector('span').innerText === 'Sign me up') {
                cta.querySelector('span').innerText = ctaCopy;
                cta.classList.add('sign-free')
            }
        });
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);