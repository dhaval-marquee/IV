function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-TrialPage')) {
        document.querySelector('body').classList.add('iv-TrialPage');

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
        
        var legalText = ['.trial-form .only-desktop' , '.trial-form .only-mobile'];
        legalText.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });

        // Add new button
        var newButton = `<input class="btn btn-primary continue-cta" value="Continue" type="submit">`;
        var controlButton = document.querySelector('input.gform_button');
        if (controlButton) {
            controlButton.style.display = 'none';
            controlButton.insertAdjacentHTML('beforebegin', newButton);
        }

        document.querySelector('.continue-cta').addEventListener('click', function () {
            var FirstName = document.querySelector('input[placeholder="First Name"]').value.trim();
            var LastName = document.querySelector('input[placeholder="Last Name"]').value.trim();
            var CompanyName = document.querySelector('input[placeholder="Company Name"]').value.trim();
            var PhoneNumber = document.querySelector('input[placeholder="Phone Number"]').value.trim();
            
            if (window.matchMedia("(max-width: 767.98px)").matches) {
                if (FirstName && LastName && CompanyName) {
                    // Show the hidden fields
                    listToHide.forEach(selector => {
                        document.querySelector(selector).closest("li").style.display = "block";
                    });
    
                    var legalText = ['.trial-form .only-mobile'];
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
            } 
            else { 
                if (FirstName && LastName && CompanyName && PhoneNumber) {
                    // Show the hidden fields
                    listToHide.forEach(selector => {
                        document.querySelector(selector).closest("li").style.display = "block";
                    });
    
                    var legalText = ['.trial-form .only-desktop'];
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
            } 
        });
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);