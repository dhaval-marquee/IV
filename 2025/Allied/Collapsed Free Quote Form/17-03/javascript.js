function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quote-form')) {
        document.querySelector('body').classList.add('iv-quote-form');
        
        // Hide fields
        const fieldsToHide = ["#Name", "#Email", "#Phone", "#HasVehicle"];
        fieldsToHide.forEach(selector => {
            document.querySelector(selector).closest("fieldset").style.display = "none";
        });
        const legalText = ['.free-quote-form .legal', '.free-quote-form .legal-sms'];
        legalText.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        // Add new button
        const newButton = `<a href="javascript:;" class="btn btn-primary iv-continue-cta">Continue</a>`;
        const controlButton = document.querySelector('.free-quote .free-quote-form button[type="submit"]');
        if (controlButton) {
            controlButton.style.display = 'none';
            controlButton.insertAdjacentHTML('afterend', newButton);
        }

        // Click event to show hidden fields
        const date = document.querySelector('#MoveDate');
        if(date){
            date.value = '';
        }
        document.querySelector('.iv-continue-cta').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('>>>')

            controlButton.click();
            const movingFrom = document.querySelector('#MovingFromAddress').value.trim();
            const movingTo = document.querySelector('#MovingToAddress').value.trim();
            const dwellingType = document.querySelector('#DwellingType').value.trim();
            const moveDate = document.querySelector('#MoveDate').value.trim();

            if (movingFrom && movingTo && dwellingType && moveDate) {
                // Show the hidden fields
                fieldsToHide.forEach(selector => {
                    document.querySelector(selector).closest("fieldset").style.display = "block";
                });
                legalText.forEach(selector => {
                    document.querySelector(selector).style.display = "block";
                });
                // Remove the "Continue" button
                document.querySelector('.iv-continue-cta').remove();
                controlButton.style.display = 'block';
            }
        });
    }
}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('.free-quote').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
