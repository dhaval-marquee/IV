function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('contract_form')) {
        bodyEle.classList.add('contract_form');
        
        // Put your test code here
        document.querySelectorAll('#contact h2')[0].innerHTML = 'Healthcare Contract Management <br> Made Easy';
        document.querySelector('.form-wrapper').insertAdjacentHTML('afterBegin', `<p class="text-center"><b>Complete the form below to learn more about how we can help you:</b></p>
        <ul>
            <li class="w-50">Audit Payer Performance</li>
            <li class="w-50">Monitor Reimbursement Accuracy</li>
            <li class="w-50">Collect Underpayments</li>
            <li class="w-50">Manage Appeals</li>
            <li class="w-50">Negotiate Better Terms</li>
            <li class="w-50">Prevent Payment Delays</li>
        </ul>`);

        var formLoad = setInterval(() => {
            if(document.querySelectorAll('.contract_form form#contactForm .form-group button.btn').length > 0) {
                clearInterval(formLoad);

                document.querySelector('.contract_form form#contactForm .form-group button.btn').parentElement.classList.add('button_row');
                document.querySelector('.contract_form form#contactForm .form-group.text-area').classList.add('d-none');
        
                if(document.querySelector('#recaptcha').innerHTML == '') {
                    document.querySelector('#recaptcha').parentElement.classList.add('mb-0');
                }
            }
        }, 100);
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over