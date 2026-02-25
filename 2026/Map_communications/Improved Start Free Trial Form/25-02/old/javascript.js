function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-improved-form')) {
        document.querySelector('body').classList.add('iv-improved-form');
        
        // var deptNumber = document.querySelector(".iv-improved-form .contact-page .container > .contact-main.wow");
        // var formElement = document.querySelector(".iv-improved-form .hero-content + .container");

        // if (deptNumber && formElement) {
        //     formElement.insertAdjacentElement("beforeend", deptNumber);
        // }

        var submitBtn = document.querySelector("#gform_submit_button_22");
        if (submitBtn) {
            submitBtn.value = "Start Free Trial";
        }

        var inputs = document.querySelectorAll(
            ".iv-improved-form .gform_legacy_markup_wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])"
        );
        inputs.forEach(function (input) {
            input.removeAttribute("placeholder");
        });

        const inputSelector = '.iv-improved-form .gform_legacy_markup_wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])';

        function handleFloatingLabel(e) {
            if (!e.target.matches(inputSelector)) return;

            const parent = e.target.parentElement; // immediate wrapper
            if (!parent) return;

            if (e.type === 'focusin') {
                parent.classList.add('focused');
            } else {
                parent.classList.toggle('focused', e.target.value !== '');
            }
        }

        ['focusin', 'blur', 'change'].forEach(event => {
            document.addEventListener(event, handleFloatingLabel, true);
        });

        document.addEventListener('click', function (e) {
            const form = document.querySelector('#gform_22');
            const phoneInput = document.querySelector('#input_22_3');

            if (!form.contains(e.target) && phoneInput) {
                const parent = phoneInput.parentElement;

                if (phoneInput.value.trim() === '') {
                parent.classList.remove('focused');
                }
            }
        });

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);