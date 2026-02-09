function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form')) {
        document.querySelector('body').classList.add('iv-form');

        // Observer
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer); 
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }

        var targetElement = document.querySelector('.trial-form');
        observerElm(targetElement, function(mutationsList, observer) {
            // updateLabels();
        });
        window.addEventListener("load", () => {
            updateLabels();
        });
        updateLabels();

        function updateLabels() {
            // Checked Icon
            const checkIcon = `<span class="check-icon"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.73047 10.7812L1.19141 6.24219C0.917969 5.96875 0.917969 5.50391 1.19141 5.23047L2.17578 4.24609C2.44922 3.97266 2.88672 3.97266 3.16016 4.24609L6.25 7.30859L12.8125 0.746094C13.0859 0.472656 13.5234 0.472656 13.7969 0.746094L14.7812 1.73047C15.0547 2.00391 15.0547 2.46875 14.7812 2.74219L6.74219 10.7812C6.46875 11.0547 6.00391 11.0547 5.73047 10.7812Z" fill="#40BD5E"></path>
            </svg></span>`;

            const inputFields = document.querySelectorAll('#gform_22 input');
        
            inputFields.forEach(function(inputField) {
                if (!inputField.nextElementSibling || !inputField.nextElementSibling.classList.contains('check-icon')) {
                    inputField.insertAdjacentHTML('afterend', checkIcon);
                }
            });

            // First and Last name inputs (minimum 2 letters)
            var nameInputs = document.querySelectorAll('#gform_22 .has_first_name.has_last_name input[type="text"]');
            var namePattern = /^[a-zA-Z\s\-]{2,}$/;

            nameInputs.forEach(function(input) {
                function validClass() {
                    if (namePattern.test(input.value.trim())) {
                        if (!input.classList.contains('valid')) {
                            input.classList.add('valid');
                        }
                        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('check-icon')) {
                            input.insertAdjacentHTML('afterend', checkIcon);
                        }
                    } else {
                        if (input.classList.contains('valid')) {
                            input.classList.remove('valid');
                        }
                        if (input.nextElementSibling && input.nextElementSibling.classList.contains('check-icon')) {
                            input.nextElementSibling.remove();
                        }
                    }
                }

                validClass();

                input.addEventListener('keyup', validClass);
                input.addEventListener('click', validClass);
                input.addEventListener('input', validClass);
            });

            // Company name input (minimum 3 letters)
            var companyInput = document.querySelector('input[placeholder="Company Name"]');
            var companyPattern = /^[a-zA-Z\s\-]{3,}$/;

            function companyValidClass() {
                if (companyPattern.test(companyInput.value.trim())) {
                    if (!companyInput.classList.contains('valid')) {
                        companyInput.classList.add('valid');
                    }
                    if (!companyInput.nextElementSibling || !companyInput.nextElementSibling.classList.contains('check-icon')) {
                        companyInput.insertAdjacentHTML('afterend', checkIcon);
                    }
                } else {
                    if (companyInput.classList.contains('valid')) {
                        companyInput.classList.remove('valid');
                    }
                    if (companyInput.nextElementSibling && companyInput.nextElementSibling.classList.contains('check-icon')) {
                        companyInput.nextElementSibling.remove();
                    }
                }
            }

            companyValidClass();

            companyInput.addEventListener('keyup', companyValidClass);
            companyInput.addEventListener('click', companyValidClass);
            companyInput.addEventListener('input', companyValidClass);

            // For Phone number
            var inputsPhone = document.querySelectorAll('#gform_22 input[type="tel"]');
            var telPattern = /^\+?\d{10,}$/;

            inputsPhone.forEach(function(input) {
                function validClass() {
                    if (telPattern.test(input.value.trim())) {
                        if (!input.classList.contains('valid')) {
                            input.classList.add('valid');
                        }
                    } else {
                        if (input.classList.contains('valid')) {
                            input.classList.remove('valid');
                        }
                    }
                }

                validClass();

                input.addEventListener('keyup', validClass);
                input.addEventListener('click', validClass);
                input.addEventListener('input', validClass);
            });

            // For Email
            var inputsEmail = document.querySelectorAll('#gform_22 input[type="email"]');
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

            inputsEmail.forEach(function(input) {
                function validClass() {
                    if (emailPattern.test(input.value.trim())) {
                        if (!input.classList.contains('valid')) {
                            input.classList.add('valid');
                        }
                    } else {
                        if (input.classList.contains('valid')) {
                            input.classList.remove('valid');
                        }
                    }
                }
                validClass();
                input.addEventListener('keyup', validClass);
                input.addEventListener('click', validClass);
                input.addEventListener('input', validClass);
            });

        }
        
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
