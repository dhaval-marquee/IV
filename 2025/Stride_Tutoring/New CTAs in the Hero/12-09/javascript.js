function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-tutor-steps')) {
        document.querySelector('body').classList.add('iv-tutor-steps');

        let updated = false;

        document.querySelectorAll('#ajax-content-wrap div h2').forEach(function (h2) {
            if (updated) return;

            const text = h2.textContent.trim();

            if (text.length > 0) {
                h2.parentElement.classList.add('iv-heading');

                const parentCol = h2.closest('.vc_col-sm-6');
                if (parentCol) {
                    parentCol.classList.add('iv-main-sec');
                    parentCol.classList.remove('vc_col-sm-6');
                    parentCol.classList.add('vc_col-sm-12');
                }

                const wrapper = document.querySelector('.iv-main-sec .inner_row:nth-child(2) .vc_column-inner .wpb_wrapper');
                if (wrapper) {
                    const buttons = wrapper.querySelectorAll('a.nectar-button');

                    if (buttons.length >= 2) {
                        buttons[0].setAttribute('href', 'https://book.tutoring.k12.com/');
                        buttons[0].querySelector('span').textContent = 'Explore Tutors';
                        buttons[0].classList.add('explore-tutors');

                        buttons[1].setAttribute('href', 'https://book.tutoring.k12.com/tutor/striders-choice?SessionTime=60+Min&rd=true');
                        buttons[1].querySelector('span').textContent = 'Help Me Find a Tutor';
                        buttons[1].classList.add('help-me-find');
                    }
                }

                updated = true;
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
}, 500);