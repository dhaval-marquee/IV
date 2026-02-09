function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-LocationsPage')) {
        document.querySelector('body').classList.add('iv-LocationsPage');

        document.querySelectorAll('#section-hero + section .locations-directory .location-wrap a.btn-website')
        .forEach(element => {
            element.textContent = 'View Open Positions';
        });
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
