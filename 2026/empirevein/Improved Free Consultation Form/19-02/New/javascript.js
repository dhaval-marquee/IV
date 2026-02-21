function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-hero-form')) {
        document.querySelector('body').classList.add('iv-hero-form');

        const form = document.querySelector('.form-all .form-section');

        if (form) {
            form.insertAdjacentHTML('afterbegin', `<h2 class="iv-form-heading">Book a Free Consultation<br> with No Obligation</h2>`);

            function changeButtonText() {
                const submit = form.querySelector(`button[type="submit"]`);
                if (window.innerWidth > 767) {
                    if (submit && submit.innerText != 'Book a Free Consult or Just Learn More') {
                        submit.innerText = 'Book a Free Consult or Just Learn More';
                    }
                } else {
                    if (submit && submit.innerText != 'Book a Free Consultation') {
                        submit.innerText = 'Book a Free Consultation';
                    }
                }
            }
            changeButtonText();

            window.addEventListener('resize', changeButtonText);
        }
    }
}
var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && document.querySelector('.form-all .form-section')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);