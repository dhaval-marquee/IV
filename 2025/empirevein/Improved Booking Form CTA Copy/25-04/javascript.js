function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-booking-form-cta')) {
        document.querySelector('body').classList.add('iv-booking-form-cta');

        
        const ivFormCtaButton = document.querySelector('.page-template-page-book-online #cid_2 button.submit-button');
        if (ivFormCtaButton) {
            ivFormCtaButton.innerText = 'Book a Free Consult or Learn More';
        }

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && document.querySelector('.page-template-page-book-online #cid_2 button.submit-button')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
