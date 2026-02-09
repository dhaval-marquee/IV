function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-tutor-steps')) {
        document.querySelector('body').classList.add('iv-tutor-steps');

        document.querySelectorAll('#ajax-content-wrap div h2').forEach(function (h2) {
            if (h2.textContent.trim().startsWith('Online Tutoring for')) {
                h2.parentElement.classList.add('iv-heading');
            
                h2.closest('.vc_col-sm-6').classList.add('iv-main-sec');

                const wrapper = document.querySelector('.iv-main-sec .inner_row:nth-child(2) .vc_column-inner .wpb_wrapper');
                if (wrapper) {
                    wrapper.innerHTML = '';
                    const ctaButton = document.createElement('a');
                    ctaButton.className = 'nectar-button large regular wide-ass-buttons explore-tutors';
                    ctaButton.setAttribute('href', 'https://book.tutoring.k12.com/');
                    ctaButton.innerHTML = '<span>Explore Tutors</span>';

                    wrapper.appendChild(ctaButton);
                }

            }
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