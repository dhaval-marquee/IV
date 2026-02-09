function loadTestCode() {
    if (!jQuery('body').hasClass('iv-TrialPage')) {
        jQuery('body').addClass('iv-TrialPage');

        var listToHide = [];
        // Hide fields
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            // Hide fields
            var listToHide = ['input[placeholder="Email"]', ".gfield--input-type-checkbox", ".gfield--type-captcha",'input[placeholder="Phone Number"]'];
            listToHide.forEach(selector => {
                document.querySelector(selector).closest("li").style.display = "none";
            });
        } else {
            // Hide fields
            var listToHide = ['input[placeholder="Email"]', ".gfield--input-type-checkbox", ".gfield--type-captcha"];
            listToHide.forEach(selector => {
                document.querySelector(selector).closest("li").style.display = "none";
            });
        }
        
        
        
        const legalText = ['.trial-form .only-desktop'];
        legalText.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });

        // Add new button
        const newButton = `<input class="btn btn-primary continue-cta" value="Continue" type="submit">`;
        const controlButton = document.querySelector('input.gform_button');
        if (controlButton) {
            controlButton.style.display = 'none';
            controlButton.insertAdjacentHTML('beforebegin', newButton);
        }

        document.querySelector('.continue-cta').addEventListener('click', function () {
            const FirstName = document.querySelector('input[placeholder="First Name"]').value.trim();
            const LastName = document.querySelector('input[placeholder="Last Name"]').value.trim();
            const CompanyName = document.querySelector('input[placeholder="Company Name"]').value.trim();
            const PhoneNumber = document.querySelector('input[placeholder="Phone Number"]').value.trim();
            

            if (FirstName && LastName && CompanyName && PhoneNumber) {
                // Show the hidden fields
                listToHide.forEach(selector => {
                    document.querySelector(selector).closest("li").style.display = "block";
                });

                const legalText = ['.trial-form .only-desktop'];
                legalText.forEach(selector => {
                    document.querySelector(selector).style.display = "block";
                });

                // Remove the "Continue" button
                document.querySelector('.continue-cta').remove();
                controlButton.style.display = 'inline-block';

                document.querySelectorAll('.gfield_error').forEach(function(element) {
                    element.classList.remove('gfield_error');
                });
                document.querySelectorAll('.gform_validation_error').forEach(function(element) {
                    element.classList.remove('gform_validation_error');
                });
                
                
            }
        });

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);