var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('form_test')) {
    bodyEle.classList.add('form_test');
    
    document.querySelector('#contact #contactForm button').innerText = 'Submit Request';
    document.querySelector('#contact #contactForm button').parentNode.classList.add('text-center','w-100');

    var url = window.location.href;
        url = url.split( '?' )[0];
        url = url.split( '#' )[0];

    if (url == "https://www.experian.com/healthcare/products/patient-access-registration/practice-management-system-ecare-next"){  

        document.querySelector('#contact h2').textContent = 'Patient Workflow Automation Made Easy';
        document.querySelector('#contact .form-description').textContent = 'Complete the form below to learn how we can help you automate your patient pre-registration workflow while improving your patients\' experience!';

    } else if (url == "https://www.experian.com/healthcare/products/payment-tools/online-patient-appointment-scheduling"){  
        document.querySelector('#contact h2').textContent = 'Automated Patient Scheduling Made Easy';
        document.querySelector('#contact .form-description').textContent = 'Complete the form below to learn how we can help you automate your patient scheduling workflow while increasing completion rates!';

    } else if (url == "https://www.experian.com/healthcare/products/claims-management/claimsource-insurance-claims-manager"){  

        document.querySelector('#contact h2').textContent = 'Automate Clean Claims. Decrease Claim Denials.';
        document.querySelector('#contactForm').insertAdjacentHTML('beforebegin','<div class="form-description">Complete the form below to learn how we can help you automate your clean claim submissions while decreasing your claim denial rates!</div>');
    }
}