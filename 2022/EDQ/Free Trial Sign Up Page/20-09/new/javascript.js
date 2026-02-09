function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_copy_iv')) {
        bodyEle.classList.add('hero_copy_iv');
        
        // Put your test code here
        $('.hero_copy_iv form[name="dv-free-trial-registration-form"]').closest('.tab-pane').addClass('data_validation');
        $('.data_validation main h2').text('Get started in minutes. No credit card required.');
        $('.data_validation main ul').html(`
            <li>14 day full access to our data validation tools</li>
            <li>2000 free address, email, and phone data validations</li>
            <li>Interactive tutorials that get you set up quickly for easy onboarding</li>
        `);

        $('.data_validation form h2').text('Start using data validation for free');
        $('.data_validation form h3').text('Sign up below to get started');
        $('.data_validation form .dv-form-actions button').text('Get Started');



        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

loadTestCode();

setTimeout(() => {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}, 3000);

