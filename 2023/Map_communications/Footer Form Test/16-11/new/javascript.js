function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('form_iv')) {
        bodyEle.classList.add('form_iv');

        var formWrapper = document.querySelector('.form_iv .contact-form, .form_iv .start-trial-section');

        function formData() {
            var firstGFieldLabel = formWrapper.querySelector('.gform_fields .gfield:first-child .gform-field-label');

            if (firstGFieldLabel) {
                firstGFieldLabel.innerHTML = `First Name <span class="gfield_required gfield_required_asterisk">*</span>`;
            }

            var labels = formWrapper.querySelectorAll('.gform_fields .gfield .gform-field-label');

            labels.forEach(function(label) {
                var nextSibling = label.nextElementSibling;
                if (nextSibling && nextSibling.tagName.toLowerCase() === 'div') {
                    var input = nextSibling.querySelector('input');
                    if (input) {
                        input.placeholder = label.textContent.trim();
                    }
                }
            });

            var submitButton = formWrapper.querySelector('.gform_button');
            if (submitButton) {
                submitButton.value = 'Learn More!';
            }

        }
        
        formData();

        formWrapper.addEventListener('click', function(event) {
            if (event.target && event.target.matches('.gform_button')) {
                console.log('workinggggg')
                var i;
                var submitReset = setInterval(() => {
                    formData();
                    i++
                    if(i == 50) {
                        clearInterval(submitReset);
                    }
                }, 100);
            }
        });


        var formWrap = formWrapper.querySelector('.wrap');
        var formWrapChildren = Array.from(formWrap.children);

        var touchFormWrap = document.createElement('div');
        touchFormWrap.className = 'touch-form-wrap';

        var touchFormRight = document.createElement('div');
        touchFormRight.className = 'touch-form-right';

        formWrapChildren.forEach(function (child) {
            touchFormRight.appendChild(child);
        });

        touchFormWrap.appendChild(touchFormRight);
        formWrap.appendChild(touchFormWrap);

        var touchFormWrap = formWrapper.querySelector('.touch-form-wrap');

        var touchFormLeft = document.createElement('div');
        touchFormLeft.className = 'touch-form-left';

        touchFormLeft.innerHTML = `
            <h1>Get a Custom Quote or Just Learn More!</h1>
            <p>Stay connected to every customer and get the most out of every phone call with our risk-free trial</p>
            <ul>
                <li>Free 7 Day Trial - No Credit Card Required</li>
                <li>24/7 Call Answering</li>
                <li>100% US Based</li>
            </ul>`;

        touchFormWrap.insertBefore(touchFormLeft, touchFormWrap.firstChild);
    }
}

loadTestCode();