function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-HomeFormPage')) {
        document.querySelector('body').classList.add('iv-HomeFormPage');

        document.querySelector('.iv-HomeFormPage header .header-nav-sign-up a').textContent = 'Get Started';
        document.querySelector('.iv-HomeFormPage header .header-nav-mobile-menu-sign-up a').textContent = 'Get Started';
        
        var span = document.querySelector('.iv-HomeFormPage main .post-content a[href="/sign-me-up/"] span');
        if (span) {
        span.textContent = 'Get Started';
        }

        const signMeUpText = document.querySelector('.iv-HomeFormPage main .post-content h1 p');
            if (signMeUpText) {
            signMeUpText.innerHTML = signMeUpText.innerHTML.replace('Sign up for', 'Get Started with');
        }
    }
}

// Wait for body then load form
const checkConditionBody = setInterval(() => {
    if (document.querySelector('body')) {
        clearInterval(checkConditionBody);
        loadTestCode();
    }
}, 100);