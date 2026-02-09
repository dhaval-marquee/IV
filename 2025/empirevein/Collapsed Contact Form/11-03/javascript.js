function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form-contact')) {
        document.querySelector('body').classList.add('iv-form-contact');

        // Input fields
        const requiredFields = ['q8_firstName', 'q9_lastName', 'q10_email', 'q12_phoneNumber[full]'];
        const additionalFields = ['q26_chooseYour', 'q13_haveYou', 'q34_preferredLanguage', 'q37_message'];
        const submitButtonSelector = '.iv-form-contact form .form-section .form-submit-button#input_2';

        // Hide additional fields and submit button by default
        additionalFields.forEach(name => {
            let fieldContainer = document.querySelector(`.iv-form-contact form .form-section [name="${name}"]`).closest('li');
            if(fieldContainer){
                fieldContainer.style.display = 'none';
                fieldContainer.style.opacity = '0';
            }
        });
        let submitButton = document.querySelector(submitButtonSelector);
        if(submitButton){
            submitButton.style.opacity = '0';
            submitButton.style.display = 'none';
            submitButton.style.transition = 'opacity 0.5s ease-in-out';
        }

        // Remove default required attributes
        requiredFields.forEach(name => {
            let field = document.querySelector(`.iv-form-contact form .form-section [name="${name}"]`);
            if (field) {
                field.removeAttribute('required');
            }
        });

        // New CONTINUE button
        const continueBtnHTML = `<button type="button" class="submit-button form-submit-button iv-continue">CONTINUE</button>`;
        const submitButtonContainer = document.querySelector('.iv-form-contact form .form-section li #cid_2 button[type="submit"]');

        // CONTINUE button functionality for the default input fields
        if (!document.querySelector('.iv-continue')) {
            submitButtonContainer.insertAdjacentHTML('afterend', continueBtnHTML);

            const ivContinueBtn = document.querySelector('.iv-continue');
            ivContinueBtn.addEventListener('click', () => {
                let allFilled = true;
                let firstEmptyField = null;
                
                requiredFields.forEach(name => {
                    let field = document.querySelector(`.iv-form-contact form .form-section [name="${name}"]`);
                    if (field && field.value.trim() === '' && !firstEmptyField) {
                        firstEmptyField = field;
                    }
                });

                if (firstEmptyField) {
                    allFilled = false;
                    firstEmptyField.focus();
                    firstEmptyField.reportValidity();
                }

                if (allFilled) {
                    additionalFields.forEach(name => {
                        let fieldContainer = document.querySelector(`.iv-form-contact form .form-section [name="${name}"]`).closest('li');
                        fieldContainer.style.display = 'block';
                        setTimeout(() => {
                            fieldContainer.style.opacity = '1';
                        }, 10);
                    });
                    
                    submitButton.style.display = 'block';
                    setTimeout(() => {
                        submitButton.style.opacity = '1';
                    }, 10);
                    
                    ivContinueBtn.style.display = 'none';
                    
                    // Remove event listener and script once fields are displayed
                    ivContinueBtn.remove();
                }
            });
        }
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && document.querySelector('.form-section')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
