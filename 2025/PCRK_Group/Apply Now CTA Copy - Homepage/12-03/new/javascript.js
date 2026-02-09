function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-homepage')) {
        document.querySelector('body').classList.add('iv-homepage');

        document.querySelector('header a.header-button').textContent = 'Apply Now';
        document.querySelector('#mobile-header a.header-button').textContent = 'Apply Now';
        document.querySelector('#section-hero a.gb-button').textContent = 'Apply Now';
        document.querySelector('#section-hero a.gb-button').classList.add('iv-hero-btn');
        document.querySelector('#section-hero + section  a.gb-button + a.gb-button ').textContent = 'Apply Now';

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);