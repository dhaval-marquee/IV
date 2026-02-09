function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-HeroCTA')) {
        document.querySelector('body').classList.add('iv-HeroCTA');

        document.querySelector('.iv-HeroCTA .first-section .nectar-cta  a.link_text').setAttribute('href','https://book.tutoring.k12.com/quick-find');

        document.querySelectorAll('.iv-HeroCTA .inherit_phone a.nectar-button').forEach(function(e) {
            e.setAttribute('href', 'https://book.tutoring.k12.com/quick-find');
        });
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);